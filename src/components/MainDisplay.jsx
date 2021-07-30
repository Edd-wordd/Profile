import React from 'react'
import mainTheme from '../theme'
import { Button, Box, makeStyles } from '@material-ui/core'
import { Container, Typography, Grid, Hidden } from '@material-ui/core'
import ComputerIcon from '@material-ui/icons/Computer'
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '850px',
    borderRadius: '0 0 15% 0',
    // borderBottom: `25px double pink`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    [theme.breakpoints.down('xs')]: {
      borderRadius: '0 0 0 0',
      borderBottom: `0`,
    },
  },
  titleWrapper: {
    paddingTop: theme.spacing(36),
  },
  mainTitle: {
    fontWeight: 700,
    fontSize: theme.spacing(10),
    letterSpacing: theme.spacing(0.5),
    color: mainTheme.palette.defaultLight.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainParagraph: {
    margin: '2.5em 0 2rem 0',
    fontSize: theme.spacing(5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: mainTheme.palette.defaultLight.main,
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#FE6B8B', //light pink peach color
    color: mainTheme.palette.defaultLight.main,
    opacity: '85%',
  },
  //   Ipad view stylings
  titleWrapperMobileView: {
    paddingTop: theme.spacing(30),
  },
  mainTitleMobileView: {
    fontWeight: 700,
    fontSize: theme.spacing(8),
    letterSpacing: theme.spacing(0.5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: mainTheme.palette.defaultLight.main,
    marginLeft: theme.spacing(3),
  },
  mainParagraphMobileView: {
    margin: '1.5em 0 5rem 0',
    fontSize: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: mainTheme.palette.defaultLight.main,
  },
  buttonMobileView: {
    margin: theme.spacing(1),
    backgroundColor: '#FE6B8B', //light pink peach color
    color: mainTheme.palette.defaultLight.main,
    opacity: '85%',
  },
}))

function MainDisplay(props) {
  const classes = useStyles()
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
                <Typography
                  variant="h1"
                  className={classes.mainTitleMobileView}
                >
                  {props.mobileViewTitle}
                </Typography>
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Typography
                  paragraph
                  className={classes.mainParagraphMobileView}
                >
                  {props.mobileViewSubtitle}
                </Typography>
              </Grid>
              <Grid container direction="column" alignItems="stretch">
                <Button
                  variant="contained"
                  className={classes.buttonMobileView}
                  startIcon={<ComputerIcon />}
                  size="large"
                  style={{ marginBottom: '1.5rem' }}
                >
                  Web Development
                </Button>

                <Button
                  variant="contained"
                  className={classes.buttonMobileView}
                  startIcon={<MobileFriendlyIcon />}
                  size="large"
                >
                  Mobile Development
                </Button>
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
                <Button
                  variant="contained"
                  className={classes.button}
                  startIcon={<ComputerIcon />}
                  size="large"
                >
                  Web Development
                </Button>

                <Button
                  variant="contained"
                  className={classes.button}
                  startIcon={<MobileFriendlyIcon />}
                  size="large"
                >
                  Mobile Development
                </Button>
              </Grid>
            </Container>
          </Hidden>
        </Box>
      </>
    </div>
  )
}

export default MainDisplay
