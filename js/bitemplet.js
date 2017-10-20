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

	var projectId = "95263f4682354ce6aa7a904f1394d381",
		pageId = "dbfad73bd6c0447bb9efaa5037e7a3b3",
		dirId = "5305c5256ad74b86aede5e4414caa4de";
	var popups;
	
	getBiTemplet(projectId);//初始化获取bi模板列表
	
	//点击bi搜索按钮查询模板列表
	$("#bitemp-search-btn").click(function(){
		var $aSelect = $(".demand_top select");
		var type = $aSelect.eq(0).find("option:selected").val();
		var industry = $aSelect.eq(1).find("option:selected").val();
		getBiTemplet(projectId,type,industry);
	})
	function getBiTemplet(projectId,type,industry){
		$.ajax({
			type:"GET",
			url: $url1+"/bi/report/v1/template/list.json",
			dataType:'json',
	        data:{
	            "projectId":projectId,
	            "type":type,
	            "industry":industry
	        },
	        success:function(res){
	          if(res.code===0){
	          	var arr = new Array;
		      	$.each(res.data,function(index,item) {
		        	arr.push('<dl class="new_demand" id='+item.templateId+' onmouseout="outBtn(this)" onmouseover="overBtn(this)"> <dt><div id="demand_delete" class="" onclick="deleteBtn(this)">X</div><img src="../images/wendang_moren.png"></dt> <dd onclick="demandBtn(this)"> <p>'+item.templateName+'</p> <span>'+item.templateComment+'</span> </dd> </dl>')
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
