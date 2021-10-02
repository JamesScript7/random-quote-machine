import { h, Component } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

import { randomNumberGenerator } from '../js/helpers.js';

const html = htm.bind(h);

const QUOTE_URL = 'https://gist.githubusercontent.com/JamesScript7/9071c8419edaca2c7ced77c18c4236f1/raw/ef1161709601eb71db6fa7da99c657a3f4bd2fda/Quotes.json';
const QUOTE_FALLBACK = {
  quote: 'The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking',
  name: 'Albert Einstein',
};

class QuoteBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quoteList: [],
      quoteSelected: {},
    }
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cycle !== this.props.cycle) {
      this.setState({
        quoteSelected: this.getQuote(this.state.quoteList),
      });
    }
  }

  async fetchQuotes() {
    try {
      const response = await axios.get(QUOTE_URL);
      const data = response.data;

      this.setState({
        quoteList: data,
        quoteSelected: this.getQuote(data),
      });

    } catch(e) {
      console.log(`Error fetching quotes: ${e}`);
    }
  }

  handleNextQuoteClick() {
    this.setState({
      quoteSelected: this.getQuote(this.state.quoteList),
    });
  }

  getQuote(quoteList) {
    const num = randomNumberGenerator(quoteList.length);
    return quoteList[num];
  }

  render() {
    const quoteText = this.state.quoteSelected.quote || QUOTE_FALLBACK.quote;
    const quoteAuthor = this.state.quoteSelected.name || QUOTE_FALLBACK.name;

    return html`
      <div class="quotebox ${this.props.alternateLayout ? 'quotebox--bottomlayout' : ''}">
        <main class="${!this.state.quoteSelected ? 'undisplayed' : ''}">
          <div class="quotebox__quotewrapper">
            <q class="quotebox__quote">
              ${quoteText}
            </q>
            <em class="quotebox__author">
              — ${quoteAuthor}
            </em>
          </div>
          <div class="quotebox__actions">
            <button class="quotebox__button ${this.props.screensaverMode ? 'undisplayed' : ''}" onClick=${() => this.handleNextQuoteClick()}>Next Quote</button>
          </div>
        </main>
      </div>
    `;
  }
}

export default QuoteBox;
