import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import './App.css';
import apiKey from './apiKey';

import MovieCard from './components/MovieCard';

const styles = {
  root: {
    flexGrow: 1
  }
};

class App extends Component {
  state = { movies: [] };

  async componentDidMount() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
    );
    const json = await response.json();
    this.setState({ movies: json.results });
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Top Movies
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="App">
          {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
