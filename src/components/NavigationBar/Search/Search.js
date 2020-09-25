import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div id="search">
        <input id="search-box" type="text" placeholder="Type here to search"></input>&nbsp;
        <button id="search-button">Search</button>
      </div>
    )
  }
}
