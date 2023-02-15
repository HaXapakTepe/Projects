<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

$user_name = $_POST["user_name"];
$user_phone = $_POST["user_phone"];
$user_email = $_POST["user_email"];
$user_city = $_POST["user_city"];

$m = new PHPMailer();
$m->IsSMTP();
$m->CharSet    = 'UTF-8';
$m->Host       = "smtp.yandex.ru";
$m->SMTPSecure = 'ssl';
// $m->SMTPDebug  = 2;
$m->SMTPAuth   = true;
$m->Port       = 465;
$m->Username   = "atom-notification@spaceapp.ru";
$m->Password   = "KiqTXuv2oBGDce";
$m->setFrom('atom-notification@spaceapp.ru');

$m->addAddress('lordrp@bk.ru', 'Получатель');
$m->addAddress('garin.andrey@spaceapp.ru', 'Получатель');


$m->Subject = "Новая заявка";
$m->Body = "Имя: {$user_name}\r\nТелефон: {$user_phone}\r\nЕмейл: {$user_email}\r\nГород: {$user_city}\r\n";

if ($m->send()) {
    echo '<img src="img/icon/check.svg" width="20" height="20" alt=""> <span>Сообщение отправлено!</span>';
}else {
    echo $m->ErrorInfo;
}


exit;
?>