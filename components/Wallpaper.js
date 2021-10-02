import { h } from 'https://unpkg.com/preact@latest?module';
// import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';
import { randomNumberGenerator } from '../js/helpers.js';

const html = htm.bind(h);

const IMG_RESOLUTION_WIDTH = '2048';
const IMG_RESOLUTION_HEIGHT = '1536';
const PICSUM_MAX_LENGTH = '1084';
const imgURL = `https://picsum.photos/${IMG_RESOLUTION_WIDTH}/${IMG_RESOLUTION_HEIGHT}/?image=`;

function Wallpaper() {
  // TODO:
  // should handle button click from a button component elsewhere
  // should handle setInterval when triggered in another component
  // const [imgSrc, setImageSrc] = useState();

  const imgURLString = `${imgURL}${randomNumberGenerator(PICSUM_MAX_LENGTH)}`;

  return html`
    <div class="wallpaper">
      <img
        src="${imgURLString}"
        class="wallpaper__img"
        alt="background wallpaper"
      />
    </div>
  `;
}

export default Wallpaper;
