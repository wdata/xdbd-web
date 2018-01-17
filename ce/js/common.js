/*
*  CStyle：表示记录样式和数据
*  title：表示标题属性（样式）
*     align：0表示向左，1表示居中，2表示向右；
*
*  legend：表示图例属性（样式）
*     display：是否显示图例；
*     position：0表示上，1表示右，2表示下，3表示左；
*
*  discreteColor：表示离散颜色（样式）
*  continuousColor：连续颜色（样式）
*
*  drawingArea：绘图区（样式）
*     lnnerColor：内区网格线颜色；
*     lnnerStyle：内区网格线：实现（默认,solid），虚线(dashed)
*     axisColor：轴颜色；
*     fontColor：轴字体颜色，fontSize：轴字体大小，family：轴字体
*     lnnerBack：内区背景颜色，lnnerBorder：内区边框颜色
*
*  background：背景图片（样式）
*     backgroundColor：背景颜色；
*     borderColor：边框颜色，borderStyle：边框样式：实现（默认,solid），虚线(dashed)，点线（dotted），borderWeight：宽度（最大5px）
*     borderRadius：边框圆角
*
*  label：标签（全部属性）
*     align：对齐方式：0 -- 外部，1 -- 内部
*     position：0 - 左上， 1 - 中上， 2 - 右上， 3 - 左中， 4 - 居中， 5 - 右中， 6 - 左下， 7 - 中下， 8 -右下
*     direction：0：横向，1：纵向
*     size：字体dax
*     custom: 0 - 全部显示，1 - 最大、最小值显示，2 - 头尾显示，3 - 不显示
*     color：字体颜色
*     overlapping：是否允许标签重叠
* */

var CStyle = {
    "title":{
        "display":true,
        "name":"并列柱形图",
        "size":16,
        "family":"avenir",
        "align":0,
        "color":"#333",
        "backgroundColor":"transparent"
    },
    "legend":{
        "display":true,
        "fontColor":"#333",
        "size":12,
        "family":"avenir",
        "position":0,
    },
    "discreteColor":["#4780FF","#FF8B1E","#1EE671","#FB4A1E","#5D75CF","#A9E168"],
    "continuousColor":["#B1EA50","#449522"],
    "drawingArea":{
        "lnnerColor":"rgba(230, 230, 230, 0.8)",
        "lnnerStyle":"solid",
        "axisColor":"rgb(163, 163, 163)",
        "fontColor":"#333",
        "fontSize":12,
        "family":"avenir",
        "lnnerBack":"transparent",
        "lnnerBorder":"transparent"
    },
    "background":{
        "backgroundColor":"#fff",
        "borderColor":"rgb(204, 204, 204)",
        "borderStyle":"solid",
        "borderWidth":0,
        "borderRadius":0
    },
    "label":{
        "align":0,
        "position":4,
        "direction":0,
        "size":12,
        "custom":0,
        "color":"#333",
        "overlapping":true,
    },
    "size":.7
};





function chartStyle(id,data){
    this.idName = id;
    this.data = data;
    this.id = $(id);
    this.h2 = this.id.find(".chartTitle");
    this.inform = this.id.find(".inform");
    this.titleData = {
        "display":true,
        "name":"并列柱形图",
        "size":16,
        "family":"avenir",
        "align":0,
        "color":"#333",
        "backgroundColor":"transparent"
    };
    this.legendData = {
        "display":true,
        "fontColor":"#333",
        "size":12,
        "family":"avenir",
        "position":0,
    };
    this.drawingAreaData = {
        "lnnerColor":"rgba(230, 230, 230, 0.8)",
        "lnnerStyle":"solid",
        "axisColor":"rgb(163, 163, 163)",
        "fontColor":"#333",
        "fontSize":12,
        "family":"avenir",
        "lnnerBack":"transparent",
        "lnnerBorder":"transparent"
    };
    this.backgroundData = {
        "backgroundColor":"#fff",
        "borderColor":"rgb(204, 204, 204)",
        "borderStyle":"solid",
        "borderWidth":0,
        "borderRadius":0
    }
}

