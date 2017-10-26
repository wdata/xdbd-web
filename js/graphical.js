
// 调用函数
// 根据数据索引请求数据，并调用图形函数
var DataIndexes = {
    // 根据数据索引，请求数据
    inAjax:function(d,id){
        var self = this;
        $("#"+id).find(".resize-panel").siblings().remove();  // 删除之前的图形
        $.ajax({
            type:"post",
            url:"/xdbd-bi/bi/report/v1/data.json?projectId="+ localStorage.getItem("projectId") +"&versionId="+ localStorage.getItem("versionId") +"",
            data:JSON.stringify(d),
            dataType:"json",
            contentType: 'application/json',
            success:function(data){
                if(data.code === 0){
                    if(data.data){
                        // 根据上传索引绘制图形
                        self.draw(id,d.type,data.data);
                    }else{
                        layer.msg("数据为空！")
                    }
                }
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
                        // 一维度 一度量
                        if(data.dim.dimX.valueTree.length <= 0 && data.dim.dimY.valueTree.length <= 0 && data.charts.meaList.length <= 1 && data.charts.dimValues.length <= 1){
                            var d = [];
                            $.each(data.charts.dimValues[0],function(index,val){
                                var c = {
                                    "letter":val,
                                    "frequency": data.charts.meaList[0].meaValues[0][0][index]
                                };
                                d.push(c);
                            });
                            bar("#" +id,d);
                            return;
                        }

                        manyChart("#" +id,data);

                        // bar("#"+id,dataTsv);
                        break;
                    case 102:
                        // var value = [];
                        // $.each(data.value,function(x,y){
                        //     value.push(y);
                        // });
                        // line("#" + id, "折线图", "2017年1011号", value, data["x-axis"], data["y-axis"]);
                        lineChart("#" + id,data);
                        break;
                    case 103:
                        var width = parseInt($("#"+ id +"").css("width"));
                        var height = parseInt($("#"+ id +"").css("height"));
                        var r = Math.min(width,height);
                        var outerRadius = r/2; //外半径
                        var innerRadius = 0; //内半径，为0则中间没有空白
                        // circle("#" + id,data.value,outerRadius,innerRadius);
                        var pieData = [];
                        $.each(data.value,function(index,val){
                            var z = [data.key[index],val];
                            pieData.push(z);
                        });
                        pieChart("#" + id,pieData,r);
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

// 封装一维柱状图
function bar(id,num){
    var margin = {top: 40, right: 20, bottom: 30, left: 80};
    var hei=$(id).height() - margin.top - margin.bottom;
    var wid=$(id).width()- margin.left - margin.right;
    //宽度，高度，数据
    var yData = [];
    for(var i=0;i<num.length;i++) {
        yData.push(num[i].frequency);
    }
    var x = d3.scale.ordinal()
        .rangeRoundBands([0, wid], .1);
    var y = d3.scale.linear()
        .domain([0,d3.max(yData)])
        .range([hei, 0]);
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickFormat(d3.format("s"));             // 数字后面格式;
    var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
            return "<strong>数量:</strong> <span style='color:#ddd'>" + d.frequency + "</span>";
        });
    var svg = d3.select(id).append("svg")
        .attr("width", wid + margin.left + margin.right)
        .attr("height", hei + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    svg.call(tip);
    x.domain(num.map(function(d) { return d.letter; }));
    y.domain([0, d3.max(num, function(d) { return d.frequency; })]);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + hei + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Frequency");

    svg.selectAll(".bar")
        .data(num)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("width", x.rangeBand())
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
        .attr("fill","red")
        .transition()
        .duration(3000)
        .ease("bounce")
        .delay(function(d,i){
            return 200*i;
        })
        .attr("x", function(d,i){
            return x(d.letter)
            30 + xScale(i);
        } )
        .attr("y",function(d,i){
            return y(d.frequency)
            50 + 500 - yScale(d) ;
        })
        .attr("height",function(d) { return hei - y(d.frequency); })
        .attr("fill","steelblue");

}

//    封装的二维柱状图
function chart(id,icon,max){
    var figure=1;
    var  dim_width=20;//每列维度之间的间距
    var  dim_height=10;//每行维度之间的间距
    var dim1_num=null;//保存最高维度的个数
    var dim2_num=null;//保存第二维度的个数
    var margin = {top: 40, right: 40, bottom: 40, left: 40},
        width = $("#chart").width() - margin.left - margin.right,
        height = $("#chart").height() - margin.top - margin.bottom;
    var color=d3.scale.category20();
    //柱状图之间的间距
    var rangeBand=4;
    var svg=d3.select(id).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("class", "graph")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    d3.json(icon,function(error,data){
        if (error) throw error;
//            Y轴的多个维度
        var y_axials=data.data.dim.dimY;
        var x_axials=data.data.dim.dimX;
        var y_axises=data.data.charts;
        var max=null;
        var newArr_title=[];
        $.each(y_axials,function(index,item){
            var newArr=[];
            newArr_title.push(item.title);
            $.each(item.names,function(index,icon){
                newArr.push(icon);
            });
//                绘制最高级维度  Y轴
            if(index==0){
                dim1_num=newArr.length;
                var texts_g=svg.append("g")
                    .attr("class", "dim"+figure)
                    .attr("transform", "translate(-"+margin.left/2+",0)");
                texts_g.selectAll(".dim"+figure)
                    .data(newArr)
                    .enter()
                    .append("text")
                    .attr("fill","#333")
                    .attr("x", (-margin.left/2))
                    .attr("y", function(d,i) {return (height/newArr.length)*i+(height/newArr.length/2)+dim_height;})
                    .text(function(d){return d;})
                    .attr("text-anchor", "top");
                figure++;
            }
//                绘制下级维度  是根据上级维度的length觉得下级维度绘制个数
            for(var r=0;r<newArr.length;r++){
                if(index==1){
                    dim2_num=newArr.length;
//                        绘制第二级维度
                    var texts_g=svg.append("g")
                        .attr("class", "dim"+figure)
                        .attr("transform", "translate(0,0)");
                    texts_g.selectAll(".dim"+figure)
                        .data(newArr)
                        .enter()
                        .append("text")
                        .attr("fill","red")
                        .attr("x", dim_width)
                        .attr("y", function(d,i) {return (height/dim1_num)*r+height/dim1_num/newArr.length*i+height/dim1_num/newArr.length/2+dim_height; })
                        .text(function(d){return d;})
                        .attr("text-anchor", "top");
                }
            }
        });
        var hint='',icon='';
        var newArr=[],newArr2=[];
        $.each(x_axials,function(index,item){
            icon=index!=(x_axials.length-1)?"/":"";
            hint+=item.title+icon;
            $.each(item.names,function(num,icon){
                index==0&&newArr.push(icon);
                index!=0&&newArr2.push(icon);
            });
            index==0&&chart_x_axis(newArr,index,width);
            if(index!=0){
                for(var r=0;r<newArr.length;r++){
                    var texts_g=svg.append("g")
                        .attr("class", "titles"+r)
                        .attr("transform", "translate("+(width/newArr.length*r+60)+","+dim_height/2+")");
                    texts_g.selectAll(".titles"+r)
                        .data(newArr2)
                        .enter()
                        .append("text")
                        .attr("fill","red")
                        .attr("x", function(d,i) {return (width/newArr.length/newArr2.length)*i+ (width/newArr.length/newArr2.length)/2; })
                        .attr("y", 0)
                        .text(function(d){return d;})
                        .attr("text-anchor", "top");
                }
            }
        });
        var y_axis=[],dataset=[],num= 0,meaTitle='';
        $.each(y_axises,function(index,item){
            max=item.maxValue+100;
            num++;
            $.each(item.names,function(r,icon){
                y_axis.push(icon);
            });
            $.each(item.values,function(r,icon){
                dataset.push(icon);
            });
            meaTitle=item.meaTitle;
        });
        var x = d3.scale.linear()
            .domain([0,max])
            .range([0, width/dataset[0].length]);
        for(var t=0;t<dim1_num*dim2_num;t++){
            var texts_g=svg.append("g")
                .attr("class", "y_axis")
                .attr("transform", "translate("+dim_width+","+dim_height+")");
            texts_g.selectAll(".y_axis")
                .data(y_axis)
                .enter()
                .append("text")
                .attr("fill","red")
                .attr("x", dim_width*2)
                .attr("y", function(d,i) {
                    return height/dim1_num/dim2_num*t+height/dim1_num/dim2_num/y_axis.length*i+dim_height+rangeBand/2;
                })
                .text(function(d){return d;})
                .attr("text-anchor", "top");

        }
        //绘制横向线条
        var lines=svg.append("g")
            .attr("class", "x_line")
            .attr("transform", "translate("+(-margin.left)+",0)");
        for(var i=0;i<=dim1_num;i++){
            lines.append("line")
                .attr("x1", 0)
                .attr("y1", height/dim1_num*i+dim_height)
                .attr("x2", width+margin.left+margin.right)
                .attr("y2",height/dim1_num*i+dim_height)
                .attr('fill',color(i));
        }
//            绘制X轴的坐标轴
        for(var h=0;h<dataset[0].length;h++) {
            var x2 = d3.scale.linear()
                .domain([0, max])
                .range([(width / dataset[0].length) * h, (width / dataset[0].length) * (h + 1)])
                .nice();
            var xAxis2 = d3.svg.axis()
                .scale(x2)
                .orient("bottom")
                .ticks(5);
            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(" + (margin.left+70) + "," + (height+dim_height) + ")")
                .call(xAxis2);
        }
        for(var e=0;e<dataset.length;e++){
            for(var r=0;r<dataset[e].length;r++){
                var rect_g=svg.append("g")
                    .attr("class", "rect")
                    .attr("transform", "translate("+(width/dataset[e].length*r+(margin.left+70))+",0)");
                rect_g.selectAll(".rect")
                    .data(dataset[e][r])
                    .enter()
                    .append("rect")
                    .attr("x", 0)
                    .attr("y", function(d,i) {
                        return height/dim1_num/dim2_num*e+height/dim1_num/dim2_num/y_axis.length*i+dim_height;
                    })
                    .attr("width",function(d,i){return  x(d);})
                    .attr("height", (height-margin.top)/dim1_num/dim2_num/y_axis.length-rangeBand/2)
                    .attr('fill',function(d,i){return color(i)})
                    .on("mouseover",function(d,i){
                        d3.select(this).attr("fill",'#e439ca');
                        var tx=parseFloat(d3.event.pageX);
                        var ty=parseFloat(d3.event.pageY);
                        $(".hint").css({"left":(tx+10)+"px","top":(ty+10)+"px"});
                        $(".hint").text(meaTitle+"："+d).show();
                    })
                    .on("mouseout",function(d,i){
                        $(".hint").text("").hide();
                        d3.select(this).attr("fill",color(i));
                    });
            }
        }

//            绘制X轴维度title
        var texts_g=svg.append("g")
            .attr("class", "title")
            .attr("transform", "translate(-"+margin.left+",-"+margin.top+")")
            .append("text")
            .attr("x", width/2)
            .attr("y", 20)
            .text(hint)
            .attr("fill","red")
            .attr("text-anchor", "top");
        function chart_x_axis(date,i,width){
            var texts_g=svg.append("g")
                .attr("class", "x_texts"+i)
                .attr("transform", "translate(60,0)");
            texts_g.selectAll(".x_texts"+i)
                .data(date)
                .enter()
                .append("text")
                .attr("fill","red")
                .attr("x", function(d,i) {return (width/date.length)*i+ (width/date.length)/2; })
                .attr("y", -margin.top/4)
                .text(function(d){return d;})
                .attr("text-anchor", "top");
        }

    });

}

// 表格
function chart_table(id,date){
    var th='',tds='';
    $.each(date,function(index,item){
        var td='';
        for(var key in item){
            if(index===0)th+='<th>'+key+'</th>';
            td+='<td>'+item[key]+'</td>';
        }
        tds+='<tr>'+td+'</tr>';
    });
    $("#"+id).find("table").remove();
    var table_text='<table><thead>'+th+'</thead><tbody>'+tds+'</tbody></table>';
    $("#"+id).append(table_text);
}

// 正在修改的柱状图
function chartComplex(id,icon,max){
    var figure=1;
    var  dim_width=20;//每列维度之间的间距
    var  dim_height=10;//每行维度之间的间距
    var dim2_num=null;//保存第二维度的个数
    var margin = {top: 40, right: 40, bottom: 40, left: 40},
        width = $("#chart").width() - margin.left - margin.right,
        height = $("#chart").height() - margin.top - margin.bottom;
    var color=d3.scale.category20();
    //柱状图之间的间距
    var rangeBand=4;
    var svg=d3.select(id).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("class", "graph")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    d3.json(icon,function(error,data){
        if (error) throw error;
        var y_axials=data.data.dim.dimY;
        var x_axials=data.data.dim.dimX;
        var charts=data.data.charts;
//            console.log(charts);
//            console.log(x_axials);
//            console.log(y_axials);
        var max=null;
        var isChart=true;
        var y_axis1=[],x_axis1=[];//Y轴第一级维度数组
        var dimValues = charts.dimValues;//坐标维度
        var meaList = charts.meaList;//坐标度量
        var dataset=[],y_axis2_len=[],dimValues_len=[];
        var dim1_num=y_axials.valueTree.length;//保存最高维度的个数
        //绘制Y轴维度
        $.each(y_axials.valueTree,function(index,item){
            y_axis1.push(item.value);
            var y_axis2=[];//Y轴第二级维度数组
            // 绘制Y轴第一级维度
            if((index+1)==y_axials.valueTree.length) {
                var texts_g = svg.append("g")
                    .attr("class", " y_axis1" + index)
                    .attr("transform", "translate(-" + margin.left / 2 + ",0)");
                texts_g.selectAll(" y_axis1" + index)
                    .data(y_axis1)
                    .enter()
                    .append("text")
                    .attr("fill", "#333")
                    .attr("x", (-margin.left / 2))
                    .attr("y", function (d, i) {
                        return (height / y_axis1.length) * i + (height / y_axis1.length / 2) + dim_height;
                    })
                    .text(function (d) {return d;})
                    .attr("text-anchor", "top");
            }
            $.each(item.children,function(num,icon){
                y_axis2.push(icon.value);
                //绘制Y轴第二级维度
                if((num+1)==item.children.length){
                    y_axis2_len.push(y_axis2.length);
                    var texts_g = svg.append("g")
                        .attr("class", " y_axis2" + index)
                        .attr("transform", "translate(0,10)");
                    texts_g.selectAll(" y_axis2" + index)
                        .data(y_axis2)
                        .enter()
                        .append("text")
                        .attr("fill", "#333")
                        .attr("x", (margin.left / 2))
                        .attr("y", function (d, i) {
                            return height / y_axials.valueTree.length*index+(height / y_axials.valueTree.length/y_axis2.length*i)+height / y_axials.valueTree.length/y_axis2.length/2;
                        })
                        .text(function (d) {return d;})
                        .attr("text-anchor", "top");
                }
            });
        });
        //  绘制图形的坐标维度
        if(charts.meaAxis=="x") {//当度量在x轴时
            $.each(dimValues,function(dim_num,dim_item){
                dimValues_len.push(dim_item.length);
                if(dim_num==0||dim_num==1){
                    var texts_g = svg.append("g")
                        .attr("class", " dim" + figure)
                        .attr("transform", "translate("+dim_width+",10)");
                    texts_g.selectAll(" dim" + figure)
                        .data(dim_item)
                        .enter()
                        .append("text")
                        .attr("fill", "#333")
                        .attr("x",dim_width*2)
                        .attr("y",function(d,i) {return height/y_axials.valueTree.length/y_axis2_len[0]*dim_num+height/y_axials.valueTree.length/y_axis2_len[0]/dim_item.length*i+height/y_axials.valueTree.length/y_axis2_len[0]/dim_item.length/2;
                        })
                        .text(function (d) {return d;})
                        .attr("text-anchor", "top");
                }else if(dim_num==2||dim_num==3||dim_num==4){
                    var texts_g = svg.append("g")
                        .attr("class", " dim" + figure)
                        .attr("transform", "translate("+dim_width+",10)");
                    texts_g.selectAll(" dim" + figure)
                        .data(dim_item)
                        .enter()
                        .append("text")
                        .attr("fill", "#333")
                        .attr("x",dim_width*2)
                        .attr("y",function(d,i) {return height/y_axials.valueTree.length+height/y_axials.valueTree.length/y_axis2_len[1]*(dim_num-2)+height/y_axials.valueTree.length/y_axis2_len[1]/dim_item.length*i+height/y_axials.valueTree.length/y_axis2_len[1]/dim_item.length/2;
                        })
                        .text(function (d) {return d;})
                        .attr("text-anchor", "top");
                }
                figure++;
            });
        }
        //绘制X轴维度
        $.each(x_axials.valueTree,function(index,item){
            x_axis1.push(item.value);
            var x_axis2=[];//Y轴第二级维度数组
            // 绘制x轴第一级维度
            if((index+1)==x_axials.valueTree.length) {
                var texts_g = svg.append("g")
                    .attr("class", " x_axis1" + index)
                    .attr("transform", "translate(60,0)");
                texts_g.selectAll( " x_axis1" + index)
                    .data(x_axis1)
                    .enter()
                    .append("text")
                    .attr("fill", "#333")
                    .attr("x", function(d,i) {return (width/x_axis1.length)*i+ (width/x_axis1.length)/2; })
                    .attr("y", -margin.top/4)
                    .text(function (d) {return d;})
                    .attr("text-anchor", "top");
            }
            $.each(item.children,function(num,icon){
                x_axis2.push(icon.value);
                //绘制x轴第二级维度
                if((num+1)==item.children.length){
                    var texts_g = svg.append("g")
                        .attr("class", " x_axis2" + index)
                        .attr("transform", "translate(60,0)");
                    texts_g.selectAll(" x_axis2" + index)
                        .data(x_axis2)
                        .enter()
                        .append("text")
                        .attr("fill", "#333")
                        .attr("x", function (d, i) {
                            return width / x_axials.valueTree.length*index+(width / x_axials.valueTree.length/x_axis2.length*i)+width / x_axials.valueTree.length/x_axis2.length/2;
                        })
                        .attr("y",10)
                        .text(function (d) {return d;})
                        .attr("text-anchor", "top");
                }
            });
        });
        //绘制柱状图
        var x =null,meaTitle;
        $.each(meaList,function(index,item){
            max=item.maxValue;
            meaTitle=item.meaTitle;
            x = d3.scale.linear()
                .domain([0,max])
                .range([0, width/6]);
            dataset=item.meaValues;
            for(var e=0;e<dataset.length;e++){
                for(var r=0;r<dataset[e].length;r++){
                    if(e==0||e==1){
                        var rect_g=svg.append("g")
                            .attr("class", "rect")
                            .attr("transform", "translate("+(width/dataset[e].length*r+(margin.left+70))+",0)");
                        rect_g.selectAll(".rect")
                            .data(dataset[e][r])
                            .enter()
                            .append("rect")
                            .attr("x", 0)
                            .attr("y", function(d,i) {
                                return height/dim1_num/y_axis2_len[0]*e+height/dim1_num/y_axis2_len[0]/dimValues_len[e]*i+dim_height;
                            })
                            .attr("width",function(d,i){return  x(d);})
                            .attr("height", (height-margin.top)/dim1_num/y_axis2_len[0]/dimValues_len[e]-rangeBand/2)
                            .attr('fill',function(d,i){return color(i)})
                            .on("mouseover",function(d,i){
                                d3.select(this).attr("fill",'#e439ca');
                                var tx=parseFloat(d3.event.pageX);
                                var ty=parseFloat(d3.event.pageY);
                                $(".hint").css({"left":(tx+10)+"px","top":(ty+10)+"px"});
                                $(".hint").text(meaTitle+"："+d).show();
                            })
                            .on("mouseout",function(d,i){
                                $(".hint").text("").hide();
                                d3.select(this).attr("fill",color(i));
                            });
                    } else if(e==2){
                        var rect_g=svg.append("g")
                            .attr("class", "rect")
                            .attr("transform", "translate("+(width/dataset[e].length*r+(margin.left+70))+",0)");
                        rect_g.selectAll(".rect")
                            .data(dataset[e][r])
                            .enter()
                            .append("rect")
                            .attr("x", 0)
                            .attr("y", function(d,i) {
                                return height/dim1_num+height/dim1_num/y_axis2_len[1]/dimValues_len[2]*i+dim_height;
                            })
                            .attr("width",function(d,i){return  x(d);})
                            .attr("height", (height-margin.top)/dim1_num/y_axis2_len[1]/dimValues_len[2]-rangeBand/2)
                            .attr('fill',function(d,i){return color(i)})
                            .on("mouseover",function(d,i){
                                d3.select(this).attr("fill",'#e439ca');
                                var tx=parseFloat(d3.event.pageX);
                                var ty=parseFloat(d3.event.pageY);
                                $(".hint").css({"left":(tx+10)+"px","top":(ty+10)+"px"});
                                $(".hint").text(meaTitle+"："+d).show();
                            })
                            .on("mouseout",function(d,i){
                                $(".hint").text("").hide();
                                d3.select(this).attr("fill",color(i));
                            });
                    }else if(e==3){
                        var rect_g=svg.append("g")
                            .attr("class", "rect")
                            .attr("transform", "translate("+(width/dataset[e].length*r+(margin.left+70))+",0)");
                        rect_g.selectAll(".rect")
                            .data(dataset[e][r])
                            .enter()
                            .append("rect")
                            .attr("x", 0)
                            .attr("y", function(d,i) {
                                return height/dim1_num+height/dim1_num/y_axis2_len[1]/dimValues_len[3]*2+height/dim1_num/y_axis2_len[1]/dimValues_len[3]*i+dim_height;
                            })
                            .attr("width",function(d,i){return  x(d);})
                            .attr("height", (height-margin.top)/dim1_num/y_axis2_len[1]/dimValues_len[3]-rangeBand/2)
                            .attr('fill',function(d,i){return color(i)})
                            .on("mouseover",function(d,i){
                                d3.select(this).attr("fill",'#e439ca');
                                var tx=parseFloat(d3.event.pageX);
                                var ty=parseFloat(d3.event.pageY);
                                $(".hint").css({"left":(tx+10)+"px","top":(ty+10)+"px"});
                                $(".hint").text(meaTitle+"："+d).show();
                            })
                            .on("mouseout",function(d,i){
                                $(".hint").text("").hide();
                                d3.select(this).attr("fill",color(i));
                            });
                    }else if(e==4){
                        var rect_g=svg.append("g")
                            .attr("class", "rect")
                            .attr("transform", "translate("+(width/dataset[e].length*r+(margin.left+70))+",0)");
                        rect_g.selectAll(".rect")
                            .data(dataset[e][r])
                            .enter()
                            .append("rect")
                            .attr("x", 0)
                            .attr("y", function(d,i) {
                                return height/dim1_num+height/dim1_num/y_axis2_len[1]/dimValues_len[4]*2+height/dim1_num/y_axis2_len[1]/dimValues_len[4]*i+dim_height;
                            })
                            .attr("width",function(d,i){return  x(d);})
                            .attr("height", (height-margin.top)/dim1_num/y_axis2_len[1]/dimValues_len[4]-rangeBand/2)
                            .attr('fill',function(d,i){return color(i)})
                            .on("mouseover",function(d,i){
                                d3.select(this).attr("fill",'#e439ca');
                                var tx=parseFloat(d3.event.pageX);
                                var ty=parseFloat(d3.event.pageY);
                                $(".hint").css({"left":(tx+10)+"px","top":(ty+10)+"px"});
                                $(".hint").text(meaTitle+"："+d).show();
                            })
                            .on("mouseout",function(d,i){
                                $(".hint").text("").hide();
                                d3.select(this).attr("fill",color(i));
                            });
                    }

                }
            }
//            绘制X轴的坐标轴
            for(var h=0;h<dataset[0].length;h++) {
                var x2 = d3.scale.linear()
                    .domain([0, max])
                    .range([(width / dataset[0].length) * h, (width / dataset[0].length) * (h + 1)])
                    .nice();
                var xAxis2 = d3.svg.axis()
                    .scale(x2)
                    .orient("bottom")
                    .ticks(5);
                svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(" + (margin.left+70) + "," + (height+dim_height) + ")")
                    .call(xAxis2);
            }
        });


        var hint='',icon='';


//            绘制X轴维度title
        var texts_g=svg.append("g")
            .attr("class", "title")
            .attr("transform", "translate(-"+margin.left+",-"+margin.top+")")
            .append("text")
            .attr("x", width/2)
            .attr("y", 20)
            .text(hint)
            .attr("fill","red")
            .attr("text-anchor", "top");

    });
}

// 多维柱状图
function manyChart (id,data){
    var figure=1;
    var  dim_width=20;//每列维度之间的间距
    var  dim_height=10;//每行维度之间的间距
    var dim2_num=null;//保存第二维度的个数
    var idA = $(id);
    var margin = {top: 40, right: 40, bottom: 20, left: 20},
        width = idA.width() - margin.left - margin.right,
        height = idA.height() - margin.top - margin.bottom;
    var color=d3.scale.category20();
    //柱状图之间的间距
    var rangeBand=4;
    var svg=d3.select(id).append("svg")
        .attr("width", idA.width())
        .attr("height", idA.height())
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("viewBox", "0 0 "+ (width + margin.left + margin.right) +" "+ (height + margin.top + margin.bottom) +"")
        .append("g")
        .attr("class", "graph")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var y_axials=data.dim.dimY;
    var x_axials=data.dim.dimX;
    var charts=data.charts;
//            console.log(charts);
//            console.log(x_axials);
//            console.log(y_axials);
    var max=null;
    var isChart=true;
    var y_axis1=[],x_axis1=[];//Y轴第一级维度数组
    var dimValues = charts.dimValues;//坐标维度
    var meaList = charts.meaList;//坐标度量
    var dataset=[],y_axis2_len=[],dimValues_len=[];
    var dim1_num=y_axials.valueTree.length;//保存最高维度的个数
    var fontSize = parseInt($("body").css("font-size"));

    var XLeft = 0;
    var YTop = 0;
    var XRight = 0;


    var record = [];


    var Yfq = 0;
    var ma = cale(JSON.parse(JSON.stringify(y_axials.valueTree)),height - YTop);
    YAxis(ma);
    function YAxis(data){
        var s = 0;
        var len = [];
        var children = [];
        //绘制Y轴维度
        var texts_g = svg.append("g")
            .attr("transform", "translate(0,"+ dim_height +")");
        texts_g.selectAll()
            .data(data)
            .enter()
            .append("text")
            .attr("fill", "#333")
            .attr("y", function (d, i) {
                // 将子集数据存入数组中
                if(d.children){
                    var l = d.children.length;
                    y_axis2_len.push(l);
                    $.each(d.children,function(x,y){
                        var m = JSON.parse(JSON.stringify(y));
                        m.cale = d.cale/l;
                        m.calePar = s;
                        m.count = x;
                        children.push(m);
                    });
                }else{
                    if(charts.meaAxis === "x" ){
                        record.push(d);
                    }
                }
                var c = d.cale * d.count?d.cale * d.count:0;
                var h = d.calePar + c + d.cale/2;
                s += d.cale;
                len.push((d.value + "").length);
                return h;
            })
            .attr("x",(-margin.top/4) + margin.top*Yfq)
            .text(function (d) {return d.value;})
            .attr("text-anchor", "top");

        XLeft += Math.abs(d3.max(len) * fontSize);  // 记录其宽度;
        if(children.length > 0){
            Yfq ++;
            YAxis(children);
        }
    }

    function cale(data,leng){
        var t = 0;
        $.each(data,function(index,val){
            val.cale = leng/data.length;
            val.calePar = t;
            t += leng/data.length;
        });
        return data;
    }


    //绘制X轴维度
    var Xfq = 0;
    var maX = cale(JSON.parse(JSON.stringify(x_axials.valueTree)),width - XLeft - 90 );
    Xaxis(maX);
    function Xaxis(data){
        var s = 0;
        var children = [];
        var texts_g = svg.append("g")
            .attr("transform", "translate("+ XLeft +",0)");
        texts_g.selectAll()
            .data(data)
            .enter()
            .append("text")
            .attr("fill", "#333")
            .attr("x", function(d,i) {
                // 将子集数据存入数组中  // 将子集数据存入数组中
                if(d.children){
                    var l = d.children.length;
                    y_axis2_len.push(l);
                    $.each(d.children,function(x,y){
                        var m = JSON.parse(JSON.stringify(y));
                        m.cale = d.cale/l;
                        m.calePar = s;
                        m.count = x;
                        children.push(m);
                    });
                }else{
                    if(charts.meaAxis === "y" ){
                        record.push(d);
                    }
                }
                var c = d.cale * d.count?d.cale * d.count:0;
                var h = d.calePar + c + d.cale/2 + dim_height;
                s += d.cale;
                return h;
            })
            .attr("y",(-margin.top/4) + Xfq * margin.top/2)
            .text(function (d) {
                return d.value;
            });
        YTop += Math.abs((-margin.top/4) + Xfq * margin.top/2 );  // 记录高度
        if(children.length > 0){
            Xfq++;
            Xaxis(children);
        }
    }

    handle(record);
    var hanData = [];
    function handle(record){
        var handleData = [];
        if(dimValues.length > 1)
            $.each(dimValues,function(index,val){
                var a = [];
                $.each(val,function(x,y){
                    var b = {};
                    b.value = y;
                    b.children = null;
                    a.push(b);
                });
                record[index].children = a;
            });
        var s = 0;
        $.each(record,function(i,d){
            // 将子集数据存入数组中  // 将子集数据存入数组中
            if(d.children){
                var l = d.children.length;
                y_axis2_len.push(l);
                $.each(d.children,function(x,y){
                    var m = JSON.parse(JSON.stringify(y));
                    m.cale = d.cale/l;
                    m.calePar = s;
                    m.count = x;
                    handleData.push(m);
                });
            }
            s += d.cale;
        });
        hanData = JSON.parse(JSON.stringify(handleData));
        if(charts.meaAxis === "x" ){
            Yfq++;
            YAxis(handleData)
        }else{
            Xfq++;
            Xaxis(handleData);

        }
        togram(handleData);
    }

//        section();
//        function section(){
//            var z = [];
//            $.each(dimValues,function(index,val){
//                $.each(val,function(x,y){
//                    z.push(y);
//                })
//            });
//            var texts_g = svg.append("g")
//                .attr("class", " dim" + figure)
//                .attr("transform", "translate("+dim_width+",10)");
//            texts_g.selectAll(" dim" + figure)
//                .data(z)
//                .enter()
//                .append("text")
//                .attr("fill", "#333")
//                .attr("x",function(d,i){
//                    if(charts.meaAxis === "x" ){
//                        return width - margin.right/1.5;
//                    }else{
//                        dimValues_len.push(d.length);
//                        return XLeft + (width - XLeft)/z.length * i;
//                    }
//                })
//                .attr("y",function(d,i) {
//                    if (charts.meaAxis === "x") {
//                        dimValues_len.push(d.length);
//                        return YTop + (height - YTop)/z.length * i;
//                    } else {
//                        return height - margin.bottom/4;
//                    }
//                })
//                .text(function (d) {return d;})
//                .attr("text-anchor", "top")
//        }

    //            绘制X轴的坐标轴
    function togram(handleData){
        var measureLength = [];
        measure(meaList,measureLength); // 度量

        $.each(meaList,function(index,val){
            var meaY = [];
            $.each(val.meaValues,function(x,y){
                var cale = 0;
                var meaX = [];

                $.each(y,function(z,w){
                    $.each(w,function(a,b){
                        meaX.push(b);
                    });
                });
                meaY.push(meaX);

                var measuY = 0
                    ,measuX = 0
                    ,ascending = null
                    ,xData = null;

//                    console.log(measureLength,index);
                if(charts.meaAxis === "y"){

                    if(measureLength.length >= val.meaValues.length){
                        measuY = measureLength[x][0] + measureLength[x][2]
                    }else{
                        measuY = x * 100;
                    }
                    // console.log(XLeft);
                    measuX = XLeft;
                    if(handleData[0]){
                        ascending = handleData[0].cale / 2 - dim_height
                    }else{
                        ascending = height/val.meaValues.length;
                    }

                }else{
                    measuY = -10;

                    if(measureLength.length >= val.meaValues.length){
                        measuX = measureLength[x][0] + measureLength[x][2]
                    }else{
                        measuX = x * 100;
                    }

                    if(handleData[0]){
                        ascending = handleData[0].cale / 2 - dim_height
                    }else{
                        ascending = width/val.meaValues.length;
                    }
                }

                var range = measureLength[x][1] - measureLength[x][0];

                var x = d3.scale.linear()
                    .domain([0,measureLength[x][3]])
                    .range([0, range]);


                var rect_g=svg.append("g")
                    .attr("class", "rect")
                    .attr("transform", "translate("+ measuX +", "+ measuY +" )");
                rect_g.selectAll(".rect")
                    .data(meaX)
                    .enter()
                    .append("rect")
                    .attr("x", function(d,i){
                        if(charts.meaAxis === "y"){
                            // XY轴计算公式
                            if(handleData[i]){
                                var c = handleData[i].cale * handleData[i].count?handleData[i].cale * handleData[i].count:0;
                                var h = handleData[i].calePar + c + handleData[i].cale/2 + dim_height;
                                return h + ascending * index + dim_height * index ;
                            }else{
                                return ascending * index + dim_height * index ;
                            }
                        }else{
                            return 0;
                        }
                    })
                    .attr("y", function(d,i) {
                        if(charts.meaAxis === "y"){
                            return 0;
                        }else{
                            // XY轴计算公式
                            if(handleData[i]){
                                var c = handleData[i].cale * handleData[i].count?handleData[i].cale * handleData[i].count:0;
                                var h = handleData[i].calePar + c + handleData[i].cale/2 + dim_height;
                                return h + ascending * index + dim_height * index ;
                            }else{
                                return ascending * index + dim_height * index ;
                            }
                        }
                    })
                    .attr("width",function(d,i){
                        if(charts.meaAxis === "y"){
                            if(handleData[i]){
                                ascending = d3.min([ascending,handleData[i].cale / 2 - dim_height]);  // 取最小值显示
                                return ascending;
                            }else{
                                return 20;
                            }
                        }else{
                            return d3.max([x(d),1]);
                        }
                    })
                    .attr("height", function(d,i){
                        if(charts.meaAxis === "y"){
                            return d3.max([x(d),1]);
                        }else{
                            if(handleData[i]){
                                ascending = d3.min([ascending,handleData[i].cale / 2 - dim_height]);  // 取最小值显示
                                return ascending;
                            }else{
                                return 20;
                            }
                        }
                    })
                    .attr('fill',function(d,i){
                        return color(index)
                    })
                    .on("mouseover",function(d,i){
                        d3.select(this).attr("fill",'#e439ca');
                        var tx=parseFloat(d3.event.pageX);
                        var ty=parseFloat(d3.event.pageY);
                        $(".hint").css({"left":(tx+10)+"px","top":(ty+10)+"px"});
                        $(".hint").text(val.meaTitle+"："+d).show();
                    })
                    .on("mouseout",function(d,i){
                        $(".hint").text("").hide();
                        d3.select(this).attr("fill",color(index));
                    });





            });
        });

    }


    function measure(da,measureLength){
        var maxnumber = [];
        $.each(da,function(index,val){
            maxnumber.push(val.maxValue);
        });
        var max = d3.max(maxnumber);
        var maxLength = ( max + "").length;
        var data = da[0].meaValues;
        var mX = 0
            ,mY = 0
            ,mXY = 0
            ,range = 0
            ,orient = "right"
            ,ticks = 2;
        if(charts.meaAxis === "y"){
            mX = width - margin.right;
//                if(maxLength > 6) mX = mX - 12 * (maxLength - 6);
//                console.log( 12 * (maxLength - 6));
            mY = dim_height + YTop;
//                range = height - YTop - dim_height - (data.length-1) * mY;
            range = height - YTop - dim_height;
            orient = "right";
            ticks = 3;
            mXY = mY;
        }else{
            mX = XLeft;
            mY = height;
//                range = width - XLeft - (data.length-1) * mY;
            range = width - XLeft;
            orient = "bottom";
            ticks = 5;
            mXY = mX;
        }
        for(var h=0;h<data.length;h++) {
//                measureLength.push([(range / data.length) * h + (data.length-1) * mY , (range / data.length) * (h + 1)  + (data.length-1) * mY,mXY,max]);
            measureLength.push([(range / data.length) * h , (range / data.length) * (h + 1),mXY,max]);
            var x2 = d3.scale.linear()
                .domain([0, max])
                //                    .range([(range / data.length) * h + (data.length-1) * mY , (range / data.length) * (h + 1) + (data.length-1) * mY])
                .range([(range / data.length) * h , (range / data.length) * (h + 1)])
                .nice();
            var xAxis2 = d3.svg.axis()
                .scale(x2)
                .orient(orient)
                .ticks(ticks)
                .tickFormat(d3.format("s"));             // 数字后面格式
            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", function(d,i){
//                        return "translate(" + mX + "," + mY * h + ")";
                    return "translate(" + mX + "," + mY + ")";
                })
                .call(xAxis2);
        }
        return measureLength;
    }


//            绘制X轴维度title
    var texts_g = svg.append("g")
        .attr("class", "title")
        .attr("transform", "translate(-"+margin.left+",-"+margin.top+")")
        .append("text")
        .attr("x", width/2)
        .attr("y", height)
        .attr("fill","red")
        .attr("text-anchor", "top");
    texts_g.selectAll()
        .data(meaList)
        .enter()
        .append("text")
        .text(function(d,i){
            return d.meaTitle;
        });

}

// 2017-10-25 饼图
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

// 2017-10-26 折线图
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
















// 存放数据格式
// 0-表格；101-柱状图；102-拆线图；103-圆饼图；201-文本；202-图片；203-按钮
var gpData = [
    {
        "name":"表格",
        "shux":"table",
        "type":0
    },
    {
        "name":"柱状图",
        "shux":"chart",
        "type":101
    },
    {
        "name":"折线图",
        "shux":"chart",
        "type":102
    },
    {
        "name":"饼图",
        "shux":"chart",
        "type":103
    },
    {
        "name":"文本",
        "shux":"text",
        "type":201
    },
    {
        "name":"图片",
        "shux":"image",
        "type":202
    },
    {
        "name":"按钮",
        "shux":"button",
        "type":203
    },
];
// 根据传入，返回name或者type
function eachGPdata(data){
    var z = null;
    if(isNaN(data)){
        $.each(gpData,function(index,val){
            if(data === val["name"]){
                z =  val["type"];
            }
        });
    }else{
        $.each(gpData,function(index,val){
            if(data === val["type"]){
                z =  val["name"];
            }
        });
    }
    return z ;
}