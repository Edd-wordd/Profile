import React from 'react'
import { Button, Grid, Link } from '@material-ui/core'
import ArrowForward from '@material-ui/icons/ArrowForward'
import { useStyles } from '../styles/buttons/ButtonLink.styles'

function ButtonLink(props) {
  const classes = useStyles(props)

  return (
    <div>
      <Grid className={classes.btnWrapper}>
        <Link href={props.linkOne}>
          <Button
            className={classes.button}
            endIcon={<ArrowForward />}
            size="large"
          >
            {props.btnOneText}
          </Button>
        </Link>
      </Grid>
    </div>
  )
}

export default ButtonLink
