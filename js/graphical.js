
// 调用函数
// 根据数据索引请求数据，并调用图形函数
var DataIndexes = {

    // 为测试环境
    generate:function(data,storage){
        storage.empty();
        let html = '';
        $.each(data.htmlJson.controls,function(index,val){
            let text = DataIndexes.text(val.customData.controls,val.customData.dataType);
            const style =  val.style;
            html = '<div linkPageId = "'+ val.linkPageId +'"  id="'+ val.cid +'" type="'+ val.type +'" data-type="'+ val.customData.dataType +'" style="height:'+ style.height +'px;width:'+ style.width +'px;top:'+ style.top +'px;left:'+ style.left +'px;z-index:'+ val.displayLevel +'" class="resize-item">'+ text +'</div>';

            storage.append(html);

            if(val.customData.dataType === "chart" || val.customData.dataType === "table"){
                // 将数据存入检索数据中
                let chart_date = {
                    'cid':val.cid,
                    "type":val.type,
                    "queryJson":val.queryJson,
                };
                DataIndexes.inAjax(chart_date,val.cid);
            }
        });
    },
    text:function(controls,dataType){
        // 判断图形、表格、文本、图片、按钮
        // 如果是文本和图片，则复制内容不同
        let textCon = "";
        let text = '';
        switch(dataType){
            case "chart":
                text = `<!--定位层-->
                            <div class="positioning">
                                <!--背景样式、边框线、透明度、圆角-->
                                <div class="inform">
                                    <h2 class="chartTitle">未命名报表</h2>
                                    <div class="resize-content">
                                        <div class="legend"></div>
                                        <div class="resize-chart"></div>
                                        <div class="prompt"></div>
                                    </div>
                                </div>
                            </div>
                          `;


                break;
            case "table":
                text = `<!--定位层-->
                            <div class="positioning">
                                <!--背景样式、边框线、透明度、圆角-->
                                <div class="inform">
                                    <h2 class="chartTitle">未命名报表</h2>
                                    <div class="resize-content">
                                        <div class="legend"></div>
                                        <div class="resize-chart"></div>
                                        <div class="prompt"></div>
                                    </div>
                                </div>
                            </div>
                          `;
                break;
            case "text":
                const contenteditable = '<div class="content-text edit"><div contenteditable="false" spellcheck="true" data-medium-editor-element="true" role="textbox" aria-multiline="true" data-placeholder="请输入文本" data-medium-focused = "true">${ content }</div></div>';
                textCon = controls?controls.html?controls.html:contenteditable:contenteditable;
                text = `<!--定位层-->
                            <div class="positioning">
                                <!--背景样式、边框线、透明度、圆角-->
                                <div class="inform">
                                   ${ textCon }
                                </div>
                            </div>
                          `;
                break;
            case "button":
                const button = '<div class="content-button"><button></button>${ content }</div>';
                textCon = controls?controls.html?controls.html:button:button;
                text = `<!--定位层-->
                            <div class="positioning">
                                <!--背景样式、边框线、透明度、圆角-->
                                <div class="inform">
                                    ${ textCon }
                                </div>
                            </div>
                          `;
                break;
            case "image":
                const image = '';
                textCon = controls?controls.html?controls.html:image:image;
                text = `<!--定位层-->
                            <div class="positioning">
                                <!--背景样式、边框线、透明度、圆角-->
                                <div class="inform">
                                    ${ textCon }
                                </div>
                            </div>
                          `;
                break;
        }
        return text;
    },



    inAjax:function(d,id){
        const ele = "#"+ id +" .resize-chart",
            self = this,
            queryJson = d.queryJson;
        // 筛选数据，当数据不为空的时候再执行
        if((!(queryJson.x) && !(queryJson.y)) || (queryJson.x.length <= 0 && queryJson.y <= 0)){
            return
        }
        $(ele).html("");
        $(ele).siblings(".prompt").hide();

        // 数组遍历，判断是否有度量
        const q_l = d.queryJson.x.concat(d.queryJson.y).filter(function(d){
           if(d.dimMea === "0" || d.dimMea === 0) return d;
        }).length;
        if(q_l <= 0) { layer.msg("图表没有度量！"); return ; }


        $.ajax({
            type:"post",
            url:$url1 + "/bi/report/v1/data.json?projectId="+ projectId +"&versionId="+ versionId +"",
            headers:{   username:username, userId:userId    },
            data:JSON.stringify(d),
            dataType:"json",
            contentType: 'application/json',
            success:function(data){
                if(data.code === 0){
                    if(data.data){
                        // 根据上传索引绘制图形
                        self.draw(id,d.type,data);
                    }else if(data.code === 500){
                        $(ele).siblings(".prompt").show();
                        layer.msg("数据异常，请联系管理员！");
                    }else{
                        $(ele).siblings(".prompt").show();
                        layer.msg("数据为空！");
                    }
                }else{
                    // 后期可删除，只是防止没有数据时，显示之前几个图形
                    if(d.type > 103){
                        self.draw(id,d.type);
                    }
                }
            },
            error:function(res){
                // console.log(res);
            }
        })
    },
    draw:function(id,type,data){
        const ele = "#"+ id +" .resize-chart";

        let cs = new chartStyle(id,CStyle);
        cs.title();
        cs.background();
        chartLegend(id,data,CStyle);

        switch($("#"+id).attr("data-type")){
            case "chart":
                switch(type){
                    case 0:
                        // 表格
                        chart_table(ele,data);
                        break;
                    case 66:
                        // 并列柱状图
                        manyGroup(id,data,CStyle);


                        break;
                    case 102:
                        // 折线图
                        lineChart(ele,data);
                        break;
                    case 103:
                        // 饼图
                        var r = Math.min(parseInt($("#"+ id +"").css("width")),parseInt($("#"+ id +"").css("height")));
                        var pieData = [];
                        $.each(data.value,function(index,val){
                            var z = [data.key[index],val];
                            pieData.push(z);
                        });
                        pieChart(ele,pieData,r);
                        break;
                    case 104:
                        // 堆叠柱状图
                        stacking(ele);
                        break;
                    case 105:
                        // 区域图
                        areaChart(ele);
                        break;
                    case 106:
                        // 散点图
                        scatterPlot(ele);
                        break;
                    case 107:
                        // 甘特图
                        ganttChart(ele);
                        break;
                    case 108:
                        // 仪表盘
                        meterChart(ele);
                        break;
                    case 109:
                        // 漏斗图
                        funnelChart(ele);
                        break;
                    case 110:
                        // 矩阵图
                        rectangle(ele);
                        break;
                }
                break;
            case "table":
                // 表格
                chart_table(ele,data);
                break;
        }
    }
};









// 存放3D图形转化的函数

//  一维圆饼图
function circle(id, date, r1, r2) {
    var margin = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        width = $(id).width() - margin.left - margin.right,
        height = $(id).height() - margin.top - margin.bottom;
    var svg = d3.select(id)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("class", "pie")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    //    构造一个新的默认的饼布局
    var pie = d3.layout.pie();
    //进行数据的转换
    var piedata = pie(date);
    var color = d3.scale.category10(); //有十种颜色的颜色比例尺
    var arc = d3.svg.arc() //弧生成器
        .innerRadius(r2) //设置内半径
        .outerRadius(r1); //设置外半径
    var arcs = svg.selectAll("g")
        .data(piedata)
        .enter()
        .append("g")
        .attr("transform", "translate(" + (width / 2) + "," + (width / 2) + ")");
    arcs.append("path")
        .attr("fill", function (d, i) {
            return color(i);
        })
        .attr("d", function (d) {
            return arc(d); //调用弧生成器，得到路径值
        });
    arcs.append("text")
        .attr("transform", function (d) {
            //arc.centroid(d) 能算出弧线的中心。
            return "translate(" + arc.centroid(d) + ")";
        })
        .style("fill", '#fff')
        .attr("text-anchor", "middle")
        .text(function (d) {
            return d.data;
        });
}

//  封装 多维饼图
function pie(id,data){
    var wid=$(id).width(),hei=$(id).height();
    var radius = Math.min(wid, hei) / 2;
//宽度，高度，数据
    var x = d3.scale.linear().range([0, 2 * Math.PI]);
    var y = d3.scale.sqrt().range([0, radius]);
    var color = d3.scale.category20c();
    var svg = d3.select(id)
        .append("svg")
        .attr("width", wid)
        .attr("height", hei)
        .append("g")
        .attr("transform", "translate(" + wid / 2 + "," + (hei / 2) + ")");
    var partition = d3.layout.partition()
        .sort(null)
        .value(function(d,i) { return d/i; });
    var arc = d3.svg.arc()
        .startAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x))); })
        .endAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx))); })
        .innerRadius(function(d) { return Math.max(0, y(d.y)); })
        .outerRadius(function(d) { return Math.max(0, y(d.y + d.dy)); });
    var node;
    d3.json(data, function(error, root) {
        node = root;
        var path = svg.datum(root).selectAll("path")
            .data(partition.nodes)
            .enter().append("path")
            .attr("d", arc)
            .style("fill", function(d,i) {
                return color(i);
            })
            .on("click", click)
            .each(stash);
        var value = function(d) { return d.size; };
        path.data(partition.value(value).nodes)
            .transition()
            .duration(1000)
            .attrTween("d", arcTweenData);
        function click(d) {
            node = d;
            path.transition()
                .duration(1000)
                .attrTween("d", arcTweenZoom(d));
        }
        $(".tooltip").css("opacity",0);
        path .on("mouseover",function(d,i){
            /*
             鼠标移入时，
             （1）通过 selection.html() 来更改提示框的文字
             （2）通过更改样式 left 和 top 来设定提示框的位置
             （3）设定提示框的透明度为1.0（完全不透明）
             */
//      console.log(d.data[0]+"的出货量为"+"<br />"+d.data[1]+" 百万台")
            if(d.size !== undefined) {
                $(".tooltip").css({"left":(d3.event.pageX+10)+"px","top":(d3.event.pageY+10)+"px","opacity":1,"background":"#000"}).text(d.name+":"+d.size).show();
            }
        })
            .on("mouseout",function(d){
//鼠标移除 透明度设为0
                $(".tooltip").css("opacity",0).text("").hide();
            })
    });

    d3.select(self.frameElement).style("height", hei + "px");
    function stash(d) {
        d.x0 = d.x;
        d.dx0 = d.dx;
    }
    function arcTweenData(a, i) {
        var oi = d3.interpolate({x: a.x0, dx: a.dx0}, a);
        function tween(t) {
            var b = oi(t);
            a.x0 = b.x;
            a.dx0 = b.dx;
            return arc(b);
        }
        if (i == 0) {
            var xd = d3.interpolate(x.domain(), [node.x, node.x + node.dx]);
            return function(t) {
                x.domain(xd(t));
                return tween(t);
            };
        } else {
            return tween;
        }
    }
    function arcTweenZoom(d) {
        var xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx]),
            yd = d3.interpolate(y.domain(), [d.y, 1]),
            yr = d3.interpolate(y.range(), [d.y ? 20 : 0, radius]);
        return function(d, i) {
            return i
                ? function(t) { return arc(d); }
                : function(t) { x.domain(xd(t)); y.domain(yd(t)).range(yr(t)); return arc(d); };
        };
    }
}

//  封装好的折线函数
function line(id, tit, sub, data, mark, lin) {
    var lines = []; //保存折线图对象
    var lineColor = ["#F00", "#09F", "#0F0", "#ccc"];
    var padding = 40;
    var currentLineNum = 0;
    //用一个变量计算底部的高度，如果不是多系列，就为0
    var foot_height = padding;
    //用一个变量存储标题和副标题的高度，如果没有标题什么的，就为0
    var head_height = padding;
    var w = $(id).width();

    var h = $(id).height();
    //标题，副标题,数据种类，数据时间，数据名称
    //判断是否多维数组，如果不是，则转为多维数组，这些处理是为了处理外部传递的参数设置的，现在数据标准，没什么用
    if (!(data[0] instanceof Array)) {
        var tempArr = [];
        tempArr.push(data);
        data = tempArr;
    }

    //保存数组长度，也就是系列的个数
    currentLineNum = data.length;
    //图例的预留位置
    foot_height += 25;
    //定义画布
    var svg = d3.select(id)
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    //添加背景
    svg.append("g")
        .append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", w)
        .attr("height", h)
        .style("fill", "#FFF")
        .style("stroke-width", 2)
        .style("stroke", "#E7E7E7");

    //添加标题
    if (tit != "") {
        svg.append("g")
            .append("text")
            .text(tit)
            .attr("class", "title")
            .attr("x", w / 2)
            .attr("y", head_height);
        head_height += 30;
    }
    //添加副标题
    if (sub != "") {
        svg.append("g")
            .append("text")
            .text(sub)
            .attr("class", "subtitle")
            .attr("x", w / 2)
            .attr("y", head_height);

        head_height += 20;
    }

    var maxdata = getMaxdata(data);

    //横坐标轴比例尺
    var xScale = d3.scale.linear()
        .domain([0, data[0].length - 1])
        .range([padding, w - padding]);

    //纵坐标轴比例尺
    var yScale = d3.scale.linear()
        .domain([0, maxdata])
        .range([h - foot_height, head_height]);

    //定义横轴网格线
    var xInner = d3.svg.axis()
        .scale(xScale)
        .tickSize(-(h - head_height - foot_height), 0, 0)
        .tickFormat("")
        .orient("bottom")
        .ticks(data[0].length);

    //添加横轴网格线
    var xInnerBar = svg.append("g")
        .attr("class", "inner_line")
        .attr("transform", "translate(0," + (h - padding) + ")")
        .call(xInner);

    //定义纵轴网格线
    var yInner = d3.svg.axis()
        .scale(yScale)
        .tickSize(-(w - padding * 2), 0, 0)
        .tickFormat("")
        .orient("left")
        .ticks(10);

    //添加纵轴网格线
    var yInnerBar = svg.append("g")
        .attr("class", "inner_line")
        .attr("transform", "translate(" + padding + ",0)")
        .call(yInner);

    //定义横轴
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .ticks(data[0].length);

    //添加横坐标轴
    var xBar = svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + (h - foot_height) + ")")
        .call(xAxis);

    //通过编号获取对应的横轴标签
    xBar.selectAll("text")
        .text(function (d) {
            return mark[d];
        });

    //定义纵轴
    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .ticks(10);

    //添加纵轴
    var yBar = svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + padding + ",0)")
        .call(yAxis);

    //添加图例
    var legend = svg.append("g");

    addLegend();

    //添加折线
    lines = [];
    for (var i = 0; i < currentLineNum; i++) {
        var newLine = new CrystalLineObject();
        newLine.init(i);
        lines.push(newLine);
    }

    //定义折线类

    function CrystalLineObject() {
        this.group = null;
        this.path = null;
        this.oldData = [];

        this.init = function (id) {
            var arr = data[id];
            this.group = svg.append("g");

            var line = d3.svg.line()
                .x(function (d, i) {
                    return xScale(i);
                })
                .y(function (d) {
                    return yScale(d);
                });

            //添加折线
            this.path = this.group.append("path")
                .attr("d", line(arr))
                .style("fill", "none")
                .style("stroke-width", 1)
                .style("stroke", lineColor[id])
                .style("stroke-opacity", 0.9);

            //添加系列的小圆点
            this.group.selectAll("circle")
                .data(arr)
                .enter()
                .append("circle")
                .attr("cx", function (d, i) {
                    return xScale(i);
                })
                .attr("cy", function (d) {
                    return yScale(d);
                })
                .attr("r", 5)
                .attr("cursor", "pointer")
                .attr("fill", lineColor[id])
            this.group.selectAll("circle")
                .on("mouseover", function (d, i) {
                    var tx = parseFloat(d3.select(this).attr("cx"));
                    var ty = parseFloat(d3.select(this).attr("cy"));
                    var tips = svg.append("g")
                        .attr("id", "tips");
                    var tipRect = tips.append("rect")
                        .attr("x", tx + 10)
                        .attr("y", ty + 10)
                        .attr("width", 120)
                        .attr("height", 30)
                        .attr("fill", "#FFF")
                        .attr("stroke-width", 1)
                        .attr("stroke", "#CCC");
                    var tipText = tips.append("text")
                        .attr("class", "tiptools")
                        .text(lin[id] + "\r\n" + mark[i] + "\r\n" + d)
                        .attr("x", tx + 20)
                        .attr("y", ty + 30);
                })
                .on("mouseout", function (d, i) {
                    d3.select("#tips").remove();
                });
            this.oldData = arr;
        };

        //动画初始化方法
        this.movieBegin = function (id) {
            var arr = data[i];
            //补足/删除路径
            var olddata = this.oldData;
            var line = d3.svg.line()
                .x(function (d, i) {
                    if (i >= olddata.length) return w - padding;
                    else return xScale(i);
                })
                .y(function (d, i) {
                    if (i >= olddata.length) return h - foot_height;
                    else return yScale(olddata[i]);
                });

            //路径初始化
            this.path.attr("d", line(arr));

            //截断旧数据
            var tempData = olddata.slice(0, arr.length);
            var circle = this.group.selectAll("circle").data(tempData);

            //删除多余的圆点
            circle.exit().remove();

            //圆点初始化，添加圆点,多出来的到右侧底部
            this.group.selectAll("circle")
                .data(arr)
                .enter()
                .append("circle")
                .attr("cx", function (d, i) {
                    if (i >= olddata.length) return w - padding;
                    else return xScale(i);
                })
                .attr("cy", function (d, i) {
                    if (i >= olddata.length) return h - foot_height;
                    else return yScale(d);
                })
                .attr("r", 5)
                .attr("fill", lineColor[id]);

            this.oldData = arr;
        };

        //重绘加动画效果
        this.reDraw = function (id, _duration) {
            var arr = data[i];
            var line = d3.svg.line()
                .x(function (d, i) {
                    return xScale(i);
                })
                .y(function (d) {
                    return yScale(d);
                });

            //路径动画
            this.path.transition().duration(_duration).attr("d", line(arr));

            //圆点动画
            this.group.selectAll("circle")
                .transition()
                .duration(_duration)
                .attr("cx", function (d, i) {
                    return xScale(i);
                })
                .attr("cy", function (d) {
                    return yScale(d);
                })
        };

        //从画布删除折线
        this.remove = function () {
            this.group.remove();
        };
    }

    //添加图例

    function addLegend() {
        var textGroup = legend.selectAll("text")
            .data(lin);

        textGroup.exit().remove();

        legend.selectAll("text")
            .data(lin)
            .enter()
            .append("text")
            .text(function (d) {
                return d;
            })
            .attr("class", "legend")
            .attr("x", function (d, i) {
                return i * 100;
            })
            .attr("y", 0)
            .attr("fill", function (d, i) {
                return lineColor[i];
            });

        var rectGroup = legend.selectAll("rect")
            .data(lin);

        rectGroup.exit().remove();

        legend.selectAll("rect")
            .data(lin)
            .enter()
            .append("rect")
            .attr("x", function (d, i) {
                return i * 100 - 20;
            })
            .attr("y", -10)
            .attr("width", 12)
            .attr("height", 12)
            .attr("fill", function (d, i) {
                return lineColor[i];
            });

        legend.attr("transform", "translate(" + ((w - lin.length * 100) / 2) + "," + (h - 10) + ")");
    }

    //取得多维数组最大值

    function getMaxdata(arr) {
        maxdata = 0;
        for (i = 0; i < arr.length; i++) {
            maxdata = d3.max([maxdata, d3.max(arr[i])]);
        }
        return maxdata;
    }
}

