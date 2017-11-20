/**
 * Created by qiangxl on 2017/10/11.
 */
//增加字段
$(function(){
  initFromTable();
  // init_autosave();
  bind_change_fromTable();
  bind_click_add();
  bind_click_loadParguet();
  bind_click_generateSql();
  bind_click_saveActionComp();
  bind_click_lessen();
  $('.fromTable').trigger('change');

  setVal();

  function bind_click_saveActionComp(){
    $('.saveActionComp').click(function(){
      fn_saveActionComp(getVal());
    });
  }

  function setVal(){
    var actionComp = fn_get_actionComp_by_webComponentId(this_webComponentId);
    if(actionComp!=null){
      var attValue = eval("("+actionComp.attValue+")");
      fn_set_stepName(actionComp.name);
      fn_set_fromTable(actionComp.fromTable);
      set_extractFields(attValue.extractFields);
      fn_set_sqlOut(actionComp.sqlOut);
    } else {
      $(".stepName").val(etlName);
    }
  }

  function getVal(){
    var data ={};
    data['name'] = fn_get_stepName();
    data['webComponentId'] = this_webComponentId;
    data['actionId'] = this_actionId;
    data['actionCompType'] = this_actionCompType;
    data['versionId'] = this_versionId;
    data['fromTable'] = fn_get_fromTable();
    data['tableOut'] = fn_get_fromTable();
    data['sqlOut'] = generate_sql();
    data['dag'] = Export();
    var attValue = {};
    attValue['extractFields'] = get_extractFields();
    data['attValue'] = JSON.stringify(attValue);
    return data;
  }

  function bind_click_generateSql(){
    $('.generateSql').click(function(){
      var sql = generate_sql();
      fn_set_sqlOut(sql);
    });
  }
  function bind_click_loadParguet() {
    $('.loadParguet').click(function() {
      fn_upload_parquet();
    })
  }

  function bind_change_fromTable(){
    $('.fromTable').change(function(){
      var tbName = $(this).val();
      var extractFieldHtml = $('.extractField').prop('outerHTML');
      $('.extractField').remove();
      var fieldList = tables[tbName].fieldList;
      $.each(fieldList,function(){
        var checkField = this+"";
        $('.extractFields').append(extractFieldHtml);
        var extractField = $('.extractField:last');
        var optionHtml='';
        $.each(fieldList,function(){
          optionHtml += "<option value="+this+">"+this+"</option>";
        });
        extractField.find('.fields').html(optionHtml);
        extractField.find('.fields').val(checkField);
      });
    });
  }

  function initFromTable(){
    var optionsHtml = "";
     // alert(JSON.stringify(tables))
    $.each(tables,function(){
      optionsHtml += "<option>"+this.tableName+"</option>";
    });
    $('.fromTable').html(optionsHtml);
  }

function bind_click_add() {
  $(document.body)
    .off('click', '.add')
    .on('click', '.add', function () {

      var inputHtml = $('.extractField').prop('outerHTML');
      //$('.extractField').remove();
      $('.extractFields').append(inputHtml);


    })
}

  function bind_click_lessen() {
    $(document.body)
      .off('click', '.lessen')
      .on('click', '.lessen', function () {
        console.log($('.extractField').length)
          if($('.extractField').length <2) {
            layer.msg('最后一个提取条件不能删除')
          } else {
            $(this).parents('.extractField').remove();
          }
      })
  }

  function set_extractFields(obj){
    var extractFieldHtml = $('.extractField').prop('outerHTML');
    $('.extractField').remove();
    if(obj.length<1){
      return;
    }
    // alert(JSON.stringify(obj))
    /**
    console.log(obj);
    var extractHtml = '';alert(JSON.stringify(obj))
      $.each(obj,function(){
         $('.extractFields').append(extractFieldHtml);
         // $('.extractField:last .fields').val(this);
        extractHtml += "<option value="+this+">"+this+"</option>";
        //$('.extractField').attr(selected);
      });
    $('.extractField').find('.fields').html(extractHtml);
*/

    $.each(obj,function(){
      var checkField = this+"";
      $('.extractFields').append(extractFieldHtml);
      var extractField = $('.extractField:last');
      var optionHtml='';
      $.each(tables[fn_get_fromTable()].fieldList,function(){
        optionHtml += "<option value="+this+">"+this+"</option>";
      });
      extractField.find('.fields').html(optionHtml);
      extractField.find('.fields').val(checkField);
    });

  }

  function get_extractFields(){
    var ary = [];
    $('.extractField').each(function(){
      var field = $(this).find('.fields').val();
      ary.push(field);
    });
    return ary;
  }

  function generate_sql(){
    var s = squel.select();
    var fromTable = fn_get_fromTable();
    s.from(fromTable);
    $.each(get_extractFields(),function(){
      var field = this;
      if(fromTable!=null &&fromTable!=''){
        field = fromTable+"."+field;
      }
      s.field(field);
    });
    return s.toString();
  }
});
