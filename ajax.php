<?php

$first_name=$_POST['first_name'];
$phone_number=$_POST['phone_number'];
$email=$_POST['email'];
$message=$_POST['message'];
$subject=$_POST['subject'];



$to = "yura.kravis@gmail.com";
$subject = "Zarevo client";
$txt = "Hello Admin: User Name: ".$first_name." Phone: ".$phone_number." email ".$email." message: ".$message." service: ".$subject."";
$headers = "From: webmaster@example.com";

echo mail($to,$subject,$txt,$headers);
?>