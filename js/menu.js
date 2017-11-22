$(function(){

	/*
	 
	 * 常用参数设置
	 * 
	 * projectId = localStorage.getItem("projectId")
	 * versionId = localStorage.getItem("versionId")
	 * createUser
	 * updateUser
	 * directoryId 根据 directoryId 查询
	 * parentId
	 * */

	
	var topMenu = [];//顶部导航菜单
	var topMenuId = sessionStorage.getItem("tId")||"";//topMenu--id
	var reportMenuId;
	var zNodes = [];//存放子菜单的数据
	var LeftMenu = [];//存放左侧所有菜单
	var pageId;//链接页面的id
	var lv1DirId = localStorage.getItem("lv1DirId");//一级目录id
	var index;//layer弹出框
	var dirType;//目录类型（12/13/15）
	var typeCode = "1";//模板1,2,3
	var parentId = "";
		
	var tempLogo = sessionStorage.getItem("tempLogo");
	var tempTxt = sessionStorage.getItem("tempTxt");
	//菜单设置
	$(".m-tabs-title").on("click","li",function(e){
		var $idx = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".m-cont"+$idx).show().siblings().hide();
		if($idx===2){
			getTopMenu(projectId,versionId,0);
			if(topMenu){
				var html = "";
				$.each(topMenu, function(i,item) {
					html += `
						<div class="swiper-slide ${i===0?'active':''}" reportMenuId="${item.reportMenuId}" parentId="${item.parentId}" sortIndex="${item.sortIndex}">${item.menuName}</div>
					`;
				});
				$("#link-scrollmenu").empty().append(html);
				topMenuId = $("#link-scrollmenu").find(".active").attr("reportmenuid");
				sessionStorage.setItem("tId",topMenuId);
				findLeftMenu(projectId,versionId,topMenuId);//查询左侧菜单
				
				var swiper = new Swiper('.swiper-container', {
			        nextButton: '.swiper-button-next',
			        prevButton: '.swiper-button-prev',
//			       	loop:true,
			       	slidesPerView: 'auto'
			   });
			}else{
				layer.msg("请先添加菜单!", {icon: 0});
			}
		}
	    e.preventDefault()
	})
	
	//样式--模板
	$(".m-cont-box1 ul").on("click","li",function(e){
		var $idx = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		typeCode = $idx+1;
		$(".m-html-mod-box>div").attr("class","m-html-mod m-html-mod"+$idx);
		e.preventDefault()
	})
	
	//菜单--导航切换
	$(".m-set-navs").on("click","a",function(e){
		var $idx = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".m-navscont"+$idx).show().siblings().hide();
		var swiper = new Swiper('.swiper-container', {
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
//	       	loop:true,
	       	slidesPerView: 'auto'
	    });
		 e.preventDefault();
	})
	
	//顶部菜单
	$("#head-text-btn").click(function(e){
		var headText = $.trim($("#head-text").val());
		if(headText){
			setHeadText(projectId,versionId,createUser,headText);
			$("#head-text").val("");
		}else{
			layer.msg("请输入顶部菜单内容", {icon: 5});
		}
		e.preventDefault();
	})

	function setHeadText(projectId,versionId,createUser,menuName){
		$.ajax({
			type:'POST',
            url:$url1+'/bi/report/v1/menu/saveReportMenu',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"projectId":projectId,
				"versionId":versionId,
				"createUser":createUser,
				"menuName":menuName
			},
			success:function(res){
              	if(res.code===0){
              		layer.msg(res.message, {icon: 6});
              		getTopMenu(projectId,versionId,0);
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	//获取 顶部导航菜单
	getTopMenu(projectId,versionId,0);
	function getTopMenu(projectId,versionId,menuType){
		$.ajax({
			type:'GET',
            url:$url1+'/bi/report/v1/menu/findReportMenu',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"projectId":projectId,
				"versionId":versionId,
				"menuType":menuType
			},
			success:function(res){
				console.log(res);
              	if(res.code===0){
              		var data;
              		var html = "";
              		var html2 = "";//页面展示
              		if(res.data!==null){
              			data = res.data;
          				topMenu = data;
              		}else{
              			data = [];
              		}
              		
          			$.each(data, function(i,item) {
              			if(i===0){
							findLeftMenu(projectId,versionId,item.reportMenuId);
              			}
              			html += `
              				<li reportMenuId="${item.reportMenuId}" menuType="${item.menuType}" pageId="${item.pageId}" parentId="${item.parentId}">
								<span class="m-menu-tag">${item.menuName}</span>
								<input type="text" class="top-reedit" value="${item.menuName}"/>
								<div class="m-navs-order-btns">
									${i===0?'':'<img src="../images/t_up.png" alt="" class="t-up"/>'}
									${i===data.length-1?'':'<img src="../images/t_down.png" alt="" class="t-down"/>'}
									<img src="../images/icon_close_02.png" alt="" class="t-del" />
								</div>
							</li>
              			`;
              			html2 += `
              				<li class="${i===0?'active':''}" reportMenuId="${item.reportMenuId}" menuType="${item.menuType}" pageId="${item.pageId}" parentId="${item.parentId}"><a href="javascript:;">${item.menuName}</a></li>
              			`;
              			
              			
              	});
              		$(".top-menu-15").empty().append(html);
              		$(".mn-menu").empty().append(html2);
              		
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	//双击-编辑头部菜单
	$(".top-menu-15").delegate(".m-menu-tag","dblclick",function(e){
		$(this).next(".top-reedit").show().parents("li").siblings().find(".top-reedit").hide();
		e.preventDefault();
	});
	
	
	//enter的状态下判断input的value是否修改,修改则提交修改信息
	$(document).keydown(function(e){
		if(e.which===13){
			if(e.target.nodeName==='INPUT'&&$(e.target).attr("class")==="top-reedit"){
				var reportMenuId = $(e.target).parent("li").attr("reportmenuid");
				var old = $(e.target).prev().text();
				var re = $.trim($(e.target).val());
				var menuName = (old===re?old:re);
				$(e.target).hide();
				if(old !== re){
					modifyTopMenuName(projectId,versionId,reportMenuId,menuName,updateUser);//修改
				}
			}
		}
	});
	//input失去焦点的时候判断input的value是否修改,修改则提交修改信息
	$(document).click(function(e){
		var target = $(e.target).attr("class");
		if(target==="top-reedit"){
			return false;
		}else{
			$(".top-reedit").hide();
		}
	})
	function modifyTopMenuName(projectId,versionId,reportMenuId,menuName,updateUser){
		$.ajax({
			type:'PUT',
            url:$url1+'/bi/report/v1/menu/updateReportMenu',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"projectId":projectId,
				"versionId":versionId,
				"reportMenuId":reportMenuId,
				"menuName":menuName,
				"updateUser":updateUser
			},
			success:function(res){
              	if(res.code===0){
              		getTopMenu(projectId,versionId,0);//刷新顶部菜单列表
              		layer.msg(res.message, {icon: 6});
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	//上移
	$(".top-menu-15").delegate(".t-up","click",function(e){
		var $li = $(this).parents("li");
		var reportMenuId = $li.attr("reportmenuid");
		var upOrDown = "7";
		modifyTopMenuPosition(projectId,versionId,reportMenuId,updateUser,upOrDown);
		e.preventDefault();
	});
	
	//下移
	$(".top-menu-15").delegate(".t-down","click",function(e){
		var $li = $(this).parents("li");
		var reportMenuId = $li.attr("reportmenuid");
		var upOrDown = "8";
		modifyTopMenuPosition(projectId,versionId,reportMenuId,updateUser,upOrDown);
		e.preventDefault();
	});
	
	//修改顶部菜单的位置
	function modifyTopMenuPosition(projectId,versionId,reportMenuId,updateUser,upOrDown){
		$.ajax({
			type:'PUT',
            url:$url1+'/bi/report/v1/menu/updateReportMenu',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"projectId":projectId,
				"versionId":versionId,
				"reportMenuId":reportMenuId,
				"updateUser":updateUser,
				"upOrDown":upOrDown
			},
			success:function(res){
              	if(res.code===0){
              		getTopMenu(projectId,versionId,0);//刷新顶部菜单列表
              		layer.msg(res.message, {icon: 6});
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	$(".top-menu-15").delegate(".t-del","click",function(e){
		var reportMenuId = $(this).parents("li").attr("reportmenuid");
		deleteTopMenu(projectId,versionId,reportMenuId,0,updateUser);
		e.preventDefault();
	});
	//删除顶部菜单
	function deleteTopMenu(projectId,versionId,reportMenuId,menuType,updateUser){
		$.ajax({
			type:'PUT',
            url:$url1+'/bi/report/v1/menu/deleteReportMenu',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
            data:{
            	"projectId":projectId,
				"versionId":versionId,
				"reportMenuId":reportMenuId,
				"menuType":menuType,
				"updateUser":updateUser
            },
			success:function(res){
				console.log(res);
              	if(res.code===0){
              		getTopMenu(projectId,versionId,0);//刷新顶部菜单列表
              		layer.msg(res.message, {icon: 6});
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	$("#clearTopMenu").click(function(e){
		clearTopMenu(projectId,versionId,updateUser);
		e.preventDefault();
	})
	//清空顶部菜单
	function clearTopMenu(projectId,versionId,updateUser){
		$.ajax({
			type:'PUT',
            url:$url1+'/bi/report/v1/menu/deleteReportMenu',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"projectId":projectId,
				"versionId":versionId,
				"updateUser":updateUser
			},
			success:function(res){
				console.log(res);
              	if(res.code===0){
              		getTopMenu(projectId,versionId,0);//刷新顶部菜单列表
              		layer.msg(res.message, {icon: 6});
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	//左边菜单
	$(".leftMenuBtn").click(function(e){
		getTopMenu(projectId,versionId,0);
		if(topMenu.length){
			$(".m-lsetnav-btns").show();
			$(".m-scroll-navs").show();
			var html = "";
			$.each(topMenu, function(i,item) {
				html += `
					<div class="swiper-slide ${i===0?'active':''}" reportMenuId="${item.reportMenuId}" menuType="${item.menuType}" pageId="${item.pageId}" parentId="${item.parentId}">${item.menuName}</div>
				`;
				if(i===0){
					sessionStorage.setItem("tId",item.reportMenuId);
				}
			});
			$("#scroll-topmenu").empty().append(html);
		}else{
			layer.msg("请先添加顶部菜单!", {icon: 0});
			$(".m-lsetnav-btns").hide();
			$(".m-scroll-navs").hide();
		}
		e.preventDefault();
	});
	
	
	
	//顶部菜单相应匹配的左侧菜单
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
			onClick: selectLeftMenu
//			,onRename:renameLeftMenu
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
			onClick:createLink
		}
	};
	var setting2 = {
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
			onClick:redirectPage
		}
	};
	var setting3 = {
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
			onClick:fpageLink
		}
	};
	
	//添加
	$(".le-add").click(function(){
		layer.closeAll();
		console.log(topMenuId);
		var pId = "";
		if(topMenuId){
			pId = topMenuId;
		}else{
			pId = reportMenuId;
		}
		console.log(pId);
		var index = layer.open({
	      type: 1,
	      btn: ['确定', '取消'],
	      area: ['300px', '200px'],
	      title:'添加菜单名称',
	      shade: 0, 
	      content:'<input type="text" placeholder="请输入菜单名称" class="le-add-menu"/>',
	      yes: function(index, layero){
	      	var menuName = $.trim($(".le-add-menu").val());
	      		if(menuName){
			        addLeftMenu(projectId,versionId,createUser,menuName,1,pId);
			        layer.close(index);
	      		}else{
	      			layer.msg("菜单名称不能为空", {icon: 5});
	      		}
	      },
	      btn2:function(){
	      	layer.close(index);
	      },
	      cancel:function(){
	      	layer.close(index);
	      }
	   });

	})
	
	//点击头部菜单展示对应的左部菜单
	$("#scroll-topmenu").delegate(".swiper-slide","click",function(e){
		$(this).addClass("active").siblings().removeClass("active");
		topMenuId = $(this).attr("reportmenuid");
		sessionStorage.setItem("tId",topMenuId);
		parentId = $(this).attr("reportmenuid");
		$("#match-tree").html("");
		findLeftMenu(projectId,versionId,parentId);
		e.preventDefault();
	});
	
	//点击页面头部获取左部菜单
	$(".mn-menu").delegate("li","click",function(){
		$(this).addClass("active").siblings().removeClass("active");
		topMenuId = $(this).attr("reportmenuid");
		sessionStorage.setItem("tId",topMenuId);
		parentId = $(this).attr("reportmenuid");
		$("#sidebar-tree").html("");
		findLeftMenu(projectId,versionId,parentId);
	})
	
	//添加左侧菜单
	function addLeftMenu(projectId,versionId,createUser,menuName,menuType,pId){
		$.ajax({
			type:'POST',
            url:$url1+'/bi/report/v1/menu/saveReportMenu',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"projectId":projectId,
				"versionId":versionId,
				"createUser":createUser,
				"menuName":menuName,
				"menuType":menuType,
				"parentId":pId
			},
			success:function(res){
				console.log(res);
              	if(res.code===0){
                	findLeftMenu(projectId,versionId,sessionStorage.getItem("tId"));//topMenuId
              		layer.msg(res.message, {icon: 6});
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
//	findLeftMenu(projectId,versionId,0);
	//查询左侧菜单
	function findLeftMenu(projectId,versionId,reportMenuId){
		$.ajax({
			type:'GET',
            url:$url1+'/bi/report/v1/menu/findReportMenu',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"projectId":projectId,
				"versionId":versionId,
				"reportMenuId":reportMenuId
			},
			success:function(res){
				console.log(res);
              	if(res.code===0){
              		zNodes = res.data===null?[]:res.data;
          			$.fn.zTree.init($("#match-tree"), setting, zNodes);
          			$.fn.zTree.init($("#link-tree"), setting1, zNodes);
          			$.fn.zTree.init($("#sidebar-tree"), setting2, zNodes);
          			$.fn.zTree.getZTreeObj("sidebar-tree").expandAll(true);//默认展开
          			$.fn.zTree.getZTreeObj("match-tree").expandAll(true);
          			$.fn.zTree.getZTreeObj("link-tree").expandAll(true);
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	$(".le-close").click(function(e){
		deleteLeftMenu(projectId,versionId,reportMenuId,1,updateUser);
		e.preventDefault();
	});
	
	//删除左侧菜单
	function deleteLeftMenu(projectId,versionId,reportMenuId,menuType,updateUser){
		$.ajax({
			type:'PUT',
            url:$url1+'/bi/report/v1/menu/deleteReportMenu',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
            data:{
            	"projectId":projectId,
				"versionId":versionId,
				"reportMenuId":reportMenuId,
				"menuType":menuType,
				"updateUser":updateUser
            },
			success:function(res){
              	if(res.code===0){
              		findLeftMenu(projectId,versionId,topMenuId);
              		layer.msg(res.message, {icon: 6});
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	//上移
	$(".le-up").click(function(e){
		var upOrDown = "7";
		orderLeftMenu(projectId,versionId,reportMenuId,upOrDown,updateUser);
		e.preventDefault();
	})
	
	//下移
	$(".le-down").click(function(e){
		var upOrDown = "8";
		orderLeftMenu(projectId,versionId,reportMenuId,upOrDown,updateUser);
		e.preventDefault();
	})
	
	
	//排序左侧菜单
	function orderLeftMenu(projectId,versionId,reportMenuId,upOrDown,updateUser){
		$.ajax({
			type:'PUT',
            url:$url1+'/bi/report/v1/menu/updateReportMenu',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"projectId":projectId,
				"versionId":versionId,
				"reportMenuId":reportMenuId,
				"upOrDown":upOrDown,
				"updateUser":updateUser
			},
			success:function(res){
              	if(res.code===0){
              		findLeftMenu(projectId,versionId,topMenuId);
              		layer.msg(res.message, {icon: 6});
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	//清空--topMenuId对应的 leftMenu
	$(".le-clear").click(function(e){
		console.log(sessionStorage.getItem("tId"));
		if(sessionStorage.getItem("tId")===null){
			layer.msg("请先选择要清除的子菜单的顶部菜单", {icon: 0});
		}else{
			clearLeftMenu(projectId,versionId,sessionStorage.getItem("tId"),2,updateUser);
		}
		e.preventDefault();
	})
	//清空左部菜单
	function clearLeftMenu(projectId,versionId,reportMenuId,menuType,updateUser){
		$.ajax({
			type:'PUT',
            url:$url1+'/bi/report/v1/menu/deleteReportMenu',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"projectId":projectId,
				"versionId":versionId,
				"reportMenuId":reportMenuId,
				"menuType":menuType,
				"updateUser":updateUser
			},
			success:function(res){
              	if(res.code===0){
              		findLeftMenu(projectId,versionId,topMenuId)//刷新左部菜单列表
              		layer.msg(res.message, {icon: 6});
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	function selectLeftMenu(){
		var zTree = $.fn.zTree.getZTreeObj("match-tree");
		var curDom = zTree.getSelectedNodes();
		var name = curDom[0].name;
		var pId = curDom[0].pId;
		var pageId = curDom[0].pageId;
			reportMenuId = curDom[0].reportMenuId;
			topMenuId = "";//设置为空,则添加子菜单
			console.log('1'+reportMenuId);
			console.log('2'+topMenuId);
/*		var menuName = '';
			layer.closeAll();
		var index = layer.open({
		      type: 1,
		      btn: ['确定', '取消'],
		      area: ['300px', '200px'],
		      title:'添加子菜单',
		      shade: 0, 
		      content:'<input type="text" placeholder="添加子菜单" class="le-add-menu"/>',
		      yes: function(index, layero){
		      		menuName = $.trim($(".le-add-menu").val());
		      		if(menuName){
				        addLeftMenu(projectId,versionId,createUser,menuName,1,reportMenuId);
				        layer.close(index);
		      		}else{
		      			layer.msg("菜单名称不能为空", {icon: 5});
		      		}
		      },
		      btn2:function(){
		      	layer.close(index);
		      },
		      cancel:function(){
		      	layer.close(index);
		      }
		   });
		 */
	}
	
	function renameLeftMenu(event, treeId, treeNode, isCancel){
		alert(treeNode.tId + ", " + treeNode.name);
		var zTree = $.fn.zTree.getZTreeObj("match-tree");
		var curDom = zTree.getSelectedNodes();
		var oldName = treeNode.name;
	}
	
	function createLink(){
		var zTree = $.fn.zTree.getZTreeObj("link-tree");
		var curDom = zTree.getSelectedNodes();
		reportMenuId = curDom[0].reportMenuId;
	}
	function fpageLink(){
		var zTree = $.fn.zTree.getZTreeObj("modal-tree");
		var curDom = zTree.getSelectedNodes();
//		reportMenuId = curDom[0].reportMenuId;
		dirType = curDom[0].directoryType;
		switch(dirType){
			case "14":
			case "15":
				pageId = curDom[0].directoryId;
			break;
			default:
				pageId = "";	
		}

		if(pageId){
			createPageLink(projectId,versionId,reportMenuId,pageId,updateUser);
			layer.close(index);
		}else{
			layer.msg("请选择	BI页面", {icon: 0});
		}
	}
	
	function redirectPage(){
		var zTree = $.fn.zTree.getZTreeObj("sidebar-tree");
		var curDom = zTree.getSelectedNodes();
		pageId = curDom[0].pageId;
		console.log(pageId);
		if(pageId != null){//执行画图
			adce(pageId)
		}else{//提醒未设置链接
			$(".mn-htmlmain").empty();
		}
	}
	
	
	
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
		
		var aObj = $("#" + treeNode.tId + IDMark_A);
		if(treeId==="link-tree"){
			console.log(treeNode.pageId);
			var editStr = `<a id="${treeNode.reportMenuId}" pageId="${treeNode.pageId}"  class="page-link-btn">${treeNode.pageId===null||treeNode.pageId===""?"创建链接":"已创建链接"}</a>`;
			aObj.append(editStr);
		}
	}
	//
	// treeHover($("#match-tree"));
	// treeHover($("#link-tree"));
	// treeHover($("#modal-tree"));
	// treeHover($("#sidebar-tree"));
	function treeHover(treeObj){
		treeObj.hover(function(){
			if (!treeObj.hasClass("showIcon")){
				treeObj.addClass("showIcon");
			}
		}, function(){
			treeObj.removeClass("showIcon");
		});
	}



	/* 
	 *样式
	 */
	$(".m-pageset-btns").on("click","button",function(e){
		$(this).addClass("active").siblings().removeClass("active");
		var idx = $(this).index();
		var oInput = $(this).parent().next().find("input[type]");
		switch(idx){
			case 0:
				for(var i=0;i<oInput.length;i++){
					$(oInput).eq([i]).attr("readonly","readonly");
				};
			break;
			case 1:
				for(var i=0;i<oInput.length;i++){
					$(oInput).eq([i]).removeAttr("readonly");
				};
			break;
		}
		e.preventDefault();
	})
	$("#ok-model").click(function(e){
		var typeCode = $(".m-cont-box1 li.active").index()+1,
			topWidth = $(".mtop-width").val(),
			topHeight = $(".mtop-height").val(),
			leftWidth = $(".mleft-width").val(),
			leftHeight = $(".mleft-height").val(),
			navigationText = $(".mnavigation-text").val();
		if($.trim(topWidth)&&$.trim(topHeight)&&$.trim(leftWidth)&&$.trim(leftHeight)&&$.trim(navigationText)){
			addModel(projectId,versionId,typeCode,topWidth,topHeight,leftWidth,leftHeight,navigationText,updateUser);
		}else{
			layer.msg("信息不能为空", {icon: 5});
		}
		e.preventDefault();
	})
	
	function addModel(projectId,versionId,typeCode,topWidth,topHeight,leftWidth,leftHeight,navigationText,user){
		$.ajax({
			type:'POST',
            url:$url1+'/api/v1/saveTemplateStyle',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"projectId":projectId,
				"versionId":versionId,
				"typeCode":typeCode,
				"topWidth":topWidth,
				"topHeight":topHeight,
				"leftWidth":leftWidth,
				"leftHeight":leftHeight,
				"navigationText":navigationText,
				"user":user
			},
			success:function(res){
              	if(res.code===0){
              		$(".mn-headtxt").text(navigationText);
              		sessionStorage.setItem("tempTxt",navigationText);
              		$(".mnavigation-text").val("");
              		layer.msg(res.message, {icon: 6});
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	
	//上传图片
	$('.m-uploadimg-box input[type="file"]').on('change',upLoadImg);
	function upLoadImg(){
		var file = $(this)[0].files[0];
		let	filterType=/(?:jpeg|jpg|png|bmp)$/i, /*图片上传类型*/
			maxSize=1*1024*1024;   /*图片上传的大小最大值*/
		console.log(file);
		if(!filterType.test(file.type)){
			layer.msg("请上传图片文件!",{icon:0});
			return false;
		}
		if(file.size>maxSize){
			layer.msg("图片大小不能超过1M",{icon:0});
			return false;
		}
		var formData = new FormData($('.m-uploadimg')[0]);
		formData.append("file",file);
		formData.append("projectId",projectId);
		formData.append("versionId",versionId);
		formData.append("typeCode",typeCode);
		formData.append("user",updateUser);
		$.ajax({
			type:"POST",
			url:$url1+"/api/v1/saveTemplateImage",
			data:formData,
			processData: false,
		    contentType: false,
		    headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			success:function(res){
				console.log(res);
				if(res.code===0){
					$(".m-uploadimg>img").attr("src",$url1+res.data);
					$(".mn-logobox>img").attr("src",$url1+res.data);
					sessionStorage.setItem("tempLogo",res.data);
					layer.msg("上传图片成功", {icon: 6});
				}else{
					layer.msg("上传图片失败", {icon: 0});
				}
			},
			error:function(res){
				console.log(res);
			}
		});
	}
//	if(tempLogo != ""){
//		$(".mn-logobox>img").attr("src",$url1+tempLogo);
//	}
	
	$("#del-uploadimg-btn").click(function(){
		delUploadImg(projectId,versionId,typeCode,updateUser,updateUser);
	});
	//删除图片
	function delUploadImg(projectId,versionId,typeCode){
		$.ajax({
			type:'POST',
	        url:$url1+'/api/v1/deleteTemplateImage',
	        headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"projectId":projectId,
				"versionId":versionId,
				"typeCode":typeCode,
				"user":updateUser
			},
			success:function(res){
	          	if(res.code===0){
	          		$(".m-uploadimg>img").attr("src","../images/c_img.png");
					$(".mn-logobox>img").attr("src","");
	          		layer.msg("删除图片成功", {icon: 6});
	            }else{
	            	layer.msg("删除图片失败", {icon: 0});
	            }
			},
			error:function(err){
				console.log(err);
			}
		})
	}
	
	//点击 标准-自定义按钮的自动设置
	$(".tbz-btn").click(function(){
		$(".mtop-width").val("1920");
		$(".mtop-height").val("60");
	});
	$(".lbz-btn").click(function(){
		$(".mleft-width").val("240");
		$(".mleft-height").val("600");
	});
	
	//菜单设计
	$(".m-cont0>div>h4").click(function(){
		$(this).toggleClass("active").next().toggle();
	});
	/* 
	 * 链接
	 */
	//点击头部菜单展示对应的左部菜单
	$("#link-scrollmenu").delegate(".swiper-slide","click",function(){
		$(this).addClass("active").siblings().removeClass("active");
		topMenuId = $(this).attr("reportmenuid");
		sessionStorage.setItem("tId",topMenuId);
		$("#link-tree").html("");
		findLeftMenu(projectId,versionId,topMenuId);
	})
		
	$("#link-tree").delegate(".page-link-btn","click",function(){
		getProjPages(lv1DirId);
		index = layer.open({
		      type: 1,
		      area: ['490px', '330px'],
		      title:'链接页面',
		      shadeClose: true, //点击遮罩关闭
		      content:$(".link-modal"),
		      cancel:function(){
		      	layer.close(index);
		      }
		   });
	});
	
	function getProjPages(lv1DirId){
		$.ajax({
			type:'POST',
            url:$url3+'/bigdata/project/findProjectTreeById',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
            dataType:'json',
            contentType: "application/json",
			data:JSON.stringify({
				"directoryId":lv1DirId,
				"versionId":versionId
			}),
			success:function(res){
				console.log(res.data);
              	if(res.code===0){
              		zNodes = res.data;
              		if(zNodes!==null){
              			$.fn.zTree.init($("#modal-tree"), setting3, zNodes);
              			$.fn.zTree.getZTreeObj("modal-tree").expandAll(true);
              		}else{
              			layer.msg("未添加BI页面", {icon: 0});
              		}
              		
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	//创建链接
	function createPageLink(projectId,versionId,reportMenuId,pageId,updateUser){
		$.ajax({
			type:'POST',
            url:$url1+'/bi/report/v1/menu/addPageId',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"projectId":projectId,
				"versionId":versionId,
				"reportMenuId":reportMenuId,
				"pageId":pageId,
				"updateUser":updateUser
			},
			success:function(res){
              	if(res.code===0){
					$("#link-tree .curSelectedNode").find(".page-link-btn").text("已创建链接");
              		layer.msg(res.message, {icon: 6});
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}

	//取消链接
	$("#del-pagelink-btn").click(function(e){
        deletePageLink(projectId,versionId,reportMenuId,pageId,updateUser);
        e.preventDefault();
	});

	//清除链接
	$("#clear-pagelink-btn").click(function(e){
		if(sessionStorage.getItem("tId")===null){
            layer.msg("请先选择要清除的子菜单的顶部菜单", {icon: 0});
		}else{
            deletePageLink(projectId,versionId,sessionStorage.getItem("tId"),pageId,updateUser);
		}
        e.preventDefault();
	});

	//取消链接
	function deletePageLink(projectId,versionId,reportMenuId,pageId,updateUser){
		$.ajax({
			type:"PUT",
			url:$url1+"/bi/report/v1/menu/deletePageId",
			headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"projectId":projectId,
				"versionId":versionId,
				"reportMenuId":reportMenuId,
				"pageId":pageId,
				"updateUser":updateUser
			},
			success:function(res){
              	if(res.code===0){
                    findLeftMenu(projectId,versionId,sessionStorage.getItem("tId"));
              		layer.msg(res.message, {icon: 6});

	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	//获取页面所有的菜单--顶部菜单和左部菜单
//	getAllMenu(projectId,versionId);
	function getAllMenu(projectId,versionId){
		$.ajax({
			type:'GET',
            url:$url1+'/bi/report/v1/menu/findReportMenu',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"projectId":projectId,
				"versionId":versionId
			},
			success:function(res){
				console.log(res);
              	if(res.code===0){
              		var data = res.data;
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	//1.6 获取默认的左菜单
	//findDefinedLeftMenu(projectId,versionId);
	function findDefinedLeftMenu(projectId,versionId){
		$.ajax({
			type:"GET",
			url:$url1+"/bi/report/v1/menu/findReportMenuLeftDefault",
			headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"projectId":projectId,
				"versionId":versionId
			},
			success:function(res){
				console.log(res);
				if(res.code===0){
					var data = res.data;
						zNodes = data;
						if(zNodes.length){
							$.fn.zTree.init($("#temp-tree"), setting2, zNodes);
							$.fn.zTree.getZTreeObj("temp-tree").expandAll(true);
						}else{
							layer.msg("未添加BI页面", {icon: 6});
						}
					
				}
			},
			error:function(res){
				console.log(res);
			}
		});
	}
	
	//1.7 查询模板
	findTemp(projectId,versionId);
	function findTemp(projectId,versionId){
		$.ajax({
			type:"GET",
			url:$url1+"/api/v1/findTemplateStyle",
			headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"projectId":projectId,
				"versionId":versionId
			},
			success:function(res){
				if(res.code===0&&res.data.length){
					var data = res.data[0];
					var logo,
						leftHeight = data.leftHeight,
						leftWidth = data.leftWidth,
						navigationText = data.navigationText,
						topHeight = data.topHeight,
						topWidth = data.topWidth,
						typeCode = parseInt(data.typeCode);
						//存储
						sessionStorage.setItem("leftHeight",leftHeight);
						sessionStorage.setItem("leftWidth",leftWidth);
						sessionStorage.setItem("topHeight",topHeight);
						sessionStorage.setItem("topWidth",topWidth);
						if(logo!==null&&logo!=="undefined"){
							logo = data.logo;
							sessionStorage.setItem("tempLogo",logo);
						}else{
							sessionStorage.setItem("tempLogo","");
						}
						console.log(data);
						if(navigationText!==undefined&&navigationText!==null){
							$(".mn-headtxt").text(navigationText);
							sessionStorage.setItem("tempTxt",navigationText);
						}else{
							$(".mn-headtxt").text("小道科技欢迎您!");
							sessionStorage.setItem("tempTxt","");
						}
						if(logo!==undefined&&logo!==null){
							$(".mn-logobox>img").attr("src",$url1+logo);
						}else{
							$(".mn-logobox>img").attr("src","../images/mlogo.png");
						}
						if(topWidth===null||topHeight===null||topWidth==="1920"&&topHeight==="60"){
							$(".topsize button").eq(0).addClass("active").siblings().removeClass("active");
							$(".mtop-width").val("1200");
							$(".mtop-height").val("60");
						}else{
							$(".topsize button").eq(1).addClass("active").siblings().removeClass("active");
							$(".mtop-width").val(topWidth);
							$(".mtop-height").val(topHeight);
						}
						if(leftWidth===null||leftHeight===null||leftWidth==="240"&&leftHeight==="600"){
							$(".leftsize button").eq(0).addClass("active").siblings().removeClass("active");
							$(".mleft-width").val("240");
							$(".mleft-height").val("600");
						}else{
							$(".leftsize button").eq(1).addClass("active").siblings().removeClass("active");
							$(".mleft-width").val(leftWidth);
							$(".mleft-height").val(leftHeight);
						}
						console.log(typeCode);
						$(".m-html-mod-box>div").attr("class","m-html-mod m-html-mod"+(typeCode-1));
						$(".m-cont-box1 ul li").eq(typeCode-1).addClass("active").siblings().removeClass("active");
						
				}
			},
			error:function(res){
				console.log(res);
			}
		});
	}
	
	
	//预览
	$("#preview").click(function(e){
		var url  = "?username="+ username +"&userId="+ userId +"&pageId="+ dirId +"&projectId="+ projectId +"&versionId="+ versionId +"";
    	window.open("../html/preview.html" + url);
    	e.preventDefault();
	})
	
	//页面跳转
	$(".mn-htmlmain").delegate(".resize-item","click",function(e){
		var linkPageId = $(this).attr("linkpageid");
		if(linkPageId){
			window.open("../html/preview.html?projectId="+projectId+"&versionId="+versionId+"&userId="+userId+"&pageId="+linkPageId);
		}
		e.preventDefault();
	})
	
	//提示
	var todo = {
		tip:function(){
			$(".top-bar>img").on("mouseenter",function(){
	            layer.tips($(this).attr('data-tip'), this,{
	                tips: 3
	            });
	        });
		},
		deltip:function(){
			$(".opt-tip").on("mouseenter",function(){
	            layer.tips($(this).attr('data-tip'), this,{
	                tips: 3
	            });
	        });
		},
		refresh:function(){
			window.location.reload();
		}
	};
	todo.tip();
	todo.deltip();
	//刷新
	$("#page-fresh").click(function(){
		todo.refresh();
	})
	
});//jq end


    /*
     * 根据传递的参数，获取页面数据
     * */
    
	function adce(pageId){
//		console.log(pageId + "22222222222222222222222")
	    $.ajax({
	        type:"get",
	        url:"/xdbd-bi/bi/report/v1/page.json",
	        headers:{
	            username:username,
	            userId:userId
	        },
	        data:{
	            "pageId":pageId,
	            "projectId":projectId,
	            "versionId":versionId,
	        },
	        dataType:"json",
	        success:function(data){
	            if(data.code === 0){
	                if(data.data.htmlJson){
	                    displayPage(data.data);
	                }
	            }
	        },
	        error:function(res){
	            // console.log(res);
	        }
	    });
	}

	
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
                if(val.customData.controls){
                    text = val.customData.controls.html;
                }else if(dataType === "text"){
                    text = '<div class="content-text edit"><div contenteditable="false" spellcheck="true" data-medium-editor-element="true" role="textbox" aria-multiline="true" data-placeholder="请输入文本" data-medium-focused = "true"></div></div>';
                }else if(dataType === "button"){
                    text = '<div class="content-button"><button></button></div>';
                }
            }else if(dataType === "table" || dataType === "chart"){
                // 将数据存入检索数据中
                var chart_date = {
                    'cid':val.cid,
                    "type":val.type,
                    "queryJson":val.queryJson,
                };
                DataIndexes.inAjax(chart_date,val.cid);
            }
            html += '<div linkPageId="'+val.linkPageId+'" id="'+ val.cid +'" type="'+ val.type +'" data-type="'+ val.customData.dataType +'" style="height:'+ style.height +'px;width:'+ style.width +'px;top:'+ style.top +'px;left:'+ style.left +'px;z-index:'+ val.displayLevel +'" class="resize-item">'+ text +'</div>';
        });
        $(".mn-htmlmain").empty().append(html);
    }