/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable indent */

import FavoriteRestaurantdb from '../../data/database';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
    async render() {
        return `
            <h3 id="maincontent" class="latest_label">Your Favorite Restaurant</h3>
            <div id="favoriteList" class="content_list"></div>
        `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestaurantdb.getAllRestaurant();
        const favoriteList = document.querySelector('#favoriteList');
        restaurants.forEach((restaurant) => {
            favoriteList.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

export default Favorite;