let id_='',field=null,fieldAlias=null,order=null,dataType=null,dim_mea=null,dis_con=null,aggregation=null
    ,save_arr=[]  // 保存全部数据；
    ,index_arr=[]  // 保存索引数据；
    ,copy_data = {} // 复制后保存数据；
    ,screen_data = [] // 用以保存筛选后的数据,以fieldid作为指引
    ,data_type = ""  // 作为判断图形的；
    ,number = 1   // 层级
    ,fieldId = null  // 记录数据筛选时候的ID
    ,modelId = null // 记录dataModelId值；
    ,eleLevel = 1;

// const surroundings = $(".set-cur-env select ", parent.document).find("option:selected").text();
const surroundings = sessionStorage.getItem("onEnv");
if(surroundings === "test" || surroundings === "prod"){
    $("#preview").siblings().hide().parent().siblings().hide();
    $('.generateEditBi').show().siblings("");
}



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
    // 编辑器右键
    context.attach('.resize-item', [
        {header: '菜单设置'},
        {text: '复制',action: function(e){
            const  ele = context.getClickEle();
            e.preventDefault();
            const id = ele.attr("id");
            operating.copy(id); // 复制
        }},
        {text: '粘贴',action: function(e){
            e.preventDefault();
            operating.paste();   // 粘贴函数；
        }},
        {text: '删除', action: function(e){
            e.preventDefault();
            const id = context.getClickEle().attr("id");
            operating.clickDelete(id);      // 删除功能

            let level = new Level();
            level.rearrange();
        }},
        {text: '排列', subMenu: [
            {header: '默认值'},
            {
                text: '置于顶层',
                action: function () {
                    context.getClickEle().css("z-index",( save_arr.length + 1));
                    let level = new Level();
                    level.arrangement(context.getClickEle());
                }
            },
            {
                text: '置于底层',
                action: function () {
                    /* 设置为0后会重新排序，变成1；所以不用担心排列问题 */
                    context.getClickEle().css("z-index",0);
                    let level = new Level();
                    level.arrangement(context.getClickEle());
                }
            },
            {
                text: '上移一层',
                action: function () {
                    const zIndex = parseInt(context.getClickEle().css("z-index"));
                    context.getClickEle().css("z-index",zIndex + 1);
                    /* 上移和下移都不在重新排序，只保存 */
                    let level = new Level();
                    level.arrang(context.getClickEle());
                }
            },{
                text: '下移一层',
                action: function () {
                    const zIndex = parseInt(context.getClickEle().css("z-index"));
                    context.getClickEle().css("z-index",zIndex-1);
                    /* 上移和下移都不在重新排序，只保存 */
                    let level = new Level();
                    level.arrang(context.getClickEle());
                }
            }
        ]}
    ]);

    context.attach('.edit-libs-box', [
        {text: '粘贴',action: function(e){
            e.preventDefault();
            operating.paste();   // 粘贴函数；
        }}
    ]);
});

