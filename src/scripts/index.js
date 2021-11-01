/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */

import 'regenerator-runtime'; /* for async await transpile */
import './component/list-component.js';
import '../styles/main.css';
import '../styles/responsive.css';
import dataRes from '../DATA.json';
import App from './views/app';

const listElement = document.querySelector('list-element');
listElement.foods = dataRes.restaurants;

const app = new App({
  menuOpen: document.querySelector('#menu_open'),
  navDrawer: document.querySelector('.nav'),
  menuClose: document.querySelector('#menu_close'),
});
