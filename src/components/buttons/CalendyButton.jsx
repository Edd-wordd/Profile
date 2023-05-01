import React from 'react'
import { PopupButton } from 'react-calendly'
import { useStyles } from '../styles/buttons/CalendyButton.styles'

function CalendyButton(props) {
  const classes = useStyles(props)

  return (
    <div>
      <PopupButton
        url="https://calendly.com/mona-tech"
        text="Schedule time "
        rootElement={document.getElementById('root')}
        className={classes.calendlyBtn}
      />
    </div>
  )
}

export default CalendyButton
