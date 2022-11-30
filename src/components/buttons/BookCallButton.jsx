import React, { useState } from 'react'
import { Fade, Modal, Button, TextField, Typography } from '@material-ui/core'
import { useStyles } from '../styles/buttons/BookCallButton.styles'
import { Backdrop } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { PopupButton } from 'react-calendly'

const textInputs = [
  {
    required: true,
    id: 'firstName',
    label: 'First Name',
    variant: 'outlined',
    size: 'small',
  },
  {
    required: true,
    id: 'lastName',
    label: 'Last Name',
    variant: 'outlined',
    size: 'small',
  },
  {
    required: true,
    id: 'pNumber',
    label: 'Phone Number',
    variant: 'outlined',
    size: 'small',
  },
  {
    required: true,
    id: 'email',
    label: 'Email',
    variant: 'outlined',
    size: 'small',
  },
  {
    required: true,
    id: 'companyName',
    label: 'Company Name',
    autoComplete: 'current-password',
    variant: 'outlined',
    fullWidth: true,
  },
  {
    required: false,
    id: 'companyUrl',
    label: 'Company Website or URL',
    autoComplete: 'current-password',
    variant: 'outlined',
    fullWidth: true,
  },
  {
    required: true,
    id: 'userMessage',
    label: 'How Can We Help You?',
    multiline: true,
    rowsMax: 4,
    variant: 'outlined',
    fullWidth: true,
  },
  // {
  //   required: true,
  //   id: 'calendly',
  //   label: 'Calendly Link',
  //   multiline: false,
  //   variant: 'outlined',
  //   fullWidth: true,
  // },
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
                <Typography className={classes.formHeader}>
                  Let's get your consultation call booked!
                </Typography>
                <form className={classes.form} noValidate autoComplete="off">
                  {textInputs.map((value, index) => (
                    <TextField
                      className={classes.textField}
                      key={index}
                      required={value.required}
                      id={value.id}
                      label={value.label}
                      variant={value.variant}
                      size={value.size}
                      multiline={value.multiline}
                      rowsMax={value.rowsMax}
                      style={value.style}
                      fullWidth={value.fullWidth}
                    />
                  ))}
                  <PopupButton
                    url="https://calendly.com/mona-tech"
                    text="Schedule time with us"
                    rootElement={document.getElementById('root')}
                    className={classes.calendlyBtn}
                  />
                  <Button
                    className={classes.submitBtn}
                    size="large"
                    variant="outlined"
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
