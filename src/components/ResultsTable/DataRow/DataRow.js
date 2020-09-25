import React from 'react'

export default function DataRow(props) {
  let oddOrEven;
  if(props.trackIndex % 2 === 0){
    oddOrEven = 'odd';
  }
  else{
    oddOrEven = 'even';
  }

  return (
    <tr className={`${oddOrEven}-row`}>
      <td>{props.tracks[props.trackIndex].title}</td>
      <td>{props.tracks[props.trackIndex].album}</td>
      <td>{props.tracks[props.trackIndex].artist}</td>
      <td>{props.tracks[props.trackIndex].genre}</td>
      <td>{props.tracks[props.trackIndex].releaseDate}</td>
    </tr>
  )
}
