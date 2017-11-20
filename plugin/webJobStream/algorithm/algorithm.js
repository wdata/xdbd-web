/**
 * Created by qiangxl on 2017/11/8.
 */
$(function() {
  bind_saveJobStream();
  setVal();
  var enName = '';
  var algparam = $('.alg_param').find('input').val();
  $('#ele_arithmetic').trigger('change');

  function bind_saveJobStream() {
    $('.saveJobStream').click(function(){
      var reg = /\S/;
      if(reg.test(algparam)) {
        fn_save(getVal());
        this_data[this_actionCompId] = getVal();
      } else {
        layer.msg('不能为空')
      }
    });
  }

  function getVal() {
    var data = {};
    data = {
      "action": {
        "actionId": $('#ele_genre').val(),
        "type": "algorithm",
        "name": $('.alg_task').val(),
        "spark": {
          "xmlns": "",
          "jobtracker": "",
          "namenode": "",
          "master": "",
          "name": "",
          "clazz": "",
          "jar": "",
          "sparkopts": "",
          "arg": [
            {"bizId":$('#ele_genre').val()},
            {"inputPath":""},
            {"user_id":this_userId},
            // {"num":1},
            // {"loopnum":bind_param()},
            {"remarkName":$('.alg_remark').val()},
            {"enName": enName}
          ]
      },
      "ok": "",
        "error": ""
    },
      "type": "algorithm"
    };
    console.log(data);
    $.each($('.alg_param'),function() {
      data.action.spark.arg.push(JSON.parse('{'+JSON.stringify($(this).find('.th').text())+':'+JSON.stringify($(this).find('input').val())+'}'))
    });
    return data;
    };

  function bind_change_arithmetic() {
    // console.log(this_algParam)
    $('#ele_arithmetic').change(function() {
      var this_val = $(this).val();
      $.each(this_remarkName,function() {
        if(this.id == this_val) {
          $('.alg_remark').val(this.remark);
        }
      })
      $.each(this_enName,function() {
        if(this.id = this_val) {
          enName = this.enName;
        }
      })
      $.each(this_algParam,function(index,item) {
        var html;
        if(item.id == this_val) {
          $('.alg_param').remove();
          $.each(item.algParam,function(index,item) {
            //console.log(item)
            for(var key in item) {
              html +=`
            <tr class="alg_param">
                <td class="th">${key}</td>
                <td><input type="text" class="manage" value="${item[key]}" onkeyup="this.value=this.value.replace(/[^0-9]/g,'')" placeholder="请输入数字"/></td>
            </tr>
            `
            }
          })
        }
        $(".alg").append(html)
      })
    })
  }
  var num;
  function setVal() {
    console.log(this_actionComp)
    $('.alg_task').val(this_actionCompName);

    if(this_actionComp.action.actionId != '') {
      $("#ele_genre").val(this_actionComp.action.actionId);
      $('.alg_remark').val(this_actionComp.action.spark.arg[3].remarkName);
      var algNum = this_actionComp.action.spark.arg.slice(5);
      console.log(algNum)
      $.each(algNum,function(index,item) {
        for (var key in item) {
          num += `
              <tr class="alg_param">
                    <td class="th">${key}</td>
                    <td><input type="text" class="manage" value="${item[key]}" onkeyup="this.value=this.value.replace(/[^0-9]/g,'')" placeholder="请输入数字"/></td>
              </tr>
              `
        }
      })
      $(".alg").append(num)
    }else {
        bind_change_arithmetic();
    }
  }
})