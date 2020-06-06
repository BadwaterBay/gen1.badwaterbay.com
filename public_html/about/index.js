import navbar from '../components/navbar.js';

const mainContent = () => {
  return `
    <div class="container mt-4">
      <p>
        We code open-source projects.
      </p>
      <p>
        Visit us on <a href="https://github.com/BadwaterBay" target="_blank" rel="noreferrer">GitHub</a>.
      </p>
    </div>
  `;
};

document.getElementById('navbar-anchor').innerHTML += navbar();
document.getElementById('content-anchor').innerHTML += mainContent();
