import React from 'react'
import { Button, Grid, makeStyles, Link } from '@material-ui/core'
import ComputerIcon from '@material-ui/icons/Computer'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import mainTheme from '../../theme'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

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
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

function ButtonLink(props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
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
        {/*<Link href={props.linkTwo}>*/}
        <Button
          className={classes.btn}
          endIcon={<ArrowRightAltIcon className={classes.BtnIcon} />}
          size="large"
          onClick={handleOpen}
        >
          {props.btnTwoText}
        </Button>
        {/*</Link>*/}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">
                This will be a form to fill out for a Future Client calls
              </h2>
              <p id="transition-modal-description">
                Form with all the required information from the client
              </p>
            </div>
          </Fade>
        </Modal>
      </Grid>
    </div>
  )
}

export default ButtonLink
