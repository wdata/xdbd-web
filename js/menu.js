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
	 
	 * 常用参数设置
	 * 
	 * projectId = localStorage.getItem("projectId")
	 * projectVersionId = localStorage.getItem("versionId")
	 * createUser
	 * updateUser
	 * directoryId 根据 directoryId 查询
	 * parentId
	 * */
	
	var projectId = localStorage.getItem("projectId");
	var projectVersionId = localStorage.getItem("versionId");
	var dirId = localStorage.getItem("directoryId");
	var createUser = localStorage.getItem("createUser");
	var updateUser = localStorage.getItem("updateUser");
	var topMenu = [];//顶部导航菜单
	var topMenuId = 0;//topMenu--id
	var projectMenuId;//projectMenuId
	var zNodes = [];//存放子菜单的数据
	var LeftMenu = [];//存放左侧所有菜单
	var pageId;//链接页面的id
	var lv1DirId = localStorage.getItem("lv1DirId");//一级目录id
	var index;//layer弹出框
	var dirType;//目录类型（12/13/15）
	var typeCode = "1";//模板1,2,3

	//菜单设置
	$(".m-tabs-title").on("click","li",function(e){
		var $idx = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".m-cont"+$idx).show().siblings().hide();
		if($idx===2){
			getTopMenu(projectId,projectVersionId);
			var html = "";
			console.log(topMenu);
			$.each(topMenu, function(i,item) {
				html += `
					<div class="swiper-slide ${i===0?'active':''}" id="${item.id}" parentId="${item.parentId}" sortIndex="${item.sortIndex}">${item.menuName}</div>
				`;
			});
			$("#link-scrollmenu").empty().append(html);
			topMenuId = $("#link-scrollmenu").find(".active").attr("id");
			findLeftMenu(projectId,projectVersionId,topMenuId);//查询左侧菜单
			
			var swiper = new Swiper('.swiper-container', {
		        nextButton: '.swiper-button-next',
		        prevButton: '.swiper-button-prev',
		       	loop:true,
		       	slidesPerView: 3
		   });
		}
	    e.preventDefault()
	})
	
	//样式--模板
	$(".m-cont-box1 ul").on("click","li",function(e){
		var $idx = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".m-html-mod"+$idx).show().siblings().hide();
		typeCode = $idx+1;
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
	       	loop:true,
	       	slidesPerView: 3
	    });
		 e.preventDefault();
	})
	
	//顶部菜单
	$("#head-text-btn").click(function(){
		var headText = $.trim($("#head-text").val());
		if(headText){
			setHeadText(projectId,projectVersionId,createUser,headText);
			$("#head-text").val("");
		}else{
			layer.msg("请输入顶部菜单内容", {icon: 5});
		}
	})

	function setHeadText(projectId,projectVersionId,createUser,menuName){
		$.ajax({
			type:'POST',
            url:$url1+'/api/v1/saveProjectMenuTop',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"projectId":projectId,
				"projectVersionId":projectVersionId,
				"createUser":createUser,
				"menuName":menuName
			},
			success:function(res){
              	if(res.code===0){
              		layer.msg(res.message, {icon: 6});
              		getTopMenu(projectId,projectVersionId);
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	//获取 顶部导航菜单
	getTopMenu(projectId,projectVersionId);
	function getTopMenu(projectId,projectVersionId){
		$.ajax({
			type:'GET',
            url:$url1+'/api/v1/findProjectMenuTop',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"projectId":projectId,
				"projectVersionId":projectVersionId
			},
			success:function(res){
              	if(res.code===0){
              		var data = res.data.slice(0,5);
              		var html = "";
              		var html2 = "";//页面展示
              		topMenu = data;              		
              		$.each(data, function(i,item) {
              			html += `
              				<li id="${item.id}" createUser="${item.createUser}" updateUser="${item.updateUser}">
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
              				<li class="${i===0?'active':''}" id="${item.id}"><a href="javascript:;">${item.menuName}</a></li>
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
	$(".top-menu-15").delegate(".m-menu-tag","dblclick",function(){
		$(this).next(".top-reedit").show().parents("li").siblings().find(".top-reedit").hide();
	});
	
	
	//enter的状态下判断input的value是否修改,修改则提交修改信息
	$(document).keydown(function(e){
		if(e.which===13){
			if(e.target.nodeName==='INPUT'&&$(e.target).attr("class")==="top-reedit"){
				var id = $(e.target).parent("li").attr("id");
				var updateUser = $(e.target).parent("li").attr("updateuser");
				var old = $(e.target).prev().text();
				var re = $.trim($(e.target).val());
				var menuName = (old===re?old:re);
				$(e.target).hide();
				if(old !== re){
					modifyTopMenuName(id,menuName,updateUser);//修改
				}
			}
		}
	})
	function modifyTopMenuName(id,menuName,updateUser){
		$.ajax({
			type:'PUT',
            url:$url1+'/api/v1/updateMenuNameById',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"id":id,
				"menuName":menuName,
				"updateUser":updateUser
			},
			success:function(res){
              	if(res.code===0){
              		getTopMenu(projectId,projectVersionId);//刷新顶部菜单列表
              		layer.msg(res.message, {icon: 6});
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	//上移
	$(".top-menu-15").delegate(".t-up","click",function(){
		var $li = $(this).parents("li");
		var id = $li.attr("id");
		var upOrDown = "up";
		modifyTopMenuPosition(id,updateUser,upOrDown);
	});
	
	//下移
	$(".top-menu-15").delegate(".t-down","click",function(){
		var $li = $(this).parents("li");
		var id = $li.attr("id");
		var upOrDown = "down";
		modifyTopMenuPosition(id,updateUser,upOrDown);
	});
	
	//修改顶部菜单的位置
	function modifyTopMenuPosition(id,updateUser,upOrDown){
		$.ajax({
			type:'PUT',
            url:$url1+'/api/v1/updateProjectMentSortIndexTopById',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"id":id,
				"updateUser":updateUser,
				"upOrDown":upOrDown
			},
			success:function(res){
              	if(res.code===0){
              		getTopMenu(projectId,projectVersionId);//刷新顶部菜单列表
              		layer.msg(res.message, {icon: 6});
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	$(".top-menu-15").delegate(".t-del","click",function(){
		var id = $(this).parents("li").attr("id");
		deleteTopMenu(id);
	});
	//删除顶部菜单
	function deleteTopMenu(id){
		$.ajax({
			type:'DELETE',
            url:$url1+'/api/v1/deleteProjectMenuTopById/'+id,
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			success:function(res){
              	if(res.code===0){
              		getTopMenu(projectId,projectVersionId);//刷新顶部菜单列表
              		layer.msg(res.message, {icon: 6});
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	$("#clearTopMenu").click(function(){
		clearTopMenu(projectId,projectVersionId);
	})
	//清空顶部菜单
	function clearTopMenu(projectId,projectVersionId){
		$.ajax({
			type:'GET',
            url:$url1+'/api/v1/deleteProjectMenuAll',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"projectId":projectId,
				"projectVersionId":projectVersionId
			},
			success:function(res){
              	if(res.code===0){
              		getTopMenu(projectId,projectVersionId);//刷新顶部菜单列表
              		layer.msg(res.message, {icon: 6});
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	//左边菜单
	$(".leftMenuBtn").click(function(){
		getTopMenu(projectId,projectVersionId);
		var html = "";
		$.each(topMenu, function(i,item) {
			html += `
				<div class="swiper-slide ${i===0?'active':''}" id="${item.id}" parentId="${item.parentId}" sortIndex="${item.sortIndex}">${item.menuName}</div>
			`;
		});
		$("#scroll-topmenu").empty().append(html);
		topMenuId = $("#scroll-topmenu").find(".active").attr("id");
		findLeftMenu(projectId,projectVersionId,topMenuId);//查询左侧菜单
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
			onClick: selectLeftMenu,
			onRename:renameLeftMenu
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
				        addLeftMenu(menuName,0,topMenuId,createUser);
		      		}else{
		      			layer.msg("菜单名称不能为空", {icon: 5});
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
	})
	
	//点击头部菜单展示对应的左部菜单
	$("#scroll-topmenu").delegate(".swiper-slide","click",function(){
		$(this).addClass("active").siblings().removeClass("active");
		topMenuId = $(this).attr("id");
		findLeftMenu(projectId,projectVersionId,topMenuId);
	});
	
	//点击页面头部获取左部菜单
	$(".mn-menu").delegate("li","click",function(){
		$(this).addClass("active").siblings().removeClass("active");
		topMenuId = $(this).attr("id");
		findLeftMenu(projectId,projectVersionId,topMenuId);
	})
	
	//添加左侧菜单
	function addLeftMenu(menuName,projectMenuId,topMenuId,createUser){
		$.ajax({
			type:'POST',
            url:$url1+'/api/v1/saveProjectMenuLeft',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"menuName":menuName,
				"projectMenuId":projectMenuId,
				"topMenuId":topMenuId,
				"createUser":createUser
			},
			success:function(res){
              	if(res.code===0){
              		findLeftMenu(projectId,projectVersionId,topMenuId);
              		layer.msg(res.message, {icon: 6});
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	findLeftMenu(projectId,projectVersionId,0);
	//查询左侧菜单
	function findLeftMenu(projectId,projectVersionId,topMenuId){
		$.ajax({
			type:'GET',
            url:$url1+'/api/v1/findProjectMenuLeft',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"projectId":projectId,
				"projectVersionId":projectVersionId,
				"parentId":topMenuId
			},
			success:function(res){
              	if(res.code===0){
              		zNodes = res.data;
//            		if(zNodes){
              			$.fn.zTree.init($("#match-tree"), setting, zNodes);
              			$.fn.zTree.init($("#link-tree"), setting1, zNodes);
              			$.fn.zTree.init($("#sidebar-tree"), setting2, zNodes);
//            		}
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	$(".le-close").click(function(){
		deleteLeftMenu(projectMenuId);
		findLeftMenu(projectId,projectVersionId,topMenuId);
	});
	
	//删除左侧菜单
	function deleteLeftMenu(id){
		$.ajax({
			type:'DELETE',
            url:$url1+'/api/v1/deleteProjectMenuLeftById/'+id,
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			success:function(res){
              	if(res.code===0){
              		layer.msg(res.message, {icon: 6});
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	//上移
	$(".le-up").click(function(){
		var upOrDown = "up";
		orderLeftMenu(projectMenuId,updateUser,upOrDown)
		findLeftMenu(projectId,projectVersionId,topMenuId)
	})
	
	//下移
	$(".le-down").click(function(){
		var upOrDown = "down";
		orderLeftMenu(projectMenuId,updateUser,upOrDown);
		findLeftMenu(projectId,projectVersionId,topMenuId);
	})
	
	
	//排序左侧菜单
	function orderLeftMenu(projectMenuId,updateUser,upOrDown){
		$.ajax({
			type:'PUT',
            url:$url1+'/api/v1/updateProjectMentSortIndexLeftById',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"id":projectMenuId,
				"updateUser":updateUser,
				"upOrDown":upOrDown
			},
			success:function(res){
              	if(res.code===0){
              		layer.msg(res.message, {icon: 6});
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	//清空--topMenuId对应的 leftMenu
	$(".le-clear").click(function(){
		clearTopMenu(topMenuId);
		findLeftMenu(projectId,projectVersionId,topMenuId)//刷新左部菜单列表
	})
	//清空左部菜单
	function clearTopMenu(topMenuId){
		$.ajax({
			type:'GET',
            url:$url1+'/api/v1/deleteProjectMenuLeftALlById',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"topMenuId":topMenuId
			},
			success:function(res){
              	if(res.code===0){
              		findLeftMenu(projectId,projectVersionId,topMenuId)//刷新左部菜单列表
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
			topMenuId = curDom[0].id;
		var pId = curDom[0].pId;
		var pageId = curDom[0].pageId;
			projectMenuId = curDom[0].projectMenuId;
		var menuName = '';
		var index = layer.open({
		      type: 1,
		      btn: ['确定', '取消'],
		      area: ['300px', '200px'],
		      title:'添加菜单的子菜单',
		      shade: 0, 
		      content:'<input type="text" placeholder="请输入子菜单名称" class="le-add-menu"/>',
		      yes: function(index, layero){
		      		menuName = $.trim($(".le-add-menu").val());
		      		if(menuName){
				        addLeftMenu(menuName,projectMenuId,topMenuId,createUser);
		      		}else{
		      			layer.msg("菜单名称不能为空", {icon: 5});
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
		projectMenuId = curDom[0].projectMenuId;
	}
	function fpageLink(){
		var zTree = $.fn.zTree.getZTreeObj("modal-tree");
		var curDom = zTree.getSelectedNodes();
//		projectMenuId = curDom[0].projectMenuId;
		dirType = curDom[0].directoryType;
		switch(dirType){
			case "12":
			case "13":
			case "15":
				pageId = curDom[0].directoryId;
			break;
			default:
				pageId = "";	
		}
		if(pageId){
			createPageLink(projectMenuId,createUser,pageId);
			console.log(projectMenuId,createUser,pageId);
			layer.close(index);
		}else{
			layer.msg("请选择页面", {icon: 0});
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
			var editStr = "<a id='+treeNode.id+' style='' class='page-link-btn'>创建链接</a>";
			aObj.append(editStr);
		}
	}
	
	treeHover($("#match-tree"));
	treeHover($("#link-tree"));
	treeHover($("#modal-tree"));
	treeHover($("#sidebar-tree"));
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
	$(".m-pageset-btns").on("click","button",function(){
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
	})
	$("#ok-model").click(function(){
		var typeCode = $(".m-cont-box1 li.active").index()+1,
			topWidth = $(".mtop-width").val(),
			topHeight = $(".mtop-height").val(),
			leftWidth = $(".mleft-width").val(),
			leftHeight = $(".mleft-height").val(),
			navigationText = $(".mnavigation-text").val();
		if($.trim(topWidth)&&$.trim(topHeight)&&$.trim(leftWidth)&&$.trim(leftHeight)&&$.trim(navigationText)){
			addModel(projectId,projectVersionId,typeCode,topWidth,topHeight,leftWidth,leftHeight,navigationText,updateUser);
		}else{
			layer.msg("信息不能为空", {icon: 5});
		}
		
	})
	
	function addModel(projectId,projectVersionId,typeCode,topWidth,topHeight,leftWidth,leftHeight,navigationText,user){
		$.ajax({
			type:'POST',
            url:$url1+'/api/v1/saveTemplateStyle',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"projectId":projectId,
				"projectVersionId":projectVersionId,
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
              		layer.msg(res.message, {icon: 6});
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	function getObjectURL(file) {
		 var url = null ;
		 if (window.createObjectURL!=undefined) { // basic
		 url = window.createObjectURL(file) ;
		 } else if (window.URL!=undefined) { // mozilla(firefox)
		 url = window.URL.createObjectURL(file) ;
		 } else if (window.webkitURL!=undefined) { // webkit or chrome
		 url = window.webkitURL.createObjectURL(file) ;
		 }
		 return url ;
		}
	//上传图片
	$('.m-uploadimg-box input[type="file"]').on('change',upLoadImg);
	function upLoadImg(){
		var file = $(this)[0].files[0];
		console.log(file);
		/*if(!/image\/\w+/.test(file.type)){
			layer.msg("文件必须为图片!",{icon:0});
			return false;
		}*/
		var formData = new FormData($('.m-uploadimg')[0]);
		formData.append("file",file);
		formData.append("projectId",projectId);
		formData.append("projectVersionId",projectVersionId);
		formData.append("typeCode",typeCode);
		formData.append("user",updateUser);
		$.ajax({
			type:"POST",
			url:$url1+"/api/v1/saveTemplateImage",
			data:formData,
			processData: false,
		    contentType: false,
			success:function(res){
				console.log(res);
				if(res.code===0){
					$(".m-uploadimg>img").attr("src",$url1+res.data);
					$(".mn-logobox>img").attr("src",$url1+res.data);
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
	
	$("#del-uploadimg-btn").click(function(){
		delUploadImg(projectId,projectVersionId,typeCode,updateUser,updateUser);
	});
	//删除图片
	function delUploadImg(projectId,projectVersionId,typeCode){
		$.ajax({
			type:'POST',
	        url:$url1+'/api/v1/deleteTemplateImage',
	        headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"projectId":projectId,
				"projectVersionId":projectVersionId,
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
	
	/* 
	 * 链接
	 */
	//点击头部菜单展示对应的左部菜单
	$("#link-scrollmenu").delegate(".swiper-slide","click",function(){
		$(this).addClass("active").siblings().removeClass("active");
		topMenuId = $(this).attr("id");
		findLeftMenu(projectId,projectVersionId,topMenuId);
	})
		
	$("#link-tree").delegate(".page-link-btn","click",function(){
		getProjPages(lv1DirId);
		console.log(lv1DirId);
		index = layer.open({
		      type: 1,
//		      btn: ['确定', '取消'],
		      area: ['490px', '330px'],
		      title:'链接页面',
		      shadeClose: true, //点击遮罩关闭
		      content:$(".link-modal"),
//		      yes: function(index, layero){
//		      	
//		      	layer.close(index);
//		      },
//		      btn2:function(){
//		      	layer.close(index);
//		      },
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
				"id":lv1DirId
			}),
			success:function(res){
				console.log(res.data);
              	if(res.code===0){
              		zNodes = res.data;
              		$.fn.zTree.init($("#modal-tree"), setting3, zNodes);
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	function createPageLink(projectMenuId,createUser,pageId){
		$.ajax({
			type:'PUT',
            url:$url1+'/api/v1/creatProjectMenuLinkPage',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"id":projectMenuId,
				"createUser":createUser,
				"pageId":pageId
			},
			success:function(res){
              	if(res.code===0){
              		layer.msg(res.message, {icon: 6});
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
});//jq end
