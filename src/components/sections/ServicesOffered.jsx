import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import mainTheme from '../../theme'
import { Container, Typography, Grid, Button, Hidden } from '@material-ui/core'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  titleWrapper: {
    marginTop: theme.spacing(6),
  },
  title: {
    paddingBottom: theme.spacing(2),
    color: mainTheme.palette.charcoal.main,
  },
  subTitle: { marginTop: theme.spacing(2) },
  wrapper: {
    backgroundImage: `linear-gradient(45deg,#f4f1fa  30%,#fff 90%)`,
    padding: '5rem 0rem',
    [theme.breakpoints.down('md')]: {
      padding: '2rem 0rem',
    },
    '&#wrapper_0': {
      backgroundImage: `linear-gradient(45deg,#fff 30%,#f4f1fa 90%)`,
    },
    '&#wrapper_2': {
      backgroundImage: `linear-gradient(45deg,#fff 30%,#f4f1fa 90%)`,
    },
    '&#wrapper_4': {
      backgroundImage: `linear-gradient(45deg,#fff 30%,#f4f1fa 90%)`,
    },
  },
  line: {
    width: '350px',
    height: '1px',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },

  titles: {
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(6),
    },
  },
  btnWrapper: {
    padding: theme.spacing(6),
  },
  btn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: mainTheme.palette.defaultLight.main,
    border: 'none',
  },
  img: {
    width: '600px',
    height: 'auto',
    borderRadius: '1%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  servicePara: {
    width: '700px',
    height: 'auto',
    color: '#808080', //light grey
    letterSpacing: theme.spacing(0.25),
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  links: {
    textDecoration: 'none',
  }
}))

