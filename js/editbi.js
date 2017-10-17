$(function(){
	//获取BI Set列表接口
	getBiSet(projectId);
	function getBiSet(projectId){
		$.ajax({
            type:'get',
            url:'/bi/report/v1/biset/list.json',
            dataType:'json',
            data:{
                "projectId":projectId,
                "dbType":"0"
            },
            success:function(res){
              if(res.code===0){
              	if(res.message === "SUCCESS"){
              		var data = res.data,
              		html = '+',
              		biSetId = '';
              		$.each(data,function(i,item){
              			html += `
						<option value="${item.biSetName}" biSetId="${item.biSetId}">${item.biSetName}</option>
              			`;
              		});
              		$(".data-source-box select").append(html);
                	biSetId = $(".data-source-box select option:selected").attr("biSetId");
                  	getBiDataModel(biSetId);
              	}
              }
            },
            error:function(res){
                console.log(res);
            }
        });
	}
	$(".data-source-box select").change(function(){
		var $biSetId = $(this).find("option:selected").attr("biSetId");
		console.log($biSetId);
		getBiDataModel($biSetId);
	})
	
	//获取数据模型接口
	//getBiDataModel(biSetId);
	function getBiDataModel(biSetId){
		$.ajax({
            type:'get',
            url:'/bi/report/v1/datamodel.json',
            dataType:'json',
            data:{
                "projectId":projectId,
                "pageId":pageId,
                "biSetId":biSetId
            },
            success:function(res){
             if(res.code === 0){
             	if(res.message === "SUCCESS"){
             		var data = res.data,
             		dimensions = data.dimensions;
             		measures = data.measures;
             		modelId = data.modelId;
                    dhtml = '';
             		mhtml = '';
             		//维度
             		$.each(dimensions,function(i,item){
             			dhtml += `
             				<li fieldId="${item.fieldId}" fieldName="${item.fieldName}" dataType="${item.dataType}" disCon="${item.disCon}" defaultAggregation="${item.defaultAggregation}" dim_mea="0">${item.fieldAlias}</li>
             			`;
             		});
             		$(".dimension-box .placeholder").empty().append(dhtml);
             		//度量
             		$.each(measures, function(i,item) {
             			mhtml += `
             				<li fieldId="${item.fieldId}" fieldName="${item.fieldName}" dataType="${item.dataType}" disCon="${item.disCon}" defaultAggregation="${item.defaultAggregation}" dim_mea="1">${item.fieldAlias}</li>
             			`;
             		});
           			$(".metric-box .placeholder").empty().append(mhtml);
             		//设置度量维度可拖拽
             		$( ".placeholder li").draggable({
                        // same-resource ul li
					    appendTo: "body",
					    helper: "clone"
					});
             	}
             }
            },
            error:function(res){
                console.log(1);
            }
        });
	}
	
	//x Axis
	$(".set-axis").droppable({
		accept: ".placeholder li",
		drop:function(event, ui){
			var lis = [];
			$(this).find("li").each(function(){
				lis.push($(this).attr("fieldId"));
			});
			console.log(id_);
			if($.inArray(ui.draggable.attr("fieldId"),lis)===-1 && id_!==""){
				$( "<li dataType="+ui.draggable.attr("dataType")+" dim_mea="+ui.draggable.attr("dim_mea")+" fieldName="+ui.draggable.attr("fieldName")+" disCon="+ui.draggable.attr("disCon")+" defaultAggregation='"+ui.draggable.attr("defaultAggregation")+"' fieldId='"+ui.draggable.attr("fieldId")+"'></li>" ).html( ui.draggable.html() ).appendTo( $(this).find("ul") );
                pillsLi();
			}else if($.inArray(ui.draggable.attr("fieldId"),lis)!==-1 && id_!==""){
				layer.alert('已存在！！！')
			}else{
				layer.alert('请先选择添加数据的图表元素')
			}
		}
	});
	
	//y Axis
	// $(".set-y").droppable({
	// 	accept: ".placeholder li",
	// 	drop:function(event, ui){
	// 		var lis = [];
	// 		$(this).find("li").each(function(){
	// 			lis.push($(this).attr("fieldId"));
	// 		});
	// 		if($.inArray(ui.draggable.attr("fieldId"),lis)==-1&&id_!="") {
     //            $("<li dataType=" + ui.draggable.attr("dataType") + " dim_mea=" + ui.draggable.attr("dim_mea") + " fieldName=" + ui.draggable.attr("fieldName") + " disCon=" + ui.draggable.attr("disCon") + " defaultAggregation='" + ui.draggable.attr("defaultAggregation") + "' fieldId='" + ui.draggable.attr("fieldId") + "'></li>").html(ui.draggable.html()).appendTo($(this).find("ul"));
     //            $("#" + id_).find("svg").remove();
     //            if (id_.indexOf("chart") != -1) {
    //
     //            } else if ($.inArray(ui.draggable.attr("fieldId"), lis) != -1 && id_ != "") {
     //                layer.alert('已存在！！！')
     //            } else {
     //                layer.alert('请先选择添加数据的图表元素')
     //            }
     //        }
	// 	}
	// });

	//定义接收筛选器的元素
	$( ".data-screening" ).droppable({
		accept: ".placeholder li",
		drop: function( event, ui ) {
			var lis = [];
			$(this).find("li").each(function(){
				lis.push($(this).attr("fieldId"));
			});
			console.log($.inArray(ui.draggable.attr("fieldId"),lis)==-1);
			if($.inArray(ui.draggable.attr("fieldId"),lis)==-1&&id_!=""){
                $( "<li dataType="+ui.draggable.attr("dataType")+" dim_mea="+ui.draggable.attr("dim_mea")+" fieldName="+ui.draggable.attr("fieldName")+" disCon="+ui.draggable.attr("disCon")+" defaultAggregation='"+ui.draggable.attr("defaultAggregation")+"' fieldId='"+ui.draggable.attr("fieldId")+"'></li>" ).html( ui.draggable.html() ).appendTo( $(this).find("ul") );
			}else if($.inArray(ui.draggable.attr("fieldId"),lis)!=-1&&id_!=""){
                layer.alert('已存在！！！')
            }else{
                layer.alert('请先选择添加数据的图表元素')
            }
		}
	});
    //定义筛选器移除元素
    $(".set-param-box").droppable({
        accept: ".pills li",
        drop: function( event, ui ) {
            if($(ui.draggable).parents(".data").length==0){
                $(ui.draggable).remove();
            }
        }
    });
	
	//修改字段别名
	function setBiFieldName(id,name){
		$.ajax({
            type:'PUT',
            url:'/bi/report/v1/dataModel/fieldAlias.json',
            dataType:'json',
            data:{
                "projectId":projectId,
                "fieldId":id,
                "fieldAlias":name
            },
            success:function(res){
              if(res.code===0){
				layer.msg('修改成功!');
              }
            },
            error:function(res){
                console.log(res);
            }
        });
	}
	
	//右键
 context.attach('.pills ul li', [
        {header: '属性'},
        {
            text: '修改显示名称',
            action: function (e) {
            	var fieldAlias = '';
            	var id = context.getClickEle().attr("fieldid");
            	console.log(context.getClickEle())
                layer.confirm('<input class="none" type="text" style="display:block;margin:0 auto;width:160px;height:14px;padding:6px;border:1px solid #ccc;font-size:12px;" value="' + $.trim(context.getClickEle().find("span").text()) + '"/>', {
                    btn: ['确定', '取消'], //按钮
                    yes: function (index) {
                        $(context.getClickEle()).find("span").text($(".none").val());
                        fieldAlias=$(".none").val();
//									save_config("x",id_,field,$(".none").val(),order,dataType,dim_mea,dis_con,aggregation);
                        layer.close(index);
                        setBiFieldName(id,fieldAlias);//修改字段名称
                    }
                });
                
            }
        },
        {
            text: '聚合方式', subMenu: [
            {header: '默认值'},
            {
                text: '最大值',
                action: function (e) {
                    context.getClickEle().attr("aggregation","MAX");
                    aggregation="MAX";
//								save_config("x",id_,field,$(".none").val(),order,dataType,dim_mea,dis_con,aggregation);
                }
            },
            {
                text: '最小值',
                action: function (e) {
                    context.getClickEle().attr("aggregation","MIN");
                    aggregation="MIN";
//								save_config("x",id_,field,$(".none").val(),order,dataType,dim_mea,dis_con,aggregation);
                }
            },
            {
                text: '平均值',
                action: function (e) {
                    context.getClickEle().attr("aggregation","AVG");
                    aggregation="AVG";
//								save_config("x",id_,field,$(".none").val(),order,dataType,dim_mea,dis_con,aggregation);
                }
            },{
                text: '求和（默认）',
                action: function (e) {
                    context.getClickEle().attr("aggregation","SUM");
                    aggregation="SUM";
//								save_config("x",id_,field,$(".none").val(),order,dataType,dim_mea,dis_con,aggregation);
                }
            },{
                text: '计数',
                action: function (e) {
                    context.getClickEle().attr("aggregation","COUNT");
                    aggregation="COUNT";
//								save_config("x",id_,field,$(".none").val(),order,dataType,dim_mea,dis_con,aggregation);
                }
            },{
                text: '去重计数',
                action: function (e) {
                    context.getClickEle().attr("aggregation","DCOUNT");
                    aggregation="DCOUNT";
//								save_config("x",id_,field,$(".none").val(),order,dataType,dim_mea,dis_con,aggregation);
                }
            }
        ]
        },
        {
            text: '筛选器',
            action: function (e) {
                var text="<li dataType="+context.getClickEle().attr("dataType")+" dim_mea="+context.getClickEle().attr("dim_mea")+" dis_con="+context.getClickEle().attr('dis_con')+" data_id='"+context.getClickEle().attr('data_id')+"' aggregation='"+context.getClickEle().attr('aggregation')+"'>"+context.getClickEle().html()+"</li>";
                $("#filter .ui-widget-content ol").append(text);
            }
        },
        {
            text: '空值处理',
            action: function (e) {

            }
        },
        {
            text: '移除',
            action: function (e) {
                context.getClickEle().remove();
            }
        }

    ]);
    
	
	//去左右空格;
	function trim(s){
		return s.replace(/(^\s*)|(\s*$)/g, "");
	}

    //文本的颜色初始化
    $('[name="unique-name-1"]').paletteColorPicker();


});//jquery end 

