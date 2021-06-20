import { h, Component } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

class QuoteBox extends Component {
  // componentDidMount() {
  // }

  // componentWillUnmount() {
  // }

  render() {
    // FIXME: temporary setup
    const quoteText = 'Some really long quotes about life that is unique and profound...';
    const quoteAuthor = 'James Kim';

    return html`
      <div class="quotebox ${false ? 'quotebox--bottomlayout' : ''}">
        <main>
          <div class="quotebox__quotewrapper">
            <q class="quotebox__quote">
              ${quoteText}
            </q>
            <em class="quotebox__author">
              — ${quoteAuthor}
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
