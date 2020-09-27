import React from 'react'
import DataRow from './DataRow/DataRow'
import TableHeader from './TableHeader/TableHeader'

export default function ResultsTable(props) {
  return (
    <table id="results-table">
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
  
  function renderRows(){
    console.log(`Rendering rows now.`);
    let rows = [];
    for (let i = 0; i < props.currentTracks.length; i++){
      rows.push(renderRow(i));
    }
    return rows;
  }

  function renderRow(index){
    console.log(`renderRow() happened.`);
    return (
      <DataRow key={`row${index + 1}`} tracks={props.currentTracks} trackIndex={index}/>
    )
  }  
}
