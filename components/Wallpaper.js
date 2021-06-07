import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

function Wallpaper () {
  return html`
    <div>Wallpaper</div>
  `;
}

export default Wallpaper;