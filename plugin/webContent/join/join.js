/**
 * Created by qiangxl on 2017/10/12.
 */
//增加字段
$(function () {
	initFromTable();
	setVal();
	bind_change_fromTable();
	bind_change_selectTable();
	bind_change_extractTable();
	bind_click_generateSql();
	bind_click_onAdd();
	bind_click_onLessen();
	bind_click_extractAdd();
	bind_click_extractLessen();
	bind_click_saveActionComp();
	bind_click_sql();

	$(".stepName").val(etlName);

	$('.extractField .table').trigger('change');
	$('.fromTable').trigger('change');
	$('.selectTable').trigger('change');

	function bind_change_fromTable() {
		$(document.body)
			.off('change', '.fromTable')
			.on('change', '.fromTable', function () {
				var fields = fn_get_fields_by_fromTable($(this).val());
				var optionsHtml = "";
				// console.log(fields)
				$.each(fields.extractFields, function () {
					optionsHtml += "<option value="+this.field+">" + this.remark + "</option>";
				});
				$('.field2').html(optionsHtml);
			});
	}

	function bind_change_selectTable() {
		$(document.body)
			.off('change', '.selectTable')
			.on('change', '.selectTable', function () {
				// var fields = fn_get_fields_by_fromTable($(this).val());
				var optionsHtml = "";
				var self = $(this);
				console.log(tables)
				$.each(tables, function (i,item) {
					if(self.val() == this.tableName) {
						$.each(item.fieldList,function() {
							optionsHtml += "<option value="+this.fieldName+">" + this.remark + "</option>";
						})
					}
				});
				$(this).parents('.joinTable').find('.field1').html(optionsHtml);
				$('.extractField .table').append('<option>'+$(this).val()+'</option>');
			});
	}

	function bind_change_extractTable() {
		$(document.body)
			.off('change', '.extractField .table')
			.on('change', '.extractField .table', function () {
				var self = $(this);
				var optionsHtml = "";
				$('.fromTable').each(function(i,item) {
					if($(this).val() == self.val()) {
						var fields = fn_get_fields_by_fromTable($(this).val());
						$.each(fields.extractFields, function () {
							optionsHtml += "<option value="+this.field+">" + this.remark + "</option>";
						});
					} else {
						$.each(tables, function (i,item) {
							if(self.val() == this.tableName) {
								var fieldsTable = item.fieldList;
								$.each(fieldsTable,function () {
									optionsHtml += "<option value="+this.fieldName+">" + this.remark + "</option>";
								})
							}
						});
					}
				})
				$(this).parents('tr').find('.field').html(optionsHtml);
			});
	}

	function bind_click_saveActionComp() {
		$('.saveActionComp').click(function () {
			fn_saveActionComp(getVal());
			// console.log(getVal())
		});
	}

	function set_joinTables(joinTables) {
		if (joinTables != null) {
			var joinTableHtml = $('.joinTable').prop('outerHTML');
			$('.joinTable').remove();
			$.each(joinTables, function () {
				var type = this.type;
				var table = this.table;
				$('.joinTables').append(joinTableHtml);

				var joinTable = $('.joinTable:last');
				console.log(table)
				joinTable.find('.joinType').val(type);
				// joinTable.find('.selectTable').val(table);
				joinTable.find('.selectTable option[value="'+table+'"]').attr("selected", 'selected');
				var onFilterHtml = joinTable.find('.onFilter').prop('outerHTML');
				if (this.onFilters != null) {
					joinTable.find('.onFilter').remove();
				}
				//alert(this.onFilteris.length)
				$.each(this.onFilters, function () {
					var field1 = this.field1;
					var expr = this.expr;
					var field2 = this.field2;
					joinTable.find('.onFilters').append(onFilterHtml);
					var onFilter = joinTable.find('.onFilter:last');
					// onFilter.find('.field1').val(field1);
					// onFilter.find('.expr').val(expr);
					// onFilter.find('.field2').val(field2);
					onFilter.find('.field1 option[value="'+field1+'"]').attr("selected","selected");
					onFilter.find('.expr option[value="'+expr+'"]').attr("selected","selected");
					onFilter.find('.field2 option[value="'+field2+'"]').attr("selected","selected");
				});
			});
		}

	}

	function setVal() {
		var actionComp = fn_get_actionComp_by_webComponentId(this_webComponentId);
		if (actionComp != null) {
			var attValue = eval("(" + actionComp.attValue + ")");
			fn_set_stepName(etlName);
			fn_set_fromTable(actionComp.fromTable);
			fn_set_tableOut(actionComp.tableOut);
			set_joinTables(attValue.joinTables);
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
		data['fromTable'] = fn_get_fromTable();
		data['tableOut'] = fn_get_tableOut();
		data['sqlOut'] = generate_sql();
		data['dag'] = Export();
		var attValue = {};
		attValue['extractFields'] = fn_get_extractFields();
		attValue['joinTables'] = get_joinTables();
		// attValue['extractFields'] = fn_get_extractFields();
		data['attValue'] = JSON.stringify(attValue);
		return data;
	}

	function bind_click_generateSql() {
		$('.generateSql').click(function () {
			var sql = generate_sql();
			fn_set_sqlOut(sql);
		});
	}


	function initFromTable() {
		var ary = [];
		$.each(demo.exportData().lines, function () {
			if (this.to == this_webComponentId) {
				var actionComp = fn_get_actionComp_by_webComponentId(this.from);
				ary.push(actionComp.tableOut);
			}
		});
		var optionsHtml = "";
		var selectHtml = "";
		console.log(ary)
		$.each(ary, function () {
			optionsHtml += "<option>" + this + "</option>";
		});
		$.each(tables,function() {
			selectHtml +="<option value="+this.tableName+">"+this.remark+"</option>";
		})
		$('.fromTable').html(optionsHtml);
		$('.selectTable').html(selectHtml);
		$('.extractField .table').html(optionsHtml);
	}


	function get_joinTables() {
		var ary = [];
		$('.joinTable').each(function () {
			var data = {};
			data['type'] = $(this).find('.joinType').val();
			data['table'] = $(this).find('.selectTable').val();
			var onFilters = [];
			$(this).find('.onFilter').each(function () {
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
			.off('click', '.joinsAdd')
			.on('click', '.joinsAdd', function () {
				// alert(111)
				var joinHtml = $('.onFilter').prop('outerHTML');
				//$('.onFilters').remove();
				$('.onFilters').append(joinHtml);
			})
	}

	function bind_click_onLessen() {
		$(document.body)
			.off('click', '.joinsLessen')
			.on('click', '.joinsLessen', function () {
				if ($('.onFilter').length < 2) {
					layer.msg('最后一个提取条件不能删除')
				} else {
					$(this).parents('.onFilter').remove();
					$('.saveActionComp').trigger('click');
					$('.generateSql').trigger('click');
				}
			})
	}
	function bind_click_extractAdd() {
		$(document.body)
			.off('click', '.joinAdd')
			.on('click', '.joinAdd', function () {
				var joinsHtml = $('.extractField').prop('outerHTML');
				$('.extractFields').append(joinsHtml)
			})
	}
	function bind_click_extractLessen() {
		$(document.body)
			.off('click', '.joinLessen')
			.on('click', '.joinLessen', function () {
				if ($('.extractField').length < 2) {
					layer.msg('最后一个提取条件不能删除')
				} else {
					$(this).parents('.extractField').remove();
				}
			})
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
		$.each(fn_get_extractFields(), function () {
			var table = this.table;
			var field = this.field;
			var alias = this.alias;

			if (table != null) {
				field = table + "." + field;
			}
			if (alias != null && alias != '') {
				s.field(field, alias);
			} else {
				s.field(field);
			}
		});

		$.each(get_joinTables(), function () {
			var type = this.type;
			var table = this.table;
			var joinTableSql = "";
			joinTableSql = "(" + fn_get_sqlOut_by_fromTable(table) + ")";
			var onFilterSql = '';
			$.each(this.onFilters, function (i) {
				if (i > 0) {
					onFilterSql += " and ";
				}
				var table1 = table;
				var field1 = this.field1;
				var expr = this.expr;
				var table2 = fromTable;
				var field2 = this.field2;

				if (table1 != null) {
					onFilterSql += table1;
				}
				if (field1 != null) {
					onFilterSql += ("." + field1);
				}
				if (expr != null) {
					onFilterSql += expr;
				}
				if (table2 != null) {
					onFilterSql += table2;
				}
				if (field2 != null) {
					onFilterSql += ("." + field2);
				}
			});

			switch (type) {
				case "left join":
					s.left_join(joinTableSql, table, onFilterSql);
					break;
				case "right join":
					s.right_join(joinTableSql, table, onFilterSql);
					break;
				default:
					s.join(joinTableSql, table, onFilterSql);
					break;
			}
		});
		return s.toString();
	}
});