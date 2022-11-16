import React from 'react'
import { Button, Box } from '@material-ui/core'
import { Container, Typography, Grid, Hidden } from '@material-ui/core'
import ComputerIcon from '@material-ui/icons/Computer'
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly'
import { Link } from '@material-ui/core'
import { useStyles } from '../styles/MainDisplay.styles'

function MainDisplay(props) {
  const classes = useStyles(props)

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${props.href})`,
      }}
    >
      <>
        <Box>
          <Hidden mdUp>
            {/* smaller view */}
            <Container maxWidth="lg" className={classes.titleWrapperMobileView}>
              <Grid container direction="column" justify="center">
                <Typography variant="h1" className={classes.mainTitleMobileView}>
                  {props.mobileViewTitle}
                </Typography>
              </Grid>
              <Grid container direction="row" justify="center" alignItems="center">
                <Typography paragraph className={classes.mainParagraphMobileView}>
                  {props.mobileViewSubtitle}
                </Typography>
              </Grid>
            </Container>
          </Hidden>
          {/* larger view */}
          <Hidden smDown>
            <Container maxWidth="lg" className={classes.titleWrapper}>
              <Typography variant="h1" className={classes.mainTitle}>
                {props.mainViewTitle}
              </Typography>
              <Typography paragraph className={classes.mainParagraph}>
                {props.mainViewSubtitle}
              </Typography>
              <Grid container direction="row" justify="center">
                {props.buttonOneText ? (
                  <Link href={props.buttonLink} className={classes.buttonStyle}>
                    <Button
                      variant="contained"
                      className={classes.button}
                      startIcon={<ComputerIcon />}
                      size="large"
                    >
                      {props.buttonOneText}
                    </Button>
                  </Link>
                ) : null}
                {props.buttonTwoText ? (
                  <Link href={props.buttonLink2} className={classes.buttonStyle}>
                    <Button
                      variant="contained"
                      className={classes.button}
                      startIcon={<MobileFriendlyIcon />}
                      size="large"
                    >
                      {props.buttonTwoText}
                    </Button>
                  </Link>
                ) : null}
              </Grid>
            </Container>
          </Hidden>
        </Box>
      </>
    </div>
  )
}

export default MainDisplay
