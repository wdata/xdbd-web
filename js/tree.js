$(function () {
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
    var $urlPublic = "http://192.168.1.43:8086";//公共页面

    /*

     * 常用参数说明
     * projectId -- 项目id
     * versionId -- 版本id
     * version   -- 版本
     * publishType  发布环境（1-测试发布，2-提交发布）
     *
     * */
    var projectId = "";
    var versionId = "";
    var version = "";
    var publishType = 1;
    var directoryId = "";
    var companyId = "";
    var createUser = "";
    var updateUser = "";
    var rootPath = "";
    var lv1DirId = "";//一级目录id
    var pageFlowId = "";//页面流父级->目录 id
    var name;//项目树重命名
    var BIdirId = "";
    var FBIdirId = "";

    /**
     *
     * 用户菜单权限
     *
     */

    // userRight();
    /*//延迟调用：
    var winTimer = window.setInterval(function(){
        if(sessionStorage.getItem("userId")){
            userRight();
            window.clearInterval(winTimer);
            winTimer = null;
        }
    },20);*/

    let onCurEnv = sessionStorage.setItem("onEnv", "");

    function userRight() {
        $.ajax({
            type: "POST",
            url: $url3 + "/api/resource/v1/resources",
            headers: {
                username: sessionStorage.getItem("ByuserName"), userId: sessionStorage.getItem("userId")
            },
            dataType: 'json',
            contentType: "application/json",
            success: function (res) {
                if (res.code === 0) {
                    var menuLv1 = res.data;
                    var htmlLv1 = "";
                    //一级菜单
                    $.each(menuLv1, function (i, v) {
                        htmlLv1 += `
              				<li class="${i === 0 ? 'active' : ''}"><a href="javascript:;">${v.name}</a></li>
              			`;
                    });
                    $(".menu-top ul").empty().append(htmlLv1);

                    //项目管理环境控制
                    var menuEnv = menuLv1[0].childrens;
                    var htmlEnv = "";
                    $.each(menuEnv, function (i, v) {
                        htmlEnv += `
              				<option value="${v.name}">${v.name}</option>
              			`;
                        if (i === 0) {
                            onCurEnv = v.name;
                            switch (onCurEnv) {
                                case "开发环境":
                                    onCurEnv = "dev";
                                    break;
                                case "测试环境":
                                    onCurEnv = "test";
                                    break;
                                case "生产环境":
                                    onCurEnv = "prod";
                                    break;
                                default:
                            }
                            sessionStorage.setItem("onEnv", onCurEnv);
                            getProjName(0);//刷新项目树
                        }
                    });
                    $(".set-cur-env select").empty().append(htmlEnv);
                    //系统管理菜单
                    var menuSys = menuLv1[4].childrens;
                    var htmlSys = "";
                    $.each(menuSys, function (i, v) {
                        htmlSys += `
              				<li class="${v.name === '日志管理' ? 'active' : ''}"><a href="javascript:;">${v.name}</a></li>
              			`;
                    });
                    $(".sys-menus").empty().append(htmlSys);
                    //监控中心
                    var menuMonitoring = menuLv1[5].childrens;
                    var htmlMonitoring = "";
                    var isCN = location.hostname.indexOf('.cn');
                    var url = '';
                    $.each(menuMonitoring, function (i, v) {
                        if (isCN == -1) {//非 .cn 域名
                            url = v.remark.replace(/\.cn\:/, '.ai:');
                        } else {
                            url = v.remark.replace(/\.ai:/, '.cn:');
                        }
                        htmlMonitoring += `
              				<li class="${i == 0 ? 'active' : ''}" url="${url}"><a href="javascript:;">${v.name}</a></li>
              			`;
                        /*if(i==0){
                            $("#iframepage7").attr("src",url);
                        }*/
                    });
                    $(".htmlMonitoring-menus").empty().append(htmlMonitoring);

                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    }


///2018-01-23-------start-------//////
    var apiResource = {
        "code": 0,
        "success": true,
        "message": "操作成功！",
        "timestamp": 1516006903701,
        "data": [{
            "sort": 1,
            "type": 2,
            "status": 1,
            "tag": 0,
            "icon": "",
            "image": "",
            "id": "501",
            "method": "GET",
            "name": "智能BI",
            "remark": "",
            "url": "/xdbd/pm",
            "children": null,
            "childrens": [{
                "sort": 1,
                "type": 2,
                "status": 1,
                "tag": 0,
                "icon": "",
                "image": "",
                "id": "515",
                "method": "GET",
                "name": "开发环境",
                "remark": "",
                "url": "/xdbd/pm/dev",
                "children": null,
                "childrens": []
            }, {
                "sort": 2,
                "type": 2,
                "status": 1,
                "tag": 0,
                "icon": "",
                "image": "",
                "id": "516",
                "method": "GET",
                "name": "测试环境",
                "remark": "",
                "url": "/xdbd/pm/test",
                "children": null,
                "childrens": []
            }, {
                "sort": 3,
                "type": 2,
                "status": 1,
                "tag": 0,
                "icon": "",
                "image": "",
                "id": "517",
                "method": "GET",
                "name": "生产环境",
                "remark": "",
                "url": "/xdbd/pm/prod",
                "children": null,
                "childrens": []
            }]
        }, {
            "sort": 15,
            "type": 2,
            "status": 1,
            "tag": 0,
            "icon": null,
            "image": null,
            "id": "502",
            "method": "GET",
            "name": "智能信链",
            "remark": "",
            "url": "/xdbd/znxl",
            "children": null,
            "childrens": []
        }, {
            "sort": 17,
            "type": 2,
            "status": 1,
            "tag": 0,
            "icon": null,
            "image": null,
            "id": "504",
            "method": "GET",
            "name": "智能风控",
            "remark": "",
            "url": "/xdbd/znfk",
            "children": null,
            "childrens": []
        }, {
            "sort": 18,
            "type": 2,
            "status": 1,
            "tag": 0,
            "icon": null,
            "image": null,
            "id": "505",
            "method": "GET",
            "name": "智能营销",
            "remark": "",
            "url": "/xdbd/znyx",
            "children": null,
            "childrens": []
        }, {
            "sort": 20,
            "type": 2,
            "status": 1,
            "tag": 0,
            "icon": "",
            "image": "",
            "id": "506",
            "method": "GET",
            "name": "系统管理",
            "remark": "",
            "url": "/xdbd/sm",
            "children": null,
            "childrens": [{
                "sort": 1,
                "type": 2,
                "status": 1,
                "tag": 0,
                "icon": null,
                "image": null,
                "id": "518",
                "method": "GET",
                "name": "个人信息",
                "remark": null,
                "url": "/xdbd/sm/userinfo",
                "children": null,
                "childrens": []
            }, {
                "sort": 2,
                "type": 2,
                "status": 1,
                "tag": 0,
                "icon": null,
                "image": null,
                "id": "519",
                "method": "GET",
                "name": "组织管理",
                "remark": null,
                "url": "/xdbd/sm/ozmanager",
                "children": null,
                "childrens": []
            }, {
                "sort": 3,
                "type": 2,
                "status": 1,
                "tag": 0,
                "icon": "",
                "image": "",
                "id": "511",
                "method": "GET",
                "name": "账号管理",
                "remark": "",
                "url": "/xdbd/sm/account",
                "children": null,
                "childrens": []
            }, {
                "sort": 4,
                "type": 2,
                "status": 1,
                "tag": 0,
                "icon": "",
                "image": "",
                "id": "512",
                "method": "GET",
                "name": "角色管理",
                "remark": "",
                "url": "/xdbd/sm/role",
                "children": null,
                "childrens": []
            }, {
                "sort": 5,
                "type": 2,
                "status": 1,
                "tag": 0,
                "icon": "",
                "image": "",
                "id": "514",
                "method": "GET",
                "name": "企业中心",
                "remark": "",
                "url": "/xdbd/sm/bscenter",
                "children": null,
                "childrens": []
            }, {
                "sort": 6,
                "type": 2,
                "status": 1,
                "tag": 0,
                "icon": "",
                "image": "",
                "id": "513",
                "method": "GET",
                "name": "日志管理",
                "remark": "",
                "url": "/xdbd/sm/log",
                "children": null,
                "childrens": []
            }]
        }, {
            "sort": 21,
            "type": 2,
            "status": 1,
            "tag": 0,
            "icon": null,
            "image": null,
            "id": "507",
            "method": "GET",
            "name": "监控中心",
            "remark": null,
            "url": "/xdbd/monitor",
            "children": null,
            "childrens": [{
                "sort": 12,
                "type": 2,
                "status": 1,
                "tag": 0,
                "icon": null,
                "image": null,
                "id": "508",
                "method": "GET",
                "name": "CDH监控",
                "remark": "http://bd.braindeep.ai:7180",
                "url": "/xdbd/monitor/cdh",
                "children": null,
                "childrens": []
            }, {
                "sort": 13,
                "type": 2,
                "status": 1,
                "tag": 0,
                "icon": null,
                "image": null,
                "id": "509",
                "method": "GET",
                "name": "HDFS监控端口",
                "remark": "http://bd.braindeep.ai:50070",
                "url": "/xdbd/monitor/hdfs",
                "children": null,
                "childrens": []
            }, {
                "sort": 14,
                "type": 2,
                "status": 1,
                "tag": 0,
                "icon": null,
                "image": null,
                "id": "510",
                "method": "GET",
                "name": "oozie监控端口",
                "remark": "http://bd.braindeep.ai:11000/oozie/",
                "url": "/xdbd/monitor/oozie",
                "children": null,
                "childrens": []
            }]
        }]
    };

    function userRight_yanshi(res) {
        if (res.code === 0) {
            var menuLv1 = res.data;
            var htmlLv1 = "";
            //一级菜单
            $.each(menuLv1, function (i, v) {
                htmlLv1 += `
								<li class="${i === 0 ? 'active' : ''}"><a href="javascript:;">${v.name}</a></li>
							`;
            });
            $(".menu-top ul").empty().append(htmlLv1);

            //项目管理环境控制
            var menuEnv = menuLv1[0].childrens;
            var htmlEnv = "";
            $.each(menuEnv, function (i, v) {
                htmlEnv += `
								<option value="${v.name}">${v.name}</option>
							`;
                if (i === 0) {
                    onCurEnv = v.name;
                    switch (onCurEnv) {
                        case "开发环境":
                            onCurEnv = "dev";
                            break;
                        case "测试环境":
                            onCurEnv = "test";
                            break;
                        case "生产环境":
                            onCurEnv = "prod";
                            break;
                        default:
                    }
                    sessionStorage.setItem("onEnv", onCurEnv);
                    getProjName(0);//刷新项目树
                }
            });
            $(".set-cur-env select").empty().append(htmlEnv);
            //系统管理菜单
            var menuSys = menuLv1[4].childrens;
            var htmlSys = "";
            $.each(menuSys, function (i, v) {
                htmlSys += `
								<li class="${v.name === '日志管理' ? 'active' : ''}"><a href="javascript:;">${v.name}</a></li>
							`;
            });
            $(".sys-menus").empty().append(htmlSys);
            //监控中心
            var menuMonitoring = menuLv1[5].childrens;
            var htmlMonitoring = "";
            var isCN = location.hostname.indexOf('.cn');
            var url = '';
            $.each(menuMonitoring, function (i, v) {
                if (isCN == -1) {//非 .cn 域名
                    url = v.remark.replace(/\.cn\:/, '.ai:');
                } else {
                    url = v.remark.replace(/\.ai:/, '.cn:');
                }
                htmlMonitoring += `
								<li class="${i == 0 ? 'active' : ''}" url="${url}"><a href="javascript:;">${v.name}</a></li>
							`;
                /*if(i==0){
                    $("#iframepage7").attr("src",url);
                }*/
            });
            $(".htmlMonitoring-menus").empty().append(htmlMonitoring);

        }
    }

    userRight_yanshi(apiResource);

///2018-01-23-------end-------//////


    /**
     * 环境切换
     */
    $(".set-cur-env select").on("change", function () {
        onCurEnv = $(this).find("option:selected").val();
        switch (onCurEnv) {
            case "开发环境":
                onCurEnv = "dev";
                break;
            case "测试环境":
                onCurEnv = "test";
                break;
            case "生产环境":
                onCurEnv = "prod";
                break;
            default:
        }
        sessionStorage.setItem("onEnv", onCurEnv);
        getProjName(0);//切换环境,刷新项目树
        $("#iframepage1").attr("src", "html/void.html");

        if (onCurEnv === "test") {
            $("#create-proj-btn").hide();
            $("#importProj").hide();
        } else if (onCurEnv === "dev") {
            $("#create-proj-btn").show();
            $("#importProj").show();
        } else if (onCurEnv === "prod") {
            $("#create-proj-btn").hide();
            $("#importProj").hide();
//			var url  = "?username="+ username +"&userId="+ userId +"&pageId="+ dirId +"&projectId="+ projectId +"&versionId="+ versionId +"";
//  		window.open("../html/preview.html" + url);
        }
    })


    /**
     * 公共页面*/
    $(".sys-menus").delegate("li", "click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        let url;
        let name = $(this).find("a").text();
        switch (name) {
            /*case "个人信息":
                url = $urlPublic + "/page/person/person.html";
                break;
            case "组织管理":
                url = $urlPublic + "/page/org_control/org_control.html";
                break;
            case "账号管理":
                url = $urlPublic + "/page/account/account.html";
                break;
            case "角色管理":
                url = $urlPublic + "/page/character/character.html";
                break;
            case "日志管理":
                url = "html/loglist.html";
                break;
            case "企业中心":
                url = $urlPublic + "/page/org_control/not_org.html";
                break;*/
            default:
                url = "html/loglist.html";
                break;
        }
        $("#iframepage6").attr("src", url);
    });
    /**
     * 监控页面*/
    $(".htmlMonitoring-menus").delegate("li", "click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        var url = $(this).attr('url');
        //$("#iframepage3").attr("src",url);
        window.open(url);
    });


    /*

     * 创建项目
     * */
    $("#create-proj-btn").click(function () {
        var index = layer.open({
            type: 1,
            btn: ['确定', '取消'],
            area: ['660px', '530px'],
            title: '创建项目',
            shadeClose: true, //点击遮罩关闭
            content: $(".creat-new-projs"),
            yes: function (index, layero) {
                var $projname = $.trim($("#projname").val()),
                    $projdesp = $.trim($("#projdesp").val()),
                    $projpath = $.trim($("#projpath").val()),
                    $projtype = $.trim($("#projtype").val());
                var reg = /^[\\/]?[\w\u4e00-\u9fa5-]+([\\/][\w\u4e00-\u9fa5-]+)*[\\/]?$/;
                if (!$projname) {
                    layer.msg("项目名称不能为空", {icon: 0});
                } else if (!$projdesp) {
                    layer.msg("项目描述不能为空", {icon: 0});
                } else if ($projdesp.length > 85) {
                    layer.msg("项目描述不得超过85个字", {icon: 0});
                } else if (!$projpath) {
                    layer.msg("项目路径不能为空", {icon: 0});
                } else if (!reg.test($projpath)) {
                    layer.msg("项目路径支持字母、数字、横杠、下划线、汉字，路径分隔符支持'/'或'\'", {icon: 0});
                } else if (!$projtype) {
                    layer.msg("调度类型不能为空", {icon: 0});
                } else if ($projname && $projdesp && $projpath && $projtype && $projdesp.length < 86 && reg.test($projpath)) {
                    createProjInfo($projname, $projdesp, $projpath, $projtype);
                    layer.close(index);
                }
            },
            btn2: function () {
                layer.close(index);
            },
            cancel: function () {
                layer.close(index);
            }
        });
        //表单数据初始化
        $("#projname").val("");
        $("#projdesp").val("");
        $("#projpath").val("");
        $("#projtype").val("");
    });

    function createProjInfo(name, desp, path, type) {
        $.ajax({
            type: 'POST',
            url: $url3 + '/bigdata/project/createProject',
            headers: {
                username: sessionStorage.getItem("ByuserName"), userId: sessionStorage.getItem("userId")
            },
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify({
                "name": name,
                "remark": desp,
                "path": path,
                "scheduledType": type
            }),
            success: function (res) {
                console.log(res);
                if (res.code === 0) {
                    getProjName(0);//刷新项目树
                    layer.msg(res.message, {icon: 6});
                } else if (res.code === 403) {
                    layer.msg("该名称已存在,请更换!", {icon: 0});
                } else {
                    layer.msg("创建项目失败!", {icon: 5});
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    /*

     * 获取项目树名称
     * */
    var items = [];
    var zNodes = [];
    var dirType = "";//目录类型
    var directoryId = "";//目录id
    var directoryName = "";//目录名称

    /**
     * treeview
     */
    var treeviewData = [];
    var curNodeId = sessionStorage.getItem("curNodeId") || "";
    var curNodeObj;
    var $tree;
    var fnCreatePage;//new function
    var editFile = {
        getNewEtlFileInfo: function (versionId, directoryId) {
            $.ajax({
                type: 'POST',
                url: $url2 + '/api/action/v1/getAction',
                headers: {
                    username: sessionStorage.getItem("ByuserName"), userId: sessionStorage.getItem("userId")
                },
                dataType: 'json',
                contentType: "application/json",
                data: JSON.stringify({
                    "versionId": versionId,
                    "actionId": directoryId
                }),
                success: function (res) {
                    // console.log(res);
                    if (res.code === 0) {
                        var data = res.data;
                        var $etlbox = $(".newEtlFile");
                        $etlbox.find(".new_type").html(industryType());
                        $etlbox.find(".new_name").val(data.name);
                        // $etlbox.find(".new_ds option:selected").val(data.name);
                        $etlbox.find(".new_type").val(data.businessType);
                        $etlbox.find(".new_describe").val(data.remark);

                        editFile.getEtlDataSource(projectId, versionId, data.dsId);
                    }
                },
                error: function (err) {
                    console.log(err);
                }
            });
        },
        getEtlDataSource: function (projectId, versionId, dsId) {
            $.ajax({
                type: "POST",
                url: $url2 + "/api/datasource/v1/getDataSourceList",  ///xdbd-etl
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify({
                    projectId: projectId,
                    versionId: versionId
                }),
                success: function (res) {
                    // console.log(res);
                    if (res.code === 0) {
                        var data = res.data;
                        var html = '';
                        if (data.length) {
                            $.each(data, function (i, v) {
                                const select = dsId === this.dsId ? "selected" : "";
                                html += `<option ${ select } value="${v.dsId}">${v.name}</option>`
                            });
                            $(".newEtlFile .new_ds").html(html);
                        } else {
                            layer.msg("请先添加数据源!", {icon: 0});
                        }
                    }
                }, error: function (res) {
                    console.log(res);
                }
            })
        },
        modifyEtlFileInfo: function (projectId, versionId, directoryId, companyId, name, businessType, remark) {
            $.ajax({
                type: 'POST',
                url: $url2 + '/api/action/v1/saveAction',
                headers: {
                    username: sessionStorage.getItem("ByuserName"), userId: sessionStorage.getItem("userId")
                },
                dataType: 'json',
                contentType: "application/json",
                data: JSON.stringify({
                    "isTemplate": false,					//是否为模板
                    "dsId": $(".newEtlFile .new_ds").val(),   // 数据源id
                    "companyId": companyId,
                    "projectId": projectId,
                    "templateVersionId": "",							//模板版本ID
                    "versionId": versionId,
                    "directoryId": directoryId,
                    "actionId": directoryId,	//任务ID
                    "name": name,									//任务名称
                    "businessType": businessType,							//行业类型
                    "remark": remark
                }),
                success: function (res) {
                    console.log(res);
                    if (res.code === 0) {
                        layer.msg(res.message, {icon: 6});
                        getProjName(0);//刷新项目树
                    }
                },
                error: function (err) {
                    console.log(err);
                }
            });
        },
        getNewZylFileInfo: function (versionId, directoryId) {
            $.ajax({
                type: 'POST',
                url: $url4 + '/api/job/v1/getById',
                headers: {
                    username: sessionStorage.getItem("ByuserName"), userId: sessionStorage.getItem("userId")
                },
                dataType: 'json',
                contentType: "application/json",
                data: JSON.stringify({
                    "versionId": versionId,
                    "id": directoryId
                }),
                success: function (res) {
                    console.log(res);
                    if (res.code === 0) {
                        var data = res.data;
                        var $zylbox = $(".newZylFile");
                        $zylbox.find(".new_type").html(industryType());
                        $zylbox.find(".new_name").val(data.name);
                        $zylbox.find(".new_type").val(data.businessType);
                        $zylbox.find(".new_describe").val(data.remark);
                    }
                },
                error: function (err) {
                    console.log(err);
                }
            });
        },
        modifyZylFileInfo: function (directoryId, versionId, name, remark, businessType) {
            $.ajax({
                type: 'POST',
                url: $url4 + '/api/job/v1/modify',
                headers: {
                    username: sessionStorage.getItem("ByuserName"), userId: sessionStorage.getItem("userId")
                },
                dataType: 'json',
                contentType: "application/json",
                data: JSON.stringify({
                    "jobId": directoryId,
                    "name": name,
                    "updateUser": sessionStorage.getItem("userId"),
                    "remark": remark,
                    "businessType": businessType,
                    'versionId': versionId
                }),
                success: function (res) {
                    console.log(res);
                    if (res.code === 0) {
                        layer.msg(res.message, {icon: 6});
                        getProjName(0);//刷新项目树
                    }
                },
                error: function (err) {
                    console.log(err);
                }
            });
        },
        getNewBiFileInfo: function (projectId, versionId, directoryId) {
            $.ajax({
                type: 'GET',
                url: $url1 + '/bi/report/v1/page/info.json',
                headers: {
                    username: sessionStorage.getItem("ByuserName"), userId: sessionStorage.getItem("userId")
                },
                dataType: 'json',
                data: {
                    "projectId": projectId,
                    "versionId": versionId,
                    "pageId": directoryId
                },
                success: function (res) {
                    // console.log(res);
                    if (res.code === 0) {
                        var data = res.data;
                        var $bibox = $(".newBiFile");
                        $bibox.find(".new_name").val(data.name);
                        $bibox.find(".new_type").val(data.industry);
                        $bibox.find(".new_describe").val(data.comment);
                    }
                },
                error: function (err) {
                    console.log(err);
                }
            });
        },
        modifyBiFileInfo: function (projectId, versionId, directoryId, name, industry, comment) {
            $.ajax({
                type: 'PUT',
                url: $url1 + '/bi/report/v1/page/info.json',
                headers: {
                    username: sessionStorage.getItem("ByuserName"), userId: sessionStorage.getItem("userId")
                },
                dataType: 'json',
                data: {
                    "projectId": projectId,
                    "versionId": versionId,
                    "pageId": directoryId,
                    "name": name,
                    "industry": industry,
                    "comment": comment
                },
                success: function (res) {
                    // console.log(res);
                    if (res.code === 0) {
                        layer.msg(res.message, {icon: 6});
                        getProjName(0);//刷新项目树
                    } else if (res.code === 403) {
                        layer.msg('该名称已存在！', {icon: 5});
                    }
                },
                error: function (err) {
                    console.log(err);
                }
            });
        }
    }

    function newEtlFile() {
        //getEtlFileInfo
        editFile.getNewEtlFileInfo(versionId, directoryId);
        var index = layer.open({
            type: 1,
            btn: ['确定', '取消'],
            area: ['660px', '560px'],
            title: '编辑',
            shadeClose: true, //点击遮罩关闭
            content: $(".newEtlFile"),
            yes: function (index, layero) {
                var $etlbox = $(".newEtlFile");
                var name = $etlbox.find(".new_name").val();
                var dataSource = $etlbox.find(".new_ds option:selected").val();
                var businessType = $etlbox.find(".new_type option:selected").val();
                var remark = $etlbox.find(".new_describe").val();
                if (!$.trim(name)) {//不能为空
                    layer.msg("ETL名称不能为空", {icon: 0});
                } else if (!dataSource) {
                    layer.msg("数据源不能为空", {icon: 0});
                } else if (!businessType) {
                    layer.msg("行业类型不能为空", {icon: 0});
                } else if (!$.trim(remark)) {
                    layer.msg("ETL描述不能为空", {icon: 0});
                } else {
                    editFile.modifyEtlFileInfo(projectId, versionId, directoryId, companyId, name, businessType, remark);
                    layer.close(index);
                }
            },
            btn2: function () {
                layer.close(index);
            },
            cancel: function () {
                layer.close(index);
            }
        });
    }

    function newZylFile() {
        //getZylFileInfo
        editFile.getNewZylFileInfo(versionId, directoryId);
        var index = layer.open({
            type: 1,
            btn: ['确定', '取消'],
            area: ['490px', '450px'],
            title: '编辑',
            shadeClose: true, //点击遮罩关闭
            content: $(".newZylFile"),
            yes: function (index, layero) {
                var $zylbox = $(".newZylFile");
                var name = $zylbox.find(".new_name").val();
                var businessType = $zylbox.find(".new_type option:selected").val();
                var remark = $zylbox.find(".new_describe").val();
                if (!$.trim(name)) {//不能为空
                    layer.msg("作业流名称不能为空", {icon: 0});
                } else if (!businessType) {
                    layer.msg("行业类型不能为空", {icon: 0});
                } else if (!$.trim(remark)) {
                    layer.msg("作业流描述不能为空", {icon: 0});
                } else {
                    editFile.modifyZylFileInfo(directoryId, versionId, name, remark, businessType);
                    layer.close(index);
                }
            },
            btn2: function () {
                layer.close(index);
            },
            cancel: function () {
                layer.close(index);
            }
        });
    }

    function newBiFile() {
        //getBiFileInfo
        editFile.getNewBiFileInfo(projectId, versionId, directoryId);
        var index = layer.open({
            type: 1,
            btn: ['确定', '取消'],
            area: ['490px', '450px'],
            title: '编辑',
            shadeClose: true, //点击遮罩关闭
            content: $(".newBiFile"),
            yes: function (index, layero) {
                var $bibox = $(".newBiFile");
                var name = $bibox.find(".new_name").val();
                var industry = $bibox.find(".new_type option:selected").val();
                console.log(industry);
                var comment = $bibox.find(".new_describe").val();
                if (!$.trim(name)) {//不能为空
                    layer.msg("作业流名称不能为空", {icon: 0});
                } else if (!industry) {
                    layer.msg("行业类型不能为空", {icon: 0});
                } else if (!$.trim(comment)) {
                    layer.msg("作业流描述不能为空", {icon: 0});
                } else {
                    editFile.modifyBiFileInfo(projectId, versionId, directoryId, name, industry, comment);
                    layer.close(index);
                }
            },
            btn2: function () {
                layer.close(index);
            },
            cancel: function () {
                layer.close(index);
            }
        });
    }

    function getRootNode(_this, node) {//获取根节点的directoryId
        var n = _this.treeview('getParent', node);
        if (n.directoryId) {
            getRootNode(_this, n);
        } else {
            localStorage.setItem("lv1DirId", node.directoryId);
        }
    }

    function showTree(treeviewData) {
        $tree = $('#treeview5').treeview({
            color: "#878D99",
            expandIcon: 'glyphicon glyphicon-chevron-right',
            collapseIcon: 'glyphicon glyphicon-chevron-down',
            nodeIcon: 'glyphicon glyphicon-bookmark',
            showTags: true,
            selectedColor: "#fff",
            data: treeviewData,
            selectedBackColor: "#578fe6",
            onNodeSelected: function (event, node) {
                getRootNode($(this), node);//寻找根节点
                curNodeId = node.nodeId;
                sessionStorage.setItem("curNodeId", curNodeId);

                //父级ID
                pageFlowId = $(this).treeview('getParent', node).directoryId;
                localStorage.setItem("pageFlowId", pageFlowId);

                dirType = node.directoryType;//目录类型
                directoryId = node.directoryId;//目录id
                directoryName = node.name;//目录名称
                projectId = node.projectId;//项目id
                versionId = node.versionId;//版本id
                companyId = node.companyId;
                createUser = node.createUser;
                updateUser = node.updateUser;
                rootPath = node.rootPath;

                localStorage.setItem("projectId", projectId);
                localStorage.setItem("versionId", versionId);
                localStorage.setItem("directoryId", directoryId);
                localStorage.setItem("companyId", companyId);
                localStorage.setItem("createUser", createUser);
                localStorage.setItem("updateUser", updateUser);
                localStorage.setItem("rootPath", rootPath);
                localStorage.setItem("isTemplate", false);

                var getSiblings = $tree.treeview('getSiblings', node.nodeId),
                    currentNode = $tree.treeview('getNode', node.nodeId);
                for (let attr in getSiblings) {
                    getSiblings[attr].tags = ''
                }
                if (dirType === "1" || dirType === "14" || dirType === "16" || dirType === "6"
                    || dirType === "7" || dirType === "12" || dirType === "13" || dirType === "15"
                    || dirType === "17" || dirType === "18" || dirType === "19" || dirType === "8"
                    || dirType === "9" || dirType === "11" || dirType === "5") {
                    currentNode.tags = ['1'];
                }

                //new
                switch (dirType) {
                    case "14":
                    case "15"://bi
                        fnCreatePage = newBiFile;
                        break;
                    case "12"://etl
                        fnCreatePage = newEtlFile;
                        break;
                    case "13"://zuoyeliu
                        fnCreatePage = newZylFile;
                        break;
                }
//		 console.log("2="+directoryId);
                if (onCurEnv === "dev") {
                    var items0 = [
                        {title: '创建子模块', fn: createSubmodule},
                        {title: '创建最终子模块', fn: createFinalSubmodule},
                        {title: '提交测试', fn: checkInTest},
                        {title: '切换版本', fn: switchVersion},
                        // { title: '导入', fn: leadingIn },
                        {title: '导出', fn: leadingOut},
                        {title: '数据源配置', fn: dataSourceConfig},
                        {title: '属性', fn: setProperty},
                        {title: '重命名', fn: fnRenameFile},
                        {title: '删除', fn: fnDeleteFile}
                    ];
                    var items1 = [
                        {title: '新建ETL', fn: newEtl},
                        {title: '新建文件夹', fn: newFile}
                    ];
                    var items2 = [
                        {title: '新建BI文件', fn: newBi},
                        {title: '新建文件夹', fn: newFile}
                    ];
                    var items3 = [
                        {title: '新建作业流', fn: newJob},
                        {title: '新建文件夹', fn: newFile}
                    ];
                    var items4 = [
                        {title: '创建子模块', fn: createSubmodule},
                        {title: '创建最终子模块', fn: createFinalSubmodule},
                        {title: '重命名', fn: fnRenameFile},
                        {title: '删除', fn: fnDeleteFile}
                    ];
                    var items5 = [
                        {title: '新建文件夹', fn: newFile},
                        {title: '创建页面', fn: createFpage}
                    ];
                    var items6 = [
                        {title: '编辑', fn: fnCreatePage},
                        {title: '删除', fn: fnDeleteFile}
                    ];
                    var items7 = [
                        {title: '新建BI文件', fn: newBi},
                        {title: '新建文件夹', fn: newFile},
                        {title: '重命名', fn: fnRenameFile},
                        {title: '删除', fn: fnDeleteFile}
                    ];
                    var items8 = [
                        {title: '新建ETL', fn: newEtl},
                        {title: '新建文件夹', fn: newFile},
                        {title: '重命名', fn: fnRenameFile},
                        {title: '删除', fn: fnDeleteFile}
                    ];
                    var items9 = [
                        {title: '新建作业流', fn: newJob},
                        {title: '新建文件夹', fn: newFile},
                        {title: '重命名', fn: fnRenameFile},
                        {title: '删除', fn: fnDeleteFile}
                    ]
                } else if (onCurEnv === "test" || onCurEnv === "prod") {
                    var items0 = [
                        {title: '提交发布', fn: checkInTest},
                        {title: '数据源配置', fn: dataSourceConfig},
                        {title: '属性', fn: setProperty}
                    ];
                    var items1 = [];
                    var items2 = [];
                    var items3 = [];
                    var items4 = [];
                    var items5 = [];
                    var items6 = [];
                    var items7 = [];
                    var items8 = [];
                    var items9 = [];
                }

                switch (dirType) {
                    case "1":
                        items = items0;
                        lv1DirId = node.directoryId;
                        localStorage.setItem("lv1DirId", lv1DirId);
                        break;
                    case "8":
                        items = items1;
                        break;
                    case "11":
                    case "5":
                        items = items2;
                        break;
                    case "9":
                        items = items3;
                        break;
                    case "6":
                        items = items4;
                        break;
                    case "5":
                        items = items5;
                        break;
                    case "3":
                        items = [];
                        $("#iframepage1").attr("src", "html/menuSet.html?directoryId=" + directoryId);//菜单设置
                        break;
                    case "4":
                        items = [];
                        $("#iframepage1").attr("src", "html/pageFlow.html?directoryId=" + directoryId);//页面流
                        break;
                    case "12":
                        items = items6;
                        $("#iframepage1").attr("src", "html/flowChart.html?directoryId=" + directoryId);//etl页面
                        break;
                    case "13":
                        items = items6;
                        $("#iframepage1").attr("src", "html/etlChart.html?directoryId=" + directoryId);//作业流页面
                        break;
                    case "15":
                    case "14":
                        items = items6;
                        $("#iframepage1").attr("src", "editBI.html?directoryId=" + directoryId);//BI页面
                        break;
                    case "2":
                    case "10":
                        items = [];
                        pageFlowId = directoryId;
                        localStorage.setItem("pageFlowId", pageFlowId);
                        break;
                    case "7":
                        items = items6;
                        break;
                    case "16":
                    case "19":
                        items = items7;
                        break;
                    case "17":
                        items = items8;
                        break;
                    case "18":
                        items = items9;
                        break;
                    default:
                        items = [];
                }


            },
            onNodeExpanded(event, node) {
                localStorage.setItem('expand', JSON.stringify($tree.treeview('getExpanded', node.nodeId)))
            },
            onNodeCollapsed(event, node) {
                localStorage.setItem('expand', JSON.stringify($tree.treeview('getExpanded', node.nodeId)))
            }
        });

        var onLeftKey = function (e) {
            basicContext.show(items, e);
        }
        $("#treeview5").delegate(".badge", "click", function (e) {
            onLeftKey(e);
            return false;
        });
        // $tree.treeview('collapseAll', { silent: true });
        //	$tree.treeview('expandNode', [curNodeId,{silent: true } ]);
        var expand = JSON.parse(localStorage.getItem('expand'))
        if (expand != null && expand.length != 0) {
            $tree.treeview('collapseAll', {silent: true});
            expand.forEach(item => {
                $tree.treeview('expandNode', [item.nodeId, {silent: false}]);
            })
            //
        } else {
            $tree.treeview('collapseAll', {silent: true});
        }
    }

//	getProjName(0);
    function getProjName(id) {
        $.ajax({
            type: 'POST',
            url: $url3 + '/bigdata/project/findProjectTree',
            headers: {
                username: sessionStorage.getItem("ByuserName"), userId: sessionStorage.getItem("userId")
            },
            dataType: 'json',
            data: {
                "id": id,
                "env": onCurEnv
            },
            success: function (res) {
                if (res.code === 0) {
                    treeviewData = res.data;
                    // localStorage.setItem("treeviewData",JSON.stringify(treeviewData));
                    showTree(treeviewData);
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    }


    /*

     * 项目树初始化
     * */
    var curMenu = null, zTree_Menu = null;
    var setting = {
        view: {
            showLine: false,
            showIcon: false,
            selectedMulti: false,
            dblClickExpand: false,
            addDiyDom: addDiyDom
        },
        data: {
            simpleData: {
                enable: true
            }
        }
    };

    //弹出框项目树设置
    var subSetting = {
        view: {
            showLine: false,
            showIcon: false,
            selectedMulti: false,
            dblClickExpand: false,
            addDiyDom: addDiyDom
        },
        data: {
            simpleData: {
                enable: true
            }
        },
        callback: {
            beforeClick: beforeClick,
            onClick: leftKeyClick
        }
    };

    /*

     * 目录类型定义
     * *
     * 1=项目目录,--items
     * 2=首页,
     * 3=菜单设置,
     * 4=页面流,
     * 5=页面,(首页目录下边子目录)---可 创建文件夹类型和（14）
     * 6=模块,---- items4
     * 7=最终模块,
     * 8=ETL文件夹,--------------- items1 ETL右键目录---
     * 9=作业流文件夹,------------- items3 作业流文件夹---
     * 10=BI报表
     * 11=BI页面---------------- items2 BI右键目录---
     * 12=ETL文件,
     * 13=作业流文件,
     * 14=页面文件（首页5目录下创建的页面的类型）
     * 15=BI页面文件
     *

    * */

    var createSubmodule = function () {
        findCurTree("subTrees", directoryId);
        var index = layer.open({
            type: 1,
            btn: ['确定', '取消'],
            area: ['490px', '530px'],
            title: '创建子模块',
            shadeClose: true, //点击遮罩关闭
            content: $(".submodule"),
            yes: function (index, layero) {
                var submoduleName = $.trim($(".submodule input").val());
                if (submoduleName) {
                    confirmCreateSubmodule(directoryId, submoduleName);//创建子模块
                    getProjName(0);//刷新左侧树数据
                    layer.close(index);
                } else {
                    layer.msg("请输入子模块名称", {icon: 0});
                }

            },
            btn2: function () {
                layer.close(index);
            },
            cancel: function () {
                layer.close(index);
            }
        });
    };

    //确认创建子模块、文件夹
    function confirmCreateSubmodule(directoryId, name) {
        $.ajax({
            type: 'POST',
            url: $url3 + '/bigdata/project/createSubProject',
            headers: {
                username: sessionStorage.getItem("ByuserName"), userId: sessionStorage.getItem("userId")
            },
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify({
                "directoryId": directoryId,
                "versionId": versionId,
                "name": name
            }),
            success: function (res) {
                if (res.code === 0) {
                    getProjName(0);//刷新左侧树数据
                    layer.msg(res.message, {icon: 6});
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    var createFinalSubmodule = function () {
        findCurTree("finalSubTrees", directoryId);
        var index = layer.open({
            type: 1,
            btn: ['确定', '取消'],
            area: ['490px', '530px'],
            title: '创建最终子模块',
            shadeClose: true, //点击遮罩关闭
            content: $(".subfinalmodule"),
            yes: function (index, layero) {
                var subfinalmoduleName = $.trim($(".subfinalmodule input").val());
                if (subfinalmoduleName) {
                    confirmCreateFinalSubmodule(directoryId, subfinalmoduleName);//创建最终子模块
                    getProjName(0);//刷新左侧树数据
                    layer.close(index);
                } else {
                    layer.msg("请输入最终子模块名称", {icon: 5});
                }

            },
            btn2: function () {
                layer.close(index);
            },
            cancel: function () {
                layer.close(index);
            }
        });
    };

    function confirmCreateFinalSubmodule(directoryId, name) {
        $.ajax({
            type: 'POST',
            url: $url3 + '/bigdata/project/createEndProject',
            headers: {
                username: sessionStorage.getItem("ByuserName"), userId: sessionStorage.getItem("userId")
            },
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify({
                "directoryId": directoryId,
                "versionId": versionId,
                "name": name
            }),
            success: function (res) {
                if (res.code === 0) {
                    getProjName(0);//刷新左侧树数据
                    layer.msg(res.message, {icon: 6});
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    var checkInTest = function () {
        var index = layer.open({
            type: 1,
            btn: ['确定', '取消'],
            area: ['490px', '200px'],
            title: '提交发布',
            shadeClose: true, //点击遮罩关闭
            content: $(".submit-test"),
            yes: function (index, layero) {
                var version = $.trim($(".submit-test input").val());
                if (version === "workspace") {
                    layer.msg("该版本名称不能使用", {icon: 0});
                } else if (version && version !== "workspace") {
                    confirmCheckedInTest(projectId, versionId, version, publishType);
                    layer.close(index);
                } else {
                    layer.msg("请输入版本号", {icon: 5});
                }
            },
            btn2: function () {
                layer.close(index);
            },
            cancel: function () {
                layer.close(index);
            }
        });
    };

    //publishType 1-测试发布  2-提交发布
    function confirmCheckedInTest(projectId, versionId, version, publishType) {
        $.ajax({
            type: 'POST',
            url: $url3 + '/bigdata/project/publishProject',
            headers: {
                username: sessionStorage.getItem("ByuserName"), userId: sessionStorage.getItem("userId")
            },
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify({
                "projectId": projectId,
                "versionId": versionId,
                "version": version,
                "publishType": publishType
            }),
            success: function (res) {
                if (res.code === 0) {
                    layer.msg(res.message, {icon: 6});
                } else if (res.code === 403) {
                    layer.msg("该命名已存在,请更换!", {icon: 0});
                } else {
                    layer.msg("提交失败!", {icon: 5});
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    var switchVersion = function () {
        $.ajax({
            type: 'POST',
            url: $url3 + '/bigdata/projectVersion/findVersion',
            headers: {
                username: sessionStorage.getItem("ByuserName"), userId: sessionStorage.getItem("userId")
            },
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify({
                "projectId": projectId,
                "versionId": versionId
            }),
            success: function (res) {
                if (res.code === 0) {
                    var data = res.data;
                    var versionLen = data.length;
                    var saveOldVersion = "";
                    var oldVersionName = "";
                    var versionIdTo = "";
                    if (versionLen) {//切换版本
                        var index = layer.confirm('是否保存当前版本?', {
                            btn: ['是', '否', '取消'], //按钮
                            yes: function (index, layero) {//输入版本号
                                saveOldVersion = "1";
                                var index1 = layer.open({
                                    type: 1,
                                    btn: ['确定', '取消'],
                                    area: ['490px', '200px'],
                                    title: '保存版本',
                                    shadeClose: true, //点击遮罩关闭
                                    content: $(".submit-test"),
                                    yes: function (index1, layero) {
                                        oldVersionName = $.trim($(".submit-test input").val());
                                        if (oldVersionName) {
                                            findProjVersion(projectId, versionId);
                                            var index2 = layer.open({
                                                type: 1,
                                                btn: ['确定', '取消'],
                                                area: ['490px', '330px'],
                                                title: '切换版本',
                                                shadeClose: true, //点击遮罩关闭
                                                content: $(".cut-version"),
                                                yes: function (index2, layero) {
                                                    var $curLi = $(".cut-version li input:checked").parent("li");
//											      		var curVersion = $curLi.attr("version");
                                                    var versionIdTo = $curLi.attr("versionid");
                                                    var curProjectId = $curLi.attr("projectid");
//											      		var curRemark = $curLi.attr("remark");

                                                    switchProjVersion(versionId, versionIdTo, saveOldVersion, oldVersionName);

                                                    layer.close(index2);
                                                },
                                                btn2: function () {
                                                    layer.close(index2);
                                                },
                                                cancel: function () {
                                                    layer.close(index2);
                                                }
                                            });
                                            layer.close(index1);
                                        } else {
                                            layer.msg("请输入版本号", {icon: 5});
                                        }
                                    },
                                    btn2: function () {
                                        layer.close(index1);
                                    },
                                    cancel: function () {
                                        layer.close(index1);
                                    }
                                });
                            },
                            btn2: function (index, layero) {//否
                                saveOldVersion = "0";
                                findProjVersion(projectId, versionId);
                                var index2 = layer.open({
                                    type: 1,
                                    btn: ['确定', '取消'],
                                    area: ['490px', '330px'],
                                    title: '切换版本',
                                    shadeClose: true, //点击遮罩关闭
                                    content: $(".cut-version"),
                                    yes: function (index2, layero) {
                                        var $curLi = $(".cut-version li input:checked").parent("li");
                                        var curVersion = $curLi.attr("version");
                                        var versionIdTo = $curLi.attr("versionid");
                                        var curProjectId = $curLi.attr("projectid");
                                        var curRemark = $curLi.attr("remark");

                                        switchProjVersion(versionId, versionIdTo, saveOldVersion, oldVersionName);

                                        layer.close(index2);
                                    },
                                    btn2: function () {
                                        layer.close(index2);
                                    },
                                    cancel: function () {
                                        layer.close(index2);
                                    }
                                });
                                layer.close(index);
                            },
                            btn3: function (index, layero) {//取消
                                layer.close(index);
                            },
                            cancel: function () {
                                layer.close(index);
                            }
                        })
                    } else {
                        layer.msg("当前版本不可切换", {icon: 0});
                    }
                }
            },
            error: function (err) {
                console.log(err);
            }
        });

    };

    //查询版本
    function findProjVersion(projectId, versionId) {
        $.ajax({
            type: 'POST',
            url: $url3 + '/bigdata/projectVersion/findVersion',
            headers: {
                username: sessionStorage.getItem("ByuserName"), userId: sessionStorage.getItem("userId")
            },
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify({
                "projectId": projectId,
                "versionId": versionId
            }),
            success: function (res) {
                if (res.code === 0) {
                    var data = res.data;
                    var html = "";
                    versionLen = data.length;
                    $.each(data, function (i, item) {
                        html += `
								<li projectId="${item.projectId}" versionId="${item.versionId}" version="${item.version}" isRelease="${item.isRelease}" isActive="${item.isActive}" status="${item.status}" remark="${item.remark}">
									<img src="${i === 0 ? 'images/icon_circle_on.png' : 'images/icon_circle.png'}" alt="" />
									<input type="radio" name="version-name" ${i === 0 ? "checked" : ""}/>
									<span>${item.version}</span>
								</li>
							`
                    });
                    $(".version-lists-box ul").empty().append(html);
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    //保存切换版本
    function switchProjVersion(versionIdFrom, versionIdTo, saveOldVersion, oldVersionName) {
        $.ajax({
            type: 'POST',
            url: $url3 + '/bigdata/projectVersion/changeVersion',
            headers: {
                username: sessionStorage.getItem("ByuserName"), userId: sessionStorage.getItem("userId")
            },
            dataType: 'json',
            data: {
                "versionIdFrom": versionIdFrom,
                "versionIdTo": versionIdTo,
                "saveOldVersion": saveOldVersion,
                "oldVersionName": oldVersionName
            },
            success: function (res) {
                if (res.code === 0) {
                    //切换版本成功之后,刷新项目树
                    getProjName(0);//刷新项目树
                    layer.msg(res.message, {icon: 6});
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    //版本切换样式
    $(".cut-version ul").delegate("li", "click", function () {
        var $s = $(this).find("input[name]:checked"),
            $idx = $s.parent().index();
        $s.prev("img").attr("src", "images/icon_circle_on.png");
        $s.parent("li").siblings().find("img").attr("src", "images/icon_circle.png");

    })

    //导入项目
    $("#importProj").click(function () {
        leadingIn();
    })

    var leadingIn = function () {
        var index = layer.confirm('导入项目将覆盖原项目的数据,确认导入?', {
            btn: ['确定', '取消'] //按钮
        }, function (index) {
            $('#import-file').trigger('click');
            layer.close(index);

        }, function (index) {
            layer.close(index);
        });
    };
    $('#import-file').on('change', function (e) {
        confirmLeadingIn();
        layer.closeAll()
    })

    function confirmLeadingIn() {
        $.ajax({
            type: 'POST',
            url: $url3 + '/bigdata/project/importProject',
            headers: {
                username: sessionStorage.getItem("ByuserName"), userId: sessionStorage.getItem("userId")
            },
            cache: false,
            data: new FormData($('#import-form')[0]),
            processData: false,
            contentType: false,
            success: function (res) {
                if (res.code === 0) {
                    layer.msg("导入成功", {icon: 6});
                    getProjName(0);//刷新项目树
                } else {
                    layer.msg(res.message, {icon: 0});
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    var leadingOut = function () {
        var index = layer.confirm('确认导出项目?', {
            btn: ['确定', '取消'] //按钮
        }, function (index) {
            confirmLeadingOut(projectId);
            layer.close(index);
        }, function (index) {
            layer.close(index);
        });
    };

    function confirmLeadingOut(projectId) {
        var url = $url3 + '/bigdata/project/exportProject?projectId=' + projectId;
        downloadFile(url);
    }

    //下载文件
    function downloadFile(url) {
        try {
            var elemIF = document.createElement("iframe");
            elemIF.src = url;
            elemIF.style.display = "none";
            document.body.appendChild(elemIF);
        } catch (e) {
            zzrw.alert("下载异常！");
        }
    }

    var dataSourceConfig = function () {
        $("#iframepage1").attr("src", "html/origin.html");
        // $('.data-source-config').css('display','block');
    };

    var setProperty = function () {//项目属性
        getProjInfo();
        $(".proj-attr").show();
    };


    var newFile = function () {
        findCurTree("fileTrees", directoryId);
        var index = layer.open({
            type: 1,
            btn: ['确定', '取消'],
            area: ['490px', '530px'],
            title: '创建文件夹',
            shadeClose: true, //点击遮罩关闭
            content: $(".file-mod"),
            yes: function (index, layero) {
                var filesName = $.trim($(".file-mod input").val());
                if (filesName) {
                    confirmCreateSubmodule(directoryId, filesName);//创建文件夹
                    getProjName(0);//刷新左侧树数据
                } else {
                    layer.msg("请输入文件夹名称", {icon: 5});
                }
                layer.close(index);
            },
            btn2: function () {
                layer.close(index);
            },
            cancel: function () {
                layer.close(index);
            }
        });
    };

    var newEtl = function () {
        $("#iframepage1").attr("src", "html/etlStencil.html");
    };
    var newBi = function () {
        $("#iframepage1").attr("src", "html/biTemplet.html");
    };
    var newJob = function () {
        $("#iframepage1").attr("src", "html/stencilmanage.html");
    };
    var createFpage = function () {
        $("#iframepage1").attr("src", "html/biTemplet.html");
    };
    var fnRenameFile = function () {
        var index = layer.open({
            type: 1,
            btn: ['确定', '取消'],
            area: ['300px', '200px'],
            title: '重命名',
            shade: 0,
            content: '<input type="text" placeholder="请输入新名称" class="rename-file"/>',
            yes: function (index, layero) {
                var menuName = $.trim($(".rename-file").val());
                if (menuName) {
                    renameFile(directoryId, menuName);
                } else {
                    layer.msg("输入名称不能为空", {icon: 0});
                }
                layer.close(index);
            },
            btn2: function () {
                layer.close(index);
            },
            cancel: function () {
                layer.close(index);
            }
        });
    };
    var fnDeleteFile = function () {
        var index = layer.confirm('确认删除?', {
            btn: ['确定', '取消'] //按钮
        }, function (index) {
            deleteFile(directoryId);
            layer.close(index);
        }, function (index) {
            layer.close(index);
        });
    };

    //弹出框树
    function leftKeyClick() {
        var curTreeObj = $.fn.zTree.getZTreeObj("subTrees");
        var curClickedDom = curTreeObj.getSelectedNodes();
        directoryId = curTreeObj.getSelectedNodes()[0].directoryId;//目录id
//			localStorage.setItem("directoryId",directoryId);
    }


    function addDiyDom(treeId, treeNode) {
        var spaceWidth = 5;
        var switchObj = $("#" + treeNode.tId + "_switch"),
            icoObj = $("#" + treeNode.tId + "_ico");
        switchObj.remove();
        icoObj.before(switchObj);

        if (treeNode.level > 1) {
            var spaceStr = "<span style='display: inline-block;width:" + (spaceWidth * treeNode.level) + "px'></span>";
            switchObj.before(spaceStr);
        }
    }

    function beforeClick(treeId, treeNode) {
        if (treeNode.level == 0) {
            var zTree = $.fn.zTree.getZTreeObj("treeDemo");
            zTree.expandNode(treeNode);
            return false;
        }
        return true;
    }

    /*

     * 根据目录 Id 查询树
     *
     * 参数说明
     * selectorId--树容器的id选择器
     * dirId-------目录id
     *
     * */

    function findCurTree(selectorId, dirId) {
        $.ajax({
            type: 'POST',
            url: $url3 + '/bigdata/project/findProjectTreeById',
            headers: {
                username: sessionStorage.getItem("ByuserName"), userId: sessionStorage.getItem("userId")
            },
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify({
                "directoryId": dirId,
                "versionId": versionId
            }),
            success: function (res) {
                if (res.code === 0) {
                    var treeObj = $("#" + selectorId + "");
                    $.fn.zTree.init(treeObj, setting, res.data);
                    zTree_Menu = $.fn.zTree.getZTreeObj("" + selectorId + "");
                    treeObj.hover(function () {
                        if (!treeObj.hasClass("showIcon")) {
                            treeObj.addClass("showIcon");
                        }
                    }, function () {
                        treeObj.removeClass("showIcon");
                    });
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    //删除文件
    function deleteFile(directoryId) {
        $.ajax({
            type: 'POST',
            url: $url3 + '/bigdata/project/deleteDirectory',
            headers: {
                username: sessionStorage.getItem("ByuserName"), userId: sessionStorage.getItem("userId")
            },
            dataType: 'json',
            data: {
                "projectId": projectId,
                "versionId": versionId,
                "directoryId": directoryId
            },
            success: function (res) {
                if (res.code === 0) {
                    //删除成功,刷新项目树
                    getProjName(0);
                    $("#iframepage1").attr("src", "html/void.html");
                    layer.msg("删除成功", {icon: 6});
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    }


    //修改名称
    function renameFile(directoryId, name) {
        $.ajax({
            type: 'POST',
            url: $url3 + '/bigdata/project/renameDirectory',
            headers: {
                username: sessionStorage.getItem("ByuserName"), userId: sessionStorage.getItem("userId")
            },
            dataType: 'json',
            data: {
                "projectId": projectId,
                "versionId": versionId,
                "directoryId": directoryId,
                "name": name
            },
            success: function (res) {
                if (res.code === 0) {
                    //修改名称成功,刷新项目树
                    getProjName(0);
                    layer.msg("重命名成功", {icon: 6});
                } else if (res.code === 403) {
                    layer.msg("该名称已存在,请更换!", {icon: 0});
                } else {
                    layer.msg("命名失败!", {icon: 5});
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    //获取项目信息(属性)
    function getProjInfo() {
        $.ajax({
            type: 'POST',
            url: $url3 + '/bigdata/project/getProjectInfo',
            headers: {
                username: sessionStorage.getItem("ByuserName"), userId: sessionStorage.getItem("userId")
            },
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify({
                "projectId": projectId,
                "versionId": versionId
            }),
            success: function (res) {
                if (res.code === 0) {
                    var data = res.data;
                    var html = `
							<div class="item1 item">
								<p>项目名称：<span>${data.name}</span></p>
								<p>项目ID：<span>${data.projectId}</span></p>
							</div>
							<div class="item2 item">
								<p>创建人：<span>${data.createUser}</span></p>
								<p>创建时间：<span>${data.createTime}</span></p>
								<p>最后修改时间：<span>${data.updateTime}</span></p>
							</div>
							<div class="item3 item">
								<p>当前版本：<span>${data.version}</span></p>
								<p>项目描述：<span>${data.remark}</span></p>
								<p>代码库路径：<span>${data.path}</span></p>
								<p>调度类型：<span>${data.scheduledType}</span></p>
							</div>
						`;
                    $(".proj-attr-detail").empty().append(html);
                }

            },
            error: function (err) {
                console.log(err);
            }
        });
    }

})//jq end
