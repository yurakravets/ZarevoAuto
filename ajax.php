<?php

$first_name=$_POST['first_name'];
$phone_number=$_POST['phone_number'];
$email=$_POST['email'];
$message=$_POST['message'];
$subject=$_POST['subject'];



$to = "yura.kravis@gmail.com";
$subject = "Zarevo client";
$txt = "Нове звернення: \n Client Name: ".$first_name."\n Phone: ".$phone_number."\n email ".$email."\n message: ".$message."\n subject: ".$subject."";
$headers = "From: info@site.com";

mail($to,$subject,$txt,$headers);
?>