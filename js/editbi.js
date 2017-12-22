$(function(){



    function getBiDataModel(){
        var biSetId = $(".data-source-box select option:selected").attr("biSetId");
        $("#dimensionBox").mCustomScrollbar("destroy");
        $(".metric-box").mCustomScrollbar("destroy");
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
                                    li+=`<li fieldId="${item.fieldId}" fieldName="${item.fieldName}" isCopied="${item.isCopied}"
                                     baseDataType="${item.baseDataType}" dataType="${item.dataType}"
                                     baseDimMea="${item.baseDimMea}" dim_mea="${item.dimMea}"
                                     baseDisCon="${item.baseDisCon}" disCon="${item.disCon}">${item.fieldAlias}</li>
                                `;
                                });

                                if(value.type==1){//原始字段
                                    dhtml += `<div class="original"><div class="dimension-title"><p>${value.title}</p></div><ul class="placeholder">${li}</ul></div>`;
                                }else if(value.type==2){//自定义字段
                                    dhtml += `<div class="user-defined"><div class="dimension-title"><p>${value.title}</p></div><ul class="placeholder">${li}</ul></div>`;
                                }else if(value.type==3){//自定义层
                                    dhtml += `<div hierarchyId="${value.id}" class="hierarchy"><div class="dimension-title"><p>${value.title}</p></div><ul class="placeholder">${li}</ul></div>`;
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
                                    li+=`<li fieldId="${item.fieldId}" fieldName="${item.fieldName}" isCopied="${item.isCopied}"
                                     baseDataType="${item.baseDataType}" dataType="${item.dataType}"
                                     baseDimMea="${item.baseDimMea}" dim_mea="${item.dimMea}"
                                     baseDisCon="${item.baseDisCon}" disCon="${item.disCon}" defaultAggregation="${item.defaultAggregation}">${item.fieldAlias}</li>
                                `;
                                });

                                if(value.type==1){//原始字段
                                    mhtml += `<div class="original"><div class="dimension-title"><p>${value.title}</p></div><ul class="placeholder">${li}</ul></div>`;
                                }else if(value.type==2){//自定义字段
                                    mhtml += `<div class="user-defined"><div class="dimension-title"><p>${value.title}</p></div><ul class="placeholder">${li}</ul></div>`;
                                }
                            });
                        }else{
                            mhtml='';
                        }

                        $(".metric-box").empty().append(mhtml);


                        //滚动条
                        console.log('+++++');
                        $("#dimensionBox").mCustomScrollbar({theme:"dark"});
                        $(".metric-box").mCustomScrollbar({theme:"dark"});


                        //维度
                        /*$.each(data.dimensions,function(i,item){
                         dhtml += `
                         <li fieldId="${item.fieldId}" fieldName="${item.fieldName}" dataType="${item.dataType}" disCon="${item.disCon}" defaultAggregation="${item.defaultAggregation}" dim_mea="0">${item.fieldAlias}</li>
                         `;
                         });
                         $(".dimension-box .original .placeholder").empty().append(dhtml);*/
                        //度量
                        /*
                         $.each(data.measures, function(i,item) {
                         mhtml += `
                         <li fieldId="${item.fieldId}" fieldName="${item.fieldName}" dataType="${item.dataType}" disCon="${item.disCon}" defaultAggregation="${item.defaultAggregation}" dim_mea="1">${item.fieldAlias}</li>
                         `;
                         });
                         $(".metric-box .placeholder").empty().append(mhtml);
                         */



                        //设置度量维度可拖拽
                        $( ".set-param-box ul li").draggable({
                            // same-resource ul li
                            appendTo: "body",
                            helper: "clone"
                        });
                    }
                }else {
                    $(".dimension-box").empty();$(".metric-box").empty()
                }
            },
            error:function(res){
                // console.log(1);
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
                    getBiDataModel();
                }
            },
            error:function(res){
                console.log(res);
            }
        });
    }

    //修改字段名称
    function editName($this){
        console.log("修改名称 ");
        let fieldAlias = '';
        const id = $this.attr("fieldId");
        console.log($this);
        layer.confirm('<input class="none" type="text" style="display:block;margin:0 auto;width:160px;height:14px;padding:6px;border:1px solid #ccc;font-size:12px;" value="' + $.trim($this.text()) + '"/>', {
            btn: ['确定', '取消'], //按钮
            yes: function (index) {
                fieldAlias=$(".none").val();
                $this.text(fieldAlias);
                layer.close(index);
                setBiFieldName(id,fieldAlias);//修改字段名称
            }
        });
    }
    //克隆字段
    function copyField($this){
        const id = $this.attr('fieldId');
        $.ajax({
            type:'post',
            url:$url1 + '/bi/report/v1/dataModel/copiedfield.json',
            headers:{   username:username, userId:userId    },
            dataType:'json',
            data:{
                "projectId":projectId,
                "versionId":versionId,
                "fieldId":id
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
    function delterField($this){
        const id = $this.attr('fieldId');
        $.ajax({
            type:'delete',
            url:$url1 + '/bi/report/v1/dataModel/customField.json?projectId='+projectId+'&versionId='+versionId+'&fieldId='+id,
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
    //维度转换
    function setDimensionOrMeasure($this,type){//type:1-维度,2-度量
        const id = $this.attr('fieldId');
        $.ajax({
            type:'PUT',
            url:$url1 + '/bi/report/v1/dataModel/fieldProps.json',
            headers:{   username:username, userId:userId    },
            dataType:'json',
            data:{
                "projectId":projectId,
                "versionId":versionId,
                "fieldId":id,
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
    //聚合算法
    function setarithmetic($this,arithmeticType){
        const id = $this.attr("fieldId");
        $.ajax({
            type:'PUT',
            url:$url1 + '/bi/report/v1/dataModel/fieldProps.json',
            headers:{   username:username, userId:userId    },
            dataType:'json',
            data:{
                "projectId":projectId,
                "versionId":versionId,
                "fieldId":id,
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






    //维度原始字段，右键菜单
    $('.dimension-box').on('contextmenu','.original .placeholder li',function(e){
        var $this = $(this);
        var item = [
            {text: '修改名称', action:function(){editName($this);}},
            {text: '复制字段', action:function(){copyField($this);}},
            {text:'转换数据类型',subMenu:[
                {text:'转为其他类型,待完成',action:function(){}},
                {text:'转为其他类型,待完成',action:function(){}},
                {text:'转为其他类型,待完成',action:function(){}},
                {text:'转为其他类型,待完成',action:function(){}},
                {text:'转为其他类型,待完成',action:function(){}}
            ]},
            {text:'创建层级',action:function(){}},
            {text:'加入层级',action:function(){}},
            {text:'转换为度量',action:function(){
                setDimensionOrMeasure($this,'2');
            }}

        ];
        context.rightClick(e, item);
    });

    //维度自定义字段，右键菜单
    $('.dimension-box').on('contextmenu','.user-defined .placeholder li',function(e){
        var $this = $(this);
        var item = [
            {text: '修改名称', action:function(){editName($this);}},
            {text: '复制字段', action:function(){copyField($this);}},
            {text:'创建层级',action:function(){}},
            {text:'加入层级',action:function(){}},
            {text:'转换为度量',action:function(){setDimensionOrMeasure($this,'2');}},
            {text:'删除',action:function(){delterField($this)}}
        ];
        context.rightClick(e, item);
    });

    //维度层级下的字段，右键菜单
    $('.dimension-box').on('contextmenu','.hierarchy .placeholder li',function(e){
        var $this = $(this);
        var item =[
            {text: '修改名称', action:function(){editName($this);}},
            {text: '复制字段', action:function(){copyField($this);}},
            {text:'移出层级',action:function(){}},
            {text:'删除,只能删除非原始字段',action:function(){
                console.log('删除');
            }}
        ];
        context.rightClick(e, item);
    });



    //度量原始字段，右键菜单
    $('.metric-box').on('contextmenu','.original .placeholder li',function(e){
        var $this = $(this);
        const fieldId = $this.attr('fieldId');
        const baseDimMea = $this.attr('baseDimMea');
        const dimMea = $this.attr('dim_mea');

        var item = [];
        item.push({text: '修改名称', action: editName},{text: '复制字段', action: copyField});
        item.push({text:'转换数据类型',subMenu:[
            {text:'转为其他类型,待完成',action:function(){}},
            {text:'转为其他类型,待完成',action:function(){}},
            {text:'转为其他类型,待完成',action:function(){}},
            {text:'转为其他类型,待完成',action:function(){}},
            {text:'转为其他类型,待完成',action:function(){}}
        ]});
        item.push({text:'转换为维度',action:function(){
            setDimensionOrMeasure($this,'1');
        }});


        console.log(item);

        if(baseDimMea=='1'){//初始的维度/度量：0-维度；1-度量
            item.push({text:'聚合算法',subMenu:[
                {text:'求和',action:function(){setarithmetic($this,'SUM');}},
                {text:'平均值',action:function(){setarithmetic($this,'AVG');}},
                {text:'最大值',action:function(){setarithmetic($this,'MAX');}},
                {text:'最小值',action:function(){setarithmetic($this,'MIN');}},
                {text:'记录数',action:function(){setarithmetic($this,'COUNT');}},
                {text:'取值数',action:function(){setarithmetic($this,'DCOUNT');}}
            ]});
            context.rightClick(e, item);
        }else {
            item.push({text:'聚合算法',subMenu:[
                {text:'记录数',action:function(){setarithmetic($this,'COUNT');}},
                {text:'取值数',action:function(){setarithmetic($this,'DCOUNT');}}
            ]});
            context.rightClick(e, item);
        }

    });




    //度量自定义字段，右键菜单
    $('.metric-box').on('contextmenu','.user-defined .placeholder li',function(e){
        var $this = $(this);
        var item = [
            {text: '修改名称', action:function(){editName($this);}},
            {text: '复制字段', action:function(){copyField($this);}},
            {text:'转换为维度',action:function(){
                setDimensionOrMeasure($this,'1');
            }},
            {text:'聚合算法',subMenu:[
                {text:'算法,待完成',action:function(){

                }},
                {text:'算法,待完成',action:function(){}},
                {text:'算法,待完成',action:function(){}},
                {text:'算法,待完成',action:function(){}},
                {text:'算法,待完成',action:function(){}}
            ]},
            {text:'删除',action:function(){delterField($this)}}
        ];
        context.rightClick(e, item);
    });










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


});