// 表格
/*function chart_table(id,date){
    var th='',tds='';
    $.each(date,function(index,item){
        var td='';
        for(var key in item){
            if(index===0)th+='<th>'+key+'</th>';
            td+='<td>'+item[key]+'</td>';
        }
        tds+='<tr>'+td+'</tr>';
    });
    $(id).find("table").remove();
    var table_text='<table><thead>'+th+'</thead><tbody>'+tds+'</tbody></table>';
    $(id).append(table_text);
    console.log(date);
}*/
function chart_table(id,data){
    //hyf_修改
    console.log(data);
    var queryJson = data.queryJson;//查询JSON
    var records = data.records;//查询结果
    var ths='',tds='';

    $.each(queryJson.x,function(index,item){
        let td = '';
        $.each(records,function(key,val){
            td += `<td>${val[item.fieldId]}</td>`;
        });
        tds+= `<tr>${td}</tr>`;
    });

    $.each(queryJson.y,function(index,item){
        let td = '';
        $.each(records,function(key,val){
            td += `<td>${val[item.fieldId]}</td>`;
        });
        tds+= `<tr>${td}</tr>`;
    });



    $(id).find("table").remove();
    var table_text=`
        <table>
            <tbody>${tds}</tbody>
        </table>
    `;

    $(id).append(table_text);

}

// 2017-10-25 饼图  一个维度 一个度量
function pieChart(id, dataset,r1) {

    var width = r1;
    var height = r1;
    var svg = d3.select(id)
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    //转换数据
    var pie = d3.layout.pie() //创建饼状图
        .value(function (d) {
            return d[1];
        }); //值访问器
    //dataset为转换前的数据 piedata为转换后的数据
    var piedata = pie(dataset);

    //绘制
    var outerRadius = width / 3;
    var innerRadius = 0; //内半径和外半径

    //创建弧生成器
    var arc = d3.svg.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);
    var color = d3.scale.category20();
    //添加对应数目的弧组
    var arcs = svg.selectAll("g")
        .data(piedata)
        .enter()
        .append("g")
        .attr("transform", "translate(" + (width / 2) + "," + (height / 2) + ")");
    //添加弧的路径元素
    arcs.append("path")
        .attr("fill", function (d, i) {
            return color(i);
        })
        .attr("d", function (d) {
            return arc(d); //使用弧生成器获取路径
        });
    //添加弧内的文字
    arcs.append("text")
        .attr("transform", function (d) {
            var x = arc.centroid(d)[0] * 1.4; //文字的x坐标
            var y = arc.centroid(d)[1] * 1.4;
            return "translate(" + x + "," + y + ")";
        })
        .attr("text-anchor", "middle")
        .text(function (d) {
            //计算市场份额的百分比
            var percent = Number(d.value) / d3.sum(dataset, function (d) {
                    return d[1];
                }) * 100;
            //保留一位小数点 末尾加一个百分号返回
            return percent.toFixed(1) + "%";
        });
    //添加连接弧外文字的直线元素
    arcs.append("line")
        .attr("stroke", "black")
        .attr("x1", function (d) {
            return arc.centroid(d)[0] * 2;
        })
        .attr("y1", function (d) {
            return arc.centroid(d)[1] * 2;
        })
        .attr("x2", function (d) {
            return arc.centroid(d)[0] * 2.2;
        })
        .attr("y2", function (d) {
            return arc.centroid(d)[1] * 2.2;
        });

    var fontsize = 14;
    arcs.append("line")
        .style("stroke", "black")
        .each(function (d) {
            d.textLine = {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0
            };
        })
        .attr("x1", function (d) {
            d.textLine.x1 = arc.centroid(d)[0] * 2.2;
            return d.textLine.x1;
        })
        .attr("y1", function (d) {
            d.textLine.y1 = arc.centroid(d)[1] * 2.2;
            return d.textLine.y1;
        })
        .attr("x2", function (d) {
            // console.log("d.data[0]:  "+d.data[0]);//产商名
            var strLen = getPixelLength(d.data[0], fontsize) * 1.5;
            var bx = arc.centroid(d)[0] * 2.2;
            d.textLine.x2 = bx >= 0 ? bx + strLen : bx - strLen;
            return d.textLine.x2;
        })
        .attr("y2", function (d) {
            d.textLine.y2 = arc.centroid(d)[1] * 2.2;
            return d.textLine.y2;
        });



    //添加弧外的文字元素
    // arcs.append("text")
    //  .attr("transform",function(d){
    //      var x=arc.centroid(d)[0]*2.5;
    //      var y=arc.centroid(d)[1]*2.5;
    //      return "translate("+x+","+y+")";
    //  })
    //  .attr("text-anchor","middle")
    //  .text(function(d){
    //      return d.data[0];
    //  });
    arcs.append("text")
        .attr("transform", function (d) {
            var x = 0;
            var y = 0;
            x = (d.textLine.x1 + d.textLine.x2) / 2;
            y = d.textLine.y1;
            y = y > 0 ? y + fontsize * 1.1 : y - fontsize * 0.4;
            return "translate(" + x + "," + y + ")";
        })
        .style("text-anchor", "middle")
        .style("font-size", fontsize)
        .text(function (d) {
            return d.data[0];
        });

    //添加一个提示框
    var tooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltipChart")
        .style("opacity", 0.0);

    arcs.on("mouseover", function (d, i) {
        /*
         鼠标移入时，
         （1）通过 selection.html() 来更改提示框的文字
         （2）通过更改样式 left 和 top 来设定提示框的位置
         （3）设定提示框的透明度为1.0（完全不透明）
         */
        // console.log(d.data[0] + "：" + "<br />" + d.data[1] + " ")
        tooltip.html(d.data[0] + "：" + "<br />" + d.data[1] + " ")
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY + 20) + "px")
            .style("opacity", 1.0);
        tooltip.style("box-shadow", "10px 0px 0px" + color(i)); //在提示框后添加阴影
    })
        .on("mousemove", function (d) {
            /* 鼠标移动时，更改样式 left 和 top 来改变提示框的位置 */
            tooltip.style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY + 20) + "px");
        })
        .on("mouseout", function (d) {
            //鼠标移除 透明度设为0
            tooltip.style("opacity", 0.0);
        })

    function getPixelLength(str, fontsize) {
        var curLen = 0;
        for (var i = 0; i < str.length; i++) {
            var code = str.charCodeAt(i);
            var pixelLen = code > 255 ? fontsize : fontsize / 2;
            curLen += pixelLen;
        }
        return curLen;
    }
}

// 2017-10-26 折线图 一个维度 多个度量
function lineChart(id,data){
    var dataset = data.value;  // 数据
    var lines = []; //保存折线图对象
    var xMarks = data["x-axis"];  // x轴
    var lineNames = data["y-axis"]; //保存系列名称
    var lineColor = ["#F00","#09F","#0F0", "#ccc", "#00FFFF", "#000080", "#006400"];
    var w = parseInt($(id).css("width"));
    var h = parseInt($(id).css("height"));
    var padding = 40;
    var currentLineNum = 0;

    //用一个变量存储标题和副标题的高度，如果没有标题什么的，就为0
    var head_height=padding;
    // var title="收支平衡统计图";
    // var subTitle="2013年1月 至 2013年6月";
    var title=""; // 标题
    var subTitle=""; // 时间

    //用一个变量计算底部的高度，如果不是多系列，就为0
    var foot_height=padding;

    //判断是否多维数组，如果不是，则转为多维数组，这些处理是为了处理外部传递的参数设置的，现在数据标准，没什么用
    if(!(dataset[0] instanceof Array))
    {
        var tempArr=[];
        tempArr.push(dataset);
        dataset=tempArr;
    }

    //保存数组长度，也就是系列的个数
    currentLineNum=dataset.length;

    //图例的预留位置
    foot_height+=25;

    //定义画布
    var svg=d3.select(id)
        .append("svg")
        .attr("width",w)
        .attr("height",h);

    //添加背景
    svg.append("g")
        .append("rect")
        .attr("x",0)
        .attr("y",0)
        .attr("width",w)
        .attr("height",h)
        .style("fill","#FFF")
        .style("stroke-width",2)
        .style("stroke","#E7E7E7");

    //添加标题
    if(title!="")
    {
        svg.append("g")
            .append("text")
            .text(title)
            .attr("class","title")
            .attr("x",w/2)
            .attr("y",head_height);

        head_height+=30;
    }

    //添加副标题
    if(subTitle!="")
    {
        svg.append("g")
            .append("text")
            .text(subTitle)
            .attr("class","subTitle")
            .attr("x",w/2)
            .attr("y",head_height);

        head_height+=20;
    }

    maxdata=getMaxdata(dataset);

    //横坐标轴比例尺
    var xScale = d3.scale.linear()
        .domain([0,dataset[0].length-1])
        .range([padding,w-padding]);

    //纵坐标轴比例尺
    var yScale = d3.scale.linear()
        .domain([0,maxdata])
        .range([h-foot_height,head_height]);

    //定义横轴网格线
    var xInner = d3.svg.axis()
        .scale(xScale)
        .tickSize(-(h-head_height-foot_height),0,0)
        .tickFormat("")
        .orient("bottom")
        .ticks(dataset[0].length);

    //添加横轴网格线
    var xInnerBar=svg.append("g")
        .attr("class","inner_line")
        .attr("transform", "translate(0," + (h - padding) + ")")
        .call(xInner);

    //定义纵轴网格线
    var yInner = d3.svg.axis()
        .scale(yScale)
        .tickSize(-(w-padding*2),0,0)
        .tickFormat("")
        .orient("left")
        .ticks(10);

    //添加纵轴网格线
    var yInnerBar=svg.append("g")
        .attr("class", "inner_line")
        .attr("transform", "translate("+padding+",0)")
        .call(yInner);

    //定义横轴
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .ticks(dataset[0].length);

    //添加横坐标轴
    var xBar=svg.append("g")
        .attr("class","axis")
        .attr("transform", "translate(0," + (h - foot_height) + ")")
        .call(xAxis);

    //通过编号获取对应的横轴标签
    xBar.selectAll("text")
        .text(function(d){return xMarks[d];});

    //定义纵轴
    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .ticks(10)
        .tickFormat(d3.format("s"))             // 数字后面格式;

    //添加纵轴
    var yBar=svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate("+padding+",0)")
        .call(yAxis);

    //添加图例
    var legend=svg.append("g");

    addLegend();

    //添加折线
    lines=[];
    for(i=0;i<currentLineNum;i++)
    {
        var newLine=new CrystalLineObject();
        newLine.init(i);
        lines.push(newLine);
    }

    //定义折线类
    function CrystalLineObject()
    {
        this.group=null;
        this.path=null;
        this.oldData=[];

        this.init=function(id)
        {
            var arr=dataset[id];
            this.group=svg.append("g");

            var line = d3.svg.line()
                .x(function(d,i){return xScale(i);})
                .y(function(d){return yScale(d);});

            //添加折线
            this.path=this.group.append("path")
                .attr("d",line(arr))
                .style("fill","none")
                .style("stroke-width",1)
                .style("stroke",lineColor[id])
                .style("stroke-opacity",0.9);

            //添加系列的小圆点
            this.group.selectAll("circle")
                .data(arr)
                .enter()
                .append("circle")
                .attr("cx", function(d,i) {
                    return xScale(i);
                })
                .attr("cy", function(d) {
                    return yScale(d);
                })
                .attr("r",5)
                .attr("fill",lineColor[id]);
            this.oldData=arr;
        };

        //动画初始化方法
        this.movieBegin=function(id)
        {
            var arr=dataset[i];
            //补足/删除路径
            var olddata=this.oldData;
            var line= d3.svg.line()
                .x(function(d,i){if(i>=olddata.length) return w-padding; else return xScale(i);})
                .y(function(d,i){if(i>=olddata.length) return h-foot_height; else return yScale(olddata[i]);});

            //路径初始化
            this.path.attr("d",line(arr));

            //截断旧数据
            var tempData=olddata.slice(0,arr.length);
            var circle=this.group.selectAll("circle").data(tempData);

            //删除多余的圆点
            circle.exit().remove();

            //圆点初始化，添加圆点,多出来的到右侧底部
            this.group.selectAll("circle")
                .data(arr)
                .enter()
                .append("circle")
                .attr("cx", function(d,i){
                    if(i>=olddata.length) return w-padding; else return xScale(i);
                })
                .attr("cy",function(d,i){
                    if(i>=olddata.length) return h-foot_height; else return yScale(d);
                })
                .attr("r",5)
                .attr("fill",lineColor[id]);

            this.oldData=arr;
        };

        //重绘加动画效果
        this.reDraw=function(id,_duration)
        {
            var arr=dataset[i];
            var line = d3.svg.line()
                .x(function(d,i){return xScale(i);})
                .y(function(d){return yScale(d);});

            //路径动画
            this.path.transition().duration(_duration).attr("d",line(arr));

            //圆点动画
            this.group.selectAll("circle")
                .transition()
                .duration(_duration)
                .attr("cx", function(d,i) {
                    return xScale(i);
                })
                .attr("cy", function(d) {
                    return yScale(d);
                })
        };

        //从画布删除折线
        this.remove=function()
        {
            this.group.remove();
        };
    }

    //添加图例
    function addLegend()
    {
        var textGroup=legend.selectAll("text")
            .data(lineNames);

        textGroup.exit().remove();

        legend.selectAll("text")
            .data(lineNames)
            .enter()
            .append("text")
            .text(function(d){return d;})
            .attr("class","legend")
            .attr("x", function(d,i) {return i*100;})
            .attr("y",0)
            .attr("fill",function(d,i){ return lineColor[i];});

        var rectGroup=legend.selectAll("rect")
            .data(lineNames);

        rectGroup.exit().remove();

        legend.selectAll("rect")
            .data(lineNames)
            .enter()
            .append("rect")
            .attr("x", function(d,i) {return i*100-20;})
            .attr("y",-10)
            .attr("width",12)
            .attr("height",12)
            .attr("fill",function(d,i){ return lineColor[i];});

        legend.attr("transform","translate("+((w-lineNames.length*100)/2)+","+(h-10)+")");
    }

    //取得多维数组最大值
    function getMaxdata(arr)
    {
        maxdata=0;
        for(i=0;i<arr.length;i++)
        {
            maxdata=d3.max([maxdata,d3.max(arr[i])]);
        }
        return maxdata;
    }
}

