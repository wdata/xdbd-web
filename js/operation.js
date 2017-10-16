var id_='',search_date={},field=null,fieldAlias=null,order=null,dataType=null,dim_mea=null,dis_con=null,aggregation=null
    ,save_arr=[]  // 保存全部数据；
    ,index_arr=[]  // 保存索引数据；
    ,copy_data = {} // 复制后保存数据；
    ,data_type = ""  // 作为判断图形的；
    ,number=0   // 层级
    ,modelId = null; // 记录dataModelId值；

var projectId = "95263f4682354ce6aa7a904f1394d381",
    pageId = "dbfad73bd6c0447bb9efaa5037e7a3b3",
    dirId = "5305c5256ad74b86aede5e4414caa4de";



// 右键功能
$(document).ready(function() {
    context.init({preventDoubleContext: false,fadeSpeed:100});
   
    context.attach('html', [
        {header: '菜单设置'},
        {text: '返回', href: '#'},
        {text: '重新加载', href: '#'},
        {divider: true},
        {text: '保存至', href: '#'},
        {text: '粘贴', href: '#'},
        {text: '上一页', href: '#'},
        {text: '下一页', href: '#'},
        {divider: true},
        {text: 'Inspect Element', href: '#'},
        {divider: true},
        {text: 'Disable This Menu', action: function(e){
            e.preventDefault();
            context.destroy('html');
            alert('html contextual menu destroyed!');
        }},
        {text: 'Donate?', action: function(e){
            e.preventDefault();
            $('#donate').submit();
        }}
    ]);

    context.attach('.resize-item', [
        {header: '菜单设置'},
        {text: '复制',action: function(e){
            var  ele = context.getClickEle();
            e.preventDefault();
            var id = ele.attr("id");
            var isShow=true;
            $.each(save_arr,function(index,item){
                if(isShow){
                    if(item.cid==id){
                        var copy = item;
                        isShow=false;
                    }
                }
                if(item.cid + "" === id){
                    console.log(item);
                    // 如果cid相同，则将item数据复制给copy_data
                    // 如果是文本和图片，则复制内容不同
                    switch(item.customData.dataType){
                        case "text":
                            // 保存文本内容
                            item.customData.content = ele.find('.content-text').children().html();
                            break;
                        case "image":
                            // 保存图片路径
                            item.customData.image = ele.find(".image-class").children().attr("src");
                            break;
                    }
                }
            });
            console.log(save_arr);
        }},
        {text: '粘贴',action: function(e){
            e.preventDefault();
            paste();   // 粘贴函数；
        }},
        {text: '删除', action: function(e){
            e.preventDefault();
            var id=context.getClickEle().attr("id");
            var deleted=true;
            $.each(save_arr,function(index,item){
                if(deleted){
                    if(item.cid==id){
                        save_arr.splice(index,1);
                        deleted=false;
                    }
                }
            });
            context.getClickEle().remove();
            // console.log(save_arr);
        }},
        {text: '排列', subMenu: [
            {header: '默认值'},
            {
                text: '置于顶层',
                action: function (e) {
                    context.getClickEle().css("z-index",(number+1));
                }
            },
            {
                text: '置于低层',
                action: function (e) {
                    context.getClickEle().css("z-index",-1);
                }
            },
            {
                text: '上移一层',
                action: function (e) {
                    var zIndex=parseInt(context.getClickEle().css("z-index"));
                    context.getClickEle().css("z-index",zIndex+1);
                }
            },{
                text: '下移一层',
                action: function (e) {
                    var zIndex=parseInt(context.getClickEle().css("z-index"));
                    context.getClickEle().css("z-index",zIndex-1);
                }
            }
        ]}
    ]);
    context.attach('.edit-libs-box', [
        {text: '粘贴',action: function(e){
            e.preventDefault();
            paste();   // 粘贴函数；
        }}
    ]);
});


function save_config(id){

    console.log(id_);
    // 上传数据索引
    refresh.indexes(id);

    // 保存数据到save_arr中；
    refresh.retrieve(id);
}

