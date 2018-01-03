/**
 * Created by qiangxl on 2017/11/4.
 */
$(function () {
	setVal();
	bind_saveJobStream();

	function bind_saveJobStream() {console.log(111)
		$('.saveJobStream').click(function () {
			fn_save(getVal());
			this_data[this_actionCompId] = getVal();
		});
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
		}
		console.log(data)
		return data;
	}

	function setVal() {
		//alert(JSON.stringify(this_actionComp))
		// console.log(this_actionComp.action.spark.name)
		$('.spark_task').val(this_actionCompName)
		$(".spark_name").val(this_actionComp.action.spark.name)
	}
})