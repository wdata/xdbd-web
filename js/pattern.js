var textRadius = $(".text-radius").val();
var radiusNumber= parseInt(textRadius);
var out = false;
colorFinder('.backColor');
colorFinder('.borderImg');

// 颜色插件封装方法
function colorFinder(id) {
    $(id).spectrum({
        allowEmpty: true, //颜色默认值,弄人空
        showInput: true, //显示输入
        allowEmpty: true,
        showAlpha: true,  //透明度
        disabled: false,  //是否禁用
        showPalette: true, //显示调色板,有默认颜色,把最近选择的颜色放入调色板
        showInitial:true, //颜色对比
        // chooseText: "确定",
        // cancelText: "取消",
        containerClassName:'awesome', //设置背景色
        replacerClassName: 'inputs' //设置选择器的背景
    });
};

// 圆角增加与减少
function radiusAdd() {
    console.log(textRadius)
    if(radiusNumber >= 100) {
        radiusNumber = 100;
    } else {
        radiusNumber+= 1;
    }
    $(".text-radius").val(radiusNumber);
};
function radiusLessen() {
    if(radiusNumber <= 0) {
        radiusNumber = 0;
    } else {
        radiusNumber -=1;
    }
    $(".text-radius").val(radiusNumber);
}

function radioBtn() {
    if(out) {
        $(".radio_btn").css('background','none');
        out = false;
    } else {
        $(".radio_btn").css('background','#000');
        out = true;
    }
}
//选项卡
function Tablelist(name,item) {
    name.click(function(){
        $(this).addClass("on").siblings().removeClass("on"); //切换选中的按钮高亮状态
        var index=$(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
        item.eq(index).show().siblings().hide(); //在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
    });
}
Tablelist($(".tab_menu li"),$(".tab_box > div"));
Tablelist($(".tab_chart li"),$(".chart_box > div"));
//是否显示表头
function isShow(name,item) {
    name.change(function() {
        if($(this).is(':checked')) {
            item.show();
        } else {
            item.hide();
        }
    })
}
isShow($(".tab_pitch"),$('.tab_tit'));
isShow($(".tab_size"),$('.tab_page'));
isShow($(".tab_legend"),$('.tab_cutline'));

console.log($(window).height())
$('.tab_list').css('height',($(window).height()-100)+'px');
