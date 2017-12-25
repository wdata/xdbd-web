
// 获取url网址ID
var urlParams = function (key) {
    var ret = location.search.match(new RegExp('(\\?|&)' + key + '=(.*?)(&|$)'))
    return ret && decodeURIComponent(ret[2])
};


projectId = urlParams("projectId");
dirId = urlParams("pageId");
versionId = urlParams("versionId");
username = urlParams("username");
userId = urlParams("userId");
previewReportMenuId =  urlParams("previewReportMenuId");
previewPageId =  urlParams("previewPageId");

$(function(){
    previewBur = false;
    if((previewReportMenuId === "null" ||  previewReportMenuId === "undefined" || !previewReportMenuId) || (previewPageId === "null" ||  previewPageId === "undefined" || !previewPageId)){
        $(".mn-sider").hide();
        $(".mn-header").hide();
        $(".mn-htmlmain").css({
            "top":0,
            "left":0
        });
        pageData(dirId);
    }
});
