/* author : Elanthariyan Mano  */
/* dev */
$(document).ready(function () {
	if ($('#valuePara').val() == '' || $('#valuePara').val() == "") {
		//$('#valuePara').css('border', 'none');
		$('.cart-to-show').hide();
	}
	$('#btnClick').tooltip({ trigger: 'click' });
});
var valueWithIndex = [];
var value = [];
var data = [];
var comma = ', ';

function checkValue() {
	value = [];
	valueWithIndex = [];
	var jsonsplit = $('#area').val().split(/\r?\n/);
	$.each(jsonsplit, function (i, v) {
		var arrayValue = v.split(":");
		if (arrayValue[0] != '') {
			if (arrayValue[1] == " " && arrayValue[1] !== '' && arrayValue[1] !== "" && arrayValue[1] != null) {
				valueWithIndex[arrayValue[0]] = "/" /"";
				value.push(arrayValue[1].trim());
			} else if (arrayValue[1]) {
				valueWithIndex[arrayValue[0]] = (arrayValue[1].trim());
				value.push(arrayValue[1].trim());
			} else{
				$('#valuePara').html('');
				//$('#valuePara').css('border', 'none');
				$('.cart-to-show').hide();
				alert('Please Enter the Formate correctly in Textarea');
				
			}
		}
	});
}

/* function toTakeWithIndex() {
    checkValue();
    console.log(valueWithIndex);
}
*/
function toTakeOnlyValue() {
	checkValue();
	data = [];
	comma = ', ';
	$('#valuePara').html('');
	$.each(value, function (i, v) {
		if (v == "" || v == '' || v == null && i) {
			value.length - 1 == i ? comma = " " : '';
			data.push("'" + " " + "'" + comma);
		} else {
			value.length - 1 == i ? comma = " " : '';
			data.push("'" + v + "'" + comma);
		}
	});
	if (data.length != '' && data.length != null) {
		//$('#valuePara').css('border', 'solid');
		$('.cart-to-show').show();
	}
	$('#valuePara').append(data);
	console.log(data);
}

function clean() {
	$('#area').val('');
	$('#valuePara').html('');
	$('.cart-to-show').hide();
	//$('#valuePara').css('border', 'none');
}
function toCap() {
	debugger;
	var cap = $('#area').val();
	if (cap == '' || cap == null || cap == undefined) {
		alert('please provide a value');
	} else {
		$('#area').val('');
		cap = cap.toUpperCase();
		$('#area').val(cap);
	}
}
function destory() {
	$('.cart-to-show').hide();
}