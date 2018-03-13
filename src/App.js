import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import './App.css';
import apiKey from './apiKey';

import MovieCard from './components/MovieCard';
import MovieDialog from './components/MovieDialog';

const styles = {
  root: {
    flexGrow: 1
  }
};

class App extends Component {
  state = { movies: [], selectedMovie: null };

  selectMovie = movie => this.setState({ selectedMovie: movie });
  clearMovie = () => this.setState({ selectedMovie: null });

  async componentDidMount() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
    );
    const json = await response.json();
    this.setState({ movies: json.results });
  }

  render() {
    const { movies, selectedMovie } = this.state;

    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Top Movies
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="movies">
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              selectMovie={this.selectMovie}
            />
          ))}
        </div>
        <MovieDialog movie={selectedMovie} handleClose={this.clearMovie} />
      </div>
    );
  }
}

export default withStyles(styles)(App);
