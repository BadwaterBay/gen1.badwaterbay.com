import navbar from './common/components/navbar.js';
import footer from './common/components/footer.js';

const mainContent = () => {
  return `
    <header>
      <div class="reframe">  
        <img src="./images/badwater-basin.jpg" alt="Home page image">
        <div class="overlay"></div>
      </div>

      <div class="header-text">
        <h1>Welcome to Badwater&nbsp;Bay!</h1>
        <p>Visit us on <a href="https://github.com/BadwaterBay" target="_blank" rel="noreferrer">GitHub</a></p>
      </div>
    </header>
  `
}

document.getElementById('navbar-anchor').innerHTML += navbar();
document.getElementById('content-anchor').innerHTML += mainContent();
document.getElementById('footer-anchor').innerHTML += footer();
