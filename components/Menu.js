import { h } from 'https://unpkg.com/preact@latest?module';
// import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

function Menu() {
  return html`
    <div class="menu">
      Menu
    </div>
  `;
}

export default Menu;

/*
Menu
screensaver mode
time display toggle
quote layout toggle
footer
*/
