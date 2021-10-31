/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */

import 'regenerator-runtime'; /* for async await transpile */
import './component/list-component.js';
import '../styles/main.css';
import '../styles/responsive.css';
import dataRes from '../DATA.json';

const main = () => {
  const menuOpen = document.getElementById('menu_open');
  const menuClose = document.getElementById('menu_close');
  const nav = document.querySelector('.nav');

  const listElement = document.querySelector('list-element');
  listElement.foods = dataRes.restaurants;

  menuOpen.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuClose.style.display = 'block';
    menuOpen.style.display = 'none';
  });

  menuClose.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuClose.style.display = 'none';
    menuOpen.style.display = 'block';
  });
};

document.addEventListener('DOMContentLoaded', main);
