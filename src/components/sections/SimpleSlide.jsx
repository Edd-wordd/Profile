import React from 'react'
import mainTheme from '../../theme'
// import Grow from '@material-ui/core/Slide'
import { makeStyles, Grid, Typography, Paper } from '@material-ui/core'
import { Transition } from 'react-transition-group'
import Container from '@material-ui/core/Container'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import CreateIcon from '@material-ui/icons/Create'
import ComputerIcon from '@material-ui/icons/Computer'
import HttpIcon from '@material-ui/icons/Http'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import BuildIcon from '@material-ui/icons/Build'
// import Grow from '@material-ui/core/Grow'
import Grow from '@material-ui/core/Grow'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  wrapper: {
    width: `100%` + theme.spacing(2),
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing(1),
  },
  test: { padding: '1rem 1rem' },
  boxes: {
    width: '300px',
    margin: theme.spacing(1),
    height: 'auto',
    padding: '.75rem 1.5rem',
  },
  icons: {
    width: '75px',
    height: 'auto',
    color: mainTheme.palette.defaultDark.secondary,
  },
}))

export default function SimpleSlide() {
  const classes = useStyles()
  const [inProp, setInProp] = React.useState(false)

  const handleChange = () => {
    if (window.scrollY >= 1100) {
      setInProp(true)
    } else {
      setInProp(false)
    }
  }
  window.addEventListener('scroll', handleChange)

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        {/* <Transition in={setInProp}>
          {(state) => (
            <Slide
              direction="right"
              in={inProp}
              mountOnEnter
              unmountOnExit
              timeout={1100}
            > */}
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          direction="row"
          justify="center"
          style={{ paddingTop: '4rem' }}
        >
          <Transition in={setInProp}>
            {(state) => (
              <Grow
                direction="right"
                in={inProp}
                mountOnEnter
                unmountOnExit
                timeout={1000}
              >
                <Paper
                  elevation={3}
                  className={classes.boxes}
                  // style={{ marginBottom: '-4rem', marginTop: '5rem' }}
                >
                  <ComputerIcon className={classes.icons} />
                  <Typography variant="h5" style={{ margin: '.25rem 0' }}>
                    eCommerce Development
                  </Typography>
                  <Typography paragraph>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Placeat, facere, quasi animi rerum sed repellendus non
                    ratione dignissimos consequuntur dolores?
                  </Typography>
                </Paper>
              </Grow>
            )}
          </Transition>
          <Transition in={setInProp}>
            {(state) => (
              <Grow
                direction="down"
                in={inProp}
                mountOnEnter
                unmountOnExit
                timeout={2000}
              >
                <Paper elevation={3} className={classes.boxes}>
                  <HttpIcon className={classes.icons} />
                  <Typography variant="h5" style={{ margin: '.25rem 0' }}>
                    Website Development
                  </Typography>
                  <Typography paragraph>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Placeat, facere, quasi animi rerum sed repellendus non
                    ratione dignissimos consequuntur dolores?
                  </Typography>
                </Paper>
              </Grow>
            )}
          </Transition>
          <Transition in={setInProp}>
            {(state) => (
              <Grow
                direction="left"
                in={inProp}
                mountOnEnter
                unmountOnExit
                timeout={3000}
              >
                <Paper
                  elevation={3}
                  className={classes.boxes}
                  // style={{ marginBottom: '-4rem', marginTop: '5rem' }}
                >
                  <CreateIcon className={classes.icons} />
                  <Typography variant="h5" style={{ margin: '.25rem 0' }}>
                    Content Writing
                  </Typography>
                  <Typography paragraph>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Placeat, facere, quasi animi rerum sed repellendus non
                    ratione dignissimos consequuntur dolores?
                  </Typography>
                </Paper>
              </Grow>
            )}
          </Transition>
        </Grid>
        {/* </Grow>
          )}
        </Transition> */}
      </div>
    </div>
  )
}
