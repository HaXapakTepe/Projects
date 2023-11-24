<?php

$name = "...";
$company = "...";
$tel = "...";
$email = "...";
$text = "...";

if (isset($_POST['name'])) {
  $name = $_POST['name'];
}
if (isset($_POST['company'])) {
  $company = $_POST['company'];
}
if (isset($_POST['phone'])) {
  $tel = $_POST['phone'];
}
if (isset($_POST['email'])) {
  $email = $_POST['email'];
}
if (isset($_POST['text'])) {
  $text = $_POST['text'];
}

$verify = mail("info@indigastudio.ru", "Заявка с сайта", "Имя: " . $name . "\r\n" . "Название компании: " . $company . "\r\n" . "Телефон: " . $tel . "\r\n" . "Электронная почта: " . $email . "\r\n" . "О задаче: " . $text . "\r\n", "From: indiga@studio.ru");

header("Location: /");
exit;