// 2017-10-31 散点图 多维2度量
function scatterPlot(id,total){
//        console.log(total);
    // 例子格式
    var data = [{sepalLength:"5.1",sepalWidth:"3.5",petalLength:"1.4",petalWidth:"0.2",species:"setosa"},{sepalLength:"4.9",sepalWidth:"3.0",petalLength:"1.4",petalWidth:"0.2",species:"setosa"},{sepalLength:"4.7",sepalWidth:"3.2",petalLength:"1.3",petalWidth:"0.2",species:"setosa"},{sepalLength:"4.6",sepalWidth:"3.1",petalLength:"1.5",petalWidth:"0.2",species:"setosa"},{sepalLength:"5.0",sepalWidth:"3.6",petalLength:"1.4",petalWidth:"0.2",species:"setosa"},{sepalLength:"5.4",sepalWidth:"3.9",petalLength:"1.7",petalWidth:"0.4",species:"setosa"},{sepalLength:"4.6",sepalWidth:"3.4",petalLength:"1.4",petalWidth:"0.3",species:"setosa"},{sepalLength:"5.0",sepalWidth:"3.4",petalLength:"1.5",petalWidth:"0.2",species:"setosa"},{sepalLength:"4.4",sepalWidth:"2.9",petalLength:"1.4",petalWidth:"0.2",species:"setosa"},{sepalLength:"4.9",sepalWidth:"3.1",petalLength:"1.5",petalWidth:"0.1",species:"setosa"},{sepalLength:"5.4",sepalWidth:"3.7",petalLength:"1.5",petalWidth:"0.2",species:"setosa"},{sepalLength:"4.8",sepalWidth:"3.4",petalLength:"1.6",petalWidth:"0.2",species:"setosa"},{sepalLength:"4.8",sepalWidth:"3.0",petalLength:"1.4",petalWidth:"0.1",species:"setosa"},{sepalLength:"4.3",sepalWidth:"3.0",petalLength:"1.1",petalWidth:"0.1",species:"setosa"},{sepalLength:"5.8",sepalWidth:"4.0",petalLength:"1.2",petalWidth:"0.2",species:"setosa"},{sepalLength:"5.7",sepalWidth:"4.4",petalLength:"1.5",petalWidth:"0.4",species:"setosa"},{sepalLength:"5.4",sepalWidth:"3.9",petalLength:"1.3",petalWidth:"0.4",species:"setosa"},{sepalLength:"5.1",sepalWidth:"3.5",petalLength:"1.4",petalWidth:"0.3",species:"setosa"},{sepalLength:"5.7",sepalWidth:"3.8",petalLength:"1.7",petalWidth:"0.3",species:"setosa"},{sepalLength:"5.1",sepalWidth:"3.8",petalLength:"1.5",petalWidth:"0.3",species:"setosa"},{sepalLength:"5.4",sepalWidth:"3.4",petalLength:"1.7",petalWidth:"0.2",species:"setosa"},{sepalLength:"5.1",sepalWidth:"3.7",petalLength:"1.5",petalWidth:"0.4",species:"setosa"},{sepalLength:"4.6",sepalWidth:"3.6",petalLength:"1.0",petalWidth:"0.2",species:"setosa"},{sepalLength:"5.1",sepalWidth:"3.3",petalLength:"1.7",petalWidth:"0.5",species:"setosa"},{sepalLength:"4.8",sepalWidth:"3.4",petalLength:"1.9",petalWidth:"0.2",species:"setosa"},{sepalLength:"5.0",sepalWidth:"3.0",petalLength:"1.6",petalWidth:"0.2",species:"setosa"},{sepalLength:"5.0",sepalWidth:"3.4",petalLength:"1.6",petalWidth:"0.4",species:"setosa"},{sepalLength:"5.2",sepalWidth:"3.5",petalLength:"1.5",petalWidth:"0.2",species:"setosa"},{sepalLength:"5.2",sepalWidth:"3.4",petalLength:"1.4",petalWidth:"0.2",species:"setosa"},{sepalLength:"4.7",sepalWidth:"3.2",petalLength:"1.6",petalWidth:"0.2",species:"setosa"},{sepalLength:"4.8",sepalWidth:"3.1",petalLength:"1.6",petalWidth:"0.2",species:"setosa"},{sepalLength:"5.4",sepalWidth:"3.4",petalLength:"1.5",petalWidth:"0.4",species:"setosa"},{sepalLength:"5.2",sepalWidth:"4.1",petalLength:"1.5",petalWidth:"0.1",species:"setosa"},{sepalLength:"5.5",sepalWidth:"4.2",petalLength:"1.4",petalWidth:"0.2",species:"setosa"},{sepalLength:"4.9",sepalWidth:"3.1",petalLength:"1.5",petalWidth:"0.2",species:"setosa"},{sepalLength:"5.0",sepalWidth:"3.2",petalLength:"1.2",petalWidth:"0.2",species:"setosa"},{sepalLength:"5.5",sepalWidth:"3.5",petalLength:"1.3",petalWidth:"0.2",species:"setosa"},{sepalLength:"4.9",sepalWidth:"3.6",petalLength:"1.4",petalWidth:"0.1",species:"setosa"},{sepalLength:"4.4",sepalWidth:"3.0",petalLength:"1.3",petalWidth:"0.2",species:"setosa"},{sepalLength:"5.1",sepalWidth:"3.4",petalLength:"1.5",petalWidth:"0.2",species:"setosa"},{sepalLength:"5.0",sepalWidth:"3.5",petalLength:"1.3",petalWidth:"0.3",species:"setosa"},{sepalLength:"4.5",sepalWidth:"2.3",petalLength:"1.3",petalWidth:"0.3",species:"setosa"},{sepalLength:"4.4",sepalWidth:"3.2",petalLength:"1.3",petalWidth:"0.2",species:"setosa"},{sepalLength:"5.0",sepalWidth:"3.5",petalLength:"1.6",petalWidth:"0.6",species:"setosa"},{sepalLength:"5.1",sepalWidth:"3.8",petalLength:"1.9",petalWidth:"0.4",species:"setosa"},{sepalLength:"4.8",sepalWidth:"3.0",petalLength:"1.4",petalWidth:"0.3",species:"setosa"},{sepalLength:"5.1",sepalWidth:"3.8",petalLength:"1.6",petalWidth:"0.2",species:"setosa"},{sepalLength:"4.6",sepalWidth:"3.2",petalLength:"1.4",petalWidth:"0.2",species:"setosa"},{sepalLength:"5.3",sepalWidth:"3.7",petalLength:"1.5",petalWidth:"0.2",species:"setosa"},{sepalLength:"5.0",sepalWidth:"3.3",petalLength:"1.4",petalWidth:"0.2",species:"setosa"},{sepalLength:"7.0",sepalWidth:"3.2",petalLength:"4.7",petalWidth:"1.4",species:"versicolor"},{sepalLength:"6.4",sepalWidth:"3.2",petalLength:"4.5",petalWidth:"1.5",species:"versicolor"},{sepalLength:"6.9",sepalWidth:"3.1",petalLength:"4.9",petalWidth:"1.5",species:"versicolor"},{sepalLength:"5.5",sepalWidth:"2.3",petalLength:"4.0",petalWidth:"1.3",species:"versicolor"},{sepalLength:"6.5",sepalWidth:"2.8",petalLength:"4.6",petalWidth:"1.5",species:"versicolor"},{sepalLength:"5.7",sepalWidth:"2.8",petalLength:"4.5",petalWidth:"1.3",species:"versicolor"},{sepalLength:"6.3",sepalWidth:"3.3",petalLength:"4.7",petalWidth:"1.6",species:"versicolor"},{sepalLength:"4.9",sepalWidth:"2.4",petalLength:"3.3",petalWidth:"1.0",species:"versicolor"},{sepalLength:"6.6",sepalWidth:"2.9",petalLength:"4.6",petalWidth:"1.3",species:"versicolor"},{sepalLength:"5.2",sepalWidth:"2.7",petalLength:"3.9",petalWidth:"1.4",species:"versicolor"},{sepalLength:"5.0",sepalWidth:"2.0",petalLength:"3.5",petalWidth:"1.0",species:"versicolor"},{sepalLength:"5.9",sepalWidth:"3.0",petalLength:"4.2",petalWidth:"1.5",species:"versicolor"},{sepalLength:"6.0",sepalWidth:"2.2",petalLength:"4.0",petalWidth:"1.0",species:"versicolor"},{sepalLength:"6.1",sepalWidth:"2.9",petalLength:"4.7",petalWidth:"1.4",species:"versicolor"},{sepalLength:"5.6",sepalWidth:"2.9",petalLength:"3.6",petalWidth:"1.3",species:"versicolor"},{sepalLength:"6.7",sepalWidth:"3.1",petalLength:"4.4",petalWidth:"1.4",species:"versicolor"},{sepalLength:"5.6",sepalWidth:"3.0",petalLength:"4.5",petalWidth:"1.5",species:"versicolor"},{sepalLength:"5.8",sepalWidth:"2.7",petalLength:"4.1",petalWidth:"1.0",species:"versicolor"},{sepalLength:"6.2",sepalWidth:"2.2",petalLength:"4.5",petalWidth:"1.5",species:"versicolor"},{sepalLength:"5.6",sepalWidth:"2.5",petalLength:"3.9",petalWidth:"1.1",species:"versicolor"},{sepalLength:"5.9",sepalWidth:"3.2",petalLength:"4.8",petalWidth:"1.8",species:"versicolor"},{sepalLength:"6.1",sepalWidth:"2.8",petalLength:"4.0",petalWidth:"1.3",species:"versicolor"},{sepalLength:"6.3",sepalWidth:"2.5",petalLength:"4.9",petalWidth:"1.5",species:"versicolor"},{sepalLength:"6.1",sepalWidth:"2.8",petalLength:"4.7",petalWidth:"1.2",species:"versicolor"},{sepalLength:"6.4",sepalWidth:"2.9",petalLength:"4.3",petalWidth:"1.3",species:"versicolor"},{sepalLength:"6.6",sepalWidth:"3.0",petalLength:"4.4",petalWidth:"1.4",species:"versicolor"},{sepalLength:"6.8",sepalWidth:"2.8",petalLength:"4.8",petalWidth:"1.4",species:"versicolor"},{sepalLength:"6.7",sepalWidth:"3.0",petalLength:"5.0",petalWidth:"1.7",species:"versicolor"},{sepalLength:"6.0",sepalWidth:"2.9",petalLength:"4.5",petalWidth:"1.5",species:"versicolor"},{sepalLength:"5.7",sepalWidth:"2.6",petalLength:"3.5",petalWidth:"1.0",species:"versicolor"},{sepalLength:"5.5",sepalWidth:"2.4",petalLength:"3.8",petalWidth:"1.1",species:"versicolor"},{sepalLength:"5.5",sepalWidth:"2.4",petalLength:"3.7",petalWidth:"1.0",species:"versicolor"},{sepalLength:"5.8",sepalWidth:"2.7",petalLength:"3.9",petalWidth:"1.2",species:"versicolor"},{sepalLength:"6.0",sepalWidth:"2.7",petalLength:"5.1",petalWidth:"1.6",species:"versicolor"},{sepalLength:"5.4",sepalWidth:"3.0",petalLength:"4.5",petalWidth:"1.5",species:"versicolor"},{sepalLength:"6.0",sepalWidth:"3.4",petalLength:"4.5",petalWidth:"1.6",species:"versicolor"},{sepalLength:"6.7",sepalWidth:"3.1",petalLength:"4.7",petalWidth:"1.5",species:"versicolor"},{sepalLength:"6.3",sepalWidth:"2.3",petalLength:"4.4",petalWidth:"1.3",species:"versicolor"},{sepalLength:"5.6",sepalWidth:"3.0",petalLength:"4.1",petalWidth:"1.3",species:"versicolor"},{sepalLength:"5.5",sepalWidth:"2.5",petalLength:"4.0",petalWidth:"1.3",species:"versicolor"},{sepalLength:"5.5",sepalWidth:"2.6",petalLength:"4.4",petalWidth:"1.2",species:"versicolor"},{sepalLength:"6.1",sepalWidth:"3.0",petalLength:"4.6",petalWidth:"1.4",species:"versicolor"},{sepalLength:"5.8",sepalWidth:"2.6",petalLength:"4.0",petalWidth:"1.2",species:"versicolor"},{sepalLength:"5.0",sepalWidth:"2.3",petalLength:"3.3",petalWidth:"1.0",species:"versicolor"},{sepalLength:"5.6",sepalWidth:"2.7",petalLength:"4.2",petalWidth:"1.3",species:"versicolor"},{sepalLength:"5.7",sepalWidth:"3.0",petalLength:"4.2",petalWidth:"1.2",species:"versicolor"},{sepalLength:"5.7",sepalWidth:"2.9",petalLength:"4.2",petalWidth:"1.3",species:"versicolor"},{sepalLength:"6.2",sepalWidth:"2.9",petalLength:"4.3",petalWidth:"1.3",species:"versicolor"},{sepalLength:"5.1",sepalWidth:"2.5",petalLength:"3.0",petalWidth:"1.1",species:"versicolor"},{sepalLength:"5.7",sepalWidth:"2.8",petalLength:"4.1",petalWidth:"1.3",species:"versicolor"},{sepalLength:"6.3",sepalWidth:"3.3",petalLength:"6.0",petalWidth:"2.5",species:"virginica"},{sepalLength:"5.8",sepalWidth:"2.7",petalLength:"5.1",petalWidth:"1.9",species:"virginica"},{sepalLength:"7.1",sepalWidth:"3.0",petalLength:"5.9",petalWidth:"2.1",species:"virginica"},{sepalLength:"6.3",sepalWidth:"2.9",petalLength:"5.6",petalWidth:"1.8",species:"virginica"},{sepalLength:"6.5",sepalWidth:"3.0",petalLength:"5.8",petalWidth:"2.2",species:"virginica"},{sepalLength:"7.6",sepalWidth:"3.0",petalLength:"6.6",petalWidth:"2.1",species:"virginica"},{sepalLength:"4.9",sepalWidth:"2.5",petalLength:"4.5",petalWidth:"1.7",species:"virginica"},{sepalLength:"7.3",sepalWidth:"2.9",petalLength:"6.3",petalWidth:"1.8",species:"virginica"},{sepalLength:"6.7",sepalWidth:"2.5",petalLength:"5.8",petalWidth:"1.8",species:"virginica"},{sepalLength:"7.2",sepalWidth:"3.6",petalLength:"6.1",petalWidth:"2.5",species:"virginica"},{sepalLength:"6.5",sepalWidth:"3.2",petalLength:"5.1",petalWidth:"2.0",species:"virginica"},{sepalLength:"6.4",sepalWidth:"2.7",petalLength:"5.3",petalWidth:"1.9",species:"virginica"},{sepalLength:"6.8",sepalWidth:"3.0",petalLength:"5.5",petalWidth:"2.1",species:"virginica"},{sepalLength:"5.7",sepalWidth:"2.5",petalLength:"5.0",petalWidth:"2.0",species:"virginica"},{sepalLength:"5.8",sepalWidth:"2.8",petalLength:"5.1",petalWidth:"2.4",species:"virginica"},{sepalLength:"6.4",sepalWidth:"3.2",petalLength:"5.3",petalWidth:"2.3",species:"virginica"},{sepalLength:"6.5",sepalWidth:"3.0",petalLength:"5.5",petalWidth:"1.8",species:"virginica"},{sepalLength:"7.7",sepalWidth:"3.8",petalLength:"6.7",petalWidth:"2.2",species:"virginica"},{sepalLength:"7.7",sepalWidth:"2.6",petalLength:"6.9",petalWidth:"2.3",species:"virginica"},{sepalLength:"6.0",sepalWidth:"2.2",petalLength:"5.0",petalWidth:"1.5",species:"virginica"},{sepalLength:"6.9",sepalWidth:"3.2",petalLength:"5.7",petalWidth:"2.3",species:"virginica"},{sepalLength:"5.6",sepalWidth:"2.8",petalLength:"4.9",petalWidth:"2.0",species:"virginica"},{sepalLength:"7.7",sepalWidth:"2.8",petalLength:"6.7",petalWidth:"2.0",species:"virginica"},{sepalLength:"6.3",sepalWidth:"2.7",petalLength:"4.9",petalWidth:"1.8",species:"virginica"},{sepalLength:"6.7",sepalWidth:"3.3",petalLength:"5.7",petalWidth:"2.1",species:"virginica"},{sepalLength:"7.2",sepalWidth:"3.2",petalLength:"6.0",petalWidth:"1.8",species:"virginica"},{sepalLength:"6.2",sepalWidth:"2.8",petalLength:"4.8",petalWidth:"1.8",species:"virginica"},{sepalLength:"6.1",sepalWidth:"3.0",petalLength:"4.9",petalWidth:"1.8",species:"virginica"},{sepalLength:"6.4",sepalWidth:"2.8",petalLength:"5.6",petalWidth:"2.1",species:"virginica"},{sepalLength:"7.2",sepalWidth:"3.0",petalLength:"5.8",petalWidth:"1.6",species:"virginica"},{sepalLength:"7.4",sepalWidth:"2.8",petalLength:"6.1",petalWidth:"1.9",species:"virginica"},{sepalLength:"7.9",sepalWidth:"3.8",petalLength:"6.4",petalWidth:"2.0",species:"virginica"},{sepalLength:"6.4",sepalWidth:"2.8",petalLength:"5.6",petalWidth:"2.2",species:"virginica"},{sepalLength:"6.3",sepalWidth:"2.8",petalLength:"5.1",petalWidth:"1.5",species:"virginica"},{sepalLength:"6.1",sepalWidth:"2.6",petalLength:"5.6",petalWidth:"1.4",species:"virginica"},{sepalLength:"7.7",sepalWidth:"3.0",petalLength:"6.1",petalWidth:"2.3",species:"virginica"},{sepalLength:"6.3",sepalWidth:"3.4",petalLength:"5.6",petalWidth:"2.4",species:"virginica"},{sepalLength:"6.4",sepalWidth:"3.1",petalLength:"5.5",petalWidth:"1.8",species:"virginica"},{sepalLength:"6.0",sepalWidth:"3.0",petalLength:"4.8",petalWidth:"1.8",species:"virginica"},{sepalLength:"6.9",sepalWidth:"3.1",petalLength:"5.4",petalWidth:"2.1",species:"virginica"},{sepalLength:"6.7",sepalWidth:"3.1",petalLength:"5.6",petalWidth:"2.4",species:"virginica"},{sepalLength:"6.9",sepalWidth:"3.1",petalLength:"5.1",petalWidth:"2.3",species:"virginica"},{sepalLength:"5.8",sepalWidth:"2.7",petalLength:"5.1",petalWidth:"1.9",species:"virginica"},{sepalLength:"6.8",sepalWidth:"3.2",petalLength:"5.9",petalWidth:"2.3",species:"virginica"},{sepalLength:"6.7",sepalWidth:"3.3",petalLength:"5.7",petalWidth:"2.5",species:"virginica"},{sepalLength:"6.7",sepalWidth:"3.0",petalLength:"5.2",petalWidth:"2.3",species:"virginica"},{sepalLength:"6.3",sepalWidth:"2.5",petalLength:"5.0",petalWidth:"1.9",species:"virginica"},{sepalLength:"6.5",sepalWidth:"3.0",petalLength:"5.2",petalWidth:"2.0",species:"virginica"},{sepalLength:"6.2",sepalWidth:"3.4",petalLength:"5.4",petalWidth:"2.3",species:"virginica"},{sepalLength:"5.9",sepalWidth:"3.0",petalLength:"5.1",petalWidth:"1.8",species:"virginica"}];


    var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = parseInt($(id).css("width")) - margin.left - margin.right,
        height = parseInt($(id).css("height")) - margin.top - margin.bottom;

    var x = d3.scale.linear()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var color = d3.scale.category10();

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var svg = d3.select(id).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // 将字符串数字改成数字类型
    data.forEach(function(d) {
        d.petalWidth = +d.petalWidth;
        d.petalLength = +d.petalLength;
        d.sepalWidth = +d.sepalWidth;
        d.sepalLength = +d.sepalLength;
    });

    // 找出最大值和最小值，并定义x和y轴的输出域
    x.domain(d3.extent(data, function(d) { return d.sepalWidth; })).nice();
    y.domain(d3.extent(data, function(d) { return d.sepalLength; })).nice();

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
        .attr("class", "label")
        .attr("x", width)
        .attr("y", -6)
        .style("text-anchor", "end")
        .text("Sepal Width (cm)");

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("class", "label")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Sepal Length (cm)")

    svg.selectAll(".dot")
        .data(data)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("r", 3.5)
        .attr("cx", function(d) { return x(d.sepalWidth); })
        .attr("cy", function(d) { return y(d.sepalLength); })
        .style("fill", function(d) { return color(d.species); });

    var legend = svg.selectAll(".legend")
        .data(color.domain())
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

    legend.append("rect")
        .attr("x", width - 18)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", color);

    legend.append("text")
        .attr("x", width - 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .text(function(d) { return d; });
}

// 2017-10-31 区域图
function areaChart(id){
    function get_colors(n) {
        var colors = ["#a6cee3","#1f78b4","#b2df8a","#33a02c",
            "#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6",
            "#6a3d9a"];

        return colors[ n % colors.length];}

    var margin = {top: 30, right: 130, bottom: 50, left: 60},
        width = parseInt($(id).css("width")) - margin.left - margin.right,
        height = parseInt($(id).css("height")) - margin.top - margin.bottom;

    var data = [{hour:"0",assault:"60",burglary:"15",larceny_theft:"124",missing_person:"12",non_criminal:"45",other_offenses:"105",suspicious_occ:"23",vandalism:"25",vehicle_related:"18",warrants:"16"},{hour:"1",assault:"41",burglary:"21",larceny_theft:"75",missing_person:"7",non_criminal:"32",other_offenses:"50",suspicious_occ:"18",vandalism:"32",vehicle_related:"10",warrants:"12"},{hour:"2",assault:"55",burglary:"15",larceny_theft:"49",missing_person:"1",non_criminal:"11",other_offenses:"39",suspicious_occ:"16",vandalism:"24",vehicle_related:"15",warrants:"10"},{hour:"3",assault:"39",burglary:"17",larceny_theft:"34",missing_person:"4",non_criminal:"21",other_offenses:"38",suspicious_occ:"9",vandalism:"21",vehicle_related:"7",warrants:"10"},{hour:"4",assault:"12",burglary:"29",larceny_theft:"27",missing_person:"2",non_criminal:"11",other_offenses:"17",suspicious_occ:"7",vandalism:"18",vehicle_related:"6",warrants:"2"},{hour:"5",assault:"16",burglary:"17",larceny_theft:"24",missing_person:"4",non_criminal:"12",other_offenses:"16",suspicious_occ:"4",vandalism:"16",vehicle_related:"8",warrants:"4"},{hour:"6",assault:"21",burglary:"14",larceny_theft:"47",missing_person:"7",non_criminal:"35",other_offenses:"26",suspicious_occ:"7",vandalism:"16",vehicle_related:"14",warrants:"10"},{hour:"7",assault:"26",burglary:"12",larceny_theft:"46",missing_person:"9",non_criminal:"38",other_offenses:"42",suspicious_occ:"13",vandalism:"16",vehicle_related:"21",warrants:"17"},{hour:"8",assault:"37",burglary:"18",larceny_theft:"96",missing_person:"15",non_criminal:"76",other_offenses:"67",suspicious_occ:"16",vandalism:"19",vehicle_related:"18",warrants:"15"},{hour:"9",assault:"41",burglary:"23",larceny_theft:"122",missing_person:"22",non_criminal:"68",other_offenses:"68",suspicious_occ:"26",vandalism:"18",vehicle_related:"23",warrants:"15"},{hour:"10",assault:"52",burglary:"16",larceny_theft:"152",missing_person:"18",non_criminal:"76",other_offenses:"77",suspicious_occ:"27",vandalism:"22",vehicle_related:"27",warrants:"17"},{hour:"11",assault:"47",burglary:"17",larceny_theft:"182",missing_person:"20",non_criminal:"83",other_offenses:"63",suspicious_occ:"35",vandalism:"21",vehicle_related:"17",warrants:"15"},{hour:"12",assault:"51",burglary:"23",larceny_theft:"188",missing_person:"24",non_criminal:"115",other_offenses:"100",suspicious_occ:"37",vandalism:"41",vehicle_related:"33",warrants:"30"},{hour:"13",assault:"62",burglary:"16",larceny_theft:"205",missing_person:"13",non_criminal:"76",other_offenses:"83",suspicious_occ:"27",vandalism:"41",vehicle_related:"20",warrants:"22"},{hour:"14",assault:"51",burglary:"22",larceny_theft:"206",missing_person:"19",non_criminal:"74",other_offenses:"91",suspicious_occ:"23",vandalism:"33",vehicle_related:"21",warrants:"24"},{hour:"15",assault:"47",burglary:"32",larceny_theft:"198",missing_person:"22",non_criminal:"76",other_offenses:"98",suspicious_occ:"29",vandalism:"37",vehicle_related:"29",warrants:"29"},{hour:"16",assault:"53",burglary:"21",larceny_theft:"231",missing_person:"9",non_criminal:"87",other_offenses:"117",suspicious_occ:"27",vandalism:"37",vehicle_related:"40",warrants:"31"},{hour:"17",assault:"57",burglary:"36",larceny_theft:"295",missing_person:"17",non_criminal:"96",other_offenses:"100",suspicious_occ:"28",vandalism:"49",vehicle_related:"48",warrants:"30"},{hour:"18",assault:"54",burglary:"31",larceny_theft:"345",missing_person:"20",non_criminal:"71",other_offenses:"62",suspicious_occ:"27",vandalism:"70",vehicle_related:"53",warrants:"22"},{hour:"19",assault:"79",burglary:"32",larceny_theft:"357",missing_person:"9",non_criminal:"82",other_offenses:"94",suspicious_occ:"29",vandalism:"57",vehicle_related:"34",warrants:"18"},{hour:"20",assault:"62",burglary:"21",larceny_theft:"284",missing_person:"13",non_criminal:"67",other_offenses:"62",suspicious_occ:"25",vandalism:"51",vehicle_related:"48",warrants:"21"},{hour:"21",assault:"49",burglary:"26",larceny_theft:"220",missing_person:"5",non_criminal:"51",other_offenses:"79",suspicious_occ:"13",vandalism:"50",vehicle_related:"44",warrants:"10"},{hour:"22",assault:"56",burglary:"24",larceny_theft:"157",missing_person:"22",non_criminal:"70",other_offenses:"82",suspicious_occ:"16",vandalism:"60",vehicle_related:"49",warrants:"20"},{hour:"23",assault:"61",burglary:"19",larceny_theft:"154",missing_person:"12",non_criminal:"73",other_offenses:"78",suspicious_occ:"24",vandalism:"48",vehicle_related:"39",warrants:"22"}];

    // console.log(data)

    var x = d3.scale.linear()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var color = d3.scale.category10();

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .ticks(24, "s");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(5, "s");

    var area = d3.svg.area()
        .x(function(d) { return x(d.hour); })
        .y0(function(d) { return y(d.y0); })
        .y1(function(d) { return y(d.y0 + d.y); });


    var stack = d3.layout.stack()
        .values(function(d) { return d.values; });

    var svg = d3.select(id).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    color.domain(d3.keys(data[0]).filter(function(key) {return key !== "hour"; }));

    data.forEach(function(d) {
        d.hour = +d.hour;
        d.burglary = +d.burglary;
        d.assault= +d.assault;
        d.larceny_theft= +d.larceny_theft;
        d.vehicle_related = +d.vehicle_related;
        d.missing_person = +d.missing_person;
        d.non_criminal = +d.non_criminal;
        d.other_offenses = +d.other_offenses;
        d.suspicious_occ = +d.suspicious_occ;
        d.warrants = +d.warrants;
    });



    var browsers = stack(color.domain().map(function(name) {
        return {
            name: name,
            values: data.map(function(d) {
                return {hour: d.hour, y: d[name] * 1};
            })
        };
    }));

    var maxHourVal = d3.max(data, function(d){
        var vals = d3.keys(d).map(
            function(key){
                return key !== "hour" ? d[key] : 0 });
        return d3.sum(vals);
    });

    x.domain(d3.extent(data, function(d) { return d.hour; }));
    y.domain([0, 800])

    var browser = svg.selectAll(".browser")
        .data(browsers)
        .enter().append("g")
        .attr("class", "browser");

    browser.append("path")
        .attr("class", "area")
        .attr("d", function(d) { return area(d.values); })
        .style("fill", function(d,i) {
            return get_colors(i); });

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis).append("text")
        .attr("x", 350)
        .attr("y", 36)
        .attr("fill", "#000")
//            .text("Hour of Time")
//            .style("font-weight", "bold");

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -250)
        .attr("y", -40)
        .attr("dy", "0.3408em")
        .attr("fill", "#000")
