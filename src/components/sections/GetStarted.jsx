import React from 'react'
import { Container, Typography, Grid, Hidden, Paper } from '@mui/material'
import BeenhereIcon from '@mui/icons-material/Beenhere'
import { ButtonLink, SectionHeader } from '../index'
import { useStyles } from '../styles/sections/GetStarted.styles'

const getStartedSteps = [
  {
    id: 1000,
    title: '1. Call us!',
    description:
      'Contact us by phone or email to schedule an initial consultation, where we can discuss your business needs and goals, as well as our services and pricing options.',
  },
  {
    id: 1001,
    title: '2. Planning and Design!',
    description:
      "Once the planning phase is complete, our company can move on to the design phase. This involves creating a visual representation of the website using wireframes or mockups. Our company will also finalize the website's layout, color scheme, and typography during this phase.\n" +
      '\n',
  },
  {
    id: 1002,
    title: '3. Development!',
    description:
      " With the website's design finalized, our company can start the development phase. This involves building the website's front-end and back-end components, such as the user interface, database, and server-side scripts. We also test the website's functionality and compatibility during this phase.",
  },
  {
    id: 1003,
    title: '4. Launch your Website!',
    description:
      "Once the website is fully developed and tested, our company can launch it. This involves deploying the website to a web server and configuring it for optimal performance and security. We also optimize the website's search engine visibility and monitor its traffic and user behavior to ensure that it meets your website's goals.",
  },
]

function GetStarted(props) {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <Grid className={classes.headingWrapper}>
        <SectionHeader title="How to get Started?" subTitle="The right time is NOW!" />
      </Grid>
      <Grid
        className={classes.iconWrapper}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Hidden mdDown>
          <BeenhereIcon className={classes.icons} />
          <div className={classes.line}></div>
          <BeenhereIcon className={classes.icons} />
          <div className={classes.line}></div>
          <BeenhereIcon className={classes.icons} />
          <div className={classes.line}></div>
          <BeenhereIcon className={classes.icons} />
        </Hidden>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        {getStartedSteps.map((step, index) => (
          <Paper variant="outlined" className={classes.boxes} key={step.id}>
            <Grid container direction="row" justify="center" alignItems="center">
              <Typography variant="subtitle1">{step.title}</Typography>
              <Typography paragraph variant="body1" style={{ color: '#808080' }}>
                {step.description}
              </Typography>
            </Grid>
          </Paper>
        ))}
      </Grid>
      <Container maxWidth="lg">
        <Grid container direction="row" justify="center">
          <Typography paragraph variant="body1" style={{ color: '#808080' }}>
            "We don't just deliver top-notch quality, we innovate it into every project we touch -
            that's the hallmark of our commitment."
          </Typography>
        </Grid>
      </Container>
      <ButtonLink linkOne="/contact" btnOneText="Get Started" />
    </div>
  )
}

export default GetStarted
