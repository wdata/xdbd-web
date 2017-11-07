(function($) {

    /**
     * 默认参数
     */
    var defaultOpts = {
        stage: '.content', //舞台
        item: '.resize-item' //可缩放的类名
    };
    let recordingId = null;

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

                // if((index+1) === $('.' + self.options.itemClass).length){

                    // 删除之前DIV的边框线
                    $(".resize-item .resize-panel").css("display","none");
                    // 给id_添加元素ID
                    // if(!(id_ === $(this).attr("id"))){
                    //     id_ = $(this).attr("id");
                    // }

                    //创建面板
                    var width = $(this).width();
                    var height = $(this).height();
                    var resizePanel = $('<div class="resize-panel"></div>');
                    resizePanel.css({
                        width: width,
                        height: height,
                        top: 0,
                        left: 0,
                        position: 'absolute',
                        'background-color': 'rgba(0,0,0,0.2)',
                        cursor: 'move',
                        display: 'none'
                    });
                    //添加拖拽框到目标元素
                    self.appendHandler(resizePanel, $(this));
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
                    // 绑定拖拽缩放事件
                    self.bindResizeEvent($(this).find(".resize-panel"),);
                    // 绑定触发事件
                    self.bindTrigger($(this));
                    // 根据ID，显示右侧菜单
                    clear(id_);
                    // 根据this的data-type为文本时调用函数，绑定监听事件
                    if($(this).attr("data-type") === "text"){
                        enterListen($(this).find(".content-text>div")[0]);
                    }
                // }
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
                    // background: '#ff6600',
                    background: '#09f',
                    margin: '0',
                    'border-radius': '2px',
                    // border: '1px solid #dd5500',
                    border: '1px solid #09f',
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
                let recordingBur = false;

                $(self.options.stage).on('mousemove', function(e) {
                    if(emove) {
                        var x = (e.pageX - ox);
                        el.css({
                            width: ow + x
                        });
                        org.css({
                            width: ow + x
                        });
                        recordingBur = true;
                        self.scaleScaling(el,org,(ow + x),"height");   // 等比缩放

                    } else if(smove) {
                        var y = (e.pageY - oy);
                        el.css({
                            height: oh + y
                        });
                        org.css({
                            height: oh + y
                        });
                        recordingBur = true;
                        self.scaleScaling(el,org,(oh + y),"width");   // 等比缩放

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
                        recordingBur = true;
                        self.scaleScaling(el,org,(ow - x),"height");   // 等比缩放
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
                        recordingBur = true;
                        self.scaleScaling(el,org,(oh - y),"width");   // 等比缩放
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
                        recordingBur = true;
                        self.scaleScaling(el,org,(oh - y),"width");   // 等比缩放
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
                            top: Math.min(otop + y,otop + oh),
                            width: ow - x,
                            left: Math.min(oleft + x,oleft + ow)
                        });
                        recordingBur = true;
                        self.scaleScaling(el,org,(ow - x),"height");   // 等比缩放
                        if(org.attr("data-ratio-bur") === "true") {
                            var p = parseFloat(org.attr("data-ratio"));
                            org.css({
                                top: otop - (ow - x)/p + oh
                            });
                        }

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
                        recordingBur = true;
                        self.scaleScaling(el,org,(oh + y),"width");   // 等比缩放
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
                        recordingBur = true;
                        self.scaleScaling(el,org,(ow - x),"height");   // 等比缩放
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

                    const id = $(el).parent().attr("id");
                    const type = $(el).parent().attr("data-type");
                    refresh.storage(type,id); // 判断不同的TYPE执行不同的采取函数

                    // 当recordingBur为ture时，已经放大缩小，所以重新获取图形显示；
                    if(recordingBur && type === "chart" || type === "text"){
                        refresh.save_config(recordingId);
                    }

                    $(this).off("mousemove");
                    $(this).off("mouseup");

                });
            });
        },
        /**
         *  点击item显示拖拽面板
         */
        scaleScaling(el,org,data,me){
            if(org.attr("data-ratio-bur") === "true"){
                var p = parseFloat(org.attr("data-ratio"));
                var z = null;
                if(me === "height"){
                    z = data/p;
                }else{
                    z = data*p;
                }
                el.css(
                    ''+ me +'', z
                );
                org.css(
                    ''+ me +'', z
                );
            }
        },
        bindTrigger: function(el) {
            var self = this;
            el.on('click', function(e) {
                e.stopPropagation();
                self.triggerResize(el);
                //console.log(save_arr);
                if($(this).attr("id") !== id_){
                    id_ = $(this).attr("id");
                    data_type = $(this).attr("data-type");
                    clear(id_);
                }
                recordingId = id_;  // 点击时记录id，
                // shutDownC();  //    关闭文本编辑区
            });

            // $(self.options.item).on("")

            el.on('dblclick', function(e) {
                e.stopPropagation();
                // 文本区双击事件；
                if(el.attr("data-type") === "text"){
                    $(this).children(".content-text.edit").addClass("active")   // 显示编辑区
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
