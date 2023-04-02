import React from 'react'
import { Typography, Grid, Container } from '@mui/material'
import { SectionHeader } from '../index'
import { Background } from '../styles/sections/MissionStatement.styles'

function MissionStatement() {
  return (
    <>
      <Background>
        <SectionHeader
          title="Our Mission Statement"
          subTitle="we exist because of people like you!"
        />
        <Container maxWidth="md" sx={{ padding: '2rem 0rem' }}>
          <Grid container direction="row" justify="center">
            <Typography sx={{ lineHeight: '1.5rem', letterSpacing: '.05rem', padding: '0 1.5rem' }}>
              Our mission is to design and build more affordable, high quality, custom websites for
              everyone. With so many “cookie cutter” websites out there, we strive to stand out from
              the crowd and build one-of-a-kind websites that are unique to you and no one else. It
              is our goal to build engaging and interactive websites that your clients and customers
              will spend more time on, thus
            </Typography>
          </Grid>
        </Container>
      </Background>
    </>
  )
}

export default MissionStatement
