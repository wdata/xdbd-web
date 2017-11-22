	/**
	 * Created by tgchen on 2017/10/13
	 */

	/*
	 
	 * url地址变量
	 * BI : http://192.168.1.42:8084/xdbd-bi
	 * ETL: http://192.168.1.42:8084/xdbd-etl
	 * PM: http://192.168.1.42:8084/xdbd-pm
	 * WF: http://192.168.1.42:8084/xdbd-wf
	 * 
	 * */
	var $url1 = "/xdbd-bi";
	var $url2 = "/xdbd-etl";
	var $url3 = "/xdbd-pm";
	var $url4 = "/xdbd-wf";

	var projectId = localStorage.getItem("projectId"),
		versionId = localStorage.getItem("versionId"),
		pageId = "",
		dirId = localStorage.getItem("directoryId");
	var templateId = "";
	var popups;
	
	getBiTemplet(projectId,versionId);//初始化获取bi模板列表
	
	//点击bi搜索按钮查询模板列表
	$("#bitemp-search-btn").click(function(){
		var $aSelect = $(".demand_top select");
		var type = $aSelect.eq(0).find("option:selected").val();
		var industry = $aSelect.eq(1).find("option:selected").val();
		getBiTemplet(projectId,versionId,type,industry);
	})
	function getBiTemplet(projectId,versionId,type,industry){
		$.ajax({
			type:"GET",
			url: $url1+"/bi/report/v1/template/list.json",
			headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			dataType:'json',
	        data:{
	            "projectId":projectId,
	            "versionId":versionId,
	            "type":type,
	            "industry":industry
	        },
	        success:function(res){
	          if(res.code===0){
	          	var arr = new Array;
		      	$.each(res.data,function(index,item) {
		        	arr.push('<dl class="new_demand" id='+item.templateId+' onmouseout="outBtn(this)" onmouseover="overBtn(this)"> <dt><div id="demand_delete" class="" onclick="deleteBtn(this)">X</div><img src="../images/bi_moren.png"></dt> <dd onclick="demandBtn(this)"> <p>'+item.templateName+'</p> <span>'+item.templateComment+'</span> </dd> </dl>')
		      	});
		      	$("#demand_list").html(arr);
	          }
	        },
	        error:function(res){
	            console.log(res);
	        }
		});
	}
	function overBtn(_this) {
	  $(_this).find("#demand_delete").css("display","block")
	}
	function outBtn(_this) {
	  $(_this).find("#demand_delete").css("display","none")
	}
	
	//弹出层
	$("#new_demand_btn").click(function() {
	  //页面层
	  popups = layer.open({
	    type: 1,
	    title: '新建',
	    skin: 'layui-layer-rim', //加上边框
	    area: ['660px', '460px'], //宽高
	    content: '' +
	    '<div class="demand_name"><label>页面名称：<span>*</span></label><input class="new_name" type="text" ></div>' +
	    '<div class="demand_name"><label>行业类型：<span>*</span></label><select class="new_type" onchange="method(this)"><option value="全部">全部</option><option value="房地产">房地产</option><option value="酒店">酒店</option><option value="互联网">互联网</option><option value="自定义">自定义</option></select><input class="new_Inp" type="text" id="input"/></div>' +
	    '<div class="demand_name"><label>页面描述：<span>*</span></label><textarea maxlength="100" class="new_describe"></textarea></div>' +
	    '<p class="hint">100个字以内</p>' +
	    '<div class="new_demdand_btn"><span class="new_btn" onclick="newBtn(popups)">确定</span><span class="call_btn" onclick="callBtn(popups)">取消</span></div>',
	  });
	});
	function callBtn(popups) {
	  layer.close(popups);
	}
	function method(_this) {
	  document.getElementById("input").value = $(_this).val();
	}
	function newBtn(popups) {
	  var newName = $(".new_name").val();
	  var newType = $(".new_type").val();
	  var newDescribe = $(".new_describe").val();
	  if(newName == '') {
	    layer.msg('请输入页面名称！');
	  } else if(newType == '') {
	    layer.msg('请输入行业类型！');
	  } else if(newDescribe == '') {
	    layer.msg('请输入页面描述！');
	  } else {
	  	switch(newType){
	  		case "全部":
				newType = "0";
				break;
			case "房地产":
				newType = "1";
				break;
			case "酒店":
				newType = "2";
				break;
			case "互联网":
				newType = "3";
				break;
			case "自定义":
				newType = "4";
				break;
			default:
				newType = "";
	  			
	  	}
	  	layer.close(popups);
	   	newBiTemplete(projectId,versionId,dirId,newName,newType,newDescribe,templateId);
	   	parent.location.reload();//刷新父级项目树
	  }
	}

	//新建  BI 页面
	function newBiTemplete(projectId,versionId,dirId,name,industry,newDescribe,templateId){
		$.ajax({
	            type:'POST',
	            url:$url1+'/bi/report/v1/page.json',
	            headers:{
	            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
	            },
	            dataType:'json',
	            data:{
	                "projectId":projectId,
	                "versionId":versionId,
	                "dirId":dirId,
	                "name":name,
	                "industry":industry,
	                "comment":newDescribe,
	                "templateId":templateId
	            },
	            success:function(res){
	              if(res.code===0){
	              	var data = res.data;
	              	pageId = data.pageId;
	              	window.location.href = "../editBI.html?pageId="+pageId;
	              }
	            },
	            error:function(res){
	                console.log(res);
	            }
	        });
	}