$(document).ready(function() {
//$('').css('', '');
//$('').css({'':'', '':''});
	$('div.submit-btn').click(function() {
		alert("working");
		var ageTeam = $('input#age-team').val();
		var name = $('input#name').val();
		var address = $('input#address').val();
		var postcode = $('input#postcode').val();
		var dob = $('input#dob').val();
		var school = $('input#school').val();
		var parentName = $('input#parent-name').val();
		var parentAddress = $('input#parent-address').val();
		var parentPostcode = $('input#parent-postcode').val();
		var number = $('input#phone').val();
		var email = $('input#email').val();

		var ageTeamValidate = false;
		var nameValidate = false;
		var addressValidate = false;
		var postcodeValidate = false;
		var dobValidate = false;
		var schoolValidate = false;
		var parentNameValidate = false;
		var parentAddressValidate = false;
		var parentPostcodeValidate = false;
		var numberValidate = false;
		var emailValidate = false;

		if (name.length > 0) {
			$('input.name').css({'border-color':'#e1e3e3', 'margin-bottom':'10px'});
			$('span.error.name').css('display', 'none');
			nameValidate = true;
		} else {
			$('input.name').css({'border-color':'red', 'margin-bottom':'0'});
			$('span.error.name').css('display', 'block');
			nameValidate = false;
		}
		/*
		if (number.length > 0) {
			$('input.number').css({'border-color':'#e1e3e3', 'margin-bottom':'10px'});
			$('span.error.number').css('display', 'none');
			numberValidate = true;
		} else {
			$('input.number').css({'border-color':'red', 'margin-bottom':'0'});
			$('span.error.number').css('display', 'block');
			numberValidate = false;
		}

		if (email.length > 0) {
			$('input.email').css({'border-color':'#e1e3e3', 'margin-bottom':'10px'});
			$('p.error.email').css('display', 'none');
			emailValidate = true;
		} else {
			$('input.email').css({'border-color':'red', 'margin-bottom':'0'});
			$('p.error.email').css('display', 'block');
			emailValidate = false;
		}
		*/

		if (message.length > 0) {
			$('textarea.message').css({'border-color':'#e1e3e3', 'margin-bottom':'10px'});
			$('span.error.message').css('display', 'none');
			messageValidate = true;
		} else {
			$('textarea.message').css({'border-color':'red', 'margin-bottom':'0'});
			$('span.error.message').css('display', 'block');
			messageValidate = false;
		}

	/*--- PHONE VALIDATION ---*/

		function validatePhone(txtPhone) {
			var a = document.getElementById(txtPhone).value;
			var filter = /^[0-9-+]+$/;
			if (filter.test(a)) {
				return true;
			} else {
				return false;
			}
		}

		if (number.length == 0) {
			$('input.number').css({'border-color':'red', 'margin-bottom':'0'});
			$('span.error.number').css('display', 'block');
			$('span.error.number2').css('display', 'none');
			numberValidate = false;
		} else if (validatePhone('phone-number') != true) {
	       	$('input.number').css({'border-color':'red', 'margin-bottom':'0'});
			$('span.error.number2').css('display', 'block');
			$('span.error.number').css('display', 'none');
			numberValidate = false;
	   	} else {
	      	$('input.number').css({'border-color':'#e1e3e3', 'margin-bottom':'10px'});
			$('span.error.number').css('display', 'none');
			$('span.error.number2').css('display', 'none');
			numberValidate = true;
	   	}


	/*--- END PHONE VALIDATION ---*/

	/*--- EMAIL VALIDATION ---*/

		function validateEmail(email) {
			var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

			if (filter.test(email)) {
				return true;
			} else {
				return false;
			}
		}

		if ($.trim(email).length == 0) {
			$('input.email').css({'border-color':'red', 'margin-bottom':'0'});
			$('span.error.email').css('display', 'block');
			$('span.error.email2').css('display', 'none');
			emailValidate = false;
		} else if (validateEmail(email) != true) {
			$('input.email').css({'border-color':'red', 'margin-bottom':'0'});
			$('span.error.email2').css('display', 'block');
			$('span.error.email').css('display', 'none');
			emailValidate = false;
		} else {
			$('input.email').css({'border-color':'#e1e3e3', 'margin-bottom':'10px'});
			$('span.error.email').css('display', 'none');
			$('span.error.email2').css('display', 'none');
			emailValidate = true;
		}

	/*--- END EMAIL VALIDATION ---*/
		/*
		alert('name is ' + nameValidate);
		alert('number is ' + numberValidate);
		alert('email is ' + emailValidate);
		alert('message is ' + messageValidate);
		*/

		if (nameValidate === false && numberValidate === false && emailValidate === false) {
			//alert("form submitted");

			var varData = 'age group and team= ' + ageTeam + ' & name= ' + name + ' & address= ' + address + ' & postcode= ' + postcode + ' & date of birth= ' + dob + ' & school= ' + school + ' & parent name= ' + parentName + ' & parent address= ' + parentAddress + ' & parent postcode= ' + parentPostcode + ' & phone number= ' + number + ' & email= ' + email;
			console.log(varData);

			$.ajax({
				type: "POST",
				url:'form-process.php',
				data: varData,
				success: function() {
					//alert("Post successful");
					$('div.contact-form').css('display', 'none');
					$('div.thankyou-message').css('display', 'block');
				}
			});
		}

		return false;

	});

});
