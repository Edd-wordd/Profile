import React from 'react'
import { Grid, Link } from '@mui/material'
import { CustomButton, BtnWrapper } from '../styles/buttons/ButtonLink.styles'

function ButtonLink(props) {
  return (
    <div>
      <Grid component={BtnWrapper}>
        <Link href={props.linkOne}>
          <CustomButton size="large">{props.btnOneText}</CustomButton>
        </Link>
      </Grid>
    </div>
  )
}

export default ButtonLink
