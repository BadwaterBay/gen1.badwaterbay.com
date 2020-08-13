/**
 * Homepage
 */

import imgBadwaterBasin from '../images/badwater-basin.jpg';

const home = document.createElement('div');

home.innerHTML = (() =>
  `
  <header>
    <img src=${imgBadwaterBasin} alt="Homepage image">
    <div class="header-text">
      <h1>
        Welcome to Badwater&nbsp;Bay!
      </h1>
      <p>
        Visit us on <a href="https://github.com/BadwaterBay" target="_blank" rel="noreferrer">GitHub</a>
      </p>
    </div>
  </header>
`)();

export default home;
