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
        "start": $('.end_name').val(),
        "type": "end"
    }
    return data;
}

function setVal() {
    $('.end_name').val(this_actionCompName);
}