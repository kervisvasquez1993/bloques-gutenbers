<?php
/**
 * Plugin Name: bloque1 — CGB Gutenberg Block Plugin
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: bloque1 — is a Gutenberg plugin created via create-guten-block.
 * Author: mrahmadawais, maedahbatool
 * Author URI: https://AhmadAwais.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
function lapizzeria_categoria_personalizada($categories, $post) {
    
    return array_merge(
        $categories,
        array(
            array(
                'slug'  => 'kervis', 
                'title' => 'kervis',
                'icon'  => 'store'
            )
        )
    );
}
add_filter('block_categories', 'lapizzeria_categoria_personalizada', 10, 2);

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
