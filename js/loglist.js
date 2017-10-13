$(function(){
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


})
