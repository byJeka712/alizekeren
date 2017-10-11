<?php 
add_action( 'wp_enqueue_scripts', 'load_scripts' ); 
register_nav_menus( array(
	'top'    => __( 'Main Menu', 'mainmenu' ),
) );

add_action( 'widgets_init', 'widgets_init' );