chartStyle.prototype = {
    constructor : chartStyle,
    title:function(){
        const title = this.data.title;
        if(title.display){
            this.h2.show();  // 显示标题
        }else{
            this.h2.hide();   // 隐藏标题,并且不执行后续代码
            this.id.find(".resize-content").css("top","20px");   // 修改图形定位top为默认20px；
            return false;
        }
        // 根据数据样式修改标题；
        this.h2.text(title.name).css({
            "font-size":this.fontSize(title.size) + "px",
            "color":title.color,
            "font-family":title.family,
            "background-color":title.backgroundColor,
            "text-align":title.align==0?"left":title.align==1?"center":title.align==2?"right":"inherit"
        });
        this.variety();
    },
    background:function(){
        const bk = this.data.background;
        this.inform.css({
            "background-color":bk.backgroundColor,
            "border-color":bk.borderColor,
            "border-style":bk.borderStyle,
            "border-width":bk.borderWidth,
            "border-radius":bk.borderRadius,
        });
        // 如果圆角不为空，则this.h2的上半部分圆角也同等；
        if(bk.borderRadius){
            this.h2.css({
                "border-top-left-radius":bk.borderRadius - 1,
                "border-top-right-radius":bk.borderRadius - 1,
            })
        }
    },
    // 恢复默认设置
    reset:function(){
        var chartData = {};
        chartData.discreteColor = this.data.discreteColor; // 添加原来的图片
        chartData.label = this.data.label; // 添加原来的图片
        chartData.size = this.data.size; // 添加原来的图片
        chartData.continuousColor = this.data.continuousColor;  // 连续颜色

        chartData.title = this.titleData;   // 添加默认标题样式
        chartData.legend = this.legendData;    // 添加默认图例样式
        chartData.drawingArea = this.drawingAreaData;  // 添加默认绘图区样式
        chartData.background = this.backgroundData; // 添加默认背景样式

        this.id.find(".resize-chart").empty();
        this.id.find(".resize-content>.legend").empty();

        var as = new chartStyle(this.idName,chartData);
        as.title();
        as.background();
        manyGroup(this.idName,dataB4,chartData);
    },
    // 当图例或者字体的大小变化时，需要修改图形
    variety:function(){
        const height = parseInt(this.h2.css("height"));
        const chart = this.id.find(".resize-content");
        chart.css("top",height + 20);
    },
    // 当数字为空或者null、undefined时，返回默认16px；
    fontSize:function(size){
        if(size == "null" || size == null || size == undefined || (""+size).length <=0  || size == "undefined"){
            return 16;
        }else{
            return size;
        }
    }
};

// 填充区
function fillArea(svg,CStyle,widthO,height0){
    const dwa = CStyle.drawingArea;      // 绘图区
    /*
    *   填充区,需要在度量和维度轴前面，以防隐藏度量内刻度轴
    *   用以修改背景和边框线
    * */
    const content = svg.append("g")
        .attr("class", "content")
        .attr("transform", "translate(0," + 0 + ")");

    content.append("rect")
        .style("width", widthO - 1)
        .style("height", height0 -1)
        .style("fill",dwa.lnnerBack);
    content.append("path")
        .attr("d","M0,0,H"+ widthO +",V"+ 0 +",H0")
        .style("stroke",dwa.lnnerBorder)
        .style("shape-rendering","crispEdges")
        .style("fill","none");
    content.append("path")
        .attr("d","M0,0,H"+ widthO +",V"+ height0 +",H0")
        .style("stroke",dwa.lnnerBorder)
        .style("shape-rendering","crispEdges")
        .style("fill","none");
}