var refresh = {
    // 数据索引
    indexes:function(id){
        var chart_date={
            "queryJson":{
                "biSetId": $(".data-source-box option:selected").attr("bisetid"),
                "dataModelId": modelId,    // BiSet对应数据库表
                'x':[],
                'y':[],
                'filter':[]
            }
        };
        // 控件类型
        chart_date.type = this.typeData($("#"+ id +"").attr("data-type"),$(".chart-type-val span").text());
        this.dataSource(id,chart_date);   // 获取X,Y
        DataIndexes.inAjax(chart_date,id); // 请求数据
        this.only(index_arr,chart_date);  // 存入数组
        // console.log(index_arr);
    },
    // 整体数据
    retrieve:function(id){
        var self = this;
        var chart_date={
            'cid':id,
            "style":{},
            // "type":$("#chart_type").val(),
            // "displayLevel":0,
            // "linkPageId":null,    // 点击控件要跳转的页面ID
            "customData":null,    // 各控件类型自定义的数据
            "queryJson":{
                "biSetId": $(".data-source-box option:selected").attr("bisetid"),
                "dataModelId": modelId,    // BiSet对应数据库表
                'x':[],
                'y':[],
                'filter':[]
            }
        };
        // 自定义数据
        chart_date.customData = {
            "dataType":$("#"+ id +"").attr("data-type"),             // 类型
        };
        this.dataSource(id,chart_date);  // 获取X,Y
        this.whz(id,chart_date);         // 获取宽高
        this.only(save_arr,chart_date,id);  // 输入数组
        // console.log(save_arr);
    },
    // 修改文本内容，并存入数据save_arr中
    textData:function(id){
        var self = this;
        var chart_date= {
            'cid': id,
            "style": {},
            // "type":$("#chart_type").val(),
            // "displayLevel":0,
            // "linkPageId":null,    // 点击控件要跳转的页面ID
            "customData": null,    // 各控件类型自定义的数据
            "queryJson": null
        };
        // 自定义数据
        var text = $("#" + id).find(".content-text>div");
        chart_date.customData = {
            "dataType":$("#"+ id +"").attr("data-type"),             // 控件类型
            "text":{
                "fontSize":text.css("font-size"),                      // 大小
                "color":text.css("color"),                             // 颜色
                "fontFamily":text.css("font-family"),                 // 字体
                "fontWeight":text.css("font-weight"),                  // 加粗
                "fontStyle":text.css("font-style"),                    // 斜体
                "textDecorationLine":text.css("text-decoration-line"),        // 下划线
                "textAlign":text.css("text-align"),                    // 对齐方式
            }
        };
        this.whz(id,chart_date);
        this.only(save_arr,chart_date,id);
        // console.log(chart_date);
    },
    // 获取右侧维度、度量、数据筛选
    // 图表：chart-attr-box 表格：table-attr-box
    dataSource:function(id,chart_date){
        var type = $("#" + id).attr("data-type");
        $.each($("."+ type +"-attr-box .x-pills ul li"),function(index,icon){
            var search_attr= {
                'field': $(icon).attr("fieldname"),
                'fieldAlias': $(icon).text(),
                'order': "ASC",
                'dataType': $(icon).attr('datatype'),
                'dimMea': $(icon).attr("dim_mea"),
                'disCon': $(icon).attr("disCon"),
                'aggregation': $(icon).attr("defaultaggregation")
            };
            chart_date.queryJson.x.push(search_attr);
        });
        $.each($("."+ type +"-attr-box .y-pills ul li"),function(index,icon){
            var search_attr={
                'field':$(icon).attr("fieldname"),
                'fieldAlias':$(icon).text(),
                'order':"ASC",
                'dataType':$(icon).attr('datatype'),
                'dimMea':$(icon).attr("dim_mea"),
                'disCon':$(icon).attr("disCon"),
                'aggregation':$(icon).attr("defaultaggregation")
            };
            chart_date.queryJson.y.push(search_attr);
        });
        $.each($("."+ type +"-attr-box .datas-pills ul li"),function(index,icon){
            var search_attr={
                'field':$(icon).attr("fieldname")||'',
                'fieldAlias':$(icon).text(),
                'order':"ASC",
                'dataType':$(icon).attr('datatype')||'',
                'dimMea':$(icon).attr("dim_mea")||'',
                'disCon':$(icon).attr("disCon")||'',
                'aggregation':$(icon).attr("defaultaggregation")||''
            };
            chart_date.queryJson.filter.push(search_attr);
        });
        return chart_date;
    },
    // 根据ID返回宽、高、度、定位、层级、控件类型type值
    whz:function(id,chart_date){
        // 层级
        chart_date.displayLevel = this.whLength(id,"z-index");
        // 控件类型
        chart_date.type = this.typeData($("#"+ id +"").attr("data-type"),$(".chart-type-val span").text());
        // 宽高、距左、距右
        chart_date.style.width = this.whLength(id,"width");
        chart_date.style.height = this.whLength(id,"height");
        chart_date.style.top = this.whLength(id,"top");
        chart_date.style.left = this.whLength(id,"left");
        return chart_date;
    },
    // 根据ID名返回宽度
    whLength:function(id,box){
        return parseInt($("#"+ id +"").css(box));
    },
    // 根据不同的类型和图形，返回不同的控件类型
    typeData:function(dataType,sele){
        var type = null;
    // 控件类型：0-表格；101-柱状图；102-拆线图；103-圆饼图；201-文本；202-图片；203-按钮
        switch(dataType){
            case "chart":
                type = eachGPdata(sele);
                break;
            case "table":type = 0;
                break;
            case "text":type = 202;
                break;
            case "image":type = 203;
                break;
        }
        return type;
    },
    only:function(d,chart_date,id){
        // 根据ID唯一活动数据唯一
        var bur = true;
        $.each(d,function(index,item){
            if(item.cid === id){
                d.splice(index,1,chart_date);
                bur = false;
            }
        });
        if(bur){
            d.push(chart_date);
        }
        return d;
    }
};


