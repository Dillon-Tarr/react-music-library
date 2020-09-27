import React from 'react'

export default function CurrentlyDisplayingMessage(props) {
  return (
    <p id="currently-displaying-message">
      Currently displaying:&nbsp;<i>{props.messageAfterColon}</i>
    </p>
  )
}
