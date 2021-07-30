import React from 'react'
import mainTheme from '../theme'
import { makeStyles, Button, Grid, Typography } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg,#CC95C0,#1FA2FF  , #12D8FA , #A6FFCB )',
    color: mainTheme.palette.defaultLight,
    padding: theme.spacing(1),
  },
  h1: {
    textAlign: 'left',
    lineHeight: theme.spacing(0.15),
    letterSpacing: theme.spacing(0.25),
    color: mainTheme.palette.text.primary,
  },
  paragraph: {
    paddingTop: theme.spacing(3),
    color: mainTheme.palette.text.primary,
    fontStyle: 'italic',
    alignSelf: 'flex-start',
  },

  logo: {
    maxWidth: '75%',
    height: 'auto',
  },
}))

function GetInTouch() {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width:425px)')

  if (isMobile) {
    return (
      <div className={classes.root}>
        <Container>
          <Grid container spacing={3}>
            <Grid
              container
              item
              md={8}
              sm={12}
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Typography variant="h4" align="center" className={classes.h1}>
                When it comes to developing world class solutions for your
                business, you need an expert. That’s where we come in.
              </Typography>
              <Typography className={classes.paragraph} component="p" paragraph>
                Let us show you what responsive, reliable, and accountable
                application development services look like.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            md={8}
            sm={12}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Hidden xsDown>
              <Grid item md={4} sm={12} align="center">
                <img
                  src="../../public/assets/logo2.png"
                  alt="logo"
                  className={classes.logo}
                />
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </div>
    )
  } else {
    return (
      <div className={classes.root}>
        <Container>
          <Grid container spacing={3}>
            <Grid
              container
              item
              md={8}
              sm={12}
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Typography variant="h4" align="center" className={classes.h1}>
                When it comes to developing world class solutions for your
                business, you need an expert. That’s where we come in.
              </Typography>
              <Typography className={classes.paragraph} component="p" paragraph>
                Let us show you what responsive, reliable, and accountable
                application development services look like.
              </Typography>
            </Grid>
            <Grid item md={4} sm={12} xs={12} align="center">
              <img
                src="../../public/assets/logo2.png"
                alt="logo"
                className={classes.logo}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default GetInTouch
