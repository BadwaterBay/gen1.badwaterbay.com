/**
 * Footer
 */

const footer = document.createElement('div');

footer.id = 'footer';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

footer.innerHTML = (() =>
  `<div class="container">
    <ul class="icons">
      <li>
        <a
        href="https://github.com/BadwaterBay/"
        target="_blank"
        rel="noreferrer"
        >
          <svg class="fab fa-github"></svg>
        </a>
      </li>
      <li>
        <a
        href="https://twitter.com/BadwaterBay"
        target="_blank"
        rel="noreferrer"
        >
          <svg class="fab fa-twitter"></svg>
        </a>
      </li>
    </ul>
    <div id="footer-email">
      <a
      href="mailto:info@badwaterbay.com"
      target="_blank"
      rel="noreferrer"
      >
        <svg class="fas fa-envelope"></svg>
        <span>info@badwaterbay.com</span>
      </a>
    </div>
    <div id="footer-links">
    </div>
    <hr>
    <div id="copyright">
      Copyright &copy; ${currentYear} Badwater Bay.
    </div>
  </div>`)();

export default footer;
