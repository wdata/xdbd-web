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
		"startTime": $('.time_start').val(),
		"endTime": $('.time_end').val(),
		"name": $('.start_name').val(),
		"timeunit": $('.start_date').val(),
		"frequency": $('.start_time').val(),
		"type": "start"
	};
	return data;
}

function setVal() {
	$('.start_name').val(this_actionCompName);
}