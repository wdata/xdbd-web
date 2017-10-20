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
	 
	//日期范围选择
    $( "#from" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      onClose: function( selectedDate ) {
        $( "#to" ).datepicker( "option", "minDate", selectedDate );
      }
    });
    $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      onClose: function( selectedDate ) {
        $( "#from" ).datepicker( "option", "maxDate", selectedDate );
      }
    });

	//消息状态
	$("#msg-state").change(function(){
		$stxt =  $(this).find("option:selected").text();
	})
	
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
	
	//layui 分页
	layui.use(['laypage', 'layer'], function(){
	  var laypage = layui.laypage
	  ,layer = layui.layer;
	  
	   laypage.render({
	   	theme: '#578fe6',
	    elem: 'opagination'
	    ,count: 100
	    ,first: '首页'
	    ,last: '末页'
	    ,prev: '上一页'
	    ,next: '下一页'
	    ,layout: ['page', 'count']
	  });
	})
	
	//findLogLists(1,10)
	//查询日志
	function findLogLists(page,size){
		$.ajax({
			type:'GET',
            url:$url1+'/api/v1/logs',
			data:{
				"page":page,
				"size":size
			},
			success:function(res){
              	if(res.code===0){
              		var data = res.data;
 					var html = "";
              		console.log(data);
              		$.each(data, function(i,item) {
              			html += `
              				<tr id="${item.id}">
    							<td>
    								<input type="checkbox" name="" id="" value="" />
    							</td>
    							<td>${i+1}</td>
    							<td>${item.}</td>
    							<td>zkcpkim</td>
    							<td>伦敦</td>
    							<td>2017.08.25 21:00</td>
    							<td>删除账号</td>
    						</tr>
              			`;
              		});
	            }
			},
			error:function(err){
				console.log(err);
			}
		});
	}

})//jq end
