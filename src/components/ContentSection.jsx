import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Paper, Grid, Container } from '@material-ui/core'
import mainTheme from '../theme'

const useStyles = makeStyles((theme) => ({
  root: {},
}))

function ContentSection() {
  const classes = useStyles()
  return <div>this is the content section</div>
}

export default ContentSection
