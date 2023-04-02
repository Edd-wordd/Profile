import React from 'react'
import { Container, Typography, Grid, Hidden, Paper } from '@mui/material'
import BeenhereIcon from '@mui/icons-material/Beenhere'
import { ButtonLink, SectionHeader } from '../index'
import getStartedSteps from '../../data/getStartedData'
import { DottedLine, Card, IconWrapper } from '../styles/sections/GetStarted.styles'

function GetStarted() {
  return (
    <div sx={{ paddingBottom: '6rem', backgroundColor: '#f4f1fa' }}>
      <Grid sx={{ padding: '1.5rem' }}>
        <SectionHeader title="How to get Started?" subTitle="The right time is NOW!" />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ padding: '1rem 0' }}
      >
        <Hidden mdDown>
          <IconWrapper>
            <BeenhereIcon />
          </IconWrapper>
          <DottedLine />
          <IconWrapper>
            <BeenhereIcon />
          </IconWrapper>
          <DottedLine />
          <IconWrapper>
            <BeenhereIcon />
          </IconWrapper>
          <DottedLine />
          <IconWrapper>
            <BeenhereIcon />
          </IconWrapper>
        </Hidden>
      </Grid>

      <Grid container direction="row" justifyContent="center" alignItems="center">
        {getStartedSteps.map((step, index) => (
          <Paper variant="outlined" key={step.id} component={Card}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
              <Typography variant="subtitle1">{step.title}</Typography>
              <Typography paragraph variant="body1" style={{ color: '#808080' }}>
                {step.description}
              </Typography>
            </Grid>
          </Paper>
        ))}
      </Grid>
      <Container maxWidth="lg">
        <Grid container direction="row" justifyContent="center">
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
