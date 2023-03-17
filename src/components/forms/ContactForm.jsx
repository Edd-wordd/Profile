import React from 'react'
import {
  Typography,
  Paper,
  Grid,
  Container,
  TextField,
  Button,
  MenuItem,
  Hidden,
} from '@material-ui/core'
import { Alert, AlertTitle, Snackbar } from '@mui/material'
import { useStyles } from '../styles/forms/ContactForm.styles'
import { checkPreviousDate } from '../../utils'

const formFieldInputs = [
  {
    id: '1001',
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    variant: 'outlined',
    helperText: ' ',
    required: true,
    size: 'small',
    InputLabelProps: {
      shrink: true,
    },
    style: {
      width: '45%',
    },
  },
  {
    id: '1002',
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    variant: 'outlined',
    helperText: ' ',
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
    placeholder: '( ___ ) - ___ - ____',
    variant: 'outlined',
    helperText: ' ',
    required: true,
    size: 'small',
    InputLabelProps: {
      shrink: true,
    },
    style: {
      width: '45%',
    },
  },
  {
    id: '1004',
    name: 'email',
    label: 'Email',
    type: 'email',
    variant: 'outlined',
    helperText: ' ',
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
    helperText: ' ',
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
    helperText: ' ',
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
    helperText: ' ',
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
  const [value, setValue] = React.useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    message: '',
    startDate: '',
    whereDidYouHearAboutUs: '',
  })

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
  }
  const validate = () => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    const nameRegex = '^[a-zA-Z]{2,20}$'

    const errors = {}
    errors.firstName = value.firstName.trim().match(nameRegex) ? '' : 'Please enter your first name'
    errors.lastName = value.lastName.trim().match(nameRegex) ? '' : 'Please enter your last name'
    errors.phoneNumber = value.phoneNumber.trim().split('-').join('').match(phoneRegex)
      ? ''
      : 'Please enter valid phone number'
    errors.email = value.email.trim().match(emailRegex) ? '' : 'Please enter valid email'
    errors.companyName = value.companyName.trim() ? '' : 'Please enter company name or url'
    errors.message = value.message ? '' : 'Please let us know how we can help you'
    errors.startDate = checkPreviousDate(value.startDate)
      ? ''
      : 'Please enter a start date for your project'
    errors.whereDidYouHearAboutUs = value.whereDidYouHearAboutUs ? '' : 'Please select a source'
    setError({ ...errors })
    return Object.values(errors).every((errValues) => errValues === '')
  }

  // if there are no errors, set the alert to true
  setAlert(true)
  // and set the error to false
  setError(false)

  const handleSubmit = (e) => {
    // prevent the form from refreshing the page
    e.preventDefault()
    // create a FormData object to store the form data
    const data = new FormData(e.target)
    // add a timestamp to the form data
    data.append('timeStamp', new Date())
    // check the form data for errors
    if (validate()) {
      // if there are no errors, set the alert to true
      setAlert(true)
      // and set the error to false
      setError(false)
      // reset the form values to empty strings
      setValue({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        companyName: '',
        message: '',
        startDate: '',
        whereDidYouHearAboutUs: '',
      })
    }
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
            className={classes.leftSideInfoWrapper}
            item
            xl={6}
            lg={5}
            md={10}
            xs={12}
          >
            <Typography variant="h1" className={classes.infoHeading}>
              Need to get in Touch?
            </Typography>
            <Typography variant="h6" className={classes.infoSubTitle}>
              Send Us A Message
            </Typography>
            <Typography variant="body1" className={classes.infoParagraph}>
              Please complete the form below, click here to Book an Appointment, give us a call or
              click the message box on the lower right! Either way, we look forward to talking with
              you!
            </Typography>
          </Grid>
          <Grid item lg={5}>
            <Paper elevation={3} className={classes.formPaper}>
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
                  <Hidden smDown>
                    {alert && (
                      <Alert
                        onClose={() => setAlert(false)}
                        severity="success"
                        className={classes.successAlert}
                      >
                        <AlertTitle>Success</AlertTitle>
                        Your form has been sent Successfully!
                        <strong>Thank you!</strong>
                      </Alert>
                    )}
                  </Hidden>
                  <Hidden mdUp>
                    {alert && (
                      <Snackbar
                        open={alert}
                        autoHideDuration={6000}
                        onClose={() => setAlert(false)}
                      >
                        <Alert onClose={() => setAlert(false)} severity="success">
                          <AlertTitle>Success</AlertTitle>
                          Your form has been sent Successfully!
                          <strong>Thank you!</strong>
                        </Alert>
                      </Snackbar>
                    )}
                  </Hidden>
                  <Grid container direction="row" justify="center" alignItems="center">
                    {formFieldInputs.map((values) => (
                      <TextField
                        key={values.id}
                        {...values}
                        error={!!error[values.name]}
                        helperText={error[values.name] || ' '}
                        onChange={handleChange}
                        value={value[values.name]}
                        className={classes.textField}
                        autoFocus={values.name === 'firstName'}
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
                  disabled={alert || error}
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
