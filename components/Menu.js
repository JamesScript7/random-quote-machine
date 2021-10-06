import { h } from 'https://unpkg.com/preact@latest?module';
import { useState, useEffect } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';

// COMPONENTS
import Footer from './Footer.js';
import ToggleSwitch from './ToggleSwitch.js';

const html = htm.bind(h);

function Menu({ settings, setSettings }) {
  const [MenuToggle, setMenuToggle] = useState(false);

  const handleInputChange = (name, value) => {
    setSettings(() => {
      const opts = { ...settings };

      if (name === 'screensaverMode') {
        opts.displayTime = true;
        opts.alternateLayout = true;
      }

      return {
        ...opts,
        ...{ [name]: value },
      }
    });
  };

  useEffect(() => {
    if (settings.screensaverMode) {
      setTimeout(() => setMenuToggle(false), 500);
    }
  }, [settings.screensaverMode]);

  return html`
    <div class="menu">
      <button class="menu__button" onClick="${() => setMenuToggle((currentMenuToggle) => !currentMenuToggle)}"></button>
      <div class="menu__content ${MenuToggle ? 'menu__content--active' : ''}">
        <h3>Menu</h3>
        <ul>
          <li class="menu__listitem">
            <${ToggleSwitch}
              toggleName="displayTime"
              toggleState="${settings.displayTime}"
              onInputChange="${handleInputChange}" />
            <span class="menu__text">
              Display time
            </span>
          </li>
          <li class="menu__listitem">
            <${ToggleSwitch}
              toggleName="alternateLayout"
              toggleState="${settings.alternateLayout}"
              onInputChange="${handleInputChange}" />
            <span class="menu__text">
              Display quotes on the bottom
            </span>
          </li>
          <li class="menu__listitem">
            <${ToggleSwitch}
              toggleName="screensaverMode"
              toggleState="${settings.screensaverMode}"
              onInputChange="${handleInputChange}" />
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
