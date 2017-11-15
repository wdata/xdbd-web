$(function(){
	
	//个人中心
	$(".user-info").hover(function(){
		$(this).find('ul').show()
	},function(){
		$(this).find('ul').hide()
	});
	
	//显示用户名
	if($("#username").length){
		$("#username").text(sessionStorage.getItem("ByuserName"));
	}
	
	//项目管理与系统管理切换
	$(".menu-top").on("click","li",function(){
		var $idx = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".bd-body").eq($idx).show().siblings().hide();
		if($idx===1){
			$(".set-cur-env").hide();
		}else{
			$(".set-cur-env").show();
		}
	});
	
	/*
	 
	 * 项目管理
	 * */
	
	//设置首页
	$(".set-index-box").on("click",function(){
		if($(this).find("input").prop("disabled")){
			layer.msg("首页无法取消，可在其他页面设置为首页！");
		}
		var $this = $(this),
		$img = $this.children("img"),
		$state = $this.children("input").prop("checked");
		if($state === true){
			$img.attr("src","images/icon_checked.png");
		}else{
			$img.attr("src","images/xuankuang.png");
		}
	});
	
	//图表---->属性
	$(".chart-type-val").on("click",function(){
		var $ul = $(".chart-type-lists");
		$ul.slideToggle();
	});
	$(".chart-type-lists").on("click","li",function(){
		$(this).addClass("active").siblings().removeClass("active");

		var $this = $(this),
		$p = $(".chart-type-lists"),
		$val = $(".chart-type-val span");
		$val.text($this.find("span").text()).attr("data-type",$this.attr("data-type"));
		$p.hide();
	});
	
	//数据源--->选择数据源
	/*$(".data-source-val").on("click",function(){
		var $ul = $(".data-source-lists");
		$ul.slideToggle();
	});
	$(".data-source-lists").on("click","li",function(){
		var $this = $(this),
		$p = $(".data-source-lists"),
		$val = $(".data-source-val span");
		$val.text($this.text());
		$p.hide();
	});*/
	
	//模态框关闭按钮
	$(".modal>h3>img").click(function(){
		$(this).parents(".modal").hide();
	});
	
	
	//版本切换
	$(".version-lists-box li").on("click",function(){
		var s = $(this).find("input[name='version-name']:checked");
		s.prev("img").attr("src","images/icon_circle_on.png");
		s.parent("li").siblings().find("img").attr("src","images/icon_circle.png");
	});
	

	//交换x/y轴的数据
	
	//数据源加载
	$(".data-source-config ul>li").on("click",function(){
		var $s = $(this).find("input[name]:checked"),
		$idx = $s.parent().index();
		$s.prev("img").attr("src","images/icon_circle_on.png");
		$s.parent("li").siblings().find("img").attr("src","images/icon_circle.png");
	});
	//样式加载

});
