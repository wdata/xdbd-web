
// 获取url网址ID
var urlParams = function (key) {
    var ret = location.search.match(new RegExp('(\\?|&)' + key + '=(.*?)(&|$)'))
    return ret && decodeURIComponent(ret[2])
};


projectId = urlParams("projectId")
dirId = urlParams("pageId")
versionId = urlParams("versionId")
username = urlParams("username")
userId = urlParams("userId")

$(function(){
		adce(dirId);
})
