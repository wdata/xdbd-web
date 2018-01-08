setVal();
bind_saveJobStream();

$('.saveJobStream').click(function () {
    bind_saveJobStream();
});

function bind_saveJobStream() {
    const regx = /^[a-zA-Z0-9_]*$/;
    const val1 = $('#spark .spark_name').val();
    const val2 = $("#spark .spark_task").val();
    if(regx.test(val1) && regx.test(val2)){
        fn_save(getVal());
        this_data[this_actionCompId] = getVal();
    }else{
        layer.msg("任务名称和程序名称只能为英文、数字、下划线！", { time: 1000 });
	}
}


function getVal() {
    var data = {};
    data = {
		"action":
			{
				"actionId": $('#ele_genre').val(),
				"type": 'spark',
				"name": $('.spark_task').val(),
				"ok": '',
				"error": '',
				"spark": {
					"xmlns": '',
					"jobtracker": '',
					"namenode": '',
					"master": '',
					"mode": '',
					"name": $('.spark_name').val(),
					"clazz": '',
					"jar": '',
					"sparkopts": '',
					"arg": [],
					"file": [],
					"prepare": {
						"delete": [],
						"mkdir": []
					},
					"configuration": {
						"property": []
					}
				}
			}
	};
	return data;
}

function setVal() {
	$('.spark_task').val(this_actionCompName);
    if(this_actionComp.action){
        $("#ele_genre").find('option[value="'+ this_actionComp.action.actionId +'"]').attr("selected","selected");
        $(".spark_name").val(this_actionComp.action.spark.name);
	}
}