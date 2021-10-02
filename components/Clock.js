import { h } from 'https://unpkg.com/preact@latest?module';
import { useState, useEffect } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';

import { getDateTimeShort } from '../js/helpers.js';

const html = htm.bind(h);

const ONE_SECOND = 1000;

/*
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
*/

function Clock({ displayTime }) {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const timer = displayTime ? setInterval(() => setTime(Date.now()), ONE_SECOND) : '';
    return () => clearInterval(timer);
  });

  // NOTE: https://preactjs.com/guide/v8/api-reference/#preacth--preactcreateelement
  const clockElement = h('div', { class: 'clock' }, getDateTimeShort(time));
  return html`
    ${displayTime && clockElement}
  `;
}

export default Clock;
