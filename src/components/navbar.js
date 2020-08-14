const navbar = document.createElement('div');
navbar.classList.add('navbar', 'navbar-expand-md', 'navbar-dark', 'bg-dark');

navbar.innerHTML = (() =>
  `<div class="container">
    <a class="navbar-brand" href="/">
      Badwater&nbsp;Bay
    </a>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a
          class="nav-link"
          href="apps/labelcopier"
        >
          Labelcopier
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="about"
        >
          About
        </a>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a
          class="nav-link"
          href="https://github.com/BadwaterBay/"
          target="_blank"
          rel="noreferrer"
        >
          <svg class="fab fa-github fa-2x"></svg>
        </a>
      </li>
    </ul>
  </div>`)();

export default navbar;
