import { h } from 'https://unpkg.com/preact@latest?module';
// import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';
import { randomNumberGeneratorForArrays } from '../js/helpers.js';

const html = htm.bind(h);

const IMG_RESOLUTION_WIDTH = '2048';
const IMG_RESOLUTION_HEIGHT = '1536';
const PICSUM_MAX_LENGTH = '1084';
const imgURL = `https://picsum.photos/${IMG_RESOLUTION_WIDTH}/${IMG_RESOLUTION_HEIGHT}/?image=`;

function Wallpaper () {
  // onmount, set img src
  // should handle button click
  // should handle setInterval

  // const [imgSrc, setImageSrc] = useState();

  return html`
    <div class="wallpaper__container">
      <img
        src="${imgURL}${randomNumberGeneratorForArrays(PICSUM_MAX_LENGTH)}"
        class="wallpaper__img"
        alt="background wallpaper"
      />
    </div>
  `;
}

export default Wallpaper;
