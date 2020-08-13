/**
 * Entry point of this single web app
 */

// class Router {
//   constructor() {
//     this.routes = [];
//   }

//   get(uri, callback) {
//     if (!uri || !callback) {
//       throw new Error("Either 'uri' or a callback function must be given.");
//     }

//     if (typeof uri !== 'string') {
//       throw new TypeError("Argument 'uri' must be a string.");
//     }

//     if (typeof callback !== 'function') {
//       throw new TypeError('The callback function must be a function.');
//     }

//     this.routes.forEach((route) => {
//       if (route.uri === uri) {
//         throw new Error(`The uri ${uri} already exists.`);
//       }
//     });

//     const route = { uri, callback };
//     this.routes.push(route);
//     console.log(`Route ${route} pushed`);
//   }

//   init() {
//     this.routes.some((route) => {
//       const regexUri = RegExp(`^${route.uri}$`);

//       const currentPath = window.location.pathname;
//       console.log(`Current path is: ${currentPath}`);

//       if (currentPath.match(regexUri)) {
//         return route.callback.call(this, { path: currentPath });
//       }
//     });
//   }
// }

// // document.getElementById('navbar-anchor').appendChild(navbar);
// // .appendChild(home);
// // document.getElementById('footer-anchor').appendChild(footer);

// const app = () =>
//   document.addEventListener('DOMContentLoaded', () => {
//     const router = new Router();

//     router.get('/', (request) => {
//       console.log('Route / activated.');
//       console.log(request.path);
//     });

//     router.get('/about', (request) => {
//       console.log('Route /about activated.');
//       console.log(request.path);
//     });

//     router.init();

//     // const contentAnchor = document.getElementById('content-anchor');
//     // let pathSelected = window.location.pathname;
//     // console.log(pathSelected);
//     // contentAnchor.appendChild(routes[pathSelected]);

//     console.log('App activated.');
//   });

const app = () => {
  console.log('App() activeted.');
};

export default app;
