import common from './common.js';

const title = () => `<title>Badwater Bay</title>`;

const mainContent = () => {
  return `
    <div class="container mt-4">
      <p>You are at badwaterbay.com!</p>
      <p>Visit us on <a href="https://github.com/BadwaterBay" target="_blank" rel="noreferrer">GitHub</a>.</p>
      <ul class="list-group">
        <li class="list-group-item list-group-item-action">
          <a href="github-label-manager-plus/">GitHub Label Manager Plus</a>
        </li>
      </ul>
    </div>
  `
}

common();
document.getElementById('head-anchor').innerHTML += title();
document.getElementById('content-anchor').innerHTML += mainContent();
