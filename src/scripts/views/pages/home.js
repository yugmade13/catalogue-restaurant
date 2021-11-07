/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable indent */

import DbRestoSource from '../../data/dbresto-source';
import { createConnectionInternetTemplate, createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
    async render() {
        return `
            <div class="hero">
                <div class="hero_inner">
                    <h2 class="hero_title">Resto_</h2>
                    <p class="hero_tagline">Cari tempat nongkrong yang nyaman untuk ngoding?<br>Cari disini!</p>
                </div>
            </div>
            <h3 id="maincontent" class="latest_label">Explore Resto_</h3>
            <div id="listResto" class="content_list"></div>
        `;
    },

    async afterRender() {
        const restaurantContainer = document.querySelector('#listResto');
        const loading = document.querySelector('.loading_bg');
        loading.style.display = 'block';

        try {
            const restaurants = await DbRestoSource.listResto();
            restaurants.forEach((resto) => {
                restaurantContainer.innerHTML += createRestaurantItemTemplate(resto);
                loading.style.display = 'none';
            });
        } catch (error) {
            restaurantContainer.innerHTML = createConnectionInternetTemplate();
            loading.style.display = 'none';
        }
    },
};

export default Home;