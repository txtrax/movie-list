import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // pass data up to parent
    this.props.updateSearch(this.state.query);
    // reset the state
    this.setState({query: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your poison:
          <input
            name='search'
            placeholder='search'
            type='text'
            value={this.state.query}
            onChange={this.handleChange}
          />
        </label>
        <button>Go</button>
      </form>
    )
  }
}

export default Search;