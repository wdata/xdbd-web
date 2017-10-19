var id_='',search_date={},field=null,fieldAlias=null,order=null,dataType=null,dim_mea=null,dis_con=null,aggregation=null
    ,save_arr=[]  // 保存全部数据；
    ,index_arr=[]  // 保存索引数据；
    ,copy_data = {} // 复制后保存数据；
    ,data_type = ""  // 作为判断图形的；
    ,number=0   // 层级
    ,fieldid = null  // 记录数据筛选时候的ID
    ,modelId = null // 记录dataModelId值；
    ,url = "http://192.168.1.15:8023"

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
                    // 如果cid相同，则将item数据复制给copy_data
                    copy_data = JSON.parse(JSON.stringify(item));
                    var dataType = item.customData.dataType;
                    console.log(dataType);
                    if(dataType === "text"|| dataType === "button" || dataType === "image" ){
                        copy_data.customData.html = $("#"+id).find(".resize-panel").siblings().prop("outerHTML");
                    }
                }
            });
            console.log(copy_data);
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
                    context.getClickEle().css("z-index",0);
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
    // 数据索引-- 图表和表格的数据索引
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
        this.only(index_arr,chart_date);  // // 数据根据ID唯一，并将数据添加进入保存数组
        // console.log(index_arr);
    },
    // 图表和表格数据
    retrieve:function(id){
        var self = this;
        var chart_date={
            'cid':id,
            "style":{},
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
        this.whz(id,chart_date);         // // 根据ID返回宽、高、度、定位、层级、控件类型type值
        this.only(save_arr,chart_date,id);  // 数据根据ID唯一，并将数据添加进入保存数组
        // console.log(save_arr);
    },
    // 修改文本内容，并存入数据save_arr中
    textData:function(id){
        var self = this;
        var chart_date= {
            'cid': id,
            "style": {},
            // "linkPageId":null,    // 点击控件要跳转的页面ID
            "customData": null,    // 各控件类型自定义的数据
            "queryJson": null
        };
        // 自定义数据
        var text = $("#" + id).find(".content-text>div");
        chart_date.customData = {
            "dataType":$("#"+ id +"").attr("data-type"),             // 控件类型
            "text":{
                "content":$(text).html(),                    // 对齐方式
                "color":text.css("color"),                             // 颜色
                // "fontSize":text.css("font-size"),                      // 大小       (这些全部包含在HTML中，和富文本编辑器类似，因为选择颜色会修改焦点，所以没有办法在HTML中修改颜色)
                // "fontFamily":text.css("font-family"),                 // 字体
                // "fontWeight":text.css("font-weight"),                  // 加粗
                // "fontStyle":text.css("font-style"),                    // 斜体
                // "textDecorationLine":text.css("text-decoration-line"),        // 下划线
                // "textAlign":text.css("text-align"),                    // 对齐方式
            }
        };
        this.whz(id,chart_date);// 根据ID返回宽、高、度、定位、层级、控件类型type值
        this.only(save_arr,chart_date,id);// 数据根据ID唯一，并将数据添加进入保存数组
        // console.log(chart_date);
    },
    // 修改图片内容时，保存数据到svae_arr中
    priceData:function(id){
        var chart_date= {
            'cid': id,
            "style": {},
            // "linkPageId":null,    // 点击控件要跳转的页面ID
            "customData": null,    // 各控件类型自定义的数据
            "queryJson": null
        };
        // 自定义数据
        var ele = $("#" + id).find(".image-class");
        chart_date.customData = {
            "dataType":$("#"+ id +"").attr("data-type"),             // 控件类型
            "price":{
                "url":$(ele).html(), // 图片路径
                "ratio":$(".set-price-prop input").is(":checked"), //是否保存宽高比缩放
                "border-color":$(ele).css("border-color"), //边框颜色
                "border-style":$(ele).css("border-style"), //边框样式
                "border-width":$(ele).css("border-width"), //边框宽度
                "border-radius":$(ele).css("border-radius"), //边框圆角
            }
        };
        this.whz(id,chart_date);// 根据ID返回宽、高、度、定位、层级、控件类型type值
        this.only(save_arr,chart_date,id);// 数据根据ID唯一，并将数据添加进入保存数组
        // console.log(chart_date);
    },
    // 修改按钮内容时，保存数据到svae_arr中
    buttonData:function(id){
        var chart_date= {
            'cid': id,
            "style": {},
            // "linkPageId":null,    // 点击控件要跳转的页面ID
            "customData": null,    // 各控件类型自定义的数据
            "queryJson": null
        };
        // 自定义数据
        var ele = $("#" + id).find(".content-button button");
        var color = $(ele).css("font-color")?$(ele).css("font-color"):"#000";
        chart_date.customData = {
            "dataType":$("#"+ id +"").attr("data-type"),             // 控件类型
            "button":{
                "content":$(ele).html(), // 按钮文本内容
                "background-color":$(ele).css("background-color"), // 背景颜色和边框颜色
                "font-size":$(ele).css("font-size"), // 文本字体大小
                "font-color":color, // 文本字体颜色
            }
        };
        this.whz(id,chart_date);// 根据ID返回宽、高、度、定位、层级、控件类型type值
        this.only(save_arr,chart_date,id);// 数据根据ID唯一，并将数据添加进入保存数组
        // console.log(chart_date);
    },
    // 根据不同的data-type类型，来执行不同的存储;以此减少存储的次数
    storage:function(type){
        switch(type){
            case "chart":
                refresh.retrieve(id_);
                break;
            case "table":
                refresh.retrieve(id_);
                break;
            case "text":
                refresh.textData(id_);
                break;
            case "image":
                refresh.priceData(id_);
                break;
            case "button":
                refresh.buttonData(id_);
                break;
        }
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
    // 数据根据ID唯一，并将数据添加进入保存数组
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
        // console.log(JSON.stringify(d));
        $("#"+id_).find(".resize-panel").siblings().remove();  // 删除之前的图形
        $.ajax({
            type:"post",
            url:"/xdbd-bi/bi/report/v1/data.json",
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

// 文本编辑器
var textEdit = {
    // 文本字体颜色
  color:function(){
      $(document).on("click",".set-price-color .color-row span",function(){
          $("#"+id_).find(".content-text").css('color',$(this).attr("data-color"))
          // document.execCommand("foreColor",false,$(this).attr("data-color"));
      })
  },
    // 文本字体大小 1-7尺寸
  fontSize:function(){
      $(".set-text-size select").on("change",function(){
          document.execCommand("fontSize",false,$(this).val());
      })
  },
    // 文本字体类型
  fontFamily:function(){
      $(".set-text-family select").on("change",function(){
          document.execCommand("fontName",false,$(this).val());
      })
  },
    // 文本字体：加粗、斜体、下划线
  fontStyle:function(){
      $(".set-text-weight img").on("click",function(){
          $(this).addClass("active").siblings().removeClass("active");
          if($(this).is(".bold")){
              document.execCommand("bold",false);
          }else if($(this).is(".italic")){
              document.execCommand("italic",false);
          }else if($(this).is(".underline")){
              document.execCommand("underline",false);
          }
      })
  },
    // 文本对齐方式：向左、居中、向右
  textAlign:function(){
      $(".set-text-align img").on("click",function(){
          $(this).addClass("active").siblings().removeClass("active");
          if($(this).is(".justifyLeft")){
              document.execCommand("justifyLeft",false);
          }else if($(this).is(".justifyCenter")){
              document.execCommand("justifyCenter",false);
          }else if($(this).is(".justifyRight")){
              document.execCommand("justifyRight",false);
          }
          console.log(document.execCommand("bold"));
      })
  }
};
textEdit.color();// 文本字体颜色
textEdit.fontSize();// 文本字体大小 1-7尺寸
textEdit.fontFamily();// 文本字体类型
textEdit.fontStyle();// 文本字体：加粗、斜体、下划线
textEdit.textAlign(); // 文本对齐方式：向左、居中、向右

// 按钮编辑
var buttonEdit = {
    main:function(){
        refresh.buttonData(id_);
    },
    // 按钮文字
    ButtonText:function(){
        $("#buttonText").on("change",function(){
            $("#"+id_).find("button").text($(this).val())
            buttonEdit.main();
        })
    },
    // 按钮背景颜色和边框线颜色
    BackColor:function(){
        $(document).on("click",".set-button-color .color-row span",function(){
            $("#"+id_).find("button").css({
                'background-color':$(this).attr("data-color"),
                'border-color':$(this).attr("data-color")
            })
            buttonEdit.main();
        });
    },
    // 按钮文字
    ButtonSize:function(){
        $(".set-button-size select").on("change",function(){
            $("#"+id_).find("button").css("font-size",$(this).val() + "px")
            buttonEdit.main();
        })
    },
    // 按钮字体颜色
    BackSizeColor:function(){
        $(document).on("click",".set-button-SizeColor .color-row span",function(){
            $("#"+id_).find("button").css('color',$(this).attr("data-color"))
            buttonEdit.main();
        })
    }
};
buttonEdit.ButtonText();// 按钮文字
buttonEdit.BackColor();// 按钮背景颜色和边框线颜色
buttonEdit.ButtonSize();// 按钮文字
buttonEdit.BackSizeColor();// 按钮字体颜色

// 图片编辑
var priceEdit = {
    main:function(){
        refresh.priceData(id_);
    },
    // 保持宽高比
    ratio:function(){
        $(".set-price-prop input").on("click",function(){
            // 判断是否开启
            if($(this).is(":checked")){
                $("#"+ id_).attr("data-ratio-bur", true);
            }else{
                $("#"+ id_).attr("data-ratio-bur", false);
            }
            priceEdit.main();
        })
    },
    // 边框 样式
    borderStyle:function(){
        var self = this;
        $(".set-price-border-style select").on("change",function(){
            // dotted	定义点状边框。在大多数浏览器中呈现为实线。       dashed	定义虚线。在大多数浏览器中呈现为实线。     solid	定义实线。
            var style = self.borderStyleJud($(this).val());
            $("#"+id_).find(".image-class").css("border-style",style);
            priceEdit.main();
        })
    },
    // 边框 颜色
    borderColor:function(){
        $(document).on("click",".set-price-color .color-row span",function(){
            $("#"+id_).find(".image-class").css("border-color",$(this).attr("data-color"))
            priceEdit.main();
        });
    },
    // 边框 宽度
    borderWidth:function(){
        var self = this;
        $(".set-price-border select").on("change",function(){
            var color = $(".set-price-color .palette-color-picker-button").css("background-color") + " ";
            var style = self.borderStyleJud($(".set-price-border-style select").val()) + " ";
            var width = $(this).val() + "px ";
            console.log(width + style + color);
            $("#"+id_).find(".image-class").css("border",width + style + color);
            priceEdit.main();
        })
    },
    // 边框 圆角
    borderRadius:function(){
        $(".set-price-radius input").on("change",function(){
            $("#"+id_).find(".image-class").css("border-radius",$(this).val() + "px")
            priceEdit.main();
        })
    },
    borderStyleJud:function(data){
        var style = null;
        switch(data){
            case "点线":style = "dotted";
                break;
            case "虚线":style = "dashed";
                break;
            case "实线":style = "solid";
                break;
        }
        return style;
    }

};
priceEdit.ratio();// 保持宽高比
priceEdit.borderStyle();// 边框 样式
priceEdit.borderColor();// 边框 颜色
priceEdit.borderWidth();// 边框 宽度
priceEdit.borderRadius();// 边框 圆角

var operating = {
    // 保存
    save:function(){
        console.log(save_arr);
    },
};

var filter = {
    numberDeal:function(){

    }
};



// 项目属性（城市筛选）
var project = {
    "list":null,
    textFilter:function(field){
        $.ajax({
            type:"get",
            url:"/xdbd-bi/bi/report/v1/data/list.json",
            dataType:'json',
            data:{
                "biSetId":$(".data-source-box option:selected").attr("bisetid"),
                "field":field
            },
            success:function(data){
                if(data.code === 0){
                    project.list = data.data;   // 存储数据
                    var html = '';
                    var l = $(".f-select-cont ul").empty();
                    $.each(data.data,function(index,val){
                        html += `<li>
                                    <img src="images/xuankuang.png" alt="">
                                    <input type="checkbox">
                                    <span>${ val }</span>
                                </li>`;
                    });
                    l.append(html);
                }
            },
            error:function(res){
                console.log(res);
            }
        })
    },
    pjEvent:function(){
        //项目（过滤)属性
        $(".f-name").on("click","li",function(){
            var $idx = $(this).index();
            // 区分
            if($idx >= 2){
                layer.msg("暂未实现！");
                return;
            }
            if($idx === 0){
                $(".f-select-methods").show();
            }else{
                $(".f-select-methods").hide();
            }
            $(this).addClass("active").siblings().removeClass("active");
            $(".f-box"+($idx+1)).show().siblings().hide();
        });

        $(document).on("click",".f-select-cont li",function(){
            if($(this).find("input").prop("checked")){
                project.check($(this),0,0);
                if($(".f-select-methods li").eq(1).find("input").prop("checked")){
                    $(this).find("span").css("text-decoration","line-through");
                }
            }else{
                project.check($(this),1,0);
                $(this).find("span").css("text-decoration","none");
            }
        });
        $(".f-box1:first li").on("click",function(){
            $(this).parent().find("input").removeAttr('checked')
                .siblings("img").attr("src","images/icon_circle.png");
            project.check($(this),0,1);
            if($(this).index() === 0){
                $(".f-select-cont").show();
                $(".f-addbtn-box2").hide();
            }else{
                $(".f-select-cont").hide();
                $(".f-addbtn-box2").show();
            }
        })


    },
    // 勾选
    check:function(ele,type,inType){
        var imgA = ""
            ,imgB = "";
        switch(type){
            case 0:
                imgA = inType===0?"icon_checked":"icon_circle_on";
                ele.find("input").attr('checked',"checked")
                    .siblings("img").attr("src","images/"+ imgA +".png");
                break;
            case 1:
                imgB = inType===0?"xuankuang":"icon_circle";
                ele.find("input").removeAttr('checked')
                    .siblings("img").attr("src","images/"+ imgB +".png");
                break;
        }
    },
    // 文本筛选 -- 包含
    contain:function(_this){
        project.chear(_this);
        $.each($(".f-select-cont li"),function(index,val){
            if($(val).find("input").prop("checked")){
                $(val).find("span").css("text-decoration","none");
            }
        });
        $(".f-select-methods").find("input").removeAttr("disabled","disabled");

    },
    // 文本筛选 -- 排除
    filter:function(_this){
        project.chear(_this);
        $.each($(".f-select-cont li"),function(index,val){
            if($(val).find("input").prop("checked")){
                $(val).find("span").css("text-decoration","line-through");
            }
        });
        $(".f-select-methods").find("input").removeAttr("disabled","disabled");
    },
    // 文本筛选 -- 使用全部
    all:function(_this){
        project.chear(_this);
        project.check($(".f-select-cont li"),0,0);
        $(".f-select-methods").find("input").attr("disabled","disabled");
        $(".f-select-cont li span").css("text-decoration","none");
    },
    search:function(_this){
        var text = $(_this).val();
        if(text.length > 0){
            $.each($(".f-select-cont li"),function(index,val){
                if($(val).find("span").text().indexOf(text) === 0){
                    $(val).show();
                }else{
                    $(val).hide();
                }
            });
        }else{
            $(".f-select-cont li").show();
        }
    },
    chear:function(_this){
        $(".f-select-methods").find("input").removeAttr('checked')
            .siblings("img").attr("src","images/icon_circle.png");
        project.check($(_this),0,1);
    }
};
$.ready(function(){
    project.pjEvent();   // 选择城市事件
    project.textFilter("StrAddress");
});









//数据筛选(求和(值))
//range 初始化
var swRag = {
    "min":$(".s-range-val .min"),
    "max":$(".s-range-val .max"),
    // 事件
    ele:function(){
        $(".s-data-val ul>li").on("click",function(){
            var $s = $(this).find("input");
            swRag.selec(($s));

            // 重置加载范围
            $(".s-slider-box").hide();
            $(".s-more-btn").show();
            // 清除数据
            swRag.min.val("");swRag.max.val("");
        });
        //点击加载更多,显示范围
        $(".s-more-btn").click(function(){
            var index = $(".s-data-val ul>li").find("input[name]:checked").parent().index();
            switch(index){
                case 0 :
                    if(!swRag.judgment(index)){	return	};
                    swRag.range(index);
                    break;
                case 1:
                    if(!swRag.judgment(index)){	return	};
                    swRag.range(index);
                    break;
                case 2:
                    if(!swRag.judgment(index)){	return	};
                    swRag.range(index);
                    break;
            }
            $(".s-slider-box").show();
            $(this).hide();
        });
    },
    // 根据不同的index变化
    selec:function($s){
        $s.attr("checked","checked");
        var $idx = $s.parent().index();
        $s.prev("img").attr("src","images/icon_circle_on.png");
        $s.parent("li").siblings().find("img").attr("src","images/icon_circle.png");
        swRag.switchRange($idx);
    },
    // 根据传递的元素赋值
    ass:function(min,max){
        swRag.min.val("");
        swRag.max.val("");
        swRag.selec(($(".s-data-val ul>li").eq(0).find("input")));
        if(min && !max){
            swRag.selec(($(".s-data-val ul>li").eq(1).find("input")));
            swRag.min.val(min);
        }
        if(!min && max){
            swRag.selec(($(".s-data-val ul>li").eq(2).find("input")));
            swRag.max.val(max);
        }
        if(min && max){
            swRag.selec(($(".s-data-val ul>li").eq(0).find("input")));
            swRag.min.val(min);
            swRag.max.val(max);
        }
    },
    // 保存
    save:function(){
        var index = $(".s-data-val ul>li").find("input[name]:checked").parent().index();
        if(!swRag.judgment(index)){	return	};
        $(".data-filter-mod").hide();

        // 根据记录的ID，作为判断
        $.each($(".datas-pills li"),function(index,val){
            if($(val).attr("fieldid") === fieldid){
                $(val).attr("min",swRag.min.val());
                $(val).attr("max",swRag.max.val());
            }
        })
    },
    // 取消
    cancel:function(){
        $(".data-filter-mod").hide();
    },
    // 判断
    judgment:function(index){
        switch(index){
            case 0 :
                if(swRag.min.val().length <= 0 || swRag.max.val().length <= 0){
                    layer.msg("请先输入最小值和最大值！");
                    return false;
                }
                if(swRag.min.val().length > swRag.max.val().length){
                    layer.msg("最大值大于最小值！");
                    return false;
                }
                return true;
                break;
            case 1:
                if(swRag.min.val().length <= 0){
                    layer.msg("请输入最小值！");
                    return false;
                }
                return true;
                break;
            case 2:
                if(swRag.max.val().length <= 0){
                    layer.msg("请输入最大值！");
                    return false;
                }
                return true;
                break;
        }
    },
    // 判断显示
    switchRange:function(idx){
        if(idx===0){ //范围
            //input均不禁用
            swRag.min.css("background-color","#FBFBFB").prop("readonly",false);
            swRag.max.css("background-color","#FFFFFF").prop("readonly",false);
        }else if(idx===1){ //至少
            //input最大值禁用
            swRag.min.css("background-color","#FBFBFB").prop("readonly",false);
            swRag.max.css("background-color","#FFFFFF").prop("readonly",true);
        }else if(idx===2){ //至多
            //input最小值禁用
            swRag.min.css("background-color","#FFFFFF").prop("readonly",true);
            swRag.max.css("background-color","#FBFBFB").prop("readonly",false);
        }
    },
    // 范围
    range:function(type){
        var slider = $( "#slider-range" );
        var minD = parseInt(swRag.min.val());
        var maxD = parseInt(swRag.max.val());
        switch(type){
            case 0:
                slider.slider({
                    range: true,
                    min: minD,
                    max: maxD,
                    values: [ minD, maxD ],
                    slide: function( event, ui ) {
                        swRag.min.val(ui.values[ 0 ]);
                        swRag.max.val(ui.values[ 1 ]);
                    }
                });
                break;
            case 1:
                slider.slider({
                    range: "min",
                    value: minD,
                    min: minD,
                    max: minD *10 ,
                    slide: function( event, ui ) {
                        swRag.min.val(ui.value );
                    }
                });
                break;
            case 2:
                slider.slider({
                    range: "max",
                    value: maxD,
                    min: maxD /10,
                    max: maxD,
                    slide: function( event, ui ) {
                        swRag.max.val(ui.value );
                    }
                });
                break;
        }
    }
};
swRag.ele();
swRag.switchRange();



// 粘贴
function paste(){
    // 判断是否为空对象！
    if(!(JSON.stringify(copy_data) === "{}")){
        var customData = copy_data.customData;
        var id = customData.dataType + number;
        var left = event.pageX - parseFloat($(".clearY").width()) - parseFloat($(".clearY").css("padding-left")) - parseFloat($(".component-libs-box").css("margin-left"));
        var top = event.pageY - parseFloat($(".clearX").height()) - parseFloat($(".edit-libs-box").css("margin-top"));

        var z = '';
        // 如果是文本和图片，则复制内容不同
        if(customData.dataType === "text" || customData.dataType === "button" || customData.dataType === "image"){
            z = customData.html;
        }

        var html = '<div  id="'+ id +'" type="'+ copy_data.type +'" data-type="'+ customData.dataType +'" style="height:'+ copy_data.style.height +'px;width:'+ copy_data.style.width +'px;top:'+ top +'px;left:'+ left +'px;z-index:'+ copy_data.displayLevel +'" class="resize-item">'+ z +'</div>';
        $(".edit-libs-box").append(html);


        // 如果是表格和图形，需要生成一个新的索引数据添加到数组中
        if(copy_data.queryJson && customData.dataType === "chart" || customData.dataType === "table" ){
            var z = JSON.parse(JSON.stringify(copy_data));
            z.cid = id;
            save_arr.push(z);
        }
        refresh.storage(customData.dataType); // 判断不同的TYPE执行不同的采取函数
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
function imageUpload(_this){
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
    if(_this.value==='')return false;
    var $file = $(_this);
    var fileObj = $file[0];
    // var windowURL = window.URL || window.webkitURL;
    var dataURL;

    if(fileObj && fileObj.files && fileObj.files[0]) {

        var form = new FormData($("#fileForm")[0]);
        var cahrt_type = $(_this).siblings("img").attr("data-type");    // 类型

        form.append("file",fileObj.files[0]);
        form.append("pageId",pageId);  // 页面ID
        form.append("cid",cahrt_type + number);  // 控件ID

        // 上传图片
        $.ajax({
            type:"post",
            url:" /xdbd-bi/bi/report/v1/controlImage.json",
            data:form,
            contentType: false,
            processData: false,
            success:function(data){
                // dataURL = windowURL.createObjectURL(fileObj.files[0]);
                dataURL = url + data.data.url;
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
                        var p =  ( width / height ).toFixed(2);   // 宽高比例，小数点后两位
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
                            h = cW / p;
                            left = 0;
                            top =   (cH - h) / 2;
                        }
                        // console.log("图片宽度：" + width,"内容区宽度：" + cW,"元素宽度：" + w,"元素高度：" + h,"图片宽度：" + height,"比例：" + p,"距离左边距离：" + left,"距离顶部边距离：" + top);
                        c.append('<div data-ratio="'+ p +'" data-type="'+ cahrt_type +'" type="'+ cahrt_type +'" style=" z-index:'+ number +'; left:'+ left +'px;top:'+ top +'px;width:'+ w +'px;height:'+ h +'px;" id="'+ cahrt_type + number +'" class="resize-item"><div class="image-class"><img src="'+ dataURL +'"></div></div>');

                        id_ = cahrt_type + number;
                        number++;
                        new ZResize({
                            stage: '.edit-libs-box', //舞台
                            itemClass: 'resize-item'//可缩放的类名
                        });

                        // 将图片存入数据库
                        $(_this).val("");   // 清空input的内容
                        refresh.priceData(id_);   // 保存图片数据

                    };
                    image.src= data;
                };
                reader.readAsDataURL(fileObj.files[0]);


            },
            error:function(){

            }
        });

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