<?php
/* Осуществляем проверку вводимых данных и их защиту от враждебных
скриптов */
$your_name = htmlspecialchars($_POST["your_name"]);
$email = htmlspecialchars($_POST["email"]);
$phone = htmlspecialchars($_POST["phone"]);
$tema = htmlspecialchars($_POST["tema"]);
$message = htmlspecialchars($_POST["messages"]);
/* Устанавливаем e-mail адресата */
$myemail = "zarevo.sk11@gmail.com";
/* Проверяем заполнены ли обязательные поля ввода, используя check_input
функцию */
$your_name = check_input($_POST["your_name"], "Введіть ваше ім'я!");
$email = check_input($_POST["email"], "Вкажіть ваш e-mail!");
$phone = check_input($_POST["phone"], "Вкажіть номер телефону!");
/* Проверяем правильно ли записан e-mail */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
show_error("<br /> Е-mail не інсує!");
}

/* Отправляем сообщение, используя mail() функцию */
$from  = "From: $yourname <$email> \r\n Reply-To: $email \r\n";
mail($myemail, $tema, $message_to_myemail, $from);
?>
<p>Вашее звернення успішно надіслано!</p>
<?php
/* Если при заполнении формы были допущены ошибки сработает
следующий код: */
function check_input($data, $problem = "")
{
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
if ($problem && strlen($data) == 0)
{
show_error($problem);
}
return $data;
}
function show_error($myError)
{
?>
<html>
<body>
<p>Виправте, будь ласка, цю помилку:</p>
<?php echo $myError; ?>
</body>
</html>
<?php
exit();
}
?>