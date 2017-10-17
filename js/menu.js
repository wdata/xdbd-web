$(function(){
	//菜单设置
	$(".m-tabs-title").on("click","li",function(e){
		var $idx = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".m-cont"+$idx).show().siblings().hide();
		
	    e.preventDefault()
	})
	
	//样式--模板
	$(".m-cont-box1 ul").on("click","li",function(e){
		var $idx = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".m-html-mod"+$idx).show().siblings().hide();
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
		 e.preventDefault()
	})
	
	/*
	 
	 * 常用参数设置
	 * 
	 * projectId = localStorage.getItem("projectId")
	 * projectVersionId = localStorage.getItem("versionId")
	 * createUser
	 * updateUser
	 * 
	 * parentId
	 * */
	
	var projectId = "2c747fa149ca4efe9831a4bb85be00bd";
	var projectVersionId = "1a93a112fa3d4b8aab436560fdd77ce0";
	var createUser = "c1";
	var updateUser ="c2"
	var topMenu = [];//顶部导航菜单
	var parentId;//topMenu--id
	var projectMenuId;//projectMenuId
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
            url:'/api/v1/saveProjectMenuTop',
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
            url:'/api/v1/findProjectMenuTop',
			data:{
				"projectId":projectId,
				"projectVersionId":projectVersionId
			},
			success:function(res){
              	if(res.code===0){
              		var data = res.data.slice(0,5);
              		var html = "";
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
              		});
              		
              		$(".top-menu-15").empty().append(html);
              		
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
	
	
	//blur或者enter的状态下判断input的value是否修改,修改则提交修改信息
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
            url:'/api/v1/updateMenuNameById',
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
            url:'/api/v1/updateProjectMentSortIndexTopById',
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
            url:'/api/v1/deleteProjectMenuTopById/'+id,
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
		console.log(topMenu);
		var html = "";
		$.each(topMenu, function(i,item) {
			html += `
				<div class="swiper-slide ${i===0?'active':''}" id="${item.id}" parentId="${item.parentId}" sortIndex="${item.sortIndex}">${item.menuName}</div>
			`;
		});
		$("#scroll-topmenu").empty().append(html);
		parentId = $("#scroll-topmenu").find(".active").attr("id");
		findLeftMenu(projectId,projectVersionId,parentId);//查询左侧菜单
	});
	
	//点击头部菜单展示对应的左部菜单
	$("#scroll-topmenu").delegate(".swiper-slide","click",function(){
		$(this).addClass("active").siblings().removeClass("active");
		parentId = $(this).attr("id");
		findLeftMenu(projectId,projectVersionId,parentId)
	})
	
	
	
	//顶部菜单相应匹配的左侧菜单
	var setting = {
		view: {
			addHoverDom: addHoverDom,
			removeHoverDom: removeHoverDom,
			selectedMulti: false,
			showIcon: false
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
//			beforeEditName: beforeEditName,
//			beforeRemove: beforeRemove,
//			beforeRename: beforeRename,
//			onRemove: onRemove,
//			onRename: onRename
			onClick: selectLeftMenu,
			onRename:renameLeftMenu
		}
	};
	var zNodes = [];//存放子菜单的数据
	/*zNodes =[
		{ id:1, pId:0, name:"父节点 1", open:true},
		{ id:11, pId:1, name:"叶子节点 1-1"},
		{ id:12, pId:1, name:"叶子节点 1-2"},
		{ id:13, pId:1, name:"叶子节点 1-3"},
		{ id:2, pId:0, name:"父节点 2", open:true},
		{ id:21, pId:2, name:"叶子节点 2-1"},
		{ id:22, pId:2, name:"叶子节点 2-2"},
		{ id:23, pId:2, name:"叶子节点 2-3"},
		{ id:3, pId:0, name:"父节点 3", open:true},
		{ id:31, pId:3, name:"叶子节点 3-1"},
		{ id:32, pId:3, name:"叶子节点 3-2"},
		{ id:33, pId:3, name:"叶子节点 3-3"}
	];*/
		/*{
            "id":"111",
            "pId":"11",
            "name":"子菜单111",
            "checked":null,
            "open":null,
            "pageId":null,
            "projectMenuId":24
        }*/
	
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
		      	var name = $.trim($(".le-add-menu").val());
		      		if(name){
				        addLeftMenu(createUser,name,projectMenuId);
				        console.log(createUser,name,projectMenuId);
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
	
	//添加左侧菜单
	function addLeftMenu(createUser,menuName,projectMenuId){
		$.ajax({
			type:'POST',
            url:'/api/v1/saveProjectMenuLeft',
			data:{
				"createUser":createUser,
				"menuName":menuName,
				"projectMenuId":projectMenuId
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
	
//	findLeftMenu(projectId,projectVersionId,0);
	//查询左侧菜单
	function findLeftMenu(projectId,projectVersionId,parentId){
		$.ajax({
			type:'GET',
            url:'/api/v1/findProjectMenuLeft',
			data:{
				"projectId":projectId,
				"projectVersionId":projectVersionId,
				"parentId":parentId
			},
			success:function(res){
              	if(res.code===0){
              		zNodes = res.data;
              		console.log(zNodes);
              		$.fn.zTree.init($("#match-tree"), setting, zNodes);

//            		layer.msg(res.message, {icon: 6});
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	
	//删除左侧菜单
	function deleteLeftMenu(id){
		$.ajax({
			type:'POST',
            url:'/api/v1/deleteProjectMenuLeftById',
			data:{
				"id":id
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
	
	//排序左侧菜单
	function modifyLeftMenu(projectMenuId,updateUser,upOrDown){
		$.ajax({
			type:'POST',
            url:'/api/v1/updateProjectMentSortIndexLeftById',
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
	
	function selectLeftMenu(){
		var zTree = $.fn.zTree.getZTreeObj("match-tree");
		var curDom = zTree.getSelectedNodes();
		var name = curDom[0].name;
		var id = curDom[0].id;
		var pId = curDom[0].pId;
		var pageId = curDom[0].pageId;
		var projectMenuId = curDom[0].projectMenuId;
		addLeftMenu(createUser,name,projectMenuId);
		console.log(name,id,pId,pageId,projectMenuId);
	}
	
	function renameLeftMenu(event, treeId, treeNode, isCancel){
		alert(treeNode.tId + ", " + treeNode.name);
		var zTree = $.fn.zTree.getZTreeObj("match-tree");
		var curDom = zTree.getSelectedNodes();
		var oldName = treeNode.name;
	}
	
	function beforeEditName(treeId, treeNode) {
		var zTree = $.fn.zTree.getZTreeObj("match-tree");
		zTree.selectNode(treeNode);
		setTimeout(function() {
			//if (confirm("进入节点 -- " + treeNode.name + " 的编辑状态吗？")) {
				setTimeout(function() {
					zTree.editName(treeNode);
				}, 0);
			//}
		}, 0);
		return false;
	}
	function beforeRemove(treeId, treeNode) {
		var zTree = $.fn.zTree.getZTreeObj("match-tree");
		zTree.selectNode(treeNode);
		//return confirm("确认删除 节点 -- " + treeNode.name + " 吗？");
	}
	function onRemove(e, treeId, treeNode) {
		//showLog("[ "+getTime()+" onRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
	}
	function beforeRename(treeId, treeNode, newName, isCancel) {
		if (newName.length == 0) {
			setTimeout(function() {
				var zTree = $.fn.zTree.getZTreeObj("match-tree");
				zTree.cancelEditName();
				alert("节点名称不能为空.");
			}, 0);
			return false;
		}
		return true;
	}
	function onRename(e, treeId, treeNode, isCancel) {
		//showLog((isCancel ? "<span style='color:red'>":"") + "[ "+getTime()+" onRename ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name + (isCancel ? "</span>":""));
	}
	
	var newCount = 1;
	function addHoverDom(treeId, treeNode) {
		var sObj = $("#" + treeNode.tId + "_span");
		if (treeNode.editNameFlag || $("#addBtn_"+treeNode.tId).length>0) return;
		var addStr = "<span class='button add' id='addBtn_" + treeNode.tId
			+ "' title='add node' onfocus='this.blur();'></span>";
		sObj.after(addStr);
		var btn = $("#addBtn_"+treeNode.tId);
		if (btn) btn.bind("click", function(){
			var zTree = $.fn.zTree.getZTreeObj("match-tree");
			zTree.addNodes(treeNode, {id:(100 + newCount), pId:treeNode.id, name:"new node" + (newCount++)});
			return false;
		});
	};
	function removeHoverDom(treeId, treeNode) {
		$("#addBtn_"+treeNode.tId).unbind().remove();
	};
	
	$(document).ready(function(){
//		$.fn.zTree.init($("#match-tree"), setting, zNodes);
	});
});