//            .text("Number of Incidents")
//            .style("font-weight", "bold");

    var legend = svg.selectAll(".legend")
        .data(color.domain()).enter()
        .append("g")
        .attr("class","legend")
        .attr("transform", "translate(" + (width +20) + "," + 0+ ")");

    legend.append("rect")
        .attr("x", 0)
        .attr("y", function(d, i) { return 20 * i; })
        .attr("width", 10)
        .attr("height", 10)
        .style("fill", function(d, i) {
            return get_colors(i);});

    legend.append("text")
        .attr("x", 20)
        .attr("dy", "0.75em")
        .attr("y", function(d, i) { return 20 * i; })
        .text(function(d) {return d});
}

// 2017-11-1 矩形图
function rectangle(id){
    var correlationMatrix = [
        [1, 0.3, 0, 0.8, 0, 0.2, 1, 0.5, 0, 0.75],
        [0.3, 1, 0.5, 0.2, 0.4, 0.3, 0.8, 0.1, 1, 0],
        [0, 0.5, 1, 0.4, 0, 0.9, 0, 0.2, 1, 0.3],
        [0.8, 0.2, 0.4, 1, 0.3, 0.4, 0.1, 1, 0.2, 0.9],
        [0, 0.4, 0, 0.3, 1, 0.1, 0.4, 0, 0.6, 0.7],
        [0.2, 0.3, 0.9, 0.4, 0.1, 1, 0, 0.1, 0.4, 0.1],
        [1, 0.8, 0, 0.1, 0.4, 0, 1, 0.5, 0, 1],
        [0.5, 0.1, 0.2, 1, 0.1, 0, 0.5, 1, 0, 0.4],
        [0, 1, 1, 0.2, 0.6, 0.4, 0, 0, 1, 0.6],
        [0.75, 0, 0.3, 0.9, 0.7, 0.1, 1, 0.4, 0.6, 1]
    ];

    var labels = ['Var 1', 'Var 2', 'Var 3', 'Var 4', 'Var 5', 'Var 6', 'Var 7', 'Var 8', 'Var 9', 'Var 10'];

    Matrix({
        container : id,
        data      : correlationMatrix,
        labels    : labels,
        start_color : '#ffffff',
        end_color : '#3498db'
    });

    function Matrix(options) {
//            {top: 30, right: 130, bottom: 50, left: 60},
        var margin = {top: 30, right: 120, bottom: 50, left: 60},
            container = options.container,
            width = parseInt($(container).css("width")) - margin.left - margin.right,
            height = parseInt($(container).css("height")) - margin.top - margin.bottom,
            data = options.data,
            labelsData = options.labels,
            startColor = options.start_color,
            endColor = options.end_color;

        var widthLegend = 100;   // 右侧栏宽度

        if(!data){
            throw new Error('Please pass data');
        }

        if(!Array.isArray(data) || !data.length || !Array.isArray(data[0])){
            throw new Error('It should be a 2-D array');
        }

        var maxValue = d3.max(data, function(layer) { return d3.max(layer, function(d) { return d; }); });
        var minValue = d3.min(data, function(layer) { return d3.min(layer, function(d) { return d; }); });

        var numrows = data.length;
        var numcols = data[0].length;

        var svg = d3.select(container).append("svg")
            .attr("width", width + margin.left + margin.right - widthLegend)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var background = svg.append("rect")
            .style("stroke", "black")
            .style("stroke-width", "2px")
            .attr("width", width)
            .attr("height", height);

        var x = d3.scale.ordinal()
            .domain(d3.range(numcols))
            .rangeBands([0, width]);

        var y = d3.scale.ordinal()
            .domain(d3.range(numrows))
            .rangeBands([0, height]);

        var colorMap = d3.scale.linear()
            .domain([minValue,maxValue])
            .range([startColor, endColor]);

        var row = svg.selectAll(".row")
            .data(data)
            .enter().append("g")
            .attr("class", "row")
            .attr("transform", function(d, i) { return "translate(0," + y(i) + ")"; });

        var cell = row.selectAll(".cell")
            .data(function(d) { return d; })
            .enter().append("g")
            .attr("class", "cell")
            .attr("transform", function(d, i) { return "translate(" + x(i) + ", 0)"; });

        cell.append('rect')
            .attr("width", x.rangeBand())
            .attr("height", y.rangeBand())
            .style("stroke-width", 0);

        cell.append("text")
            .attr("dy", ".32em")
            .attr("x", x.rangeBand() / 2)
            .attr("y", y.rangeBand() / 2)
            .attr("text-anchor", "middle")
            .style("fill", function(d, i) { return d >= maxValue/2 ? 'white' : 'black'; })
            .text(function(d, i) { return d; });

        row.selectAll(".cell")
            .data(function(d, i) { return data[i]; })
            .style("fill", colorMap);

        var labels = svg.append('g')
            .attr('class', "labels");

        var columnLabels = labels.selectAll(".column-label")
            .data(labelsData)
            .enter().append("g")
            .attr("class", "column-label")
            .attr("transform", function(d, i) { return "translate(" + x(i) + "," + height + ")"; });

        columnLabels.append("line")
            .style("stroke", "black")
            .style("stroke-width", "1px")
            .attr("x1", x.rangeBand() / 2)
            .attr("x2", x.rangeBand() / 2)
            .attr("y1", 0)
            .attr("y2", 5);

        columnLabels.append("text")
            .attr("x", 0)
            .attr("y", y.rangeBand() / 2)
            .attr("dy", ".82em")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-60)")
            .text(function(d, i) { return d; });

        var rowLabels = labels.selectAll(".row-label")
            .data(labelsData)
            .enter().append("g")
            .attr("class", "row-label")
            .attr("transform", function(d, i) { return "translate(" + 0 + "," + y(i) + ")"; });

        rowLabels.append("line")
            .style("stroke", "black")
            .style("stroke-width", "1px")
            .attr("x1", 0)
            .attr("x2", -5)
            .attr("y1", y.rangeBand() / 2)
            .attr("y2", y.rangeBand() / 2);

        rowLabels.append("text")
            .attr("x", -8)
            .attr("y", y.rangeBand() / 2)
            .attr("dy", ".32em")
            .attr("text-anchor", "end")
            .text(function(d, i) { return d; });

        var key = d3.select(container)
            .append("svg")
            .attr("width", widthLegend)
            .attr("height", height + margin.top + margin.bottom);

        var legend = key
            .append("defs")
            .append("svg:linearGradient")
            .attr("id", "gradient")
            .attr("x1", "100%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "100%")
            .attr("spreadMethod", "pad");

        legend
            .append("stop")
            .attr("offset", "0%")
            .attr("stop-color", endColor)
            .attr("stop-opacity", 1);

        legend
            .append("stop")
            .attr("offset", "100%")
            .attr("stop-color", startColor)
            .attr("stop-opacity", 1);

        key.append("rect")
            .attr("width", widthLegend/2-10)
            .attr("height", height)
            .style("fill", "url(#gradient)")
            .attr("transform", "translate(0," + margin.top + ")");

        var y = d3.scale.linear()
            .range([height, 0])
            .domain([minValue, maxValue]);

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("right");

        key.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(41," + margin.top + ")")
            .call(yAxis)
    }
}

