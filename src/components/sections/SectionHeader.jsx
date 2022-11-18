import React from 'react'
import { Hidden, Typography, Grid } from '@material-ui/core'
import { useStyles } from '../styles/sections/SectionHeader.styles'

function SectionHeader(props) {
  const classes = useStyles(props)
  return (
    <>
      <Grid className={classes.titleWrapper} container direction="row" justify="center">
        <Typography variant="h4" className={classes.title}>
          {props.title}
        </Typography>
        <Grid container item direction="row" justify="center">
          <Hidden xsDown>
            <div className={classes.lineL}></div>
            <div className={classes.diamond}></div>
            <div className={classes.lineR}></div>
          </Hidden>
          <Hidden smUp>
            <div className={classes.lineL}></div>
            <div className={classes.diamond}></div>
            <div className={classes.lineR}></div>
          </Hidden>
        </Grid>
        <Typography className={classes.subTitle} variant="h6">
          {props.subTitle}
        </Typography>
      </Grid>
    </>
  )
}

export default SectionHeader
