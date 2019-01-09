import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import UserReviewService from '../../../Services/UserReviewService'
import TrashIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'

export class Review extends Component {
    removeReview = () => {
        UserReviewService.deleteReview(this.props.review.id);
        this.props.updateReviews();
    };
    render() {
        const {userName, comment, avatarURL} = this.props.review;
        return (
                <Grid item>
                    <Paper>
                        <Grid container>
                            <Grid item xs={4}>
                                <img src={avatarURL}/>
                            </Grid>
                            <Grid item xs={7}>
                                <h3>{userName}</h3>
                                <small>{comment}</small>
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton  onClick={this.removeReview}>
                                    <TrashIcon/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
        )
    }
}
