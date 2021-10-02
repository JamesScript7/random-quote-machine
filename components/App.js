import { h } from 'https://unpkg.com/preact@latest?module';
import { useEffect, useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';

// COMPONENTS
import Clock from './Clock.js';
import Menu from './Menu.js';
import QuoteBox from './QuoteBox.js';
import Wallpaper from './Wallpaper.js';

const html = htm.bind(h);

const REFRESH_TIME = 1000 * 30;

function App() {
  const [state, setState] = useState({
    displayTime: true,
    alternateLayout: false,
    screensaverMode: false,
    cycle: 0,
  });

  useEffect(() => {
    let timer;

    if (state.screensaverMode) {
      timer = setInterval(() => {
        setState({
          ...state,
          alternateLayout: true,
          cycle: state.cycle += 1,
        });
      }, REFRESH_TIME);
    }

    return () => clearInterval(timer);
  }, [state.screensaverMode]);

  return html`
    <div class="app__wrapper">
      <${Clock}
        displayTime=${state.displayTime} />
      <${Menu}
        settings=${state}
        setSettings=${setState} />
      <${QuoteBox}
        cycle=${state.cycle}
        alternateLayout=${state.alternateLayout}
        screensaverMode=${state.screensaverMode} />
      <${Wallpaper}
        cycle=${state.cycle}
        screensaverMode=${state.screensaverMode} />
    </div>
  `;
}

export default App;
