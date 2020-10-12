import React, { Component } from 'react'

export default class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchBoxValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({searchBoxValue: event.target.value});
  }

  render() {
    return (
      <div id="search">
        <input id="search-box" type="text" placeholder="Type here to search" onChange={this.handleChange}></input>&nbsp;
        <button id="search-button" onClick={() => {this.props.initiateSearch(this.state.searchBoxValue)}}>Search</button>
      </div>
    )
  }
}