const services = [
  {
    serviceId: 'content-writing',
    serviceImg: '../../public/assets/thom-bradley-ap8jsn3B9gI-unsplash.jpg',
    serviceOffered: 'Content Writing',
    serviceDetails:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam pariatur consectetur, quidem quasi modi culpa delectus quisquam suscipit eveniet eius ratione vitae omni dolorum nam unde repellendus hic exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem in earum beatae, maxime quod repellendus rerum voluptatem doloribus vero provident voluptatum reiciendis sed suscipit dignissimos ipsam commodi eveniet eos? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia maiores dolorem sequi consequatur eaque mollitia temporibus voluptas, a quisquam? Voluptate sunt veritatis corporis delectus nobis omnis eligendi accusamus ad est.',
  },
  {
    serviceId: 'seo',
    serviceImg: '../../public/assets/lukas-blazek-mcSDtbWXUZU-unsplash.jpg',
    serviceOffered: 'SEO (Search Engine Optimization)',
    serviceDetails:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam pariatur consectetur, quidem quasi modi culpa delectus quisquam suscipit eveniet eius ratione vitae omni dolorum nam unde repellendus hic exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem in earum beatae, maxime quod repellendus rerum voluptatem doloribus vero provident voluptatum reiciendis sed suscipit dignissimos ipsam commodi eveniet eos? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia maiores dolorem sequi consequatur eaque mollitia temporibus voluptas, a quisquam? Voluptate sunt veritatis corporis delectus nobis omnis eligendi accusamus ad est.',
  },
  {
    serviceId: 'mobile-app',
    serviceImg: '../../public/assets/phil-desforges-Hxp_xDXsOSs-unsplash.jpg',
    serviceOffered: 'Mobile App Development',
    serviceDetails:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam pariatur consectetur, quidem quasi modi culpa delectus quisquam suscipit eveniet eius ratione vitae omni dolorum nam unde repellendus hic exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem in earum beatae, maxime quod repellendus rerum voluptatem doloribus vero provident voluptatum reiciendis sed suscipit dignissimos ipsam commodi eveniet eos? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia maiores dolorem sequi consequatur eaque mollitia temporibus voluptas, a quisquam? Voluptate sunt veritatis corporis delectus nobis omnis eligendi accusamus ad est.',
  },
  {
    serviceId: 'eCommerce',
    serviceImg: '../../public/assets/thom-bradley-ap8jsn3B9gI-unsplash.jpg',
    serviceOffered: 'eCommerce Website Development',
    serviceDetails:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam pariatur consectetur, quidem quasi modi culpa delectus quisquam suscipit eveniet eius ratione vitae omni dolorum nam unde repellendus hic exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem in earum beatae, maxime quod repellendus rerum voluptatem doloribus vero provident voluptatum reiciendis sed suscipit dignissimos ipsam commodi eveniet eos? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia maiores dolorem sequi consequatur eaque mollitia temporibus voluptas, a quisquam? Voluptate sunt veritatis corporis delectus nobis omnis eligendi accusamus ad est.',
  },
  {
    serviceId: 'web-design',
    serviceImg: '../../public/assets/thom-bradley-ap8jsn3B9gI-unsplash.jpg',
    serviceOffered: 'Website Design & Development',
    serviceDetails:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam pariatur consectetur, quidem quasi modi culpa delectus quisquam suscipit eveniet eius ratione vitae omni dolorum nam unde repellendus hic exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem in earum beatae, maxime quod repellendus rerum voluptatem doloribus vero provident voluptatum reiciendis sed suscipit dignissimos ipsam commodi eveniet eos? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia maiores dolorem sequi consequatur eaque mollitia temporibus voluptas, a quisquam? Voluptate sunt veritatis corporis delectus nobis omnis eligendi accusamus ad est.',
  },
  {
    serviceId: 'web-maintanice',
    serviceImg: '../../public/assets/thom-bradley-ap8jsn3B9gI-unsplash.jpg',
    serviceOffered: 'Website/App Maintiance & Support',
    serviceDetails:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam pariatur consectetur, quidem quasi modi culpa delectus quisquam suscipit eveniet eius ratione vitae omni dolorum nam unde repellendus hic exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem in earum beatae, maxime quod repellendus rerum voluptatem doloribus vero provident voluptatum reiciendis sed suscipit dignissimos ipsam commodi eveniet eos? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia maiores dolorem sequi consequatur eaque mollitia temporibus voluptas, a quisquam? Voluptate sunt veritatis corporis delectus nobis omnis eligendi accusamus ad est.',
  },
]

function ServicesOffered() {
  const classes = useStyles()
  let display = ''
  return (
    <>
      <Container maxWidth="xl">
        {services.map((service, index) => (
          <div key={index}>
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
                  <Box
                    display={
                      index % 2 === 0 ? (display = '') : (display = 'none')
                    }
                  >
                    <img alt={service.serviceId} className={classes.img} src={service.serviceImg} />
                  </Box>
                </Grid>
              </Hidden>
              <Hidden mdUp>
                <Grid>
                  <Box display="">
                    <img alt={service.serviceId} className={classes.img} src={service.serviceImg} />
                  </Box>
                </Grid>
              </Hidden>
              <Grid>
                <Typography variant="h4" className={classes.titles}>
                  {service.serviceOffered}
                </Typography>
                <div className={classes.line}/>
                <Typography className={classes.servicePara}>
                  {service.serviceDetails}
                </Typography>

                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="flex-end"
                  className={classes.btnWrapper}
                >
                  <Link to={'/services/'+ service.serviceId} className={classes.links}>
                    <Button
                        className={classes.btn}
                        startIcon={<MenuBookIcon />}
                        variant="outlined"
                        size="large"
                    >
                      Learn More
                    </Button>
                  </Link>

                </Grid>
              </Grid>
              <Hidden mdDown>
                <Grid>
                  <Box
                    display={
                      index % 2 === 1 ? (display = '') : (display = 'none')
                    }
                  >
                    <img alt={service.serviceId} className={classes.img} src={service.serviceImg} />
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
