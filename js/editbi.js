$(function(){


    /*
    *   zoom ：绑定缩放函数；传入参数字符串；
    * */
    $(".dimension-title p").on("click",function(){
        $(this).toggleClass("bi-edit-zoom")         // 修改背景图标
            .parent().siblings().toggleClass("hide");  // 列表显示隐藏
    });
    $(".set-x>p").on("click",function(){
        $(this).toggleClass("bi-edit-zoom")         // 修改背景图标
            .siblings().toggleClass("hide");  // 列表显示隐藏
    });
    $(".set-y>p").on("click",function(){
        $(this).toggleClass("bi-edit-zoom")         // 修改背景图标
            .siblings().toggleClass("hide");  // 列表显示隐藏
    });


	//获取BI Set列表接口
	getBiSet(projectId);
	function getBiSet(projectId){
		$.ajax({
            type:'get',
            url:$url1 + '/bi/report/v1/biset/list.json',
            headers:{   username:username, userId:userId    },
            dataType:'json',
            data:{
                "projectId":projectId,
                "versionId":versionId,
                "dbType":"0",
            },
            success:function(res){
              if(res.code===0){
              	if(res.message && res.data.length >0){
              		let data = res.data,
                        html = '+',
                        biSetId = '';
              		$.each(data,function(i,item){
              			html += `
						<option value="${item.biSetName}" biSetId="${item.biSetId}">${item.biSetName}</option>
              			`;
              		});
              		$(".data-source-box select").empty().append(html);
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
		const $biSetId = $(this).find("option:selected").attr("biSetId");
		getBiDataModel($biSetId);
	});
	
	//获取数据模型接口
	//getBiDataModel(biSetId);
	function getBiDataModel(biSetId){
		$.ajax({
            type:'get',
            url:$url1 + '/bi/report/v1/datamodel.json',
            headers:{   username:username, userId:userId    },
            dataType:'json',
            data:{
                "projectId":projectId,
                "versionId":versionId,
                "pageId":dirId,
                "biSetId":biSetId
            },
            success:function(res){
             if(res.code === 0){
             	if(res.message){
             		let data = res.data,
                        dhtml = '',
                        mhtml = '';

                    modelId = data.modelId;
             		//维度
             		$.each(data.dimensions,function(i,item){
             			dhtml += `
             				<li fieldId="${item.fieldId}" fieldName="${item.fieldName}" dataType="${item.dataType}" disCon="${item.disCon}" defaultAggregation="${item.defaultAggregation}" dim_mea="0">${item.fieldAlias}</li>
             			`;
             		});
             		$(".dimension-box .placeholder").empty().append(dhtml);
             		//度量
             		$.each(data.measures, function(i,item) {
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
                // console.log(1);
            }
        });
	}

    //点击图标类型按钮--生成可拖拽缩放的div
    $(".u-btn-class").draggable({
        appendTo: "",
        helper: "clone"
    });
    $(".edit-libs-box").droppable({
        accept: ":not(.ui-sortable-helper)",
        drop: function( event, ui ) {
            const left = event.pageX - parseFloat($(".clearY").width()) - parseFloat($(".clearY").css("padding-left")) - parseFloat($(".edit-content").css("margin-left"));
            const top = event.pageY - parseFloat($(".clearX").height()) - parseFloat($(".edit-libs-box").css("margin-top"));
            const cahrt_type = $(ui.draggable).attr("data-type");
            let type = null;
            let html = '';  // 当是文本框时

            // 根据拖拽区的data-type来显示type
            switch(cahrt_type){
                case "chart":
                    type="bar";
                    break;
                case "table":
                    type="table";
                    break;
                case "button":
                    type="button";
                    html = '<div class="content-button"><button></button></div>';
                    break;
                case "text":
                    html = '<div class="content-text edit"><div contenteditable="false" spellcheck="true" data-medium-editor-element="true" role="textbox" aria-multiline="true" data-placeholder="请输入文本" data-medium-focused = "true"></div></div>';
                    break;
            }
            const editID = cahrt_type + uuid(8,16);

            $(this).append('<div data-type="'+ cahrt_type +'" type="'+type+'" style="z-index:'+ number +'; left:'+left+'px;top:'+top+'px;" id="'+ editID +'" class="resize-item">'+ html +'</div>');

            refresh.storage(cahrt_type,editID); // 保存
            id_ = editID;
            number++;
            new ZResize({
                stage: '.edit-libs-box', //舞台
                itemClass: 'resize-item'//可缩放的类名
            });
        }
    });

	//x Axis
	$(".set-axis").droppable({
		accept: ".placeholder li",
		drop:function(event, ui){
            let lis = [];
			$(this).find("li").each(function(){
				lis.push($(this).attr("fieldId"));
			});
			if($.inArray(ui.draggable.attr("fieldId"),lis)===-1 && id_!==""){

                const dim_mea = ui.draggable.attr("dim_mea");
                const type = $(".chart-type-val span").text();   // 类型
                let dimQ = 0;
                let meaQ = 0;
                $.each($(".pills li"),function(index,val){
                    if($(val).attr("dim_mea") === "0"){ dimQ++; }
                    if($(val).attr("dim_mea") === "1"){ meaQ++; }
                });

                // 饼图  一个维度，一个度量
			    if(type === "饼图" && $(".chart-attr-box:hidden") && (  dimQ > 1 || meaQ > 1 )){
                    layer.msg("饼图只能有一个维度和度量");
                    return ;
                }

                // 折线图
                if(type === "折线图" && $(".chart-attr-box:hidden") && dimQ > 1 ){
                    layer.msg("折线图只能有一个维度！");
                    return ;
                }
                // 柱状图


				$( "<li dataType="+ui.draggable.attr("dataType")+" dim_mea="+ui.draggable.attr("dim_mea")+" fieldName="+ui.draggable.attr("fieldName")+" disCon="+ui.draggable.attr("disCon")+" defaultAggregation='"+ui.draggable.attr("defaultAggregation")+"' fieldId='"+ui.draggable.attr("fieldId")+"'></li>" ).html( ui.draggable.html() ).appendTo( $(this).find("ul") );
                pillsLi();
			}else if($.inArray(ui.draggable.attr("fieldId"),lis)!==-1 && id_!==""){
				layer.alert('已存在！！！')
			}else{
				layer.alert('请先选择添加数据的图表元素')
			}
		}
	});
	//定义接收筛选器的元素
    //拖拽度量和维度到数据筛选框
	$( ".data-screening" ).droppable({
		accept: ".placeholder li",
		drop: function( event, ui ) {
            let lis = [];
			$(this).find("li").each(function(){
				lis.push($(this).attr("fieldId"));
			});
			if($.inArray(ui.draggable.attr("fieldId"),lis)===-1&&id_!==""){
                $( "<li dataType="+ui.draggable.attr("dataType")+" dim_mea="+ui.draggable.attr("dim_mea")+" fieldName="+ui.draggable.attr("fieldName")+" disCon="+ui.draggable.attr("disCon")+" defaultAggregation='"+ui.draggable.attr("defaultAggregation")+"' fieldId='"+ui.draggable.attr("fieldId")+"'></li>" ).html( ui.draggable.html() ).appendTo( $(this).find("ul") );


                let uiEle = $(ui.draggable[0]);

                const fieldname = uiEle.attr("fieldname")
                    ,text = uiEle.text()
                    ,fieldId = uiEle.attr("fieldId");

                switch(parseInt(uiEle.attr("datatype"))){
                    case 1:
                        project.TFilter(fieldname,text,fieldId,2,id_); // 文本筛选框
                        break;
                    case 2:
                    case 3:
                        timeSng.quotes(text,fieldId,2,id_);  // 时间筛选框
                        break;
                    case 4:
                        swRag.ass(fieldname,fieldId,2,id_);  // 数值筛选框
                        break;
                }

			}else if($.inArray(ui.draggable.attr("fieldId"),lis) !== -1&&id_ !== ""){
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
            if($(ui.draggable).parents(".data").length === 0){
                $(ui.draggable).remove();
            }
        }
    });


//修改字段别名
    function setBiFieldName(id,name){
        $.ajax({
            type:'PUT',
            url:$url1 + '/bi/report/v1/dataModel/fieldAlias.json',
            headers:{   username:username, userId:userId    },
            dataType:'json',
            data:{
                "projectId":projectId,
                "versionId":versionId,
                "fieldId":id,
                "fieldAlias":name,
            },
            success:function(res){
                if(res.code===0){
                    layer.msg('修改成功!');
                    getBiDataModel($(".data-source-box select option:selected").attr("biSetId"));
                }
            },
            error:function(res){
                console.log(res);
            }
        });
    }

    context.init({preventDoubleContext: false,fadeSpeed:100});



    context.attach('.placeholder li', [
        {text: '修改名称', action: function(){
            console.log("222222222222222");
            let fieldAlias = '';
            const id = context.getClickEle().attr("fieldId");
            console.log(context.getClickEle());
            layer.confirm('<input class="none" type="text" style="display:block;margin:0 auto;width:160px;height:14px;padding:6px;border:1px solid #ccc;font-size:12px;" value="' + $.trim(context.getClickEle().text()) + '"/>', {
                btn: ['确定', '取消'], //按钮
                yes: function (index) {
                    $(context.getClickEle()).text($(".none").val());
                    fieldAlias=$(".none").val();
//									save_config("x",id_,field,$(".none").val(),order,dataType,dim_mea,dis_con,aggregation);
                    layer.close(index);
                    setBiFieldName(id,fieldAlias);//修改字段名称
                }
            });
        }},
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
            layer.confirm('是否删除控件？', {
                btn: ['确定','取消'] //按钮
            }, function(){
                layer.closeAll();
                operating.clickDelete(id);      // 删除功能

                let level = new Level();
                level.rearrange();

            });
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

    let cgt = {
	    "name":{
                text: '修改显示名称',
                action: function (e) {
                    let fieldAlias = '';
                    const id = context.getClickEle().attr("fieldId");
                    layer.confirm('<input class="none" type="text" style="display:block;margin:0 auto;width:160px;height:14px;padding:6px;border:1px solid #ccc;font-size:12px;" value="' + $.trim(context.getClickEle().text()) + '"/>', {
                        btn: ['确定', '取消'], //按钮
                        yes: function (index) {
                            $(context.getClickEle()).text($(".none").val());
                            fieldAlias=$(".none").val();
                            layer.close(index);
                        }
                    });
                }
            },
        "agm":{
            text: '<span class="agm-default" style="width:100%;display:inline-block;">聚合方式</span>', subMenu: [
                {header: '默认值'},
                {
                    // 聚合算法：SUM-求和；AVG-平均值；MAX-最大值；MIN-最小值；COUNT-计数；DCOUNT-去重计数
                    text: '最大值',
                    action: function (e) {
                        context.getClickEle().attr("defaultaggregation","MAX");
                    }
                },
                {
                    text: '最小值<span class="def" style="color:#666"></span>',
                    action: function (e) {
                        context.getClickEle().attr("defaultaggregation","MIN");
                    }
                },
                {
                    text: '平均值<span class="def" style="color:#666"></span>',
                    action: function (e) {
                        context.getClickEle().attr("defaultaggregation","AVG");
                    }
                },{
                    text: '求和<span class="def" style="color:#666"> 默认</span>',
                    action: function (e) {
                        context.getClickEle().attr("defaultaggregation","SUM");
                    }
                },{
                    text: '计数<span class="def" style="color:#666"></span>',
                    action: function (e) {
                        context.getClickEle().attr("defaultaggregation","COUNT");
                    }
                },{
                    text: '去重计数<span class="def" style="color:#666"></span>',
                    action: function (e) {
                        context.getClickEle().attr("defaultaggregation","DCOUNT");
                    }
                }
            ]
        },
        "filter":{
            text: '筛选器',
            action: function (e) {

                // var text="<li dataType="+context.getClickEle().attr("dataType")+" dim_mea="+context.getClickEle().attr("dim_mea")+" dis_con="+context.getClickEle().attr('dis_con')+" data_id='"+context.getClickEle().attr('data_id')+"' aggregation='"+context.getClickEle().attr('aggregation')+"'>"+context.getClickEle().html()+"</li>";
                // $("#filter .ui-widget-content ol").append(text);
                // 数据类型：1-文本（字符串）；2-日期；3-日期和时间；4-数字；5-布尔；6-地理（用于地图）
                const dataType = parseInt(context.getClickEle().attr("datatype"));
                const z = context.getClickEle().parent().parent();
                let n = null;
                if(z.is(".datas-pills")){
                    n = 2;
                }else if(z.is(".y-pills")){
                    n = 1;
                }else if(z.is(".x-pills")){
                    n = 0;
                }

                const field = context.getClickEle().attr("fieldname")  // 字段名
                    ,text = context.getClickEle().text()    // 名称
                    ,fieldId = context.getClickEle().attr("fieldId");    // id

                switch(dataType){
                    case 1:
                        project.TFilter(field,text,fieldId,n,id_); // 文本筛选框
                        break;
                    case 2:
                    case 3:
                        timeSng.quotes(text,fieldId,n,id_);  // 时间筛选框
                        break;
                    case 4:
                        swRag.ass(field,fieldId,n,id_);  // 数值筛选框
                        break;
                }
            }
        },
        "nullVal":{
            text: '空值处理',
            action: function (e) {
                layer.msg("暂未实现！");
            }
        },
        "remove": {
                text: '移除',
                action: function (e) {
                    context.getClickEle().remove();
                }
            },
        context:function(){
            //右键 cgt.name：修改显示名称； cgt.agm：聚合方式  cgt.filter：筛选器； cgt.nullVal：空值处理; cgt.remove：移除
            context.attach('.pills ul li[discon=0]', [{header: '属性'},cgt.name,cgt.remove]);
            context.attach('.pills ul li[discon=1]', [{header: '属性'},cgt.name,cgt.agm,cgt.filter,cgt.nullVal,cgt.remove]);
            context.attach('.datas-pills ul li[discon=0]', [{header: '属性'},cgt.name,cgt.filter,cgt.remove]);
            context.attach('.datas-pills ul li[discon=1]', [{header: '属性'},cgt.name,cgt.filter,cgt.remove]);
        },
        agmClick:function(){
            $(document).on("mouseover",".dropdown-menu .agm-default",function(){
                const defaultaggregation = context.getClickEle().attr("defaultaggregation");
                let z = null;
                switch(defaultaggregation){
                    case "MAX": z = 1;break;
                    case "MIN": z = 2;break;
                    case "AVG": z = 3;break;
                    case "SUM": z = 4;break;
                    case "COUNT": z = 5;break;
                    case "DCOUNT": z = 6;break;
                }
                $(this).parent().siblings("ul").find(".def").remove();
                $(this).parent().siblings("ul").find("li").eq(z).find("a").append('<span class="def" style="color:#666"> 默认</span>');
            })
        }
    };
    cgt.context();  // 图表和表格的属性右键
    cgt.agmClick();
    
	
	//去左右空格;
	function trim(s){
		return s.replace(/(^\s*)|(\s*$)/g, "");
	}

    //文本的颜色初始化
    $('[name="unique-name-1"]').paletteColorPicker();
    $('[name="unique-name-2"]').paletteColorPicker();
    $('[name="unique-name-3"]').paletteColorPicker();
    $('[name="unique-name-4"]').paletteColorPicker();


});//jquery end 



// 调换X轴和Y轴
function xyChange(){
    const xPills = $(".x-pills ul"),yPills = $(".y-pills ul");
    const xPillsText = xPills.html();
    const yPillsText = yPills.html();
    xPills.html(yPillsText);
    yPills.html(xPillsText);

    pillsLi();
}

function pillsLi(){
    $( ".pills li").draggable({
        appendTo: "body",
        helper: "clone"
    });
}
function clear(id){
    let choose = true;
    eleFocus(); // 根据现在选中类型，变化
    $.each(save_arr,function(index,item) {
        if(item.cid === id && item.queryJson && (item.customData.dataType === "chart" || item.customData.dataType === "table" )) {
            let x_param='',y_param='',filter='';
            if(item.queryJson.x){
                $.each(item.queryJson.x,function(x,item){
                    x_param += `<li datatype="${ item.dataType }" dim_mea="${ item.dimMea }" fieldname="${ item.field }" discon="${ item.disCon }" defaultaggregation="${ item.aggregation }" fieldId="${ item.fieldId }"  class="ui-draggable">${ item.fieldAlias }</li>`;
                });
            }
            if(item.queryJson.y){
                $.each(item.queryJson.y,function(y,item){
                    y_param += `<li datatype="${ item.dataType }" dim_mea="${ item.dimMea }" fieldname="${ item.field }" discon="${ item.disCon }" defaultaggregation="${ item.aggregation }" fieldId="${ item.fieldId }"  class="ui-draggable">${ item.fieldAlias }</li>`;
                });
            }
            if(item.queryJson.filter){
                $.each(item.queryJson.filter,function(y,item){
                    const min = item.numericFilter?item.numericFilter.range.min:"";
                    const max = item.numericFilter?item.numericFilter.range.max:"";
                    filter += `<li datatype="${ item.dataType }" dim_mea="${ item.dimMea }" fieldname="${ item.field }" discon="${ item.disCon }" defaultaggregation="${ item.aggregation }" fieldId="${ item.fieldId }" min="${ min }"  max="${ max }"  class="ui-draggable">${ item.fieldAlias }</li>`;
                });
            }

            if(item.customData.dataType === "chart"){
                $(".chart-attr-box .x-pills ul").html(x_param);
                $(".chart-attr-box .y-pills ul").html(y_param);
                $(".chart-attr-box .datas-pills ul").html(filter);
            }else{
                $(".table-attr-box .x-pills ul").html(x_param);
                $(".table-attr-box .y-pills ul").html(y_param);
                $(".table-attr-box .datas-pills ul").html(filter);
            }

            pillsLi();

            // 全部属性
            const type = $(".chart-type-lists ul li[data-type="+ item.type +"] span").text();
            $(".chart-type-val span").text(type).attr("data-type",item.type);
            // 遍历修改属性颜色
            $.each($(".chart-type-lists ul li "),function(index,val){
               if($(val).attr("data-type") === item.type + ""){
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
        // 图片
        if(item.cid === id && item.customData.dataType === "image"){
            const price = item.customData.controls;
            if(price.ratio){
                $(".set-price-prop input").attr("checked","checked").siblings("img").attr("src","images/icon_checked.png");
            }else{
                $(".set-price-prop input").removeAttr("checked").siblings("img").attr("src","images/xuankuang.png");
            }
            let style = "";
            switch(price["border-style"]){
                case "dotted":style = "点线";break;
                case "dashed":style = "虚线";break;
                case "solid":style = "实线";break;
                case "none":style = "实线";break;
            }
            $(".set-price-color .palette-color-picker-button").css("background-color",price["border-color"]);
            $(".set-price-border-style select").val(style);
            $(".set-price-border select").val(parseInt(price["border-width"]));
            $(".set-price-radius input").val(parseInt(price["border-radius"]));
        }
        // 文本
        if(item.cid === id && item.customData.dataType === "text" && item.customData.controls){
            const text = item.customData.controls;
            $(".set-text-attr-wrap .palette-color-picker-button").css("background-color",text.color);
        }
        // 按钮
        if(item.cid === id && item.customData.dataType === "button"){
            const button = item.customData.controls;
            $("#buttonText").val(button.text);
            $(".set-button-color .palette-color-picker-button").css("background-color",button["background-color"]);
            $(".set-button-size select").val(parseInt(button['font-size']));
            $(".set-button-SizeColor .palette-color-picker-button").css("background-color",button["font-size"]);
        }

    });
    
}

// 根据现在选中类型，变化
function eleFocus(){
    let bur = true;
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
    switch(type){
        case "chart":
            $(".chart-attr-box").show().siblings().hide();
            break;
        case "table":
            $(".table-attr-box").show().siblings().hide();
            break;
        case "text":
            $(".text-attr-box").show().siblings().hide();
            // 更新数据
            refresh.textData(id);
            // 清空或者还原
            $(".set-text-attr-wrap .palette-color-picker-button").css("background-color","rgb(0, 184, 212)");
            break;
        case "image":
            $(".price-attr-box").show().siblings().hide();
            // 更新数据
            refresh.priceData(id);
            // 清空或者还原
            $(".set-price-prop input").removeAttr("checked").siblings("img").attr("src","images/xuankuang.png");
            $(".set-price-border-style select").val("实线");
            $(".set-price-border select").val(0);
            $(".set-price-radius input").val(0);
            break;
        case "button":
            $(".button-attr-box").show().siblings().hide();
            // 更新数据
            refresh.buttonData(id);
            // 清空或者还原
            $("#buttonText").val("");
            $(".set-button-color .palette-color-picker-button").css("background-color","#DDDDDD");
            $(".set-button-size select").val("16");
            $(".set-button-SizeColor .palette-color-picker-button").css("background-color","#000");
            break;
        default:
            $(".op-box1>div").hide();
            break;
    }
}

