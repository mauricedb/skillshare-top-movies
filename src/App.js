import React, { Component } from 'react';
import './App.css';
import apiKey from './apiKey';

import MovieCard from './components/MovieCard';

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
      <div className="App">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default App;
