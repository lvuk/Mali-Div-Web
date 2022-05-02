<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$mymail = "swagyolov9@gmail.com";
$subject = "Upit sa stranice";
$txt = "Email klijenta: " . $email . "\r\n" . "Ime klijenta: " . $name; 
$headers = "From: noreply@malidivpivovara.com";

if($email != NULL){
    mail($mymail,$subject,$txt,$headers);
}

header("Location:index.html");
?>