import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    //  margin: '7rem 0 0 0',
  },
}))

function Portfolio() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h1>this is the portfolio page</h1>

    </div>
  )
}

export default Portfolio
