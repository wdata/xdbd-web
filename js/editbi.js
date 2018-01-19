$(function(){


    //删除层级
    $('#dimensionBox').on('click','.hierarchy .level_con i.fa',function(){
        var levelName = $(this).prev().text();
        var levelId = $(this).prev().attr('levelId');
        layer.confirm('是否删除层级：'+levelName+' ?',{
            yes:function(index,layero){
                $.ajax({
                    type:'DELETE',
                    url:$url1 + '/bi/report/v1/dataModel/fieldLevel.json'+'?projectId='+projectId+'&versionId='+versionId+'&levelId='+levelId,
                    headers:{   username:username, userId:userId    },
                    dataType:'json',
                    success:function(res){
                        if(res.code===0){
                            layer.msg('删除成功!');
                            getBiDataModel();
                        }
                    },
                    error:function(res){
                        console.log(res);
                    }
                });
                layer.close(index);
            }
        });

    });

    //数据源的右键菜单：
    $.contextMenu({
        selector: '.set-param-box li',
        build: function($trigger, e) {
            var $triggerConClass = $trigger.parent().parent().attr('class');//用于判断：原始字段、复制字段、层级下的字段
            var $triggerConParentCon = $trigger.parent().parent().attr('parentCon');//用于判断：维度、度量

            var fieldId = $trigger.attr('fieldId');
            var dataType = $trigger.attr('dataType');
            var baseDataType = $trigger.attr('baseDataType');
            var isCopied = $trigger.attr('isCopied');
            var baseDimMea = $trigger.attr('baseDimMea');
            var defaultAggregation = $trigger.attr('defaultAggregation');

            var items = {},subItems_dataType ={},subItems_arithmetic={};

            //转换数据类型（二级菜单）
                //数据；类型：1-文本（字符串）；2-日期；3-日期和时间；4-数字；5-布尔；6-地理（用于地图）
            if(dataType=='1'){//当前数据类型
                switch (baseDataType){//原始数据类型
                    case '1':
                        subItems_dataType ={
                            "字符串":{name:"转换为字符串",disabled: true,icon:'fa-sort-alpha-asc'},
                            "数字":{name:"转换为数字",icon:'fa-sort-numeric-asc'},
                            "日期":{name:"转换为日期",icon:'fa-calendar'},
                            "日期和时间":{name:"转换为日期和时间",icon:'fa-clock-o'}
                        };
                        break;
                    case '2':
                        subItems_dataType ={
                            "字符串":{name:"转换为字符串",disabled: true,icon:'fa-sort-alpha-asc'},
                            "数字":{name:"转换为数字",icon:'fa-sort-numeric-asc'},
                            "日期":{name:"还原为日期",icon:'fa-calendar'},
                            "日期和时间":{name:"转换为日期和时间",icon:'fa-clock-o'}
                        };
                        break;
                    case '3':
                        subItems_dataType ={
                            "字符串":{name:"转换为字符串",disabled: true,icon:'fa-sort-alpha-asc'},
                            "数字":{name:"转换为数字",icon:'fa-sort-numeric-asc'},
                            "日期":{name:"转换为日期",icon:'fa-calendar'},
                            "日期和时间":{name:"还原为日期和时间",icon:'fa-clock-o'}
                        };
                        break;
                    case '4':
                        subItems_dataType ={
                            "字符串":{name:"转换为字符串",disabled: true,icon:'fa-sort-alpha-asc'},
                            "数字":{name:"还原为数字",icon:'fa-sort-numeric-asc'},
                            "日期":{name:"转换为日期",icon:'fa-calendar'},
                            "日期和时间":{name:"转换为日期和时间",icon:'fa-clock-o'}
                        };
                        break;
                    case '5':
                        break;
                    case '6':
                        break;
                    default:break;
                }
            }else if(dataType=='2'){//当前数据类型
                switch (baseDataType) {//原始数据类型
                    case '1':
                        subItems_dataType ={
                            "字符串":{name:"还原为字符串",icon:'fa-sort-alpha-asc'},
                            "日期":{name:"转换为日期",disabled: true,icon:'fa-calendar'}
                        };
                        break;
                    case '2':
                        subItems_dataType ={
                            "字符串":{name:"转换为字符串",icon:'fa-sort-alpha-asc'},
                            "日期":{name:"转换为日期",disabled: true,icon:'fa-calendar'}
                        };
                        break;
                    case '3':break;
                    case '4':break;
                    case '5':break;
                    case '6':break;
                    default:break;
                }
            }else if(dataType=='3'){//当前数据类型
                switch (baseDataType) {//原始数据类型
                    case '1':
                        subItems_dataType ={
                            "字符串":{name:"还原为字符串",icon:'fa-sort-alpha-asc'},
                            "日期":{name:"转换为日期和时间",disabled: true,icon:'fa-clock-o'}
                        };
                        break;
                    case '2':break;
                    case '3':
                        subItems_dataType ={
                            "字符串":{name:"转换为字符串",icon:'fa-sort-alpha-asc'},
                            "日期":{name:"转换为日期和时间",disabled: true,icon:'fa-clock-o'}
                        };
                        break;
                    case '4':break;
                    case '5':break;
                    case '6':break;
                    default:break;
                }
            }else if(dataType=='4'){//当前数据类型
                switch (baseDataType) {//原始数据类型
                    case '1':
                        subItems_dataType ={
                            "字符串":{name:"还原为字符串",icon:'fa-sort-alpha-asc'},
                            "数字":{name:"转换为数字",disabled: true,icon:'fa-sort-numeric-asc'}
                        };
                        break;
                    case '2':break;
                    case '3':break;
                    case '4':
                        subItems_dataType ={
                            "字符串":{name:"转换为字符串",icon:'fa-sort-alpha-asc'},
                            "数字":{name:"转换为数字",disabled: true,icon:'fa-sort-numeric-asc'}
                        };
                        break;
                    case '5':break;
                    case '6':break;
                    default:break;
                }
            }else if(dataType=='5'){//当前数据类型
                //布尔类型
            }else if(dataType=='6'){//当前数据类型
                //地理类型
            }

            //聚合算法（二级菜单）
            if(baseDimMea==='1'){//初始的维度/度量：0-维度；1-度量
                subItems_arithmetic={
                    "SUM":{name:"求和"},
                    "AVG":{name:"平均值"},
                    "MAX":{name:"最大值"},
                    "MIN":{name:"最小值"},
                    "COUNT":{name:"记录数"},
                    "DCOUNT":{name:"取值数"}
                };
            }else {
                subItems_arithmetic={
                    "COUNT":{name:"记录数"},
                    "DCOUNT":{name:"取值数"}
                };

            }
            if(subItems_arithmetic[defaultAggregation]!==undefined){
                subItems_arithmetic[defaultAggregation].icon='fa-check';
            }

            //（一级菜单）
            console.log($triggerConParentCon);
            if($triggerConParentCon==='dimensionBox'){//维度的右键
                if($triggerConClass==='original'){//原始字段
                    items={
                        "editName": {name: "修改名称"},
                        "copyField": {name: "复制字段"},
                        "转换数据类型": {name: "转换数据类型",items:subItems_dataType},
                        "createLevel": {name: "创建层级"},
                        "selectLevel": {name: "加入层级"},
                        "setDimensionOrMeasure_1": {name: "转换为度量"}
                    };
                }else if($triggerConClass==='user-defined'){//自定义字段
                    items={
                        "editName": {name: "修改名称"},
                        "copyField": {name: "复制字段"},
                        "createLevel": {name: "创建层级"},
                        "selectLevel": {name: "加入层级"},
                        "setDimensionOrMeasure_1": {name: "转换为度量"},
                        "deleteField": {name: "删除"}
                    };
                }else if($triggerConClass==='hierarchy'){//层级下的字段
                    if(isCopied==='true'){
                        items={
                            "editName": {name: "修改名称"},
                            "copyField": {name: "复制字段"},
                            "popLevel": {name: "移出层级"},
                            "deleteField": {name: "删除"}
                        };
                    }else {
                        items={
                            "editName": {name: "修改名称"},
                            "copyField": {name: "复制字段"},
                            "popLevel": {name: "移出层级"}
                        };
                    }
                }
            }else if($triggerConParentCon==='metricBox'){//度量的右键
                if($triggerConClass==='original'){//原始字段
                    items={
                        "editName": {name: "修改名称"},
                        "copyField": {name: "复制字段"},
                        "转换数据类型": {name: "转换数据类型",items:subItems_dataType},
                        "分割线1": "------",
                        "聚合算法": {name: "聚合算法",items:subItems_arithmetic},
                        "分割线2": "------",
                        "setDimensionOrMeasure_0": {name: "转换为维度"}
                    };
                }else if($triggerConClass==='user-defined'){//自定义字段
                    items={
                        "editName": {name: "修改名称"},
                        "copyField": {name: "复制字段"},
                        "分割线1": "------",
                        "聚合算法": {name: "聚合算法",items:subItems_arithmetic},
                        "分割线2": "------",
                        "setDimensionOrMeasure_0": {name: "转换为维度"},
                        "deleteField": {name: "删除"}
                    };
                }
            }

            return {
                callback: function(key, options) {
                    switch(key){
                        case 'editName'://修改字段别名
                            editName($trigger);
                            break;
                        case 'copyField'://克隆字段
                            copyField(fieldId);
                            break;
                        case 'createLevel'://创建层级
                            createLevel(fieldId);
                            break;
                        case 'selectLevel'://加入层级之一:手动加入
                            selectLevel(fieldId);
                            break;
                        case 'setDimensionOrMeasure_1'://修改字属性（维度转换）
                            setDimensionOrMeasure(fieldId,'1');
                            break;
                        case 'setDimensionOrMeasure_0'://修改字属性（维度转换）
                            setDimensionOrMeasure(fieldId,'0');
                            break;
                        case 'deleteField'://删除自定义字段
                            deleteField(fieldId);
                            break;
                        case 'popLevel'://移出层级
                            popLevel($trigger);
                            break;
                        case '字符串'://修改字属性（转换类型）
                            setFieldDataType(fieldId,'1');
                            break;
                        case '数字'://修改字属性（转换类型）
                            setFieldDataType(fieldId,'4');
                            break;
                        case '日期'://修改字属性（转换类型）
                            setFieldDataType(fieldId,'2');
                            break;//修改字属性（转换类型）
                        case '日期和时间':
                            setFieldDataType(fieldId,'3');
                            break;
                        case 'SUM'://修改字属性（聚合算法）
                            setarithmetic(fieldId,'SUM');
                            break;
                        case 'AVG'://修改字属性（聚合算法）
                            setarithmetic(fieldId,'AVG');
                            break;
                        case 'MAX'://修改字属性（聚合算法）
                            setarithmetic(fieldId,'MAX');
                            break;
                        case 'MIN'://修改字属性（聚合算法）
                            setarithmetic(fieldId,'MIN');
                            break;
                        case 'COUNT'://修改字属性（聚合算法）
                            setarithmetic(fieldId,'COUNT');
                            break;
                        case 'DCOUNT'://修改字属性（聚合算法）
                            setarithmetic(fieldId,'DCOUNT');
                            break;
                        default:break;
                    }
                },
                items: items
            };
        }
    });

    $( ".filter-attr" ).draggable({cursor: "move", handle: "h3"});

});




