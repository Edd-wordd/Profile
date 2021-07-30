import React from 'react'
import mainTheme from '../theme'
import { makeStyles, Grid, Typography, Paper, Hidden } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import ComputerIcon from '@material-ui/icons/Computer'
import SectionHeader from './SectionHeader'
import { Transition } from 'react-transition-group'
import Slide from '@material-ui/core/Slide'
import DescriptionIcon from '@material-ui/icons/Description'
import GroupAddIcon from '@material-ui/icons/GroupAdd'
import MultilineChartIcon from '@material-ui/icons/MultilineChart'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: mainTheme.palette.defaultLight.main,
    paddingBottom: theme.spacing(5),
  },
  sectionTitle: {
    paddingBottom: theme.spacing(7),
    marginBottom: theme.spacing(6),
    background: '#0f0c29', //dark purple color
    color: mainTheme.palette.defaultLight.main,
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(0),
      background: mainTheme.palette.defaultLight.main,
      color: mainTheme.palette.defaultDark.main,
    },
  },
  boxWrapper: {
    paddingTop: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(0),
    },
  },
  boxes: {
    width: '400px',
    margin: theme.spacing(1),
    height: 'auto',
    padding: '.75rem 1.5rem',
    backgroundColor: '#ded5ef', // Light purple color
    // color: mainTheme.palette.defaultLight.main,
    color: '#818181',

    '&#box_0': {
      marginBottom: theme.spacing(-8),
      marginTop: theme.spacing(10),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(1),
      },
    },
    '&#box_1': {
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(1),
      },
    },
    '&#box_2': {
      marginBottom: theme.spacing(-8),
      marginTop: theme.spacing(10),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(1),
      },
    },
    '&#boxes_0': {
      marginTop: theme.spacing(-14),
      marginBottom: theme.spacing(16),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(1),
      },
    },
    '&#boxes_1': {
      marginBottom: theme.spacing(5),
      marginTop: theme.spacing(-5),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(1),
      },
    },
    '&#boxes_2': {
      marginTop: theme.spacing(-14),
      marginBottom: theme.spacing(16),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(1),
      },
    },
  },
  icons: {
    width: '20%',
    height: 'auto',
    color: mainTheme.palette.defaultLight.main,
  },
  boxTitle: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}))
const icons = [MultilineChartIcon, ComputerIcon, DescriptionIcon]
const icons2 = [PhoneIphoneIcon, ShoppingCartIcon, GroupAddIcon]
const serviceCardsOne = [
  {
    serviceTitle: 'SEO',
    serviceDetail:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.Placeat,facere, quasi animi rerum sed repellendus non ratione dignissimos consequuntur dolores?',
  },
  {
    serviceTitle: 'Website Development',
    serviceDetail:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.Placeat,facere, quasi animi rerum sed repellendus non ratione dignissimos consequuntur dolores?',
  },
  {
    serviceTitle: 'Content Writing',
    serviceDetail:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.Placeat,facere, quasi animi rerum sed repellendus non ratione dignissimos consequuntur dolores?',
  },
]
const serviceCardsTwo = [
  {
    serviceTitle: 'Mobile App Development',
    serviceDetail:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.Placeat,facere, quasi animi rerum sed repellendus non ratione dignissimos consequuntur dolores?',
  },
  {
    serviceTitle: 'eCommerce Development',
    serviceDetail:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.Placeat,facere, quasi animi rerum sed repellendus non ratione dignissimos consequuntur dolores?',
  },
  {
    serviceTitle: 'Maintance & Support',
    serviceDetail:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.Placeat,facere, quasi animi rerum sed repellendus non ratione dignissimos consequuntur dolores?',
  },
]
function HmServices() {
  const classes = useStyles()
  const [inProp, setInProp] = React.useState(false)

  const handleChange = () => {
    if (window.scrollY >= 750) {
      setInProp(true)
    } else {
      setInProp(false)
    }
  }
  window.addEventListener('scroll', handleChange)

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        {/* Section title only shows on mobile */}
        <Hidden smUp>
          <SectionHeader
            title="Our Services"
            subTitle="Let us Help build the Future!"
          />
        </Hidden>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.boxWrapper}
        >
          {serviceCardsOne.map((service, index) => {
            const Icon = icons[index]
            return (
              <Transition in={setInProp} timeout={1000} key={index}>
                {(state) => (
                  <Slide
                    direction="right"
                    in={inProp}
                    mountOnEnter
                    unmountOnExit
                    timeout={3000}
                  >
                    <Paper
                      elevation={10}
                      id={`box_${index}`}
                      className={classes.boxes}
                    >
                      <Icon className={classes.icons} />
                      <Typography variant="h5" className={classes.boxTitle}>
                        {service.serviceTitle}
                      </Typography>
                      <Typography paragraph>{service.serviceDetail}</Typography>
                    </Paper>
                  </Slide>
                )}
              </Transition>
            )
          })}
        </Grid>
        {/* Section Title shows on Ipads and up */}
        <Hidden xsDown>
          <Grid
            container
            direction="row"
            justify="center"
            className={classes.sectionTitle}
          >
            <SectionHeader
              title="Our Services"
              subTitle="Let us Help build the Future!"
            />
          </Grid>
        </Hidden>

        <Grid container direction="row" justify="center">
          {serviceCardsTwo.map((service, index) => {
            const Icon = icons2[index]
            return (
              <Transition in={setInProp} timeout={1000} key={index}>
                {(state) => (
                  <Slide
                    direction="left"
                    in={inProp}
                    mountOnEnter
                    unmountOnExit
                    timeout={3000}
                  >
                    <Paper
                      elevation={10}
                      id={`boxes_${index}`}
                      className={classes.boxes}
                    >
                      <Icon className={classes.icons} />
                      <Typography variant="h5" className={classes.boxTitle}>
                        {service.serviceTitle}
                      </Typography>
                      <Typography paragraph>{service.serviceDetail}</Typography>
                    </Paper>
                  </Slide>
                )}
              </Transition>
            )
          })}
        </Grid>
      </Container>
    </div>
  )
}

export default HmServices
