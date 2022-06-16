import React from 'react';
import Movies from './Movies.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

var movieList = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: movieList,
      search: null
    }
    this.updateSearch = this.updateSearch.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  // input movie
  // output: none, but updates state
  addMovie(movie) {
    let { movies } = this.state;

    movies.push(movie);

    this.setState({movie: movies});
  }

  updateSearch(search) {
    this.setState({search: search}, this.filterMovies);
  }

  //have this function filter movies intos Movies component
  filterMovies() {
    const { movies, search } = this.state;
    //if there is a search,
      //pass filtered array of movies
    if (search) {
      return movies.filter((movie) => {
        if (movie.title.toLowerCase().includes(search.toLowerCase())) {
          return true;
        }
        return false;
      })
    }
    //otherwise return all movies
    return movies;
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <Search updateSearch={this.updateSearch}/>
        <AddMovie addMovies={this.addMovie}/>
        <Movies movies={this.filterMovies()} />
      </div>
    )
  }
}

export default App;