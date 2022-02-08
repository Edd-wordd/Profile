import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import mainTheme from '../../theme'
import { Hidden, Typography, Grid, Container, Paper } from '@material-ui/core'
import SectionHeader from './SectionHeader'
import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded'
import GroupIcon from '@material-ui/icons/Group'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f4f1fa',
    padding: '2rem 0rem',
  },
  wrapper: {
    padding: '2rem 0rem',
  },
  paper: {
    padding: '2rem',
    // backgroundColor: '#f4f1fa',
  },
  icons: {
    width: '50px',
    height: 'auto',
    color: '#616161',
  },
  missionStatement: {
    lineHeight: theme.spacing(0.25),
    letterSpacing: theme.spacing(0.1),
  },
}))

function MissionStatement() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <SectionHeader
        title="Our Mission Statement"
        subTitle="we exist because of people like you!"
      />
      <Container maxWidth="md" className={classes.wrapper}>
        <Grid container direction="row" justify="center">
          {/* <Paper elevation={1} className={classes.paper}> */}
          <Grid container direction="row" justify="center">
            <GroupIcon className={classes.icons} />
          </Grid>
          <Typography className={classes.missionStatement}>
            Our mission is to design and build more affordable, high quality,
            custom websites for everyone. With so many “cookie cutter” websites
            out there, we strive to stand out from the crowd and build
            one-of-a-kind websites that are unique to you and no one else. It is
            our goal to build engaging and interactive websites that your
            clients and customers will spend more time on, thus
          </Typography>
          {/* </Paper> */}
        </Grid>
      </Container>
    </div>
  )
}

export default MissionStatement
