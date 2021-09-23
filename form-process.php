<?php

$ageTeam = $_POST['ageTeam'];
$name = $_POST['name'];
$address = $_POST['address'];
$postcode = $_POST['postcode'];
$dob = $_POST['dob'];
$school = $_POST['school'];
$parentName = $_POST['parentName'];
$parentAddress = $_POST['parentAddress'];
$parentPostcode = $_POST['parentPostcode'];
$number = $_POST['number'];
$email = $_POST['email'];

$email_thankyou = "
Hi".$name."

Thank you for registering with Matthiola Junior Football Club.

We look forward to welcoming you to our team and will contact you in due course.

Thanks again
Simon Greenway
Matthiola Club Secretary
";

$email_alert = "
".$name."has completed a Matthiola registration form.

Their details are listed below:

Age and team:".$ageTeam."
Players full name:".$name."
Players address:".$address."
Players postcode:".$postcode."
Players date of birth:".$dob."
Players school:".$school."
Parent/guardians name:".$parentName."
Parent/guardians address:".$parentAddress."
Parent/guardians postcode:".$parentPostcode."
Contact number:".$number."
Email Address:".$email."
";

$headers = 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
// Additional headers
// $headers .= 'From: MyCompany <abc@mycompany.com>' . "\r\n";
$headers = 'From: Matthiola Junior Football Club' . "\r\n";

if ($ageTeam != '' && $name != '' && $address != '' && $postcode != '' && $dob != '' && $school != '') {
    // Notification email to client
    mail($email, 'Thank you for registering with Matthiola Junior Football Club', $email_thankyou, $headers);

    // Notification email to Matthiola
    mail('hutch78uk@yahoo.com', 'Player Registration', $email_alert, $headers);
}
?>
