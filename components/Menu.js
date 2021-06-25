import { h } from 'https://unpkg.com/preact@latest?module';
import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

import Footer from './Footer.js';
import ToggleSwitch from './ToggleSwitch.js';

function Menu() {
  const [MenuToggle, setMenuToggle] = useState(false);

  return html`
    <div class="menu">
      <button class="menu__button" onClick="${() => setMenuToggle((currentMenuToggle) => !currentMenuToggle)}"></button>
      <div class="menu__content ${MenuToggle ? 'menu__content--active' : ''}">
        <h3>Menu</h3>
        <ul>
          <li class="menu__listitem">
            <${ToggleSwitch} name="screensaver" />
            <span class="menu__text">
              Enable screensaver mode
            </span>
          </li>
          <li class="menu__listitem">
            <${ToggleSwitch} name="time" />
            <span class="menu__text">
              Display time
            </span>
          </li>
          <li class="menu__listitem">
            <${ToggleSwitch} name="layout" />
            <span class="menu__text">
              Display quotes on the bottom
            </span>
          </li>
        </ul>
        <br/>
        <div>Icons made by <a href="https://flat-icons.com/" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <${Footer} />
      </div>
    </div>
  `;
}

export default Menu;
