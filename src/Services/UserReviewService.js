import Guid from 'guid';
import imgGen from '@dudadev/random-img'

class UserReviewService {

    static getReviews(){
        let reviews = localStorage.getItem('userReviews');
        if (reviews === null){
            return {};
        }
        return JSON.parse(reviews)
    }

    static async addReview(userName, comment){
        let reviews = UserReviewService.getReviews();
        return imgGen().then(avatarURL => {
            let review = {
                userName: userName,
                comment: comment,
                avatarURL:  avatarURL
            };
            let id = Guid.raw();
            reviews[id] = review;
            localStorage.setItem('userReviews', JSON.stringify(reviews));
        });

    };
    static updateReview(){
        return ''
    };
    static deleteReview(id){
        let reviews = UserReviewService.getReviews();
        delete reviews[id];
        localStorage.setItem('userReviews', JSON.stringify(reviews));
    };
}

export default UserReviewService;
