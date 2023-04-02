import React from 'react'
import { Typography, Grid, Paper } from '@mui/material'
import ChildCareIcon from '@mui/icons-material/ChildCare'
import AdbIcon from '@mui/icons-material/Adb'
import FlightIcon from '@mui/icons-material/Flight'
import RedditIcon from '@mui/icons-material/Reddit'
import TwitterIcon from '@mui/icons-material/Twitter'
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports'
// import TypeIt from 'typeit-react'
import { useStyles } from '../styles/sections/TechUsed.styles'
import techUsed from '../../data/techData'

const icons = [AdbIcon, ChildCareIcon, FlightIcon, RedditIcon, TwitterIcon, SportsMotorsportsIcon]
function TechUsed(props) {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" className={classes.headerWrapper}>
        <Typography variant="h3" className={classes.header}>
          {/*<TypeIt*/}
          {/*  options={{*/}
          {/*    strings: ['Technologies!'],*/}
          {/*    speed: 125,*/}
          {/*    waitUntilVisible: true,*/}
          {/*  }}*/}
          {/*></TypeIt>*/}
        </Typography>
      </Grid>
      <Grid container direction="row" justify="space-between" alignItems="center">
        {techUsed.map((value, index) => {
          const Icon = icons[index]
          return (
            <Grid
              item
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
              sm={12}
              md={5}
              lg={2}
              key={index}
            >
              <Paper elevation={0} className={classes.boxes}>
                {/*<Icon className={classes.icon} />*/}
                <Grid item container direction="row" justify="center" alignItems="center">
                  <Typography variant="subtitle1" className={classes.iconTitle}>
                    <b>{value.tech}</b>
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default TechUsed
