$(function(){
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
	
	/*
	 
	 * 常用参数说明
	 * rootBiDirId 页面流父级目录id
	 * pageId 
	 * */

	var flowPageId = localStorage.getItem("directoryId");
	
	//页面流
	$(".p-tabs-title").on("click","li",function(){
		var $idx = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".p-cont"+$idx).show().siblings().hide();
	})
	
	//获取首页面
	getFirstPages(flowPageId);
	function getFirstPages(rootBiDirId){
		$.ajax({
			type:"GET",
			url:$url1+"/bi/report/v1/page.json",
			dataType:"json",
			data:{
				"rootBiDirId":rootBiDirId
			},
			success:function(res){
				if(res.code===0){
					var data = res.data;
					$("#f-fpage-name").text(data.pageName);
					console.log(data)
				}
			},
			error:function(res){
				console.log(res)
			}
		});
	}
	
	//getOtherPages(flowPageId)
	//获取页面流具体页面
	function getOtherPages(pageId){
		$.ajax({
			type:"GET",
			url:$url1+"/bi/report/v1/page.json",
			dataType:"json",
			data:{
				"pageId":pageId
			},
			success:function(res){
				if(res.code===0){
					console.log(res)
				}
			},
			error:function(res){
				console.log(res)
			}
		});
	}
	
});
