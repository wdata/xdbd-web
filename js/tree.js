$(function(){
	/*
	 
	 * 创建项目
	 * */
	//step1:提交创建项目信息
	$("#cre-proj-btn").click(function(){
		var $projname = $.trim($("#projname").val()),
			$projdesp = $.trim($("#projdesp").val()),
			$projpath = $.trim($("#projpath").val()),
			$projtype = $.trim($("#projtype").val());
		if($projname&&$projdesp&&$projpath&&$projtype){
			$(this).parents(".modal").hide();
			createProjInfo($projname,$projdesp,$projpath,$projtype);
			$("#projdesp").val("");
			$("#projpath").val("");
			$("#projtype").val("");
			$("#projname").val("");
		}else{
			layer.msg("不能有空字段", {icon: 5});
		}
	});
	$("#del-cre-proj-btn").click(function(){
		$(this).parents(".modal").hide();
		$("#projdesp").val("");
		$("#projpath").val("");
		$("#projtype").val("");
		$("#projname").val("");
	});
	function createProjInfo(name,desp,path,type){
		$.ajax({
			type:'POST',
            url:'/bigdata/project/createProject',
            dataType:'json',
            contentType: "application/json",
			data:JSON.stringify({
				"name":name,
				"remark":desp,
				"path":path,
				"scheduledType":type
			}),
			success:function(res){
				console.log(res);
              	if(res.code===0){
					layer.msg(res.message, {icon: 6});
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	/*
	 
	 * 获取项目树名称
	 * */
	var zNodes = [];
	getProjName();
	function getProjName(id){
		$.ajax({
			type:'POST',
            url:'/bigdata/project/findProjectTree',
            dataType:'json',
	          contentType: "application/json",
			data:JSON.stringify({
				
			}),
			success:function(res){
              	if(res.code===0){
              		zNodes = res.data;
					console.log(zNodes);
					var treeObj = $("#treeDemo");
					$.fn.zTree.init(treeObj, setting, zNodes);
					zTree_Menu = $.fn.zTree.getZTreeObj("treeDemo");
					curMenu = zTree_Menu.getNodes()[0].children[0].children[0];
					zTree_Menu.selectNode(curMenu);
					treeObj.hover(function () {
						if (!treeObj.hasClass("showIcon")) {
							treeObj.addClass("showIcon");
						}
					}, function() {
						treeObj.removeClass("showIcon");
					});
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	/*
	 
	 * 项目树初始化
	 * */
	var curMenu = null, zTree_Menu = null;
		var setting = {
			view: {
				showLine: false,
				showIcon: false,
				selectedMulti: false,
				dblClickExpand: false,
				addDiyDom: addDiyDom
			},
			data: {
				simpleData: {
					enable: true
				}
			},
			callback: {
				beforeClick: beforeClick,
				onClick: zTreeOnClick
			}
		};

		/*var zNodes =[
				{ id:1, pId:0, name:"我的项目", open:true},
				{ id:11, pId:1, name:"迪庆大数据11",ppss:1,children:[
							{ id:111, pId:11, ppss:3,name:"首页",children:[
							{ id:112, ppss:31,name:"菜单设计"},
							{ id:113, ppss:32,name:"页面"},
							{ id:114, ppss:33,name:"页面流"}
						]
					},
					{ id:116, pId:11, ppss:4,name:"子模块"},
					{ id:117, pId:11, ppss:5,name:"最终子模块",children:[
							{ id:118,ppss:51,name:"ETL"},
							{ id:119,ppss:52,name:"作业流"},
							{ id:1110,ppss:53,name:"BI"}
						]
					},
				]
			},
			{ id:12, pId:1, name:"迪庆大数据12",ppss:2}
			
		];*/
		
		/*
		 
		 * 目录类型定义
		 * *
		 * 1=项目目录,--items
		 * 2=首页,
		 * 3=菜单设置,
		 * 4=页面流,
		 * 5=页面,
		 * 6=模块,---- items4
		 * 7=最终模块,
		 * 8=ETL,
		 * 9=作业流,
		 * 10=BI,
		 * 11=ETL文件夹,--------------- items1 ETL右键目录
		 * 12=BI文件夹,---------------- items2 BI右键目录
		 * 13=作业流文件夹------------- items3 作业流文件夹
		 * 
		
		* */
		var createSubmodule = function(){
			$(".submodule").show();
		};
		var createFinalSubmodule = function(){
			$(".subfinalmodule").show();
		};
		var checkInTest = function(){
			alert('checkInTest');
		};
		var switchVersion = function(){
			$(".cut-version").show();
		};
		var leadingIn = function(){
			alert('leadingIn');
		};
		var leadingOut = function(){
			alert('leadingOut');
		};
		var dataSourceConfig = function(){
			alert('dataSourceConfig');
		};
		var setProperty = function(){
			$(".proj-attr").show();
		};
		var newFile = function(){
	    	alert('新建文件夹');
	   	};
    	var newEtl = function(){
    		alert('newEtl');
    	};
    	var newBi = function(){
    		alert('newBi');
    	};
    	var newJob = function(){
    		alert('newJob');
    	};
		var items = [];
		var items0 = [
			{ title: '创建子模块', fn: createSubmodule},
			{ title: '创建最终子模块', fn: createFinalSubmodule },
			{ title: '提交测试', fn: checkInTest },
			{ title: '切换版本', fn: switchVersion },
			{ title: '导入', fn: leadingIn },
			{ title: '导出', fn: leadingOut},
			{ title: '数据源配置', fn: dataSourceConfig },
			{ title: '属性', fn: setProperty }
		];
		var items1 = [
			{ title: '新建ETL', fn: newEtl},
			{ title: '新建文件夹', fn: newFile }
		];
		var items2 = [
			{ title: '新建BI文件', fn: newBi},
			{ title: '新建文件夹', fn: newFile }
		];
		var item3 = [
			{ title: '新建作业流', fn: newJob},
			{ title: '新建文件夹', fn: newFile }
		];
		var item4 = [
			{ title: '创建子模块', fn: createSubmodule},
			{ title: '创建最终子模块', fn: createFinalSubmodule}
		];
		function zTreeOnClick(){
			var curClickedDom = $.fn.zTree.getZTreeObj("treeDemo").getSelectedNodes();
			var dirType = $.fn.zTree.getZTreeObj("treeDemo").getSelectedNodes()[0].directoryType;
			console.log(dirType);
			switch(dirType){
				case 1:
					items = items0;
				break;
				case 11:
					items = items1;
				break;
				case 12:
					items = items2;
				break;
				case 13:
					items = items3;
				break;
				case 6:
					items = items4;
				break;
				default:
					items = []
			}
		}
		var onRightKey = function(e){
				basicContext.show(items1, e);
			}
		$("#treeDemo").delegate("li","contextmenu",function(e){
	    	onRightKey(e);
	    });
		
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

		function beforeClick(treeId, treeNode) {
			if (treeNode.level == 0 ) {
				var zTree = $.fn.zTree.getZTreeObj("treeDemo");
				zTree.expandNode(treeNode);
				return false;
			}
			return true;
		}

		$(document).ready(function(){
			/*var treeObj = $("#treeDemo");
			$.fn.zTree.init(treeObj, setting, zNodes);
			zTree_Menu = $.fn.zTree.getZTreeObj("treeDemo");
			curMenu = zTree_Menu.getNodes()[0].children[0].children[0];
			zTree_Menu.selectNode(curMenu);
			treeObj.hover(function () {
				if (!treeObj.hasClass("showIcon")) {
					treeObj.addClass("showIcon");
				}
			}, function() {
				treeObj.removeClass("showIcon");
			});*/
		});
})//jq end
