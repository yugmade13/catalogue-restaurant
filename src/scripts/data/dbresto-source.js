/* eslint-disable linebreak-style */
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
}

export default DbRestoSource;