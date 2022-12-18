import React, { useState } from 'react'
import { Fade, Modal, Button, TextField, Typography } from '@material-ui/core'
import { useStyles } from '../styles/buttons/BookCallButton.styles'
import { Backdrop } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { PopupButton } from 'react-calendly'

const textInputs = [
  {
    id: 2000,
    name: 'firstName',
    label: 'First Name',
    required: true,
    variant: 'outlined',
    size: 'small',
    type: 'text',
    InputLabelProps: {
      shrink: true,
    },
  },
  {
    id: 2001,
    name: 'lastName',
    label: 'Last Name',
    required: true,
    variant: 'outlined',
    size: 'small',
    type: 'text',
    InputLabelProps: {
      shrink: true,
    },
  },
  {
    id: 2002,
    name: 'phoneNumber',
    label: 'Phone Number',
    required: true,
    variant: 'outlined',
    size: 'small',
    type: 'text',
    InputLabelProps: {
      shrink: true,
    },

  },
  {
    id: 2003,
    name: 'email',
    label: 'Email',
    required: true,
    variant: 'outlined',
    size: 'small',
    type: 'email',
    InputLabelProps: {
      shrink: true,
    },
  },
  {
    id: 2004,
    name: 'companyName',
    label: 'Company Name',
    required: true,
    variant: 'outlined',
    fullWidth: true,
    type: 'text',
    InputLabelProps: {
      shrink: true,
    },
  },
  {
    id: 2005,
    name: 'userMessage',
    label: 'How may we help you?',
    required: true,
    multiline: true,
    rowsMax: 4,
    variant: 'outlined',
    fullWidth: true,
    type: 'text',
    InputLabelProps: {
      shrink: true,
    },
  },
]

export default function BookCallButton(props) {
  const classes = useStyles(props)
  const [open, setOpen] = React.useState(false)
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)

  const LoadSpinner = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setShow(!show)
    }, 700)
    handleOpen()
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <button type="button" onClick={LoadSpinner} className={classes.bookBtn}>
        Book a free Consultation Call
      </button>
      {loading ? (
        <Backdrop open>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <>
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
                <Button color="primary" onClick={handleClose} className={classes.closeBtn}>
                  X
                </Button>

                <Typography className={classes.formHeader}>
                  Let's get your consultation call booked!
                </Typography>

                <form className={classes.form} noValidate autoComplete="off">
                  {textInputs.map((value, index) => (
                    <TextField
                      className={classes.textField}
                      key={value.id}   required={value.required}
                      {...value}
                    />))}
                  <PopupButton
                    url="https://calendly.com/mona-tech"
                    text="Schedule time with us"
                    rootElement={document.getElementById('root')}
                    className={classes.calendlyBtn}
                  />
                  <Button
                    className={classes.submitBtn}
                    size="large"
                    variant="contained"
                    color="primary"
                    aria-label="large outlined button"
                    onClick={() => submitForm()}
                  >
                    SUBMIT
                  </Button>
                </form>
              </div>
            </Fade>
          </Modal>
        </>
      )}
    </div>
  )
}