var DataIndexes = {
    // 根据数据索引，请求数据
    inAjax:function(d){
        var self = this;
        console.log(JSON.stringify(d));
        $("#"+id_).find(".resize-panel").siblings().remove();  // 删除之前的图形
        $.ajax({
            type:"post",
            url:"/bi/report/v1/data.json",
            data:JSON.stringify(d),
            dataType:"json",
            contentType: 'application/json',
            success:function(data){
                // 根据上传索引绘制图形
                self.draw(id_,d.type,data.data);
            },
            error:function(res){
                // console.log(res);
            }
        })
    },
    // 刷新，判断类型，选择图形绘制
    // 参数：id：元素ID
    draw:function(id,type,data){

        // 判断类型
        switch($("#"+id).attr("data-type")){
            case "chart":
                switch(type){
                    case 0:
                        // 表格
                        chart_table(id,data);
                        break;
                    case 101:
                        // 绘制柱状图
                        // histogramData(data);
                        // bar("#"+id,dataTsv);
                        manyChart("#" +id,data);
                        // bar("#"+id,dataTsv);
                        break;
                    case 102:
                        var value = [];
                        $.each(data.value,function(x,y){
                            value.push(y);
                        });
                        line("#" + id, "折线图", "2017年1011号", value, data["x-axis"], data["y-axis"]);
                        break;
                    case 103:

                        var outerRadius = 150; //外半径
                        var innerRadius = 100; //内半径，为0则中间没有空白
                        circle("#" + id,data.value,outerRadius,innerRadius);
                        break;
                }
                break;
            case "table":
                // 绘制表格
                chart_table(id,data);
                // chart_table(id,table_date);
                break;
        }
    }
};

// 编辑柱状图数据
function histogramData(data){
    var z = [];
    $.each(data.dim.dimX,function(index,val){

    })
}
// 文本编辑器
var textEdit = {
  color:function(){
      $(document).on("click",".color-row span",function(){
          console.log($(this).attr("data-color"))
      })
  }
};
textEdit.color();





