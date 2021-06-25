import { h } from 'https://unpkg.com/preact@latest?module';
import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

function ToggleSwitch({ name }) {
  // TODO: state dependent on intial state from context
  const [switchToggle, setSwitchToggle] = useState(false);

  return html`
    <button class="toggleswitch ${switchToggle ? 'toggleswitch--on' : 'toggleswitch--off'}">
      <input
        id="toggleswitch__input--${name}"
        class="toggleswitch__input"
        type="checkbox"
        value="${name}"
        onChange="${() => setSwitchToggle(() => !switchToggle)}" />
      <label for="toggleswitch__input--${name}" class="toggleswitch__label">
        <span class="toggleswitch__span"></span>
      </label>
    </button>
  `;
}

export default ToggleSwitch;
