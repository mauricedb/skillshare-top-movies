import React from 'react';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import './MovieCard.css';

// {
//   vote_count: 9595,
//   id: 278,
//   video: false,
//   vote_average: 8.5,
//   title: 'The Shawshank Redemption',
//   popularity: 33.440096,
//   poster_path: '/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg',
//   original_language: 'en',
//   original_title: 'The Shawshank Redemption',
//   genre_ids: [18, 80],
//   backdrop_path: '/xBKGJQsAIeweesB79KC89FpBrVr.jpg',
//   adult: false,
//   overview:
//     'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
//   release_date: '1994-09-23'
// };

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Card className="movie-card">
        <CardMedia
          className="movie-image"
          image={`http://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
          title={movie.title}
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            {movie.title}
          </Typography>
          <Typography component="p">{movie.overview}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default MovieCard;
