$(function(){
	//个人中心
	$(".user-info").hover(function(){
		$(this).find('ul').show()
	},function(){
		$(this).find('ul').hide()
	});
	
	//项目管理与系统管理切换
	$(".menu-top").on("click","li",function(){
		var $idx = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".bd-body").eq($idx).show().siblings().hide();
	});
	
	/*
	 
	 * 项目管理
	 * */
	
	//设置首页
	$(".set-index-box").on("click",function(){
		var $this = $(this),
		$img = $this.children("img"),
		$state = $this.children("input").prop("checked");
		if($state===true){
			$img.attr("src","images/icon_checked.png");
		}else{
			$img.attr("src","images/xuankuang.png");
		}
	});
	
	//图表---->属性
	$(".chart-type-val").on("click",function(){
		var $ul = $(".chart-type-lists");
		$ul.slideToggle();
	});
	$(".chart-type-lists").on("click","li",function(){
		var $this = $(this),
		$p = $(".chart-type-lists"),
		$val = $(".chart-type-val span");
		$val.text($this.find("span").text());
		$p.hide();
	});
	
	//数据源--->选择数据源
	/*$(".data-source-val").on("click",function(){
		var $ul = $(".data-source-lists");
		$ul.slideToggle();
	});
	$(".data-source-lists").on("click","li",function(){
		var $this = $(this),
		$p = $(".data-source-lists"),
		$val = $(".data-source-val span");
		$val.text($this.text());
		$p.hide();
	});*/
	
	//模态框关闭按钮
	$(".modal>h3>img").click(function(){
		$(this).parents(".modal").hide();
	});
	
	
	//版本切换
	$(".version-lists-box li").on("click",function(){
		var s = $(this).find("input[name='version-name']:checked");
		s.prev("img").attr("src","images/icon_circle_on.png");
		s.parent("li").siblings().find("img").attr("src","images/icon_circle.png");
	});
	
	
    //点击图标类型按钮--生成可拖拽缩放的div
 	$(".u-btn-class").draggable({
		appendTo: "",
		helper: "clone"
	});
	$(".edit-libs-box").droppable({
		accept: ":not(.ui-sortable-helper)",
        drop: function( event, ui ) {
            var left = event.pageX - parseFloat($(".clearY").width()) - parseFloat($(".clearY").css("padding-left")) - parseFloat($(".component-libs-box").css("margin-left"));
            var top = event.pageY - parseFloat($(".clearX").height()) - parseFloat($(".edit-libs-box").css("margin-top"));
            var cahrt_type = $(ui.draggable).attr("data-type");
            var type = null;
            var html = '';  // 当是文本框时

            // 根据拖拽区的data-type来显示type
            switch(cahrt_type){
                case "chart":
                    type="bar";
                    break;
                case "table":
                    type="table";
                    break;
                case "text":
                    html = '<div class="content-text"><div contenteditable="false" spellcheck="true" data-medium-editor-element="true" role="textbox" aria-multiline="true" data-placeholder="请输入文本" data-medium-focused = "true"></div></div>';
                    break;
            }

            $(this).append('<div data-type="'+ cahrt_type +'" type="'+type+'" style="z-index:'+number+'; left:'+left+'px;top:'+top+'px;" id="'+cahrt_type+number+'" class="resize-item">'+ html +'</div>');
            id_=cahrt_type+number;
            //聚合方式
            aggregation='';
            number++;
            new ZResize({
                stage: '.edit-libs-box', //舞台
                itemClass: 'resize-item'//可缩放的类名
            });
        }
	});
	
	//拖拽度量和维度到数据筛选框
	$(".data-empty").droppable({
		drop:function(event,ui){
			$(".data-filter-mod").show();
		}
	})
	//交换x/y轴的数据
	
	//数据源加载
	$(".data-source-config ul>li").on("click",function(){
		var $s = $(this).find("input[name]:checked"),
		$idx = $s.parent().index();
		$s.prev("img").attr("src","images/icon_circle_on.png");
		$s.parent("li").siblings().find("img").attr("src","images/icon_circle.png");
	})
	//样式加载
	
	//数据筛选(求和(值))
	//range 初始化
	switchRange(0);
	$(".s-data-val ul>li").on("click",function(){
		var $s = $(this).find("input[name]:checked"),
		$idx = $s.parent().index();
		$s.prev("img").attr("src","images/icon_circle_on.png");
		$s.parent("li").siblings().find("img").attr("src","images/icon_circle.png");
		switchRange($idx);
	})
	function switchRange(idx){
		if(idx===0){ //范围
	    	$( "#slider-range" ).slider({
		      range: true,
		      min: 0,
		      max: 500,
		      values: [ 0, 500 ],
		      slide: function( event, ui ) {
		       console.log(ui.values[ 0 ] + "-" + ui.values[ 1 ] );
		      }
		    });
		    //input均不禁用
		    $(".s-range-val .min").css("background-color","#FBFBFB").prop("readonly",false);
		    $(".s-range-val .max").css("background-color","#FFFFFF").prop("readonly",false);
		}else if(idx===1){ //至少
		    $( "#slider-range" ).slider({
		      range: "min",
		      value: 0,
		      min: 0,
		      max: 500,
		      slide: function( event, ui ) {
		        console.log( ui.value );
		      }
		    });
		    //input最大值禁用
		    $(".s-range-val .min").css("background-color","#FBFBFB").prop("readonly",true);
		    $(".s-range-val .max").css("background-color","#FFFFFF").prop("readonly",false);
		}else if(idx===2){ //至多
		    $( "#slider-range" ).slider({
		      range: "max",
		      value: 500,
		      min: 0,
		      max: 500,
		      slide: function( event, ui ) {
		        console.log( ui.value );
		      }
		    });
		    //input最小值禁用
		    $(".s-range-val .min").css("background-color","#FFFFFF").prop("readonly",false);
		    $(".s-range-val .max").css("background-color","#FBFBFB").prop("readonly",true);
		}
	}
	
	//点击加载更多,显示范围
	$(".s-more-btn").click(function(){
		$(".s-slider-box").show();
		$(this).hide();
	})
	
	//项目（过滤)属性
	$(".f-name").on("click","li",function(){
		var $idx = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".f-box"+($idx+1)).show().siblings().hide();
	});
	
	
	
});