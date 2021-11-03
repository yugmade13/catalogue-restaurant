/* eslint-disable linebreak-style */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-else-return */
/* eslint-disable eol-last */
/* eslint-disable indent */

import API_ENDPOINT from '../globals/api-endpoint';

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
}

export default DbRestoSource;