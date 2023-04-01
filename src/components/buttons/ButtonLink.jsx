// import React from 'react'
// import { Button, Grid, Link } from '@mui/material'
// import { useStyles } from '../styles/buttons/ButtonLink.styles'
//
// function ButtonLink(props) {
//   const classes = useStyles(props)
//
//   return (
//     <div>
//       <Grid className={classes.btnWrapper}>
//         <Link href={props.linkOne}>
//           {/*endIcon={<ArrowForward />}*/}
//           <Button className={classes.button} size="large">
//             {props.btnOneText}
//           </Button>
//         </Link>
//       </Grid>
//     </div>
//   )
// }
//
// export default ButtonLink
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
