import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Typography, Grid, Button, Hidden } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import { useStyles } from '../styles/sections/ServicesOffered.styles'
import serviceSectionDetails from '../../data/serviceOfferedData'

function ServicesOffered(props) {
  const classes = useStyles(props)

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        {serviceSectionDetails.map((service, index) => (
          <div key={service.id}>
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              className={classes.wrapper}
              id={`wrapper_${index}`}
            >
              <Hidden mdDown>
                <Grid item>
                  {index % 2 === 0 && (
                    <img
                      loading="lazy"
                      alt={service.serviceName}
                      className={classes.img}
                      src={service.serviceImg}
                    />
                  )}
                </Grid>
              </Hidden>
              <Hidden mdUp>
                <Grid item>
                  <img
                    loading="lazy"
                    alt={service.serviceName}
                    className={classes.img}
                    src={service.serviceImg}
                  />
                </Grid>
              </Hidden>
              <Grid item>
                <Typography variant="h4" className={classes.titles}>
                  {service.serviceOffered}
                </Typography>
                <div className={classes.line} />
                <Typography className={classes.servicePara}>{service.serviceDetails}</Typography>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-end"
                  className={classes.btnWrapper}
                >
                  <Button
                    endIcon={<MenuBookIcon />}
                    variant="contained"
                    color="primary"
                    size="large"
                    component={Link}
                    to={service.path}
                    onClick={scrollToTop}
                  >
                    Learn More
                  </Button>
                </Grid>
              </Grid>
              <Hidden mdDown>
                <Grid item>
                  {index % 2 === 1 && (
                    <img
                      loading="lazy"
                      alt={service.serviceName}
                      className={classes.img}
                      src={service.serviceImg}
                    />
                  )}
                </Grid>
              </Hidden>
            </Grid>
          </div>
        ))}
      </Container>
    </div>
  )
}

export default ServicesOffered