// 保存数据，保存数据索引
let refresh = {
    // 刷新按钮
    save_config:function(id){
        // 上传数据索引
        refresh.indexes(id);
        // 保存数据到save_arr中；
        refresh.retrieve(id);
    },
    // 检索数据 -- 图表和表格的检索数据
    indexes:function(id){
        let chart_date={
            'cid':id,
            "queryJson":{
                "biSetId": $(".data-source-box option:selected").attr("bisetid"),
                "dataModelId": modelId,    // BiSet对应数据库表
                'x':[],
                'y':[],
                'filter':[]
            }
        };
        // 控件类型
        chart_date.type = this.typeData($("#"+ id +"").attr("data-type"));
        this.dataSource(id,chart_date);   // 获取X,Y
        this.only(index_arr,chart_date);  // // 数据根据ID唯一，并将数据添加进入保存数组
        DataIndexes.inAjax(chart_date,id); // 请求数据
        // console.log(index_arr);
    },
    // 图表和表格数据
    retrieve:function(id){
        let chart_date={
            'cid':id,
            "style":{},
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
        const idEle = $("#" + id);
        let chart_date= {
            'cid': id,
            "style": {},
            // "linkPageId":null,    // 点击控件要跳转的页面ID
            "customData": null,    // 各控件类型自定义的数据
            "queryJson": null
        };
        // 自定义数据
        const text = idEle.find(".content-text>div");
        chart_date.customData = {
            "dataType":$("#"+ id +"").attr("data-type"),             // 控件类型
            "controls":{
                "html":idEle.children(".content-text").prop("outerHTML"),                    // 对齐方式
                "text":$(text).html(),                    // 对齐方式
                "color":text.css("color"),                             // 颜色
            }
        };
        this.whz(id,chart_date);// 根据ID返回宽、高、度、定位、层级、控件类型type值
        this.only(save_arr,chart_date,id);// 数据根据ID唯一，并将数据添加进入保存数组
        // console.log(chart_date);
    },
    // 修改图片内容时，保存数据到svae_arr中
    priceData:function(id){
        const idEle = $("#" + id);
        let chart_date= {
            'cid': id,
            "style": {},
            "customData": null,    // 各控件类型自定义的数据
            "queryJson": null
        };
        // 自定义数据
        const ele = idEle.find(".image-class");
        chart_date.customData = {
            "dataType":$("#"+ id +"").attr("data-type"),             // 控件类型
            "controls":{
                "url": $(ele).html(), // 图片路径
                "html": idEle.find(".resize-panel").siblings().prop("outerHTML"),
                "ratio": $(".set-price-prop input").is(":checked"), //是否保存宽高比缩放
                "border-color": $(ele).css("border-color"), //边框颜色
                "border-style": $(ele).css("border-style"), //边框样式
                "border-width": $(ele).css("border-width"), //边框宽度
                "border-radius": $(ele).css("border-radius"), //边框圆角
            }
        };
        this.whz(id,chart_date);// 根据ID返回宽、高、度、定位、层级、控件类型type值
        this.only(save_arr,chart_date,id);// 数据根据ID唯一，并将数据添加进入保存数组
        // console.log(chart_date);
    },
    // 修改按钮内容时，保存数据到svae_arr中
    buttonData:function(id){
        const idEle = $("#" + id);
        let chart_date= {
            'cid': id,
            "style": {},
            // "linkPageId":null,    // 点击控件要跳转的页面ID
            "customData": null,    // 各控件类型自定义的数据
            "queryJson": null
        };
        // 自定义数据
        const ele = idEle.find(".content-button button");
        const color = $(ele).css("font-color")?$(ele).css("font-color"):"#000";
        chart_date.customData = {
            "dataType": $("#"+ id +"").attr("data-type"),             // 控件类型
            "controls":{
                "text": $(ele).html(), // 按钮文本内容
                "html": idEle.find(".resize-panel").siblings().prop("outerHTML"),
                "background-color": $(ele).css("background-color"), // 背景颜色和边框颜色
                "font-size": $(ele).css("font-size"), // 文本字体大小
                "font-color": color, // 文本字体颜色
            }
        };
        this.whz(id,chart_date);// 根据ID返回宽、高、度、定位、层级、控件类型type值
        this.only(save_arr,chart_date,id);// 数据根据ID唯一，并将数据添加进入保存数组
        // console.log(chart_date);
    },
    // 根据不同的data-type类型，来执行不同的存储;以此减少存储的次数
    storage:function(type,id){
        switch(type){
            case "chart":refresh.retrieve(id);break;
            case "table":refresh.retrieve(id);break;
            case "text":refresh.textData(id);break;
            case "image":refresh.priceData(id);break;
            case "button":refresh.buttonData(id);break;
        }
    },
    // 获取右侧维度、度量、数据筛选
    // 图表：chart-attr-box 表格：table-attr-box
    dataSource:function(id,chart_date){
        const type = $("#" + id).attr("data-type");
        $.each($("."+ type +"-attr-box .x-pills ul li"),function(index,icon){
            let search_attr= {
                'field': $(icon).attr("fieldname"),
                'fieldAlias': $(icon).text(),
                'order': "ASC",
                'dataType': $(icon).attr('datatype'),
                'dimMea': $(icon).attr("dim_mea"),
                'disCon': $(icon).attr("disCon"),
                'aggregation': $(icon).attr("defaultaggregation"),
                "fieldId": $(icon).attr("fieldId"),
            };
            refresh.screen(icon,search_attr,0); // 筛选项
            chart_date.queryJson.x.push(search_attr);
        });
        $.each($("."+ type +"-attr-box .y-pills ul li"),function(index,icon){
            let search_attr={
                'field':$(icon).attr("fieldname"),
                'fieldAlias':$(icon).text(),
                'order':"ASC",
                'dataType':$(icon).attr('datatype'),
                'dimMea':$(icon).attr("dim_mea"),
                'disCon':$(icon).attr("disCon"),
                'aggregation':$(icon).attr("defaultaggregation"),
                "fieldId": $(icon).attr("fieldId"),
            };
            refresh.screen(icon,search_attr,1); // 筛选项
            chart_date.queryJson.y.push(search_attr);
        });
        $.each($("."+ type +"-attr-box .datas-pills ul li"),function(index,icon){
            let search_attr={
                'field':$(icon).attr("fieldname"),
                'fieldAlias':$(icon).text(),
                'order':"ASC",
                'dataType':$(icon).attr('datatype'),
                'dimMea':$(icon).attr("dim_mea"),
                'disCon':$(icon).attr("disCon"),
                'aggregation':$(icon).attr("defaultaggregation"),
                "fieldId": $(icon).attr("fieldId"),
            };
            refresh.screen(icon,search_attr,2); // 筛选项
            chart_date.queryJson.filter.push(search_attr);
        });
        chart_date.linkPageId = $("#"+ id +"").attr("linkPageId");
        return chart_date;
    },
    // 搜索匹配项（匹配：fieldId 和 number（X轴为：0，y轴为：1，筛选轴为：2）)，返回筛选内容
    screen:function(icon,search_attr,number){
        // 如果li的ID和位置相同，则将筛选的数据放入其中x:0 , y:1 , p:2
        $.each(screen_data,function(x,y){
            if($(icon).attr("fieldId") === y.fieldId && y.number === number && y.cid === id_){
                // console.log(y);
                if(y.listFilter || y.textFilter){
                    search_attr.listFilter = timeSng.reJson(y.listFilter);
                    search_attr.textFilter = timeSng.reJson(y.textFilter);
                }
                if(y.numericFilter){
                    search_attr.numericFilter = timeSng.reJson(y.numericFilter);
                }
                if(y.dateFilter){
                    search_attr.dateFilter = timeSng.reJson(y.dateFilter);
                }
            }
        });
        return search_attr;
    },
    // 根据ID返回宽、高、度、定位、层级、控件类型type值
    whz:function(id,chart_date){
        // 层级
        chart_date.displayLevel = this.whLength(id,"z-index");
        // 控件类型
        chart_date.type = this.typeData($("#"+ id +"").attr("data-type"));
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
    typeData:function(dataType){
        var type = null;
    // 控件类型：0-表格；101-柱状图；102-拆线图；103-圆饼图；201-文本；202-图片；203-按钮
        switch(dataType){
            case "chart":
                type = $(".chart-type-val span").attr("data-type");
                break;
            case "table":type = 0;
                break;
            case "text":type = 202;
                break;
            case "image":type = 203;
                break;
        }
        return parseInt(type);
    },
    // 数据根据ID唯一，并将数据添加进入保存数组
    only:function(d,chart_date,id){
        // 根据ID唯一活动数据唯一
        let bur = true;
        $.each(d,function(index,item){
            if(item.cid === id){
                d.splice(index,1,chart_date);
                bur = false;
            }
        });
        // 只有唯一，并且，cid不为null才能存入数据中
        if(bur && chart_date.cid){
            d.push(chart_date);
        }
        return d;
    }
};

// 层级
/*
*   arrang：只保存；arrangement：保存和重新排序；rearrange：从1开始重新排序，如果层级相同则继续保持；
* */
function Level(){
    this.eleLevel = 1;
    this.temporary = null;
}
Level.prototype = {
    arrang:function(ele){
        const id = ele.attr('id');
        const type = ele.attr('data-type');
        refresh.storage(type,id);
    },
    arrangement:function(ele){
        const id = ele.attr('id');
        const type = ele.attr('data-type');
        refresh.storage(type,id);
        this.rearrange();
    },
    rearrange:function(){
        const self = this;
        /*  层级重新排序
         重新重置eleLevel，定义temporary记录原来的层级
         *   先根据原来的层级排序数组；
         *   在根据排序好的数组，对比与后一个数值是否相同：如果相同这不++；
         * */
        const compare = function(a,b){
            return a.displayLevel - b.displayLevel;
        };
        save_arr.sort(compare);
        $.each(save_arr,function(i){
            self.temporary = this.displayLevel;
            this.displayLevel = self.eleLevel;
            $("#" + this.cid).css("z-index",self.eleLevel);
            if(save_arr[i + 1]){
                if(!(save_arr[i + 1].displayLevel === self.temporary)){
                    self.eleLevel++;
                }
            }
        });
        console.log(save_arr)
    }
};



// 文本编辑器
let textEdit = {
    // 文本字体颜色
  color:function(){
      $(document).on("click",".set-text-attr-wrap .color-row span",function(){
          $("#"+id_).find(".content-text").css('color',$(this).attr("data-color"))
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
      })
  }
};
textEdit.color();// 文本字体颜色
textEdit.fontSize();// 文本字体大小 1-7尺寸
textEdit.fontFamily();// 文本字体类型
textEdit.fontStyle();// 文本字体：加粗、斜体、下划线
textEdit.textAlign(); // 文本对齐方式：向左、居中、向右

// 按钮编辑
let buttonEdit = {
    main:function(){
        refresh.buttonData(id_);
    },
    // 按钮文字
    ButtonText:function(){
        $("#buttonText").on("change",function(){
            $("#"+id_).find("button").text($(this).val());
            buttonEdit.main();
        })
    },
    // 按钮背景颜色和边框线颜色
    BackColor:function(){
        $(document).on("click",".set-button-color .color-row span",function(){
            $("#"+id_).find("button").css({
                'background-color':$(this).attr("data-color"),
                'border-color':$(this).attr("data-color")
            });
            buttonEdit.main();
        });
    },
    // 按钮文字
    ButtonSize:function(){
        $(".set-button-size select").on("change",function(){
            $("#"+id_).find("button").css("font-size",$(this).val() + "px");
            buttonEdit.main();
        })
    },
    // 按钮字体颜色
    BackSizeColor:function(){
        $(document).on("click",".set-button-SizeColor .color-row span",function(){
            $("#"+id_).find("button").css('color',$(this).attr("data-color"));
            buttonEdit.main();
        })
    }
};
buttonEdit.ButtonText();// 按钮文字
buttonEdit.BackColor();// 按钮背景颜色和边框线颜色
buttonEdit.ButtonSize();// 按钮文字
buttonEdit.BackSizeColor();// 按钮字体颜色

// 图片编辑
let priceEdit = {
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
        const self = this;
        $(".set-price-border-style select").on("change",function(){
            // dotted	定义点状边框。在大多数浏览器中呈现为实线。       dashed	定义虚线。在大多数浏览器中呈现为实线。     solid	定义实线。
            const style = self.borderStyleJud($(this).val());
            $("#"+id_).find(".image-class").css("border-style",style);
            priceEdit.main();
        })
    },
    // 边框 颜色
    borderColor:function(){
        $(document).on("click",".set-price-color .color-row span",function(){
            $("#"+id_).find(".image-class").css("border-color",$(this).attr("data-color"));
            priceEdit.main();
        });
    },
    // 边框 宽度
    borderWidth:function(){
        const self = this;
        $(".set-price-border select").on("change",function(){
            const color = $(".set-price-color .palette-color-picker-button").css("background-color") + " ";
            const style = self.borderStyleJud($(".set-price-border-style select").val()) + " ";
            const width = $(this).val() + "px ";
            $("#"+id_).find(".image-class").css("border",width + style + color);
            priceEdit.main();
        })
    },
    // 边框 圆角
    borderRadius:function(){
        $(".set-price-radius input").on("change",function(){
            $("#"+id_).find(".image-class").css("border-radius",$(this).val() + "px");
            priceEdit.main();
        })
    },
    borderStyleJud:function(data){
        let style = null;
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

// BI左上角，一排功能项
let operating = {
    // 保存
    save:function(){
        // 先更新数据
        let isIndex = null;
        if($(".top-bar .set-index-box input").prop("checked")){
            isIndex = 1;
        }else{
            isIndex = 0
        }
        let data = {
            "isIndex":isIndex,
            "controls":save_arr,
            "customData":screen_data,
            // "jsFile":jsFile,
            // "cssFile":cssFile,
        };
        $.ajax({
            type:"PUT",
            url:$url1 + "/bi/report/v1/page.json?projectId="+ projectId  +"&pageId="+ dirId +"&isIndex="+ isIndex +"&versionId="+ versionId +"",
            headers:{
                username:username,
                userId:userId
            },
            data:JSON.stringify(data),
            dataType:"json",
            contentType: 'application/json',
            success:function(data){
                if(data.code === 0){
                    layer.msg("保存成功！");
                }
            },
            error:function(res){
                // console.log(res);
            }
        })
    },
    // 删除
    clickDelete:function(id){
        let deleted = true;
        if(id === "" || id.length <= 0){
            layer.msg("请点击需删除的控件！");
            return
        }
        // 删除保存中的数据，并删除cid为空的数据，以防出现bug
        $.each(save_arr,function(index,item){
            if(deleted && (item.cid === id)){
                save_arr.splice(index,1);
                deleted = false;
            }
        });

        // 删除该ID的元素
        $("#" + id).remove();
    },
    // 复制
    copy:function(id){
        $.each(save_arr,function(index,item){
            if(item.cid + "" === id){
                // 如果cid相同，则将item数据复制给copy_data
                copy_data = JSON.parse(JSON.stringify(item));
                const dataType = item.customData.dataType;
                if(dataType === "text"|| dataType === "button" || dataType === "image" ){
                    copy_data.customData.html = $("#"+id).find(".resize-panel").siblings().prop("outerHTML");
                }
            }
        });
    },
    // 粘贴
    paste:function(){
        // 判断是否为空对象！
        if(!(JSON.stringify(copy_data) === "{}")){
            const clearY = $(".clearY");
            const editBox = $(".edit-libs-box");

            const customData = copy_data.customData;
            const dataType = customData.dataType;
            const id = dataType + uuid(8,16);
            const left = event.pageX - parseFloat(clearY.width()) - parseFloat(clearY.css("padding-left")) - parseFloat($(".edit-content").css("margin-left"));
            const top = event.pageY - parseFloat($(".clearX").height()) - parseFloat(editBox.css("margin-top"));

            let z = '';
            // 如果是文本和图片，则复制内容不同
            if(dataType === "text" || dataType === "button" || dataType === "image"){
                z = customData.html;
            }else if(dataType === "table" || dataType === "chart"){
                // 绘制图形
                const chart_date = {
                    'cid':copy_data.cid,
                    "type":copy_data.type,
                    "queryJson":copy_data.queryJson,
                };
                DataIndexes.inAjax(chart_date,id);
            }

            const html = '<div  id="'+ id +'" type="'+ copy_data.type +'" data-type="'+ dataType +'" style="height:'+ copy_data.style.height +'px;width:'+ copy_data.style.width +'px;top:'+ top +'px;left:'+ left +'px;z-index:'+ copy_data.displayLevel +'" class="resize-item">'+ z +'</div>';
            editBox.append(html);


            // 如果是表格和图形，需要生成一个新的索引数据添加到数组中
            if(copy_data.queryJson && dataType === "chart" || dataType === "table" ){
                const z = JSON.parse(JSON.stringify(copy_data));
                z.cid = id;
                save_arr.push(z);
            }
            refresh.storage(dataType,id); // 判断不同的TYPE执行不同的采取函数
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
    },
    // 刷新
    refresh:function(){
        location.reload(); // 刷新页面
    },
    // 预览
    preview:function(){
        // 先隐藏
        // $(".type-bar,.drag-bar").hide();
        // $(".exit-preview").show()
        //     .siblings().hide();
        // // $(".chart-main-box").css("right","110px");
        //
        // // 删除边框,删除红线
        // $(".resize-item").css("border","none")
        //     .find(".resize-panel").remove()
        // $(".resize-item").find(".content-text").removeClass("edit");
        const url  = "?username="+ username +"&userId="+ userId +"&pageId="+ dirId +"&projectId="+ projectId +"&versionId="+ versionId +"";
        window.open("../html/preview.html" + url);

    },
    // 退出预览
    // exitPreview:function(){
    //     $(".type-bar,.drag-bar").show();
    //     $(".exit-preview").hide()
    //         .siblings().show();
    //     // $(".chart-main-box").css("right","404px");
    //
    //     $(".resize-item").css("border","1px solid red").find(".content-text").addClass("edit");
    //     $.each($(".resize-item"),function(index,val){
    //
    //         id_ = $(val).attr("id");
    //
    //         new ZResize({
    //             stage: '.edit-libs-box', //舞台
    //             itemClass: 'resize-item'//可缩放的类名
    //         });
    //     });
    //     clear(id_);
    // },
    // 移入提示
    moveLayer:function(){
        $(".top-bar>img").on("mouseenter",function(){
            layer.tips($(this).attr('data-tip'), this,{
                tips: 3
            });
        });
    },
};
operating.moveLayer(); // 移入提示


// 获取页面，编辑成编辑页面
let obtain = {
    // 根据pageId获取数据
    request:function(){
        $.ajax({
            type:"get",
            url:$url1 + "/bi/report/v1/page.json",
            headers:{
                username:username,
                userId:userId
            },
            data:{
                "pageId":dirId,
                "projectId":projectId,
                "versionId":versionId,
            },
            dataType:"json",
            success:function(data){
                if(data.code === 0){
                    if(surroundings === "dev"){
                        if(data.data.htmlJson){
                            obtain.reduction(data.data);
                        }
                        if(data.data.index){
                            $(".top-bar .set-index-box input").attr({"checked":"checked","disabled":"disabled"}).siblings("img").attr("src","images/icon_checked.png");
                        }else{
                            $(".top-bar .set-index-box input").removeAttr("checked").siblings("img").attr("src","images/xuankuang.png");
                        }
                    }else if(surroundings === "test" || surroundings === "prod"){
                        if(data.data.htmlJson){
                            obtain.generate(data.data);
                        }
                    }

                }
            },
            error:function(res){
                // console.log(res);
            }
        })
    },
    // 为测试环境
    generate:function(data){
        let html = '';
        $.each(data.htmlJson.controls,function(index,val){
            let text = '';            // html
            const dataType = val.customData.dataType  // 类型
                  ,style =  val.style; // 宽、高
            // 判断图形、表格、文本、图片、按钮
            // 如果是文本和图片，则复制内容不同
            if(dataType === "text" || dataType === "button" || dataType === "image"){
                text = val.customData.controls.html;
            }else if(dataType === "table" || dataType === "chart"){
                // 将数据存入检索数据中
                const chart_date = {
                    'cid':val.cid,
                    "type":val.type,
                    "queryJson":val.queryJson,
                };
                DataIndexes.inAjax(chart_date,val.cid);
            }
            html += '<div linkPageId = "'+ val.linkPageId +'" id="'+ val.cid +'" type="'+ val.type +'" data-type="'+ val.customData.dataType +'" style="height:'+ style.height +'px;width:'+ style.width +'px;top:'+ style.top +'px;left:'+ style.left +'px;z-index:'+ val.displayLevel +'" class="resize-item">'+ text +'</div>';
        });
        $(".generateEditBi").empty().append(html);
    },
    // 为开发环境
    reduction:function(data){
        if(data.htmlJson.controls){
            // 赋值数据
            save_arr = data.htmlJson.controls;
            screen_data = data.htmlJson.customData;
            // 遍历数据,生成图形
            let html = '';
            $.each(data.htmlJson.controls,function(index,val){
                // 判断图形、表格、文本、图片、按钮
                let text = '';
                // 如果是文本和图片，则复制内容不同
                const style =  val.style;
                const controls = val.customData.controls;
                const dataType = val.customData.dataType;

                id_ = val.cid; // 拖拽必须修改id_
                if(dataType === "text" || dataType === "button" || dataType === "image"){
                    if(controls){
                        text = controls.html;
                    }else if(dataType === "text"){
                        text = '<div class="content-text edit"><div contenteditable="false" spellcheck="true" data-medium-editor-element="true" role="textbox" aria-multiline="true" data-placeholder="请输入文本" data-medium-focused = "true"></div></div>';
                    }else if(dataType === "button"){
                        text = '<div class="content-button"><button></button></div>';
                    }
                }else if(dataType === "table" || dataType === "chart" && val.queryJson){
                    // 将数据存入检索数据中
                    const chart_date = {
                        'cid':val.cid,
                        "type":val.type,
                        "queryJson":val.queryJson,
                    };
                    DataIndexes.inAjax(chart_date,val.cid);
                    index_arr.push(chart_date);
                }
                number++; // ID不重复！
                eleLevel++;
                html = '<div linkPageId = "'+ val.linkPageId +'"  id="'+ val.cid +'" type="'+ val.type +'" data-type="'+ val.customData.dataType +'" style="height:'+ style.height +'px;width:'+ style.width +'px;top:'+ style.top +'px;left:'+ style.left +'px;z-index:'+ val.displayLevel +'" class="resize-item">'+ text +'</div>';

                $(".edit-libs-box").append(html);
            });
            // 拖拽初始化！
            new ZResize({
                stage: '.edit-libs-box', //舞台
                itemClass: 'resize-item'//可缩放的类名
            });

            // clear(id_);
        }
    },
};
obtain.request();  // 根据pageId获取数据

// 文本筛选和列表筛选
let project = {
    "list":null,
    "fieldId": null,
    "number":null,
    "cid":null,
    "listFilter":{},
    "textFilter":{},
    "listFilterB":[],
    "allBur":false,
    TFilter:function(field, name,fieldId,number,cid){
        const self = this;
        var listFilter = null;
        this.fieldId = fieldId;    // 保存fieldid作为索引
        this.number = number;
        this.cid = cid;

        // 判断之前是否有筛选数据
        // 先清除数据;
        $(".f-select-box2").empty();
        this.textAddTo();
        $(".f-addbtn-box-auto ul").empty();
        $(".f-filter-result li em").text("");
        $(".f-filter-result li:first em").text(name);

        $.each(screen_data,function(index,val){
            if(fieldId === val.fieldId && val.number === number && val.cid === cid){
                listFilter = timeSng.reJson(val.listFilter);
                this.listFilter = timeSng.reJson(val.listFilter);
                this.textFilter = timeSng.reJson(val.textFilter);

                if(val.listFilter.operator === "NOT IN"){
                    project.chear($(".f-select-methods li").eq(1));
                }else if(val.listFilter.operator === "all"){
                    project.chear($(".f-select-methods li").eq(2));
                }else{
                    project.chear($(".f-select-methods li").eq(0));
                }

                let html = '';
                $.each(val.listFilterB,function(x,y){
                    let c = '';
                    if(val.listFilter.operator === "NOT IN"){
                        c = 'style="text-decoration: line-through;"'
                    }
                    html = '<li><p '+ c +'>'+ y +'</p><span onclick="project.textDelete(this)">删除</span></li>';
                });
                $(".f-addbtn-box-auto ul").empty().append(html);

                let htmlA = '';
                let z1 = '';
                if(val.textFilter.items){
                    $.each(val.textFilter.items,function(x,y){
                        var a1,a2,a3,a4,a5;
                        switch(y.operator){
                            case "CONTAIN":a1="selected='true'";
                                break;
                            case "START WITH":a2="selected='true'";
                                break;
                            case "END WITH":a3="selected='true'";
                                break;
                            case "NOT CONTAIN":a4="selected='true'";
                                break;
                            case "EQUAL":a5="selected='true'";
                                break;
                        }
                        htmlA += `<div>
                        <div class="f-subselect">
                            <select onchange="project.textData()" name="" >
                                <option ${ a1 } value="CONTAIN">包含</option>
                                <option ${ a2 } value="START WITH">开头是</option>
                                <option ${ a3 } value="END WITH">结尾是</option>
                                <option ${ a4 } value="NOT CONTAIN">不包含</option>
                                <option ${ a5 } value="EQUAL">等于</option>
                            </select>
                            <i class="fa fa-caret-down"></i>
                        </div>
                        <input onchange="project.textData()" type="text" class="f-subselect-val" value="${ y.value }" />
                        <img onclick="project.textDelete(this)" src="images/delete_01.png" alt="" class="f-del-btn"/>
                    </div>`;
                        z1 += y.operator + " " + y.value + " ";
                    });
                }
                const filter = $(".f-filter-result li");
                filter.eq(2).find("em").text(z1);
                $(".f-select-box2").empty().append(htmlA);

                let z2 = '';
                if(self.listFilter.value){
                    $.each(self.listFilter.value,function(x,y){
                        z2 += self.listFilter.operator +  y + ' ';
                    })
                }
                filter.eq(1).find("em").text(z2);


            }
        });

        $.ajax({
            type:"get",
            url:$url1 + "/bi/report/v1/data/list.json",
            headers:{
                username:username,
                userId:userId
            },
            dataType:'json',
            data:{
                "biSetId":$(".data-source-box option:selected").attr("bisetid"),
                "field":field,
                "projectId":projectId,
                "versionId":versionId,
            },
            success:function(data){
                if(data.code === 0){
                    project.list = data.data;   // 存储数据
                    let html = '';
                    const l = $(".f-select-cont ul").empty();
                    $.each(data.data,function(index,val){
                        let a = "xuankuang"
                            ,b = ""
                            ,c = '';
                        // 重置数据
                        if(listFilter){
                            if(listFilter.values){
                                $.each(listFilter.values,function(x,y){
                                    if(val === y){
                                        a = 'icon_checked';
                                        b = "checked='checked'";
                                        if(listFilter.operator === "NOT IN"){
                                            c = 'style="text-decoration: line-through;"';
                                        }
                                    }
                                });
                            }
                            if(listFilter.operator === "all"){
                                a = 'icon_checked';
                                b = "checked = 'checked'";
                            }
                        }
                        html += `<li>
                                    <img src="images/${ a }.png" alt="">
                                    <input ${ b } type="checkbox">
                                    <span ${ c } >${ val }</span>
                                </li>`;
                    });
                    l.append(html);
                }
            },
            error:function(res){
            }
        });

        // 初始化
        $("#filter-attr").show();
        project.pjEvent();   // 选择城市事件
    },
    // 事件
    pjEvent:function(){
        //项目（过滤)属性
        $(".f-name").on("click","li",function(){
            const $idx = $(this).index();
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
            $(".f-filter-result li").eq($idx+1).addClass("active")
                .siblings().removeClass("active");
            $(this).addClass("active").siblings().removeClass("active");
            $(".f-box"+($idx+1)).show().siblings().hide();
        });

        $(document).on("click",".f-select-cont li",function(){
            if($(this).find("input").prop("checked")){
                project.check($(this),0,0);
            }else{
                project.check($(this),1,0);
            }
            if($(".fl-automatic input").attr("checked")){
                project.horizontalLine(true);
            }else{
                project.horizontalLine(false);
            }
            project.listData();
        });
        $(".f-category li").on("click",function(){
            $(this).parent().find("input").removeAttr('checked')
                .siblings("img").attr("src","images/icon_circle.png");
            project.check($(this),0,1);
            if($(this).index() === 0){
                $(".f-select-cont").show().find("li").show();// 列表的列表
                $(".f-addbtn-box-1").hide();// 自动的添加按钮
                $(".f-addbtn-box-auto").hide();// 自动的列表
                $(".f-select-methods li").show();
            }else{
                $(".f-select-cont").hide();
                $(".f-addbtn-box-1").show();
                $(".f-addbtn-box-auto").show();
                $(".fl-automatic").show().siblings().hide();
            }
            $(".f-search-box input").val("");
        })
    },
    // 列表筛选 -- 列表 -- 勾选
    check:function(ele,type,inType){
        let imgA = ""
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
    // 列表筛选 -- 列表 -- 包含
    contain:function(_this){
        project.chear(_this);
        if(this.allBur){
            project.check($(".f-select-cont li"),1,0);
            this.allBur = false;
        }
        this.horizontalLine(false);  // 无横线
        this.disabled(false);  // 是否禁止点击
        this.listData();
    },
    // 列表筛选 -- 列表 -- 排除
    filter:function(_this){
        project.chear(_this);
        if(this.allBur){
            project.check($(".f-select-cont li"),1,0);
            this.allBur = false;
        }
        this.horizontalLine(true);  // 有横线
        this.disabled(false);  // 是否禁止点击
        this.listData();
    },
    // 列表筛选 -- 列表 -- 使用全部
    all:function(_this){
        project.chear(_this);
        project.check($(".f-select-cont li"),0,0);
        this.horizontalLine(false);  // 无横线
        this.disabled(true);  // 是否禁止点击

        this.listData();
        this.allBur = true;
    },
    // 列表筛选 -- 列表 -- 搜索
    search:function(_this){
        const text = $(_this).val();
        if(text.length > 0 && text !== " "){
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
    // 列表筛选 -- 自动 -- 添加
    textAdd:function(){
        const text = $(".f-search-box input").val();
        if(text.length >0 && text !== " "){
            let html = '<li><p>'+ text +'</p><span onclick="project.textDelete(this)">删除</span></li>';
            if($(".fl-automatic input").attr("checked")){
                html = '<li><p style="text-decoration: line-through;">'+ text +'</p><span onclick="project.textDelete(this)">删除</span></li>';
            }
            $(".f-addbtn-box-auto ul").append(html);
            $(".f-search-box input").val("");
        }
        this.listData();
    },
    // 列表筛选 -- 添加 -- 删除
    textDelete:function(_this){
        $(_this).parent().remove();
        this.listData();
        this.textData();
    },
    // 列表筛选 -- 保存数据
    listData:function(){
        project.listFilter.values = [];
        project.listFilterB = [];
        let text = "";
        var index = $(".f-select-methods li input[checked=checked]").parent().index();
        if(index === 0 || index === 1){
            let r = "",n = '';
            if(index === 0){
                r = "包含";
                project.listFilter.operator = "IN"
            }else{
                r = "排除";
                project.listFilter.operator = "NOT IN";
            }
            $.each($(".f-select-cont li"),function(x,y){
                if($(y).find("input").prop("checked")){
                    n += $(y).find("span").text();
                    project.listFilter.values.push($(y).find("span").text());  // 保存数据
                }
            });
            $.each($(".f-addbtn-box-auto li"),function(index,val){
                n += $(val).find("p").text();
                project.listFilter.values.push($(val).find("p").text());  // 保存数据
                project.listFilterB.push($(val).find("p").text());
            });
            text = r + " " + n;
        }else{
            text = "使用全部";
            project.listFilter.operator = "all";
            project.listFilter.values = [];
        }
        $(".f-filter-result li").eq(1).find("em").empty().text(text);
    },
    // 文本筛选 -- 添加
    textAddTo:function(){
        const html = `<div>
                        <div class="f-subselect">
                            <select onchange="project.textData()" name="">
                                <option value="CONTAIN">包含</option>
                                <option value="START WITH">开头是</option>
                                <option value="END WITH">结尾是</option>
                                <option value="NOT CONTAIN">不包含</option>
                                <option value="EQUAL">等于</option>
                            </select>
                            <i class="fa fa-caret-down"></i>
                        </div>
                        <input onchange="project.textData()" type="text" class="f-subselect-val" />
                        <img onclick="project.textDelete(this)" src="images/delete_01.png" alt="" class="f-del-btn"/>
                    </div>`;
        $(".f-select-box2").append(html);
    },
    // 文本筛选 -- 修改（并保存）
    textData:function(){
        let x = "";
        project.textFilter.items = [];
        $.each($(".f-select-box2>div"),function(index,val){
            const text = $(val).find("input").val();
            const operator = $(val).find("select").val();
            if(text.length > 0 && text !== ""){
                x +=  operator + " " + text + " ";
                const  p = {
                    "value":text,
                    "operator":operator
                };
                project.textFilter.items.push(p);
            }
        });
        project.textFilter.andOr = $(".f-select-box1 select").val();
        $(".f-filter-result li").eq(2).find("em").empty().text(x);
    },
    // 横线变化
    horizontalLine:function(bur){
        let textDecoration = bur?"line-through":"none";
        if(bur){
            $(".f-select-cont li input:checked").siblings("span").css("text-decoration",textDecoration);
            $(".f-addbtn-box-auto li p").css("text-decoration",textDecoration);
        }else{
            $(".f-select-cont li input").siblings("span").css("text-decoration",textDecoration);
            $(".f-addbtn-box-auto li p").css("text-decoration",textDecoration);
        }
    },
    // 是否禁止
    disabled:function(bur){
        if(bur){
            $(".f-select-cont input").attr("disabled","disabled").siblings("span").css("color","#999");
        }else{
            $(".f-select-cont input").removeAttr("disabled").siblings("span").css("color","#000");
        }
    },
    // 勾选变化
    chear:function(_this){
        $(".f-select-methods").find("input").removeAttr('checked')
            .siblings("img").attr("src","images/icon_circle.png");
        project.check($(_this),0,1);
    },
    // 保存
    saveData:function(){
        const self = this;
        const data = {
            "fieldId":timeSng.reJson(this.fieldId),
            "number":timeSng.reJson(this.number),
            "cid":timeSng.reJson(this.cid),
            "listFilter":timeSng.reJson(this.listFilter),
            "listFilterB":timeSng.reJson(this.listFilterB),
            "textFilter":timeSng.reJson(this.textFilter),
        };
        timeSng.only(timeSng.reJson(data));  // 唯一性
        self.close(); // 关闭
    },
    // 关闭弹出框
    close:function(){
        $("#filter-attr").hide();
    },
};

// 数据筛选(求和(值))range 初始化
let swRag = {
    "min":$(".s-range-val .min"),
    "max":$(".s-range-val .max"),
    "minData":null,
    "maxData":null,
    "fieldId":null,
    "number":null,
    "cid":null,
    // 根据传递的元素赋值
    ass:function(field,fieldId,number,cid){
        this.fieldId = fieldId;
        this.number = number;
        this.cid = cid;

        // 先重置，在按照数据添加进去
        swRag.min.val("");
        swRag.max.val("");
        swRag.selec(($(".s-data-val ul>li").eq(0).find("input")));

        $.each(screen_data,function(index,val){
            if(val.fieldId === fieldId && val.number === number && val.cid === cid){
                swRag.min.val(val.numericFilter.range.min);
                swRag.max.val(val.numericFilter.range.max);
                swRag.selec(($(".s-data-val ul>li").eq(val.select).find("input")));
            }
        });
        const min = swRag.min.val();
        const max = swRag.max.val();

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

        // 初始化
        $(".data-filter-mod").show();       // 显示数字筛选框
        $(".s-more-btn").show();
        $(".s-slider-box").hide();

        swRag.rangeAjax(field);
        swRag.ele();
        swRag.switchRange();
    },
    // 取得范围
    rangeAjax:function(field){
        let dimensions = [];  // 维度字段名
        $.each($(".x-pills li"),function(index,val){
            if($(val).attr("dim_mea") === "0"){
                dimensions.push($(val).attr("fieldname"));
            }
        });
        $.ajax({
            type:"get",
            url:$url1 + "/bi/report/v1/data/range.json",
            headers:{
                username:username,
                userId:userId
            },
            data:{
                "biSetId":$(".data-source-box option:selected").attr("bisetid"),
                "field":field,
                "aggregation":"SUM",           // 默认数据求和
                "dimensions":dimensions,
                "projectId":projectId,
                "versionId":versionId,
            },
            traditional: true,
            dataType:"json",
            success:function(data){
                if(data.code === 0){
                    swRag.minData = data.data.min;
                    swRag.maxData = data.data.max;
                }
            },
            error:function(res){
            }
        });
    },
    // 事件
    ele:function(){
        $(".s-data-val ul>li").on("click",function(){
            const $s = $(this).find("input");
            swRag.selec(($s));

            // 重置加载范围
            $(".s-slider-box").hide();
            $(".s-more-btn").show();
            // 清除数据
            swRag.min.val("");swRag.max.val("");
        });
        //点击加载更多,显示范围
        $(".s-more-btn").click(function(){
            const index = $(".s-data-val ul>li").find("input[name]:checked").parent().index();
            switch(index){
                case 0 :
                    swRag.range(index);
                    break;
                case 1:
                    swRag.range(index);
                    break;
                case 2:
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
        const $idx = $s.parent().index();
        $s.prev("img").attr("src","images/icon_circle_on.png");
        $s.parent("li").siblings().find("img").attr("src","images/icon_circle.png");
        swRag.switchRange($idx);
    },
    // 保存
    save:function(){
        const self = this;
        const index = $(".s-data-val ul>li").find("input[name]:checked").parent().index();
        if(!swRag.judgment(index)){	return	}

        // 根据记录的ID，作为判断
        const data = {
            "fieldId":timeSng.reJson(this.fieldId),
            "number":timeSng.reJson(this.number),
            "cid":timeSng.reJson(this.cid),
            "select":$(".s-data-val ul>li input:checked").parent().index(),
            "numericFilter":{
                "aggregation": "SUM",
                "range":{
                    "min":swRag.min.val(),
                    "max":swRag.max.val()
                }
            }
        };
        timeSng.only(timeSng.reJson(data));  // 唯一性
        self.cancel();
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
        const slider = $( "#slider-range" );
        const minD = swRag.minData;
        const maxD = swRag.maxData;
        const minA = swRag.min.val().length>0?parseInt(swRag.min.val()):minD;
        const maxA = swRag.max.val().length>0?parseInt(swRag.max.val()):maxD;
        switch(type){
            case 0:
                slider.slider({
                    range: true,
                    min: minD,
                    max: maxD,
                    values: [ minA, maxA ],
                    slide: function( event, ui ) {
                        swRag.min.val(ui.values[ 0 ]);
                        swRag.max.val(ui.values[ 1 ]);
                    }
                });
                break;
            case 1:
                slider.slider({
                    range: "min",
                    value: minA,
                    min: minD,
                    max: maxD ,
                    slide: function( event, ui ) {
                        swRag.min.val(ui.value );
                    }
                });
                break;
            case 2:
                slider.slider({
                    range: "max",
                    value: maxA,
                    min: minD,
                    max: maxD,
                    slide: function( event, ui ) {
                        swRag.max.val(ui.value );
                    }
                });
                break;
        }
    },
    // 取消
    cancel:function(){
        $(".data-filter-mod").hide();
    },
};

// 时间筛选器
let timeSng = {
    "fieldId":null,
    "number":null,
    "cid":null,
    "dateFilter":{},
    // 引用
    quotes:function(name,fieldId,number,cid){
        const self = this;
        self.fieldId = fieldId;
        self.cid = cid;
        self.number = number;
        $(".data-filter-time .f-filter-result li:first em").text(name);

        // 初始化清空
        $("#start").val("");
        $("#end").val("");
        $("#ildTodayEle .checkbox").removeAttr("checked").siblings("img").attr("src","images/xuankuang.png");  // 清除

        $.each(screen_data,function(index,val){
            if(val.fieldId === self.fieldId && val.number === self.number && val.cid === cid) {
                if(val.dateFilter.relative){
                    $(".time-select input:first").attr("checked","checked").siblings("img").attr("src","images/icon_circle_on.png");  // 选中
                    $(".time-select input:last-child").removeAttr("checked").siblings("img").attr("src","images/icon_circle.png");  // 清除
                    // 为相对时间
                    // 是否选择今天
                    if(val.dateFilter.relative.containToday){
                        $("#ildTodayEle").attr("checked","checked").siblings("img").attr("src","images/icon_checked.png");  // 选中
                    }
                    // 下拉框
                    $.each($("#time-select option"),function(x,y){
                        if($(y).val() === val.dateFilter.relative.rType){
                            $(y).attr("selected","selected");
                            if($(y).attr("data-days") === val.dateFilter.relative.days){
                                $(y).attr("selected","selected");
                            }
                        }
                    });
                }else if(val.dateFilter.absolute){
                    $(".time-select input:last-child").attr("checked","checked").siblings("img").attr("src","images/icon_circle_on.png");  // 选中
                    $(".time-select input:first").removeAttr("checked").siblings("img").attr("src","images/icon_circle.png");  // 清除

                    $("#start").val(val.dateFilter.absolute.firstDay);
                    $("#end").val(val.dateFilter.absolute.lastDay);
                }
            }
        });


        // 初始化
        $(".data-filter-time").show();
        timeSng.selectRadio(); // 事件和时间插件
        timeSng.timeData();
    },
    // 相对时间 和 日期范围 单选按钮
    selectRadio:function(){
        $(".data-filter-time .time-select").on("click",function(){
            $(this).find("input").attr("checked","checked").siblings("img").attr("src","images/icon_circle_on.png");  // 选中
            $(this).parent().siblings().find(".time-select input").removeAttr("checked").siblings("img").attr("src","images/icon_circle.png");  // 清除
        });

        $.datepicker.regional['zh-CN'] = {

            clearText: '清除',

            clearStatus: '清除已选日期',

            closeText: '关闭',

            closeStatus: '不改变当前选择',

            prevText: '<上月',

            prevStatus: '显示上月',

            prevBigText: '<<',

            prevBigStatus: '显示上一年',

            nextText: '下月>',

            nextStatus: '显示下月',

            nextBigText: '>>',

            nextBigStatus: '显示下一年',

            currentText: '今天',

            currentStatus: '显示本月',

            monthNames: ['一月','二月','三月','四月','五月','六月', '七月','八月','九月','十月','十一月','十二月'],

            monthNamesShort: ['一','二','三','四','五','六', '七','八','九','十','十一','十二'],

            monthStatus: '选择月份',

            yearStatus: '选择年份',

            weekHeader: '周',

            weekStatus: '年内周次',

            dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],

            dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],

            dayNamesMin: ['日','一','二','三','四','五','六'],

            dayStatus: '设置 DD 为一周起始',

            dateStatus: '选择 m月 d日, DD',

            dateFormat: 'yy-mm-dd',

            firstDay: 1,

            initStatus: '请选择日期',

            isRTL: false};
        $.datepicker.setDefaults($.datepicker.regional['zh-CN']);

        // 时间插件初始化
        $( "#start" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1,
            changeYear:true,
            yearRange:"1950:2050",
            onClose: function( selectedDate ) {
                $( "#end" ).datepicker( "option", "minDate", selectedDate );
                timeSng.timeData();
            }
        });

        $( "#end" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            changeYear:true,
            numberOfMonths: 1,
            yearRange:"1950:2050",
            onClose: function( selectedDate ) {
                $( "#start" ).datepicker( "option", "maxDate", selectedDate );
                timeSng.timeData();
            }
        });
        this.timeData();
    },
    // 包含今天
    IldToday:function(_this){
        // 必选先有选中相对时间
        if($(".data-filter-time .time-select:first input").prop("checked")){
            // 判断是否选中
            if($(_this).find("input").prop("checked")){
                // 选中状态
                $(_this).find("input").removeAttr("checked").siblings("img").attr("src","images/xuankuang.png");  // 清除
            }else{
                $(_this).find("input").attr("checked","checked").siblings("img").attr("src","images/icon_checked.png");  // 选中
            }
        }
        this.timeData();
    },
    // 日期范围 -- 删除图标
    timeDelete:function(_this){
        $(_this).siblings("input").val("");  // 清除时间值
        this.timeData();
    },
    // 修改，则保存数据
    timeData:function(){
        // 判断是相对时间，还是日期范围
        if($(".time-select input:first").prop("checked")){
            // 相对时间
            const rType = $("#time-select").val();
            const timeOption = $("#time-select option:selected");
            const ildTodayInput = $("#ildTodayEle .checkbox");
            let days = null;
            const text = ildTodayInput.prop("checked")?"包含今天":"";
            if(rType + "" === "10"){
                days = timeOption.attr('data-days');
            }
            this.dateFilter.relative = {
                "rType":rType,
                "containToday":ildTodayInput.prop("checked"),
                "days":days,
            };
            $(".data-filter-time .f-filter-result li").eq(1).find("em").text(timeOption.text() + " " + text);
            // 删除日期范围数值
            this.dateFilter.absolute = null;
        }else{
            // 日期范围
            const firstDay = $("#start").val();
            const lastDay = $("#end").val();
            this.dateFilter.absolute = {
                "firstDay":firstDay,
                "lastDay":lastDay,
            };
            $(".data-filter-time .f-filter-result li").eq(1).find("em").text(firstDay + " -- " + lastDay);
            // 删除相对时间
            this.dateFilter.relative = null;
        }
    },
    // 保存按钮
    save:function(){
        if(this.dateFilter.absolute){
            if(!(this.dateFilter.absolute.firstDay || this.dateFilter.absolute.lastDay)){
                layer.msg("请选择时间！");
                return;
            }
        }
       // 根据记录的ID，作为判断
        const data = {
            "fieldId":timeSng.reJson(this.fieldId),
            "number":timeSng.reJson(this.number),
            "cid":timeSng.reJson(this.cid),
            "dateFilter":timeSng.reJson(this.dateFilter),
        };
        timeSng.only(timeSng.reJson(data));
        timeSng.clone();  // 关闭
    },
    // 深拷贝
    reJson:function(data){
        return JSON.parse(JSON.stringify(data));
    },
    // 唯一性
    only:function(data){
        var bur = true;
        $.each(screen_data,function(index,val){
            if(val.fieldId === data.fieldId && val.number === data.number && val.cid === data.cid) {
                screen_data.splice(index,1,data);
                bur = false;
            }
        });
        if(bur){
            screen_data.push(data);
        }
        return screen_data;
    },
    // 关闭弹出框
    clone:function(){
        $(".data-filter-time").hide();
    },

};
timeSng.selectRadio(); // 事件和时间插件



// 图片
/*  上传图片大小格式验证  */
function imageUpload(_this){
    let fileSize = 0;
    const isIE = /msie/i.test(navigator.userAgent) && !window.opera;
    const name=_this.value;
    const postfix = name.substring(name.lastIndexOf(".") + 1).toLowerCase();
    if(isIE && !_this.files) {
        const filePath = _this.value;
        const fileSystem = new ActiveXObject("Scripting.FileSystemObject");
        const file = fileSystem.GetFile(filePath);
        fileSize = file.Size;
    } else {
        fileSize = _this.files[0].size;
    }
    const size = fileSize / 1024;
    if(size > 5000) {
        layer.msg('附件不能大于5M！');
        $(_this).attr('src','');
        return false;
    }else{
        if(postfix!=='jpg' && postfix!=='jpeg'&& postfix!=='png'&& postfix!=='bmp'){
            layer.msg('不支持的图片格式');
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
    const $file = $(_this);
    const fileObj = $file[0];
    // var windowURL = window.URL || window.webkitURL;
    let dataURL;

    if(fileObj && fileObj.files && fileObj.files[0]) {

        const form = new FormData($("#fileForm")[0]);
        const cahrt_type = $(_this).siblings("img").attr("data-type");    // 类型
        const editID = cahrt_type + uuid(8,16);

        form.append("file",fileObj.files[0]);
        form.append("pageId",dirId);  // 页面ID
        form.append("cid",editID);  // 控件ID
        form.append("projectId",projectId);
        form.append("versionId",versionId);

        // 上传图片
        $.ajax({
            type:"post",
            url:$url1 + "/bi/report/v1/controlImage.json",
            headers:{
                username:username,
                userId:userId
            },
            data:form,
            contentType: false,
            processData: false,
            success:function(data){
                // dataURL = windowURL.createObjectURL(fileObj.files[0]);
                dataURL = $url1 + data.data.url;
                //读取图片数据
                const reader = new FileReader();
                reader.onload = function (e) {
                    const data = e.target.result;
                    //加载图片获取图片真实宽度和高度
                    const image = new Image();
                    image.onload = function(){
                        // 这部分是显示图片
                        const width = image.width;
                        const height = image.height;
                        const p =  ( width / height ).toFixed(2);   // 宽高比例，小数点后两位
                        const c = $(".edit-libs-box");  // 内容区
                        const cW = parseInt(c.css("width"));  // 内容区宽度
                        const cH = parseInt(c.css("height"));  // 内容区宽度
                        let w = width;  // 元素宽度
                        let h = height;  // 元素高度
                        let left =  (cW - w) / 2; // 距离左边距离
                        let top =   (cH - h) / 2; // 距离顶部边距离


                        if(width >= cW){
                            // 如果图片真实大小大于内容区，则最大宽度为内容区宽度；
                            w = cW;
                            h = cW / p;
                            left = 0;
                            top =   (cH - h) / 2;
                        }
                        // console.log("图片宽度：" + width,"内容区宽度：" + cW,"元素宽度：" + w,"元素高度：" + h,"图片宽度：" + height,"比例：" + p,"距离左边距离：" + left,"距离顶部边距离：" + top);
                        c.append('<div data-ratio="'+ p +'" data-type="'+ cahrt_type +'" type="'+ cahrt_type +'" style=" z-index:'+ number +'; left:'+ left +'px;top:'+ top +'px;width:'+ w +'px;height:'+ h +'px;" id="'+ editID +'" class="resize-item"><div class="image-class"><img src="'+ dataURL +'"></div></div>');

                        id_ = editID;
                        number++;
                        new ZResize({
                            stage: '.edit-libs-box', //舞台
                            itemClass: 'resize-item'//可缩放的类名
                        });

                        // 将图片存入数据库
                        $(_this).val("");   // 清空input的内容

                        refresh.storage(cahrt_type,editID); // 判断不同的TYPE执行不同的采取函数

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
        const imgObj = $img.get(0);
        imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
        imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;
    }
    return true;
}

//生成一个32位的uuid
function uuid(len, radix) {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let uuid = [], i;
    radix = radix || chars.length;

    if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
        // rfc4122, version 4 form
        let r;

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random()*16;
                uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return uuid.join('');
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
    var useDOMCharacterDataModified = false, target;
    if (document.attachEvent && document.addEventListener) {
        document.attachEvent("onselectionchange", function() {
            if (target && target.duplexCallback) {
                target.duplexCallback()
            }
        })
    }
    if ("MutationEvent" in window) {
        var test = document.createElement("div");
        var root = document.body || document.documentElement;
        root.appendChild(test);
        test.addEventListener("DOMCharacterDataModified", function(e) {
            useDOMCharacterDataModified = true
        });
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
            var curValue = element.innerHTML;
            if (curValue !== oldValue) {
                oldValue = curValue;
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
            var oldValue = NaN;
            element.attachEvent("onfocus", function(e) {
                target = element;
            });
            element.attachEvent("onblur", function(e) {
                target = null;
                oldValue = NaN
            });

            element.duplexCallback = cb;
            element.attachEvent("onkeyup", cb)
        }
    }
};