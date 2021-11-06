/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-underscore-dangle */
/* eslint-disable eol-last */
/* eslint-disable no-param-reassign */

const PostCutomerReview = (data) => {
    const reviewList = document.querySelector('#reviewList');
    const dateNow = new Date();
        const options = {
            day: 'numeric',
             month: 'long',
            year: 'numeric',
        };
        const date = dateNow.toLocaleDateString(['ban', 'id'], options);
        const newReview = `
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
                        <p class="review_date">${date}</p>
                    </div>
                </div>
            </div>
        `;

    reviewList.innerHTML += newReview;
};

export default PostCutomerReview;