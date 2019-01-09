import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {ReviewForm} from './ReviewForm/ReviewForm';
import {Review} from "./Review/Review";
import UserReviewService from '../../Services/UserReviewService'
import * as s from './ReviewLayout.module.css'

export class ReviewsLayout extends Component {
    state = {reviews: {}};

    getReviews = () => {
        let reviews = UserReviewService.getReviews();
        this.setState({reviews: reviews});
    }

    componentDidMount(){
        this.getReviews()
    };

    render() {
        const {reviews} = this.state;
        return (
            <div className={s.root}>
            <Grid  container
                   direction="row"
                   justify="center"
                   alignItems="center"
                   spacing={120}
            >
                    <Grid item xs={5}>
                            {
                                Object.keys(reviews).map((key) => {
                                    let review = reviews[key];
                                    review.id = key;
                                    return <Review key={key} review={review} updateReviews={this.getReviews}/>
                                })
                            }
                            <ReviewForm updateReviews={this.getReviews} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}