// 粘贴
function paste(){
    // 判断是否为空对象！
    if(!(JSON.stringify(copy_data) === "{}")){
        var id = copy_data.dataType + number;
        var left = event.pageX - parseFloat($(".clearY").width()) - parseFloat($(".clearY").css("padding-left")) - parseFloat($(".component-libs-box").css("margin-left"));
        var top = event.pageY - parseFloat($(".clearX").height()) - parseFloat($(".edit-libs-box").css("margin-top"));

        var z = '';
        // 如果是文本和图片，则复制内容不同
        switch(copy_data.dataType){
            case "text":
                // 文本内容
                z = '<div class="content-text"><div contenteditable="false" spellcheck="true" data-medium-editor-element="true" role="textbox" aria-multiline="true" data-placeholder="请输入文本" data-medium-focused = "true">'+ copy_data.content +'</div></div>';
                break;
            case "image":
                // 保存图片路径
                z = '<div class="image-class"><img src="'+ copy_data.image +'"></div>';
                break;
        }


        var html = '<div  id="'+ id +'" type="'+ copy_data.type +'" data-type="'+ copy_data.dataType +'" style="height:'+ copy_data.style.height +';width:'+ copy_data.style.width +';top:'+ top+'px;left:'+left+'px;z-index:'+ copy_data.displayLevel +'" class="resize-item">'+ z +'</div>';
        $(".edit-libs-box").append(html);

        // 判断是否有数据索引！
        if(copy_data.retrieve){
            var z = JSON.parse(JSON.stringify(copy_data.retrieve)); 	// 注意深拷贝和浅拷贝问题！！
            z.cid = id;
            save_arr.push(z);
            DataIndexes.draw(id);  // 刷新数据；
        }

        // 拖拽初始化！
        id_ = id; // 拖拽必须修改id_
        number++; // ID不重复！
        new ZResize({
            stage: '.edit-libs-box', //舞台
            itemClass: 'resize-item'//可缩放的类名
        });
    }else{
        layer.msg("请先复制");
    }
}

// 图片
/*  上传图片大小格式验证  */
function imageUpload (_this){
    var fileSize = 0;
    var isIE = /msie/i.test(navigator.userAgent) && !window.opera;
    var name=_this.value;
    var postfix=name.substring(name.lastIndexOf(".") + 1).toLowerCase();
    if(isIE && !_this.files) {
        var filePath = _this.value;
        var fileSystem = new ActiveXObject("Scripting.FileSystemObject");
        var file = fileSystem.GetFile(filePath);
        fileSize = file.Size;
    } else {
        fileSize = _this.files[0].size;
    }
    var size = fileSize / 1024;
    if(size > 5000) {
        layer.msg('附件不能大于5M！');
        _this.value==' ';
        $(_this).attr('src','');
        return false;
    }else{
        if(postfix!='jpg' && postfix!='jpeg'&& postfix!='png'&& postfix!='bmp'){
            layer.msg('不支持的图片格式');
            _this.value==' ';
            $(_this).attr('src',' ');
            return false;
        }else{
            imgPreview(_this);
        }
    }
}
/*  上传图片预览  */
function imgPreview(_this){
    var isAllow = false;
    if(_this.value==='')return false;
    var $file = $(_this);
    var fileObj = $file[0];
    var windowURL = window.URL || window.webkitURL;
    var dataURL;

    if(fileObj && fileObj.files && fileObj.files[0]) {

        var form = new FormData($("#fileForm")[0]);
        var cahrt_type = $(_this).siblings("img").attr("data-type");    // 类型

        form.append("file",fileObj.files[0]);
        form.append("pageId",pageId);  // 页面ID
        form.append("cid",cahrt_type + number);  // 控件ID

        // 上传图片
        // $.ajax({
        //     type:"post",
        //     url:"/bi/report/v1/file.json",
        //     data:form,
        //     contentType: false,
        //     processData: false,
        //     success:function(data){
        //         console.log(data);
        //     },
        //     error:function(){
        //
        //     }
        // });


        dataURL = windowURL.createObjectURL(fileObj.files[0]);
        //读取图片数据
        var reader = new FileReader();
        reader.onload = function (e) {
            var data = e.target.result;
            //加载图片获取图片真实宽度和高度
            var image = new Image();
            image.onload = function(){
                // 这部分是显示图片
                var width = image.width;
                var height = image.height;
                var p =  ( height / width ).toFixed(2);   // 宽高比例，小数点后两位
                var c = $(".edit-libs-box");  // 内容区
                var cW = parseInt(c.css("width"));  // 内容区宽度
                var cH = parseInt(c.css("height"));  // 内容区宽度
                var w = width;  // 元素宽度
                var h = height;  // 元素高度
                var left =  (cW - w) / 2; // 距离左边距离
                var top =   (cH - h) / 2; // 距离顶部边距离


                if(width >= cW){
                    // 如果图片真实大小大于内容区，则最大宽度为内容区宽度；
                    w = cW;
                    h = cW * p;
                    left = 0;
                    top =   (cH - h) / 2;
                }
                // console.log("图片宽度：" + width,"内容区宽度：" + cW,"元素宽度：" + w,"元素高度：" + h,"图片宽度：" + height,"比例：" + p,"距离左边距离：" + left,"距离顶部边距离：" + top);
                c.append('<div data-type="'+ cahrt_type +'" type="'+ cahrt_type +'" style=" z-index:'+ number +'; left:'+ left +'px;top:'+ top +'px;width:'+ w +'px;height:'+ h +'px;" id="'+ cahrt_type + number +'" class="resize-item"><div class="image-class"><img src="'+ dataURL +'"></div></div>');

                id_ = cahrt_type + number;
                number++;
                new ZResize({
                    stage: '.edit-libs-box', //舞台
                    itemClass: 'resize-item'//可缩放的类名
                });

                // 将图片存入数据库


            };
            image.src= data;
        };
        reader.readAsDataURL(fileObj.files[0]);


    } else {
        dataURL = $file.val();
        var imgObj = $img.get(0);
        imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
        imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;
    }
    return true;
}

