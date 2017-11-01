//滚动条：
var ps_record_con = new PerfectScrollbar('.record_con');

//正在拨号文字:
(function(){
    var dial_before_text = ['正在拨号','正在拨号.','正在拨号..','正在拨号...'];
    var state = 0;
    var dial_before = $('.dialing_state .dial_before');
    var timer_1 = window.setInterval(function(){
        var text = '';
        if(state == 0){text = dial_before_text[0];state = 1;}
        else if(state == 1){text = dial_before_text[1];state = 2;}
        else if(state == 2){text = dial_before_text[2];state = 3;}
        else {text = dial_before_text[3];state = 0;}
        dial_before.text(text);
    },400);
})();


$('.star_con').on('click','.star_list li',function(){
    var num = $(this).data('num');
    $(this).parent().siblings('.star').attr('class','star star_'+num);
});

