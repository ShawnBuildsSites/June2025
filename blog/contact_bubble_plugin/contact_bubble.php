<?php
/**
 * Plugin Name: Contact Bubble
 * Description: Displays a floating Contact button in bottom right corner of window. Opens email client so user can type their own message.
 * Version: 1.0
 * Author: Shawn Gray Design
 */

// Shortcode: [contact_bubble]

add_shortcode( 'contact_bubble',function(){
  wp_enqueue_style('contact_bubble_style',plugin_dir_url(__FILE__).'css/contact_bubble.css');
  //Build the bubble
  $bubble = '
    <a class="sticky-contact-button" href="mailto:hello@shawntgray.com">
      <svg class="sticky-contact-button-icon" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>
      <span class="sticky-contact-button-text">Contact</span>
    </a>
  ';

  //Bring it together and render it
  return $bubble;
});