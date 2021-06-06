import { h, Component } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

// TODO: update to functional component
class Clock extends Component {
  state = {
    time: Date.now()
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: Date.now()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    let time = new Date(this.state.time).toLocaleTimeString();

    return html`
      <Fragment>
        <span>Hey ${this.props.name}, the time is: </span>
        <span>${time}</span>
      </Fragment>
    `;
  }
}

export default Clock;
