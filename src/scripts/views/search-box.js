/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable no-underscore-dangle */

import Search from './pages/search';

class SearchBox {
    constructor({ search, button, content }) {
        this._search = search;
        this._button = button;
        this._content = content;
    }

    async renderPage() {
        this._button.addEventListener('click', () => {
            const loading = document.querySelector('.loading_bg');
            loading.style.display = 'block';
            this._content.innerHTML = Search.render();
            Search.afterRender(this._search.value);
        });
    }
}

export default SearchBox;