// 2017-11-1 甘特图
function ganttChart(id,total){
    /*  甘特图插件 http://static.mentful.com/gantt-chart-d3v2.js  */
    d3.gantt = function () {
        var r = "fit";
        var k = "fixed";
        var t = {
            top: 20,
            right: 40,
            bottom: 20,
            left: 50
        };
        var c = d3.time.day.offset(new Date(), -3);
        var l = d3.time.hour.offset(new Date(), +3);
        var h = r;
        var m = [];
        var p = [];
        var s = parseInt($(id).css("height")) - t.top - t.bottom - 5;
        var n = parseInt($(id).css("width")) - t.right - t.left - 5;
        var o = "%H:%M";
        var f = function (u) {
            return u.startDate + u.taskName + u.endDate
        };
        var e = function (u) {
            return "translate(" + j(u.startDate) + "," + i(u.taskName) + ")"
        };
        var j = d3.time.scale().domain([c, l]).range([0, n]).clamp(true);
        var i = d3.scale.ordinal().domain(m).rangeRoundBands([0, s - t.top - t.bottom], 0.1);
        var g = d3.svg.axis().scale(j).orient("bottom").tickFormat(d3.time.format(o)).tickSubdivide(true).tickSize(
            8).tickPadding(8);
        var a = d3.svg.axis().scale(i).orient("left").tickSize(0);
        var d = function () {
            if (h === r) {
                if (tasks === undefined || tasks.length < 1) {
                    c = d3.time.day.offset(new Date(), -3);
                    l = d3.time.hour.offset(new Date(), +3);
                    return
                }
                tasks.sort(function (v, u) {
                    return v.endDate - u.endDate
                });
                l = tasks[tasks.length - 1].endDate;
                tasks.sort(function (v, u) {
                    return v.startDate - u.startDate
                });
                c = tasks[0].startDate
            }
        };
        var b = function () {
            j = d3.time.scale().domain([c, l]).range([0, n]).clamp(true);
            i = d3.scale.ordinal().domain(m).rangeRoundBands([0, s - t.top - t.bottom], 0.1);
            g = d3.svg.axis().scale(j).orient("bottom").tickFormat(d3.time.format(o)).tickSubdivide(true).tickSize(
                8).tickPadding(8);
            a = d3.svg.axis().scale(i).orient("left").tickSize(0)
        };

        function q(v) {
            d();
            b();
            var u = d3.select(id).append("svg").attr("class", "chart").attr("width", n + t.left + t.right).attr(
                "height", s + t.top + t.bottom).append("g").attr("class", "gantt-chart").attr("width", n + t.left +
                t.right).attr("height", s + t.top + t.bottom).attr("transform", "translate(" + t.left + ", " + t.top +
                ")");
            u.selectAll(".chart").data(v, f).enter().append("rect").attr("rx", 5).attr("ry", 5).attr("class", function (
                w) {
                if (p[w.status] == null) {
                    return "bar"
                }
                return p[w.status]
            }).attr("y", 0).attr("transform", e).attr("height", function (w) {
                return i.rangeBand()
            }).attr("width", function (w) {
                return (j(w.endDate) - j(w.startDate))
            });
            u.append("g").attr("class", "x axis").attr("transform", "translate(0, " + (s - t.top - t.bottom) + ")")
                .transition().call(g);
            u.append("g").attr("class", "y axis").transition().call(a);
            return q
        }
        q.redraw = function (x) {
            d();
            b();
            var u = d3.select("svg");
            var v = u.select(".gantt-chart");
            var w = v.selectAll("rect").data(x, f);
            w.enter().insert("rect", ":first-child").attr("rx", 5).attr("ry", 5).attr("class", function (y) {
                if (p[y.status] == null) {
                    return "bar"
                }
                return p[y.status]
            }).transition().attr("y", 0).attr("transform", e).attr("height", function (y) {
                return i.rangeBand()
            }).attr("width", function (y) {
                return (j(y.endDate) - j(y.startDate))
            });
            w.transition().attr("transform", e).attr("height", function (y) {
                return i.rangeBand()
            }).attr("width", function (y) {
                return (j(y.endDate) - j(y.startDate))
            });
            w.exit().remove();
            u.select(".x").transition().call(g);
            u.select(".y").transition().call(a);
            return q
        };
        q.margin = function (u) {
            if (!arguments.length) {
                return t
            }
            t = u;
            return q
        };
        q.timeDomain = function (u) {
            if (!arguments.length) {
                return [c, l]
            }
            c = +u[0], l = +u[1];
            return q
        };
        q.timeDomainMode = function (u) {
            if (!arguments.length) {
                return h
            }
            h = u;
            return q
        };
        q.taskTypes = function (u) {
            if (!arguments.length) {
                return m
            }
            m = u;
            return q
        };
        q.taskStatus = function (u) {
            if (!arguments.length) {
                return p
            }
            p = u;
            return q
        };
        q.width = function (u) {
            if (!arguments.length) {
                return n
            }
            n = +u;
            return q
        };
        q.height = function (u) {
            if (!arguments.length) {
                return s
            }
            s = +u;
            return q
        };
        q.tickFormat = function (u) {
            if (!arguments.length) {
                return o
            }
            o = u;
            return q
        };
        return q
    };



    var tasks = [
        {"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"E Job","status":"RUNNING"},
        {"startDate":new Date("Sun Dec 09 04:56:32 EST 2012"),"endDate":new Date("Sun Dec 09 06:35:47 EST 2012"),"taskName":"A Job","status":"RUNNING"},
        {"startDate":new Date("Sun Dec 09 06:29:53 EST 2012"),"endDate":new Date("Sun Dec 09 06:34:04 EST 2012"),"taskName":"D Job","status":"RUNNING"},
        {"startDate":new Date("Sun Dec 09 05:35:21 EST 2012"),"endDate":new Date("Sun Dec 09 06:21:22 EST 2012"),"taskName":"P Job","status":"RUNNING"},
        {"startDate":new Date("Sun Dec 09 05:00:06 EST 2012"),"endDate":new Date("Sun Dec 09 05:05:07 EST 2012"),"taskName":"D Job","status":"RUNNING"},
        {"startDate":new Date("Sun Dec 09 03:46:59 EST 2012"),"endDate":new Date("Sun Dec 09 04:54:19 EST 2012"),"taskName":"P Job","status":"RUNNING"},
        {"startDate":new Date("Sun Dec 09 04:02:45 EST 2012"),"endDate":new Date("Sun Dec 09 04:48:56 EST 2012"),"taskName":"N Job","status":"RUNNING"},
        {"startDate":new Date("Sun Dec 09 03:27:35 EST 2012"),"endDate":new Date("Sun Dec 09 03:58:43 EST 2012"),"taskName":"E Job","status":"SUCCEEDED"},
        {"startDate":new Date("Sun Dec 09 01:40:11 EST 2012"),"endDate":new Date("Sun Dec 09 03:26:35 EST 2012"),"taskName":"A Job","status":"SUCCEEDED"},
        {"startDate":new Date("Sun Dec 09 03:00:03 EST 2012"),"endDate":new Date("Sun Dec 09 03:09:51 EST 2012"),"taskName":"D Job","status":"SUCCEEDED"},
        {"startDate":new Date("Sun Dec 09 01:21:00 EST 2012"),"endDate":new Date("Sun Dec 09 02:51:42 EST 2012"),"taskName":"P Job","status":"SUCCEEDED"},
        {"startDate":new Date("Sun Dec 09 01:08:42 EST 2012"),"endDate":new Date("Sun Dec 09 01:33:42 EST 2012"),"taskName":"N Job","status":"FAILED"},
        {"startDate":new Date("Sun Dec 09 00:27:15 EST 2012"),"endDate":new Date("Sun Dec 09 00:54:56 EST 2012"),"taskName":"E Job","status":"SUCCEEDED"},
        {"startDate":new Date("Sun Dec 09 00:29:48 EST 2012"),"endDate":new Date("Sun Dec 09 00:44:50 EST 2012"),"taskName":"D Job","status":"SUCCEEDED"},
        {"startDate":new Date("Sun Dec 09 07:39:21 EST 2012"),"endDate":new Date("Sun Dec 09 07:43:22 EST 2012"),"taskName":"P Job","status":"RUNNING"},
        {"startDate":new Date("Sun Dec 09 07:00:06 EST 2012"),"endDate":new Date("Sun Dec 09 07:05:07 EST 2012"),"taskName":"D Job","status":"RUNNING"},
        {"startDate":new Date("Sun Dec 09 08:46:59 EST 2012"),"endDate":new Date("Sun Dec 09 09:54:19 EST 2012"),"taskName":"P Job","status":"RUNNING"},
        {"startDate":new Date("Sun Dec 09 09:02:45 EST 2012"),"endDate":new Date("Sun Dec 09 09:48:56 EST 2012"),"taskName":"N Job","status":"RUNNING"},
        {"startDate":new Date("Sun Dec 09 08:27:35 EST 2012"),"endDate":new Date("Sun Dec 09 08:58:43 EST 2012"),"taskName":"E Job","status":"SUCCEEDED"},
        {"startDate":new Date("Sun Dec 09 08:40:11 EST 2012"),"endDate":new Date("Sun Dec 09 08:46:35 EST 2012"),"taskName":"A Job","status":"SUCCEEDED"},
        {"startDate":new Date("Sun Dec 09 08:00:03 EST 2012"),"endDate":new Date("Sun Dec 09 08:09:51 EST 2012"),"taskName":"D Job","status":"SUCCEEDED"},
        {"startDate":new Date("Sun Dec 09 10:21:00 EST 2012"),"endDate":new Date("Sun Dec 09 10:51:42 EST 2012"),"taskName":"P Job","status":"SUCCEEDED"},
        {"startDate":new Date("Sun Dec 09 11:08:42 EST 2012"),"endDate":new Date("Sun Dec 09 11:33:42 EST 2012"),"taskName":"N Job","status":"FAILED"},
        {"startDate":new Date("Sun Dec 09 12:27:15 EST 2012"),"endDate":new Date("Sun Dec 09 12:54:56 EST 2012"),"taskName":"E Job","status":"SUCCEEDED"},
        {"startDate":new Date("Sat Dec 08 23:12:24 EST 2012"),"endDate":new Date("Sun Dec 09 00:26:13 EST 2012"),"taskName":"A Job","status":"KILLED"}];

    var taskStatus = {
        "SUCCEEDED" : "bar",
        "FAILED" : "bar-failed",
        "RUNNING" : "bar-running",
        "KILLED" : "bar-killed"
    };

    var taskNames = [ "D Job", "P Job", "E Job", "A Job", "N Job" ];

    tasks.sort(function(a, b) {
        return a.endDate - b.endDate;
    });
    var maxDate = tasks[tasks.length - 1].endDate;
    tasks.sort(function(a, b) {
        return a.startDate - b.startDate;
    });
    var minDate = tasks[0].startDate;

    var format = "%H:%M";

    var gantt = d3.gantt().taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format);
    gantt(tasks);
}