// 输入监听，只调用一次; 参数为JS元素
function enterListen(z){
    duplexContenteditable(z, function() {
        var id = $(this).parent().parent().attr("id");
        refresh.textData(id);
    });
}
//  监听文本框内容变化
var duplexContenteditable = new function() {
    var useDOMCharacterDataModified = false, target
    if (document.attachEvent && document.addEventListener) {
        document.attachEvent("onselectionchange", function() {
            if (target && target.duplexCallback) {
                target.duplexCallback()
            }
        })
    }
    if ("MutationEvent" in window) {
        var test = document.createElement("div")
        var root = document.body || document.documentElement
        root.appendChild(test)
        test.addEventListener("DOMCharacterDataModified", function(e) {
            useDOMCharacterDataModified = true
        })
        try {
            //http://www.programcreek.com/java-api-examples/index.php?api=org.w3c.dom.events.MutationEvent
            var event = document.createEvent("MutationEvents");
            event.initMutationEvent("DOMCharacterDataModified", true, false, null, "x", "y", null, 0);
            test.dispatchEvent(event)
        } catch (e) {
        }
        setTimeout(function() {
            root.removeChild(test)
        })
    }
    return function(element, callback) {
        function cb() {
            var curValue = element.innerHTML
            if (curValue !== oldValue) {
                oldValue = curValue
                callback.call(element)
            }
        }

        if (element.addEventListener) {
            if (useDOMCharacterDataModified) {//基本上所有浏览器都支持

                if ("WebkitAppearance" in root.style) {
                    // http://code.metager.de/source/xref/WebKit/LayoutTests/fast/events/
                    // https://bugs.webkit.org/show_bug.cgi?id=110742
                    element.addEventListener("webkitEditableContentChanged", cb)
                } else {
                    element.addEventListener("keyup", cb)
                }
                //DOMCharacterDataModified不能监听第一次变动, 需要使用keyup辅助
                element.addEventListener("DOMCharacterDataModified", cb)
            } else {
                element.addEventListener("input", cb)
            }
        } else {
            var oldValue = NaN
            element.attachEvent("onfocus", function(e) {
                target = element
            })
            element.attachEvent("onblur", function(e) {
                target = null
                oldValue = NaN
            })

            element.duplexCallback = cb
            element.attachEvent("onkeyup", cb)
        }
    }
}