
/*
 
 * 登录页面
 * */
if($(".login-form form").length){
	document.onkeypress=function(e){
		var keycode=document.all?event.keycode:e.which;
		if(keycode==13){
			setLogin();
		};
	}
	$("#loginBtn").click(function(){
		setLogin();
	})
}
function setLogin(){
	$.validator.addMethod("vMobelnum", function(value, element) {
		var t = /^1[34578]\d{9}$/;
	    return this.optional(element) || t.test(value);
	}, "请正确填写联系电话");  
	$.validator.addMethod("vLoginpsw", function(value, element) {   
	    var s = /^[0-9a-zA-Z]{8,16}$/;
	    return this.optional(element) || (s.test(value));
	}, "请正确填写密码");
	$(".login-form form").validate({
		errorElement:"p",
		rules:{
			phoneNum:{
				required:true,
				vMobelnum:true
			},
			psw:{
				required:true,
				vLoginpsw:true
			}
		},
		messages:{
			phoneNum:{
				required:"电话号码不能为空",
				vMobelnum:"电话号码格式有误"
			},
			psw:{
				required:"密码不能为空",
				vLoginpsw:"密码只能由数字、字母组成，且长度在8到16位之间"
			}
		},
		submitHandler:function(form){
			$.ajax({
				type:"post",
				url:"",
				async:true,
				dataType:"json",
				data:{},
				success:function(data){
					/*if(){//正确
						$(form)[0].reset();
					}else{
						
					}*/
				},
				error:function(err){
					console.log(err);
				}
			});
		}
	})
}

/*
 
 * 注册页面
 * */
if($(".register-form form").length){
	document.onkeypress=function(e){
		var keycode=document.all?event.keycode:e.which;
		if(keycode==13){
			setRegister();
		};
	}
	$("#registerBtn").click(function(){
		setRegister();
	})
}
function setRegister(){
	$.validator.addMethod("vMobelnum", function(value, element) {
		var t = /^1[34578]\d{9}$/;
	    return this.optional(element) || t.test(value);
	}, "请正确填写联系电话");
	$.validator.addMethod("vLoginpsw", function(value, element) {   
	    var s = /^[0-9a-zA-Z]{8,16}$/;
	    return this.optional(element) || (s.test(value));
	}, "请正确填写密码");
	$(".register-form form").validate({
		errorElement:"p",
		rules:{
			phonenum:{
				required:true,
				vMobelnum:true
			},
			imgcode:{
				required:true
			},
			msgcode:{
				required:true
			},
			psw:{
				required:true,
				vLoginpsw:true
			},
			okpsw:{
				required:true,
				equalTo: "#password"
			}
		},
		messages:{
			phonenum:{
				required:"手机号码不能为空",
				vMobelnum:"电话号码格式有误"
			},
			imgcode:{
				required:"验证码不能为空"
			},
			msgcode:{
				required:"手机验证码不能为空"
			},
			psw:{
				required:"密码不能为空",
				vLoginpsw:"密码只能由数字、字母组成，且长度在8到16位之间"
			},
			okpsw:{
				required:"密码不能为空",
				equalTo:"两次输入密码输入不一致"
			}
		},
		submitHandler:function(form){
			$.ajax({
				type:"post",
				url:"",
				async:true,
				dataType:"json",
				data:{},
				success:function(data){
					/*if(){//正确
						$(form)[0].reset();
					}else{
						
					}*/
				},
				error:function(err){
					console.log(err)
				}
			});
		}
	})
}

/*
 
 * 修改密码
 * */
//确定
$("#modpswBtn").click(function(){
	modifyPsw(); 
});
//取消
function modifyPsw(){
	$.validator.addMethod("vLoginpsw", function(value, element) {   
	    var s = /^[0-9a-zA-Z]{8,16}$/;
	    return this.optional(element) || (s.test(value));
	}, "请正确填写密码");
	$(".modify-psw form").validate({
		errorElement:"p",
		rules:{
			oldpsw:{
				required:true
			},
			newpsw:{
				required:true,
				vLoginpsw:true
			},
			newpswok:{
				required:true,
				equalTo:"#newpsw"
			}
		},
		messages:{
			oldpsw:{
				required:"旧密码不能为空"
			},
			newpsw:{
				required:"新密码不能为空",
				vLoginpsw:"密码只能由数字、字母组成，且长度在8到16位之间"
			},
			newpswok:{
				required:"请确认新密码",
				equalTo:"两次输入密码不一致"
			}
		},
		submitHandle:function(form){
			$.ajax({
				type:"post",
				url:"",
				async:true,
				dataType:"json",
				data:{},
				success:function(data){
					/*if(){
						$(form)[0].reset();
					}else{
						
					}*/
				},
				error:function(err){
					console.log(err);
				}
			});
		}
	})
}
