// noinspection SpellCheckingInspection
import React from 'react'
import { PopupWidget } from 'react-calendly'

const CalendlyWidget = () => {
  return (
    <div>
      <PopupWidget
        url="https://calendly.com/your_scheduling_page"
        rootElement={document.getElementById('root')}
        text="Schedule time with me"
      />
    </div>
  )
}
export default CalendlyWidget
