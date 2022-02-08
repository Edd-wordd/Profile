import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import mainTheme from '../../theme'
import { Container, Typography, Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import ComputerIcon from '@material-ui/icons/Computer'

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(40deg,#9b80ce, #f4f1fa 50%,#0f0c29 30%)',
  },
  iconWrapper: {
    // margin: '2rem 3rem 2rem 3rem',
    padding: '5rem 3rem 5rem 0rem',
  },
  button: {
    margin: '0rem 3rem 0rem 3rem',

    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: mainTheme.palette.defaultLight.main,
  },
  whiteLine: {
    color: 'white',
  },
}))
function OneQuestion() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid
        className={classes.iconWrapper}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Typography
          paragraph
          variant="h4"
          style={{ color: '#808080', margin: '1rem 1.5rem 2rem 0rem' }}
        >
          Questions
        </Typography>
        <Typography paragraph variant="h5" style={{ color: '#808080' }}>
          'We beli eve in high members practicing the ind
          <span className={classes.whiteLine}>
            ustry standards while developing .',
          </span>
        </Typography>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={<ComputerIcon />}
          size="large"
        >
          Get Started!
        </Button>
      </Grid>
    </div>
  )
}

export default OneQuestion
