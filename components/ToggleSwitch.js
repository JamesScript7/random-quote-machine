import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

function ToggleSwitch({ toggleName, toggleState, onInputChange }) {
  return html`
    <button class="toggleswitch__button ${toggleState ? 'toggleswitch__button--on' : 'toggleswitch__button--off'}">
      <input
        id="toggleswitch__input--${toggleName}"
        class="toggleswitch__input"
        type="checkbox"
        value="${toggleName}"
        onChange="${() => onInputChange(toggleName, !toggleState)}" />
      <label for="toggleswitch__input--${toggleName}" class="toggleswitch__label">
        <span class="toggleswitch__span"></span>
      </label>
    </button>
  `;
}

export default ToggleSwitch;
