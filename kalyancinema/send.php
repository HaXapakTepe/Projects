<?php

$name = "...";
$email = "...";
$text = "...";

if (isset($_POST['name'])) {
  $name = $_POST['name'];
}
if (isset($_POST['mail'])) {
  $email = $_POST['email'];
}
if (isset($_POST['text'])) {
  $text = $_POST['text'];
}

$verify = mail("d.v.homer@gmail.com", "Заявка с сайта", "Имя: " . $name . "\r\n" . "Электронная почта: " . $email . "\r\n" . "Текст сообщения: " . $text . "\r\n", "From: d.v.homer@gmail.com");

header("Location: /");
exit;
