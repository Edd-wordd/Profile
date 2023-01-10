import React from 'react'
import { Container, Typography, Grid, Link, Paper, Slide } from '@material-ui/core'
import { SectionHeader } from '../index'
import TypeIt from 'typeit-react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { useStyles } from '../styles/sections/WhatWeDo.styles'

const bulletPoints = [
  {
    id: 2000,
    bulletpoint: 'Lorem, ipsum dolor sit amet consectetur edward is he',
    delay: 0,
  },
  {
    id: 2001,
    bulletpoint: '2Lorem, ipsum dolor sit amet consectetur edward is he',
    delay: 600,
  },
  {
    id: 2002,
    bulletpoint: '3Lorem, ipsum dolor sit amet consectetur edward is he',
    delay: 1200,
  },
  {
    id: 2003,
    bulletpoint: '4Lorem, ipsum dolor sit amet consectetur edward is he',
    delay: 1800,
  },
  {
    id: 2004,
    bulletpoint: '5Lorem, ipsum dolor sit amet consectetur edward is he',
    delay: 2400,
  },
]

function WhatWeDo(props) {
  const classes = useStyles(props)

  return (
    <>
      <SectionHeader title="Heres what We Do!" subTitle="See the difference" />
      <Grid container direction="row" justify="center" className={classes.root}>
        <Paper variant="outlined" className={classes.leftSideInfoWrapper}>
          <Typography variant="subtitle1">
            <b>These little details make the difference</b>
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
        <Paper variant="outlined" className={classes.coreValueSection}>
          {bulletPoints.map((value, index) => (
            <Grid container direction="row" justify="flex-start" alignItems="center" key={value.id}>
              <CheckCircleIcon className={classes.icons} />
              <Typography variant="body1" className={classes.coreValueWrapper}>
                <TypeIt
                  className={classes.coreValue}
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
          <Grid className={classes.bottomInfoWrapper}>
            <Typography paragraph variant="body1" className={classes.bottomInfo}>
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
      </Grid>
    </>
  )
}

export default WhatWeDo
