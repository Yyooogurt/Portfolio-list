<?php
header("Content-Type: text/html; charset=utf-8");
$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$model = htmlspecialchars($_POST["model"]);
$selectedModel = htmlspecialchars($_POST["selectedModel"]);
$selectedType = htmlspecialchars($_POST["selectedType"]);
$phone = htmlspecialchars($_POST["phone"]);
$text = htmlspecialchars($_POST["text"]);

$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "stepanys6@gmail.com"; // e-mail администратора


// Отправка письма администратору сайта

$tema = "BATTERY-SHOP.BY заявка";
$message_to_myemail = "Текст письма:
<br><br>
Имя: $name<br>
Телефон: $phone<br>
E-mail: $email<br>
Сообщение: $text<br>
Модель(написанная): $model<br> <br>
Серия(выбранная): $selectedType<br>
Модель(выбранная): $selectedModel<br> <br>
Источник (ссылка): $refferer
";

mail($myemail, $tema, $message_to_myemail, "From: BATTERY-SHOP.BY <stepanys6@gmail.com> \r\n Reply-To: BATTERY-SHOP.BY \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );


// Отправка письма пользователю

// $tema = "Тема письма клиенту";
// $message_to_myemail = "
// Текст письма<br>
// Файл: <a href='http://numbers.andrewgavrilov.me/form/files/ripple.zip' download>Название файла</a>

// ";
// $myemail = $email;
// mail($myemail, $tema, $message_to_myemail, "From: Sitename <reg@wayup.in> \r\n Reply-To: Sitename \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );


// Сохранение инфо о лидах в файл leads.xls

$f = fopen("leads.xls", "a+");
fwrite($f," <tr>");    
fwrite($f," <td>$email</td> <td>$name</td> <td>$tel</td>   <td>$date / $time</td>");   
fwrite($f," <td>$refferer</td>");    
fwrite($f," </tr>");  
fwrite($f,"\n ");    
fclose($f);

?>