import React, { Component } from 'react'
import axios from 'axios'
import NavigationBar from './components/NavigationBar/NavigationBar';
import './App.css';
import CurrentlyDisplayingMessage from './components/CurrentlyDisplayingMessage/CurrentlyDisplayingMessage';
import ResultsTable from './components/ResultsTable/ResultsTable';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allTracks: [],
      currentTracks: [],
      displayAllTracks: true,
      searchText: null,
      messageAfterColon: `All Tracks`
    };
  }

  componentDidMount(){
    axios.get('http://www.devcodecampmusiclibrary.com/api/music')
  .then((response) => {
    this.setState({
      allTracks: response.data,
      currentTracks: response.data
    });
  })
  .catch((error) => {
    console.log(error);
  })
  }

  render(){
    return (
      <>
        <NavigationBar />
        <hr/>
        <CurrentlyDisplayingMessage messageAfterColon={this.state.messageAfterColon}/>
        <ResultsTable currentTracks={this.state.currentTracks}/>
      </>
    )
  };
}
