import React, { useState } from 'react'
import { Fade, Modal, Button, TextField, Typography } from '@material-ui/core'
import { PopupButton } from 'react-calendly'
import { Alert, AlertTitle, Backdrop } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { useStyles } from '../styles/buttons/BookCallButton.styles'

const textInputs = [
  {
    id: '2000',
    name: 'fullName',
    label: 'Full Name',
    required: true,
    variant: 'outlined',
    size: 'small',
    type: 'text',
    InputLabelProps: {
      shrink: true,
    },
    style: {
      width: '49%',
      paddingRight: '1%',
    },
  },
  {
    id: '2002',
    name: 'phoneNumber',
    label: 'Phone Number',
    required: true,
    placeholder: '( ___ ) - ___ - ____',
    variant: 'outlined',
    size: 'small',
    type: 'text',
    InputLabelProps: {
      shrink: true,
    },
    style: {
      width: '49%',
    },
  },
  {
    id: '2003',
    name: 'email',
    label: 'Email',
    required: true,
    placeholder: 'email@email.com',
    variant: 'outlined',
    size: 'small',
    fullWidth: true,
    type: 'email',
    InputLabelProps: {
      shrink: true,
    },
  },
  {
    id: '2004',
    name: 'companyName',
    label: 'Company Name or URL',
    required: true,
    variant: 'outlined',
    size: 'small',
    fullWidth: true,
    type: 'text',
    InputLabelProps: {
      shrink: true,
    },
  },
  {
    id: '2005',
    name: 'userMessage',
    label: 'How may we help you?',
    required: true,
    multiline: true,
    rowsMax: 4,
    variant: 'outlined',
    size: 'small',
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
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [alert, setAlert] = useState(false)
  const [formInput, setFormInput] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    userMessage: '',
  })

  const validateForm = () => {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const fullNameRegex = '^[a-zA-Z]{2,20} [a-zA-Z]{2,20}$'

    const invalidInputs = {}
    invalidInputs.fullName = formInput.fullName.trim().match(fullNameRegex)
      ? ''
      : 'Please enter a valid full name!'
    invalidInputs.phoneNumber = formInput.phoneNumber.trim().match(phoneRegex)
      ? ''
      : 'Please enter a valid phone #!'
    invalidInputs.email = formInput.email.trim().match(emailRegex)
      ? ''
      : 'Please enter a valid email!'
    invalidInputs.companyName = formInput.companyName.trim()
      ? ''
      : 'Company name or URL is required!'
    invalidInputs.userMessage = formInput.userMessage.trim()
      ? ''
      : 'Please let us know how we can help you!'
    setError({ ...invalidInputs })
    return Object.values(invalidInputs).every((x) => x === '')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    data.append("timeStamp", new Date())
    console.log(Object.fromEntries(data.entries()))
    if (validateForm()) {
      setError(false)
      setAlert(true)
      setFormInput({
        fullName: '',
        phoneNumber: '',
        email: '',
        companyName: '',
        userMessage: '',
      })
      console.log('form is valid')
    }
  }
  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value })
  }
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const LoadSpinner = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setShow(!show)
    }, 700)
    handleOpen()
  }

  return (
    <div>
      <button type="button" onClick={LoadSpinner} className={classes.bookBtn}>
        Book a free consultation call
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
                {error && !alert && (
                  <Alert onClose={() => setError(false)} severity="error" className={classes.alert}>
                    <AlertTitle>Error</AlertTitle>
                    {`You are missing ${Object.values(error).filter((err) => err !== '').length} ${
                      Object.values(error).filter((err) => err !== '').length > 1
                        ? 'fields! Please fill them out.'
                        : 'field! Please fill it out.'
                    }`}
                  </Alert>
                )}
                {alert && !error && (
                  <Alert onClose={() => setAlert(false)} severity="success" className={classes.alert}>
                    <AlertTitle>Success</AlertTitle>
                    Your message has been sent!
                  </Alert>
                )}
                <form
                  className={classes.form}
                  noValidate
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  {textInputs.map((value) => (
                    <TextField
                      key={value.id}
                      {...value}
                      error={!!error[value.name]}
                      helperText={ error[value.name] || " " }
                      className={classes.textField}
                      value={formInput[value.name]}
                      onChange={handleChange}
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
                    variant="contained"
                    color="primary"
                    aria-label="submit button"
                    type="submit"
                    disabled={alert || error}
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
