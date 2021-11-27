/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-else-return */
/* eslint-disable eol-last */
/* eslint-disable indent */

import API_ENDPOINT from '../globals/api-endpoint';
import PostCutomerReview from '../utils/post-customer-review';

class DbRestoSource {
    static async listResto() {
        const response = await fetch(API_ENDPOINT.LIST);
        const resJson = await response.json();
        return resJson.restaurants;
    }

    static async detailResto(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }

    static searchResto(keyword) {
        return fetch(`${API_ENDPOINT.SEARCH}${keyword}`)
            .then((response) => response.json())
            .then((resJson) => {
                if (resJson.founded > 0) {
                    return Promise.resolve(resJson.restaurants);
                } else {
                    return Promise.reject(`${keyword} not found`);
                }
            });
    }

    static async postReview(data) {
        fetch(API_ENDPOINT.POST_REVIEW, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((resJson) => {
            if (resJson.message === 'success') {
                PostCutomerReview(data);
            }
        })
        .catch((error) => alert(`${error} Gagal input!`));
    }
}

export default DbRestoSource;