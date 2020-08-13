/**
 * About page
 */

const about = document.createElement('div');

about.innerHTML = (() =>
  `<div class="container mt-4">
    <p>
      We code open-source projects.
    </p>
    <p>
      Visit us on <a href="https://github.com/BadwaterBay" target="_blank" rel="noreferrer">GitHub</a>.
    </p>
  </div>`)();

export default about;
