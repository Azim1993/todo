<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name') }}</title>

        <!-- CSRF Token -->
         <meta name="csrf-token" content="{{ csrf_token() }}">
        <!-- app style-->
        <link rel="stylesheet" href="{{ asset('/css/app.css')}}"/>
         
    </head>
    <body>
       <div id="app">
            <welcome></welcome>
       </div>
        <script src="{{ asset('/js/app.js') }}"></script>
    </body>
</html>