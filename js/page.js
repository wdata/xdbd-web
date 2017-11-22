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

	var pageFlowDirId = localStorage.getItem("directoryId");
	var projectId = localStorage.getItem("projectId");//参数1
	var versionId = localStorage.getItem("versionId");//参数2
	var BIdirId = localStorage.getItem("pageFlowId");//2,10
	var zNodes = [];
	var linkPageId = "";//htmljson
	var index;//popup
	var $idx="";
	var pageId = "";//选择的具体某一页面的id，参数3
	var pageName = "";//页面名称
	var t = 0;
	var controls = [];
	var isIndex = "";//参数4
	var customData = {};//参数5
	var lv1DirId = localStorage.getItem("lv1DirId");
	
	//页面数配置
	var setting = {
		view: {
			selectedMulti: false,
			showIcon: false,
			showLine: false,
			addDiyDom: addDiyDom
		},
		edit: {
			enable: true
		},
		data: {
			simpleData: {
				enable: true
			}
		},
		callback: {
			onClick:addLinkPage
		}
	};
	var setting1 = {
		view: {
			selectedMulti: false,
			showIcon: false,
			showLine: false,
			addDiyDom: addDiyDom
		},
		edit: {
			enable: true
		},
		data: {
			simpleData: {
				enable: true
			}
		},
		callback: {
			onClick:addOtherPage
		}
	};
	var IDMark_A = "_a";
	function addDiyDom(treeId, treeNode) {
		var spaceWidth = 5;
		var switchObj = $("#" + treeNode.tId + "_switch"),
		icoObj = $("#" + treeNode.tId + "_ico");
		switchObj.remove();
		icoObj.before(switchObj);
		if (treeNode.level > 1) {
			var spaceStr = "<span style='display: inline-block;width:" + (spaceWidth * treeNode.level)+ "px'></span>";
			switchObj.before(spaceStr);
		}
	}
	
	//页面流
	$(".p-tabs-title").on("click","li",function(){
		var $idx = $(this).index();
			t = $idx;
		$(this).addClass("active").siblings().removeClass("active");
		$(".p-cont"+$idx).show().siblings().hide();
		if($idx===1){
			curTreePages(lv1DirId,versionId,[1,2,5,14,6,7,10,11,15]);
		}else if($idx===0){
			// getFirstPages(projectId,versionId,pageFlowDirId);
		}
	})
	
	//获取首页面
	getFirstPages(projectId,versionId,pageFlowDirId);
	function getFirstPages(projectId,versionId,pageFlowDirId){
		$.ajax({
			type:"GET",
			url:$url1+"/bi/report/v1/page.json",
			headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			dataType:"json",
			data:{
				"projectId":projectId,
                "versionId":versionId,
				"pageFlowDirId":pageFlowDirId
			},
			success:function(res){
				if(res.code===0){
					var data = res.data;
					var cid = [];
					var html = "";
					$(".edit-content").html("");
					if(data&&data.htmlJson){
						isIndex = data.index===true?1:0;//参数4
						htmlJson = data.htmlJson;//参数5
						controls = data.htmlJson.controls;
						customData = data.htmlJson.customData;
						pageId = data.pageId;
						sessionStorage.setItem("pageid",pageId);
//						console.log(pageId);
						$("#f-fpage-name").text(data.pageName);
						cid = data.htmlJson.controls;					
						$.each(cid,function(i,item){
							console.log(item.linkPageId);
							html += `
								<li cid="${item.cid}" linkPageId="${item.linkPageId}">
									<a href="javascript:;">${item.cid}</a>
									<span class="set-flow-btn">${item.linkPageId===null?'设置链接':'已设置链接'}</span>
								</li>
							`;
						});
						$(".page-tooltip").empty().append(html);

                    	if(data.htmlJson && data.htmlJson.controls){                    		
                        	displayPage(data);
                    	}
					}else{
						$("#f-fpage-name").text("未设置");
						layer.msg("未设置首页", {icon: 0});
					}
				}
			},
			error:function(res){
				console.log(res)
			}
		});
	}
	
	//getOtherPages(projectId,versionId,pageId);
	//获取页面流具体页面
	function getOtherPages(projectId,versionId,pageId){
		$.ajax({
			type:"GET",
			url:$url1+"/bi/report/v1/page.json",
			headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			dataType:"json",
			data:{
				"projectId":projectId,
                "versionId":versionId,
				"pageId":pageId
			},
			success:function(res){
				if(res.code===0){
					var data = res.data;
					var cid = [];
					var html = "";
					isIndex = data.index===true?1:0;//参数4
					pageId = data.pageId;
					sessionStorage.setItem("pageid",pageId);
					$(".edit-content").html("");
					if(data.htmlJson && data.htmlJson.controls){
						htmlJson = data.htmlJson;//参数5
						controls = data.htmlJson.controls;
						customData = data.htmlJson.customData;
						cid = data.htmlJson.controls;
						$.each(cid,function(i,item){
							console.log(item.linkPageId);
							html += `
								<li cid="${item.cid}" linkPageId="${item.linkPageId}">
									<a href="javascript:;">${item.cid}</a>
									<span class="set-flow-btn1">${item.linkPageId==="null"||item.linkPageId===null?'设置链接':'已设置链接'}</span>
								</li>
							`;
						});
						$(".page-tooltip1").empty().append(html);
						
						
                    	if(data.htmlJson && data.htmlJson.controls){                    		
                        	displayPage(data);
                    	}
					}else{
						layer.msg("请先为BI页面添加组件", {icon: 0});
					}
				}
			},
			error:function(res){
				console.log(res)
			}
		});
	}
	
	//设置链接
	$(".page-tooltip").delegate(".set-flow-btn","click",function(){
			index = layer.open({
		      type: 1,
		      area: ['490px', '330px'],
		      title:'链接页面',
		      shadeClose: true, //点击遮罩关闭
		      content:$(".flowpage-tree"),
		      cancel:function(){
		      	layer.close(index);
		      }
		})
	});
	
	$(".page-tooltip").delegate("li","click",function(){
		$idx = $(this).index();
	})
	
	//设置链接
	$(".page-tooltip1").delegate(".set-flow-btn1","click",function(){
			index = layer.open({
		      type: 1,
		      area: ['490px', '330px'],
		      title:'链接页面',
		      shadeClose: true, //点击遮罩关闭
		      content:$(".flowpage-tree"),
		      cancel:function(){
		      	layer.close(index);
		      }
		})
	})
	
	$(".page-tooltip1").delegate("li","click",function(){
		$idx = $(this).index();
	})
	
	//根据BIdirId查询项目树.（首页2与BI报表10）
	curTreePages(lv1DirId,versionId,[1,2,5,14,6,7,10,11,15]);
	function curTreePages(BIdirId,versionId,directoryTypes){
		$.ajax({
				type:'POST',
	            url:$url3+'/bigdata/project/findProjectTreeById',
	            headers:{
	            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
	            },
	            dataType:'json',
	            contentType: "application/json",
				data:JSON.stringify({
					"directoryId":BIdirId,
					"versionId":versionId,
					"directoryTypes":directoryTypes
				}),
				success:function(res){
	              	if(res.code===0){
	              		var data = res.data;
	              		zNodes = data;
	              		if(zNodes){
	              			$.fn.zTree.init($("#flow-tree"), setting, zNodes);
							$.fn.zTree.init($("#other-tree"), setting1, zNodes);
							var curObj1 = $.fn.zTree.getZTreeObj("flow-tree");
							curObj1.expandAll(true);
							var curObj2 = $.fn.zTree.getZTreeObj("other-tree");
							curObj2.expandAll(true);
	              		}else{
	              			layer.msg("请先创建页面!", {icon: 0});
	              		}
						
	              	}
				},
				error:function(err){
					console.log(err);
				}
			});
	}
	
	
	treeHover($("#flow-tree"));
	treeHover($("#other-tree"));
	function treeHover(treeObj){
		treeObj.hover(function(){
			if (!treeObj.hasClass("showIcon")){
				treeObj.addClass("showIcon");
			}
		}, function(){
			treeObj.removeClass("showIcon");
		});
	}
	
	//为组件添加链接
	function addLinkPage(){
		var curObj = $.fn.zTree.getZTreeObj("flow-tree");
		var curDom = curObj.getSelectedNodes();
		var dirType =  curDom[0].directoryType;//目录类型
		var directoryId =  curDom[0].directoryId;//目录id
		var pageName = curDom[0].name;//目录名称
		if(dirType==="15"||dirType==="14"){
			linkPageId = directoryId;
			$(".page-tooltip li").eq($idx).attr("linkPageId",linkPageId).find("span").text("已设置链接");
			$(".page-tooltip1 li").eq($idx).attr("linkPageId",linkPageId).find("span").text("已设置链接");
//			savePage(linkPageId);
			layer.closeAll();
		}else{
			layer.msg("请选择BI页面文件", {icon: 0});
		}
	}
	
	function addOtherPage(){
		var curObj = $.fn.zTree.getZTreeObj("other-tree");
		var curDom = curObj.getSelectedNodes();
		var dirType =  curDom[0].directoryType;//目录类型
		var directoryId =  curDom[0].directoryId;//目录id
		var pageName = curDom[0].name;//目录名称
//		pageId = directoryId;
		if(dirType==="15"||dirType==="14"){
			linkPageId = directoryId;
			pageName = pageName;
			$(".page-tooltip1").html("");
//			$(".p-opage-select select option:selected").val(linkPageId).text(pageName);
			$(".p-opage-select select option:selected").text(pageName);
			getOtherPages(projectId,versionId,linkPageId);//调用
			layer.closeAll();
		}else{
			layer.msg("请选择BI页面文件", {icon: 0});
		}
	}
	
	//清空
	$(".clearAll-btn").click(function(){
		var aLi = $(".page-tooltip li");
		for(let i=0;i<aLi.length;i++){
			aLi.eq(i).attr("linkPageId","").find("span").text("设置链接");
//			savePage("");//保存
		}
	});
	
	//删除
	$(".delOnly-btn").click(function(){
		var aLi = $(".page-tooltip li");
		aLi.eq($idx).attr("linkPageId","").find("span").text("设置链接");
//		savePage("");//保存
	});
	
	/*
	 * 其他页 
	 */
	$(".p-opage-select select").on("click",function(){
		var name = $(this).val();
		 index = layer.open({
		      type: 1,
		      area: ['490px', '330px'],
		      title:'链接页面',
		      shadeClose: true, //点击遮罩关闭
		      content:$(".otherpage-tree"),
		      cancel:function(){
		      	layer.close(index);
		    }
	  });
	});
	
	
	//清空
	$(".clearAll-btn1").click(function(){
		var aLi = $(".page-tooltip1 li");
		for(let i=0;i<aLi.length;i++){
			aLi.eq(i).attr("linkPageId","").find("span").text("设置链接");
		}
	});
	
	//删除
	$(".delOnly-btn1").click(function(){
		var aLi = $(".page-tooltip1 li");
		aLi.eq($idx).attr("linkPageId","").find("span").text("设置链接");
	});
	
	//保存页面
	$("#save-btn").click(function(){
		var aLi;
		if(t===0){
			aLi = $(".page-tooltip li");
		}else if(t===1){
			aLi = $(".page-tooltip1 li");
		}
		for(let i=0;i<aLi.length;i++){
			if(controls){
				controls[i].linkPageId = aLi.eq(i).attr("linkPageId");
				console.log(aLi.eq(i).attr("linkPageId"));
			}
		}
		
//		console.log(sessionStorage.getItem("pageid"));
		pageId = sessionStorage.getItem("pageid");
		console.log(pageId);
		console.log(linkPageId);
		savePage(pageId);
	
		
	})
	 
	
	function savePage(pageId){
		$.ajax({
			type:'PUT',
            url:$url1+"/bi/report/v1/page.json?projectId="+projectId+"&pageId="+pageId+"&isIndex="+isIndex+"&versionId="+versionId,
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
            dataType:"json",
            contentType: 'application/json',
			data:JSON.stringify({
				"isIndex":isIndex,
				"pageId":pageId,
				"controls":controls,
        		"customData":customData,

			}),
			success:function(res){
				console.log(res);
              	if(res.code===0){
              		layer.msg("保存页面成功", {icon: 6});
              	}
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	//
	$(".edit-content").delegate(".resize-item","click",function(){
		var id = $(this).attr("id");
		var linkPageId ="";
		let i;
		var aLi = $(".page-tooltip").find("li");
		for(i=0;i<aLi.length;i++){
			if(id===aLi.eq(i).attr("cid")){
				aLi.eq(i).find("a").css("color","blue").end().siblings("li").find("a").css("color","");
				linkPageId = aLi.eq(i).attr("linkpageid");
			}
		}
		$(this).attr("linkPageId",linkPageId);
		// if(linkPageId!=="null"&&linkPageId!=="undefined"){
		// 	window.open("../html/preview.html?projectId="+projectId+"&versionId="+versionId+"&userId="+userId+"&pageId="+linkPageId);
		// }
	});
	
	//提示
	var todo = {
		tip:function(){
			$(".top-bar>img").on("mouseenter",function(){
	            layer.tips($(this).attr('data-tip'), this,{
	                tips: 3
	            });
	        });
		},
		refresh:function(){
			window.location.reload();
		},
		preview:function(e){
            var url  = "?username="+ username +"&userId="+ userId +"&pageId="+ pageId +"&projectId="+ projectId +"&versionId="+ versionId +"";
            window.open("../html/preview.html" + url);
            e.preventDefault();
		}
	};
	todo.tip();
	$("#page-fresh").click(function(){
		todo.refresh();
	});
	$("#page-preview").click(function(e){
		todo.preview(e);
	})
	
});//JQ END


// 显示BI页面数据
function displayPage(data){
	// 遍历数据,生成图形
	var html = '';
	$.each(data.htmlJson.controls,function(index,val){
		var text = ''            // html
			,style =  val.style  // 宽、高
			,dataType = val.customData.dataType;  // 类型

        // 判断图形、表格、文本、图片、按钮
        // 如果是文本和图片，则复制内容不同
		if(dataType === "text" || dataType === "button" || dataType === "image"){
			text = val.customData.controls.html;
		}else if(dataType === "table" || dataType === "chart"){
			// 将数据存入检索数据中
			var chart_date = {
				'cid':val.cid,
				"type":val.type,
				"queryJson":val.queryJson,
			};
			DataIndexes.inAjax(chart_date,val.cid);
		}
		html = '<div  id="'+ val.cid +'" type="'+ val.type +'" data-type="'+ val.customData.dataType +'" style="height:'+ style.height +'px;width:'+ style.width +'px;top:'+ style.top +'px;left:'+ style.left +'px;z-index:'+ val.displayLevel +'" class="resize-item">'+ text +'</div>';
		$(".edit-content").append(html);
	});
}