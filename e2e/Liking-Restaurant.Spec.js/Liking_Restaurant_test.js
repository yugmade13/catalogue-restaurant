/* eslint-disable no-undef */
/* eslint-disable indent */

const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
    I.amOnPage('/');
    I.seeElement('.item_title a');
    const firstRestaurant = locate('.item_title a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.content_item');
    const likedRestaurantTitle = await I.grabTextFrom('.item_title');

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
    I.amOnPage('/');
    I.seeElement('.item_title a');
    I.click(locate('.item_title a').first());

    I.seeElement('#likeButton');
    I.click('#likeButton');

    // menuju page favorite
    I.amOnPage('/#/favorite');
    I.seeElement('.item_title a');
    const firstLikedRestaurant = locate('.item_title a').first();
    const firstLikedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurant);
    I.click(firstLikedRestaurant);

    // menuju page detail untuk melakukan unlike
    I.seeElement('.resto_title');
    const likedRestaurantTitle = await I.grabTextFrom('.resto_title');
    assert.strictEqual(firstLikedRestaurantTitle, likedRestaurantTitle);

    I.seeElement('[aria-label="unlike this restaurant"]');
    I.click('[aria-label="unlike this restaurant"]');

    // menuju page favorit untuk memastikan berhasil melakukan unlike
    I.amOnPage('/#/favorite');
    I.see('Your Favorite Restaurant', '.latest_label');
});
