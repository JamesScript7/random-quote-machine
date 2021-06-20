import { h } from 'https://unpkg.com/preact@latest?module';
// import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';
// import { isMobile } from '../js/helpers.js';

// COMPONENTS
import Clock from './Clock.js';
import Wallpaper from './Wallpaper.js';
import QuoteBox from './QuoteBox.js';
import Menu from './Menu.js';

const html = htm.bind(h);

// EXAMPLE: FUNCTIONAL COMPONENT AND HOOKS
// function MyFunctionalComponent(props) {
//   const [count, setCount] = useState(0);
//   const increment = () => setCount((currentCount) => currentCount + 1);
//   const decrement = () => setCount((currentCount) => currentCount - 1);
//   return html`
//     <Fragment>
//       <p>${props.note}: ${count}</p>
//       <button onClick="${increment}">+ Increment button</button>
//       <button onClick="${decrement}">- decrement button</button>
//     </Fragment>
//   `;
// }
// <${MyFunctionalComponent} note="Count" />

function App() {
  return html`
    <div class="app__wrapper">
      <${Menu} />
      <${Wallpaper} />
      <${Clock} />
      <${QuoteBox} />
    </div>
  `;
}

export default App;
