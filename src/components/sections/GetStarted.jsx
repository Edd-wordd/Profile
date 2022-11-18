import React from 'react'
import { Container, Typography, Grid, Hidden, Paper } from '@material-ui/core'
import BeenhereIcon from '@material-ui/icons/Beenhere'
import { ButtonLink, SectionHeader } from '../index'
import { useStyles } from '../styles/sections/GetStarted.styles'

const getStartedSteps = [
  {
    title: '1. Call us!',
    description:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
  {
    title: '2. Discuss your Ideas!',
    description:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
  {
    title: '3. Plan your Design!',
    description:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
  {
    title: '4. Deploy your Website!',
    description:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
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
          <Paper variant="outlined" className={classes.boxes} key={index}>
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
            'We believe in high quality work, and keep our team members practicing the industry
            standards while developing new innovative ways.',
          </Typography>
        </Grid>
      </Container>
      <ButtonLink
        linkOne="/contact"
        linkTwo="/"
        btnOneText="Get Started"
        btnTwoText="Questions? Talk to an Expert!"
      />
    </div>
  )
}

export default GetStarted
