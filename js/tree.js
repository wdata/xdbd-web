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
	 * projectId -- 项目id
	 * versionId -- 版本id
	 * version   -- 版本
	 * publishType  发布环境（1-测试发布，2-提交发布）
	 * 
	 * */
	var projectId = "";
	var versionId = "";
	var version = "";
	var publishType = 1;
	var directoryId = "";
	var companyId = "";
	var createUser = "";
	var updateUser = "";
	var rootPath = "";
	
	/*
	 
	 * 创建项目
	 * */
	$("#create-proj-btn").click(function(){
		var index = layer.open({
		      type: 1,
		      btn: ['确定', '取消'],
		      area: ['660px', '530px'],
		      title:'创建项目',
		      shadeClose: true, //点击遮罩关闭
		      content:$(".creat-new-projs"),
		      yes: function(index, layero){
		      	var $projname = $.trim($("#projname").val()),
					$projdesp = $.trim($("#projdesp").val()),
					$projpath = $.trim($("#projpath").val()),
					$projtype = $.trim($("#projtype").val());
				if($projname&&$projdesp&&$projpath&&$projtype){
					createProjInfo($projname,$projdesp,$projpath,$projtype);
				}else{
					layer.msg("不能有空字段", {icon: 5});
				}
		      	layer.close(index);
		      },
		      btn2:function(){
		      	layer.close(index);
		      },
		      cancel:function(){
		      	layer.close(index);
		      }
		   });
	});
	function createProjInfo(name,desp,path,type){
		$.ajax({
			type:'POST',
            url:$url3+'/bigdata/project/createProject',
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
              		getProjName(0);//刷新项目树
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
	var dirType = "";//目录类型
	var directoryId ="";//目录id
	var directoryName = "";//目录名称
	getProjName(0);
	function getProjName(id){
		$.ajax({
			type:'POST',
            url:$url3+'/bigdata/project/findProjectTree',
            dataType:'json',
	        contentType: "application/json",
			data:JSON.stringify({
				"id":id
			}),
			success:function(res){
              	if(res.code===0){
              		zNodes = [{"id":"0","name":"我的项目",children:res.data}];
					var treeObj = $("#treeDemo");
					$.fn.zTree.init(treeObj, setting, zNodes);
					zTree_Menu = $.fn.zTree.getZTreeObj("treeDemo");
					curMenu = zTree_Menu.getNodes()[0].children[0];
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
	
	//弹出框项目树设置
	var subSetting = {
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
			onClick: leftKeyClick
		}
	};
	
		/*
		 
		 * 目录类型定义
		 * *
		 * 1=项目目录,--items
		 * 2=首页,
		 * 3=菜单设置,
		 * 4=页面流,
		 * 5=页面,(首页目录下边子目录)---可 创建文件夹类型和（14）
		 * 6=模块,---- items4
		 * 7=最终模块,
		 * 8=ETL文件夹,--------------- items1 ETL右键目录
		 * 9=作业流文件夹,------------- items3 作业流文件夹
		 * 10=BI报表
		 * 11=BI页面---------------- items2 BI右键目录
		 * 12=ETL文件,
		 * 13=作业流文件,
		 * 14=页面文件（首页5目录下创建的页面的类型）
		 * 15=BI页面文件
		 * 

		* */
		
		var createSubmodule = function(){
			findCurTree("subTrees",directoryId);
			var index = layer.open({
			      type: 1,
			      btn: ['确定', '取消'],
			      area: ['490px', '530px'],
			      title:'创建子模块',
			      shadeClose: true, //点击遮罩关闭
			      content:$(".submodule"),
			      yes: function(index, layero){
			      	var submoduleName = $.trim($(".submodule input").val());
			      	if(submoduleName){
			      		confirmCreateSubmodule(directoryId,submoduleName);//创建子模块
			      		getProjName(0);//刷新左侧树数据
			      	}else{
			      		layer.msg("请输入文件夹名称", {icon: 5});
			      	}
			      	layer.close(index);
			      },
			      btn2:function(){
			      	layer.close(index);
			      },
			      cancel:function(){
			      	layer.close(index);
			      }
			   });
		};
		//确认创建子模块、文件夹
		function confirmCreateSubmodule(directoryId,name){
			$.ajax({
				type:'POST',
	            url:$url3+'/bigdata/project/createSubProject',
	            dataType:'json',
	            contentType: "application/json",
				data:JSON.stringify({
					"directoryId":directoryId,
					"name":name
				}),
				success:function(res){
	              	if(res.code===0){
	              		getProjName(0);//刷新左侧树数据
						layer.msg(res.message, {icon: 6});
		            }
				},
				error:function(err){
					console.log(err);
				}
			});
		}
		var createFinalSubmodule = function(){
			findCurTree("finalSubTrees",directoryId);
			var index = layer.open({
			      type: 1,
			      btn: ['确定', '取消'],
			      area: ['490px', '530px'],
			      title:'创建最终子模块',
			      shadeClose: true, //点击遮罩关闭
			      content:$(".subfinalmodule"),
			      yes: function(index, layero){
			      	var subfinalmoduleName = $.trim($(".subfinalmodule input").val());
			      	if(subfinalmoduleName){
			      		confirmCreateFinalSubmodule(directoryId,subfinalmoduleName);//创建最终子模块
			      		getProjName(0);//刷新左侧树数据
			      	}else{
			      		layer.msg("请输入文件夹名称", {icon: 5});
			      	}
			      	layer.close(index);
			      },
			      btn2:function(){
			      	layer.close(index);
			      },
			      cancel:function(){
			      	layer.close(index);
			      }
			   });
		};
		function confirmCreateFinalSubmodule(directoryId,name){
			$.ajax({
				type:'POST',
	            url:$url3+'/bigdata/project/createEndProject',
	            dataType:'json',
	            contentType: "application/json",
				data:JSON.stringify({
					"directoryId":directoryId,
					"name":name
				}),
				success:function(res){
					console.log(res);
	              	if(res.code===0){
	              		getProjName(0);//刷新左侧树数据
						layer.msg(res.message, {icon: 6});
		            }
				},
				error:function(err){
					console.log(err);
				}
			});
		}
		var checkInTest = function(){
			var index = layer.open({
			      type: 1,
			      btn: ['确定', '取消'],
			      area: ['490px', '200px'],
			      title:'提交发布',
			      shadeClose: true, //点击遮罩关闭
			      content:$(".submit-test"),
			      yes: function(index, layero){
			      	var version = $.trim($(".submit-test input").val());
			      	if(version){
			      		confirmCheckedInTest(projectId,versionId,version,publishType);
			      	}else{
			      		layer.msg("请输入版本号", {icon: 5});
			      	}
			      	layer.close(index);
			      },
			      btn2:function(){
			      	layer.close(index);
			      },
			      cancel:function(){
			      	layer.close(index);
			      }
			   });
		};
		//publishType 1-测试发布  2-提交发布
		function confirmCheckedInTest(projectId,versionId,version,publishType){
			$.ajax({
				type:'POST',
	            url:$url3+'/bigdata/project/publishProject',
	            dataType:'json',
	            contentType: "application/json",
				data:JSON.stringify({
					"projectId":projectId,
					"versionId":versionId,
					"version":version,
					"publishType":publishType
				}),
				success:function(res){
					//console.log(res);
	              	if(res.code===0){
						layer.msg(res.message, {icon: 6});
		            }
				},
				error:function(err){
					console.log(err);
				}
			});
		}
		var switchVersion = function(){
			findProjVersion(projectId);
//			$(".cut-version").show();
			var index = layer.open({
			      type: 1,
			      btn: ['确定', '取消'],
			      area: ['490px', '330px'],
			      title:'切换版本',
			      shadeClose: true, //点击遮罩关闭
			      content:$(".cut-version"),
			      yes: function(index, layero){
			      	var $curLi = $(".cut-version li input:checked").parent("li"),
			      		curVersion = $curLi.attr("version"),
			      		curVersionId = $curLi.attr("versionid"),
			      		curProjectId = $curLi.attr("projectid"),
			      		curRemark = $curLi.attr("remark");
			      		console.log(curVersionId);
			      		//switchProjVersion(curVersionId);
			      	layer.close(index);
			      },
			      btn2:function(){
			      	layer.close(index);
			      },
			      cancel:function(){
			      	layer.close(index);
			      }
			   });
			
		};
		
		//查询版本
		function findProjVersion(projectId){
			$.ajax({
				type:'POST',
	            url:$url3+'/bigdata/projectVersion/findVersion',
	            dataType:'json',
	            contentType: "application/json",
				data:JSON.stringify({
					"projectId":projectId
				}),
				success:function(res){
					console.log(res);
	              	if(res.code===0){
						var data = res.data;
						var html = "";
						$.each(data, function(i,item) {
							html += `
								<li projectId="${item.projectId}" versionId="${item.versionId}" version="${item.version}" isRelease="${item.isRelease}" isActive="${item.isActive}" status="${item.status}" remark="${item.remark}">
									<img src="${i===0?'images/icon_circle_on.png':'images/icon_circle.png'}" alt="" />
									<input type="radio" name="version-name" ${i===0?"checked":""}/>
									<span>${item.version}</span>
								</li>
							`
						});
						$(".version-lists-box ul").empty().append(html);
		            }
				},
				error:function(err){
					console.log(err);
				}
			});
		}
		
		//是否保存版本
		function saveProjVersion(versionId,version,remark){
			$.ajax({
				type:'POST',
	            url:$url3+'/bigdata/projectVersion/saveVersion',
	            dataType:'json',
	            contentType: "application/json",
				data:JSON.stringify({
					"versionId":versionId,
					"version":version,
					"remark":remark
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
		
		//切换版本
		function switchProjVersion(versionId){
			$.ajax({
				type:'POST',
	            url:$url3+'/bigdata/projectVersion/saveVersion',
	            dataType:'json',
	            contentType: "application/json",
				data:JSON.stringify({
					"versionId":versionId
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
		
		//版本切换样式
		$(".cut-version ul").delegate("li","click",function(){
			var $s = $(this).find("input[name]:checked"),
				$idx = $s.parent().index();
				$s.prev("img").attr("src","images/icon_circle_on.png");
				$s.parent("li").siblings().find("img").attr("src","images/icon_circle.png");
			
		})
		
		var leadingIn = function(){
			var index = layer.confirm('确认导入文件?', {
			  btn: ['确定','取消'] //按钮
			}, function(index){
 //			  confirmLeadingIn();
 				alert('导入文件');
			  layer.close(index);
			  
			}, function(index){
			 	layer.close(index);
			});
		};
		
		function confirmLeadingIn(){
			$.ajax({
				type:'POST',
	            url:$url3+'/biddata/project/exportProject',
	            dataType:'json',
	            contentType: "application/json",
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
		
		var leadingOut = function(){
			var index = layer.confirm('确认导出项目?', {
			  btn: ['确定','取消'] //按钮
			}, function(index){
 			  confirmLeadingOut(projectId);
 				alert('导出项目');
			  layer.close(index);
			  
			}, function(index){
			 	layer.close(index);
			});
		};
		
		function confirmLeadingOut(projectId){
			$.ajax({
				type:'POST',
	            url:$url3+'/bigdata/project/importProject',
	            dataType:'json',
	            contentType: "application/json",
				data:JSON.stringify({
					"projectId":projectId
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
		var dataSourceConfig = function(){
      $("#iframepage1").attr("src","html/origin.html");
			// $('.data-source-config').css('display','block');
		};
    // // 添加数据源
    // $('.addBtn').click(function() {
    //   var dbType = $('#db_type').val();
    //   var dbName = $('.db_name').val();
    //   var dbSite = $('.db_site').val();
    //   var dbPort = $('.db_port').val();
    //   var dbDatabase = $('.db_database').val();
    //   var dbUser = $('.db_user').val();
    //   var dbPassword = $('.db_password').val();
    //   if (dbName == '') {
    //     layer.msg('请输入名称');
    //   } else if (dbSite == '') {
    //     layer.msg('请输入数据库地址');
    //   } else if (dbPort == '') {
    //     layer.msg('请输入端口');
    //   } else if (dbDatabase == '') {
    //     layer.msg('请输入数据库')
    //   } else if (dbUser == '') {
    //     layer.msg('请输入用户名')
    //   } else if (dbPassword == '') {
    //     layer.msg('请输入密码')
    //   } else {
    //     $.ajax({
    //       type: 'POST',
    //       url: $url2 +'/api/datasource/v1/saveDataSource', //$url2 +
    //       dataType: 'json',
    //       contentType: "application/json",
    //       data: JSON.stringify({
    //         "projectId": projectId,
    //         "name": dbName,
    //         "conHost": dbSite,
    //         "conPort": dbPort,
    //         "conType": "jdbc",
    //         "dbName": dbDatabase,
    //         "dbType": dbType,
    //         "password": dbPassword,
    //         "username": dbUser,
    //         "dsId": "",
    //         "companyId":companyId
    //       }),
    //       success: function (res) {
    //         console.log(res);
    //         if (res.code === 0) {
    //           $('.data-source-config').css('display', 'none');
    //           layer.msg('成功添加数据源');
    //         }
    //       },
    //       error: function (err) {
    //         console.log(err);
    //       }
    //     });
    //   }
    // });
    // // 链接测试
    // $('.linkBtn').click(function() {
    //     layer.msg('此功能暂未实现')
    // });
    // // 关闭数据源
    // $('.closeBtn').click(function() {
    //   $('.data-source-config').css('display','none');
    // });
		var setProperty = function(){
			$(".proj-attr").show();
		};
		var newFile = function(){
	    	findCurTree("fileTrees",directoryId);
			var index = layer.open({
			      type: 1,
			      btn: ['确定', '取消'],
			      area: ['490px', '530px'],
			      title:'创建文件夹',
			      shadeClose: true, //点击遮罩关闭
			      content:$(".file-mod"),
			      yes: function(index, layero){
			      	var filesName = $.trim($(".file-mod input").val());
			      	if(filesName){
			      		confirmCreateSubmodule(directoryId,filesName);//创建文件夹
			      		getProjName(0);//刷新左侧树数据
			      	}else{
			      		layer.msg("请输入文件夹名称", {icon: 5});
			      	}
			      	layer.close(index);
			      },
			      btn2:function(){
			      	layer.close(index);
			      },
			      cancel:function(){
			      	layer.close(index);
			      }
			   });
	   	};
	   	
    	var newEtl = function(){
    		$("#iframepage1").attr("src","html/etlStencil.html");
    	};
    	var newBi = function(){
    		$("#iframepage1").attr("src","html/biTemplet.html");
    	};
    	var newJob = function(){
        $("#iframepage1").attr("src","html/stencilmanage.html");
    	};
    	var createFpage = function(){
    		alert('Fpage');
    	}
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
		var items3 = [
			{ title: '新建作业流', fn: newJob},
			{ title: '新建文件夹', fn: newFile }
		];
		var items4 = [
			{ title: '创建子模块', fn: createSubmodule},
			{ title: '创建最终子模块', fn: createFinalSubmodule}
		];
		var items5 = [
			{ title: '新建文件夹', fn: newFile},
			{ title: '创建页面', fn: createFpage}
		];
		function zTreeOnClick(){
			var curTreeObj = $.fn.zTree.getZTreeObj("treeDemo");
			var curClickedDom = curTreeObj.getSelectedNodes();
			dirType = curTreeObj.getSelectedNodes()[0].directoryType;//目录类型
			directoryId = curTreeObj.getSelectedNodes()[0].directoryId;//目录id
			directoryName = curTreeObj.getSelectedNodes()[0].name;//目录名称
			projectId = curTreeObj.getSelectedNodes()[0].projectId;//项目id
			versionId = curTreeObj.getSelectedNodes()[0].versionId;//版本id
			//version = curTreeObj.getSelectedNodes()[0].version;//版本

      companyId = curTreeObj.getSelectedNodes()[0].companyId;
      createUser = curTreeObj.getSelectedNodes()[0].createUser;
      updateUser = curTreeObj.getSelectedNodes()[0].updateUser;
      rootPath = curTreeObj.getSelectedNodes()[0].rootPath;

      localStorage.setItem("projectId",projectId);
			localStorage.setItem("versionId",versionId);
			localStorage.setItem("directoryId",directoryId);
			localStorage.setItem("companyId",companyId);
			localStorage.setItem("createUser",createUser);
			localStorage.setItem("updateUser",updateUser);
			localStorage.setItem("rootPath",rootPath);
			console.log("=="+projectId);
			switch(dirType){
				case "1":
					items = items0;
				break;
				case "8":
					items = items1;
				break;
				case "11":
					items = items2;
				break;
				case "9":
					items = items3;
				break;
				case "6":
					items = items4;
				break;
				case "5":
					items = items5;
					break;
				case "3":
					items = [];
					$("#iframepage1").attr("src","html/menuSet.html");//菜单设置
					break;
				case "4":
					items = [];
					$("#iframepage1").attr("src","html/pageFlow.html");//页面流
					break;
				default:
					items = [];
			}
		}
		
		//弹出框树
		function leftKeyClick(){
			var curTreeObj = $.fn.zTree.getZTreeObj("subTrees");
			var curClickedDom = curTreeObj.getSelectedNodes();
			directoryId = curTreeObj.getSelectedNodes()[0].directoryId;//目录id
//			localStorage.setItem("directoryId",directoryId);
			console.log("1=="+directoryId)
		}
		
		var onRightKey = function(e){
				basicContext.show(items, e);
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
		
		/*
		 
		 * 根据目录 Id 查询树
		 * 
		 * 参数说明
		 * selectorId--树容器的id选择器
		 * dirId-------目录id
		 * 
		 * */
		
		function findCurTree(selectorId,dirId){
			$.ajax({
				type:'POST',
	            url:$url3+'/bigdata/project/findProjectTreeById',
	            dataType:'json',
	            contentType: "application/json",
				data:JSON.stringify({
					"id":dirId
				}),
				success:function(res){
					console.log(res);
	              	if(res.code===0){
						var treeObj = $("#"+selectorId+"");
						$.fn.zTree.init(treeObj, setting, res.data);
						zTree_Menu = $.fn.zTree.getZTreeObj(""+selectorId+"");
//						curMenu = zTree_Menu.getNodes()[0];
//						zTree_Menu.selectNode(curMenu);
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

})//jq end
