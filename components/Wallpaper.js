import { h } from 'https://unpkg.com/preact@latest?module';
import { useEffect, useRef, useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';

import { getImgURLString } from '../js/helpers.js';

const html = htm.bind(h);

function Wallpaper({ screensaverMode, cycle }) {
  const [wallpaper, setWallpaper] = useState(getImgURLString());
  const imgRef = useRef();

  useEffect(() => {
    if (screensaverMode) {
      if (cycle > 0) {
        setWallpaper(getImgURLString());
      } else {
        setTimeout(() => {
          setWallpaper(getImgURLString());
        }, 1000);
      }
    }

  }, [screensaverMode, cycle]);

  return html`
    <div class="wallpaper">
      <img
        ref=${imgRef}
        src="${wallpaper}"
        class="wallpaper__img"
        alt="background wallpaper"
        onerror=${() => setWallpaper(getImgURLString())}
      />
    </div>
  `;
}

export default Wallpaper;
