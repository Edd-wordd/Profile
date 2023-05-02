import React from 'react'
import { PopupButton } from 'react-calendly'
import { useStyles } from '../styles/buttons/CalendyButton.styles'

function CalendyButton(props) {
  const classes = useStyles(props)
  const url = process.env.REACT_APP_CALENDLY_URL

  return (
    <div>
      <PopupButton
        url={url}
        text="Schedule time "
        rootElement={document.getElementById('root')}
        className={classes.calendlyBtn}
      />
    </div>
  )
}

export default CalendyButton
