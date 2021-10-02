import { h } from 'https://unpkg.com/preact@latest?module';
import { useContext, useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';

import { Settings } from '../js/settings-context.js';

// COMPONENTS
import Footer from './Footer.js';
import ToggleSwitch from './ToggleSwitch.js';

const html = htm.bind(h);

function Menu() {
  const [MenuToggle, setMenuToggle] = useState(false);

  const updateSettings = (name, value) => {
    console.log('wee:', name);
    console.log('value:', value);
    // console.log(useContext(Settings));
  };

  return html`
    <div class="menu">
      <button class="menu__button" onClick="${() => setMenuToggle((currentMenuToggle) => !currentMenuToggle)}"></button>
      <div class="menu__content ${MenuToggle ? 'menu__content--active' : ''}">
        <h3>Menu</h3>
        <ul>
          <li class="menu__listitem">
            <${ToggleSwitch}
              name="time"
              updateSettings="${updateSettings}" />
            <span class="menu__text">
              Display time
            </span>
          </li>
          <li class="menu__listitem">
            <${ToggleSwitch}
              name="layout"
              updateSettings="${updateSettings}" />
            <span class="menu__text">
              Display quotes on the bottom
            </span>
          </li>
          <li class="menu__listitem">
            <${ToggleSwitch}
              name="screensaver"
              updateSettings="${updateSettings}" />
            <span class="menu__text">
              Enable screensaver mode
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
