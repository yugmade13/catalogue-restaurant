/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable eol-last */
/* eslint-disable no-unused-expressions */
/* eslint-disable indent */

import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantdb from '../src/scripts/data/database';

const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Restaurant', () => {
    beforeEach(async () => {
        addLikeButtonContainer();
        await FavoriteRestaurantdb.putRestaurant({ id: 1 });
    });

    afterEach(async () => {
        await FavoriteRestaurantdb.deleteRestaurant(1);
    });

    it('should display unlike widget when the movie has been liked', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: 1,
            },
        });

        expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
    });

    it('should not display like widget when the movie has been liked', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: 1,
            },
        });

        expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
    });

    it('should be able to remove liked movie from the list', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: 1,
            },
        });

        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantdb.getAllRestaurant()).toEqual([]);
    });

    it('should not throw error if the unliked movie is not in the list', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: 1,
            },
        });

        await FavoriteRestaurantdb.deleteRestaurant(1);

        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantdb.getAllRestaurant()).toEqual([]);
    });
});