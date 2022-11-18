import React from 'react'
import { Hidden, Container, Grid, Typography, useMediaQuery } from '@material-ui/core'
import { useStyles } from '../styles/sections/GetInTouch.styles'

function GetInTouch(props) {
  const classes = useStyles(props)
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
                When it comes to developing world class solutions for your business, you need an
                expert. That’s where we come in.
              </Typography>
              <Typography className={classes.paragraph} component="p" paragraph>
                Let us show you what responsive, reliable, and accountable application development
                services look like.
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
                <img src="../../../public/assets/logo2.png" alt="logo" className={classes.logo} />
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
                When it comes to developing world class solutions for your business, you need an
                expert. That’s where we come in.
              </Typography>
              <Typography className={classes.paragraph} component="p" paragraph>
                Let us show you what responsive, reliable, and accountable application development
                services look like.
              </Typography>
            </Grid>
            <Grid item md={4} sm={12} xs={12} align="center">
              <img src="../../../public/assets/logo2.png" alt="logo" className={classes.logo} />
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default GetInTouch
