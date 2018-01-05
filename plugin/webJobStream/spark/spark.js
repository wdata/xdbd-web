setVal();
bind_saveJobStream();

$('.saveJobStream').click(function () {
    bind_saveJobStream();
});

function bind_saveJobStream() {
    fn_save(getVal());
    this_data[this_actionCompId] = getVal();
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
	console.log(this_actionComp)
    if(this_actionComp.action){
        $(".spark_name").val(this_actionComp.action.spark.name);
	}
}