import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // this.setState({movie: event.target.value});
    // GOOD PRACTICE: form name is same as state name
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addMovies(this.state.movie);
    this.setState({movie: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Add a movie:
          <input
            name='movie'
            placeholder='movie title'
            type='text'
            value={this.state.movie}
            onChange={this.handleChange}
          />
        </label>
        <button>Add</button>
      </form>
    )
  }
}

export default AddMovie;