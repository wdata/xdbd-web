var appkey = 'xddb';//应用的appkey
var cas_sever = 'http://192.168.1.15:8445';
sessionStorage.setItem("ByuserName","admin");
sessionStorage.setItem("userId","2060");
//cas服务器地址
var urlArguments = parseQueryString(location.href);//获取URL的参数JSON格式
var reUrl = location.href.split('?')[0];//本项目的地址(回调地址)
var login_url=cas_sever+'/cas-server/login?service='+reUrl+'&clientId='+appkey;//登录
var logout_url=cas_sever+'/cas-server/logout?service='+reUrl;//登出


(function (){//login
    var ByuserName = sessionStorage.getItem('ByuserName');
    if(ByuserName){
        sysidByusernameAndAppkey(ByuserName);
    }else {
        serviceValidate();
    }
})();
function logOut(){//登出
    sessionStorage.clear();
    window.location.href = logout_url;
}

	/*
	 
	 * url地址变量
	 * BI : http://192.168.1.42:8084/xdbd-bi
	 * ETL: http://192.168.1.42:8084/xdbd-etl
	 * PM: http://192.168.1.42:8084/xdbd-pm
	 * WF: http://192.168.1.42:8084/xdbd-wf
	 * 
	 * */
	var $url1 = "/xdbd-bi";
	var $url2 = "/xdbd-etl";
	var $url3 = "/xdbd-pm";
	var $url4 = "/xdbd-wf";
	
	var projectId = localStorage.getItem("projectId");
	var versionId = localStorage.getItem("versionId");
	var dirId = localStorage.getItem("directoryId");
	var createUser = localStorage.getItem("createUser");
	var updateUser = localStorage.getItem("updateUser");
	var username = sessionStorage.getItem("ByuserName"),
		userId = sessionStorage.getItem("userId");


function sysidByusernameAndAppkey(ByuserName){//获取sysid(userId)
    userId = sessionStorage.getItem('userId');
    if(userId){
//      console.log(userId);
        return true;
    }else {
        $.ajax({
            url:'/crm/api/usercrm/sysidByusernameAndAppkey',
            type:'get',
            dataType:'json',
            //async:false,
            data:{username:ByuserName,appkey:appkey},
            success:function(res){
                if(res.code==0){
                	console.log(res);
                    if(res.data){
                        userId = res.data;
                        sessionStorage.setItem('userId',userId);
                    }else {
                        console.error('未获取到sysid');
                        var timer=window.setTimeout(function(){location.href = login_url;},2000);
                    }
                }
            }
        });
    }
}

function serviceValidate(){//获取登录后的username
    console.log((!urlArguments.ticket));
    if(!urlArguments.ticket){
        window.location.href = login_url;
        return false;
    }
    $.ajax({
        type:'get',
        url:'/cas-server/serviceValidate',
        dataType:'XML',
        async:false,
        data:{
            ticket:urlArguments.ticket,
            service:reUrl
        },
        success:function(res){
            console.log(res);
            window.xml = res;
            var usernameNode = res.getElementsByTagName('cas:username');
            if(usernameNode.length>0){
                var ByuserName = $.trim(usernameNode[0].innerHTML);
                sessionStorage.setItem('ByuserName',ByuserName);
                sysidByusernameAndAppkey(ByuserName);
            }else {
                if(!sessionStorage.getItem('ByuserName')){
                    window.location.href = login_url;
                }
            }
            console.log(ByuserName);
        },
        error:function(res){
            console.log(res)
        }
    });
    return true;
}

function parseQueryString(url) {//解析url参数为JSON对象
    var reg_url = /^[^\?]+\?([\w\W]+)$/,
        reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
        arr_url = reg_url.exec(url),
        ret = {};
    if (arr_url && arr_url[1]) {
        var str_para = arr_url[1], result;
        while ((result = reg_para.exec(str_para)) != null) {
            ret[result[1]] = result[2];
        }
    }
    return ret;
}

//行业类型
function industryType() {
  var arr = [
    '机构组织',
    '农林牧渔',
    '医药卫生',
    '建筑建材',
    '冶金矿产',
    '石油化工',
    '水利水电',
    '交通运输',
    '信息产业',
    '机械机电',
    '轻工食品',
    '服装纺织',
    '专业服务',
    '安全防护',
    '环保绿化',
    '旅游休闲',
    '办公文教',
    '电子电工',
    '玩具礼品',
    '家居用品',
    '物资',
    '包装',
    '体育',
    '办公'
  ];
  var type = [];
  $.each(arr,function(index,item) {
    var i = (index+1)<10?('0'+(index+1)):(index+1);
    type.push('<option value='+i+'>'+item+'</option>');
  })
  return type;
}
