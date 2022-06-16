import React from 'react';

const MovieEntry = ({ movie, updateWatched }) => {
  if (movie.watched) {
    return (
      <li>
        {movie.title}
        <button onClick={() => updateWatched(movie.id)}>Watched</button>
      </li>
    )
  } else {
    return (
      <li>
        {movie.title}
        <button onClick={() => updateWatched(movie.id)}>To Watch</button>
      </li>
    )
  }
}

export default MovieEntry;