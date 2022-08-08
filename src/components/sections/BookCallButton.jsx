import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import mainTheme from '../../theme'

const useStyles = makeStyles((theme) => ({
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
  bookBtn: {
    fontFamily: 'Open Sans Condensed',
    fontSize: 16,
    fontWeight: 800,
    letterSpacing: '.15rem',
    backgroundColor: 'transparent',
    // border: `2px solid ${mainTheme.palette.primary.main}`,
    border: '2px solid #1FA2FF ',
    color: mainTheme.palette.defaultLight.main,
    padding: '20px 50px',
    marginTop: '1rem',
    marginBottom: '1rem',
    borderRadius: '2rem',
    '&:hover': {
      // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      backgroundImage: `linear-gradient(#1FA2FF  20%,#12D8FA)`,
    },
  },
}))

export default function BookCallButton() {
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
      <button type="button" onClick={handleOpen} className={classes.bookBtn}>
        Book a free Consultation Call
      </button>
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
              This will be a form to fill out for a Future Client Call tiah is a hoe
            </h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
