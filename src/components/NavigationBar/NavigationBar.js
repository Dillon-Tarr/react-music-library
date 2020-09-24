import React, { Component } from 'react'
import Search from './Search/Search'
import Title from './Title/Title'
import ViewAllTracks from './ViewAllTracks/ViewAllTracks'

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="flex-container" id="navigation-bar">
        <Title />
        <Search />
        <ViewAllTracks />
      </div>
    );
  }
}
