$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage'],
		sectionsColor: ['#ffffff', '#ffffff', '#ffffff','#f8f8f8'],
		css3: true
	});
	
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        mousewheelControl: true
        ,autoplay: 10000
    });
  	
  	//section1
  	$(".business .intro").hover(
  		function(){
  			$(this).next(".detail").css({"backgroundColor":"red"})
  		},
  		function(){
  			
  		}
  	)
});