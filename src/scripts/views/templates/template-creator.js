/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */

/* eslint-disable import/prefer-default-export */

import API_ENDPOINT from '../../globals/api-endpoint';

const createConnectionInternetTemplate = () => `
    <h3 class="latest_label">Cek Koneksi Internet</h3>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="content_item">
        <img class="img_item" src="${API_ENDPOINT.IMAGE}${restaurant.pictureId}" alt="Restaurant ${restaurant.name}">
        <p class="rating_item">${restaurant.rating} <span><i class="fas fa-star"></i></span></p>
        <div class="item_body">
            <h4 class="item_title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h4>
            <p class="item_city">Kota ${restaurant.city}</p>
            <p class="item_description">${restaurant.description}</p>
        </div>
    </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <img class="resto_image" src="${API_ENDPOINT.IMAGE}${restaurant.pictureId}" alt="${restaurant.name}">
    <div class="resto_body">
        <div class="resto_info">
            <h2 class="resto_title">${restaurant.name}</h2>
            <p class="resto_address">${restaurant.address}, <span class="resto_city">Kota ${restaurant.city}</span></p>
            <p class="resto_description">${restaurant.description}</p>
        </div>
        <div class="resto_overview">
            <div class="resto_list_food">
                <h3 class="food_title">Menu Makanan</h3>
                <ul class="list_food">
                    ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
                </ul>
            </div>
            <div class="resto_list_drink">
                <h3 class="drink_title">Menu Minuman</h3>
                <ul class="list_drink">
                ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
                </ul>
            </div>
        </div>
    </div>
`;

const createRestaurantReviewTemplate = (data) => `
    <div class="review_item">
        <i class="avatar fas fa-user-circle"></i>
        <div class="review_overview">
            <div class="review_info">
                <h5 class="review_name">${data.name}</h5>
            <p class="review_description">${data.review}</p>
            </div>
            <div class="review_extra">
                <a class="like" href="#">Like</a>
                <a class="reply" href="#">Reply</a>
                <p class="review_date">${data.date}</p>
            </div>
        </div>
    </div>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this movie" id="likeButton" class="like">
        <i class="far fa-heart" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
    createRestaurantItemTemplate,
    createRestaurantDetailTemplate,
    createRestaurantReviewTemplate,
    createConnectionInternetTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
};