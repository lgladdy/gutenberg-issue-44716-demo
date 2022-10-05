<?php
/**
 * Plugin Name: Metaboxes After Init Bug Demo
 * Plugin URI: https://github.com/WordPress/gutenberg/issues/44716
 * Version: 0.1
 * Description: A plugin to demonstrate the issue described at https://github.com/WordPress/gutenberg/issues/44716
 */


add_action( 'enqueue_block_editor_assets', 'enqueue_to_block_editor' );
function enqueue_to_block_editor() {
	wp_enqueue_script(
		'after-init-js',
		plugins_url( 'after-init.js?_=' . time(), __FILE__ ),
		'jquery',
		'0.1'
	);
}