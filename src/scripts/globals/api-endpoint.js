/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable eol-last */

import CONFIG from './config';

const API_ENDPOINT = {
    LIST: `${CONFIG.BASE_URL}list`,
    IMAGE: `${CONFIG.BASE_URL}images/medium/`,
    DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;