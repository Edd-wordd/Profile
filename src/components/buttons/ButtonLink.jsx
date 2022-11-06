import React from 'react'
import { Button, Grid, makeStyles, Link } from '@material-ui/core'
import ComputerIcon from '@material-ui/icons/Computer'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import mainTheme from '../../theme'

const useStyles = makeStyles((theme) => ({
  root: {},
  btnWrapper: {
    margin: '2rem 0 5rem 0',
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: mainTheme.palette.defaultLight.main,
  },
  btn: {
    border: 'none',
    fontWeight: 600,
    textDecoration: 'underline',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  BtnIcon: {
    color: ' #FE6B8B',
  },
}))

function ButtonLink(props) {
  const classes = useStyles()
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
        <Link href={props.linkTwo}>
          <Button
            className={classes.btn}
            endIcon={<ArrowRightAltIcon className={classes.BtnIcon} />}
            size="large"
          >
            {props.btnTwoText}
          </Button>
        </Link>
      </Grid>
    </div>
  )
}

export default ButtonLink
