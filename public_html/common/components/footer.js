const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const footer = () => {
  return `
    <div id="footer">
      <div class="container">
        <ul class="icons">
          <li>
            <a
            href="https://github.com/BadwaterBay/"
            target="_blank"
            rel="noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
            href="https://twitter.com/BadwaterBay"
            target="_blank"
            rel="noreferrer"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
        <div id="footer-email">
          <a
          href="mailto:info@badwaterbay.com"
          target="_blank"
          rel="noreferrer"
          >
            <i class="fas fa-envelope"></i>
            <span>info@badwaterbay.com</span>
          </a>
        </div>
        <div id="footer-links">
        </div>
        <hr>
        <div id="copyright">
          Copyright &copy; ${currentYear} Badwater Bay.
        </div>
      </div>
    </div>
  `
}

export default footer;
