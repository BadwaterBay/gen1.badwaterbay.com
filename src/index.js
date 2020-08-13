/**
 * Entry point of all JavaScript
 */

import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import './scss/index.scss';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap-material-design';

import navbar from './components/navbar.js';
import footer from './components/footer.js';
import home from './components/home';
import about from './components/about';
import labelcopierContent from './apps/labelcopier/src/index';
import labelcopierApp from './apps/labelcopier/src/app';

library.add(faGithub, faTwitter, faEnvelope);
dom.watch();

/**
 * Client-side router
 */
class Router {
  /**
   * Constructor
   */
  constructor() {
    this.routes = [];
  }

  /**
   * Get route
   * @param {*} uri
   * @param {*} callback
   */
  get(uri, callback) {
    if (!uri || !callback) {
      throw new Error("Either 'uri' or a callback function must be given.");
    }

    if (typeof uri !== 'string') {
      throw new TypeError("Argument 'uri' must be a string.");
    }

    if (typeof callback !== 'function') {
      throw new TypeError('The callback function must be a function.');
    }

    this.routes.forEach((route) => {
      if (route.uri === uri) {
        throw new Error(`The uri ${uri} already exists.`);
      }
    });

    const route = { uri, callback };
    this.routes.push(route);
  }

  /**
   * Initialize router
   */
  init() {
    this.routes.some((route) => {
      console.log('Router initiated.');

      const regexUri = RegExp(`^${route.uri}$`);
      const currentPath = window.location.pathname;

      if (currentPath.match(regexUri)) {
        return route.callback.call(this, { path: currentPath });
      }
    });
  }
}

// window.addEventListener("popstate", event => {
//   // Grab the history state id
//   let stateId = event.state.id;
//   // Show clicked id in console (just for fun)
//   console.log("stateId = ", stateId);
//   // Visually select the clicked button/tab/box
//   select_tab(stateId);
//   // Load content for this tab/page
//   load_content(stateId);
// });

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('navbar-anchor').appendChild(navbar);
  document.getElementById('footer-anchor').appendChild(footer);

  const contentAnchor = document.getElementById('content-anchor');

  const router = new Router();

  router.get('/', (request) => {
    contentAnchor.textContent = '';
    document.getElementById('content-anchor').appendChild(home);
  });

  router.get('/about', (request) => {
    contentAnchor.textContent = '';
    document.getElementById('content-anchor').appendChild(about);
  });

  router.get('/labelcopier', (request) => {
    contentAnchor.textContent = '';
    document.getElementById('content-anchor').appendChild(labelcopierContent);

    const urlParams = new URLSearchParams(window.location.search);
    window.accessToken = null;

    if (urlParams.has('auth-success')) {
      if (urlParams.get('auth-success') === 'true') {
        if (urlParams.has('token')) {
          window.accessToken = urlParams.get('token');
          document.querySelectorAll('div.login-first-notice').forEach((e) => {
            e.classList.add('hidden');
          });
        } else {
          const msg = 'Something went wrong with authentication.';
          console.error(msg);
          alert(msg);
        }
      }
      window.history.replaceState({}, document.title, '/' + 'labelcopier');
    }

    labelcopierApp();
  });

  router.init();
});
