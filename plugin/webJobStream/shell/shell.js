/**
 * Created by qiangxl on 2017/11/6.
 */
$(function() {
  bind_saveJobStream();
  bind_click_add();
  bind_click_lessen();
  setVal();

  function bind_saveJobStream() {
    $('.saveJobStream').click(function(){
      fn_save(getVal());
      this_data[this_actionCompId] = getVal();
    });
  }

  function bind_click_add() {
    $(document.body)
      .off('click', '.add')
      .on('click', '.add', function () {

        var extractFieldHtml = $('.extractField').prop('outerHTML');
        //$('.extractField').remove();
        $('.extractFields').append(extractFieldHtml);


      })
  }

  function bind_click_lessen() {
    $(document.body)
      .off('click', '.lessen')
      .on('click', '.lessen', function () {
        $(this).parents('.extractField').remove();
      })
  }

  function getVal() {
    var data = {};
    var arr = [];
    $('.shell_file').each(function() {
      var shellFile = $(this).val();
      arr.push(shellFile);
    })
    //alert(arr)
    data = {
           "action":
             {
               "actionId": $('#ele_genre').val(),
               "type": 'shell',
               "name": $('.shell_task').val(),
               "ok": '',
               "error": '',
               "shell": {
                 "xmlns": '',
                 "job_tracker": '',
                 "name_node": '',
                 "exec": $('.shell_exec').val(),
                 "capture_output": '',
                 "argument": [],
                 "env_var": [],
                 "file": arr,
                 "prepare": {
                   "delete": [],
                   "mkdir": []
                 },
                 "configuration": {
                   "property": []
                 }
               }
             },
           "type": "shell"
         };
         return data;
  }

  function setVal() {
    console.log(this_actionCompName)
    $('.shell_task').val(this_actionCompName);
    $('.shell_exec').val(this_actionComp.action.shell.exec);
    var extractFieldHtml = $('.extractField').prop('outerHTML');
    if(this_actionComp.action.shell != '') {
      $.each(this_actionComp.action.shell.file, function () {
        $('.extractFields').append(extractFieldHtml);
        var extractField = $('.extractField:last');
        extractField.find('.shell_file').val(this);
      })
    }
  }
})