<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="keywords" content="">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="theme-color" content="#317EFB">
  <title>{{ config('app.name') }}</title>
  <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
  <link rel="stylesheet" href="{{ mix('css/app.css') }}">
  {{--<script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js" async></script>--}}
</head>
<body>
  <div id="root">
    <noscript>
      <h2 style="text-align: center;">Внимание!</h2>
      <p>Для работы приложения необходимо включить Javascript!</p>
    </noscript>
  </div>

  @include('scripts')
</body>
</html>
