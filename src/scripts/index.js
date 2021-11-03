/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */

import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/detail.css';
import '../styles/responsive.css';
import App from './views/app';
import SearchBox from './views/search-box';

const app = new App({
  menuOpen: document.querySelector('#menu_open'),
  navDrawer: document.querySelector('.nav'),
  menuClose: document.querySelector('#menu_close'),
  content: document.querySelector('.content'),
});

const searchBox = new SearchBox({
  search: document.querySelector('#search'),
  button: document.querySelector('#submit'),
  content: document.querySelector('.content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
  window.scrollTo(0, 0);
});

window.addEventListener('load', () => {
  app.renderPage();
  searchBox.renderPage();
});