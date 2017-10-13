(function($) {

    /**
     * 默认参数
     */
    var defaultOpts = {
        stage: '.content', //舞台
        item: '.resize-item' //可缩放的类名
    };

    /**
     * 定义类
     */
    var ZResize = function(options) {
        this.options = $.extend({}, defaultOpts, options);
        this.init();
    };
    ZResize.prototype = {
        init: function() {
            this.initResizeBox();
        },
        /**
         *  初始化拖拽item
         */
        initResizeBox: function() {
            var self = this;
            $('.' + self.options.itemClass).each(function(index,item) {

                if((index+1)==$('.' + self.options.itemClass).length){

                    // 删除之前DIV的边框线
                    $(".resize-item .resize-panel").css("display","none");
                    // 给id_添加元素ID
                    id_ = $(this).attr("id");
                    //创建面板
                    var width = $("#"+id_).width();
                    var height = $("#"+id_).height();
                    var resizePanel = $('<div class="resize-panel"></div>');
                    resizePanel.css({
                        width: width,
                        height: height,
                        top: 0,
                        left: 0,
                        position: 'absolute',
                        'background-color': 'rgba(0,0,0,0.5)',
                        cursor: 'move',
                        display: 'block'
                    });
                    //添加拖拽框到目标元素
                    self.appendHandler(resizePanel, $("#"+id_));
                    //id_=$(this).attr("id");
                    /**
                     * 创建控制点
                     */
                    var n = $('<div class="n"></div>');//北
                    var s = $('<div class="s"></div>');//南
                    var w = $('<div class="w"></div>');//西
                    var e = $('<div class="e"></div>');//东
                    var ne = $('<div class="ne"></div>');//东北
                    var nw = $('<div class="nw"></div>');//西北
                    var se = $('<div class="se"></div>');//东南
                    var sw = $('<div class="sw"></div>');//西南

                    //添加公共样式
                    self.addHandlerCss([n, s, w, e, ne, nw, se, sw]);
                    //添加各自样式
                    n.css({
                        'top': '-4px',
                        'margin-left': '-4px',
                        'left': '50%',
                        'cursor': 'n-resize'
                    });
                    s.css({
                        'bottom': '-4px',
                        'margin-left': '-4px',
                        'left': '50%',
                        'cursor': 's-resize'
                    });
                    e.css({
                        'top': '50%',
                        'margin-top': '-4px',
                        'right': '-4px',
                        'cursor': 'e-resize'
                    });
                    w.css({
                        'top': '50%',
                        'margin-top': '-4px',
                        'left': '-4px',
                        'cursor': 'w-resize'
                    });
                    ne.css({
                        'top': '-4px',
                        'right': '-4px',
                        'cursor': 'ne-resize'
                    });
                    nw.css({
                        top: '-4px',
                        'left': '-4px',
                        'cursor': 'nw-resize'
                    });
                    se.css({
                        'bottom': '-4px',
                        'right': '-4px',
                        'cursor': 'se-resize'
                    });
                    sw.css({
                        'bottom': '-4px',
                        'left': '-4px',
                        'cursor': 'sw-resize'
                    });
                    // 添加项目
                    self.appendHandler([n, s, w, e, ne, nw, se, sw], resizePanel);
                    //绑定拖拽缩放事件
                    self.bindResizeEvent(resizePanel, $("#"+id_));
                    //绑定触发事件
                    self.bindTrigger($("#"+id_));
                    //根据ID，显示右侧菜单
                    eleFocus();
                    //根据this的data-type为文本时调用函数，绑定监听事件
                    if($(this).attr("data-type") === "text"){
                        enterListen($(this).find(".content-text>div")[0]);
                    }
                }
            });
            self.bindHidePanel();
        },
        //控制点公共样式
        addHandlerCss: function(els) {
            for(var i = 0; i < els.length; i++) {
                el = els[i];
                el.css({
                    position: 'absolute',
                    width: '8px',
                    height: '8px',
                    background: '#ff6600',
                    margin: '0',
                    'border-radius': '2px',
                    border: '1px solid #dd5500',
                });
            }
        },
        /**
         *  插入容器
         */
        appendHandler: function(handlers, target) {
            for(var i = 0; i < handlers.length; i++) {
                el = handlers[i];
                target.append(el);
            }
        },
        /**
         *  显示拖拽面板
         */
        triggerResize: function(el) {
            var self = this;
            el.siblings(self.options.item).children('div.resize-panel').css({
                display: 'none'
            });
            el.children('div.resize-panel').css({
                display: 'block'
            });
        },
        /**
         * 拖拽事件控制 包含8个缩放点  和一个拖拽位置
         */
        bindResizeEvent: function(el) {

            var self = this;
            var ox = 0; //原始事件x位置
            var oy = 0; //原始事件y位置
            var ow = 0; //原始宽度
            var oh = 0; //原始高度

            var oleft = 0; //原始元素位置
            var otop = 0;
            var org = el.parent('div');

            //东
            var emove = false;
            el.on('mousedown','.e', function(e) {
                ox = e.pageX;//原始x位置
                ow = el.width();
                emove = true;
            });

            //南
            var smove = false;
            el.on('mousedown','.s', function(e) {
                oy = e.pageY;//原始x位置
                oh = el.height();
                smove = true;
            });

            //西
            var wmove = false;
            el.on('mousedown','.w', function(e) {
                ox = e.pageX;//原始x位置
                ow = el.width();
                wmove = true;
                oleft = parseInt(org.css('left').replace('px', ''));
            });

            //北
            var nmove = false;
            el.on('mousedown','.n', function(e) {
                oy = e.pageY;//原始x位置
                oh = el.height();
                nmove = true;
                otop = parseInt(org.css('top').replace('px', ''));
            });

            //东北
            var nemove = false;
            el.on('mousedown','.ne', function(e) {
                ox = e.pageX;//原始x位置
                oy = e.pageY;
                ow = el.width();
                oh = el.height();
                nemove = true;
                otop = parseInt(org.css('top').replace('px', ''));
            });

            //西北
            var nwmove = false;
            el.on('mousedown','.nw', function(e) {
                ox = e.pageX;//原始x位置
                oy = e.pageY;
                ow = el.width();
                oh = el.height();
                otop = parseInt(org.css('top').replace('px', ''));
                oleft = parseInt(org.css('left').replace('px', ''));
                nwmove = true;
            });

            //东南
            var semove = false;
            el.on('mousedown','.se', function(e) {
                ox = e.pageX;//原始x位置
                oy = e.pageY;
                ow = el.width();
                oh = el.height();
                semove = true;
            });

            //西南
            var swmove = false;
            el.on('mousedown','.sw', function(e) {
                ox = e.pageX;//原始x位置
                oy = e.pageY;
                ow = el.width();
                oh = el.height();
                swmove = true;
                oleft = parseInt(org.css('left').replace('px', ''));
            });

            //拖拽
            var drag = false;
            el.on('mousedown', function(e) {
                ox = e.pageX;//原始x位置
                oy = e.pageY;
                otop = parseInt(org.css('top').replace('px', ''));
                oleft = parseInt(org.css('left').replace('px', ''));
                drag = true;
            });

            $(self.options.stage).on('mousemove', function(e) {
                if(emove) {
                    var x = (e.pageX - ox);
                    el.css({
                        width: ow + x
                    });
                    org.css({
                        width: ow + x
                    });
                } else if(smove) {
                    var y = (e.pageY - oy);
                    el.css({
                        height: oh + y
                    });
                    org.css({
                        height: oh + y
                    });
                } else if(wmove) {
                    var x = (e.pageX - ox);
                    el.css({
                        width: ow - x,
                        // left: oleft + x
                    });
                    org.css({
                        width: ow - x,
                        left: oleft + x
                    });
                } else if(nmove) {
                    var y = (e.pageY - oy);
                    el.css({
                        height: oh - y,
                        // top: otop + y
                    });
                    org.css({
                        height: oh - y,
                        top: otop + y
                    });
                } else if(nemove) {
                    var x = e.pageX - ox;
                    var y = e.pageY - oy;
                    el.css({
                        height: oh - y,
                        // top: otop + y,
                        width: ow + x
                    });
                    org.css({
                        height: oh - y,
                        top: otop + y,
                        width: ow + x
                    });
                } else if(nwmove) {
                    var x = e.pageX - ox;
                    var y = e.pageY - oy;
                    el.css({
                        height: oh - y,
                        // top: otop + y,
                        width: ow - x,
                        // left: oleft + x
                    });
                    org.css({
                        height: oh - y,
                        top: otop + y,
                        width: ow - x,
                        left: oleft + x
                    });
                } else if(semove) {
                    var x = e.pageX - ox;
                    var y = e.pageY - oy;
                    el.css({
                        width: ow + x,
                        height: oh + y
                    });
                    org.css({
                        width: ow + x,
                        height: oh + y
                    });
                } else if(swmove) {
                    var x = e.pageX - ox;
                    var y = e.pageY - oy;
                    el.css({
                        width: ow - x,
                        // left: oleft + x,
                        height: oh + y
                    });
                    org.css({
                        width: ow - x,
                        left: oleft + x,
                        height: oh + y
                    });
                } else if(drag) {
                    var x = e.pageX - ox;
                    var y = e.pageY - oy;
                    org.css({
                        left: oleft + x,
                        top: otop + y
                    });
                }
            }).on('mouseup', function(e) {
                emove = false;
                smove = false;
                wmove = false;
                nmove = false;
                nemove = false;
                nwmove = false;
                swmove = false;
                semove = false;
                drag = false;
            });
        },
        /**
         *  点击item显示拖拽面板
         */
        bindTrigger: function(el) {
            var self = this;
            el.on('click', function(e) {
                e.stopPropagation();
                self.triggerResize(el);
                //console.log(save_arr);
                if($(this).attr("id")!=id_){
                    id_ = $(this).attr("id");
                    data_type = $(this).attr("data-type");
                    clear(id_);
                }
                shutDownC();  //    关闭文本编辑区
            });
            el.on('dblclick', function(e) {
                e.stopPropagation();
                // 文本区双击事件；
                if(el.attr("data-type") === "text"){
                    $(this).children(".content-text").addClass("active")   // 显示编辑区
                        .children("div").attr("contenteditable",true)   // 开启编辑区
                        .focus();   // 获取焦点
                }
            });
        },
        /**
         *  点击舞台空闲区域 隐藏缩放面板
         */
        bindHidePanel: function(el) {
            //console.log(aggregation);
            //id_!=''&&save_config("x",id_,field,fieldAlias,order,dataType,dim_mea,dis_con,aggregation);
            //聚合方式
            field=null;fieldAlias=null;order=null;dataType=null;dim_mea=null;dis_con=null;aggregation=null;
            var stage = this.options.stage;
            var itemClass = this.options.itemClass;
            $(stage).bind('click', function() {
                $('.' + itemClass).children('div.resize-panel').css({
                    display: 'none'
                });

                shutDownC();  //    关闭文本编辑区
                eleFocus();   //    根据显示
            });
            // $(".title-box").siblings().addClass("hide");
        }
    };
    window.ZResize = ZResize;

})(jQuery);


