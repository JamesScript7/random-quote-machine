import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

import { getCurrentYear } from '../js/helpers.js';

const html = htm.bind(h);

function Footer() {
  const currentYear = getCurrentYear();

  return html`
    <footer>
      <ul>
        <li>
          © ${currentYear} James Kim
        </li>
        <li> · </li>
        <li>
          <a href="https://github.com/JamesScript7" target="_blank" rel="noopener">GitHub</a>
        </li>
        <li> · </li>
        <li>
          <a href="mailto:jameshkim7@gmail.com">Contact</a>
        </li>
      </ul>
    </footer>
  `
}

export default Footer;