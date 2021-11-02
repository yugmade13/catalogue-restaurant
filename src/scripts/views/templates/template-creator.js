/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */

/* eslint-disable import/prefer-default-export */

import API_ENDPOINT from '../../globals/api-endpoint';

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
    
`;

export { createRestaurantItemTemplate };