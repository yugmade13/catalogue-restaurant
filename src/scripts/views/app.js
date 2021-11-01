/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-underscore-dangle */
/* eslint-disable eol-last */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */

import DrawerInitiator from '../utils/drawer-initiator';

// inisiasi komponen - komponen app shell
class App {
    constructor({ menuOpen, navDrawer, menuClose }) {
        this._menuOpen = menuOpen;
        this._navDrawer = navDrawer;
        this._menuClose = menuClose;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            menuOpen: this._menuOpen,
            navDrawer: this._navDrawer,
            menuClose: this._menuClose,
        });
    }
}

export default App;