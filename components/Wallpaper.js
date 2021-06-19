import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';
import { randomNumberGeneratorForArrays } from '../js/helpers.js';

const html = htm.bind(h);

function Wallpaper () {
  return html`
    <div>${randomNumberGeneratorForArrays(10)}</div>
  `;
}

export default Wallpaper;