const sort = $("#sort");
const sortFields = sort.find(".sortFields");
initFromTable();
bind_change_fromTable();
$('.fromTable').trigger('change');
setVal();
bind_click_sortAdd();
bind_click_sortLessen();
bind_click_sql();
bind_click_saveActionComp();
$(".stepName").val(etlName);
mousedownRestrictions(sort,".sortField");  // 用以在点击的时候，禁止已选择的下拉选项
init_autosave();  // 用以重置下拉框和输入框、加、减后的change事件，让事件在修改后执行


function bind_change_fromTable() {
    $(".fromTable").change(function(){
        const tbName = $(this).val();
        const fieldList = tables[tbName].fieldList;
        const sortFields = sort.find('.sortFields');
        let optionHtml = '';
        $.each(fieldList, function () {
            var optionHtml2 = "";
            const remark = this.remark;
            $.each(fieldList,function(){
                const selected = remark === this.remark?"selected":"";
                optionHtml2 += "<option "+ selected +" value=" + this.fieldName + ">" + this.remark + "</option>";
            });
            optionHtml += `<tr class="sortField">
                    <td><select class="field auto_save">${ optionHtml2 }</select></td>
                    <td>
                        <select class="sort auto_save">
                            <option value="asc">asc</option>
                            <option value="desc">desc</option>
                        </select>
                    </td>
                    <td class="regulation"><span class="add sortAdd more_save"></span><span class="lessen sortLessen more_save"></span></td>
                </tr>`
        });
        sortFields.html(optionHtml);
    })
}

function bind_click_saveActionComp() {
    $('.saveActionComp').click(function () {
        fn_saveActionComp(getVal());
    });
}

function setVal() {
    var actionComp = fn_get_actionComp_by_webComponentId(this_webComponentId);
    if (actionComp !== null) {
        var attValue = eval("(" + actionComp.attValue + ")");
        fn_set_stepName(etlName);
        fn_set_fromTable(actionComp.fromTable);
        fn_set_tableOut(actionComp.tableOut);
        set_sortFields(attValue.extractFields);
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
    data['fromTable'] = fn_get_fromTable();
    data['tableOut'] = fn_get_tableOut();
    data['sqlOut'] = generate_sql();
    data['dag'] = Export();
    var attValue = {};
    attValue['extractFields'] = get_sortFields();
    data['attValue'] = JSON.stringify(attValue);
    return data;
}

function initFromTable() {
    var ary = [];
    $.each(demo.exportData().lines, function () {
        if (this.to == this_webComponentId) {
            var actionComp = fn_get_actionComp_by_webComponentId(this.from);
            var tableOut = tables[actionComp.fromTable];
            ary.push({name:tableOut.remark,val:actionComp.fromTable});
        }
    });
    var optionsHtml = "";
    $.each(ary, function () {
        optionsHtml += `<option value="${this.val}">${this.name?this.name:this.val}</option>`;
    });
    $('.fromTable').html(optionsHtml);
}

function bind_click_sortAdd() {
    $(document.body)
        .off('click', '.sortAdd')
        .on('click', '.sortAdd', function () {
            const sortField = $('.sortField');
            if(!( sortField.length < sortField.eq(0).find('.field option').length )){ layer.msg("不能增加了！"); return false;}

            // 获取第一个下拉框的代码
            const sortFieldHtml = sortField.eq(0).prop('outerHTML'); // 因为最低是一个，所以永远都有第一个元素可以复制
            sortFields.append(sortFieldHtml);

            addRestrictions(".sortField");  // 用以在添加的时候，返回下拉框没有选择的值
            return false;           // 防止 事件冒泡 不加会有2次效果
        })
}

function bind_click_sortLessen() {
    $(document.body)
        .off('click', '.sortLessen')
        .on('click', '.sortLessen', function () {
            if ($('.sortField').length < 2) {
                layer.msg('最后一个提取条件不能删除')
            } else {
                $(this).parents('.sortField').remove();
            }
        })
}

function set_sortFields(data) {
    if (data != null) {
        var sortHtml = $('.sortField').prop('outerHTML');
        $('.sortField').remove();
        $.each(data, function () {
            var field = '<option value='+this.field+'>'+this.remark+'</option>';
            var sort = this.sort;
            $('.sortFields').append(sortHtml);
            $('.sortField:last').find('.field option[value="'+this.field+'"]').attr("selected","selected");
            $('.sortField:last').find('.sort').val(sort);
        });
    }
}

function get_sortFields() {
    var ary = [];
    $('.sortField').each(function () {
        var data = {};
        var field = $(this).find('.field').val();
        var remark = $(this).find('.field option:checked').text();
        var sort = $(this).find('.sort').val();
        data['field'] = field;
        data['remark'] =remark;
        data['sort'] = sort;
        ary.push(data);
    });
    return ary;
}

function bind_click_sql() {
    $('.generateSql').click(function () {
        fn_set_sqlOut(generate_sql());
    });
}

function generate_sql() {
    var s = squel.select();
    var fromTable = fn_get_fromTable();
    s.from("(" + fn_get_sqlOut_by_fromTable(fromTable) + ")", fromTable);
    //提取字段
    $.each(fn_get_fields_by_fromTable(fromTable).extractFields, function () {
        var field = this.field;
        if (fromTable != null && fromTable != '') {
            field = fromTable + "." + field;
        }
        s.field(field);
    });
    //排序字段
    $.each(get_sortFields(), function () {
        var field = this.field;
        var sort = this.sort;
        if (field != null && field != '') {
            if (fromTable != null && fromTable != '') {
                field = fromTable + "." + field;
            }
            s.order(field, sort);
        }
    });
    return s.toString();
}