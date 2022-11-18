import React from 'react'
import { makeStyles, Hidden, Typography, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  titleWrapper: {
    marginTop: '3rem',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(6),
      paddingTop: theme.spacing(6),
    },
  },
  title: {
    paddingBottom: '1rem',
  },
  subTitle: { marginTop: '1rem' },
  lineL: {
    marginTop: '.8rem',
    marginRight: '.75rem',
    width: '250px',
    height: '1px',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    [theme.breakpoints.down('xs')]: {
      marginTop: '.5rem',
      marginRight: '.75rem',
      width: '135px',
    },
  },
  lineR: {
    marginTop: '.8rem',
    marginLeft: '.75rem',
    width: '250px',
    height: '1px',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    [theme.breakpoints.down('xs')]: {
      marginTop: '.5rem',
      marginLeft: '.75rem',
      width: '135px',
    },
  },
  diamond: {
    width: '20px',
    height: '20px',
    border: '4px solid #343a40',
    transform: 'rotate(45deg)',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    [theme.breakpoints.down('xs')]: {
      width: '15px',
      height: '15px',
      border: '2px solid #343a40',
    },
  },
}))

function SectionHeader(props) {
  const classes = useStyles()
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
