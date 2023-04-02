import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Container, Typography, Grid, Button, Hidden } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import { useStyles } from '../styles/sections/ServicesOffered.styles'
import serviceSectionDetails from '../../data/serviceOfferedData'

function ServicesOffered(props) {
  const classes = useStyles(props)
  let display = ''

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Container maxWidth="xl">
        {serviceSectionDetails.map((service, index) => (
          <div key={service.id}>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
              className={classes.wrapper}
              id={`wrapper_${index}`}
            >
              <Hidden mdDown>
                <Grid>
                  <Box display={index % 2 === 0 ? (display = '') : (display = 'none')}>
                    <img
                      loading="lazy"
                      alt={service.serviceName}
                      className={classes.img}
                      src={service.serviceImg}
                    />
                  </Box>
                </Grid>
              </Hidden>
              <Hidden mdUp>
                <Grid>
                  <Box display="">
                    <img
                      alt={service.serviceName}
                      className={classes.img}
                      src={service.serviceImg}
                    />
                  </Box>
                </Grid>
              </Hidden>
              <Grid>
                <Typography variant="h4" className={classes.titles}>
                  {service.serviceOffered}
                </Typography>
                <div className={classes.line} />
                <Typography className={classes.servicePara}>{service.serviceDetails}</Typography>
                <Grid
                  container
                  direction="column"
                  justify="center"
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
                <Grid>
                  <Box display={index % 2 === 1 ? (display = '') : (display = 'none')}>
                    <img
                      alt={service.serviceName}
                      className={classes.img}
                      src={service.serviceImg}
                    />
                  </Box>
                </Grid>
              </Hidden>
            </Grid>
          </div>
        ))}
      </Container>
    </>
  )
}

export default ServicesOffered
