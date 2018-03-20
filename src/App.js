import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Input, { InputAdornment } from 'material-ui/Input';

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
  state = { movies: [], selectedMovie: null, searchText: '' };

  selectMovie = movie => this.setState({ selectedMovie: movie });
  clearMovie = () => this.setState({ selectedMovie: null });

  searchTextChanged = e => this.setState({ searchText: e.target.value });

  search = async e => {
    e.preventDefault();

    const { searchText } = this.state;

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}`
    );
    const json = await response.json();
    this.setState({ movies: json.results });
  };

  async componentDidMount() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
    );
    const json = await response.json();
    this.setState({ movies: json.results });
  }

  render() {
    const { movies, selectedMovie, searchText } = this.state;

    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="title" color="inherit" className="title">
              Top Movies
            </Typography>
            <form onSubmit={this.search}>
              <Input
                type="search"
                value={searchText}
                onChange={this.searchTextChanged}
                startAdornment={
                  <InputAdornment>
                    <span role="img" aria-label="Search">
                      🔍
                    </span>
                  </InputAdornment>
                }
              />
            </form>
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
