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
	
	
	//step2:创建项目的默认文件夹
	var $pname = '陈亭歌项目';
	$("#create-proj-btn").click(function(){
		$(".creat-new-projs").show();
		//创建项目
		/*var $html = `
			<ul data-level="2">
				<li>
					<a href="javascript:;" class="p-rkey icon-file">
						<h4>${$pname}</h4>
						<i class="fa fa-caret-down"></i>
					</a>
					<ul data-level="3">
						<li>
							<a href="javascript:;" class="icon-file">
		  						<h4>1.首页</h4>
		  						<i class="fa fa-caret-down"></i>
		  					</a>
		  					<ul  data-level="4">
		  						<li>
		  							<a href="javascript:;">
		  								<h4>菜单设置</h4>
		  								<i class="fa fa-caret-down"></i>
		  							</a>
		  						</li>
		  						<li>
		  							<a href="javascript:;">
		  								<h4>页面流</h4>
		  								<i class="fa fa-caret-down"></i>
		  							</a>
		  						</li>
		  						<li>
		  							<a href="javascript:;">
		  								<h4>页面</h4>
		  								<i class="fa fa-caret-down"></i>
		  							</a>
		  						</li>
		  					</ul>
						</li>
						<!--终极子模块-->
						<li>
							<a href="javascript:;" class="icon-file">
								<h4>2.终极子模块AAA</h4>
								<i class="fa fa-caret-down"></i>
							</a>
							<ul data-level="4">
								<li>
									<a href="javascript:;" class="etlfile icon-file">
										<h4>ETL</h4>
		  								<i class="fa fa-caret-down"></i>
									</a>
								</li>
								<li>
									<a href="javascript:;" class="jobstream icon-file">
										<h4>作业流</h4>
		  								<i class="fa fa-caret-down"></i>
									</a>
								</li>
								<li>
									<a href="javascript:;" class="icon-file">
										<h4>BI报表</h4>
		  								<i class="fa fa-caret-down"></i>
									</a>
									<ul data-level="5">
										<li>
											<a href="javascript:;" class="bifile icon-file">
												<h4>BI页面</h4>
				  								<i class="fa fa-caret-down"></i>
											</a>
										</li>
										<li>
											<a href="javascript:;">
												<h4>页面流</h4>
				  								<i class="fa fa-caret-down"></i>
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<!--子模块-->
						<li>
							<a href="javascript:;" class="submod icon-file">
								<h4>3.子模块BBB</h4>
								<i class="fa fa-caret-down"></i>
							</a>
						</li>
					</ul>
				</li>
			</ul>
		`;
		$(".g-folders>ul[data-level='1']").append($html);*/
	});
	
	/*$(".g-folders").delegate("a","click",function(){
		var $level = Number($(this).parent().parent().attr("data-level"));
		console.log($level);
		$(this).css({"text-indent":$level*20+4+"px","background-position":$level*20+"px,center"});
	})*/
	
	//版本切换
	$(".version-lists-box li").on("click",function(){
		var s = $(this).find("input[name='version-name']:checked");
		s.prev("img").attr("src","images/icon_circle_on.png");
		s.parent("li").siblings().find("img").attr("src","images/icon_circle.png");
	});
	
	//创建项目-->自定义右键
	var createSubmodule = function(){
		$(".submodule").show();
	};
	var createFinalSubmodule = function(){
		$(".subfinalmodule").show();
	};
	var onClick = function(e) {
		var checkInTest = function(){
			alert('checkInTest');
		};
		var switchVersion = function(){
			$(".cut-version").show();
		};
		var leadingIn = function(){
			alert('leadingIn');
		};
		var leadingOut = function(){
			alert('leadingOut');
		};
		var dataSourceConfig = function(){
			alert('dataSourceConfig');
		};
		var setProperty = function(){
			$(".proj-attr").show();
		};

		var items = [
			{ title: '创建子模块', fn: createSubmodule},
			{ title: '创建最终子模块', fn: createFinalSubmodule },
			{ title: '提交测试', fn: checkInTest },
			{ title: '切换版本', fn: switchVersion },
			{ title: '导入', fn: leadingIn },
			{ title: '导出', fn: leadingOut},
			{ title: '数据源配置', fn: dataSourceConfig },
			{ title: '属性', fn: setProperty }
		];
		basicContext.show(items, e);
	};
	$(".g-folders").delegate(".p-rkey","contextmenu",function(e){
    	onClick(e);
    });
    
    //创建项目-->ETL自定义右键-etlfile
    var newFile = function(){
    	alert('新建文件夹');
    };
    var etlClick = function(e){
    	var newEtl = function(){
    		alert('newEtl');
    	};
    	var items = [
			{ title: '新建ETL', fn: newEtl},
			{ title: '新建文件夹', fn: newFile }
		];
		basicContext.show(items, e);
    };
    $(".g-folders").delegate(".etlfile","contextmenu",function(e){
    	etlClick(e);
    });
    
    //创建项目-->作业流自定义右键-jobstream
    var jobClick = function(e){
    	var newJob = function(){
    		alert('newJob');
    	};
    	var items = [
			{ title: '新建作业流', fn: newJob},
			{ title: '新建文件夹', fn: newFile }
		];
		basicContext.show(items, e);
    };
    $(".g-folders").delegate(".jobstream","contextmenu",function(e){
    	jobClick(e);
    });
    
    //创建项目-->BI页面自定义右键-bifile
    var biClick = function(e){
    	var newBi = function(){
    		alert('newBi');
    	};
    	var items = [
			{ title: '新建BI文件', fn: newBi},
			{ title: '新建文件夹', fn: newFile }
		];
		basicContext.show(items, e);
    };
    $(".g-folders").delegate(".bifile","contextmenu",function(e){
    	biClick(e);
    });
    
    //创建项目-->创建子模块右键
    var biClick = function(e){
    	var newBi = function(){
    		alert('newBi');
    	};
    	var items = [
			{ title: '创建子模块', fn: createSubmodule },
			{ title: '创建最终子模块', fn: createFinalSubmodule }
		];
		basicContext.show(items, e);
    };
    $(".g-folders").delegate(".submod","contextmenu",function(e){
    	biClick(e);
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
	
	//维度和度量的拖拽交换
	/*$( ".placeholder li").draggable({
	    appendTo: "body",
	    helper: "clone"
	});*/
	/*$( ".placeholder" ).droppable({
      drop: function( event, ui ) {
      	this.appendChild(ui.helper.context)
      }
   	});*/
	//拖拽度量和维度拖拽到x/y轴
	/*$(".axis-empty").droppable({
		accept: ".placeholder li",
		drop: function( event, ui ) {
			console.log($(this));
			var text='';
			$(this).prev().children("ul").find("li").each(function(){
				text+=$(this).text();
			});
			if(text.indexOf(ui.draggable.text())==-1){
				$("<li></li>").html( ui.draggable.html() ).appendTo( $(this).prev().children("ul"));
			}
		}
	})*/
	
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
	
	//创建项目右键
//	if($("#tree").length){
		context.attach('#treeDemo ul li', [
	        {text: '创建子模块', action:function(e){
	        	var  ele = context.getClickEle();
	            	 e.preventDefault();
	        	 $(".submodule").show().siblings(".modal").hide();
	        }},
	        {text: '创建最终子模块',action:function(e){
	        	e.preventDefault();
	        	$(".subfinalmodule").show().siblings(".modal").hide();
	        }},
	        {text: '提交测试', action:function(e){
	        	e.preventDefault();
	        	$(".submit-test").show().siblings(".modal").hide();
	        }},
	        {text: '切换版本',action:function(e){
	        	e.preventDefault();
	        	$(".cut-version").show().siblings(".modal").hide();
	        }},
	        {divider: true},
	        {text: '导入', action:function(e){
	        	alert(导入);
	        }},
	        {text: '导出',action:function(e){
	        	alert(导出);
	        }},
	        {divider: true},
	        {text: '数据源配置', action:function(e){
	        	e.preventDefault();
	        	$(".data-source-config").show().siblings(".modal").hide();
	        }},
	        {text: '属性', action:function(e){
	        	e.preventDefault();
	        	$(".proj-attr").show().siblings(".modal").hide();
	        }}
	    ]);
//	}
		
	
	
});