function shutDownC(){
    // 关闭文本编辑区
    $(".content-text").removeClass("active")   // 显示编辑区
        .children("div").attr("contenteditable",false);   // 开启编辑区
}

//封装好的柱状图
var dataTsv = [
    {letter: 'a',frequency: '56244'},
    {letter: 'b',frequency: '23131'},
    {letter: 'c',frequency: '32121'},
    {letter: 'd',frequency: '85464'},
    {letter: 'e',frequency: '21312'},
    {letter: 'f',frequency: '78655'},
    {letter: 'g',frequency: '23424'},
    {letter: 'h',frequency: '65767'},
    {letter: 'i',frequency: '65756'},
    {letter: 'j',frequency: '87978'},
    {letter: 'k',frequency: '09897'},
    {letter: 'l',frequency: '45345'},
    {letter: 'm',frequency: '56466'},
    {letter: 'n',frequency: '32142'},
    {letter: 'o',frequency: '45353'},
    {letter: 'p',frequency: '45564'},
    {letter: 'q',frequency: '65788'},
    {letter: 'r',frequency: '75677'},
];


//封装好的表格
var table_date=[
    {"key11":'a',"key22":1,"key33":100,"key44":100},
    {"key11":'a',"key22":2,"key33":100,"key44":100},
    {"key11":'b',"key22":1,"key33":100,"key44":100},
    {"key11":'b',"key22":2,"key33":100,"key44":100},
    {"key11":'c',"key22":1,"key33":100,"key44":100},
    {"key11":'c',"key22":2,"key33":100,"key44":100}
];

    //console.log(search_attr);
    //维度、度量、筛选器
    //{
    //    "field": "province", --- 字段  理解为维度或度量的id值
    //    "fieldAlias": "省份",---字段别名   理解为维度或度量的汉字
    //    "order": "ASC",---排序
    //    "dataType": 1,--数据类型：1-文本（字符串）；2-日期；3-日期和时间；4-数字；5-布尔；6-地理（用于地图）
    //    "dim_mea": 0,  维度/度量：0-维度；1-度量
    //    "dis_con": 0,   离散/连续：0-离散；1-连续  维度默认是离散   度量是连续
    //    "aggregation": ""  聚合算法：SUM-求和；AVG-平均值；MAX-最大值；MIN-最小值；COUNT-计数；DCOUNT-去重计数
    //}
