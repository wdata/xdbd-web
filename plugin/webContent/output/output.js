/**
 * Created by qiangxl on 2017/10/11.
 */
//增加字段
$(function(){
  var fromTable;
  initFromTable();
  bind_click_generateSql();

  bind_click_saveActionComp();
  bind_click_extractAdd();
  bind_click_extractLessen();
  setVal();

  $(".stepName").val(etlName);

  function initFromTable(){
    $.each(demo.exportData().lines,function(){
        if(this.to==this_webComponentId){
        var actionComp = fn_get_actionComp_by_webComponentId(this.from);
        fromTable = actionComp.tableOut;
      }
    });
    if(fromTable!=null && fromTable!=''){
      var fields = fn_get_fields_by_fromTable(fromTable);
      var optionsHtml = "";
      $.each(fields,function(){
        optionsHtml += "<option>"+this+"</option>";
      });
      $('.extractField').find('.field').html(optionsHtml);
    }

  }


  function bind_click_saveActionComp(){
    // demo.onBtnSaveClick = function() {
    //   fn_saveActionComp(getVal());
    // }
    $('.saveActionComp').click(function(){
      fn_saveActionComp(getVal());
    });
  }

  function setVal(){
    var actionComp = fn_get_actionComp_by_webComponentId(this_webComponentId);
    if(actionComp!=null){
      var attValue = eval("("+actionComp.attValue+")");
      fn_set_stepName(actionComp.name);
      fn_set_extractFields(attValue.extractFields);
      fn_set_sqlOut(actionComp.sqlOut);
    }
  }

  function getVal(){
    var data = {};
    data['name'] = fn_get_stepName();
    data['webComponentId'] = this_webComponentId;
    data['actionId'] = this_actionId;
    data['actionCompType'] = this_actionCompType;
    data['versionId'] = this_versionId;
    data['fromTable'] = fromTable;
    data['tableOut'] = this_actionId;
    data['sqlOut'] = generate_sql();
    data['dag'] = Export();
    var attValue = {};
    attValue['extractFields'] = fn_get_extractFields();
    data['attValue'] = JSON.stringify(attValue);

    // alert(JSON.stringify(data))

    return data;
  }

  function bind_click_generateSql(){
    // demo.onBtnSqlClick = function() {
    //   fn_set_sqlOut(generate_sql());
    // }
    $('.generateSql').click(function(){
      fn_set_sqlOut(generate_sql());
    });
  }

  function bind_click_extractAdd() {
    $(document.body)
      .off('click', '.extractAdd')
      .on('click', '.extractAdd', function () {
        var outputHtml = $('.extractField').prop('outerHTML');
        //$('.extractField').remove();
        // console.log(extractsFieldHtml)
        $('.extractFields').append(outputHtml);
      })
  }

  function bind_click_extractLessen() {
    $(document.body)
      .off('click', '.extractLessen')
      .on('click', '.extractLessen', function () {
        if($('.extractField').length <2) {
            layer.msg('最后一个提取条件不能删除')
        } else {
            $(this).parents('.extractField').remove();
        }
      })
  }

  function generate_sql(){
    var s = squel.select();
    s.from("("+fn_get_sqlOut_by_fromTable(fromTable)+")",fromTable);
    //提取字段
    $.each(fn_get_extractFields(),function(){
      var field = this.field;
      var alias = this.alias;
      //alert(fromTable)
      if(fromTable!=null &&fromTable!=''){
        field = fromTable+"."+field;
      }
      s.field(field);
    });
    return s.toString();
  }
});

