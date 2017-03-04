<?php
$recipient = "theperfectpixels@gmail.com";


$messages = Array();
// basic validation
if (trim(@$_POST['fname']) == "") $messages[] = "You need to enter your name.";
if (trim(@$_POST['femail']) == "") $messages[] = "You need to enter a valid email address.";
if (trim(@$_POST['fmessage']) == "") $messages[] = "You cannot send an empty message.";


if (count($messages) == 0) {
    $headers = array();
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-type: text/plain; charset=iso-8859-1";
    $headers[] = "From: " . trim(@$_POST['fname']) . " <" . trim(@$_POST['femail']) . ">";
    $headers[] = "X-Mailer: ShapingRain FormMailer on PHP/" . phpversion();


    $subject   = "Message sent through your contact form.";
    $message   = strip_tags(stripslashes($_POST['fmessage']));

    @mail($recipient, $subject, $message, implode("\r\n", $headers));
    $status = 200;
} else {
    $status = 404;
}

$response = Array();
$response['status'] = $status;
$response['messages'] = $messages;

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($response);
exit();



