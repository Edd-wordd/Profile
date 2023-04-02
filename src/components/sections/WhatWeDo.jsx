import React from 'react'
import { Container, Typography, Grid, Paper } from '@mui/material'
import { SectionHeader } from '../index'
// import TypeIt from 'typeit-react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { useStyles } from '../styles/sections/WhatWeDo.styles'
import bulletPoints from '../../data/whatWeDoData'

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
          {bulletPoints.map((value) => (
            <Grid container direction="row" justify="flex-start" alignItems="center" key={value.id}>
              <CheckCircleIcon className={classes.icons} />
              {/*<TypeIt*/}
              {/*  className={classes.coreValue}*/}
              {/*  options={{*/}
              {/*    strings: [`${value.bulletpoint}`],*/}
              {/*    speed: 125,*/}
              {/*    waitUntilVisible: true,*/}
              {/*    cursor: false,*/}
              {/*    startDelay: `${value.delay}`,*/}
              {/*  }}*/}
              {/*/>*/}
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