// 2917011-2 仪表盘
function meterChart(id,data){
    !function(){function t(t){for(;t>r;)t-=r;for(;0>t;)t+=r;return t}function e(t,e){return{x:t*Math.cos(e),y:t*Math.sin(e)}}var n={version:"1.0.3"},r=2*Math.PI,a=Math.PI,i=Math.PI/2;n.bP=function(){function t(i){h=i,i.each(function(){var i=d3.select(this),o=t.bars(),u=i.selectAll(".subBars").data(o.subBars).enter().append("g").attr("transform",function(t){return"translate("+t.x+","+t.y+")"}).attr("class","subBars").append("rect").attr("x",e).attr("y",n).attr("width",r).attr("height",a);"undefined"!=typeof y&&u.style("fill",function(t){return y(t)});var s=i.selectAll(".edges").data(o.edges).enter().append("path").attr("class","edges").attr("d",function(t){return t.path}).style("fill-opacity",t.edgeOpacity());"undefined"!=typeof y&&s.style("fill",function(t){return y(t)}),i.selectAll(".mainBars").data(o.mainBars).enter().append("g").attr("transform",function(t){return"translate("+t.x+","+t.y+")"}).attr("class","mainBars").append("rect").attr("x",e).attr("y",n).attr("width",r).attr("height",a).style("fill-opacity",0).on("mouseover",t.mouseover).on("mouseout",t.mouseout)})}function e(t){return-t.width}function n(t){return-t.height}function r(t){return 2*t.width}function a(t){return 2*t.height}var i,o,u,s,f,c,d,l,g,p,y,h,m,v,x,k,A;return t.data=function(e){return arguments.length?(p=e,t):p},t.fill=function(e){return arguments.length?(y=e,t):y},t.keyPrimary=function(e){return arguments.length?(i=e,t):"undefined"!=typeof i?i:function(t){return t[0]}},t.sortPrimary=function(e){return arguments.length?(x=e,t):"undefined"!=typeof x?x:d3.ascending},t.keySecondary=function(e){return arguments.length?(o=e,t):"undefined"!=typeof o?o:function(t){return t[1]}},t.sortSecondary=function(e){return arguments.length?(k=e,t):"undefined"!=typeof k?k:d3.ascending},t.value=function(e){return arguments.length?(u=e,t):"undefined"!=typeof u?u:function(t){return t[2]}},t.width=function(e){return arguments.length?(s=e,t):"undefined"!=typeof s?s:400},t.height=function(e){return arguments.length?(f=e,t):"undefined"!=typeof f?f:600},t.barSize=function(e){return arguments.length?(d=e,t):"undefined"!=typeof d?d:35},t.min=function(e){return arguments.length?(l=e,t):"undefined"!=typeof l?l:0},t.orient=function(e){return arguments.length?(c=e,t):"undefined"!=typeof c?c:"vertical"},t.pad=function(e){return arguments.length?(g=e,t):"undefined"!=typeof g?g:0},t.duration=function(e){return arguments.length?(v=e,t):"undefined"!=typeof v?v:500},t.edgeOpacity=function(e){return arguments.length?(m=e,t):"undefined"!=typeof m?m:.4},t.edgeMode=function(e){return arguments.length?(A=e,t):"undefined"!=typeof A?A:"curved"},t.bars=function(e){function n(t,n){return"undefined"==typeof e||e.part===n||c[e.part](t)===e.key}function r(){var e=t.min()/2;s.primary.forEach(function(t){t.height<e&&(t.height=e)}),s.secondary.forEach(function(t){t.height<e&&(t.height=e)})}function a(e){function r(r){return n(r,e)?t.value()(r):0}var a=d3.nest().key("primary"==e?t.keyPrimary():t.keySecondary()).sortKeys("primary"==e?t.sortPrimary():t.sortSecondary()).rollup(function(t){return d3.sum(t,r)}).entries(t.data()),i=u(a,t.pad(),t.min(),0,"vertical"==d?t.height():t.width()),o=t.barSize();a.forEach(function(n,r){s[e].push({x:"horizontal"==d?(i[r].s+i[r].e)/2:"primary"==e?o/2:t.width()-o/2,y:"vertical"==d?(i[r].s+i[r].e)/2:"primary"==e?o/2:t.height()-o/2,height:"vertical"==d?(i[r].e-i[r].s)/2:o/2,width:"horizontal"==d?(i[r].e-i[r].s)/2:o/2,part:e,key:n.key,value:n.value,percent:i[r].p})})}function i(e){function r(r){return n(r,e)?t.value()(r):0}var a=d3.map(s[e],function(t){return t.key}),i=d3.nest().key("primary"==e?t.keyPrimary():t.keySecondary()).sortKeys("primary"==e?t.sortPrimary():t.sortSecondary()).key("secondary"==e?t.keyPrimary():t.keySecondary()).sortKeys("secondary"==e?t.sortPrimary():t.sortSecondary()).rollup(function(t){return d3.sum(t,r)}).entries(t.data());i.forEach(function(n){var r=a.get(n.key),i=u(n.values,0,0,"vertical"==d?r.y-r.height:r.x-r.width,"vertical"==d?r.y+r.height:r.x+r.width),o=t.barSize();n.values.forEach(function(a,u){f[e].push({x:"vertical"==d?"primary"==e?o/2:t.width()-o/2:(i[u].s+i[u].e)/2,y:"horizontal"==d?"primary"==e?o/2:t.height()-o/2:(i[u].s+i[u].e)/2,height:("vertical"==d?i[u].e-i[u].s:o)/2,width:("horizontal"==d?i[u].e-i[u].s:o)/2,part:e,primary:"primary"==e?n.key:a.key,secondary:"primary"==e?a.key:n.key,value:a.value,percent:i[u].p*r.percent,index:"primary"==e?n.key+"|"+a.key:a.key+"|"+n.key})})})}function o(){function e(t,e,n,r,i,o,u,s){if("straight"==a)return["M",t,",",e,"L",n,",",r,"L",i,",",o,"L",u,",",s,"z"].join("");var f=(t+n)/2,c=(i+u)/2;return["M",t,",",e,"C",f,",",e," ",f,",",r,",",n,",",r,"L",i,",",o,"C",c,",",o," ",c,",",s,",",u,",",s,"z"].join("")}function n(t,e,n,r,i,o,u,s){if("straight"==a)return["M",t,",",e,"L",n,",",r,"L",i,",",o,"L",u,",",s,"z"].join("");var f=(e+r)/2,c=(o+s)/2;return["M",t,",",e,"C",t,",",f," ",n,",",f,",",n,",",r,"L",i,",",o,"C",i,",",c," ",u,",",c,",",u,",",s,"z"].join("")}var r=d3.map(f.secondary,function(t){return t.index}),a=t.edgeMode();return f.primary.map(function(t){var a=r.get(t.index);return{path:"vertical"===d?e(t.x+t.width,t.y+t.height,a.x-a.width,a.y+a.height,a.x-a.width,a.y-a.height,t.x+t.width,t.y-t.height):n(t.x-t.width,t.y+t.height,a.x-a.width,a.y-a.height,a.x+a.width,a.y-a.height,t.x+t.width,t.y+t.height),primary:t.primary,secondary:t.secondary,value:t.value,percent:t.percent}})}function u(t,e,n,r,a){var i=n/(a-r-2*t.length*e),o=0,u=0,s=d3.sum(t,function(t){return t.values});t.forEach(function(t){t.values<i*s&&(o+=1,u+=t.values)});var f=1e-5>s?0:(a-r-2*t.length*e-o*n)/(s-u),c=r,d=[];return t.forEach(function(t){var r=t.values*f;d.push({s:c+e+(n>r?.5*(n-r):0),e:c+e+(n>r?.5*(n+r):r),p:1e-5>s?0:t.values/s}),c+=2*e+(n>r?n:r)}),d}var s={primary:[],secondary:[]},f={primary:[],secondary:[]},c={primary:t.keyPrimary(),secondary:t.keySecondary()},d=t.orient();return a("primary"),a("secondary"),i("primary"),i("secondary"),r(),{mainBars:s.primary.concat(s.secondary),subBars:f.primary.concat(f.secondary),edges:o()}},t.mouseover=function(i){var o=t.bars(i);h.selectAll(".mainBars").filter(function(t){return t.part===i.part&&t.key===i.key}).select("rect").style("stroke-opacity",1),h.selectAll(".subBars").data(o.subBars).transition().duration(t.duration()).attr("transform",function(t){return"translate("+t.x+","+t.y+")"}).select("rect").attr("x",e).attr("y",n).attr("width",r).attr("height",a);var u=h.selectAll(".edges").data(o.edges);u.filter(function(t){return t[i.part]===i.key}).transition().duration(t.duration()).style("fill-opacity",t.edgeOpacity()).attr("d",function(t){return t.path}),u.filter(function(t){return t[i.part]!==i.key}).transition().duration(t.duration()).style("fill-opacity",0).attr("d",function(t){return t.path}),h.selectAll(".mainBars").data(o.mainBars).transition().duration(t.duration()).attr("transform",function(t){return"translate("+t.x+","+t.y+")"}).select("rect").attr("x",e).attr("y",n).attr("width",r).attr("height",a)},t.mouseout=function(i){var o=t.bars();h.selectAll(".mainBars").filter(function(t){return t.part===i.part&&t.key===i.key}).select("rect").style("stroke-opacity",0),h.selectAll(".subBars").data(o.subBars).transition().duration(t.duration()).attr("transform",function(t){return"translate("+t.x+","+t.y+")"}).select("rect").attr("x",e).attr("y",n).attr("width",r).attr("height",a),h.selectAll(".edges").data(o.edges).transition().duration(t.duration()).style("fill-opacity",t.edgeOpacity()).attr("d",function(t){return t.path}),h.selectAll(".mainBars").data(o.mainBars).transition().duration(t.duration()).attr("transform",function(t){return"translate("+t.x+","+t.y+")"}).select("rect").attr("x",e).attr("y",n).attr("width",r).attr("height",a)},t},n.gg=function(){function t(e){g=e,e.each(function(){var e=d3.select(this),n=t.scale(),r=t.minorTickStart(),i=t.minorTickEnd(),o=t.majorTickStart(),u=t.majorTickEnd(),s=t.ticks(),f=t.majorTicks(),c=t.labelLocation(),d=t.outerRadius();e.append("circle").attr("r",d).style("fill","url(#vizgg3"+p+")").attr("class","face"),e.append("circle").attr("r",t.innerRadius()).style("fill","url(#vizgg2"+p+")").style("filter","url(#vizgg5"+p+")").attr("class","innerFace");var l=e.append("g");l.selectAll("line").data(s).enter().append("line").attr("class",function(t){return f(t)?"majorTicks":"minorTicks"}).attr("x1",function(t){return d*(f(t)?o:r)*Math.cos(n(t))}).attr("y1",function(t){return d*(f(t)?o:r)*Math.sin(n(t))}).attr("x2",function(t){return d*(f(t)?u:i)*Math.cos(n(t))}).attr("y2",function(t){return d*(f(t)?u:i)*Math.sin(n(t))}),e.selectAll("text").data(s.filter(f)).enter().append("text").attr("class","label").attr("x",function(t){return d*c*Math.cos(n(t))}).attr("y",function(t){return d*c*Math.sin(n(t))}).attr("dy",3).text(function(t){return t});var g=t.outerRadius()/b.outerRadius,y=180*t.scale()(t.value())/a+90;e.append("g").attr("transform","translate(1,1)").selectAll(".needleshadow").data([0]).enter().append("g").attr("transform","rotate("+y+")").attr("class","needleshadow").append("path").attr("d",["m 0",-130*g,5*g,175*g,-10*g,"0,z"].join(",")).style("filter","url(#vizgg6"+p+")"),e.selectAll(".needle").data([0]).enter().append("g").attr("transform","rotate("+y+")").attr("class","needle").append("polygon").attr("points",[-.5*g,-130*g,.5*g,-130*g,5*g,45*g,-5*g,45*g].join(",")).style("fill","url(#vizgg4"+p+")")})}var e,r,i,o,u,s,f,c,d,l,g,p,y,h,m,v,x,k,A,b={innerRadius:20,outerRadius:150,angleOffset:.7,startAngle:-1.5*a,endAngle:.5*a,minorTickStart:.9,minorTickEnd:.95,majorTickStart:.82,majorTickEnd:.95,needleColor:"#de2c2c",innerFaceColor:"#999999",faceColor:"#666666",domain:[0,100],duration:500,ease:"cubicInOut",ticks:d3.range(0,101,2),majorTicks:function(t){return t%10===0},labelLocation:.7};return t.scale=function(){return d3.scale.linear().domain(t.domain()).range([b.startAngle+t.angleOffset(),b.endAngle-t.angleOffset()])},t.innerRadius=function(n){return arguments.length?(e=n,t):"undefined"!=typeof e?e:b.innerRadius},t.outerRadius=function(e){return arguments.length?(r=e,t):"undefined"!=typeof r?r:b.outerRadius},t.angleOffset=function(e){return arguments.length?(c=e,t):"undefined"!=typeof c?c:b.angleOffset},t.labelLocation=function(e){return arguments.length?(A=e,t):"undefined"!=typeof A?A:b.labelLocation},t.ticks=function(e){return arguments.length?(y=e,t):"undefined"!=typeof y?y:b.ticks},t.majorTicks=function(e){return arguments.length?(h=e,t):"undefined"!=typeof h?h:b.majorTicks},t.minorTickStart=function(e){return arguments.length?(m=e,t):"undefined"!=typeof m?m:b.minorTickStart},t.minorTickEnd=function(e){return arguments.length?(v=e,t):"undefined"!=typeof v?v:b.minorTickEnd},t.majorTickStart=function(e){return arguments.length?(x=e,t):"undefined"!=typeof x?x:b.majorTickStart},t.majorTickEnd=function(e){return arguments.length?(k=e,t):"undefined"!=typeof k?k:b.majorTickEnd},t.needleColor=function(e){return arguments.length?(i=e,t):"undefined"!=typeof i?i:b.needleColor},t.innerFaceColor=function(e){return arguments.length?(o=e,t):"undefined"!=typeof o?o:b.innerFaceColor},t.faceColor=function(e){return arguments.length?(u=e,t):"undefined"!=typeof u?u:b.faceColor},t.domain=function(e){return arguments.length?(s=e,t):"undefined"!=typeof s?s:b.domain},t.duration=function(e){return arguments.length?(d=e,t):"undefined"!=typeof d?d:b.duration},t.ease=function(e){return arguments.length?(l=e,t):"undefined"!=typeof l?l:b.ease},t.value=function(e){return arguments.length?(f=e,t):"undefined"!=typeof f?f:.5*(b.domain[0]+b.domain[1])},t.defs=function(e,r){var a=e.append("defs");p=r;var i=t.needleColor(),o=t.innerFaceColor(),u=t.faceColor(),s=n.defs(a).lG().id("vizgg1"+r).sel();n.defs(s).stop().offset("0").stopColor(i),n.defs(s).stop().offset("1").stopColor(d3.rgb(i).darker(1));var f=n.defs(a).rG().id("vizgg2"+r).fx("35%").fy("65%").r("65%").spreadMethod("pad").sel();n.defs(f).stop().offset("0").stopColor(o),n.defs(f).stop().offset("1").stopColor(d3.rgb(o).darker(2));var c=n.defs(a).rG().id("vizgg3"+r).fx("35%").fy("65%").r("65%").spreadMethod("pad").sel();n.defs(c).stop().offset("0").stopColor(u),n.defs(c).stop().offset("1").stopColor(d3.rgb(u).darker(2)),n.defs(a).lG().id("vizgg4"+r).gradientUnits("userSpaceOnUse").y1("80").x1("-10").y2("80").x2("10").xlink("#vizgg1"+r);var d=n.defs(a).filter().id("vizgg5"+r).sel();n.defs(d).feFlood().result("flood").floodColor("rgb(0,0,0)").floodOpacity("0.6"),n.defs(d).feComposite().result("composite1").operator("in").in2("SourceGraphic")["in"]("flood"),n.defs(d).feGaussianBlur().result("blur").stdDeviation("2")["in"]("composite1"),n.defs(d).feOffset().result("offset").dy("2").dx("2"),n.defs(d).feComposite().result("composite2").operator("over").in2("offset")["in"]("SourceGraphic");var l=n.defs(a).filter().x("-0.3").y("-0.3").height("1.8").width("1.8").id("vizgg6"+r).sel();n.defs(l).feGaussianBlur().stdDeviation("2")},t.setNeedle=function(e){function n(t,e){return d3.interpolateString("rotate("+t+")","rotate("+e+")")}var r=180*t.scale()(e)/a+90,i=180*t.scale()(t.value())/a+90,o=t.ease();g.selectAll(".needle").data([e]).transition().duration(t.duration()).attrTween("transform",function(t){return n(i,r)}).ease(o),g.selectAll(".needleshadow").data([e]).transition().duration(t.duration()).attrTween("transform",function(t){return n(i,r)}).ease(o).each("end",function(){angle=e}),t.value(e)},t},n.ch=function(){function o(t){d=t;var e=d3.svg.arc().innerRadius(o.innerRadius()).outerRadius(o.outerRadius()),n=function(t){return t.source==t.target?{startAngle:t.startAngle,endAngle:t.endAngle}:{startAngle:t.targetAngle,endAngle:t.targetAngle}},r=d3.svg.chord().radius(o.innerRadius()).source(function(t){return t}).target(n);k||f();var s=o.fill();t.each(function(){function t(t){return"rotate("+(180*u(t)/a-(u(t)<a?90:270))+")"}var n=d3.select(this),f=n.selectAll(".groups").data(x).enter().append("g").attr("class","groups").on("mouseover",o.mouseover).on("mouseout",o.mouseout);f.append("path").style("fill",function(t){return s(t.source)}).style("stroke",function(t){return s(t.source)}).attr("d",e);var c=(1+o.labelPadding())*o.outerRadius(),d=f.append("text").attr("class","label"),l=o.labelOrientThreshold(),g=.85*o.innerRadius(),p=o.valueFormat();d.filter(function(t){return t.endAngle-t.startAngle>l}).append("textPath").attr("xlink:href",function(t){return"#vizch1"+z+"_"+t.index}).attr("startOffset","50%").text(function(t){return t.source+" ("+p(t.value)+")"}),d.filter(function(t){return t.endAngle-t.startAngle<=l}).attr("x",function(t){return u(t)<a?c:-c}).attr("y",0).text(function(t){return t.source+" ("+p(t.value)+")"}).style("text-anchor",function(t){return u(t)<a?"start":"end"}).style("alignment-baseline","central").attr("transform",t),n.append("g").attr("class","chords").selectAll(".chord").data(o.chords()).enter().append("g").attr("class","chord").append("path").attr("d",r).style("fill",function(t){return s(t.target)}).style("opacity",o.chordOpacity()).style("stroke",function(t){return s(t.target)}).on("mouseover",o.mouseover).on("mouseout",o.mouseout),n.append("g").attr("class","values").selectAll("text").data(o.chords()).enter().append("text").attr("x",function(t){return g*Math.cos(t.targetAngle-i)}).attr("y",function(t){return g*Math.sin(t.targetAngle-i)}).text(function(t){return p(t.value)}).style("opacity",0)})}function u(e){return t((e.startAngle+e.endAngle)/2)}function s(t){return u(t)<1.5*a&&u(t)>=.5*a?1:0}function f(){var t,e=o.source(),n=o.target(),a=o.value(),i=o.data(),u=o.padding(),s=o.startAngle(),f=[];i.forEach(function(t){-1==f.indexOf(e(t))&&f.push(e(t)),-1==f.indexOf(n(t))&&f.push(n(t))}),t=f.length,f=f.sort(o.sort());var c={};f.forEach(function(t){return c[t]={},f.forEach(function(e){c[t][e]=0})}),i.forEach(function(t){c[e(t)][n(t)]+=a(t)});var d={};f.forEach(function(t){d[t]=d3.sum(f,function(e){return c[t][e]})});var l=d3.sum(f,function(t){return d[t]}),g=(r-t*u)/l,p=s,y={};x=[],k=[],f.forEach(function(t,e){x.push({startAngle:p,endAngle:p+d[t]*g,value:d[t],source:t,type:"g",index:e}),y[t]={},f.forEach(function(n,r){var a=p+c[t][n]*g;c[t][n]>0&&k.push({startAngle:p,endAngle:a,value:c[t][n],source:t,target:n,type:"c",index:e,subindex:r}),y[t][n]=a,p=a}),p+=u}),k.forEach(function(t){t.targetAngle=y[t.target][t.source]})}function c(t,e){return"g"==e.type?t.source!=e.source:!(e.source==t.source&&e.target==t.target||e.source==t.target&&e.target==t.source)}var d,l,g,p,y,h,m,v,x,k,A,b,w,C,z,T,M,E;return o.data=function(t){return arguments.length?(l=t,k=x=null,o):l},o.fill=function(t){return arguments.length?(g=t,o):g},o.chordOpacity=function(t){return arguments.length?(C=t,o):"undefined"!=typeof C?C:.7},o.innerRadius=function(t){return arguments.length?(b=t,k=x=null,o):"undefined"!=typeof b?b:180},o.outerRadius=function(t){return arguments.length?(w=t,k=x=null,o):"undefined"!=typeof w?w:200},o.source=function(t){return arguments.length?(p=t,k=x=null,o):"undefined"!=typeof p?p:function(t){return t[0]}},o.target=function(t){return arguments.length?(y=t,k=x=null,o):"undefined"!=typeof y?y:function(t){return t[1]}},o.value=function(t){return arguments.length?(h=t,k=x=null,o):"undefined"!=typeof h?h:function(t){return t[2]}},o.padding=function(t){return arguments.length?(v=t,k=x=null,o):"undefined"!=typeof v?v:.03},o.labelPadding=function(t){return arguments.length?(T=t,o):"undefined"!=typeof T?T:.05},o.labelOrientThreshold=function(t){return arguments.length?(M=t,o):"undefined"!=typeof M?M:.1},o.sort=function(t){return arguments.length?(m=t,k=x=null,o):"undefined"!=typeof m?m:d3.ascending},o.startAngle=function(t){return arguments.length?(A=t,k=x=null,o):"undefined"!=typeof A?A:0},o.chords=function(){return k||f(),k},o.groups=function(){return x||f(),x},o.valueFormat=function(t){return arguments.length?(E=t,o):"undefined"!=typeof E?E:function(t){return t}},o.mouseover=function(t){d.select(".chords").selectAll(".chord").filter(function(e){return c(e,t)}).select("path").transition().style("opacity",0),d.select(".values").selectAll("text").filter(function(e){return!c(e,t)}).transition().style("opacity",1)},o.mouseout=function(t){var e=o.chordOpacity();d.select(".chords").selectAll(".chord").filter(function(e){return c(e,t)}).select("path").transition().style("opacity",e),d.select(".values").selectAll("text").filter(function(e){return!c(e,t)}).transition().style("opacity",0)},o.defs=function(t,r){var u=t.append("defs");z=r,x||f(),x.forEach(function(t){var r=(1+o.labelPadding())*o.outerRadius()+(s(t)?12:0),f=e(r,t.startAngle-i),c=e(r,t.endAngle-i),d=t.endAngle-t.startAngle>=a?1:0,l=s(t)?["M",c.x,c.y,"A",r,r,0,d,0,f.x,f.y].join(" "):["M",f.x,f.y,"A",r,r,0,d,1,c.x,c.y].join(" ");n.defs(u).path().id("vizch1"+z+"_"+t.index).d(l)})},o},n.defs=function(t){var e={},n=t;return e.sel=function(){return n},e.lG=function(){return n=n.append("linearGradient"),e},e.rG=function(){return n=n.append("radialGradient"),e},e.stop=function(){return n=n.append("stop"),e},e.filter=function(){return n=n.append("filter"),e},e.feFlood=function(){return n=n.append("feFlood"),e},e.feComposite=function(){return n=n.append("feComposite"),e},e.feOffset=function(){return n=n.append("feOffset"),e},e.feGaussianBlur=function(){return n=n.append("feGaussianBlur"),e},e.result=function(t){return n=n.attr("result",t),e},e.floodColor=function(t){return n=n.attr("flood-color",t),e},e.floodOpacity=function(t){return n=n.attr("flood-opacity",t),e},e.stdDeviation=function(t){return n=n.attr("stdDeviation",t),e},e.operator=function(t){return n=n.attr("operator",t),e},e.height=function(t){return n=n.attr("height",t),e},e.width=function(t){return n=n.attr("width",t),e},e["in"]=function(t){return n=n.attr("in",t),e},e.in2=function(t){return n=n.attr("in2",t),e},e.id=function(t){return n=n.attr("id",t),e},e.fx=function(t){return n=n.attr("fx",t),e},e.fy=function(t){return n=n.attr("fy",t),e},e.dx=function(t){return n=n.attr("dx",t),e},e.dy=function(t){return n=n.attr("dy",t),e},e.x1=function(t){return n=n.attr("x1",t),e},e.y1=function(t){return n=n.attr("y1",t),e},e.x2=function(t){return n=n.attr("x2",t),e},e.y2=function(t){return n=n.attr("y2",t),e},e.x=function(t){return n=n.attr("x",t),e},e.y=function(t){return n=n.attr("y",t),e},e.r=function(t){return n=n.attr("r",t),e},e.spreadMethod=function(t){return n=n.attr("spreadMethod",t),e},e.gradientUnits=function(t){return n=n.attr("gradientUnits",t),e},e.xlink=function(t){return n=n.attr("xlink:href",t),e},e.offset=function(t){return n=n.attr("offset",t),e},e.stopColor=function(t){return n=n.attr("stop-color",t),e},e.path=function(){return n=n.append("path"),e},e.d=function(t){return n=n.attr("d",t),e},e},this.viz=n}();

    var margin = {top: 30, right: 30, bottom: 30, left: 30},
        width = parseInt($(id).css("width")) - margin.left - margin.right,
        height = parseInt($(id).css("height")) - margin.top - margin.bottom;

    var svg = d3.select(id).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

    var g = svg.append("g").attr("transform","translate("+ (width + margin.left)/2 +","+ (height + margin.top)/2 +")");   // 距离左右两边的距离
    var domain = [0,100];          // 数据
    var r = d3.min([width,height])/2;   // 半径
    var gg = viz.gg()
        .domain(domain)
        .outerRadius(r)
        .innerRadius(30)
        .value(0.5*(domain[1]+domain[0]))
        .duration(1000);

    gg.defs(svg);
    g.call(gg);

    // d3.select(self.frameElement).style("height", "700px");
    setInterval( function(){gg.setNeedle(domain[0]+Math.random()*(domain[1]-domain[0]));},2000);
}

