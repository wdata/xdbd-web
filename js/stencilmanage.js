/**
 * Created by qiangxl on 2017/9/25.
 */
var popups;
var this_versionId = localStorage.getItem("versionId");
var this_projectId = localStorage.getItem("projectId");
var this_directoryId = localStorage.getItem("directoryId");
var this_companyId = localStorage.getItem("companyId");
var this_createUser = localStorage.getItem("createUser");
var this_updateUser = localStorage.getItem("updataeUser");
var this_rootPath = localStorage.getItem("rootPath");
var $url = '../xdbd-wf';  //../xdbd-wf

$('.trade_type').html(industryType());

//搜索
function stencilSeek() {
    var stencilName = $('.stencil_name').val();
    var tradeType = $('.trade_type').val();
    $.ajax({
        type:"POST",
        url:$url+"/api/job/v1/search",
        dataType:"json",
        contentType:"application/json",
        data:JSON.stringify({
            'projectId': this_projectId,
            'businessType': tradeType,
            'name': stencilName
        }),
        success:function(rs){
            console.log(rs)
            if(rs.code == 0) {
                var arr = new Array;
                console.log(data.data)
                $.each(rs.data,function(index,item) {
                    arr.push('<dl class="new_demand" id='+item.jobId+' onmouseout="outBtn(this)" onmouseover="overBtn(this)"> <dt><div id="demand_delete" class='+item.versionId+' onclick="deleteBtn(this)">X</div><img src="../images/wendang_moren.png"></dt> <dd onclick="demandBtn(this)" data-id='+item.isTemplate+'> <p>'+item.name+'_模板</p> <span>'+item.remark+'</span> </dd> </dl>')
                })
                $("#demand_list").html(arr);
            }
        },error:function(data){
            console.log(JSON.stringify(data))
      }
    })
}

//调用模板列表
var getAll = {
  projectId: this_projectId
};
$.ajax({
  type:"POST",
  url:$url+"/api/job/v1/getAll",
  dataType:"json",
  contentType:"application/json",
  data:JSON.stringify(getAll),
  success:function(data){
    if(data.code == 0) {
      var arr = new Array;
      console.log(data.data)
      $.each(data.data,function(index,item) {
        arr.push('<dl class="new_demand" id='+item.jobId+' onmouseout="outBtn(this)" onmouseover="overBtn(this)"> <dt><div id="demand_delete" class='+item.versionId+' onclick="deleteBtn(this)">X</div><img src="../images/wendang_moren.png"></dt> <dd onclick="demandBtn(this)" data-id='+item.isTemplate+'> <p>'+item.name+'_模板</p> <span>'+item.remark+'</span> </dd> </dl>')
      })
      $("#demand_list").html(arr);
    }
  },error:function(data){
    console.log(JSON.stringify(data))
  }
})
function overBtn(_this) {
  $(_this).find("#demand_delete").css("display","block")
}
function outBtn(_this) {
  $(_this).find("#demand_delete").css("display","none")
}
//删除当前工作流
function deleteBtn(_this) {
  var parans = {
    ids:[$(_this).parents(".new_demand").attr("id")],
    id: $(_this).attr("class"),
    versionId: this_versionId
  };
  layer.confirm('是否要删除当前模板？', {
    btn: ['确定','取消'] //按钮
  }, function(){
    $.ajax({
        type:"POST",
        url:$url+"/api/job/v1/deleteByIds",
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
//查看工作流
function demandBtn(_this) {
  console.log(_this)
  localStorage.setItem('directoryId',$(_this).parents(".new_demand").attr("id"));
  sessionStorage.setItem("isTemplate",$(_this).attr('data-id'));
  window.location.href = 'etlChart.html';
}
//弹出层
$("#new_demand_btn").click(function() {
  //页面层
  popups = layer.open({
    type: 1,
    title: '新建',
    //skin: 'layui-layer-rim', //加上边框
    area: ['660px', '460px'], //宽高
    content: '' +
    '<div class="demand_name"><label>作业流名称：<span>*</span></label><input class="new_name" type="text" ></div>' +
    '<div class="demand_name"><label>行业类型：<span>*</span></label><select class="new_type"></select></div>' +
    '<div class="demand_name"><label>作业流描述：<span>*</span></label><textarea maxlength="85" class="new_describe"></textarea></div>' +
    '<p class="hint">85个字以内</p>' +
    '<div class="new_demdand_btn"><span class="new_btn" onclick="newBtn(popups)">确定</span><span class="call_btn" onclick="callBtn(popups)">取消</span></div>',
  });
  $('.new_type').html(industryType());
});
function callBtn(popups) {
  layer.close(popups);
}
function newBtn(popups) {
  var newName = $(".new_name").val();
  var newType = $(".new_type").val();
  var newDescribe = $(".new_describe").val();
  if(newName == '') {
    layer.msg('请输入ETL名称！');
  } else if(newType == '') {
    layer.msg('请输入行业类型！');
  } else if(newDescribe == '') {
    layer.msg('请输入描述！');
  } else {
    var res = {
      name: newName,
      directoryId: this_directoryId,
      projectId: this_projectId,
      companyId: this_companyId,
      createUser: this_createUser,
      rotPath: this_rootPath,
      remark: newDescribe,
      businesss_type: newType,
      versionId: this_versionId
    };
    $.ajax({
      type:"POST",
      url:$url+"/api/job/v1/save",
      dataType:"json",
      contentType:"application/json",
      data:JSON.stringify(res),
      success:function(data){
        if(data.code == 0) {
          localStorage.setItem('directoryId',data.data);
          window.location.href = 'etlChart.html';
          parent.location.reload();
        }
      },error:function(data){
        console.log(JSON.stringify(data))
      }
    })
    layer.close(popups);
  }
}