/*
* operation.js存在重复-start
* */
var startMoveLevelId = '',stopMoveLevelId = '';//层级Id：开始拖拽的层级Id，结束拖拽时的层级Id

function getBiDataModel(){
    var biSetId = $(".data-source-box select option:selected").attr("biSetId");
    /*$("#dimensionBox").mCustomScrollbar("destroy");
    $(".metric-box").mCustomScrollbar("destroy");*/
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

                    var dimensions = res.data.dimensions;//维度
                    var measures = res.data.measures;//度量
                    //维度
                    if(dimensions.length>0){
                        $.each(dimensions,function(index,value) {
                            var li='';
                            $.each(value.fields,function(i,item){
                                var icon = (item.dataType+'').getIcon(item.dataType);
                                li+=`<li fieldId="${item.fieldId}" fieldName="${item.fieldName}" isCopied="${item.isCopied}"
                                     baseDataType="${item.baseDataType}" dataType="${item.dataType}"
                                     baseDimMea="${item.baseDimMea}" dim_mea="${item.dimMea}"
                                     baseDisCon="${item.baseDisCon}" disCon="${item.disCon}" defaultAggregation="${item.defaultAggregation}">${icon} ${item.fieldAlias}</li>
                                `;
                            });

                            if(value.type==1){//原始字段
                                dhtml += `<div parentCon="dimensionBox" class="original"><div class="dimension-title"><p>${value.title}</p></div><ul class="placeholder original_ul">${li}</ul></div>`;
                            }else if(value.type==2){//自定义字段
                                dhtml += `<div parentCon="dimensionBox" class="user-defined"><div class="dimension-title"><p>${value.title}</p></div><ul class="placeholder userdefined_ul">${li}</ul></div>`;
                            }else if(value.type==3){//自定义层
                                dhtml += `<div parentCon="dimensionBox" class="hierarchy"><div class="dimension-title level_con"><p levelId="${value.id}">${value.title}</p><i class="fa fa-trash-o fa-lg"></i></div><ul class="placeholder level_ul">${li}</ul></div>`;
                            }
                        });
                    }else{
                        dhtml='';
                    }
                    $(".dimension-box").empty().append(dhtml);

                    //度量
                    if(measures.length>0){
                        $.each(measures,function(index,value) {
                            var li='';
                            $.each(value.fields,function(i,item){
                                var icon = (item.dataType+'').getIcon(item.dataType);
                                li+=`<li fieldId="${item.fieldId}" fieldName="${item.fieldName}" isCopied="${item.isCopied}"
                                     baseDataType="${item.baseDataType}" dataType="${item.dataType}"
                                     baseDimMea="${item.baseDimMea}" dim_mea="${item.dimMea}"
                                     baseDisCon="${item.baseDisCon}" disCon="${item.disCon}" defaultAggregation="${item.defaultAggregation}">${icon} ${item.fieldAlias}</li>
                                `;
                            });

                            if(value.type==1){//原始字段
                                mhtml += `<div parentCon="metricBox" class="original"><div class="dimension-title"><p>${value.title}</p></div><ul class="placeholder">${li}</ul></div>`;
                            }else if(value.type==2){//自定义字段
                                mhtml += `<div parentCon="metricBox" class="user-defined"><div class="dimension-title"><p>${value.title}</p></div><ul class="placeholder">${li}</ul></div>`;
                            }
                        });
                    }else{
                        mhtml='';
                    }

                    $(".metric-box").empty().append(mhtml);


                    //滚动条
                    $("#dimensionBox").mCustomScrollbar({theme:"dark",autoHideScrollbar:true,scrollInertia:200});
                    $(".metric-box").mCustomScrollbar({theme:"dark",autoHideScrollbar:true,scrollInertia:200});



                    /*//设置度量维度可拖拽
                    $( ".set-param-box ul li").draggable({
                        // same-resource ul li
                        appendTo: "body",
                        helper: "clone"
                    });*/



                    //维度拖拽：
                    $("#dimensionBox .original_ul li").draggable({
                        appendTo: "body",
                        helper: "clone",
                        connectToSortable:'.level_ul',//关联可排序的容器s
                        cursor: "move",
                        opacity: 0.5
                    }).disableSelection();
                    $("#dimensionBox .userdefined_ul li").draggable({
                        appendTo: "body",
                        helper: "clone",
                        connectToSortable:'.level_ul',//关联可排序的容器
                        cursor: "move",
                        opacity: 0.5
                    }).disableSelection();

                    $(".level_ul").sortable({
                        connectWith: ".level_ul",
                        helper: "clone",
                        cursor: "move",//移动时候鼠标样式
                        opacity: 0.5, //拖拽过程中透明度
                        placeholder: "placeholder_line",//占位符className，设置一个样式
                        start:function(e,ui){
                            startMoveLevelId=$(ui.item[0]).parent().prev().find('p').attr('levelid');
                            //console.log('start-levelid: '+startMoveLevelId);
                        },
                        stop:function(e,ui) {
                            stopMoveLevelId=$(ui.item[0]).parent().prev().find('p').attr('levelid');
                            var levelId = $(this).prev().find('p').attr('levelid');
                            var fieldid = $(ui.item[0]).attr('fieldid');
                            var prevLi = $(ui.item[0]).prev();
                            var preFieldId = '';
                            if(prevLi.length>0){
                                preFieldId = prevLi.attr('fieldid');
                            }

                            //console.log('stop-levelid: '+stopMoveLevelId);
                            //console.log('是否为同层级内部移动：' + (stopMoveLevelId == startMoveLevelId) );
                            //console.log(fieldid,'\n',levelId,'\n',prevfieldid);


                            if(startMoveLevelId!==undefined&&levelId!==undefined){
                                if(stopMoveLevelId == startMoveLevelId){//非同一个层级
                                    //console.log('内');
                                    joinLevel2(fieldid,levelId,preFieldId);
                                }else {//同个层级内部
                                    //console.log('外');
                                    popLevelAddLevel(fieldid,startMoveLevelId,stopMoveLevelId,preFieldId);
                                }
                            }
                        },
                        drop:function (){
                            //console.log('drop');
                        }
                    }).disableSelection();

                    //度量拖拽：
                    $("#metricBox .placeholder li").draggable({
                        appendTo: "body",
                        helper: "clone",
                        cursor: "move",
                        opacity: 0.5
                    }).disableSelection();
                    //console.log(2);
                }
            }else {
                $(".dimension-box").empty();$(".metric-box").empty()
            }
        },
        error:function(res){
            console.log(res);
        }
    });
}
//修改字段别名
function setBiFieldName(id,name){
    $.ajax({
        type:'PUT',
        url:$url1 + '/bi/report/v1/dataModel/fieldProps.json',
        headers:{   username:username, userId:userId    },
        dataType:'json',
        data:{
            "projectId":projectId,
            "versionId":versionId,
            "fieldId":id,
            "prop":1,
            "newValue":name
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
//加入层级之二:拖拽加入
function joinLevel2(fieldId,levelId,preFieldId){
    $.ajax({
        type:'PUT',
        url:$url1 + '/bi/report/v1/dataModel/levelField.json',
        headers:{   username:username, userId:userId    },
        dataType:'json',
        data:{
            "projectId":projectId,
            "versionId":versionId,
            "fieldId":fieldId,
            "levelId":levelId,
            "preFieldId":preFieldId
        },
        success:function(res){
            if(res.code===0){
                layer.msg('拖拽成功!');
                getBiDataModel();
            }
        },
        error:function(res){
            console.log(res);
        }
    });
}
//不同层级之间的拖拽
function popLevelAddLevel(fieldId,startMoveLevelId,stopMoveLevelId,preFieldId){
    $.ajax({
        type:'DELETE',
        url:$url1 + '/bi/report/v1/dataModel/levelField.json'+'?projectId='+projectId+'&versionId='+versionId+'&fieldId='+fieldId+'&levelId='+startMoveLevelId,
        headers:{   username:username, userId:userId    },
        dataType:'json',
        success:function(res){
            if(res.code===0){
                layer.msg('移出成功!');
                joinLevel2(fieldId,stopMoveLevelId,preFieldId);
            }
        },
        error:function(res){
            console.log(res);
        }
    });
}

/*
 * operation.js存在重复-end
 * */



//修改字段名称
function editName($this){
    var id = $this.attr("fieldId");
    var text = $.trim($this.text());
    layer.prompt({title: '修改名称',value: text,maxlength: 30, formType: 0}, function(val, index){
        setBiFieldName(id,val);//修改字段名称
        layer.close(index);
    });
}
//克隆字段
function copyField(fieldId){
    $.ajax({
        type:'post',
        url:$url1 + '/bi/report/v1/dataModel/copiedfield.json',
        headers:{   username:username, userId:userId    },
        dataType:'json',
        data:{
            "projectId":projectId,
            "versionId":versionId,
            "fieldId":fieldId
        },
        success:function(res){
            if(res.code===0){
                layer.msg('克隆成功!');
                getBiDataModel();
            }
        },
        error:function(res){
            console.log(res);
        }
    });
}
//删除自定义字段
function deleteField(fieldId){
    $.ajax({
        type:'delete',
        url:$url1 + '/bi/report/v1/dataModel/customField.json?projectId='+projectId+'&versionId='+versionId+'&fieldId='+fieldId,
        headers:{   username:username, userId:userId    },
        dataType:'json',
        success:function(res){
            if(res.code===0){
                layer.msg('删除成功!');
                getBiDataModel();
            }
        },
        error:function(res){
            console.log(res);
        }
    });
}

//修改字属性（类型转换）
function setFieldDataType(fieldId,dataType){
    // prop：1-修改别名；2-转换类型；3-转换为维度（度量）；4-聚合算法；5-日期格式
    // 当prop值为2时，dataType 转换类型：转换后的类型，1-文本（字符串）；2-日期；3-日期和时间；4-数字
    $.ajax({
        type:'PUT',
        url:$url1 + '/bi/report/v1/dataModel/fieldProps.json',
        headers:{   username:username, userId:userId    },
        dataType:'json',
        data:{
            "projectId":projectId,
            "versionId":versionId,
            "fieldId":fieldId,
            "prop":2,
            "newValue":dataType
        },
        success:function(res){
            if(res.code===0){
                layer.msg('修改成功!');
                getBiDataModel();
            }
        },
        error:function(res){
            console.log(res);
        }
    });
}

//修改字属性（维度转换）
function setDimensionOrMeasure(fieldId,type){
    // prop：1-修改别名；2-转换类型；3-转换为维度（度量）；4-聚合算法；5-日期格式
    // 当prop值为3时，type:0-维度；1-度量
    $.ajax({
        type:'PUT',
        url:$url1 + '/bi/report/v1/dataModel/fieldProps.json',
        headers:{   username:username, userId:userId    },
        dataType:'json',
        data:{
            "projectId":projectId,
            "versionId":versionId,
            "fieldId":fieldId,
            "prop":3,
            "newValue":type
        },
        success:function(res){
            if(res.code===0){
                layer.msg('修改成功!');
                getBiDataModel();
            }
        },
        error:function(res){
            console.log(res);
        }
    });
}
//修改字属性（聚合算法）
function setarithmetic(fieldId,arithmeticType){
    // prop：1-修改别名；2-转换类型；3-转换为维度（度量）；4-聚合算法；5-日期格式
    // 当prop值为4时，arithmeticType:SUM-求和；AVG-平均值；MAX-最大值；MIN-最小值；COUNT-记录数；DCOUNT-取值数
    $.ajax({
        type:'PUT',
        url:$url1 + '/bi/report/v1/dataModel/fieldProps.json',
        headers:{   username:username, userId:userId    },
        dataType:'json',
        data:{
            "projectId":projectId,
            "versionId":versionId,
            "fieldId":fieldId,
            "prop":4,
            "newValue":arithmeticType
        },
        success:function(res){
            if(res.code===0){
                layer.msg('修改成功!');
                getBiDataModel();
            }
        },
        error:function(res){
            console.log(res);
        }
    });
}
//创建层级
function createLevel(fieldId){
    layer.prompt({title: '创建层级',value: '',maxlength: 30, formType: 0}, function(val, index){
        layer.close(index);
        layer.msg('创建层级：'+ val);

        $.ajax({
            type:'post',
            url:$url1 + '/bi/report/v1/dataModel/fieldLevel.json',
            headers:{   username:username, userId:userId    },
            dataType:'json',
            data:{
                "projectId":projectId,
                "versionId":versionId,
                "dataModelId":modelId,
                "fieldId":fieldId,
                "levelName":val
            },
            success:function(res){
                if(res.code===0){
                    layer.msg('创建成功!');
                    getBiDataModel();
                }
            },
            error:function(res){
                console.log(res);
            }
        });
    });
}

//加入层级之一:手动加入
function selectLevel(fieldId){
    var selectVal = '';
    var option = '';
    $.ajax({//获取层级
        type:'get',
        url:$url1 + '/bi/report/v1/dataModel/fieldLevelList.json',
        headers:{   username:username, userId:userId    },
        dataType:'json',
        data:{
            "projectId":projectId,
            "versionId":versionId,
            "dataModelId":modelId
        },
        success:function(res){
            if(res.code===0){
                if(res.data.length>0){
                    $.each(res.data,function(i,item){
                        option+=`<option value="${item.levelId}">${item.levelName}</option>`;
                    });

                    var select = `<select class="">${option}</select>`;
                    layer.open({
                        title: '加入层级',
                        type: 1, content:select,
                        btn: ['确定', '取消'],
                        yes:function(index,layero) {//确定按钮
                            joinLevel(fieldId,selectVal.val());
                            layer.close(index);
                        },
                        btn2:function(index,layero){},//取消按钮
                        success:function(layero, index){//layer层创建成功后的回调
                            selectVal = $(layero).find('.layui-layer-btn').css('padding','0 15px 12px').end()
                                .find('.layui-layer-content').css('padding','20px').find('select').css('margin','0');
                        }
                    });
                }else {//没有层级
                    layer.confirm('未查询到层级，是否创建层级？',function(index,ui){
                        createLevel(fieldId);
                        layer.close(index);
                    });
                }
            }
        },
        error:function(res){
            console.log(res);
        }
    });
}
function joinLevel(fieldId,levelId){
    $.ajax({
        type:'PUT',
        url:$url1 + '/bi/report/v1/dataModel/levelField.json',
        headers:{   username:username, userId:userId    },
        dataType:'json',
        data:{
            "projectId":projectId,
            "versionId":versionId,
            "fieldId":fieldId,
            "levelId":levelId
        },
        success:function(res){
            if(res.code===0){
                layer.msg('加入成功!');
                getBiDataModel();
            }
        },
        error:function(res){
            console.log(res);
        }
    });
}

//移出层级
function popLevel($this){
    console.log($this);
    var fieldId = $this.attr("fieldId");
    var levelId = $this.parent().prev().find('p').attr('levelId');
    $.ajax({
        type:'DELETE',
        url:$url1 + '/bi/report/v1/dataModel/levelField.json'+'?projectId='+projectId+'&versionId='+versionId+'&fieldId='+fieldId+'&levelId='+levelId,
        headers:{   username:username, userId:userId    },
        dataType:'json',
        success:function(res){
            if(res.code===0){
                layer.msg('移出成功!');
                getBiDataModel();
            }
        },
        error:function(res){
            console.log(res);
        }
    });
}
















































































/*


//---------------------------------------------------------------------------------------//
function goUrl(urlItem, obj) {
    var HpageIndex = 0;//定义存储URL地址集合的最大索引
    var HpageLength = 0;//定存储URL地址集合的长度
    var HpageUrl = new Array();//定义存储URL地址的集合
    HpageIndex = parent.window.pageIndex;//获取URL地址集合的最大索引，（父级页面的全局变量）
    HpageLength = parent.window.pageLength; //获取URL地址集合的总长度，（父级页面的全局变量）
    HpageUrl = parent.window.pageUrl;//获取URL地址集合，（父级页面的全局变量）
    var urlPath = parent.document.getElementById('mainFrame').src;//获取主框架当前访问的页面，（主框架MainFrame的src所指定页面地址）
    if (urlItem == '' && obj == '') {///刷新事件的判断
        urlPath = parent.document.getElementById('mainFrame').src;//为了避免异常，在这里重新获取一次 主框架当前访问的页面
        parent.document.getElementById('mainFrame').src = urlPath;//设置主框架当前要访问的页面
    } else if (urlItem == '0' && obj == '0') { ///首页事件处理
        urlPath = HpageUrl[0];//获取集合中第一项值（页面加载时存储进去的首页，也可以自己定义）
        parent.document.getElementById('mainFrame').src = urlPath;//设置主框架当前要访问的页面
    }
    else if (urlItem == '-1' && obj == '-1') {///页面访问历史 后退事件处理
        if (parent.window.pageUrl != null) {//判断URL地址集合（全局是变量）是否为空
            if (parent.window.pageUrl.length == 1)//判断集合的长度是否为1，是则表示访问历史为1
                urlPath = parent.window.pageUrl[0];
            else if (parent.window.pageUrl.length > 1) {//判断集合长度是否大于1，是则循环判断访问历史
                for (var i = 0; i < HpageUrl.length; i++) {//循环访问历史地址集合
                    if (urlPath == HpageUrl[i]) {//判断是否等于当前正在访问的页面地址
                        if ((i - 1) <= 0) {//判断是否后退到第一个, 是则直接取第一个地址
                            urlPath = HpageUrl[0];
                            break;
                        } else {
                            urlPath = HpageUrl[i - 1];//获取当前访问地址相等的上一个访问地址记录
                            break;
                        }
                    }
                }
            }
        }
        if (urlPath == '')//判断历史访问记录地址是否为空，空则返回主框架当前地址
            urlPath = parent.document.getElementById('mainFrame').src;
        parent.document.getElementById('mainFrame').src = urlPath;//设置主框架当前要访问的页面
    }else if (urlItem == '1' && obj == '1') {//页面访问历史 前进事件处理
        if (parent.window.pageUrl != null) {//判断URL地址集合（全局是变量）是否为空
            if (parent.window.pageUrl.length == 1)//判断集合的长度是否为1，是则表示访问历史为1
                urlPath = parent.window.pageUrl[0];//判断集合长度是否大于1，是则循环判断访问历史
            else if (parent.window.pageUrl.length > 1) {//循环访问历史地址集合
                for (var i = 0; i < HpageUrl.length; i++) {//判断是否等于当前正在访问的页面地址
                    if (urlPath == HpageUrl[i]) {//判断是否前进到最后一个, 是则直接取最后一个地址
                        if ((i + 1) >= parent.window.pageUrl.length) {
                            urlPath = HpageUrl[i];
                            break;
                        }
                        else {
                            urlPath = HpageUrl[i + 1];//获取当前访问地址相等的下一个访问地址记录
                            break;
                        }
                    }
                }
            }
        }
        if (urlPath == '')//判断历史访问记录地址是否为空，空则返回主框架当前地址
            urlPath = parent.document.getElementById('mainFrame').src;
        parent.document.getElementById('mainFrame').src = urlPath;//设置主框架当前要访问的页面
    } else {
        urlPath = "Default.aspx?" + urlItem;//设置事件传递的要访问的页面地址
        parent.document.getElementById('mainFrame').src = urlPath;//设置主框架当前要访问的页面
        urlPath = parent.document.getElementById('mainFrame').src;
//重新获取主框架当前要访问的页面
        HpageUrl[HpageIndex + 1] = urlPath;//将当前访问的页面地址加入到页面临时URL的地址集合
        parent.window.pageIndex = HpageIndex + 1; //设置全局最大索引
        parent.window.pageLength = HpageLength + 1; //设置全局集合的长度
        parent.window.pageUrl = HpageUrl;//设置全局集合数据
//
        alert('当前访问：' + urlPath + '  pageUrl.Length:' + HpageUrl.length, +'');
    }
}

*/

