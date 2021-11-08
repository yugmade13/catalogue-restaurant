/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable indent */

import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = async () => {
    if ('serviceWorker' in navigator) {
        await runtime.register();
        return;
    }

    console.log('Browser tidak mendukung service worker');
};

export default swRegister;