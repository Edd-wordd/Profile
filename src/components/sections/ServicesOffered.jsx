import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Container, Typography, Grid, Button, Hidden } from '@material-ui/core'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import { useStyles } from '../styles/sections/ServicesOffered.styles'

const services = [
  {
    id: 5000,
    serviceName: 'content-writing',
    serviceImg: '../../public/assets/thom-bradley-ap8jsn3B9gI-unsplash.jpg',
    serviceOffered: 'Content Writing',
    serviceDetails:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam pariatur consectetur, quidem quasi modi culpa delectus quisquam suscipit eveniet eius ratione vitae omni dolorum nam unde repellendus hic exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem in earum beatae, maxime quod repellendus rerum voluptatem doloribus vero provident voluptatum reiciendis sed suscipit dignissimos ipsam commodi eveniet eos? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia maiores dolorem sequi consequatur eaque mollitia temporibus voluptas, a quisquam? Voluptate sunt veritatis corporis delectus nobis omnis eligendi accusamus ad est.',
  },
  {
    id: 5001,
    serviceName: 'seo',
    serviceImg: '../../public/assets/lukas-blazek-mcSDtbWXUZU-unsplash.jpg',
    serviceOffered: 'SEO (Search Engine Optimization)',
    serviceDetails:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam pariatur consectetur, quidem quasi modi culpa delectus quisquam suscipit eveniet eius ratione vitae omni dolorum nam unde repellendus hic exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem in earum beatae, maxime quod repellendus rerum voluptatem doloribus vero provident voluptatum reiciendis sed suscipit dignissimos ipsam commodi eveniet eos? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia maiores dolorem sequi consequatur eaque mollitia temporibus voluptas, a quisquam? Voluptate sunt veritatis corporis delectus nobis omnis eligendi accusamus ad est.',
  },
  {
    id: 5002,
    serviceName: 'mobile-app',
    serviceImg: '../../public/assets/phil-desforges-Hxp_xDXsOSs-unsplash.jpg',
    serviceOffered: 'Mobile App Development',
    serviceDetails:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam pariatur consectetur, quidem quasi modi culpa delectus quisquam suscipit eveniet eius ratione vitae omni dolorum nam unde repellendus hic exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem in earum beatae, maxime quod repellendus rerum voluptatem doloribus vero provident voluptatum reiciendis sed suscipit dignissimos ipsam commodi eveniet eos? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia maiores dolorem sequi consequatur eaque mollitia temporibus voluptas, a quisquam? Voluptate sunt veritatis corporis delectus nobis omnis eligendi accusamus ad est.',
  },
  {
    id: 5003,
    serviceName: 'eCommerce',
    serviceImg: '../../public/assets/thom-bradley-ap8jsn3B9gI-unsplash.jpg',
    serviceOffered: 'eCommerce Website Development',
    serviceDetails:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam pariatur consectetur, quidem quasi modi culpa delectus quisquam suscipit eveniet eius ratione vitae omni dolorum nam unde repellendus hic exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem in earum beatae, maxime quod repellendus rerum voluptatem doloribus vero provident voluptatum reiciendis sed suscipit dignissimos ipsam commodi eveniet eos? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia maiores dolorem sequi consequatur eaque mollitia temporibus voluptas, a quisquam? Voluptate sunt veritatis corporis delectus nobis omnis eligendi accusamus ad est.',
  },
  {
    id: 5004,
    serviceName: 'web-design',
    serviceImg: '../../public/assets/thom-bradley-ap8jsn3B9gI-unsplash.jpg',
    serviceOffered: 'Website Design & Development',
    serviceDetails:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam pariatur consectetur, quidem quasi modi culpa delectus quisquam suscipit eveniet eius ratione vitae omni dolorum nam unde repellendus hic exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem in earum beatae, maxime quod repellendus rerum voluptatem doloribus vero provident voluptatum reiciendis sed suscipit dignissimos ipsam commodi eveniet eos? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia maiores dolorem sequi consequatur eaque mollitia temporibus voluptas, a quisquam? Voluptate sunt veritatis corporis delectus nobis omnis eligendi accusamus ad est.',
  },
  {
    id: 5005,
    serviceName: 'web-maintenance',
    serviceImg: '../../public/assets/thom-bradley-ap8jsn3B9gI-unsplash.jpg',
    serviceOffered: 'Website/App Maintenance & Support',
    serviceDetails:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam pariatur consectetur, quidem quasi modi culpa delectus quisquam suscipit eveniet eius ratione vitae omni dolorum nam unde repellendus hic exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem in earum beatae, maxime quod repellendus rerum voluptatem doloribus vero provident voluptatum reiciendis sed suscipit dignissimos ipsam commodi eveniet eos? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia maiores dolorem sequi consequatur eaque mollitia temporibus voluptas, a quisquam? Voluptate sunt veritatis corporis delectus nobis omnis eligendi accusamus ad est.',
  },
]


function ServicesOffered(props) {
  const classes = useStyles(props)
  let display = ''
  return (
    <>
      <Container maxWidth="xl">

        {services.map((service, index) => (
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
                    <img alt={service.serviceName} className={classes.img} src={service.serviceImg} />
                  </Box>
                </Grid>
              </Hidden>
              <Hidden mdUp>
                <Grid>
                  <Box display="">
                    <img alt={service.serviceName} className={classes.img} src={service.serviceImg} />
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
                  <Link to={'/services/' + service.serviceName} className={classes.links}>
                    <Button
                      endIcon={<MenuBookIcon />}
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      Learn More
                    </Button>
                  </Link>
                </Grid>
              </Grid>
              <Hidden mdDown>
                <Grid>
                  <Box display={index % 2 === 1 ? (display = '') : (display = 'none')}>
                    <img alt={service.serviceName} className={classes.img} src={service.serviceImg} />
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
