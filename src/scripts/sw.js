/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable no-restricted-globals */
/* eslint-disable indent */

self.addEventListener('install', (event) => {
    console.log('Installing service worker');
});

self.addEventListener('activate', (event) => {
    console.log('Activate service worker');
});

self.addEventListener('fetch', (event) => {
    console.log(event.request);

    event.respondWith(fetch(event.request));
});