$(function(){
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
	
	/*
	 
	 * 日志操作*/
	
	/*
	 
	 * 常用参数
	 * "pageNum":1
	 * "pageSize":10
	 * "totalCount":11
	 * 
	 * */
	var totalCount;
	var pageNum = 1;
	var pageSize = 10;
	var userAccount;
	var operationalContext;
	var locationMenu;
	var startTime;
	var endTime;
	 
	//日期范围选择
    $( "#from" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      onClose: function( selectedDate ) {
        $( "#to" ).datepicker( "option", "minDate", selectedDate );
        startTime = selectedDate;
      }
    });
    $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      onClose: function( selectedDate ) {
        $( "#from" ).datepicker( "option", "maxDate", selectedDate );
        endTime = selectedDate;
      }
    });

	
	//全选
	$(".log-bot thead").on("click",function(){
		var $sAll = $(this).find("td:first"),
		$allState = $sAll.find("input").prop("checked"),
		$subAllTd = $(this).siblings("tbody").find("tr").find("td:first");//tbody中所有的td
		if($allState===true){
			$sAll.addClass("on");
			$subAllTd.addClass("on").children("input").prop("checked",true);
		}else{
			$sAll.removeClass("on");
			$subAllTd.removeClass("on").children("input").prop("checked",false);
		}
	});
	
	//单选
	$(".log-bot tbody").on("click","tr",function(){
		var $inp = $(this).find("td").eq(0).find("input"),
			$state = $inp.prop("checked");
			if($state===false){
				$inp.end().removeClass("on");
			}else if($state===true){
				$inp.end().addClass("on");
			}
	});
	
	findLogLists(pageNum,pageSize);
	//查询日志
	function findLogLists(page,size){
		$.ajax({
			type:'GET',
            url:$url1+'/api/v1/logs',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"page":page,
				"size":size
			},
			success:function(res){
              	if(res.code===0){
              		var data = res.data;
              		var items = data.items;
 					var html = "";
 					pageNum = data.pageNum;
 					pageSize = data.pageSize;
 					totalCount = data.totalCount;
              		console.log(data);
              		$.each(items, function(i,item) {
              			html += `
              				<tr id="${item.id}">
    							<td>
    								<input type="checkbox" name="" id="" value="" />
    							</td>
    							<td>${(pageNum-1)*pageSize+(i+1)}</td>
    							<td>${item.userId}</td>
    							<td>${item.userAccount}</td>
    							<td>${item.locationMenu}</td>
    							<td>${item.createTime}</td>
    							<td>${item.operationalContext}</td>
    						</tr>
              			`;
              		});
              		$(".table-box tbody").empty().append(html);
              		getPagination();//刷新分页
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	$(".search").click(function(){
		userAccount = $("#user-account").val();
		operationalContext = $("#operate-txt").val();
		locationMenu = $("#location-menu").val();
		searchLogLists(pageNum,pageSize,userAccount,operationalContext,locationMenu,startTime,endTime);
	})
	//搜索日志
	function searchLogLists(pageNum,pageSize,userAccount,operationalContext,locationMenu,startTime,endTime){
		$.ajax({
			type:'POST',
            url:$url1+'/api/v1/logs/search',
            headers:{
            	username:sessionStorage.getItem("ByuserName"),userId:sessionStorage.getItem("userId")
            },
			data:{
				"page":pageNum,
				"size":pageSize,
				"userAccount":userAccount,
				"operationalContext":operationalContext,
				"locationMenu":locationMenu,
				"startTime":startTime,
				"endTime":endTime
			},
			success:function(res){
				console.log(res);
              	if(res.code===0){
              		var data = res.data;
              		var items = data.items;
 					var html = "";
 					pageNum = data.pageNum;
 					pageSize = data.pageSize;
 					totalCount = data.totalCount;
      
              		$.each(items, function(i,item) {
              			html += `
              				<tr id="${item.id}">
    							<td>
    								<input type="checkbox" name="" id="" value="" />
    							</td>
    							<td>${(pageNum-1)*pageSize+(i+1)}</td>
    							<td>${item.userId}</td>
    							<td>${item.userAccount}</td>
    							<td>${item.locationMenu}</td>
    							<td>${item.createTime}</td>
    							<td>${item.operationalContext}</td>
    						</tr>
              			`;
              		});
              		$(".table-box tbody").empty().append(html);
              		getPagination();//刷新分页
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	
	
	//layui 分页
	function getPagination(){
		layui.use(['laypage', 'layer'], function(){
		  var laypage = layui.laypage
		  ,layer = layui.layer;
		  
		   laypage.render({
		   	theme: '#578fe6',
		    elem: 'opagination',
		    count: totalCount,
		    limit: pageSize,
		    curr: function(){ //通过url获取当前页，也可以同上（pages）方式获取  
	            var page = location.search.match(/page=(\d+)/);  
	            return page ? page[1] : 1;  
	        }(),
		    first: '首页',
		    last: '末页',
		    prev: '上一页',
		    next: '下一页',
		    layout: ['page', 'count'],
	     	jump: function(obj,first){//点击页码出发的事件  
	            if(!first){//是否首次进入页面  
	                pageNum = obj.curr;//获取点击的页码      
	                findLogLists(pageNum,pageSize);
	            }  
	        }  
		  });
		})
	}
	

})//jq end
