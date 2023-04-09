import React from 'react'
import { Typography, Grid, Container } from '@mui/material'
import SectionHeader from '../../components/sections/SectionHeader'
import { Background } from '../styles/sections/MissionStatement.styles'
import videoFile from '../../../public/assets/Comp_2_33 2.mp4'

function MissionStatement() {
  return (
    <>
      <Background>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            width: '100%',
            left: '50%',
            top: '50%',
            minHeight: '100%',
            minWidth: '100%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: '-1',
          }}
        >
          <source src={videoFile} type="video/mp4" />
        </video>
        <SectionHeader title="Our Vision" subTitle="Empowering your digital presence" />
        <Container maxWidth="md" sx={{ padding: '2rem 0rem' }}>
          <Grid container direction="row" justify="center">
            <Typography sx={{ lineHeight: '1.5rem', letterSpacing: '.05rem', padding: '0 1.5rem' }}>
              Our goal is to create customized, top-notch, and budget-friendly websites for a wide
              range of customers. We strive to depart from standard designs and generate
              unparalleled, immersive, and dynamic web encounters. Our commitment is to fashion
              compelling websites that inspire user participation, enhance your web visibility, and
              foster client involvement.
            </Typography>
          </Grid>
        </Container>
      </Background>
    </>
  )
}

export default MissionStatement
