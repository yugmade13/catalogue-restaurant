/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable eol-last */

import { itActsAsFavoriteRestaurantModel } from './helpers/contract/favoriteRestaurantContract';
import FavoriteRestaurantdb from '../src/scripts/data/database';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
    afterEach(async () => {
        (await FavoriteRestaurantdb.getAllRestaurant()).forEach(async (restaurant) => {
            await FavoriteRestaurantdb.deleteRestaurant(restaurant.id);
        });
    });

    itActsAsFavoriteRestaurantModel(FavoriteRestaurantdb);
});