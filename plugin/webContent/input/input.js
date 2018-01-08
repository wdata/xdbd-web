//增加字段
initFromTable();
bind_change_fromTable();
setVal();
bind_click_add();
bind_click_lessen();
bind_click_loadParguet();
bind_click_generateSql();
bind_click_saveActionComp();

function bind_click_saveActionComp() {
    $('.saveActionComp').click(function () {
        fn_saveActionComp(getVal());
        console.log(getVal())
    });
}

function setVal() {
    var actionComp = fn_get_actionComp_by_webComponentId(this_webComponentId);
    if (actionComp != null) {
        var attValue = eval("(" + actionComp.attValue + ")");
        fn_set_stepName(etlName);
        fn_set_fromTable(actionComp.fromTable);
        set_extractFields(attValue.extractFields);
        fn_set_sqlOut(actionComp.sqlOut);
    } else {
        $(".stepName").val(etlName);
        $('.fromTable').trigger('change');
    }
}

function getVal() {
    var data = {};
    data['name'] = fn_get_stepName();
    data['webComponentId'] = this_webComponentId;
    data['actionId'] = this_actionId;
    data['actionCompType'] = this_actionCompType;
    data['versionId'] = this_versionId;
    data['fromTable'] = fn_get_fromTable();
    data['tableOut'] = fn_get_fromTable();
    data['sqlOut'] = generate_sql();
    data['dag'] = Export();
    var attValue = {};
    attValue['extractFields'] = get_extractFields();
    data['attValue'] = JSON.stringify(attValue);
    // data['inputValue'] = JSON.stringify(get_inputExtractFields()); 
    return data;
}

function bind_click_generateSql() {
    // 保存
    $('.generateSql').click(function () {
        var sql = generate_sql();
        fn_set_sqlOut(sql);
    });
}

function bind_click_loadParguet() {
    $('.loadParguet').click(function () {
        fn_upload_parquet();
    })
}
function bind_change_fromTable() {
    $('.fromTable').change(function () {
        var tbName = $(this).val();
        var fieldList = tables[tbName].fieldList;
        var extractField = $('#input .extractFields');
        var optionHtml = '';
        $.each(fieldList, function () {
            var optionHtml2 = "";
            const remark = this.remark;
            $.each(fieldList,function(){
                const selected = remark===this.remark?"selected":"";
                optionHtml2 += "<option "+ selected +" value=" + this.fieldName + ">" + this.remark + "</option>";
            });
            optionHtml += `<div class="archive extractField">
                    <select class="fields auto_save" style="width:150px;height: 28px;margin-left: 12px;">${ optionHtml2 }</select>
                    <div class="regulation">
                        <span class="add more_save"></span>
                        <span class="lessen more_save"></span>
                    </div>
                </div>`
        });
        extractField.html(optionHtml);
        fn_saveActionComp(getVal());
    });
    // $(document).on("click",'#input .extractField .fields',function(){
    //     if(tables[$('.fromTable').val()]){
    //         const inputFields = $(this).parents(".extractFields").find("select.fields");
    //         fieldsSelect = tables[$('.fromTable').val()].fieldList;
    //         inputFields.each(function(x,y){
    //             const inner = $(this).find("option:selected").text();
    //             $.each(fieldsSelect,function(i){
    //                 if(inner === this.remark){
    //                     fieldsSelect.splice(i,1);
    //                 }
    //             })
    //         });
    //         var optionHtml = "<option value=" + $(this).val() + ">" + $(this).find('option:selected').text() + "</option>";
    //         $.each(fieldsSelect,function(){
    //             optionHtml += "<option value=" + this.fieldName + ">" + this.remark + "</option>";
    //         });
    //         console.log(optionHtml);
    //         $(this).empty().append(optionHtml);
    //     }
    // })
}

function initFromTable() {
    var optionsHtml = "";
    $.each(tables, function () {
        optionsHtml += "<option value=" + this.tableName + ">" + this.remark + "</option>";
    });
    $('.fromTable').html(optionsHtml);
}

function bind_click_add() {
    $(document.body)
        .off('click', '.add')
        .on('click', '.add', function () {
            // if(fieldsSelect >= 1){
            //     $('.extractFields').append("<option value=" + fieldsSelect[0].fieldName + ">" + fieldsSelect[0].remark + "</option>");
            // }
            var inputHtml = $('.extractField').prop('outerHTML');
            $('.extractFields').append(inputHtml);
        })
}

function bind_click_lessen() {
    $(document.body)
        .off('click', '.lessen')
        .on('click', '.lessen', function () {
            if ($('.extractField').length < 2) {
                layer.msg('最后一个提取条件不能删除');
            } else {
                $(this).parents('.extractField').remove();
                fn_saveActionComp(getVal());
            }
        })
}

function set_extractFields(obj) {
    var extractFieldHtml = $('.extractField').prop('outerHTML');
    $('.extractField').remove();
    if (obj.length < 1) {
        return;
    }
    $.each(obj, function () {
        var checkField = this.field;
        $('.extractFields').append(extractFieldHtml);
        var extractField = $('.extractField:last');
        var optionHtml = '';
        $.each(tables[fn_get_fromTable()].fieldList, function () {
            const select = checkField === this.fieldName ? "selected" : '';
            optionHtml += "<option " + select + " value=" + this.fieldName + " >" + this.remark + "</option>";
        });
        extractField.find('.fields').html(optionHtml);
    });
}

function get_extractFields() {
    var list = [];
    $('.extractField').each(function () {
        var ary = {};
        var field = $(this).find('.fields').val();
        var remark = $(this).find('.fields option:checked').text();
        ary['field'] = field;
        ary['remark'] = remark;
        ary['alias'] = '';
        ary['fn'] = '';
        list.push(ary);
    });
    return list;
}
// function get_inputExtractFields() {
//     console.log($('.extractField').length)
//     $('.extractField').each(function () {
//         var inputFields = {};
//         var field = $(this).find('.fields').val();
//         var remark = $(this).find('.fields option:checked').text();
//         inputFields['field'] = field;
//         inputFields['remark'] = remark;
//         inputFields['alias'] = '';
//         inputFields['fn'] = '';
//         inputExtractFields.push(inputFields);
//     });
//     console.log(inputExtractFields)
//     return inputExtractFields;
// }

function generate_sql() {
    var s = squel.select();
    var fromTable = fn_get_fromTable();
    s.from(fromTable);
    $.each(get_extractFields(), function () {
        var field = this.field;
        if (fromTable != null && fromTable != '') {
            field = fromTable + "." + field;
        }
        s.field(field);
    });
    return s.toString();
}
