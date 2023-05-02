import React from 'react'
import { Button, Box, Link, Container, Typography, Grid } from '@mui/material'
import ComputerIcon from '@mui/icons-material/Computer'
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly'
import { useStyles } from '../styles/sections/MainDisplay.styles'

function MainDisplay(props) {
  const classes = useStyles(props)

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${props.href})`,
      }}
    >
      <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }}>
        {/* For smaller viewports */}
        <Container maxWidth="lg" className={classes.titleWrapperMobileView}>
          <Grid container direction="column" justifyContent="center">
            <Typography variant="h1" className={classes.mainTitleMobileView}>
              {props.mobileViewTitle}
            </Typography>
          </Grid>
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <Typography paragraph className={classes.mainParagraphMobileView}>
              {props.mobileViewSubtitle}
            </Typography>
          </Grid>
        </Container>
      </Box>
      {/* For larger viewports */}
      <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}>
        <Container maxWidth="lg" className={classes.titleWrapper}>
          <Typography variant="h1" className={classes.mainTitle}>
            {props.mainViewTitle}
          </Typography>
          <Typography paragraph className={classes.mainParagraph}>
            {props.mainViewSubtitle}
          </Typography>
          <Grid container direction="row" justifyContent="center">
            {props.buttonOneText && (
              <Link href={props.buttonLink} className={classes.buttonStyle}>
                <Button
                  variant="contained"
                  className={classes.button}
                  endIcon={<ComputerIcon />}
                  size="large"
                >
                  {props.buttonOneText}
                </Button>
              </Link>
            )}
            {props.buttonTwoText && (
              <Link href={props.buttonLink2} className={classes.buttonStyle}>
                <Button
                  variant="contained"
                  className={classes.button}
                  endIcon={<MobileFriendlyIcon />}
                  size="large"
                >
                  {props.buttonTwoText}
                </Button>
              </Link>
            )}
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default MainDisplay
