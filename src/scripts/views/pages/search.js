/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable eol-last */

import DbRestoSource from '../../data/dbresto-source';
import { createConnectionInternetTemplate, createRestaurantItemTemplate } from '../templates/template-creator';

const Search = {
    render() {
        return `
            <h3 id="maincontent" class="latest_label">Results :</h3>
            <div id="listResto" class="content_list"></div>
        `;
    },

    async afterRender(keyword) {
        const restaurantContainer = document.querySelector('#listResto');
        const resultText = document.querySelector('#maincontent');
        const loading = document.querySelector('.loading_bg');
        try {
            const results = await DbRestoSource.searchResto(keyword);
                results.forEach((result) => {
                restaurantContainer.innerHTML += createRestaurantItemTemplate(result);
                loading.style.display = 'none';
            });
            window.scrollTo(0, 0);
        } catch (error) {
            resultText.innerHTML = createConnectionInternetTemplate();
            loading.style.display = 'none';
        }
    },
};

export default Search;