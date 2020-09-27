import React from 'react'
import Search from './Search/Search'
import Title from './Title/Title'
import ViewAllTracks from './ViewAllTracks/ViewAllTracks'

export default function NavigationBar(props) {
    return (
      <div className="flex-container" id="navigation-bar">
        <Title />
        <Search initiateSearch={props.initiateSearch}/>
        <ViewAllTracks displayAllTracks={props.displayAllTracks}/>
      </div>
    )
}
