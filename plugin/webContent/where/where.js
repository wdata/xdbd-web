var whereTable;
const where = $("#where")
initFromTable();
setVal();
bind_click_generateSql();
bind_click_saveActionComp();
bind_click_onAdd();
bind_click_onLessen();
$(".stepName").val(etlName);

mousedownRestrictions(where,".where");  // 用以在点击的时候，禁止已选择的下拉选项
init_autosave();  // 用以重置下拉框和输入框、加、减后的change事件，让事件在修改后执行

function bind_click_saveActionComp() {
    $('.saveActionComp').click(function () {
        fn_saveActionComp(getVal());
    });
}

function initFromTable() {
    $.each(demo.exportData().lines, function () {
        if (this.to == this_webComponentId) {
            var actionComp = fn_get_actionComp_by_webComponentId(this.from);
            whereTable = actionComp.fromTable;
        }
    });
    if (whereTable != null && whereTable != '') {
        var fields = fn_get_fields_by_fromTable(whereTable);
        var optionsHtml = "";
        $.each(fields.extractFields, function () {
            optionsHtml += "<option value=" + this.field + ">" + this.remark + "</option>";
        });
        $('.where').find('.field').html(optionsHtml);
    }
}

function setVal() {
    var actionComp = fn_get_actionComp_by_webComponentId(this_webComponentId);
    if (actionComp != null) {
        var attValue = eval("(" + actionComp.attValue + ")");
        fn_set_stepName(etlName);
        fn_set_fromTable(actionComp.fromTable);
        fn_set_tableOut(actionComp.tableOut);
        set_wheres(attValue.wheres);
        fn_set_extractFields(attValue.extractFields);
        fn_set_sqlOut(actionComp.sqlOut);
    } else {
        $(".tableOut").val(etlName);
    }
}

function getVal() {
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
    attValue['extractFields'] = fn_get_fields_by_fromTable(whereTable).extractFields; //get_extractFields();
    attValue['wheres'] = get_wheres();
    data['attValue'] = JSON.stringify(attValue);
    return data;
}

function get_wheres() {
    var ary = [];
    $('.where').each(function () {
        var data = {};
        data['field'] = $(this).find('.field').val();
        data['expr'] = $(this).find('.expr').val();
        data['value'] = $(this).find('.value').val();
        ary.push(data);
    });
    return ary;
}

function set_wheres(objs) {
    if (objs != null) {
        var html = $('.where').prop('outerHTML');
        $('.where').remove();
        $.each(objs, function () {
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

function bind_click_generateSql() {
    // demo.onBtnSqlClick = function() {
    //   fn_set_sqlOut(generate_sql());
    // }
    $('.generateSql').click(function () {
        fn_set_sqlOut(generate_sql());
    });
}

function bind_click_onAdd() {
    $(document.body)
        .off('click', '#where .onAdd')
        .on('click', '#where .onAdd', function () {
            const where = $('#where .where');
            if(!( where.length < where.eq(0).find('.field option').length )){ layer.msg("不能增加了！"); return false;}

            // 获取第一个下拉框的代码
            const sortFieldHtml = where.eq(0).prop('outerHTML'); // 因为最低是一个，所以永远都有第一个元素可以复制
            $('.wheres').append(sortFieldHtml);

            addRestrictions(".where");  // 用以在添加的时候，返回下拉框没有选择的值
            return false;           // 防止 事件冒泡 不加会有2次效果
        })
}

function bind_click_onLessen() {
    $(document.body)
        .off('click', '.onLessen')
        .on('click', '.onLessen', function () {
            var whereJudge = $('#where .where').length < 2;
            if (whereJudge) {
                layer.msg('最后一个筛选条件不能删除')
            } else {
                $(this).parents('.where').remove();
            }
        })
}

function get_extractFields() {
    var ary = [];
    $('.where').each(function () {
        var field = {};
        field["filed"] = $(this).find('.field').val();
        field["remark"] = $(this).find('.field option:checked').text();
        ary.push(field);
    });
    return ary;
}

function generate_sql() {
    var s = squel.select();
    s.from("(" + fn_get_sqlOut_by_fromTable(whereTable) + ")", whereTable);
    //提取字段
    $.each(fn_get_fields_by_fromTable(whereTable).extractFields, function () {
        var field = this;
        if (whereTable != null && whereTable != '') {
            field = whereTable + "." + field.field;
        }
        s.field(field);
    });

    $.each(get_wheres(), function () {
        var field = this.field;
        var expr = " " + this.expr + " ";
        var value = this.value;
        value = "'" + value + "'";
        var whereSql = field + expr + value;
        s.where(whereSql);
    });
    return s.toString();
}