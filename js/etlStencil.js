/**
 * Created by qiangxl on 2017/9/27.
 */
var itemId;
var this_versionId = localStorage.getItem("versionId");
var this_projectId = localStorage.getItem("projectId");
var this_directoryId = localStorage.getItem("directoryId");
var this_companyId = localStorage.getItem("companyId");
var $url = '../xdbd-etl'; //../xdbd-etl

$('.trade_type').html(industryType());

//获取ETL列表
var parens = {
  projectId: this_projectId
}
$.ajax({
  type: "POST",
  url: $url+"/api/action/v1/getActionTemplateList",
  dataType: "json",
  contentType: "application/json",
  data: JSON.stringify(parens),
  success: function (data) {
    if (data.code == 0) {
      var arr = new Array;
      console.log(data.data)
      itemId = data.data;
      $.each(data.data, function (index, item) {
        //graphDiagram.push(item.actionId+','+item.dag);
        arr.push('<dl class="new_demand" id='+item.actionId+' onmouseout="outBtn(this)" onmouseover="overBtn(this)"> <dt><div id="demand_delete" class=' + item.versionId + ' onclick="deletesBtn(this)">X</div><img src="../images/wendang_moren.png"></dt> <dd onclick="demandsBtn(this)" class='+item.actionId+' id='+item.versionId+'> <p>' + item.name + '</p> <span>' + item.remark + '</span> </dd> </dl>')
      })
      $("#demand_list").html(arr);
    }
  }, error: function (data) {
    console.log(JSON.stringify(data))
  }
})
function overBtn(_this) {
  $(_this).find("#demand_delete").css("display","block")
}
function outBtn(_this) {
  $(_this).find("#demand_delete").css("display","none")
}
//删除ETL列表模板
function deletesBtn(_this) {
  var parans = {
    actionId: $(_this).parents(".new_demand").attr("id"),
    versionId: this_versionId
  };
  layer.confirm('是否要删除当前模板？', {
    btn: ['确定','取消'] //按钮
  }, function(){
    $.ajax({
        type:"POST",
        url:$url+"/api/action/v1/delAction",
        dataType:"json",
        contentType:"application/json",
        data:JSON.stringify(parans),
        success:function(data){
          console.log(data)
          if(data.code == 0) {
            $(_this).parents(".new_demand").remove();
            layer.msg('模板删除成功！');
          }
        },error:function(data){
          console.log(JSON.stringify(data))
        }
    })
  });
}
//查看ETL模板
function demandsBtn(_this) {
  var currentActionId = $(_this).attr('class');
  var currentVersionId = $(_this).attr('id');
  localStorage.setItem('directoryId',currentActionId);
  localStorage.setItem('templateVersionId',currentVersionId);
  window.location.href = 'flowChart.html';
}
//新建ETL模板
function newEtlBtn() {
  //页面层
  popups = layer.open({
    type: 1,
    title: '新建',
    //skin: 'layui-layer-rim', //加上边框
    area: ['660px', '560px'], //宽高
    content: '' +
    '<div class="demand_name"><label>ETL名称：<span>*</span></label><input class="new_name" type="text" ></div>' +
    '<div class="demand_name"><label>数据源:<span>*</span></label><select class="new_ds"></select></div>'+
    '<div class="demand_name"><label>行业类型：<span>*</span></label><select class="new_type"></select></div>' +
    '<div class="demand_name"><label>ETL描述：<span>*</span></label><textarea maxlength="85" class="new_describe"></textarea></div>' +
    '<p class="hint">85个字以内</p>' +
    '<div class="new_demdand_btn"><span class="new_btn" onclick="newBtn(popups)">确定</span><span class="call_btn" onclick="callBtn(popups)">取消</span></div>',
  });
  $('.new_type').html(industryType());
  get_dataSource();
}
function get_dataSource() {
  var source = {
    projectId: this_projectId,
    versionId: this_versionId
  }
  $.ajax({
    type: "POST",
    url: $url+"/api/datasource/v1/getDataSourceList",  ///xdbd-etl
    dataType: "json",
    contentType: "application/json",
    data: JSON.stringify(source),
    success: function (data) {
      if (data.code == 0) {
        var list = new Array;
        console.log(data.data)
        itemId = data.data;
        $.each(data.data, function (index, item) {
          //graphDiagram.push(item.actionId+','+item.dag);
          list.push('<option value='+item.dsId+'>'+item.name+'</option>')
        })
        $(".new_ds").html(list);
      }
    }, error: function (data) {
      console.log(JSON.stringify(data))
    }
  })
}
function callBtn(popups) {
  layer.close(popups);
}
// function method(_this) {
//   document.getElementById("input").value = $(_this).val();
// }
function newBtn(popups) {
  var newName = $(".new_name").val();
  var newType = $(".new_type").val();
  var newDs = $(".new_ds").val();
  var newDescribe = $(".new_describe").val();
  if(newName == '') {
    layer.msg('请输入ETL名称！');
  } else if(newType == '') {
    layer.msg('请输入行业类型！');
  } else if(newDs == '') {
    layer.msg('请选择数据源!')
  }else if(newDescribe == '') {
    layer.msg('请输入描述！');
  } else {
    console.log(newDs)
    var res = {
      actionId: "",
      name: newName,
      businessType: newType,
      remark: newDescribe,
      directoryId: this_directoryId,
      companyId: this_companyId,
      projectId: this_projectId,
      versionId: this_versionId,
      dsId: newDs
    };
    $.ajax({
      type:"POST",
      url:$url+"/api/action/v1/saveAction",
      dataType:"json",
      contentType:"application/json",
      data:JSON.stringify(res),
      success:function(data){
        // alert(JSON.stringify(data))
        if(data.code == 0) {
          localStorage.setItem('directoryId',data.data.actionId);
          window.location.href = 'flowChart.html';
          parent.location.reload();
        }
      },error:function(data){
        console.log(JSON.stringify(data))
      }
    })
//        window.location.href = 'etlChart.html';
    layer.close(popups);
  }
}