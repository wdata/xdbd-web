/**
 * Created by qiangxl on 2017/10/12.
 */
//增加字段

$(function(){
  initFromTable();
  setVal();
  bind_change_fromTable();
  bind_click_sortAdd();
  bind_click_sortLessen();
  bind_click_sql();
  bind_click_saveActionComp();

  $('.fromTable').trigger('change');
  setVal();

  $(".stepName").val(etlName);

  function bind_change_fromTable(){
    $(document.body)
      .off('change','.fromTable')
      .on('change','.fromTable',function(){
        var fields = fn_get_fields_by_fromTable($(this).val());
        console.log(fields)
        var optionsHtml = "";
        $.each(fields,function(){
          optionsHtml += "<option>"+this+"</option>";
        });
        $('.sortField').find('.field').html(optionsHtml);
      });
  }

  function bind_click_saveActionComp(){
    // demo.onBtnSaveClick = function() {
    //   fn_saveActionComp(getVal());
    // }
    $('.saveActionComp').click(function(){
      //alert(JSON.stringify(getVal()));
      fn_saveActionComp(getVal());
    });
  }

  function setVal(){
    var actionComp = fn_get_actionComp_by_webComponentId(this_webComponentId);
    // alert(actionComp)
    if(actionComp!=null){
      var attValue = eval("("+actionComp.attValue+")");
      fn_set_stepName(actionComp.name);
      fn_set_fromTable(actionComp.fromTable);
      fn_set_tableOut(actionComp.tableOut);
      set_sortFields(attValue.sorts);
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
    data['fromTable'] = fn_get_fromTable();
    data['tableOut'] = fn_get_tableOut();
    data['sqlOut'] = generate_sql();
    data['dag'] = Export();
    var attValue = {};
    attValue['sorts'] = get_sortFields();
    data['attValue'] = JSON.stringify(attValue);
    return data;
  }

  function initFromTable(){
    var ary = [];
    $.each(demo.exportData().lines,function(){
      if(this.to==this_webComponentId){
        var actionComp = fn_get_actionComp_by_webComponentId(this.from);
        ary.push(actionComp.tableOut);
      }
    });
    var optionsHtml = "";
    $.each(ary,function(){
      optionsHtml += "<option>"+this+"</option>";
    });
    $('.fromTable').html(optionsHtml);
  }

  function bind_click_sortAdd() {
    $(document.body)
      .off('click', '.sortAdd')
      .on('click', '.sortAdd', function () {

        var sortHtml = $('.sortField').prop('outerHTML');
        //$('.onFilters').remove();
        $('.sortFields').append(sortHtml);
      })
  }

  function bind_click_sortLessen() {
    $(document.body)
      .off('click', '.sortLessen')
      .on('click', '.sortLessen', function () {
        if($('.sortField').length <2) {
            layer.msg('最后一个提取条件不能删除')
        } else {
            $(this).parents('.sortField').remove();
        }
      })
  }

  function set_sortFields(data){
    if(data!=null){
      var sortHtml = $('.sortField').prop('outerHTML');
      $('.sortField').remove();
      $.each(data,function(){
        var field = this.field;
        var sort = this.sort;
        $('.sortFields').append(sortHtml);

        $('.sortField:last').find('.field').val(field);
        $('.sortField:last').find('.sort').val(sort);
      });
    }
  }

  function get_sortFields(){
    var ary = [];
    $('.sortField').each(function(){
      var data = {};
      var field = $(this).find('.field').val();
      var sort = $(this).find('.sort').val();
      data['field'] = field;
      data['sort'] = sort;
      ary.push(data);
    });
    return ary;
  }

  function bind_click_sql(){
    // demo.onBtnSqlClick = function() {
    //   fn_set_sqlOut(generate_sql());
    // }
    $('.generateSql').click(function(){
      fn_set_sqlOut(generate_sql());
    });
  }

  function generate_sql(){
    var s = squel.select();
    var fromTable = fn_get_fromTable();
    s.from("("+fn_get_sqlOut_by_fromTable(fromTable)+")",fromTable);
    //提取字段
    $.each(fn_get_fields_by_fromTable(fromTable),function(){
      var field = this;
      if(fromTable!=null &&fromTable!=''){
        field = fromTable+"."+field;
      }
      s.field(field);
    });
    //排序字段
    $.each(get_sortFields(),function(){
      var field = this.field;
      var sort = this.sort;
      if(field!=null &&field!=''){
        if(fromTable!=null &&fromTable!=''){
          field = fromTable+"."+field;
        }
        s.order(field,sort);
      }
    });
    return s.toString();
  }
});