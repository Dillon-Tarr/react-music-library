import React from 'react'

export default function DataRow(props) {
  return (
    <tr>
      <td>{props.tracks[props.trackIndex].title}</td>
      <td>{props.tracks[props.trackIndex].album}</td>
      <td>{props.tracks[props.trackIndex].artist}</td>
      <td>{props.tracks[props.trackIndex].genre}</td>
      <td>{props.tracks[props.trackIndex].releaseDate}</td>
    </tr>
  )
}
