bind_saveJobStream();
setVal();

function bind_saveJobStream() {
	$('.saveJobStream').click(function () {
		fn_save(getVal());
		this_data[this_actionCompId] = getVal();
	});
}

function getVal() {
	var data = {};
	data = {
		"start": $('.start_name').val(),
		"type": "start"
	}
	return data;
}

function setVal() {
	$('.start_name').val(this_actionCompName);
}