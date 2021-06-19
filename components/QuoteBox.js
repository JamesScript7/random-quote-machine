import { h, Component } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

class QuoteBox extends Component {
  // componentDidMount() {
  // }

  // componentWillUnmount() {
  // }

  render() {
    return html`
      <div class="quotebox__container">
        quotes...
      </div>
    `;
  }
}

export default QuoteBox;