//条件搜索数据的格式
    //{
    //    "type": 1,  图表类型：0-表格；1-柱状图；2-拆线图；3-圆饼图
    //    "queryJson": {
    //    "biSetId": 10001,
    //    "dataModelId": 2001,
    //        "x": [
    //        {
    //            "field": "province",
    //            "fieldAlias": "省份",
    //            "order": "ASC",
    //            "dataType": 1,
    //            "dim_mea": 0,
    //            "dis_con": 0,
    //            "aggregation": ""
    //        }
    //    ],
    //        "y": [
    //        {
    //            "field": "orderAmount",
    //            "fieldAlias": "",
    //            "order": "DESC",
    //            "dataType": 4,
    //            "dim_mea": 1,
    //            "dis_con": 1,
    //            "aggregation": "SUM"
    //        }
    //    ],
    //        "filter": [   //筛选器
    //        {
    //            "field": "city",
    //            "fieldAlias": "城市",
    //            "dataType": 1,
    //            "dim_mea": 0,
    //            "dis_con": 0,
    //            "listFilter": {   列表筛选条件
    //                "operator": "IN/NOT IN", 条件运算符：CONTAIN-包含；NOT CONTAIN-不包含；START WITH-开始于；END WITH-结束于；EQUAL-等于
    //                "values": [
    //                    "华东",
    //                    "华北"
    //                ]
    //            },
    //            "textFilter": [  文本筛选条件
    //                {
    //                    "operator": "CONTAIN/NOT CONTAIN/START WITH/END WITH/EQUAL",
    //                    "value": "华东"
    //                }
    //            ]
    //        },
    //        {
    //            "field": "orderAmount",
    //            "fieldAlias": "",
    //            "dataType": 4,
    //            "dim_mea": 1,
    //            "dis_con": 1,
    //            "numericFilter": {   数值筛选条件
    //                "aggregation": "SUM",
    //                "range": {     范围
    //                    "min": 100,
    //                    "max": 200
    //                }
    //            }
    //        }
    //    ]
    //}
    //}
