import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'
import * as s from './ReviewForm.module.css'
import UserReviewService from '../../../Services/UserReviewService'


export class ReviewForm extends Component {
    state = {userName: '', comment: ''};

    handelSubmit = async (event) => {
        event.preventDefault();
        await UserReviewService.addReview(this.state.userName, this.state.comment);
        this.props.updateReviews();
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Paper>
                        <form onSubmit={this.handelSubmit}>
                            <Grid container
                                  direction="row"
                                  justify="space-between"
                                  alignItems="center">
                                <Grid item>
                                    <Grid item>
                                        <TextField
                                            className={s.grow}
                                            id="userName"
                                            label="user name"
                                            value={this.state.userName}
                                            onChange={this.handleChange('userName')}
                                            margin="normal"
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            id="comment"
                                            label="comment"
                                            value={this.state.comment}
                                            onChange={this.handleChange('comment')}
                                            multiline
                                            margin="normal"
                                        />
                                    </Grid>
                                    <Grid item>
                                        <IconButton onClick={this.handelSubmit}>
                                            <AddIcon/>
                                        </IconButton>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}
