/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-underscore-dangle */
/* eslint-disable eol-last */
/* eslint-disable no-param-reassign */

const DrawerInitiator = {
    init({ menuOpen, navDrawer, menuClose }) {
        menuOpen.addEventListener('click', (event) => {
            this._toggleDrawer({
                event,
                navDrawer,
                menuOpen,
                menuClose,
            });
        });

        menuClose.addEventListener('click', (event) => {
            this._closeDrawer({
                event,
                navDrawer,
                menuOpen,
                menuClose,
            });
        });
    },

    _toggleDrawer({
        event,
        navDrawer,
        menuOpen,
        menuClose,
    }) {
        event.stopPropagation();
        navDrawer.classList.toggle('open');
        menuClose.style.display = 'block';
        menuOpen.style.display = 'none';
    },

    _closeDrawer({
        event,
        navDrawer,
        menuOpen,
        menuClose,
    }) {
        event.stopPropagation();
        navDrawer.classList.toggle('open');
        menuClose.style.display = 'none';
        menuOpen.style.display = 'block';
    },

};

export default DrawerInitiator;