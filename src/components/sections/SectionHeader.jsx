// import React from 'react'
// import { Hidden, Grid } from '@mui/material'
// import {
//   TitleWrapper,
//   Title,
//   SubTitle,
//   LineL,
//   Diamond,
//   LineR,
//   DiamondWrapper,
// } from '../styles/sections/SectionHeader.styles'
//
// function SectionHeader(props) {
//   return (
//     <>
//       <Grid container component={TitleWrapper}>
//         <Title variant="h4">{props.title}</Title>
//         <Grid container item component={DiamondWrapper}>
//           <Hidden xsDown>
//             <LineL />
//             <Diamond />
//             <LineR />
//           </Hidden>
//           <Hidden smUp>
//             <LineL />
//             <Diamond />
//             <LineR />
//           </Hidden>
//         </Grid>
//         <SubTitle variant="h6">{props.subTitle}</SubTitle>
//       </Grid>
//     </>
//   )
// }
//
// export default SectionHeader

import React from 'react'
import { Hidden, Grid, Typography } from '@mui/material'
import {
  TitleWrapper,
  DiamondWrapper,
  LineL,
  LineR,
  Diamond,
  Title,
  SubTitle,
} from '../styles/sections/SectionHeader.styles'

function SectionHeader(props) {
  return (
    <>
      <Grid container component={TitleWrapper}>
        <Typography variant="h4" component={Title}>
          {props.title}
        </Typography>
        <Grid container item component={DiamondWrapper}>
          <Hidden xsDown>
            <LineL />
            <Diamond />
            <LineR />
          </Hidden>
          <Hidden smUp>
            <LineL />
            <Diamond />
            <LineR />
          </Hidden>
        </Grid>
        <Typography variant="h6" component={SubTitle}>
          {props.subTitle}
        </Typography>
      </Grid>
    </>
  )
}

export default SectionHeader
