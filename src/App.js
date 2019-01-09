import React, { Component } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {ReviewsLayout} from "./components/ReviewsLayout/ReviewsLayout";


class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              User Reviews
            </Typography>
          </Toolbar>
        </AppBar>
        <ReviewsLayout/>
      </div>
    );
  }
}

export default App;
