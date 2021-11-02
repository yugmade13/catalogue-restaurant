/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable indent */

import DbRestoSource from '../../data/dbresto-source';
import UrlParser from '../../routes/url-parser';

const Detail = {
    async render() {
        return `
            <h3 id="maincontent" class="latest_label">Detail</h3>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await DbRestoSource.detailResto(url.id);
        console.log(restaurant);
    },
};

export default Detail;