// 图例
function chartLegend(elemt,data,CStyle){
    /*
    *  先绘制图例，以确定图例的宽高度
    *  如果legend.display == false则不显示
    * */
    if(!(CStyle.legend.display || CStyle.legend.display === "true")){
        return false;
    }

    const total = data.data;
    const sizeAll = total.queryJson.size[0];   // 尺寸和颜色为度量时；
    const colourAll = total.queryJson.colour[0];                       // 全部属性 - 颜色
    const id = elemt + " .legend";   // 根据提供的样式名或者兄弟元素.legend
    const legendsData = total.dimValues[total.queryJson.colour[0].fieldId];

    let color = CStyle.discreteColor;   // 如何颜色是维度则是离散颜色，如果是度量则是连续颜色；
    let colorDomain = total.dimValues[colourAll.fieldId];
    if(colourAll.dimMea && colourAll.dimMea === 1){
        color = CStyle.continuousColor;
        colorDomain = [total.meaMaxMin[colourAll.fieldId].min,total.meaMaxMin[colourAll.fieldId].max];
    }

    // 将数据赋值
    const width = parseInt($(id).parent().css("width")),
        height = parseInt($(id).css("height")),
        size = CStyle.legend.size,         // 字体大小
        sizePx = CStyle.legend.size + "px",
        fontColor = CStyle.legend.fontColor,  // 字体颜色
        family = CStyle.legend.family,  // 字体
        positionSize = parseInt(CStyle.legend.position),    // 位置数字
        htmlSize = parseInt(d3.select("html").style("font-size"));   // 根字体大小

    var position = null,       // 位置
        row = null;              // 横竖
    // 根据数据，修改不同的class样式
    switch(positionSize){
        case 0:position = "top";row = "row";break;
        case 1:position = "right";break;
        case 2:position = "bottom";row = "row";break;
        case 3:position = "left";break;
    }
    // 计算整个元素长度 数据长度 + 颜色块长度 + margin-right
    const length = d3.sum(legendsData.map(function(d){ return (d.length) * size + htmlSize * .5 + htmlSize * .8  }));
    // 根据颜色编译成循环色
    var o = d3.scale.ordinal()
        .domain(colorDomain)
        .range(color);
    // 选择元素,根据位置不同，修改高度，如果是top or bottom 则宽度只显示2层，其他做滚动条
    const ele = d3.select(id)
        .style("height",function(){if(positionSize === 0 || positionSize === 2){return length > width?(size * 2 + htmlSize) + "px":"";}})
        .attr("class",position + " legend");

    /*
    *  图例：1、排列图例；2、颜色拖动图例；
    * */
    /*
     *  1、排列图例；  只有全部属性 颜色 -- 维度的时候
     * */
    if(colourAll && colourAll.dimMea == 0){

        // 计算字符串的长度平均值
        const mean = d3.mean(legendsData.map(function(d){ return d.length }));
        // 添加最外层div，输入数据
        const legends = ele.append("div")
            .attr("class","legend-list")
            .selectAll("legends")
            .data(legendsData);
        // 添加外层div，绑定颜色，字体大小，字体
        legends.enter().append("div")
            .attr("class","legends " + row)
            .style("font-size",sizePx)
            .style("color",fontColor)
            .style("font-family",family);

        var pClick = null;
        // 添加外层p标签
        const p = legends.append("p")
            .style("line-height",sizePx)
            .on({
                "mouseover":function(){
                    $(this).children("span").addClass("focus");
                },
                "mouseout":function(){
                    $(this).children("span").removeClass("focus");
                },
                // 添加点击事件
                "click":function(){
                    const thisSpan = $(this).find("span");    // 自己的颜色块
                    const thisPSpan = $(this).parent().siblings().find("span");   // 兄弟元素颜色块;
                    const block = $(this).parents(".legend").siblings(".resize-chart").find(".areaBlock");
                    const text = $(this).find("text").text();

                    thisSpan.removeClass("opacity").addClass("focusClick");
                    if(this === pClick){
                        thisPSpan.removeClass("opacity");
                        thisSpan.removeClass("focusClick");
                        block.attr("class","areaBlock");

                        pClick = null;
                    }else{
                        thisPSpan.addClass("opacity");
                        thisPSpan.removeClass("focusClick");

                        block.each(function(){
                            if(!($(this).attr('data-id') === text)){
                                $(this).attr("class","fill-opacity areaBlock");
                            }else{
                                $(this).attr("class","areaBlock");
                            }
                        });
                        pClick = this;
                    }

                }
            });
        // 添加颜色块
        p.append("span")
            .attr("class","legendp")
            .style("height",sizePx)
            .style("width",sizePx)
            .style("background-color",function(d,i) { return o(d) });
        //添加颜色字体     根据位置不同，修改字体宽度；当位置是left or right 时，如果字体太长则添加省略号
        p.insert("text")
            .attr("class",function(d){if(d.length > mean && (positionSize === 3 || positionSize === 1)){    return "SingleOmitted"; }})
            .style("width",function(d){if(d.length > mean && (positionSize === 3 || positionSize === 1)){    return mean*size + "px";    }})
            .text(function(d){ return d })

    }
    /*
     *  2、拖拽图例；  颜色or尺寸维度度量的时候
     * */
    const range = [];
    // 判断颜色是否为度量
    if(colourAll && colourAll.dimMea === 1){
        range.push({
            "min":total.meaMaxMin[colourAll.fieldId].min,
            "max":total.meaMaxMin[colourAll.fieldId].max,
            "name":colourAll.fieldAlias,
            "fieldId":colourAll.fieldId,
            "colourAll":1
        })
    }
    // 判断尺寸是否为度量
    if(sizeAll && sizeAll.dimMea === 1){
        range.push({
            "min":total.meaMaxMin[sizeAll.fieldId].min,
            "max":total.meaMaxMin[sizeAll.fieldId].max,
            "name":sizeAll.fieldAlias,
            "fieldId":sizeAll.fieldId
        })
    }
    // 判断颜色or尺寸中是否有度量
    if(range.length >= 1){
        // 判断位置是左右or上下
        let vertical = '', // 滑块是横or竖
            height = "",
            width  = "160px",
            linear = "right";
        if(positionSize === 1 || positionSize === 3){
            vertical = 'vertical';
            height = "160px";
            width = "";
            linear = "bottom";
        }


        // 添加所有范围最外层div
        const ran = ele.append("div")
            .attr("class","legendRange")
            .selectAll("div")
            .data(range)
            .enter()
            .append("div")
            .attr("class","range");
        // 显示范围名称
        ran.append("text")
            .text(function(d){ return d.name });
        // 给范围外层添加div
        const slider = ran.append("div")
            .attr("class","slider");
        // 绑定范围
        slider.append("div")
        // 如果颜色是度量，添加样式 gradient
            .attr('class',function(d){if(d.colourAll && d.colourAll === 1){return "gradient";}})
            .style("height",height)
            .style("width",width)
            // 绑定jquery-ui滚动条函数
            .filter(function(d){
                $(this).slider({
                    range: true,
                    orientation: vertical,
                    min: d.min,
                    max: d.max,
                    values: [ d.min, d.max ],
                    slide: function( event, ui ) {
                        // 修改区域块透明度
                        $.each(total.reoords,function(i){
                            if(this[d.fieldId] <= ui.values[1] && this[d.fieldId] >= ui.values[0]){
                                $(".areaBlock").eq(i).attr("class","areaBlock");
                            }else{
                                $(".areaBlock").eq(i).attr("class","areaBlock fill-opacity");
                            }
                        });
                        // 修改最大值和最小值
                        $(this).siblings(".rangeMin").text(ui.values[0].toFixed(2))
                            .siblings(".rangeMax").text(ui.values[1].toFixed(2))
                    }
                });
            });
        // 添加最大值和最小值
        slider.append("text")
            .attr("class",'rangeMin rangeData')
            .style("right",function(d){if(positionSize === 1 || positionSize === 3){return -d.min*12/2 + "px";}})
            .text(function(d){ return d.min.toFixed(2) });
        slider.append("text")
            .attr("class",'rangeMax rangeData')
            .style("right",function(d){if(positionSize === 1 || positionSize === 3){return -d.min*12/2 + "px";}})
            .text(function(d){ return d.max.toFixed(2) });
        // 如果颜色是度量，则添加gradient样式，并修改样式下滚动横条的背景色
        if(colourAll.dimMea === 1){
            $(".gradient .ui-slider-range").css("background","linear-gradient(to "+ linear +","+ CStyle.continuousColor[0] +","+ CStyle.continuousColor[1] +")");
        }

    }
}

