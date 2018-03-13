import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';
import { CardMedia } from 'material-ui/Card';

import './MovieDialog.css';

export default class MovieDialog extends React.Component {
  render() {
    const { movie, handleClose } = this.props;
    let title = null;
    let content = null;

    if (movie) {
      title = <DialogTitle id="form-dialog-title">{movie.title}</DialogTitle>;

      content = (
        <DialogContent>
          <DialogContentText>{movie.overview}</DialogContentText>
          <CardMedia
            className="movie-detail-image"
            image={`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
            title={movie.title}
          />
          <TextField
            label="Released on"
            disabled
            value={movie.release_date}
            fullWidth
          />
          <TextField
            label="Popularity"
            disabled
            value={movie.popularity}
            fullWidth
          />
          <TextField
            label="Vote average"
            disabled
            value={movie.vote_average}
            fullWidth
          />
          <TextField
            label="Vote count"
            disabled
            value={movie.vote_count}
            fullWidth
          />
        </DialogContent>
      );
    }
    return (
      <Dialog
        open={!!movie}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {title}
        {content}
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
