<?php

$ageTeam = $_POST['age-team'];
$name = $_POST['name'];
$address = $_POST['address'];
$postcode = $_POST['postcode'];
$dob = $_POST['dob'];
$school = $_POST['school'];
$parentName = $_POST['parent-name'];
$parentAddress = $_POST['parent-address'];
$parentPostcode = $_POST['parent-postcode'];
$number = $_POST['phone'];
$email = $_POST['email'];

$email_thankyou = "
	Hi".$name."

	Thank you for contacting Omega Plastering & Building.

	We will aim to respond to your enquiry within the next 48 hours.

	If you require our assistance urgently you can contact us by phone using any of the numbers below:
	Landline - 01925 470376
	Mobile - 07595 440656
	Alternative mobile - 07595 440656

	Many thanks
	Omega Plastering and Building.
";

$email_alert = "
	".$name."has submitted a contact form from your website.

	Their details are listed below:

	Age and team:".$ageTeam."
	Player name:".$name."
	Player address:".$address."
	Player postcode:".$postcode."
	Player date of birth:".$dob."
	Player school:".$school."
	Parent/guardian name:".$parentName."
	Parent/guardian address:".$parentAddress."
	Parent/guardian postcode:".$parentPostcode."
	Contact Number:".$number."
	Email Address:".$email."
";

$headers = "From: Matthiola Junior Football Club";

// Notification email to client
mail($email, 'Thank you for your enquiry', $email_thankyou, $headers);

// Notification email to Omega
mail('hutch78uk@yahoo.com', 'Player Registration', $email_alert, $headers);

?>
