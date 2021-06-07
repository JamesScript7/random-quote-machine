import { h, Component, render } from 'https://unpkg.com/preact@latest?module';
// import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';

// COMPONENTS
import Wallpaper from './components/Wallpaper.js';
import Footer from './components/Footer.js';

const html = htm.bind(h);

// EXAMPLE: FUNCTIONAL COMPONENT
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

class App extends Component {
  render() {
    return html`
      <div>
        <${Wallpaper} />
        <${Footer} />
      </div>
    `;
  }
}

render(html`<${App} />`, document.getElementById('container'));
