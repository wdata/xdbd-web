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
		"start": $('.start_name').val(),
		"type": "start"
	};
	return data;
}

function setVal() {
	$('.start_name').val(this_actionCompName);
}