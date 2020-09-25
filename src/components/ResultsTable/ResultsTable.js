import React, { Component } from 'react'
import DataRow from './DataRow/DataRow'
import TableHeader from './TableHeader/TableHeader'

export default class ResultsTable extends Component {
  renderRows(){
    console.log(`Rendering rows now.`);
    let rows = [];
    for (let i = 0; i < this.props.currentTracks.length; i++){
      rows.push(this.renderRow(i));
    }
    return rows;
  }

  renderRow(index){
    console.log(`renderRow() happened.`);
    return (
      <DataRow key={`row${index + 1}`} tracks={this.props.currentTracks} trackIndex={index}/>
    )
  }

  render() {
    return (
      <table id="results-table">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }
}
