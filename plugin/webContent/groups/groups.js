/**
 * Created by qiangxl on 2017/10/15.
 */
$(function(){
  var grtoupTable;
  initFromTable();
  bind_click_sql();
  bind_click_saveActionComp();
  bind_click_groupAdd();
  bind_click_groupLessen();
  bind_click_extractAdd();
  bind_click_extractLessen();
  setVal();
  $(".stepName").val(etlName);

  function initFromTable(){
    $.each(demo.exportData().lines,function(){
      if(this.to==this_webComponentId){
        var actionComp = fn_get_actionComp_by_webComponentId(this.from);
        grtoupTable = actionComp.tableOut;
      }
    });
    if(grtoupTable!=null && grtoupTable!=''){
      var fields = fn_get_fields_by_fromTable(grtoupTable);
      var optionsHtml = "";
      $.each(fields,function(){
        optionsHtml += "<option>"+this+"</option>";
      });
      $('.group').find('.field').html(optionsHtml);
      $('.extractField').find('.field').html(optionsHtml);
    }

  }

  function bind_click_sql(){
    // demo.onBtnSqlClick = function() {
    //   fn_set_sqlOut(generate_sql());
    // }
    $('.generateSql').click(function(){
      fn_set_sqlOut(generate_sql());
    });
  }

  function bind_click_saveActionComp(){
    // demo.onBtnSaveClick = function() {
    //   fn_saveActionComp(getVal());
    // }
    $('.saveActionComp').click(function(){
      fn_saveActionComp(getVal());
    });
  }
    function bind_click_groupAdd() {
        $(document.body)
        .off('click', '.onAdd')
        .on('click', '.onAdd', function () {
            var groupHtml = $('.group').prop('outerHTML');
            $('.groups').append(groupHtml);
        })
    }
    function bind_click_groupLessen() {
        $(document.body)
        .off('click', '.onLessen')
        .on('click', '.onLessen', function () {
            if($('.group').length <2) {
                layer.msg('最后一个提取条件不能删除')
            } else {
                $(this).parents('.group').remove();
            }
        })
    }
    function bind_click_extractAdd() {
        $(document.body)
        .off('click', '.extractAdd')
        .on('click', '.extractAdd', function () {
            var groupsHtml = $('.groupField').prop('outerHTML');
            // $('.extractField').remove();
            $('.groupFields').append(groupsHtml);
        })
    }
    function bind_click_extractLessen() {
        $(document.body)
        .off('click', '.extractLessen')
        .on('click', '.extractLessen', function () {
            if($('.groupField').length <2) {
                layer.msg('最后一个提取条件不能删除')
            } else {
                $(this).parents('.groupField').remove();
            }
        })
    }

  function getVal(){
    var data = {};
    data['name'] = fn_get_stepName();
    data['webComponentId'] = this_webComponentId;
    data['actionId'] = this_actionId;
    data['actionCompType'] = this_actionCompType;
    data['versionId'] = this_versionId;
    data['fromTable'] = grtoupTable;
    data['tableOut'] = fn_get_tableOut();
    data['sqlOut'] = generate_sql();
    data['dag'] = Export();
    var attValue = {};
    attValue['extractFields'] = fn_get_extractFields();
    attValue['groups'] = get_groups();
    data['attValue'] = JSON.stringify(attValue);
    return data;
  }

  // function initFromTable(){
  //   var ary = [];
  //   $.each(demo.exportData().lines,function(){
  //     if(this.to==this_webComponentId){
  //       var actionComp = fn_get_actionComp_by_webComponentId(this.from);
  //       ary.push(actionComp.tableOut);
  //     }
  //   });
  //   var optionsHtml = "";
  //   $.each(ary,function(){
  //     optionsHtml += "<option>"+this+"</option>";
  //   });
  //   $('.fromTable').html(optionsHtml);
  //   //$('.selectTable').html(optionsHtml);
  //   // $('.extractField .table').html(optionsHtml);
  // }

  // function bind_change_extractTable(){
  //   $(document.body)
  //     .off('change','.fromTable')
  //     .on('change','.fromTable',function(){
  //       //alert($(this).val())
  //       var fields = fn_get_fields_by_fromTable($(this).val());
  //       var optionsHtml = "";
  //
  //       $.each(fields,function(){
  //         optionsHtml += "<option>"+this+"</option>";
  //       });
  //       $('.group').find('.field').html(optionsHtml);
  //       $('.extractField').find('.field').html(optionsHtml);
  //     });
  // }

  function setVal(){
    var actionComp = fn_get_actionComp_by_webComponentId(this_webComponentId);
    if(actionComp!=null){
      var attValue = eval("("+actionComp.attValue+")");
      fn_set_stepName(actionComp.name);
      fn_set_fromTable(actionComp.fromTable);
      fn_set_tableOut(actionComp.tableOut);
      set_groups(attValue.groups);
      fn_set_extractFields(attValue.extractFields);
      fn_set_sqlOut(actionComp.sqlOut);
    } else {
      $(".tableOut").val(etlName);
    }
  }

  function set_groups(objs){
    if(objs!=null){
      var html = $('.group').prop('outerHTML');
      $('.group').remove();
      $.each(objs,function(){
        $('.groups').append(html);
        $('.group:last .field').val(this);
      });
    }
  }

  function get_groups(){
    var ary = [];
    $('.group').each(function(){
      ary.push($(this).find('.field').val());
    });
    return ary;
  }

  function generate_sql(){
    //squel.select({ separator: "<br/>" });
    var s = squel.select();
    //var fromTable = fn_get_fromTable();
    s.from("("+fn_get_sqlOut_by_fromTable(grtoupTable)+")",grtoupTable);
    //提取字段
    $.each(fn_get_extractFields(),function(){
      var field = this.field;
      var alias = this.alias;
      var fn = this.fn;
      //alert(grtoupTable)
      if(grtoupTable!=null){
        field = grtoupTable+"."+field;
      }
      if(fn!=null && fn!=''){
        field = fn+"("+field+")";
      }
      if(alias!=null && alias!=''){
        s.field(field,alias);
      }else{
        s.field(field);
      }
    });

    $.each(get_groups(),function(){
      s.group(grtoupTable+"."+this);
    });
    return s.toString();
  }
})
