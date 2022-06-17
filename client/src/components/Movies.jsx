import React from 'react';
import MovieEntry from './MovieEntry.jsx';

const Movies = (props) => {
  let watchedMovies = props.movies.filter(movie => {
    if (movie.watched) {
      return true;
    }
    return false;
  });

  let toWatchMovies = props.movies.filter(movie => {
    if (!movie.watched) {
      return true;
    }
    return false;
  });

  // Bonus: Handle the case of "no movie by that name found" gracefully.
  if (props.movies.length === 0) {
    return <div>No movies found</div>
  }
  // if watched or toWatch states are true
  if (props.watched) {
    return (
      <ul>
        {watchedMovies.map(movie => (
          <MovieEntry
            updateWatched={props.updateWatched}
            key={movie.id}
            movie={movie}
          />
        ))}
      </ul>
    )
  }
  if (props.toWatch) {
    return (
      <ul>
        {toWatchMovies.map(movie => (
          <MovieEntry
            updateWatched={props.updateWatched}
            key={movie.id}
            movie={movie}
          />
        ))}
      </ul>
    )
  }

  // otherwise, pass each movie to MovieEntry component
  return (
    <ul>
      {props.movies.map(movie => (
        <MovieEntry
          updateWatched={props.updateWatched}
          key={movie.id}
          movie={movie}
        />
      ))}
    </ul>
  )
}

export default Movies;