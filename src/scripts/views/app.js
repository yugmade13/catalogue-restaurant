/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable class-methods-use-this */
/* eslint-disable indent */
/* eslint-disable no-underscore-dangle */
/* eslint-disable eol-last */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */

import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

// inisiasi komponen - komponen app shell
class App {
    constructor({ menuOpen, navDrawer, menuClose, content }) {
        this._menuOpen = menuOpen;
        this._navDrawer = navDrawer;
        this._menuClose = menuClose;
        this._content = content;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            menuOpen: this._menuOpen,
            navDrawer: this._navDrawer,
            menuClose: this._menuClose,
        });
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
    }
}

export default App;