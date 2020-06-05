import common from '../common.js'
import loginCard from './components/loginCard.js';
import copyFromCard from './components/copyFromCard.js';
import managementCard from './components/managementCard.js';
import loadingModal from './components/loadingModal.js';
import app from './js/app.js';

const styles = () => {
  return `
    <link href="css/colorpicker.css" rel="stylesheet" />
    <link href="css/app.min.css" rel="stylesheet" />
  `;
};

const title = () => `<title>GitHub Label Manager Plus | Badwater Bay</title>`;

const scripts = () => `<script src="js/colorpicker.js"></script>`;

const mainContent = () => {
  return `
    <div id="content" class="container">
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

const loadFirst = async () => {
  common();
  document.getElementById('head-anchor').innerHTML += styles();
  document.getElementById('head-anchor').innerHTML += title();
  document.getElementById('content-anchor').innerHTML += mainContent();
  document.getElementById('footer-anchor').innerHTML += scripts();
  return 1;
};
loadFirst().then(() => { app(); });
