import { h, Component } from 'https://unpkg.com/preact@latest?module';
// import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';

// COMPONENTS
import Wallpaper from './Wallpaper.js';
import Clock from './Clock.js';
// import Footer from './Footer.js';

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

// TODO:
// Menu component
// Quotebox component
// Quote share button component

// <${Footer} />
class App extends Component {
  render() {
    return html`
      <div class="app__wrapper">
        <${Clock} />
        <${Wallpaper} />
      </div>
    `;
  }
}

export default App;