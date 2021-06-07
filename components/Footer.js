import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

function Footer() {
  const currentYear = new Date().getFullYear();

  return html`
    <footer class="footer">
      <ul>
        <li>
          © ${currentYear} James Kim
        </li>
        <li>
          ·
        </li>
        <li>
          <a href="https://github.com/JamesScript7" target="_blank" rel="noopener">GitHub</a>
        </li>
        <li>
          ·
        </li>
        <li>
          <a href="mailto:jameshkim7@gmail.com">Lets work together :)</a>
        </li>
      </ul>
    </footer>
  `
}

export default Footer;