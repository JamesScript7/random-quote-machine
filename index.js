import { h, Component, render } from 'https://unpkg.com/preact@latest?module';
import { useState, useCallback } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';

// components
import Clock from './components/Clock.js';

const html = htm.bind(h);

function MyFunctionalComponent(props) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((currentCount) => currentCount + 1);
  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return html`
    <Fragment>
      <p>${props.note}: ${count}</p>
      <button onClick="${increment}">+ Increment button</button>
      <button onClick="${decrement}">- decrement button</button>
    </Fragment>
  `;
}

class App extends Component {
  // Initialize input state
  state = { value: '', name: 'James' }

  onInput = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.setState({
      name: this.state.value
    });
  }

  render() {
    return html`
      <div>
        <h1>
          Hello, ${this.state.name}
        </h1>
        <form onSubmit=${(e) => this.onSubmit(e)}>
          <input type="text" value=${this.state.value} onInput=${(e) => this.onInput(e)} />
          <button type="submit">
            Update Name
          </button>
        </form>
        <hr/>
        <${Clock} name="${this.state.name}" />
        <hr/>
        <${MyFunctionalComponent} note="Count" />
      </div>
    `;
  }
}

render(html`<${App} />`, document.body);
