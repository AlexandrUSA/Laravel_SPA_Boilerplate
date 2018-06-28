<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Добро пожаловать в {{ $company_name }}</title>
</head>
<body>
    <h2 style="text-align: center">Здравствуйте {{ $name . ' ' . $last_name }}</h2>
    <p>Выбыли зарегестрированы в ЦРМ системе компании <b>{{ $company_name }}</b></p>
    <p>Для входа в свою учетную запсиь используйте следующие данные:</p>
    <p><b>Имя пользователя:</b> <i>{{ $email }}</i></p>
    <p><b>Пароль:</b> <i>{{ $password }}</i></p>
    <br>
    <p style="text-align: center">Всего наилучшего!</p>
</body>
</html>