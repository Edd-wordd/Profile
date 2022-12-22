import React, { useState } from 'react'
import { Fade, Modal, Button, TextField, Typography } from '@material-ui/core'
import { useStyles } from '../styles/buttons/BookCallButton.styles'
import { Backdrop } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { PopupButton } from 'react-calendly'

const textInputs = [
  {
    id: '2000',
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
    id: '2001',
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
    id: '2002',
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
    id: '2003',
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
    id: '2004',
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
    id: '2005',
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
  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    userMessage: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
    if (validateForm) {
      setErrors(false)
      setForm({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        companyName: '',
        userMessage: '',
      })
    }
    console.log('form is valid')
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validateForm = () => {
    let invalidInputs = {}
    invalidInputs.firstName = form.firstName ? '' : 'First Name is required'
    invalidInputs.lastName = form.lastName ? '' : 'Last Name is required'
    invalidInputs.phoneNumber = form.phoneNumber ? '' : 'Phone Number is required'
    invalidInputs.email = form.email ? '' : 'Email is required'
    invalidInputs.companyName = form.companyName ? '' : 'Company Name is required'
    invalidInputs.userMessage = form.userMessage ? '' : 'Message is required'
    setErrors({ ...invalidInputs })
    console.log(invalidInputs)
    console.log('edward')
    return Object.values(invalidInputs).every((x) => x === '')
  }

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
                <form
                  className={classes.form}
                  noValidate
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  {textInputs.map((value, index) => (
                    <TextField
                      key={value.id}
                      {...value}
                      error={!!errors[value.name]}
                      helperText={errors[value.name]}
                      className={classes.textField}
                      value={form[value.name]}
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
