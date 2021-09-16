$(document).ready(function() {
	$('div.submit-btn').click(function() {

		var ageTeam = $('input#age-team').val();
		var name = $('input#name').val();
		var address = $('textarea#address').val();
		var postcode = $('input#postcode').val();
		var dob = $('input#dob').val();
		var school = $('input#school').val();
		var parentName = $('input#parent-name').val();
		var parentAddress = $('textarea#parent-address').val();
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
		var emailValidate = true;

		if (ageTeam.length > 0) {
			$('input#age-team').css({'border':'1px solid #666'});
			$('span.error.age-team').css('display', 'none');
			ageTeamValidate = true;
		} else {
			$('input#age-team').css({'border':'1px solid red'});
			$('span.error.age-team').css('display', 'block');
			ageTeamValidate = false;
		}

		if (name.length > 0) {
			$('input#name').css({'border':'1px solid #666'});
			$('span.error.name').css('display', 'none');
			nameValidate = true;
		} else {
			$('input#name').css({'border':'1px solid red'});
			$('span.error.name').css('display', 'block');
			nameValidate = false;
		}

		if (address.length > 0) {
			$('textarea#address').css({'border':'1px solid #666'});
			$('span.error.address').css('display', 'none');
			addressValidate = true;
		} else {
			$('textarea#address').css({'border':'1px solid red'});
			$('span.error.address').css('display', 'block');
			addressValidate = false;
		}

		if (postcode.length > 0) {
			$('input#postcode').css({'border':'1px solid #666'});
			$('span.error.postcode').css('display', 'none');
			postcodeValidate = true;
		} else {
			$('input#postcode').css({'border':'1px solid red'});
			$('span.error.postcode').css('display', 'block');
			postcodeValidate = false;
		}

		if (dob.length > 0) {
			$('input#dob').css({'border':'1px solid #666'});
			$('span.error.dob').css('display', 'none');
			dobValidate = true;
		} else {
			$('input#dob').css({'border':'1px solid red'});
			$('span.error.dob').css('display', 'block');
			dobValidate = false;
		}

		if (school.length > 0) {
			$('input#school').css({'border':'1px solid #666'});
			$('span.error.school').css('display', 'none');
			schoolValidate = true;
		} else {
			$('input#school').css({'border':'1px solid red'});
			$('span.error.school').css('display', 'block');
			schoolValidate = false;
		}

		if (parentName.length > 0) {
			$('input#parent-name').css({'border':'1px solid #666'});
			$('span.error.parent-name').css('display', 'none');
			parentNameValidate = true;
		} else {
			$('input#parent-name').css({'border':'1px solid red'});
			$('span.error.parent-name').css('display', 'block');
			parentNameValidate = false;
		}

		if (parentAddress.length > 0) {
			$('textarea#parent-address').css({'border':'1px solid #666'});
			$('span.error.parent-address').css('display', 'none');
			parentAddressValidate = true;
		} else {
			$('textarea#parent-address').css({'border':'1px solid red'});
			$('span.error.parent-address').css('display', 'block');
			parentAddressValidate = false;
		}

		if (parentPostcode.length > 0) {
			$('input#parent-postcode').css({'border':'1px solid #666'});
			$('span.error.parent-postcode').css('display', 'none');
			parentPostcodeValidate = true;
		} else {
			$('input#parent-postcode').css({'border':'1px solid red'});
			$('span.error.parent-postcode').css('display', 'block');
			parentPostcodeValidate = false;
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
			$('input#phone').css({'border':'1px solid red'});
			$('span.error.number').css('display', 'block');
			$('span.error.number2').css('display', 'none');
			numberValidate = false;
		} else if (validatePhone('phone') != true) {
	       	$('input#phone').css({'border':'1px solid red'});
			$('span.error.number2').css('display', 'block');
			$('span.error.number').css('display', 'none');
			numberValidate = false;
	   	} else {
	      	$('input#phone').css({'border':'1px solid #666'});
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
			$('input#email').css({'border':'1px solid red'});
			$('span.error.email').css('display', 'block');
			$('span.error.email2').css('display', 'none');
			emailValidate = false;
		} else if (validateEmail(email) != true) {
			$('input#email').css({'border':'1px solid red'});
			$('span.error.email2').css('display', 'block');
			$('span.error.email').css('display', 'none');
			emailValidate = false;
		} else {
			$('input#email').css({'border':'1px solid #666'});
			$('span.error.email').css('display', 'none');
			$('span.error.email2').css('display', 'none');
			emailValidate = true;
		}
	/*--- END EMAIL VALIDATION ---*/

		console.log(ageTeamValidate, nameValidate, addressValidate, postcodeValidate, dobValidate, schoolValidate, parentNameValidate, parentAddressValidate, parentPostcodeValidate, numberValidate, emailValidate);

		if (ageTeamValidate === true && nameValidate === true && addressValidate === true && postcodeValidate === true && dobValidate === true && schoolValidate === true && parentNameValidate === true && parentAddressValidate === true && parentPostcodeValidate === true && numberValidate === true && emailValidate === true) {
			console.log("form submitted");

			var varData = 'ageTeam= ' + ageTeam + ' & name= ' + name + ' & address= ' + address + ' & postcode= ' + postcode + ' & dob= ' + dob + ' & school= ' + school + ' & parentName= ' + parentName + ' & parentAddress= ' + parentAddress + ' & parentPostcode= ' + parentPostcode + ' & number= ' + number + ' & email= ' + email;
			console.log(varData);

			$.ajax({
				type: "POST",
				url:'form-process.php',
				data: varData,
				cache: false,
				success: function() {
					//alert("Post successful");
					$('div.registration-form').css('display', 'none');
					$('div.thankyou-message').css('display', 'block');
				}
			});
		}

		return false;

	});

});
