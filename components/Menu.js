import { h } from 'https://unpkg.com/preact@latest?module';
import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

import Footer from './Footer.js';

function Menu() {
  const [MenuToggle, setMenuToggle] = useState(false);

  return html`
    <div class="menu">
      <button class="menu__button" onClick="${() => setMenuToggle((currentMenuToggle) => !currentMenuToggle)}"></button>
      <div class="menu__content ${MenuToggle ? 'menu__content--active' : ''}">
        <div>Screensaver Mode</div>
        <div>Time display</div>
        <div>Quote Layout center/bottom</div>
        <br/>
        <div>Icons made by <a href="https://flat-icons.com/" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <${Footer} />
      </div>
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