// 2017-11-2 漏斗图
function funnelChart(id,data){

    // 漏斗图插件
    d3.funnel = function() {
        var size = [1,1],
            mouth = [1,1],
            sort_data,
            value = function(d) { return d.value},
            coordinates;
        var percentageValues = function (data) {
            var values = data.map(value);
            var percentValues = data.map(function (d,i){
                d.value = +values[i];
                var weight_max = d3.max(data, function (d,i) {
                    return d.value;
                })
                return d.value/weight_max*100;
            });
            percentValues.sort(function(a,b){
                return b-a;
            });
            return percentValues;
        }
        var coordinatesCalculation = function(data){
            var w = size[0],
                h = size[1],
                rw = mouth[0], //rect width
                rh = mouth[1], //rect height
                tw = (w - rw)/2, //triangle width
                th = h - rh, //triangle height
                height1=0,
                height2=0,
                height3=0,
                merge = 0,
                coordinates = [],
                ratio = tw/th,
                area_of_trapezium = (w + rw) / 2 * th,
                area_of_rectangle = rw * rh,
                total_area = area_of_trapezium + area_of_rectangle,
                percent_of_rectangle = area_of_rectangle / total_area * 100;
            for (var i=data.length-1; i>=0; i--){
                var selectedPercentValues = percentageValues(data)[i];
                if (percent_of_rectangle>=selectedPercentValues){
                    height3 = selectedPercentValues / percent_of_rectangle * rh;
                    height1 = h - height3;
                    if (i===data.length-1){
                        coordinates[i] = {"values":[{"x":(w-rw)/2,"y":height1},{"x":(w-rw)/2,"y":h},{"x":((w-rw)/2)+rw,"y":h},{"x":((w-rw)/2)+rw,"y":height1}]};
                    }else{
                        coordinates[i] = {"values":[{"x":(w-rw)/2,"y":height1},coordinates[i+1].values[0],coordinates[i+1].values[3],{"x":((w-rw)/2)+rw,"y":height1}]};
                    }
                }else{
                    var area_of_element = ((selectedPercentValues)/100 * total_area) - area_of_rectangle,
                        a = 2 * ratio,
                        b = 2 * rw,
                        c = 2 * area_of_element;
                    height2 = (-b + Math.sqrt(Math.pow(b,2) - (4 * a * -c))) / (2 * a);
                    height1 = h - height2 - rh;
                    var base = 2*(ratio * height2)+rw,
                        xwidth = (w-base)/2;

                    if(merge===0){
                        if (i===data.length-1){
                            coordinates[i] = {"values":[{"x":xwidth,"y":height1},{"x":(w-rw)/2,"y":th},{"x":(w-rw)/2,"y":h},{"x":((w-rw)/2)+rw,"y":h},{"x":((w-rw)/2)+rw,"y":th},{"x":base+xwidth,"y":height1}]};
                        }else{
                            coordinates[i] = {"values":[{"x":xwidth,"y":height1},{"x":(w-rw)/2,"y":th},coordinates[i+1].values[0],coordinates[i+1].values[3],{"x":((w-rw)/2)+rw,"y":th},{"x":base+xwidth,"y":height1}]};
                        }
                    }
                    else{
                        var coindex;
                        if(coordinates[i+1].values.length===6){
                            coindex = 5;
                        }else{
                            coindex = 3;
                        }
                        coordinates[i] = {"values":[{"x":xwidth,"y":height1},coordinates[i+1].values[0],coordinates[i+1].values[coindex],{"x":base+xwidth,"y":height1}]};
                    }
                    merge = 1;
                }
            }
            return coordinates;
        }
        function funnel(data) {
            var i = 0,
                coordinates = coordinatesCalculation(data);
            data.sort(function(a,b) {
                return b.value - a.value;
            })
            data.forEach(function(){
                data[i].coordinates = coordinates[i].values;
                i++;
            })
            return data;
        }
        funnel.size = function(s){
            if (s.length!==2){
            } else {
                size = s;
            }
            return funnel;
        }
        funnel.mouth = function(m){
            if (m.length!==2){
            } else {
                mouth = m;
            }
            return funnel;
        }
        funnel.value = function(v) {
            if (!arguments.length) return value;
            value = v;
            return funnel;
        };
        return funnel;
    }


    var data = [
        {
            "name": "一级",
            "value": "70"
        },
        {
            "name": "二级",
            "value": "61"
        },
        {
            "name": "三级",
            "value": "46"
        },
        {
            "name": "四级",
            "value": "29"
        },
        {
            "name": "五级",
            "value": "10"
        }
    ];

    var margin = {top: 30, right: 30, bottom: 40, left: 40},
        width = parseInt($(id).css("width")) - margin.left - margin.right,
        height = parseInt($(id).css("height")) - margin.top - margin.bottom,
        radius = Math.min(width, height) / 2;

    var color = d3.scale.ordinal()
        .range(["#255aee","#3a6fff","#4f84ff","rgb(101,154,302)","rgb(122,175,323)", "rgb(144,197,345)", "rgb(165,218,366)"]);

    var svg = d3.select(id).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var funnel = d3.funnel()
        .size([width,height])
        .mouth([100,100])
        .value(function(d) { return d.value; });

    var line = d3.svg.line()
        .interpolate('linear-closed')
        .x(function(d,i) { return d.x; })
        .y(function(d,i) { return d.y; });

    var g = svg.selectAll(".funnel-group")
        .data(funnel(data))
        .enter().append("g")
        .attr("class", "funnel-group");

    g.append("path")
        .attr("d", function (d){ return line(d.coordinates); })
        .style("fill", function(d) { return color(d.name); });

    g.append("text")
        .attr({
            "y": function (d,i) {
                if(d.coordinates.length === 4) {
                    return (((d.coordinates[0].y-d.coordinates[1].y)/2)+d.coordinates[1].y) + 5;
                } else {
                    return (d.coordinates[0].y + d.coordinates[1].y)/2 + 10;
                }
            },
            "x": function (d,i) { return width/2;}
        })
        .style("text-anchor", "middle")
        .text(function(d) { return d.name; });

}

