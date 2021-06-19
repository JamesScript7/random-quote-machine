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
      <div class="quotebox quotebox--bottomlayout">
        <main>
          <div class="quotebox__quote">
            Some really long quotes about life that is unique and profound... 
          </div>
          <div class="quotebox__author">
            - James Kim
          </div>
          <div class="quotebox__actions">
            <button>share</button>
            <button>Next</button>
          </div>
        </main>
      </div>
    `;
  }
}

export default QuoteBox;
