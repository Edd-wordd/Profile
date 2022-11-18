import React from 'react'
import { Grid, Typography, Paper, Hidden } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import ComputerIcon from '@material-ui/icons/Computer'
import { SectionHeader } from '../index'
import { Transition } from 'react-transition-group'
import Slide from '@material-ui/core/Slide'
import DescriptionIcon from '@material-ui/icons/Description'
import GroupAddIcon from '@material-ui/icons/GroupAdd'
import MultilineChartIcon from '@material-ui/icons/MultilineChart'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { useStyles } from '../styles/sections/HmServices.styles'

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
function HmServices(props) {
  const classes = useStyles(props)
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
          <SectionHeader title="Our Services" subTitle="Let us Help build the Future!" />
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
                  <Slide direction="right" in={inProp} mountOnEnter unmountOnExit timeout={3000}>
                    <Paper elevation={10} id={`box_${index}`} className={classes.boxes}>
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
          <Grid container direction="row" justify="center" className={classes.sectionTitle}>
            <SectionHeader title="Our Services" subTitle="Let us Help build the Future!" />
          </Grid>
        </Hidden>

        <Grid container direction="row" justify="center">
          {serviceCardsTwo.map((service, index) => {
            const Icon = icons2[index]
            return (
              <Transition in={setInProp} timeout={1000} key={index}>
                {(state) => (
                  <Slide direction="left" in={inProp} mountOnEnter unmountOnExit timeout={3000}>
                    <Paper elevation={10} id={`boxes_${index}`} className={classes.boxes}>
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
