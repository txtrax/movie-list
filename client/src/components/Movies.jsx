import React from 'react';
import MovieEntry from './MovieEntry.jsx';

// DRY... REFACTOR THIS MORE? IDK
const Movies = (props) => {
  // Bonus: Handle the case of "no movie by that name found" gracefully.
  if (props.movies.length === 0) {
    return <div>No movies found</div>
  }

  // if watched and toWatch states are true
  if (props.watched && props.toWatch) {
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

  // next two conditional statements for if watched or toWatch states are true
  } else if (props.watched) {
    return (
      <ul>
        {props.movies.filter(movie => {
          if (movie.watched) {
            return true;
          }
          return false;
        }).map(movie => (
          <MovieEntry
            updateWatched={props.updateWatched}
            key={movie.id}
            movie={movie}
          />
        ))}
      </ul>
    )

  } else if (props.toWatch) {
    return (
      <ul>
        {props.movies.filter(movie => {
          if (!movie.watched) {
            return true;
          }
          return false;
        }).map(movie => (
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