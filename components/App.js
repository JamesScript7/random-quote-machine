import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

// import { isMobile } from '../js/helpers.js';
import { Settings } from '../js/settings-context.js';

// COMPONENTS
import Clock from './Clock.js';
import Menu from './Menu.js';
import QuoteBox from './QuoteBox.js';
import Wallpaper from './Wallpaper.js';

const html = htm.bind(h);

function App() {
  return html`
    <div>
      <${Settings.Provider} value="light">
        <div class="app__wrapper">
          <${Menu} />
          <${Wallpaper} />
          <${Clock} />
          <${QuoteBox} />
        </div>
      <${Settings.Provider}>
    </div>
  `;
}

export default App;
