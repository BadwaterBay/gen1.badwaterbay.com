import head from './components/head.js';
import navbar from './components/navbar.js';
import footer from './components/footer.js';

const common = () => {
  document.getElementById('head-anchor').innerHTML += head();
  document.getElementById('navbar-anchor').innerHTML += navbar();
  document.getElementById('footer-anchor').innerHTML += footer();
}

export default common;