import React from 'react'
import { Container, Typography, Grid, Paper, Hidden } from '@mui/material'
import BeenhereIcon from '@mui/icons-material/Beenhere'
import getStartedSteps from '../../data/getStartedData'
import ButtonLink from '../buttons/ButtonLink'
import SectionHeader from '../../components/sections/SectionHeader'
import {
  DottedLine,
  Card,
  IconWrapper,
  GetStartedBackground,
} from '../styles/sections/GetStarted.styles'

function GetStarted() {
  return (
    <GetStartedBackground>
      <Grid sx={{ padding: '1.5rem' }}>
        <SectionHeader
          title="How to Get Started with Our Services"
          subTitle="Start your journey today!"
        />
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
        {getStartedSteps.map((step) => (
          <Paper key={step.id} component={Card} variant="outlined">
            <Grid container direction="row" justifyContent="center" alignItems="center">
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                {step.title}
              </Typography>
              <Typography paragraph variant="body1" sx={{ color: 'text.secondary' }}>
                {step.description}
              </Typography>
            </Grid>
          </Paper>
        ))}
      </Grid>

      <Container maxWidth="lg">
        <Grid container direction="row" justifyContent="center">
          <Typography paragraph variant="body1" sx={{ color: 'text.secondary' }}>
            "At monaTech, we are dedicated to delivering exceptional quality that is innovative and
            unique to each project."
          </Typography>
        </Grid>
      </Container>

      <ButtonLink linkOne="/contact" btnOneText="Get Started with Us Now" />
    </GetStartedBackground>
  )
}

export default GetStarted
