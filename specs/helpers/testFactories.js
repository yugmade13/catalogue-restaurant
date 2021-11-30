/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable eol-last */
/* eslint-disable indent */

import LikeButtonInitiator from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestaurantdb from '../../src/scripts/data/database';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
    await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavoriteRestaurantdb,
        restaurant,
    });
};

export { createLikeButtonPresenterWithRestaurant };