//保存页面的数据格式
    //{
    //    "cid": "xxxxx",
    //    "style": "{width:100,height:100,left:100,top:100}",
    //    "displayLevel": 0,
    //    "type": 1,
    //    " m": {
    //    "biSetId": 10001,
    //        "dataModelId": 2001,
    //        "x": [
    //        {
    //            "field": "province",
    //            "fieldAlias": "省份",
    //            "order": "ASC",
    //            "dataType": 1,
    //            "dim_mea": 0,
    //            "dis_con": 0,
    //            "aggregation": ""
    //        },
    //        {
    //            "field": "city",
    //            "fieldAlias": "市",
    //            "order": "DESC",
    //            "dataType": 1,
    //            "dim_mea": 0,
    //            "dis_con": 0,
    //            "aggregation": ""
    //        }
    //    ],
    //        "y": [
    //        {
    //            "field": "orderAmount",
    //            "fieldAlias": "",
    //            "order": "DESC",
    //            "dataType": 4,
    //            "dim_mea": 1,
    //            "dis_con": 1,
    //            "aggregation": "SUM"
    //        }
    //    ],
    //        "filter": [
    //        {
    //            "field": "city",
    //            "fieldAlias": "城市",
    //            "dataType": 1,
    //            "dim_mea": 0,
    //            "dis_con": 0,
    //            "listFilter": {
    //                "operator": "IN/NOT IN",
    //                "values": [
    //                    "华东",
    //                    "华北"
    //                ]
    //            },
    //            "textFilter": [
    //                {
    //                    "operator": "CONTAIN/NOT CONTAIN/START WITH/END WITH/EQUAL",
    //                    "value": "华东"
    //                }
    //            ]
    //        },
    //        {
    //            "field": "orderAmount",
    //            "fieldAlias": "",
    //            "dataType": 4,
    //            "dim_mea": 1,
    //            "dis_con": 1,
    //            "numericFilter": {
    //                "aggregation": "SUM",
    //                "range": {
    //                    "min": 100,
    //                    "max": 200
    //                }
    //            }
    //        }
    //    ]
    //}
    //}
    //field!=null&&chart_date.queryJson.x.push(search_attr);
