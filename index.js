import { h, render } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';
import App from './components/App.js';

const html = htm.bind(h);

render(html`<${App} />`, document.getElementById('container'));
