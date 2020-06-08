import navbar from '/components/navbar.js';
import loginCard from './components/loginCard.js';
import copyFromCard from './components/copyFromCard.js';
import managementCard from './components/managementCard.js';
import loadingModal from './components/loadingModal.js';
import app from './js/app.js';

const mainContent = () => {
  return `
    <div id="content" class="container">
      <h1>GitHub Label Manager Plus</h1>
      <div class="row">
        <div class="col-12 col-lg-4">
          ${loginCard()}
          ${copyFromCard()}
        </div>
        <div class="col-12 col-lg-8">
          ${managementCard()}
        </div>
      </div>
    </div><!-- /container -->
    ${loadingModal()}
  `;
};

document.getElementById('navbar-anchor').innerHTML += navbar();
document.getElementById('content-anchor').innerHTML += mainContent();
app();
