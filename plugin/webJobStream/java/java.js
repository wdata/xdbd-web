/**
 * Created by qiangxl on 2017/11/6.
 */
$(function() {
  bind_saveJobStream();
  setVal();

  function bind_saveJobStream() {
    $('.saveJobStream').click(function(){
      fn_save(getVal());
      this_data.push(this_actionCompId+':'+JSON.stringify(getVal()))
    });
  }

  function getVal() {
    var data = {};
    data = {
           "action":
             {
               "actionId":$('#ele_genre').val(),
               "type": 'java',
               "name": $('.java_task').val(),
               "ok": '',
               "error": '',
               "java":{
                 "job_tracker":'',
                 "name_node":'',
                 "main_class":$('.java_name').val(),
                 "capture_output":'',
                 "java_opts":$('.java_opts').val(),
                 "arg":[],
                 "file":[],
                 "archive":[],
                 "prepare":{
                   "delete":[],
                   "mkdir":[]
                 },
                 "configuration":{
                   "property":[]
                 }
               }
             },
           "type":"java"
         };
    return data;
  }

  function setVal() {
    $('.java_task').val(this_actionCompName)
    $(".java_name").val(this_actionComp.action.java.main_class)
  }
})