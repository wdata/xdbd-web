/**
 * Created by qiangxl on 2017/10/12.
 */
//增加字段
alert(1211)
$(function(){
  initFromTable();
  bind_change_fromTable();
  bind_change_selectTable();
  bind_change_extractTable();
  bind_click_generateSql();
  bind_click_onAdd();
  bind_click_onLessen();
  bind_click_extractAdd();
  bind_click_extractLessen();
  //bind_click_generateSql();
  bind_click_saveActionComp();
  //bind_click_lessen();
//alert(JSON.stringify(tables))

  $(".stepName").val(etlName);

  $('.extractField .table').trigger('change');
  $('.fromTable').trigger('change');
  $('.selectTable').trigger('change');

  setVal();

  function bind_change_fromTable(){
    $(document.body)
      .off('change','.fromTable')
      .on('change','.fromTable',function(){
        var fields = fn_get_fields_by_fromTable($(this).val());
        var optionsHtml = "";
        $.each(fields,function(){
          optionsHtml += "<option>"+this+"</option>";
        });
        $('.field2').html(optionsHtml);
      });
  /**
    $('.fromTable').change(function(){
      var tbName = $(this).val();
      var extractFieldHtml = $('.extractField').prop('outerHTML');
      $('.extractField').remove();
      $.each(tables[tbName].fieldList,function(){
        $('.extractFields').append(extractFieldHtml);
        var extractField = $('.extractField:last');
        extractField.find('.fields').val(this);
      });
    });
   */

  }

  function bind_change_selectTable(){
    $(document.body)
      .off('change','.selectTable')
      .on('change','.selectTable',function(){
          var fields = fn_get_fields_by_fromTable($(this).val());
        var optionsHtml = "";

          $.each(fields,function(){
            optionsHtml += "<option>"+this+"</option>";
          });
        $(this).parents('.joinTable').find('.field1').html(optionsHtml);
      });
  }

  function bind_change_extractTable(){
    $(document.body)
      .off('change','.extractField .table')
      .on('change','.extractField .table',function(){
        var fields = fn_get_fields_by_fromTable($(this).val());
        var optionsHtml = "";

        $.each(fields,function(){
          optionsHtml += "<option>"+this+"</option>";
        });
        $(this).parents('tr').find('.field').html(optionsHtml);
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

  function set_joinTables(joinTables){
    if(joinTables!=null){
      var joinTableHtml = $('.joinTable').prop('outerHTML');
      //alert(joinTables.length)
      $('.joinTable').remove();
      $.each(joinTables,function(){
        var type = this.type;
        var table = this.table;
        $('.joinTables').append(joinTableHtml);

        var joinTable = $('.joinTable:last');
        joinTable.find('.joinType').val(type);
        joinTable.find('.selectTable').val(table);
        var onFilterHtml = joinTable.find('.onFilter').prop('outerHTML');
        if(this.onFilters!=null){
          joinTable.find('.onFilter').remove();
        }
        //alert(this.onFilteris.length)
        $.each(this.onFilters,function(){
          var field1 = this.field1;
          var expr = this.expr;
          var field2 = this.field2;
          joinTable.find('.onFilters').append(onFilterHtml);
          var onFilter = joinTable.find('.onFilter:last');
// alert(onFilter.html())
//           alert(onFilter.find('.field1').html())
          onFilter.find('.field1').val(field1);
          onFilter.find('.expr').val(expr);
          onFilter.find('.field2').val(field2);
          // onFilter.find('.field1')[1].selected=true;
        });
      });
    }

  }

  function setVal(){
    var actionComp = fn_get_actionComp_by_webComponentId(this_webComponentId);
    if(actionComp!=null){
      var attValue = eval("("+actionComp.attValue+")");
      fn_set_stepName(actionComp.name);
      fn_set_fromTable(actionComp.fromTable);
      fn_set_tableOut(actionComp.tableOut);
      set_joinTables(attValue.joinTables);
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
    data['fromTable'] = fn_get_fromTable();
    data['tableOut'] = fn_get_tableOut();
    data['sqlOut'] = generate_sql();
    data['dag'] = Export();
    var attValue = {};
    attValue['extractFields'] = fn_get_extractFields();
    attValue['joinTables'] = get_joinTables();
      data['attValue'] = JSON.stringify(attValue);
    return data;
  }

  function bind_click_generateSql(){
    // demo.onBtnSqlClick = function() {
    //   var sql = generate_sql();
    //   fn_set_sqlOut(sql);
    // }
    $('.generateSql').click(function(){
      var sql = generate_sql();
      fn_set_sqlOut(sql);
    });
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
    $('.selectTable').html(optionsHtml);
    $('.extractField .table').html(optionsHtml);
  }


  function get_joinTables(){
    var ary = [];
    $('.joinTable').each(function(){
      var data = {};
      data['type'] = $(this).find('.joinType').val();
      data['table'] = $(this).find('.selectTable').val();
      var onFilters = [];
      $(this).find('.onFilter').each(function(){
        var onFilter = {};
        onFilter['field1'] = $(this).find('.field1').val();
        onFilter['expr'] = $(this).find('.expr').val();
        onFilter['field2'] = $(this).find('.field2').val();
        onFilters.push(onFilter);
      });
      data['onFilters'] = onFilters;
      ary.push(data);
    });
    return ary;
  }
  function bind_click_onAdd() {
    $(document.body)
      .off('click', '.onAdd')
      .on('click', '.onAdd', function () {
        alert(111)
        var joinHtml = $('.onFilter').prop('outerHTML');
        //$('.onFilters').remove();
        $('.onFilters').append(joinHtml);
      })
  }

  function bind_click_onLessen() {
    $(document.body)
      .off('click', '.onLessen')
      .on('click', '.onLessen', function () {
        if($('.onFilter').length <2) {
            layer.msg('最后一个提取条件不能删除')
          } else {
            $(this).parents('.onFilter').remove();
          }
      })
  }
alert(111)
  function bind_click_extractAdd() {
    $(document.body)
      .off('click', '.joinAdd')
      .on('click', '.joinAdd', function () {
        var joinsHtml = $('.joinField').prop('outerHTML');
        $('.joinFields').append(joinsHtml)
      }

  function bind_click_extractLessen() {
    $(document.body)
      .off('click', '.joinLessen')
      .on('click', '.joinLessen', function () {
        if($('.joinField').length <2) {
            layer.msg('最后一个提取条件不能删除')
        } else {
            $(this).parents('.joinField').remove();
        }
      })
  }

  function bind_click_sql(){
    $('.generateSql').click(function(){
      fn_set_sqlOut(generate_sql());
    });
  }

  function generate_sql(){
    //squel.select({ separator: "<br/>" });
    var s = squel.select();
    var fromTable = fn_get_fromTable();
    s.from("("+fn_get_sqlOut_by_fromTable(fromTable)+")",fromTable);

    //提取字段
    $.each(fn_get_extractFields(),function(){
      var table = this.table;
      var field = this.field;
      var alias = this.alias;

      if(table!=null){
        field = table+"."+field;
      }
      if(alias!=null && alias!=''){
        s.field(field,alias);
      }else{
        s.field(field);
      }
    });

    $.each(get_joinTables(),function(){
      var type = this.type;
      var table = this.table;
      var joinTableSql = "";
      joinTableSql = "("+fn_get_sqlOut_by_fromTable(table)+")";
      var onFilterSql = '';
      $.each(this.onFilters,function(i){
        if(i>0){
          onFilterSql += " and ";
        }
        var table1 = table;
        var field1 = this.field1;
        var expr = this.expr;
        var table2 = fromTable;
        var field2 = this.field2;

        if(table1!=null){
          onFilterSql += table1;
        }
        if(field1!=null){
          onFilterSql += ("."+field1);
        }
        if(expr!=null){
          onFilterSql += expr;
        }
        if(table2!=null){
          onFilterSql += table2;
        }
        if(field2!=null){
          onFilterSql += ("."+field2);
        }
      });

      switch (type) {
        case "left join":
          s.left_join(joinTableSql,table,onFilterSql);
          break;
        case "right join":
          s.right_join(joinTableSql,table,onFilterSql);
          break;
        default:
          s.join(joinTableSql,table,onFilterSql);
          break;
      }
    });
    return s.toString();
  }
});