/* author : Elanthariyan Mano  */
/* dev */
$(document).ready(function () {
	if ($('#valuePara').val() == '' || $('#valuePara').val() == "") {
		$('#valuePara').css('border', 'none');
	}
});
var valueWithIndex = [];
var value = [];
var data = [];
var comma = ', ';

function checkValue() {
	value = [];
	valueWithIndex = [];
	var jsonsplit = $('#textarea').val().split(/\r?\n/);
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
				$('#valuePara').css('border', 'none');
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
		$('#valuePara').css('border', 'solid');
	}
	$('#valuePara').append(data);
	console.log(data);
}

function clean() {
	$('#textarea ').val('');
	$('#valuePara').html('');
	$('#valuePara').css('border', 'none');
}