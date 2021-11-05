/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable indent */

import DbRestoSource from '../../data/dbresto-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
    async render() {
        return `
        <div id="restoDetail" class="resto_detail"></div>
        <div id="form" class="form">
            <textarea name="text-area" id="textArea" class="textarea" placeholder="Comment.."></textarea>
            <div class="form_submit">
                <input type="text" name="text" id="textName" class="textName" placeholder="Enter your name">
                <input id="submitReview" class="submitReview" type="submit" value="Submit">
            </div>
        </div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await DbRestoSource.detailResto(url.id);
        const restaurantDetail = document.querySelector('#restoDetail');
        restaurantDetail.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);
    },
};

export default Detail;