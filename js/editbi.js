$(function(){
    var editName = function(){
        console.log("修改名称");
        let fieldAlias = '';
        const id = context.getClickEle().attr("fieldId");
        console.log(context.getClickEle());
        layer.confirm('<input class="none" type="text" style="display:block;margin:0 auto;width:160px;height:14px;padding:6px;border:1px solid #ccc;font-size:12px;" value="' + $.trim(context.getClickEle().text()) + '"/>', {
            btn: ['确定', '取消'], //按钮
            yes: function (index) {
                $(context.getClickEle()).text($(".none").val());
                fieldAlias=$(".none").val();
                layer.close(index);
                setBiFieldName(id,fieldAlias);//修改字段名称
            }
        });
    };
    var copyField = function(){
        console.log("复制字段");
        //let fieldAlias = '';
        const id = context.getClickEle().attr("fieldId");
        console.log(this);
        console.log(id);
        console.log(context.getClickEle());
    };

    //维度原始字段，右键菜单
    context.attach('.dimension-box .original .placeholder li', [
        {text: '修改名称', action: editName},
        {text: '复制字段', action: copyField},
        {text:'转换数据类型',subMenu:[
            {text:'转为其他类型,待完成',action:function(){}},
            {text:'转为其他类型,待完成',action:function(){}},
            {text:'转为其他类型,待完成',action:function(){}},
            {text:'转为其他类型,待完成',action:function(){}},
            {text:'转为其他类型,待完成',action:function(){}}
        ]},
        {text:'创建层级',action:function(){}},
        {text:'加入层级',action:function(){}},
        {text:'转换为度量',action:function(){}}

    ]);
    //维度自定义字段，右键菜单
    context.attach('.dimension-box .user-defined .placeholder li', [
        {text: '修改名称', action: editName},
        {text: '复制字段', action: copyField},
        {text:'创建层级',action:function(){}},
        {text:'加入层级',action:function(){}},
        {text:'转换为度量',action:function(){}},
        {text:'删除',action:function(){}}
    ]);
    //维度层级下的字段，右键菜单
    context.attach('.dimension-box .hierarchy .placeholder li', [
        {text: '修改名称', action: editName},
        {text: '复制字段', action: copyField},
        {text:'移出层级',action:function(){}},
        {text:'删除,只能删除非原始字段',action:function(){
            console.log();
        }}
    ]);

    //度量原始字段，右键菜单
    context.attach('.metric-box .original .placeholder li', [
        {text: '修改名称', action: editName},
        {text: '复制字段', action: copyField},
        {text:'转换数据类型',subMenu:[
            {text:'转为其他类型,待完成',action:function(){}},
            {text:'转为其他类型,待完成',action:function(){}},
            {text:'转为其他类型,待完成',action:function(){}},
            {text:'转为其他类型,待完成',action:function(){}},
            {text:'转为其他类型,待完成',action:function(){}}
        ]},

        {text:'转换为维度',action:function(){}},
        {text:'聚合算法',subMenu:[
            {text:'算法,待完成',action:function(){}},
            {text:'算法,待完成',action:function(){}},
            {text:'算法,待完成',action:function(){}},
            {text:'算法,待完成',action:function(){}},
            {text:'算法,待完成',action:function(){}}
        ]}
    ]);

    //度量自定义字段，右键菜单
    context.attach('.metric-box .user-defined .placeholder li', [
        {text: '修改名称', action: editName},
        {text: '复制字段', action: copyField},
        {text:'转换为维度',action:function(){}},
        {text:'聚合算法',subMenu:[
            {text:'算法,待完成',action:function(){}},
            {text:'算法,待完成',action:function(){}},
            {text:'算法,待完成',action:function(){}},
            {text:'算法,待完成',action:function(){}},
            {text:'算法,待完成',action:function(){}}
        ]},
        {text:'删除',action:function(){}}
    ]);











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