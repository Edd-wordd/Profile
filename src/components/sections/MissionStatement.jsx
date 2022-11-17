import React from 'react'
import { Typography, Grid, Container } from '@material-ui/core'
import { SectionHeader } from '../index'
import GroupIcon from '@material-ui/icons/Group'
import { useStyles } from '../styles/MissionStatement.styles'

function MissionStatement(props) {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <SectionHeader
        title="Our Mission Statement"
        subTitle="we exist because of people like you!"
      />
      <Container maxWidth="md" className={classes.wrapper}>
        <Grid container direction="row" justify="center">
          <Grid container direction="row" justify="center">
            <GroupIcon className={classes.icons} />
          </Grid>
          <Typography className={classes.missionStatement}>
            Our mission is to design and build more affordable, high quality, custom websites for
            everyone. With so many “cookie cutter” websites out there, we strive to stand out from
            the crowd and build one-of-a-kind websites that are unique to you and no one else. It is
            our goal to build engaging and interactive websites that your clients and customers will
            spend more time on, thus
          </Typography>
        </Grid>
      </Container>
    </div>
  )
}

export default MissionStatement
