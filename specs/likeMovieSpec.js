/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable eol-last */
/* eslint-disable no-unused-expressions */
/* eslint-disable indent */

import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantdb from '../src/scripts/data/database';

describe('Liking A Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(() => {
        addLikeButtonContainer();
    });

    it('should show the like button when the restaurant has not been liked before', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: 1,
            },
        });

        expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
    });

    it('should not show the unlike button when the restaurant has not been liked before', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: 1,
            },
        });

        expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
    });

    it('should be able to like the restaurant', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: 1,
            },
        });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const restaurant = await FavoriteRestaurantdb.getRestaurant(1);

        expect(restaurant).toEqual({ id: 1 });

        FavoriteRestaurantdb.deleteRestaurant(1);
    });

    it('should not add a restaurant again when its already liked', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: 1,
            },
        });

        // Tambahkan film dengan ID 1 ke daftar film yang disukai
        await FavoriteRestaurantdb.putRestaurant({ id: 1 });
        // Simulasikan pengguna menekan tombol suka film
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        // tidak ada film yang ganda
        expect(await FavoriteRestaurantdb.getAllRestaurant()).toEqual([{ id: 1 }]);

        FavoriteRestaurantdb.deleteRestaurant(1);
    });

    // menggunakan metode xit, bukan it
    xit('should not add a restaurant when it has no id', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {},
        });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantdb.getAllRestaurant()).toEqual([]);
    });
});