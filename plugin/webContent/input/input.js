//增加字段
initFromTable();
bind_change_fromTable();
setVal();
bind_click_add();
bind_click_lessen();
bind_click_loadParguet();
bind_click_generateSql();
bind_click_saveActionComp();


// click 在选择select和选择option会点击2次，mousedown：只点击一次
$("#input").on("mousedown",".extractField .fields",function(){
    const option = $(this).find("option");
    const sib = $(this).parents(".extractField").siblings().find(".fields");
    // 先删除所有的disabled
    option.removeAttr("disabled").each(function(){
        const text = this.innerHTML;
        const val = this.value;
        const self = this;
        sib.each(function(){
            const SibVal = this.value;
            const SibText = $(this).find("option:selected").text();
            if(text === SibText && SibVal === val){
                $(self).attr("disabled","disabled");
            }
        })
    });
});


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
            const extractField = $('.extractField');
            if(!( extractField.length < $(extractField[0]).find('option').length )){ layer.msg("不能增加了！"); return false;}

            // 获取第一个下拉框的代码
            const inputHtml = extractField.eq(0).prop('outerHTML'); // 因为最低是一个，所以永远都有第一个元素可以复制
            $("#input").find('.extractFields').append(inputHtml);

            // 先添加后修改内容，不然不好修改元素
            // 带
            const extractFieldLast = $('.extractField:last');   // 需重新获取最后一个元素，也就是最新添加的元素outputHtml
            const option = extractFieldLast.find(".fields option");   // 获取新添加的下拉框
            const field = extractFieldLast.siblings().find(".fields"); // 获取添加之前的元素
            option.each(function(){
                const text = this.innerHTML;
                const val = this.value;
                let bur = true;
                field.each(function(){
                    const SibVal = this.value;
                    const SibText = $(this).find("option:selected").text();
                    if(text === SibText && SibVal === val){
                        bur = false;
                    }
                });
                if(bur){
                    $(this).attr("selected","selected");
                    return false;   // 可以添加的可能有多个，所以只显示第一个，用以排序！
                }
            });
            return false;           // 防止 事件冒泡 不加会有2次效果
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
