<?php

use App\Http\Lumberjack;

// Create the Application Container
$app = require_once('bootstrap/app.php');

// Bootstrap Lumberjack from the Container
$lumberjack = $app->make(Lumberjack::class);
$lumberjack->bootstrap();

// Import our routes file
require_once('routes.php');

// Set global params in the Timber context
add_filter('timber_context', [$lumberjack, 'addToContext']);

function my_theme_enqueue_styles() {
	wp_enqueue_style( 'magna-style', get_template_directory_uri() . '/assets/css/app.css' );
	wp_enqueue_script( 'magna-script', get_template_directory_uri() . '/assets/js/app.js', null, '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );