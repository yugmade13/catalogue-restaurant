/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable eol-last */
/* eslint-disable no-unused-expressions */
/* eslint-disable indent */

import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';

describe('Like a Movie', () => {
    it('should show the like button when the movie has not been liked before', async () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: 1,
            },
        });
    });
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();

    it('should not show the unlike button when the movie has not been liked before', async () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: 1,
            },
        });
    });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
});