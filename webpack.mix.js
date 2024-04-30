const mix = require('laravel-mix');

mix.js('assets/src/app.js', 'assets/js')
    .postCss('assets/src/app.css', 'assets/css', [
        require('tailwindcss'),
    ]);