// 调换X轴和Y轴
function xyChange(){
    var htmlX = $(".x-pills ul").html();
    var htmlY = $(".y-pills ul").html();
    $(".x-pills ul").empty().html(htmlY);
    $(".y-pills ul").empty().html(htmlX);
    pillsLi();
}

function pillsLi(){
    $( ".pills li").draggable({
        appendTo: "body",
        helper: "clone"
    });
}
function clear(id){
    var choose = true;
    eleFocus(); // 根据现在选中类型，变化
    $.each(save_arr,function(index,item) {
        if(item.cid === id && item.queryJson) {
            var x_param='',y_param='',filter='';
            if(item.queryJson.x){
                $.each(item.queryJson.x,function(x,item){
                    x_param += `<li datatype="${ item.dataType }" dim_mea="${ item.dimMea }" fieldname="${ item.field }" discon="${ item.disCon }" defaultaggregation="${ item.aggregation }"  class="ui-draggable">${ item.fieldAlias }</li>`;
                });
            }
            if(item.queryJson.y){
                $.each(item.queryJson.y,function(y,item){
                    y_param += `<li datatype="${ item.dataType }" dim_mea="${ item.dimMea }" fieldname="${ item.field }" discon="${ item.disCon }" defaultaggregation="${ item.aggregation }"  class="ui-draggable">${ item.fieldAlias }</li>`;
                });
            }
            if(item.queryJson.filter){
                $.each(item.queryJson.filter,function(y,item){
                    filter += `<li datatype="${ item.dataType }" dim_mea="${ item.dimMea }" fieldname="${ item.field }" discon="${ item.disCon }" defaultaggregation="${ item.aggregation }"  class="ui-draggable">${ item.fieldAlias }</li>`;
                });
            }
            $(".x-pills ul").empty().html(x_param);
            $(".y-pills ul").empty().html(y_param);
            $(".datas-pills ul").empty().html(filter);

            pillsLi();

            // 全部属性
            var type = eachGPdata(item.type);
            $(".chart-type-val span").text(type);
            // 遍历修改颜色
            $.each($(".chart-type-lists ul li "),function(index,val){
               if($(val).find("span").text() === type){
                    $(val).addClass("active")
                        .siblings().removeClass();
               }
            });

            choose = false;
        }else{
            if(choose){
                $(".x-pills ul").html("");
                $(".y-pills ul").html("");
                $(".datas-pills ul").html("");
                $(".chart-type-val span").text("饼图");
            }
        }
    });
    
}

// 根据现在选中类型，变化
function eleFocus(){
    var bur = true;
    $.each($(".resize-item"),function(index,val){
        if($(val).find(".resize-panel").css("display") === "block"){
            typeHideShow($(val).attr("id"),$(val).attr("data-type"));
            bur = false;
        }
    });
    if(bur){
        id_ = "";
        typeHideShow(id_,null);
    }
}

// 根据type判断是图形、表格、文本、图片、按钮
function typeHideShow(id,type){
    var ele = $("#" + id);
    switch(type){
        case "chart":
            $(".chart-attr-box").show().siblings().hide();
            break;
        case "table":
            $(".table-attr-box").show().siblings().hide();
            break;
        case "text":
            $(".text-attr-box").show().siblings().hide();
            break;
        case "image":
            $(".button-attr-box").show().siblings().hide();
            break;
        default:
            $(".op-box1>div").hide();
            break;
    }
}

