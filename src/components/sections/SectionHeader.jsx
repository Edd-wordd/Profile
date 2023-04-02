import React from 'react'
import { Grid, Typography } from '@mui/material'
import {
  TitleWrapper,
  LeftSideLine,
  RightSideLine,
  Diamond,
} from '../styles/sections/SectionHeader.styles'

function SectionHeader(props) {
  return (
    <>
      <Grid container component={TitleWrapper}>
        <Typography variant="h4" sx={{ paddingBottom: '1rem' }} component="h4">
          {props.title}
        </Typography>
        <Grid
          container
          item
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <LeftSideLine />
          <Diamond />
          <RightSideLine />
        </Grid>
        <Typography variant="h6" sx={{ marginTop: '1rem' }} component="h6">
          {props.subTitle}
        </Typography>
      </Grid>
    </>
  )
}

export default SectionHeader
