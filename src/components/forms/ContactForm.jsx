import React from 'react'
import { Typography, Paper, Grid, Container, TextField, Button, MenuItem } from '@material-ui/core'
import { useStyles } from '../styles/forms/ContactForm.styles'
import { Alert, AlertTitle, Snackbar } from '@mui/material'

const formFieldInputs = [
  {
    id: '1001',
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    variant: 'outlined',
    required: true,
    size: 'small',
    InputLabelProps: {
      shrink: true,
    },
    style: {
      width: '46%',
    },
  },
  {
    id: '1002',
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    variant: 'outlined',
    required: true,
    InputLabelProps: {
      shrink: true,
    },
    size: 'small',
    style: {
      width: '46%',
    },
  },
  {
    id: '1003',
    name: 'phoneNumber',
    label: 'Phone Number',
    type: 'text',
    variant: 'outlined',
    required: true,
    size: 'small',
    InputLabelProps: {
      shrink: true,
    },
    style: {
      width: '46%',
    },
  },
  {
    id: '1004',
    name: 'email',
    label: 'Email',
    type: 'email',
    variant: 'outlined',
    required: true,
    InputLabelProps: {
      shrink: true,
    },
    size: 'small',
    style: {
      width: '46%',
    },
  },
  {
    id: '1005',
    name: 'companyName',
    label: 'Company Name or URL',
    type: 'text',
    variant: 'outlined',
    InputLabelProps: {
      shrink: true,
    },
    required: true,
    fullWidth: true,
  },
  {
    id: '1007',
    name: 'message',
    label: 'How can we help you?',
    variant: 'outlined',
    InputLabelProps: {
      shrink: true,
    },
    required: true,
    multiline: true,
    rowsMax: 4,
    fullWidth: true,
  },
  {
    id: '1008',
    name: 'startDate',
    variant: 'outlined',
    label: 'Start Date',
    required: false,
    fullWidth: true,
    type: 'date',
    InputLabelProps: {
      shrink: true,
    },
    inputProps: {
      min: new Date().toISOString().split('T')[0],
    },
  },
  {
    id: '1009',
    name: 'whereDidYouHearAboutUs',
    label: 'How did you hear about us?',
    variant: 'outlined',
    InputLabelProps: {
      shrink: true,
    },
    required: false,
    fullWidth: true,
    select: true,
  },
]

const selectInputs = [
  {
    value: 'google search',
    label: 'Google Search',
  },
  {
    value: 'repeat client',
    label: 'Repeat Client',
  },
  {
    value: 'referral',
    label: 'Referral',
  },
  {
    value: 'other',
    label: 'Other',
  },
]

function ContactForm(props) {
  const classes = useStyles(props)
  const [error, setError] = React.useState(false)
  const [alert, setAlert] = React.useState(false)
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    message: '',
    startDate: '',
    whereDidYouHearAboutUs: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
    if (validate()) {
      setAlert(true)
      setError(false)
      setValues({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        companyName: '',
        message: '',
        startDate: '',
        whereDidYouHearAboutUs: '',
      })
      console.log('form is valid')
    }
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const validate = () => {
    const emailRegex = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$'
    const phoneRegex = '^[0-9]{10}$'
    const nameRegex = '^[a-zA-Z]{2,20}$'

    let errors = {}
    errors.firstName = values.firstName.trim().match(nameRegex)
      ? ''
      : 'Please enter your first name'
    errors.lastName = values.lastName.trim().match(nameRegex) ? '' : 'Please enter your last name'
    errors.phoneNumber = values.phoneNumber.trim().split('-').join('').match(phoneRegex)
      ? ''
      : 'Please enter valid phone number'
    errors.email = values.email.trim().match(emailRegex) ? '' : 'Please enter valid email'
    errors.companyName = values.companyName.trim() ? '' : 'Please enter company name or url'
    errors.message = values.message ? '' : 'Please let us know how we can help you'
    errors.startDate = values.startDate ? '' : 'Please enter a start date for your project'
    errors.whereDidYouHearAboutUs = values.whereDidYouHearAboutUs ? '' : 'Please select a source'
    setError({ ...errors })
    return Object.values(errors).every((errValues) => errValues === '')
  }
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid container direction="row" justify="center">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
            className={classes.info}
            item
            xl={6}
            lg={5}
            md={10}
            xs={12}
          >
            <Typography variant="h1" className={classes.heading}>
              Need to get in Touch?
            </Typography>
            <Typography variant="h6" className={classes.message}>
              Send Us A Message
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
              Please complete the form below, click here to Book an Appointment, give us a call or
              click the message box on the lower right! Either way, we look forward to talking with
              you!
            </Typography>
          </Grid>
          <Grid item lg={5}>
            <Paper elevation={3} className={classes.formPaper}>
              <Typography className={classes.formHeader}>
                Please fill this form out! Let us know what we can do for you!
              </Typography>
              <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
                {!alert && error && (
                  <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
                    <Alert onClose={() => setError(false)} variant="filled" severity="error">
                      <AlertTitle>Error</AlertTitle>
                      {`You are missing ${
                        Object.values(error).filter((err) => err !== '').length
                      } ${
                        Object.values(error).filter((err) => err !== '').length > 1
                          ? 'fields! Please fill them out.'
                          : 'field! Please fill it out.'
                      }`}
                    </Alert>
                  </Snackbar>
                )}
                <div>
                  {alert && (
                    <Alert onClose={() => setAlert(false)} severity="success">
                      <AlertTitle>Success</AlertTitle>
                      Your form has been sent Successfully!
                      <strong>Thank you!</strong>
                    </Alert>
                  )}
                  <Grid container direction="row" justify="center" alignItems="center">
                    {formFieldInputs.map((value) => (
                      <TextField
                        key={value.id}
                        {...value}
                        error={!!error[value.name]}
                        helperText={error[value.name]}
                        onChange={handleChange}
                        value={values[value.name]}
                      >
                        {selectInputs.map((value) => (
                          <MenuItem key={value.label} {...value}>
                            {value.value}
                          </MenuItem>
                        ))}
                      </TextField>
                    ))}
                  </Grid>
                </div>
                <Button
                  className={classes.submitBtn}
                  type="submit"
                  size="large"
                  variant="contained"
                  aria-label="large outlined button"
                  color="primary"
                  id="submit"
                >
                  SUBMIT
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
export default ContactForm