// 2018-1-18 2.0图表
function manyGroup(elemt,data,CStyle){
    /*
    *  添加返回判断，如果没有其中这些条件则，不继续执行!
    *  没有x轴和y轴数据
    * */
    if(!data.data.queryJson["x"] || !data.data.queryJson["y"] || data.data.queryJson["x"].length <= 0 || data.data.queryJson["y"].length <= 0){
        return false;
    }

    const margin = {top: 20, right: 30, bottom: 40, left: 55, titleLeft: -45,titleBottom:39 },   // 外部留空
        defaultColor = "#1496D4",    // 默认图表颜色
        id = "#" + elemt + " .resize-chart",   // 存放图形的位置
        el = "#" +  elemt + " .legend";   // 存放图例的样式，可用以确定图例宽高
    // 数据
    const total = data.data,                                      // 数据
        axisA = total.drawHelper.meaAxis,                         // 度量所在轴
        axisAorY = axisA === "y",
        axisB =  axisA === "y" ? "x" : "y";                       // 维度所在轴

    const queryJson = total.queryJson,                             // 索引数据
        dimValues = total.dimValues;                             // 维度数组

    const measure = queryJson[axisA][0],                            // 度量索引
        dimension = queryJson[axisB][0];                          // 维度索引

    const xTitle = dimValues[dimension.fieldId];                   // 维度轴  例如：["办公用品", "家具", "技术"]

    const xName = queryJson[axisB][0].fieldAlias,                   // 维度轴名称  例如：类别
        yName = queryJson[axisA][0].fieldAlias;                   // 度量轴名称  例如：销售额

    const colourAll = ifNullUnfd(queryJson.colour) > 0 ?
        queryJson.colour[0] : null;   // 全部属性 - 颜色
    const sizeAll = ifNullUnfd(queryJson.size) > 0 ?
            queryJson.size[0] : null;                             // 全部属性 - 尺寸
    const detailAll = ifNullUnfd(queryJson.detail) > 0 ?
            queryJson.detail[0] : null;                       // 全部属性 - 细分
    const labelAll = ifNullUnfd(queryJson.label) > 0 ?
            queryJson.label[0] : null;                           // 全部属性 - 标签

    const maxData = total.meaMaxMin[measure.fieldId].max*11/10;   // 最大值，加10%以保留
    const legendData = chartLegendData(el,total,CStyle);                // 获取图例创建后的数据

    /*
    *  根据图例的宽度or高度以及位置，计算剩余图形的图形宽度和高度
    * */
    const widthO = parseInt($(id).css("width")) - margin.left - margin.right - legendData.elWidth;
    const height0 = parseInt($(id).css("height")) - margin.top - margin.bottom - legendData.elHeight;
    /*
    *  根据度量在x轴or y轴不同，数据和参数不同
    * */
    let yAxisN = [0, widthO],
        xOAxis = [0, height0],
        xorientAxis = "left",
        yorientAxis = "bottom",
        innerTickSize = -height0,
        measurey = "translate(0," + height0 + ")",
        measurex = "translate(0,0)";
    if(axisAorY){
        yAxisN = [height0, 0];
        xOAxis = [0, widthO];
        xorientAxis = "bottom";
        yorientAxis = "left";
        innerTickSize = -widthO;
        measurey = "translate(0,0)";
        measurex = "translate(0," + height0 + ")";
    }

    /*
    *  全部属性，颜色-尺寸-细分-标签，根据从上到下划分第二、三、、级
    * */
    let x1Domain = null;
    let allTwo = null;
    if(colourAll && colourAll.dimMea === 0){
        x1Domain = dimValues[colourAll.fieldId];
        allTwo = colourAll.fieldId
    }else if(sizeAll && sizeAll.dimMea === 0){
        x1Domain = dimValues[sizeAll.fieldId];
        allTwo = sizeAll.fieldId;
    }else if(detailAll){
        x1Domain = dimValues[detailAll.fieldId];
        allTwo = detailAll.fieldId
    }else if(labelAll){
        x1Domain = dimValues[labelAll.fieldId];
        allTwo = labelAll.fieldId
    }else{
        x1Domain = d3.range(1);
    }
    // 根据颜色编译成循环色
    const o = d3.scale.ordinal()
        .domain(legendData.colorDomain)
        .range(legendData.color);

    /* 根据维度轴不同，显示不同的宽度 */
    const x = d3.scale.ordinal()
        .domain(xTitle)
        .rangeBands(xOAxis, .2);


    // 用来获取裁剪之后的标签
    const xTitleOmitted = function(axisB,widthO,height0,xTitle){
        /*
        *  计算字符串的平均长度
        * */
        this.size = $(id).css("font-size");
        this.family = $(id).css("font-family");
        this.xTitleN  = xTitle.join("");
        this.xTitleNJ = xTitle.join("").length / xTitle.length;
        this.xTitleStart = this.xTitleN.slice(0,( this.xTitleNJ ));
        this.al = calculate(this.xTitleStart, this.size, this.family);
        this.l = axisB === "x" ?
            widthO : height0;  // 判断标签的长度是多少？
        this.xl = axisB === "x" ?
            this.al.width : this.al.height;  // 判断是用字符串宽度还是高度

        // 如果标签数量大于
        if(this.xl * xTitle.length >= this.l){
            // 如果数据过大，则只显示部分的标签
            this.al = this.l/ this.xl;
            this.d = [];
            for(let x = 1 ; x <= this.al ; x++){
                this.d = this.d.concat(xTitle.splice( (  parseInt( xTitle.length / this.al ) ) * x, 1));
            }
            // 如果字符串太长，则显示省略号
            return this.d.map(function(d){
                this.dl = calculate(d, this.size, this.family);
                this.dl = (axisB === "x" ? this.dl.width : this.dl.height);
                if( this.dl <= this.xl ){
                    return d;
                }else{
                    return d.slice(0, this.xTitleNJ) + "...";
                }
            });
        }else{
            return xTitle;
        }
    };
    const x1 = d3.scale.ordinal()
        .domain(xTitleOmitted(axisB,widthO,height0,xTitle))
        .rangeBands(xOAxis, .2);

    /* 颜色区宽度 */
    const xc = d3.scale.ordinal()
        .domain(x1Domain)
        .rangeBands([0, x.rangeBand(),.2]);

    /* 尺寸，根据对比确定宽度; 根据尺寸修改宽度  */
    let w = null;
    const wSize = xc.rangeBand() * (CStyle.size).toFixed(4);
    if(sizeAll){
        if(sizeAll.dimMea === 0){
            w = d3.scale.ordinal()
                .domain(dimValues[sizeAll.fieldId])
                .range([wSize/5,wSize]);
        }else if(sizeAll.dimMea === 1){
            w = d3.scale.ordinal()
                .domain([total.meaMaxMin[sizeAll.fieldId].min, total.meaMaxMin[sizeAll.fieldId].max])
                .range([wSize/10,wSize]);
        }
    }
    /*
    *  svg最外层，确定宽高度，确定位置
    * */
    const svg = d3.select(id).append("svg")
        .attr("width", widthO + margin.left + margin.right)
        .attr("height", height0 + margin.top + margin.bottom)
        .attr("transform", "translate(" + ( legendData.positionBur?legendData.elWidth:"0" ) + "," + ( legendData.positionBur?legendData.elHeight:"0" ) + ")")
        .append("svg:g")
        .attr("width", widthO )
        .attr("height", height0 )
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    fillArea(svg,CStyle,widthO,height0);   // 添加填充区

    /*
    *   度量轴or维度轴，根据x，y变化
    *   y axis：y轴
    * */
    const y = d3.scale.linear()
        .domain([0, maxData])
        .range(yAxisN);

    const yAxis = d3.svg.axis()
        .scale(y)
        .orient(yorientAxis)
        .innerTickSize(innerTickSize)
        .outerTickSize(0)                      // 外刻度大小
        .tickPadding(10)                       // 轴字体距离轴宽度
        .tickFormat(d3.format("s"));             // 数字后面格式

    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", measurey)
        .call(yAxis)
        .append("text")
        .text(yName)
        .attr("x",function(){ if(axisAorY){ return -height0/2; }else{  return widthO/2 } })
        .attr("y",function(){ if(axisAorY){ return margin.titleLeft ; }else{  return  margin.titleBottom } })
        .style("text-anchor","middle")
        .attr("transform",function(){ if(axisAorY){ return 'rotate(270,0,0)'; } });

    const xAxis = d3.svg.axis()
        .scale(x1)
        .orient(xorientAxis);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", measurex)
        .attr("width",widthO)
        .call(xAxis)
        .append("text")
        .text(xName)
        .style("text-anchor","middle")
        .attr("x",function(){ if(axisAorY){ return widthO/2; }else{  return -height0/2 } })
        .attr("y",function(){ if(axisAorY){ return margin.titleBottom }else{  return  margin.titleLeft } })
        .attr("transform",function(){ if(axisAorY){ return null; }else{  return 'rotate(270,0,0)' } });

    let attrClick = null;

    /*
    *   颜色块，
    *   事件绑定
    * */
    const div = d3.select(id).append("div")
        .attr("class","message");

    const g = svg.append("g")
        .selectAll("g")
        .data(total.records)
        .enter()
        .append("g")
        .attr("transform", function(d) { if(axisAorY){ return "translate(" + xc(d[allTwo]) + ",0)" }else{ return "translate(0," + xc(d[allTwo]) + ")" } })
        .attr("class","rect-g");

    g.append("rect")
        .attr("class","areaBlock")
        .style("fill",function(d){ if(colourAll){ return o(d[colourAll.fieldId]); }else{return defaultColor;}})
        .attr("data-id",function (d){ if(colourAll){ return d[colourAll.fieldId] } })
        .attr("width", function(d) {if(axisAorY){if(sizeAll){return w(d[sizeAll.fieldId]);}else{return xc.rangeBand() ;}}else{return y(d[measure.fieldId]) - 1;}})
        .attr("height", function(d) {if(axisAorY){ return  height0 - y(d[measure.fieldId])}else{if(sizeAll){return w(d[sizeAll.fieldId]);}else{return xc.rangeBand() ;}}})
        .attr("x", function(d) { if(axisAorY){ if(sizeAll){return  x(d[dimension.fieldId]) + (xc.rangeBand() -w(d[sizeAll.fieldId]))/2}else{return  x(d[dimension.fieldId])}}else{ return 0 }  })
        .attr("y", function(d) { if(axisAorY){ return y(d[measure.fieldId]) }else{if(sizeAll){return  x(d[dimension.fieldId]) + (xc.rangeBand() -w(d[sizeAll.fieldId]))/2}else{return  x(d[dimension.fieldId])}}})
        .on({
            "mouseover":function(d){

                d3.select(this).attr("stroke",'#000');
                const tx = parseFloat(d3.event.pageX - parseInt($("#" + elemt).css("left")));
                const ty = parseFloat(d3.event.pageY - parseInt($("#" + elemt).css("top")));
                div.style("display","block")
                    .style("top",(ty - margin.top - margin.bottom) + "px")
                    .style("left",(tx - margin.left - margin.right + 100) + "px")
                    .text("");

                div.append("text").text( dimension.fieldAlias + "：" + d[dimension.fieldId]);
                if(colourAll){  div.append("text").text( colourAll.fieldAlias + "：" + d[colourAll.fieldId]);  }
                if(sizeAll){    div.append("text").text( sizeAll.fieldAlias + "：" + d[sizeAll.fieldId]);  }
                if(detailAll){  div.append("text").text( detailAll.fieldAlias + "：" + d[detailAll.fieldId]);  }
                if(labelAll){   div.append("text").text( labelAll.fieldAlias + "：" + d[labelAll.fieldId]);    }
                div.append("text").text( measure.fieldAlias + "：" + d[measure.fieldId]);

            },
            "mousemove":function(){
                const tx = parseFloat(d3.event.pageX - parseInt($("#" + elemt).css("left")));
                const ty = parseFloat(d3.event.pageY - parseInt($("#" + elemt).css("top")));
                div.style("top",(ty - margin.top - margin.bottom) + "px")
                    .style("left",(tx - margin.left - margin.right + 40) + "px")
            },
            "mouseout":function(){
                d3.select(this).attr("stroke",'none');
                div.style("display","none");
            },
            "click":function(){
                $(this).removeAttr("class",'fill-opacity');
                if(attrClick === this){
                    $(this).removeAttr("stroke",'#000')
                        .parent().siblings().find("rect").removeAttr("class",'fill-opacity')
                        .parent().parent().siblings().find("rect")
                        .removeAttr("class",'fill-opacity');
                    attrClick = null;
                }else{
                    $(this).attr("stroke",'#000')
                        .parent().siblings().find("rect").attr("class",'fill-opacity')
                        .parent().parent().siblings().find("rect")
                        .attr("class",'fill-opacity');
                    attrClick = this;
                }
            }
        });


    /*
    *  标签
    *  horizontal：横轴：0-2,3-5，6-8，
    *  vertical：纵轴：0-3-6,1-4-7,2-5-8
    *  标签根据x轴和y，以及样式变化修改位置
    *  label.align：表示是内部or外部
    * */
    const label = CStyle.label;        // 标签
    if(labelAll || CStyle.label.custom === 3){
        const horizontal = {
            "in":label.position === 3 || label.position === 4 || label.position === 5,
            "under":label.position === 6 || label.position === 7 || label.position === 8
        };
        const vertical = {
            "in":label.position === 1 || label.position === 4 || label.position === 7,
            "under":label.position === 2 || label.position === 5 || label.position === 8
        };
        svg.append("g")
            .selectAll("g")
            .data(total.records)
            .enter()
            .append("g")
            .attr("transform", function(d) { if(axisAorY){ return "translate(" + xc(d[allTwo]) + ",0)" }else{ return "translate(0," + xc(d[allTwo]) + ")" } })
            .attr("class","label-g")
            .append("text")
            .attr("x", function(d) {
                let ret = null;
                if(axisAorY){
                    if(vertical.in){
                        ret = x(d[dimension.fieldId]) + (xc.rangeBand())/2;
                    }else if(vertical.under){
                        if(sizeAll){
                            ret = x(d[dimension.fieldId]) + (xc.rangeBand() + w(d[sizeAll.fieldId]))/2
                        }else{
                            ret = x(d[dimension.fieldId]) + xc.rangeBand();
                        }
                    }else{
                        if(sizeAll){
                            ret = x(d[dimension.fieldId]) + (xc.rangeBand() -w(d[sizeAll.fieldId]))/2
                        }else{
                            ret = x(d[dimension.fieldId])
                        }
                    }
                }else{
                    if(horizontal.in){
                        ret = y(d[measure.fieldId])/2;
                    }else if(horizontal.under){
                        ret = 0;
                    }else{
                        ret = y(d[measure.fieldId]);
                    }
                }
                return  ret;
            })
            .attr("y", function(d) {
                let ret = null;
                if(axisAorY){
                    if(horizontal.in){
                        ret = (height0 + y(d[measure.fieldId]))/2;
                    }else if(horizontal.under){
                        ret = height0;
                    }else{
                        ret = y(d[measure.fieldId]);
                    }
                }else{
                    if(vertical.in){
                        ret = x(d[dimension.fieldId]) + (xc.rangeBand())/2;
                    }else if(vertical.under){
                        if(sizeAll){
                            ret = x(d[dimension.fieldId]) + (xc.rangeBand() + w(d[sizeAll.fieldId]))/2
                        }else{
                            ret = x(d[dimension.fieldId]) + xc.rangeBand();
                        }
                    }else{
                        if(sizeAll){
                            ret = x(d[dimension.fieldId]) + (xc.rangeBand() -w(d[sizeAll.fieldId]))/2
                        }else{
                            ret = x(d[dimension.fieldId])
                        }
                    }
                }
                return  ret;
            })
            .style("fill",CStyle.label.color)
            .attr("text-anchor",function(){
                let ret = null;
                if(axisAorY){
                    if(vertical.in){
                        ret = "middle";
                    }else if(vertical.under){
                        ret = "end";
                    }else{
                        ret = "start";
                    }
                }else{
                    if(horizontal.in){
                        ret = "middle";
                    }else if(horizontal.under){
                        ret = "start";
                    }else{
                        if(label.align === 0){
                            ret = "start";
                        }else{
                            ret = "end";
                        }
                    }
                }
                return ret;
            })
            .attr("dominant-baseline",function(){
                let ret = null;
                if(axisAorY){
                    if(horizontal.in){
                        ret = "middle";
                    }else if(horizontal.under){
                        ret = 'text-after-edge';
                    }else{
                        if(label.align === 0){
                            ret = 'text-after-edge';
                        }else{
                            ret = 'text-before-edge';
                        }
                    }
                }else{
                    if(vertical.in){
                        ret = "middle";
                    }else if(vertical.under){
                        ret = 'text-after-edge';
                    }else{
                        ret = 'text-before-edge';
                    }
                }
                return ret;
            })
            .text(function(d){
                if(CStyle.label.overlapping){
                    const result = calculate(d[labelAll.fieldId],$(this).css("font-size"),$(this).css("font-family"));
                    let reservedH = null,
                        reservedW = null;
                    if(axisAorY){
                        reservedH = height0 - y(d[measure.fieldId])
                    }else{
                        reservedW = y(d[measure.fieldId]);
                    }
                    if(reservedH >= result.height || reservedW >= result.width){
                        return d[labelAll.fieldId];
                    }
                }else{
                    return d[labelAll.fieldId];
                }
            })
            .filter(function(d,i){
                /*
                *  防止标签重叠，有bug，不使用；
                * */
                const previous = $(this).parent().parent().find("g").eq(i-1).children();
                const yScissors = parseInt(previous.attr('y')) - parseInt($(this).attr("y"));
                const scissors = 20;
                if(parseInt(previous.attr('x')) === parseInt($(this).attr("x"))){
                    if(((yScissors) <= scissors || (yScissors <= 0 && yScissors >= -scissors)) && CStyle.label.overlapping ){
//                            return this;
                    }
                }
            })
            .remove();
    }

    // 修改图形显示之后修改
    // 判断内区轴实线，虚线
    const dwa = CStyle.drawingArea;      // 绘图区
    if(dwa.lnnerStyle === "dotted"){
        $(id + " .axis .tick line").css("stroke-dasharray",5,5);
    }
    // 修改内区轴颜色
    $(id + " .axis .tick line").css("stroke",dwa.lnnerColor);
    // 修改轴颜色
    $(id + " .axis .domain").css("stroke",dwa.axisColor);
    // 修改轴字体
    $(id + " .axis .tick").css("fill",dwa.fontColor);
    // 修改轴字体大小
    $(id + " .axis text").css("font-size",dwa.fontSize);
    // 修改轴字体family
    $(id + " .axis text").css("font-family",dwa.family);

}