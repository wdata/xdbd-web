$(function(){
	//页面流
	$(".p-tabs-title").on("click","li",function(){
		var $idx = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".p-cont"+$idx).show().siblings().hide();
	})
});
