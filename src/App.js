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
      searchText: '',
      messageAfterColon: `All Tracks`
    };
  }

  componentDidMount(){
    axios.get('http://www.devcodecampmusiclibrary.com/api/music')
    .then((response) => {
      console.log(response.data);
      this.setState({
        allTracks: response.data,
        currentTracks: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }

  preRender(){
    if (this.state.searchText === '') {
      if(this.state.displayAllTracks = false){
        this.setState({
          displayAllTracks: true,
          messageAfterColon: 'All Tracks'
        });
      }
    }
    else if (this.state.searchText !== ''){
      if(this.state.displayAllTracks = true){
        this.setState({
          displayAllTracks: false,
          messageAfterColon: `results for ${this.state.searchText}`
        });
      }
    }
  }

  render() {
    return (
      <>
        <NavigationBar initiateSearch={this.initiateSearch}/>
        <hr/>
        <CurrentlyDisplayingMessage messageAfterColon={this.state.messageAfterColon}/>
        <ResultsTable currentTracks={this.state.currentTracks}/>
      </>
    )
  }

  initiateSearch = (searchText) => {
    console.log('searched');
    let newTracks = this.filterAllTracks();
    this.setState({
      searchText: searchText,
      currentTracks: newTracks
    });
    this.preRender();
  }

  filterAllTracks = () => {
    let dataToFilter = this.state.allTracks;
    let filterBy = this.state.searchText;
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
}
