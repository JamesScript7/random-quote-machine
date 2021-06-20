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
      <div class="quotebox">
        <main>
          <div class="quotebox__quotewrapper">
            <q class="quotebox__quote">
              Some really long quotes about life that is unique and profound...
            </q>
            <em class="quotebox__author">
              - James Kim
            </em>
          </div>
          <div class="quotebox__actions">
            <button>share</button>
            <button style="margin-left: 20px;">Next Quote</button>
          </div>
        </main>
      </div>
    `;
  }
}

export default QuoteBox;
