var fromTable;
initFromTable();
setVal();
bind_click_extractAdd();
bind_click_extractLessen();
bind_click_generateSql();
bind_click_saveActionComp();
$(".stepName").val(etlName);
$('.auto_save').trigger('change');

$("#output").on("change",".extractField .field",function(){
    const alias = $(this).parent().siblings().find(".alias");
    alias.val(this.options[this.selectedIndex].innerText);
});



function initFromTable() {
    $.each(demo.exportData().lines, function () {
        if (this.to == this_webComponentId) {
            var actionComp = fn_get_actionComp_by_webComponentId(this.from);
            fromTable = actionComp.tableOut;
        }
    });
    if (fromTable != null && fromTable != '') {
        var fields = fn_get_fields_by_fromTable(fromTable);
        var optionsHtml = "";
        $.each(fields.extractFields, function () {
            optionsHtml += "<option value=" + this.field + ">" + this.remark + "</option>";
        });
        $('.extractField').find('.field').html(optionsHtml);
    }

}


function bind_click_saveActionComp() {
    $('.saveActionComp').click(function () {
        fn_saveActionComp(getVal());
    });
}

function setVal() {
    var actionComp = fn_get_actionComp_by_webComponentId(this_webComponentId);
    if (actionComp != null) {
        var attValue = eval("(" + actionComp.attValue + ")");
        fn_set_stepName(etlName);
        fn_set_extractFields(attValue.extractFields);
        fn_set_sqlOut(actionComp.sqlOut);
    }
}

function getVal() {
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
    return data;
}

function bind_click_generateSql() {
    $('.generateSql').click(function () {
        fn_set_sqlOut(generate_sql());
    });
}

function bind_click_extractAdd() {
    $(document.body)
        .off('click', '.outputAdd')
        .on('click', '.outputAdd', function () {
            if(!( $('.extractField').length < $($('.extractField')[0]).find('option').length )){ return false;}
            var outputHtml = $('.extractField').prop('outerHTML');
            $('.extractFields').append(outputHtml);
        })
}

function bind_click_extractLessen() {
    $(document.body)
        .off('click', '.outputLessen')
        .on('click', '.outputLessen', function () {
            if ($('.extractField').length < 2) {
                layer.msg('最后一个提取条件不能删除')
            } else {
                $(this).parents('.extractField').remove();
            }
        })
}

function generate_sql() {
    var s = squel.select();
    s.from("(" + fn_get_sqlOut_by_fromTable(fromTable) + ")", fromTable);
    //提取字段
    $.each(fn_get_extractFields(), function () {
        var field = this.field;
        var alias = this.alias;
        if (fromTable != null && fromTable != '') {
            field = fromTable + "." + field +" AS "+alias;
        }
        s.field(field);
    });
    return s.toString();
}