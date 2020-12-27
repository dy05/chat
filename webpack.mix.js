const mix = require('laravel-mix');
require('laravel-mix-tailwind');


mix
	.disableNotifications()
	.react('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
	.tailwind("./tailwind.config.js")
;
