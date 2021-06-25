import { h } from 'https://unpkg.com/preact@latest?module';
// import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';
// import { isMobile } from '../js/helpers.js';

// COMPONENTS
import Clock from './Clock.js';
import Wallpaper from './Wallpaper.js';
import QuoteBox from './QuoteBox.js';
import Menu from './Menu.js';

const html = htm.bind(h);

function App() {
  return html`
    <div class="app__wrapper">
      <${Menu} />
      <${Wallpaper} />
      <${Clock} />
      <${QuoteBox} />
    </div>
  `;
}

export default App;
