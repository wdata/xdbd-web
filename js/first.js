$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage'],
		sectionsColor: ['#ffffff', '#ffffff', '#ffffff','#f8f8f8'],
		css3: true,
		afterLoad: function(anchorLink, index){
			document.getElementById('video1').play();
			document.getElementById('video2').play();
		}
	});
	
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        onSlideChangeStart(swiper){
        	if(swiper.activeIndex==3){
        		$('#footer').removeClass('hidden')
        	}else{
        		$('#footer').addClass('hidden')
        	}
        	if(swiper.activeIndex==1||swiper.activeIndex==2){
        		$('#header').addClass('header')        		
        	}else{
        		$('#header').removeClass('header')        		
        	}
        },
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        mousewheelControl: true
        ,autoplay: 15000
	});
	
	//导航栏二级菜单
	$(".main-parent>li").hover(
		function() {
		  $(this).find("ul").css('display','block');
		},
		function() {
		  $(this).find("ul").css('display','none');
		}
	);
	$('.about-main>li').click(function() {
		$('.about-main>li').eq($(this).index()).addClass('active').siblings().removeClass('active');
		$('.about-list>div').hide().eq($(this).index()).show();
	});

	//联系我们
	$('.support-btn').click(function() {
		$('.contact-block').animate({bottom: '10px'},500,'swing');
	});
	$('.contact-btn').click(function() {
		$('.contact-block').animate({bottom: '-545px'},500,'swing');
	})
});