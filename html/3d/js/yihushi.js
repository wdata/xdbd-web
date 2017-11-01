//标签页切换：
$('.tabs').on('click','.tabs_list li',function(){
    $(this).addClass('click').siblings().removeClass('click');
    var li = $(this).parent().find('li');
    var panel = $('.tabs_panel .panel');
    $.each(li,function(i,item){
        if($(item).hasClass('click')){
            $(panel[i]).addClass('click').siblings().removeClass('click');
            return false;
        }
    });
});

//滚动条初始化
var ps_history_con = new PerfectScrollbar('.history_con');
var ps_contact_con = new PerfectScrollbar('.contact_con');
