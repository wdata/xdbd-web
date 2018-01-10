var fromTable;
const output = $("#output");
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

mousedownRestrictions(output,".extractField");  // 用以在点击的时候，禁止已选择的下拉选项
init_autosave();  // 用以重置下拉框和输入框、加、减后的change事件，让事件在修改后执行

function initFromTable() {
    $.each(demo.exportData().lines, function () {
        if (this.to == this_webComponentId) {
            var actionComp = fn_get_actionComp_by_webComponentId(this.from);
            fromTable = actionComp.tableOut;
        }
    });
    if (fromTable != null && fromTable != '') {
        $.each(demo.exportData().lines, function () {
            if (this.to == this_webComponentId) {
                var actionComp = fn_get_actionComp_by_webComponentId(this.from);
                fromTable = actionComp.fromTable;
            }
        });
        var fields = fn_get_fields_by_fromTable(fromTable);
        var optionsHtml = "";
        var actionComp = fn_get_actionComp_by_webComponentId(this_webComponentId);
        if(!actionComp){
            $.each(fields.extractFields, function () {
                var optionsHtml2 = "";
                const remark = this.remark;
                $.each(fields.extractFields,function(){
                    const selected = remark === this.remark?'selected':'';
                    optionsHtml2  += "<option "+ selected  +"  value=" + this.field + ">" + this.remark + "</option>";
                });
                optionsHtml += `<tr class="extractField">
                    <td style="width: 40%;"><select class="field auto_save">${ optionsHtml2 }</select></td>
                <td style="width: 40%;"><input value="${ this.remark }" class="alias auto_save" type="text"></td>
                    <td class="regulation"><span class="add outputAdd more_save"></span><span class="lessen outputLessen more_save"></span></td>
                </tr>`
            });
            $("#outputHtml .extractFields").html(optionsHtml);
        }else{
            $.each(fields.extractFields, function () {
                optionsHtml += "<option value=" + this.field + ">" + this.remark + "</option>";
            });
            $('.extractField').find('.field').html(optionsHtml);
        }
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
    }else{
        var optionsHtml = "";
        // 第一次点击，按照左边下拉框第一个为内容复制到输入框中；
        // const text = $('.extractField .field option:first').text();
        // $('.extractField .alias').val(text);
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
            const extractField = $('.extractField');
            if(!( extractField.length < extractField.eq(0).find('.field option').length )){ layer.msg("不能增加了！"); return false;}

            // 获取第一个下拉框的代码
            const outputHtml = extractField.eq(0).prop('outerHTML'); // 因为最低是一个，所以永远都有第一个元素可以复制
            $('.extractFields').append(outputHtml);

            addRestrictions(".extractField");  // 用以在添加的时候，返回下拉框没有选择的值
            return false;           // 防止 事件冒泡 不加会有2次效果
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
        // var alias = this.alias;
        if (fromTable != null && fromTable != '') {
            field = fromTable + "." + field;
        }
        // if (alias != null && alias != '') {
        //     s.field(field, alias);
        // } else {
        s.field(field);
        // }
    });
    return s.toString();
}