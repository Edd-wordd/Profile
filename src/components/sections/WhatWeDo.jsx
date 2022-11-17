import React from 'react'
import { Container, Typography, Grid, Link, Paper, Slide } from '@material-ui/core'
import { SectionHeader } from '../index'
import TypeIt from 'typeit-react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { Transition } from 'react-transition-group'
import { useStyles } from '../styles/WhatWeDo.styles'

const bulletPoints = [
  {
    bulletpoint: 'Lorem, ipsum dolor sit amet consectetur edward is he',
    delay: 0,
  },
  {
    bulletpoint: '2Lorem, ipsum dolor sit amet consectetur edward is he',
    delay: 600,
  },
  {
    bulletpoint: '3Lorem, ipsum dolor sit amet consectetur edward is he',
    delay: 1200,
  },
  {
    bulletpoint: '4Lorem, ipsum dolor sit amet consectetur edward is he',
    delay: 1800,
  },
  {
    bulletpoint: '5Lorem, ipsum dolor sit amet consectetur edward is he',
    delay: 2400,
  },
]
const servicePoints = [
  {
    title: 'reimagine',
    details:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor adrerum possimus modi repudiandae',
  },
  {
    title: 'reimagine',
    details:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor adrerum possimus modi repudiandae',
  },
  {
    title: 'reimagine',
    details:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor adrerum possimus modi repudiandae',
  },
  {
    title: 'reimagine',
    details:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor adrerum possimus modi repudiandae',
  },
]

function WhatWeDo(props) {
  const classes = useStyles(props)
  const [inProp, setInProp] = React.useState(false)

  const handleChange = () => {
    if (window.scrollY >= 2500) {
      setInProp(true)
    } else {
      setInProp(false)
    }
  }
  window.addEventListener('scroll', handleChange)
  return (
    <>
      <SectionHeader title="Heres what We Do!" subTitle="See the difference" />

      <Grid container direction="row" justify="center">
        <Paper variant="outlined" className={classes.box1}>
          <Typography variant="subtitle1">
            <b>THese little details make the diference</b>
          </Typography>
          <Typography paragraph variant="body1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor ad rerum possimus modi
            repudiandaeorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor ad rerum
            possimus modi repudiandaeorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            ad rerum possimus modi repudiandaeorem, ipsum dolor sit amet consectetur adipisicing
            elit. Dolor ad rerum possimus modi repudiandaeorem, ipsum dolor sit amet consectetur
            adipisicing elit. Dolor ad rerum possimus modi repudiandaeorem, ipsum dolor sit amet
            consectetur adipisicing elit. Dolor ad rerum possimus modi repudiandaeorem, ipsum dolor
            sit amet consectetur adipisicing elit. Dolor ad rerum possimus modi repudiandaeorem,
            ipsum dolor sit amet consectetur adipisicing elit. Dolor ad rerum possimus modi
            repudiandae
          </Typography>
        </Paper>
        <Paper variant="outlined" className={classes.box2}>
          {bulletPoints.map((value, index) => (
            <Grid container direction="row" justify="flex-start" alignItems="center" key={index}>
              <CheckCircleIcon className={classes.icons} />
              <Typography variant="body1" className={classes.coreValue}>
                <TypeIt
                  className={classes.bulletPoint}
                  options={{
                    strings: [`${value.bulletpoint}`],
                    speed: 125,
                    waitUntilVisible: true,
                    cursor: false,
                    startDelay: `${value.delay}`,
                  }}
                ></TypeIt>
              </Typography>
            </Grid>
          ))}
        </Paper>
        <Container maxWidth="lg">
          <Grid className={classes.paragraphWrapper}>
            <Typography paragraph variant="body1" className={classes.paraInfo}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, officiis ea! Atque,
              ratione cumque. Fugiat earum eius doloribus quo repudiandae, maiores excepturi officia
              iusto consequuntur quis odio labore, commodi minima? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Deserunt, officiis ea! Atque, ratione cumque. Fugiat
              earum eius doloribus quo repudiandae, maiores excepturi officia iusto consequuntur
              quis odio labore, commodi minima? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deserunt, officiis ea! Atque, ratione cumque. Fugiat earum eius doloribus quo
              repudiandae, maiores excepturi officia iusto consequuntur quis odio labore, commodi
              minima?8
            </Typography>
          </Grid>
        </Container>

        {servicePoints.map((service, index) => (
          <Transition in={setInProp} timeout={2000} key={index}>
            {(state) => (
              <Slide in={inProp} timeout={2500} direction="up">
                <Paper elevation={6} className={classes.boxes}>
                  <Typography variant="subtitle1">
                    <b>{service.title}</b>
                  </Typography>
                  <Typography paragraph variant="body1" className={classes.coreValue}>
                    {service.details}
                    <Link> Learn More</Link>
                  </Typography>
                </Paper>
              </Slide>
            )}
          </Transition>
        ))}
      </Grid>
    </>
  )
}

export default WhatWeDo
