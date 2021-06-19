import { h, Component } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';
import { getDateTimeShort } from '../js/helpers.js';

const html = htm.bind(h);

const ONE_SECOND = 1000;

// TODO: update to functional component
// NOTE: useEffect to clearInterval
// https://stackoverflow.com/questions/62520334/how-to-clear-interval-in-functional-component-if-interval-is-set-in-a-function
class Clock extends Component {
  state = {
    time: Date.now()
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: Date.now()
      });
    }, ONE_SECOND);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const time = getDateTimeShort(this.state.time);

    return html`
      <div class="clock">
        ${time}
      </div>
    `;
  }
}

export default Clock;
