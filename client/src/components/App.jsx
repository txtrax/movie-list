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
      movies: [],
      search: null,
      watched: false,
      toWatch: false
    }
    this.updateSearch = this.updateSearch.bind(this);
    // Q: somehow filterMovies work without binding
    // this.filterMovies = this.filterMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.updateWatched = this.updateWatched.bind(this);
    this.filterWatchStatus = this.filterWatchStatus.bind(this);
  }

  componentDidMount() {
    let newList = [];

    movieList.forEach((movie, index) => {
      const id = index + 1;
      movie.id = id;
      movie.watched = false;
      newList.push(movie);
    })
    this.setState({movies: newList});
  }

  // input is string of watched/toWatch
  // update watch and toWatch states
  filterWatchStatus(status) {
    if (status === 'watched') {
      let toggle = !this.state.watched;
      this.setState({watched: toggle});
    } else {
      let toggle = !this.state.toWatch;
      this.setState({toWatch: toggle});
    }
  }

  // input: unique id to grab correct movie
  // output: update watch status of props
  updateWatched(id) {
    for (let i = 0; i < this.state.movies.length; i++) {
      const currentMovie = this.state.movies[i];
      if (currentMovie.id === id) {
        // switch value
        currentMovie.watched = !currentMovie.watched;
        // make a copy
        let updatedList = this.state.movies.slice();
        // update the value in movie
        updatedList[i] = currentMovie;
        // update state
        this.setState({movies: updatedList});
      }
    }
  }

  // input movie
  // output: none, but updates state
  addMovie(title) {
    // give each movie and id starting at 1
    const id = this.state.movies.length + 1;
    // keep track of watched status
    let movie = {
      id: id,
      title: title,
      watched: false
    }
    // update the state
    this.setState({movies: [...this.state.movies, movie]});
  }

  updateSearch(search) {
    // anonymous function is not needed because no parameters???
    this.setState({search: search});
    // don't need this
    // this.setState({search: search}, this.filterMovies);
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
    //otherwise, return all movies
    return movies;
  }

  render() {
    console.log(this.state.movies);
    return (
      <div>
        <h1>Movie List</h1>
        <Search updateSearch={this.updateSearch}/>
        <AddMovie addMovies={this.addMovie}/>
        <button onClick={() => this.filterWatchStatus('watched')}>Watched</button>
        <button onClick={() => this.filterWatchStatus('toWatch')}>To Watch</button>
        <Movies
          movies={this.filterMovies()}
          updateWatched={this.updateWatched}
          watched={this.state.watched}
          toWatch={this.state.toWatch}
        />
      </div>
    )
  }
}

export default App;