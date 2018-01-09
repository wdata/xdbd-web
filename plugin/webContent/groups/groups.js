let grtoupTable;
const groups = $('#groups');
const groupFields = groups.find(".groupFields");
initFromTable();
bind_click_sql();
bind_click_saveActionComp();
bind_click_groupAdd();
bind_click_groupLessen();
bind_click_extractAdd();
bind_click_extractLessen();
setVal();
$(".stepName").val(etlName);

mousedownRestrictions(groups,".group");  // 用以在点击的时候，禁止已选择的下拉选项
mousedownRestrictions(groups,".groupField");  // 用以在点击的时候，禁止已选择的下拉选项

groups.on("change",".groupField .field",function(){
    const alias = $(this).parent().siblings().find(".alias");
    alias.val(this.options[this.selectedIndex].innerText);
});

function initFromTable() {
	$.each(demo.exportData().lines, function () {
		if (this.to === this_webComponentId) {
			let actionComp = fn_get_actionComp_by_webComponentId(this.from);
			grtoupTable = actionComp.tableOut;
		}
	});
	if (grtoupTable !== null && grtoupTable !== '') {
		const fields = fn_get_fields_by_fromTable(grtoupTable);
		let optionsHtml = "";
		$.each(fields.extractFields, function () {
			optionsHtml += "<option value=" + this.field + ">" + this.remark + "</option>";
		});
		$('.group').find('.field').html(optionsHtml);
		$('.groupField').find('.field').html(optionsHtml);
	}
}

function bind_click_sql() {
	$('.generateSql').click(function () {
		fn_set_sqlOut(generate_sql());
	});
}

function bind_click_saveActionComp() {
	$('.saveActionComp').click(function () {
		fn_saveActionComp(getVal());
	});
}
function bind_click_groupAdd() {
	$(document.body)
		.off('click', '.onAdd')
		.on('click', '.onAdd', function () {
            const groupField = groups.find(".group");
            if(!( groupField.length < groupField.eq(0).find('.field option').length )){ layer.msg("不能增加了！"); return false;}

            // 获取第一个下拉框的代码
            const groupHtml = groupField.eq(0).prop('outerHTML'); // 因为最低是一个，所以永远都有第一个元素可以复制
            $("#groups").find('.groups').append(groupHtml);

            addRestrictions(".group");  // 用以在添加的时候，返回下拉框没有选择的值
            return false;           // 防止 事件冒泡 不加会有2次效果
		})
}
function bind_click_groupLessen() {
	$(document.body)
		.off('click', '.onLessen')
		.on('click', '.onLessen', function () {
			if ($('.group').length < 2) {
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
            const groupField = $('.groupField');
            if(!( groupField.length < groupField.eq(0).find('.field option').length )){ layer.msg("不能增加了！"); return false;}

            // 获取第一个下拉框的代码
            const groupHtml = groupField.eq(0).prop('outerHTML'); // 因为最低是一个，所以永远都有第一个元素可以复制
            groupFields.append(groupHtml);

            addRestrictions(".groupField");  // 用以在添加的时候，返回下拉框没有选择的值
            return false;           // 防止 事件冒泡 不加会有2次效果
		})
}
function bind_click_extractLessen() {
	$(document.body)
		.off('click', '.extractLessen')
		.on('click', '.extractLessen', function () {
			if ($('.groupField').length < 2) {
				layer.msg('最后一个提取条件不能删除')
			} else {
				$(this).parents('.groupField').remove();
				$('.saveActionComp').trigger('click');
				$('.generateSql').trigger('click');
			}
		})
}



function getVal() {
	let data = {};
	data['name'] = fn_get_stepName();
	data['webComponentId'] = this_webComponentId;
	data['actionId'] = this_actionId;
	data['actionCompType'] = this_actionCompType;
	data['versionId'] = this_versionId;
	data['fromTable'] = grtoupTable;
	data['tableOut'] = fn_get_tableOut();
	data['sqlOut'] = generate_sql();
	data['dag'] = Export();
	let attValue = {};
	attValue['extractFields'] = get_extractFields();
	attValue['groups'] = get_groups();
	data['attValue'] = JSON.stringify(attValue);
	return data;
}

function setVal() {
	const actionComp = fn_get_actionComp_by_webComponentId(this_webComponentId);
	if (actionComp) {
		const attValue = eval("(" + actionComp.attValue + ")");
		fn_set_stepName(etlName);     // 步骤名称
		fn_set_fromTable(actionComp.fromTable);   // 选择表
		fn_set_tableOut(actionComp.tableOut);  // 表输出
		set_groups(attValue.groups);    // 还原分组字段数据
		set_extractFields(attValue.extractFields); // 还原提取字段数据
		fn_set_sqlOut(actionComp.sqlOut);  // 还原Sql
	} else {
		$(".tableOut").val(etlName);
	}
}

function set_groups(objs) {
	if (objs !== null) {
		// 获得HTML，并清除之前所有的groupHTML
		const html = groups.find(".group").remove().prop('outerHTML');
		$.each(objs,function (i,d) {
			// 先添加HTML，在根据位置，修改下面的下拉框
            $('.groups').append(html).find(".group").eq(i).find("option[value="+ d +"]").attr("selected","selected");
		});
	}
}
// 用以添加保存的数据，并修改数据
function set_extractFields(extractFields) {
    // 获取第一个group的HTML，用以作为文本；
    const extractFieldHtml = groups.find(".groupField:first").remove().prop('outerHTML');
    // 遍历保存的数据
    $.each(extractFields, function (i,d) {
        // 将数据保存进groups中
        groupFields.append(extractFieldHtml);
        // 获取数据中的索引，并以此查询保存的HTML，并修改三个值
        const groupFieldI = groups.find(".groupField").eq(i);
        groupFieldI.find('.field option[value="'+ d.field +'"]').attr("selected","selected");
        groupFieldI.find('.fn option[value="'+ d.fn +'"]').attr("selected","selected");
        groupFieldI.find('.alias').val(d.alias);
    });
}



function get_groups() {
	let ary = [];
	$('.group').each(function () {
		ary.push($(this).find('.field').val());
	});
	return ary;
}

function generate_sql() {
	//squel.select({ separator: "<br/>" });
    let s = squel.select();
	//var fromTable = fn_get_fromTable();
	s.from("(" + fn_get_sqlOut_by_fromTable(grtoupTable) + ")", grtoupTable);
	//提取字段
	$.each(fn_get_extractFields(), function () {
		let field = this.field;
        let alias = this.alias;
        let fn = this.fn;
		//alert(grtoupTable)
		if (grtoupTable !== null) {
			field = grtoupTable + "." + field;
		}
		if (fn !== null && fn !== '') {
			field = fn + "(" + field + ")";
		}
		if (alias !== null && alias !== '') {
			s.field(field, alias);
		} else {
			s.field(field);
		}
	});

	$.each(get_groups(), function () {
		s.group(grtoupTable + "." + this);
	});
	return s.toString();
}

function get_extractFields() {
    let ary = [];
	$('.groupField').each(function () {
        let data = {};
		const table = $(this).find('.table').val();
        const field = $(this).find('.field').val();
        const alias = $(this).find('.alias').val();
        const fn = $(this).find('.fn').val();
		if (table !== null) {
			data['table'] = table;
		}
		data['field'] = field;
		data['alias'] = alias;
		data['fn'] = fn;
		ary.push(data);
	});
	return ary;
}
