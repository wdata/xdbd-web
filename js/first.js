// console.log(document.documentElement.clientWidth);
// console.log(document.body.clientWidth)

if(document.documentElement.clientWidth <= 1375){
    windowWidth()
}



function windowWidth(){
    $(".logo").css("left","1%");
    $(".try-out").css({ "right":"1%" }).find(".try-btn").css("margin-left","10px");
}
function windowWidthFalse(){
    $(".logo").css("left","80px");
    $(".try-out").css({ "right":"80px" }).find(".try-btn").css("margin-left","40px");
}

$(window).on("resize",function(){
    if(document.documentElement.clientWidth <= 1375){
        windowWidth();
    }else{
        windowWidthFalse()
    }
});



$('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage'],
    // sectionsColor: ['#ffffff', '#ffffff', '#ffffff','#f8f8f8'],
    css3: true,
    afterLoad: function(anchorLink, index){
        // document.getElementById('video1').play();
        document.getElementById('video2').play();
    }
});


var mySwiper = new Swiper('.swiper-container', {
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
    initialSlide:1,
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 0,
    // mousewheelControl: true
    // ,autoplay: 15000
});

// 滑动到下一个模块的方法调用
function scrollSlide(){
    mySwiper.slideTo(1);
}

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
});

// 放大播放视频
$(document).on("click",function(e){
    const enlarge = $(".enlarge");
    // 判断点击的是enlarge放大图标
    if(e.target.className === "enlarge"){
        enlarge.addClass("hidden").siblings(".chart-video").css({
            "width":"110%",
            "height":"auto"
        });
    }else{
        // 判断enlarge是否隐藏
        if(enlarge.is(".hidden")){
            enlarge.removeClass("hidden").siblings(".chart-video").css({
                "width":"1025px",
                "height":"500px"
            })
        }
    }
});