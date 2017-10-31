
// 获取url网址ID
var urlParams = function (key) {
    var ret = location.search.match(new RegExp('(\\?|&)' + key + '=(.*?)(&|$)'))
    return ret && decodeURIComponent(ret[2])
};


var projectId = urlParams("projectId"),
    pageId = urlParams("pageId"),
    versionId = urlParams("versionId"),
    username = urlParams("username"),
    userId = urlParams("userId")


$(function(){
    /*
     * 根据传递的参数，获取页面数据
     * */

    $.ajax({
        type:"get",
        url:"/xdbd-bi/bi/report/v1/page.json",
        headers:{
            username:username,
            userId:userId
        },
        data:{
            "pageId":pageId,
            "projectId":projectId,
            "versionId":versionId,
        },
        dataType:"json",
        success:function(data){
            if(data.code === 0){
                if(data.data.htmlJson){
                    displayPage(data.data);
                }
            }
        },
        error:function(res){
            // console.log(res);
        }
    });

    // 显示BI页面数据
    function displayPage(data){
        // 遍历数据,生成图形
        var html = '';
        $.each(data.htmlJson.controls,function(index,val){
            var text = ''            // html
                ,style =  val.style  // 宽、高
                ,dataType = val.customData.dataType;  // 类型

            // 判断图形、表格、文本、图片、按钮
            // 如果是文本和图片，则复制内容不同
            if(dataType === "text" || dataType === "button" || dataType === "image"){
                text = val.customData.controls.html;
            }else if(dataType === "table" || dataType === "chart"){
                // 将数据存入检索数据中
                var chart_date = {
                    'cid':val.cid,
                    "type":val.type,
                    "queryJson":val.queryJson,
                };
                DataIndexes.inAjax(chart_date,val.cid);
            }
            html = '<div  id="'+ val.cid +'" type="'+ val.type +'" data-type="'+ val.customData.dataType +'" style="height:'+ style.height +'px;width:'+ style.width +'px;top:'+ style.top +'px;left:'+ style.left +'px;z-index:'+ val.displayLevel +'" class="resize-item">'+ text +'</div>';
            $(".mn-htmlmain").append(html);
        });
    }
})
