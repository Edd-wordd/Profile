import React from 'react'
import { useStyles } from '../styles/sections/NotFound.styles'

function NotFound() {
  const classes = useStyles()
  return (
    <div className={classes.errorWrapper}>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  )
}

export default NotFound
