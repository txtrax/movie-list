import React from 'react';
import MovieEntry from './MovieEntry.jsx';

const Movies = (props) => {
  // Bonus: Handle the case of "no movie by that name found" gracefully.
  if (props.movies.length === 0) {
    return <div>No matches found</div>
  }
  // otherwise, pass each movie to MovieEntry component
  return (
    <ul>
    {props.movies.map(movie => (
      <MovieEntry
        key={movie.title}
        movie={movie}
      />))}
  </ul>
  )
}

export default Movies;