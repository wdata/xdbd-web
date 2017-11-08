/**
 * Created by qiangxl on 2017/11/6.
 */
$(function() {
  bind_saveJobStream();
  setVal();

  function bind_saveJobStream() {
    $('.saveJobStream').click(function(){
      fn_save(getVal());
      this_data[this_actionCompId] = getVal();
    });
  }

  function getVal() {
    var data = {};
    data = {
      "start": $('.end_name').val(),
      "type": "start"
    }
    return data;
  }

  function setVal() {
    $('.end_name').val(this_actionCompName);
  }
})