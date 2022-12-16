import React from 'react'
import { Button, Grid, Link } from '@material-ui/core'
import ComputerIcon from '@material-ui/icons/Computer'
import { useStyles } from '../styles/buttons/ButtonLink.styles'

function ButtonLink(props) {
  const classes = useStyles(props)

  return (
    <div>
      <Grid container direction="row" justify="center" className={classes.btnWrapper}>
        <Link href={props.linkOne}>
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<ComputerIcon />}
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