// 返回图例的宽高度和颜色
function chartLegendData(el,total,CStyle){
    const colourAll = total.queryJson.colour[0];                       // 全部属性 - 颜色
    let color = CStyle.discreteColor;   // 如何颜色是维度则是离散颜色，如果是度量则是连续颜色；
    let colorDomain = total.dimValues[colourAll.fieldId];
    if(colourAll.dimMea && colourAll.dimMea === 1){
        color = CStyle.continuousColor;
        colorDomain = [total.meaMaxMin[colourAll.fieldId].min,total.meaMaxMin[colourAll.fieldId].max];
    }

    let positionBur = true,   // 判断是0、3或者1、2，如果是1、2则svg不移动
        elHeight = 0,        // 图例的高度
        elWidth  = 0;        // 图例的宽度

    // 根据图例维度，修改定位；
    switch(parseInt(CStyle.legend.position)){
        case 0:
            elHeight = parseInt($(el).css("height"));
            positionBur = true;break;
        case 1:
            elWidth  = parseInt($(el).css("width")) + margin.right;
            positionBur = false;break;
        case 2:
            elHeight = parseInt($(el).css("height"));
            positionBur = false;break;
        case 3:
            elWidth  = parseInt($(el).css("width"));
            positionBur = true;break;
    }
    return { "elHeight":elHeight, "elWidth":elWidth, "color":color, "colorDomain":colorDomain, "positionBur":positionBur }
}

// calculate("人生大事","12px","微软雅黑");
function calculate(text,fontSize,fontFamily){
    const span = document.createElement("span");
    let result = {};
    result.width = span.offsetWidth;
    result.height = span.offsetHeight;
    span.style.visibility = "hidden";
    span.style.fontSize = fontSize;
    span.style.fontFamily = fontFamily;
    span.style.display = "inline-block";
    document.body.appendChild(span);
    if(typeof span.textContent !== "undefined"){
        span.textContent = text;
    }else{
        span.innerText = text;
    }
    result.width = parseFloat(window.getComputedStyle(span).width) - result.width;
    result.height = parseFloat(window.getComputedStyle(span).height) - result.height;
    return result;
}


// 切割数组
function split_array(arr, len) {
    const a_len = arr.length;
    let result = [];
    for (let i = 0; i < a_len; i += len) {
        result.push(arr.slice(i, i + len));
    }
    return result;
}