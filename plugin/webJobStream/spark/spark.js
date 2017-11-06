/**
 * Created by qiangxl on 2017/11/4.
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
      "action":
        {
          "actionId":$('#ele_genre').val(),
          "type": 'spark',
          "name": $('.spark_task').val(),
          "ok": '',
          "error":'',
          "spark": {
            "xmlns": '',
            "jobtracker": '',
            "namenode": '',
            "master": '',
            "mode": '',
            "name": $('.spark_name').val(),
            "clazz": '',
            "jar":'',
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
        },
      "type":"spark"
    }
    return data;
  }

  function setVal() {
    //alert(JSON.stringify(this_actionComp))
    //alert(this_actionComp.action.spark.name)
    $('.spark_task').val(this_actionCompName)
    $(".spark_name").val(this_actionComp.action.spark.name)
  }
})