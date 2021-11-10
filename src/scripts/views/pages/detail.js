/* eslint-disable linebreak-style */
/* eslint-disable object-shorthand */
/* eslint-disable no-alert */
/* eslint-disable eqeqeq */
/* eslint-disable eol-last */
/* eslint-disable indent */

import DbRestoSource from '../../data/dbresto-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestaurantDetailTemplate, createRestaurantReviewTemplate } from '../templates/template-creator';

const Detail = {
    async render() {
        return `
        <div id="restoDetail" class="resto_detail"></div>
        <div class="review_customers">
            <h4 class="review_title">Customers Review</h4>
            <div id="reviewList" class="review_list"></div>
        </div>
        <div id="form" class="form">
            <textarea name="text-area" id="textArea" class="textarea" placeholder="Comment.."></textarea>
            <div class="form_submit">
                <input type="text" name="text" id="textName" class="textName" placeholder="Enter your name">
                <button id="submitReview" class="submitReview" type="submit">Send</button>
            </div>
        </div>
        <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender() {
        const loading = document.querySelector('.loading_bg');
        loading.style.display = 'block';

        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await DbRestoSource.detailResto(url.id);
        const restaurantDetail = document.querySelector('#restoDetail');
        restaurantDetail.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);

        const reviewList = document.querySelector('#reviewList');
        restaurant.restaurant.customerReviews.forEach((item) => {
            reviewList.innerHTML += createRestaurantReviewTemplate(item);
            loading.style.display = 'none';
        });

        const inputReview = document.querySelector('#textArea');
        const inputName = document.querySelector('#textName');
        const submitReview = document.querySelector('#submitReview');

        submitReview.addEventListener('click', async () => {
            if (inputName.value == 0 || inputReview.value == 0) {
                alert('Input anda belum lengkap!');
            } else {
                const data = {
                    id: url.id,
                    name: inputName.value,
                    review: inputReview.value,
                };
                await DbRestoSource.postReview(data);

                inputName.value = '';
                inputReview.value = '';
            }
        });

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant,
        });
    },
};

export default Detail;