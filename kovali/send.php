<?php

$name = "...";
$email = "...";
$tel = "...";

if (isset($_POST['name'])) {
  $name = $_POST['name'];
}
if (isset($_POST['email'])) {
  $email = $_POST['email'];
}
if (isset($_POST['phone'])) {
  $tel = $_POST['phone'];
}

// $verify = mail("info@kovali.ru", "Заявка с сайта", "Имя: " . $name . "\r\n" . "Телефон: " . $tel . "\r\n");

$verify = mail("shubin1994@bk.ru", "Заявка с сайта", "Имя: " . $name . "\r\n" . "Почта: " . $email . "\r\n" . "Телефон: " . $tel . "\r\n");

header("Location: /");
exit;
