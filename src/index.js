/**
 * Entry point of all JavaScript
 */

'use strict';

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

import {
  composeUrlForMakingApiCallToGetUserInfo,
  makeApiCallToGetUserInfo,
  composeUrlForCheckingIfGithubAppIsInstalled,
  apiCallCheckAppInstalled,
} from './apps/labelcopier/src/js/apiCalls';

library.add(faGithub, faTwitter, faEnvelope);
dom.watch();

/**
 * Client-side router
 */
class Router {
  constructor() {
    this.routes = [];
  }

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

  init() {
    // Remove trailing slashes
    const originalUri = window.location.href;
    const newUri = originalUri.replace(/\/+$/, '');
    window.history.replaceState({}, newUri);

    this.routes.some((route) => {
      const regexUri = RegExp(`^${route.uri}\/?$`);
      const currentPath = window.location.pathname;

      if (currentPath.match(regexUri)) {
        return route.callback.call(this, { path: currentPath });
      }
    });
  }
}

const displayAvatar = async () => {
  const urlForMakingApiCallToGetUserInfo = composeUrlForMakingApiCallToGetUserInfo();

  try {
    const userInfoBody = await makeApiCallToGetUserInfo(
      urlForMakingApiCallToGetUserInfo
    );
    const avatarUrl = userInfoBody.avatar_url;
    document.getElementById('avatar').setAttribute('src', avatarUrl);
    document.querySelectorAll('.login-button').forEach((e) => {
      e.classList.add('hidden');
    });
  } catch (err) {
    console.error(err);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('navbar-anchor').appendChild(navbar);
  document.getElementById('footer-anchor').appendChild(footer);
  const contentAnchor = document.getElementById('content-anchor');
  const router = new Router();

  router.get('/', (req) => {
    contentAnchor.textContent = '';
    document.getElementById('content-anchor').appendChild(home);
  });

  router.get('/about', (req) => {
    contentAnchor.textContent = '';
    document.getElementById('content-anchor').appendChild(about);
  });

  router.get('/labelcopier', async (req) => {
    contentAnchor.textContent = '';
    document.getElementById('content-anchor').appendChild(labelcopierContent);

    const urlParams = new URLSearchParams(window.location.search);
    window.accessToken = null;

    if (urlParams.has('token')) {
      window.accessToken = urlParams.get('token');
      window.history.replaceState({}, document.title, '/' + 'labelcopier');
      const accessTokenIsNull = window.accessToken === 'null';

      if (accessTokenIsNull) {
        const msg =
          'Something went wrong with authentication. Please try to login again.';
        console.error(msg);
        alert(msg);
      } else {
        document.querySelectorAll('div.login-first-notice').forEach((e) => {
          e.classList.add('hidden');
        });
      }

      // Check if the corresponding app is installed
      const urlToCheckIfGithubAppIsInstalled = composeUrlForCheckingIfGithubAppIsInstalled();
      const appIsInstalled = await apiCallCheckAppInstalled(
        urlToCheckIfGithubAppIsInstalled
      );

      if (!appIsInstalled) {
        window.location =
          'https://api.badwaterbay.com/apps/labelcopier/install/new';
        return;
      }

      await displayAvatar();
    }

    labelcopierApp();
  });

  router.init();
});
