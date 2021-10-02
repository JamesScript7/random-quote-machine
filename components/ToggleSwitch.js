import { h } from 'https://unpkg.com/preact@latest?module';
import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

function ToggleSwitch({ name, updateSettings }) {
  // TODO: state dependent on intial state from context
  const [toggleValue, setToggleValue] = useState(false);

  const handleChange = () => {
    const value = !toggleValue;
    setToggleValue(() => value);
    updateSettings(name, value);
  };

  return html`
    <button class="toggleswitch__button ${toggleValue ? 'toggleswitch__button--on' : 'toggleswitch__button--off'}">
      <input
        id="toggleswitch__input--${name}"
        class="toggleswitch__input"
        type="checkbox"
        value="${name}"
        onChange="${() => handleChange()}" />
      <label for="toggleswitch__input--${name}" class="toggleswitch__label">
        <span class="toggleswitch__span"></span>
      </label>
    </button>
  `;
}

export default ToggleSwitch;
