import React, { useEffect, useRef } from 'react'
import { Grid, Typography, Paper, Hidden, Container, Box } from '@mui/material'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import ComputerIcon from '@mui/icons-material/Computer'
import DescriptionIcon from '@mui/icons-material/Description'
import MultilineChartIcon from '@mui/icons-material/MultilineChart'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import serviceCardDetails from '../../data/hmServicesData'
import SectionHeader from '../../components/sections/SectionHeader'
import { Slide } from '@mui/material'
import { useStyles } from '../styles/sections/HmServices.styles'
import { useTheme } from '@mui/system'

const icons = [
  MultilineChartIcon,
  ComputerIcon,
  DescriptionIcon,
  PhoneIphoneIcon,
  ShoppingCartIcon,
  GroupAddIcon,
]

function HmServices(props) {
  const theme = useTheme()
  const servicesRef = useRef(null)
  const classes = useStyles(props)
  const [inProp, setInProp] = React.useState(false)

  const servicesSlide = (entries, observer) => {
    const [entry] = entries

    // guard clause
    if (!entry.isIntersecting) return

    setInProp(true)
    observer.unobserve(entry.target)
  }

  const servicesObserver = new IntersectionObserver(servicesSlide, {
    root: null,
    threshold: 0.2,
  })

  useEffect(() => {
    const target = servicesRef.current
    if (target) {
      servicesObserver.observe(target)
    }

    return () => {
      if (target) {
        servicesObserver.unobserve(target)
      }
    }
  }, [])

  return (
    <div className={classes.root} id="services" ref={servicesRef}>
      <Box display={{ xs: 'block', sm: 'none', md: 'none', lg: 'none' }}>
        <SectionHeader
          title="Our Services - Helping to Build the Future"
          subTitle="Discover the Range of Services We Offer to Help Your Business Grow"
        />
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.cardWrapper}
      >
        <Grid container direction="row" justifyContent="center" className={classes.sectionTitle}>
          <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}>
            <SectionHeader
              title="Our Services - Helping to Build the Future"
              subTitle="Discover the Range of Services We Offer to Help Your Business Grow"
            />
          </Box>
        </Grid>
        {serviceCardDetails.map((service, index) => {
          const Icon = icons[index]
          const cardStyles = [
            {
              mb: 15,
              [theme.breakpoints.down('md')]: {
                mt: 8,
              },
            },
            {
              mb: 23,
            },
            {
              mb: 15,
            },
            {
              mb: 12,
            },
            {
              mb: 3,
            },
            {
              mb: 10,
            },
          ]
          return (
            <Slide
              key={service.id}
              direction={index >= 0 && index <= 2 ? 'right' : 'left'}
              in={inProp}
              mountOnEnter
              unmountOnExit
              timeout={3000}
            >
              <Paper
                elevation={10}
                id={`card_${index}`}
                sx={{
                  position: 'relative',
                  width: '400px',
                  m: 1,
                  minHeight: '215px',
                  py: '0.75rem',
                  px: '1.5rem',
                  backgroundColor: theme.palette.primary_300.main,
                  color: theme.palette.charcoal.secondary,
                  ...cardStyles[index],
                  [theme.breakpoints.down('md')]: {
                    m: 1,
                  },
                }}
              >
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
                  <Icon sx={{ width: '12%', height: 'auto' }} /> {service.serviceTitle}
                </Typography>
                <Typography paragraph>{service.serviceDescription}</Typography>
              </Paper>
            </Slide>
          )
        })}
      </Grid>
    </div>
  )
}

export default HmServices
