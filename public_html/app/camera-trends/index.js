import navbar from '/components/navbar.js';
import app from './js/app.js';

const mainContent = () => {
  return `
    <div class="container mainContent">
      <h1>Camera Brand Search Trends of Canon, Nikon and Sony</h1>
        <div class="row">
          <div class="col-12 mb-3 col-md-10">
            <p>We wrote a piece of code in Python to scrape Google trends data. Here we present the data.</p>
            <p>We are interested in the search trends of 3 major camera brands (Canon, Nikon and Sony).</p>
            <!-- <p>We further subdivide cameras into 3 keywords: camera (in general), DSLR and mirrorless.<p> -->
            <p>Hence, we scraped the Google search trend data of 9 sets of keywords from January 2006 to March 2020 at a monthly resolution:</p>
            <ul>
              <li>"'Canon' 'camera'"</li>
              <li>"'Nikon' 'camera'"</li>
              <li>"'Sony' 'camera'"</li>
              <li>"'Canon' 'dslr'"</li>
              <li>"'Nikon' 'dslr'"</li>
              <li>"'Sony' 'dslr'"</li>
              <li>"'Canon' 'mirrorless'"</li>
              <li>"'Nikon' 'mirrorless'"</li>
              <li>"'Sony' 'mirrorless'"</li>
            </ul>
            <p>The inner single quotes are used to force Google not to omit either keyword during scraping.</p>
            <div class="text-center">
              <h3>Google search trends of "camera" by brand</h3>
            </div>
            <div id="plot-camera"></div>
            <div class="text-center">
              <h3>Google search trends of "DSLR" by brand</h3>
            </div>
            <div id="plot-dslr"></div>
            <div class="text-center">
              <h3>Google search trends of "mirrorless" by brand</h3>
            </div>
            <div id="plot-mirrorless"></div>
            <div class="text-center">
              <h3>Annual revenues of camera divisions by brand</h3>
            </div>
            <div id="plot-revenue"></div>
            <p class="footnote">This is work in progress...</p>
            <!-- <div id="plot-map"></div> -->
          </div>
      </div><!--row-->
    </div><!--maincontent-->
  `
};

document.getElementById('navbar-anchor').innerHTML += navbar();
document.getElementById('content-anchor').innerHTML += mainContent();
app();
