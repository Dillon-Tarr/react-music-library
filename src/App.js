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
      searchText: '',
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

  render() {
    return (
      <>
        <NavigationBar initiateSearch={this.initiateSearch} displayAllTracks={this.displayAllTracks}/>
        <hr/>
        <CurrentlyDisplayingMessage messageAfterColon={this.state.messageAfterColon}/>
        <ResultsTable currentTracks={this.state.currentTracks}/>
      </>
    )
  }

  initiateSearch = (searchText) => {
    console.log('searched');
    let newTracks = this.filterAllTracks(searchText);
    this.setState({
      searchText: searchText,
      currentTracks: newTracks,
      messageAfterColon: `results for "${searchText}" (${newTracks.length} results)`
    });
  }

  filterAllTracks = (searchText) => {
    let dataToFilter = this.state.allTracks;
    let filterBy = searchText;
    let filteredData = this.myFilter(dataToFilter, filterBy);
    return filteredData;
  }

  myFilter = (dataToFilter, filterBy) => {
    return dataToFilter.filter((el) => {
      return el["title"].toLowerCase().includes(`${filterBy}`.toLowerCase()) ||
      el["album"].toLowerCase().includes(`${filterBy}`.toLowerCase()) ||
      el["artist"].toLowerCase().includes(`${filterBy}`.toLowerCase()) ||
      el["genre"].toLowerCase().includes(`${filterBy}`.toLowerCase()) ||
      el["releaseDate"].toLowerCase().includes(`${filterBy}`.toLowerCase());
    });
  }

  displayAllTracks = () => {
    this.setState({
      currentTracks: this.state.allTracks,
      searchText: '',
      messageAfterColon: `All Tracks`
    });
  }
}
