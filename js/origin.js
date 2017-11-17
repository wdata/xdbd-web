/**
 * Created by qiangxl on 2017/10/20.
 */
// $(function() {
  var projectId = localStorage.getItem("projectId");
  var companyId = localStorage.getItem("companyId");
  var versionId = localStorage.getItem("versionId");
  var arr = new Array;
  var ds = '';
  var $url = '../xdbd-etl'; ///xdbd-etl

  get_dataSource();

  //获取数据源列表
  function get_dataSource() {
    var source = {
      projectId: projectId,
      versionId: versionId
    }
    $.ajax({
      type: "POST",
      url: $url+"/api/datasource/v1/getDataSourceList",  ///xdbd-etl
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify(source),
      success: function (data) {
        if (data.code == 0) {
          var list = new Array;
          console.log(data.data)
          $.each(data.data, function (index, item) {
            list.push(`
                <tr class="list_origin" id="${item.dsId}">
                    <td class="dbtype">${item.dbType}</td>
                    <td class="dbname">${item.name}</td>
                    <td class="dbsite">${item.conHost}</td>
                    <td class="dbport">${item.conPort}</td>
                    <td class="dbdatabase">${item.dbName}</td>
                    <td class="dbuser">${item.username}</td>
                    <td class="dbpassword">${item.password}</td>
                    <td>
                        <botton class="compile" onclick="compileBtn(this)">编辑</botton>
                        <botton class="cancel" onclick="cancelBtn(this)">删除</botton>
                    </td>
                </tr>
            `)
          })
          $(".list").html(list);
        }
      }, error: function (data) {
        console.log(JSON.stringify(data))
      }
    })
  }
  // 添加数据源
  $('.addBtn').click(function(ds) {
    var dbType = $('#db_type').val();
    var dbName = $('.db_name').val();
    var dbSite = $('.db_site').val();
    var dbPort = $('.db_port').val();
    var dbDatabase = $('.db_database').val();
    var dbUser = $('.db_user').val();
    var dbPassword = $('.db_password').val();
    if (dbName == '') {
      layer.msg('请输入名称');
    } else if (dbSite == '') {
      layer.msg('请输入数据库地址');
    } else if (dbPort == '') {
      layer.msg('请输入端口');
    } else if (dbDatabase == '') {
      layer.msg('请输入数据库')
    } else if (dbUser == '') {
      layer.msg('请输入用户名')
    } else if (dbPassword == '') {
      layer.msg('请输入密码')
    } else {
      var obj = {
        dbtype:dbType,
        dbname:dbName,
        dbsite:dbSite,
        dbport:dbPort,
        dbdatabase:dbDatabase,
        dbuser:dbUser,
        dbpassword:dbPassword
      };
      arr.push(obj)
      $.ajax({
        type: 'POST',
        url: $url+'/api/datasource/v1/saveDataSource', //$url2 +
        dataType: 'json',
        contentType: "application/json",
        data: JSON.stringify({
          "projectId": projectId,
          "name": dbName,
          "conHost": dbSite,
          "conPort": dbPort,
          "conType": "jdbc",
          "dbName": dbDatabase,
          "dbType": dbType,
          "password": dbPassword,
          "username": dbUser,
          "dsId": ds.view.ds,
          "companyId":companyId,
          "versionId":versionId
        }),
        success: function (res) {
          console.log(res);
          if (res.code === 0) {
            var html;
            $('.data-source-config').css('display', 'none');
            if(ds.view.ds != '') {
              layer.msg('成功修改数据源');
              get_dataSource();
            } else {
              layer.msg('成功添加数据源');
              $.each(arr, function (index, item) {
                html += `
                    <tr class="list_origin" id="${res.data.dsId}">
                        <td class="dbtype">${item.dbtype}</td>
                        <td class="dbname">${item.dbname}</td>
                        <td class="dbsite">${item.dbsite}</td>
                        <td class="dbport">${item.dbport}</td>
                        <td class="dbdatabase">${item.dbdatabase}</td>
                        <td class="dbuser">${item.dbuser}</td>
                        <td class="dbpassword">${item.dbpassword}</td>
                        <td>
                            <botton class="compile" onclick="compileBtn(this)">编辑</botton>
                            <botton class="cancel" onclick="cancelBtn(this)">删除</botton>
                        </td>
                    </tr>
                  `
              });
              $('.list').append(html);
            }
          }
        },
        error: function (err) {
          console.log(err);
        }
      });
    }
  });
  //编辑ETL列表
  function compileBtn(_this) {
    ds = $(_this).parents('.list_origin').attr('id');
    console.log($(_this).parents('.list_origin').find('.dbtype').text())
    $('.data-source-config').css('display','block');
    $('#db_type').val($(_this).parents('.list_origin').find('.dbtype').text());
    $('.db_name').val($(_this).parents('.list_origin').find('.dbname').text());
    $('.db_site').val($(_this).parents('.list_origin').find('.dbsite').text());
    $('.db_port').val($(_this).parents('.list_origin').find('.dbport').text());
    $('.db_database').val($(_this).parents('.list_origin').find('.dbdatabase').text());
    $('.db_user').val($(_this).parents('.list_origin').find('.dbuser').text());
    $('.db_password').val($(_this).parents('.list_origin').find('.dbpassword').text());
  }
  //删除数据源
  function cancelBtn(_this) {
    ds = $(_this).parents('.list_origin').attr('id');
    layer.confirm('是否要删除该数据源？', {
      btn: ['是','否'] //按钮
    }, function(){
      $.ajax({
        type: 'POST',
        url: $url+'/api/datasource/v1/delDataSource', //$url2 +
        dataType: 'json',
        contentType: "application/json",
        data: JSON.stringify({
          "dsId": ds
        }),
        success: function (res) {
          console.log(res);
          if (res.code === 0) {
            layer.msg('成功删除数据源');
            get_dataSource();
          }
        },
        error: function (err) {
          console.log(err);
        }
      });
    }, function(){
      layer.msg('已保留该数据源', {
        time: 2000 //2s后自动关闭
      });
    });
  }
  // 链接测试
  $('.linkBtn').click(function(ds) {
    var dbType = $('#db_type').val();
    var dbName = $('.db_name').val();
    var dbSite = $('.db_site').val();
    var dbPort = $('.db_port').val();
    var dbDatabase = $('.db_database').val();
    var dbUser = $('.db_user').val();
    var dbPassword = $('.db_password').val();
    if (dbName == '') {
      layer.msg('请输入名称');
    } else if (dbSite == '') {
      layer.msg('请输入数据库地址');
    } else if (dbPort == '') {
      layer.msg('请输入端口');
    } else if (dbDatabase == '') {
      layer.msg('请输入数据库')
    } else if (dbUser == '') {
      layer.msg('请输入用户名')
    } else if (dbPassword == '') {
      layer.msg('请输入密码')
    } else {
      $.ajax({
        type: 'POST',
        url: $url+'/api/datasource/v1/testDataSource', //$url2 +
        dataType: 'json',
        contentType: "application/json",
        data: JSON.stringify({
          "projectId": projectId,
          "name": dbName,
          "conHost": dbSite,
          "conPort": dbPort,
          "conType": "jdbc",
          "dbName": dbDatabase,
          "dbType": dbType,
          "password": dbPassword,
          "username": dbUser,
          "dsId": ds.view.ds,
          "companyId":companyId,
          "versionId":versionId
        }),
        success: function (res) {
          console.log(res);
          if (res.code === 0) {
            layer.msg('成功链接测试');
          } else {
            layer.msg(res.message)
          }
        },
        error: function (err) {
          console.log(err);
        }
      });
    }
  });
  // 关闭数据源
  $('.closeBtn').click(function() {
    $('.data-source-config').css('display','none');
  });
  // 打开数据源
  $('.openBtn').click(function () {
    $('.data-source-config').css('display','block');
    $('.da-source-account').find('input').val('');
  });
// })