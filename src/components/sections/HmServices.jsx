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

const icons = [
  MultilineChartIcon,
  ComputerIcon,
  DescriptionIcon,
  PhoneIphoneIcon,
  ShoppingCartIcon,
  GroupAddIcon,
]

const serviceCardsOne = [
  {
    id: 2000,
    serviceTitle: 'SEO',
    serviceDetail:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.Placeat,facere, quasi animi rerum sed repellendus non ratione dignissimos consequuntur dolores?',
  },
  {
    id: 2001,
    serviceTitle: 'Website Development',
    serviceDetail:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.Placeat,facere, quasi animi rerum sed repellendus non ratione dignissimos consequuntur dolores?',
  },
  {
    id: 2002,
    serviceTitle: 'Content Writing',
    serviceDetail:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.Placeat,facere, quasi animi rerum sed repellendus non ratione dignissimos consequuntur dolores?',
  },
  {
    id: 2003,
    serviceTitle: 'Mobile App Development',
    serviceDetail:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.Placeat,facere, quasi animi rerum sed repellendus non ratione dignissimos consequuntur dolores?',
  },
  {
    id: 2004,
    serviceTitle: 'eCommerce Development',
    serviceDetail:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.Placeat,facere, quasi animi rerum sed repellendus non ratione dignissimos consequuntur dolores?',
  },
  {
    id: 2005,
    serviceTitle: 'Maintance & Support',
    serviceDetail:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.Placeat,facere, quasi animi rerum sed repellendus non ratione dignissimos consequuntur dolores?',
  },
]

function HmServices(props) {
  const classes = useStyles(props)
  const [inProp, setInProp] = React.useState(false)
  const servicesSlide = (entries, observer) => {
    entries.forEach((entry) => {
      // guard clause
      if (!entry.isIntersecting) return
      if (entry.isIntersecting) {
        setInProp(true)
      }
    })
    observer.unobserve(entries.target)
  }
  const servicesObserver = new IntersectionObserver(servicesSlide, {
    root: null,
    threshold: 0.2,
  })

  React.useEffect(() => {
    const target = document.querySelector('#services')
    servicesObserver.observe(target)
  }, [])

  return (
    <div className={classes.root} id="services">
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
          className={classes.cardWrapper}
        >
          <Hidden xsDown>
            <Grid container direction="row" justify="center" className={classes.sectionTitle}>
              <SectionHeader title="Our Services" subTitle="Let us Help build the Future!" />
            </Grid>
          </Hidden>
          {serviceCardsOne.map((service, index) => {
            const Icon = icons[index]
            return (
              <Transition in={setInProp} timeout={1000} key={service.id}>
                {(state) => (
                  <Slide
                    direction={index >= 0 && index <= 2 ? 'right' : 'left'}
                    in={inProp}
                    mountOnEnter
                    unmountOnExit
                    timeout={3000}
                  >
                    <Paper elevation={10} id={`card_${index}`} className={classes.cards}>
                      <Icon className={classes.icons} />
                      <Typography variant="h5" className={classes.cardTitle}>
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
