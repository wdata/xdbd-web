/**
 * Created by qiangxl on 2017/10/11.
 */
//增加字段

$(function(){
  var whereTable;
  initFromTable();
  bind_click_generateSql();
  bind_click_saveActionComp();
  bind_click_onAdd();
  bind_click_onLessen();
  setVal();
  $(".stepName").val(etlName);

  function bind_click_saveActionComp(){
    // demo.onBtnSaveClick = function() {
    //   fn_saveActionComp(getVal());
    // }
    $('.saveActionComp').click(function(){
      fn_saveActionComp(getVal());
    });
  }

  function initFromTable(){
    $.each(demo.exportData().lines,function(){
      if(this.to==this_webComponentId){
        var actionComp = fn_get_actionComp_by_webComponentId(this.from);
        whereTable = actionComp.tableOut;
      }
    });
    if(whereTable!=null && whereTable!=''){
      var fields = fn_get_fields_by_fromTable(whereTable);
      var optionsHtml = "";
      $.each(fields,function(){
        optionsHtml += "<option>"+this+"</option>";
      });
      $('.where').find('.field').html(optionsHtml);
    }
  }

  function setVal(){
    var actionComp = fn_get_actionComp_by_webComponentId(this_webComponentId);
    if(actionComp!=null){
      var attValue = eval("("+actionComp.attValue+")");
      fn_set_stepName(actionComp.name);
      fn_set_fromTable(actionComp.fromTable);
      fn_set_tableOut(actionComp.tableOut);
      set_wheres(attValue.wheres);
      fn_set_extractFields(attValue.extractFields);
      fn_set_sqlOut(actionComp.sqlOut);
    } else {
      $(".tableOut").val(etlName);
    }
  }

  function getVal(){
    var data = {};
    data['name'] = fn_get_stepName();
    data['webComponentId'] = this_webComponentId;
    data['actionId'] = this_actionId;
    data['actionCompType'] = this_actionCompType;
    data['versionId'] = this_versionId;
    data['fromTable'] = whereTable;
    data['tableOut'] = fn_get_tableOut();
    data['sqlOut'] = generate_sql();
    data['dag'] = Export();
    var attValue = {};
    attValue['extractFields'] = get_extractFields();
    attValue['wheres'] = get_wheres();
    data['attValue'] = JSON.stringify(attValue);
    return data;
  }

  function get_wheres(){
    var ary = [];
    $('.where').each(function(){
      var data = {};
      data['field'] = $(this).find('.field').val();
      data['expr'] = $(this).find('.expr').val();
      data['value'] = $(this).find('.value').val();
      ary.push(data);
    });
    return ary;
  }

  function set_wheres(objs){
    if(objs!=null){
      var html = $('.where').prop('outerHTML');
      $('.where').remove();
      $.each(objs,function(){
        var field = this.field;
        var expr = this.expr;
        var value = this.value;
        $('.wheres').append(html);
        $('.where:last .field').val(field);
        $('.where:last .expr').val(expr);
        $('.where:last .value').val(value);
      });
    }
  }

  function bind_click_generateSql(){
    // demo.onBtnSqlClick = function() {
    //   fn_set_sqlOut(generate_sql());
    // }
    $('.generateSql').click(function(){
      fn_set_sqlOut(generate_sql());
    });
  }

  function bind_click_onAdd() {
    $(document.body)
      .off('click', '.onAdd')
      .on('click', '.onAdd', function () {

        var whereHtml = $('.where').prop('outerHTML');
        //$('.extractField').remove();
        $('.wheres').append(whereHtml);


      })
  }

  function bind_click_onLessen() {
    $(document.body)
      .off('click', '.onLessen')
      .on('click', '.onLessen', function () {
        if($('.where').length <2) {
            layer.msg('最后一个提取条件不能删除')
        } else {
            $(this).parents('.where').remove();
        }
      })
  }

  function get_extractFields(){
    var ary = [];
    $('.extractField').each(function(){
      var field = $(this).find('.fields').val();
      ary.push(field);
    });
    return ary;
  }

  function generate_sql(){
    var s = squel.select();
    s.from("("+fn_get_sqlOut_by_fromTable(whereTable)+")",whereTable);
    //提取字段
    $.each(fn_get_fields_by_fromTable(whereTable),function(){
      var field = this;
      if(whereTable!=null &&whereTable!=''){
        field = whereTable+"."+field;
      }
      s.field(field);
    });

    $.each(get_wheres(),function(){
      var field = this.field;
      var expr = " "+this.expr+" ";
      var value = this.value;
      value = "'"+value+"'";
      var whereSql =  field+expr+value;
      s.where(whereSql);
    });
    return s.toString();
  }
});