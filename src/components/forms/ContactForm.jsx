import React from 'react'
import { useStyles } from '../styles/forms/ContactForm.styles'
import {
  Typography,
  Paper,
  Grid,
  Container,
  TextField,
  Radio,
  RadioGroup,
  Button,
  Select,
  Hidden,
  FormLabel,
  MenuItem,
  FormControlLabel,
  FormControl,
  InputLabel,
} from '@material-ui/core'

const textInputs = [
  {
    required: true,
    id: 'firstName',
    label: 'First Name',
    variant: 'outlined',
    size: 'small',
    style: {
      width: '45%',
    },
  },
  {
    required: true,
    id: 'lastName',
    label: 'Last Name',
    variant: 'outlined',
    size: 'small',
    style: {
      width: '45%',
    },
  },
  {
    required: true,
    id: 'pNumber',
    label: 'Phone Number',
    variant: 'outlined',
    size: 'small',
    style: {
      width: '45%',
    },
  },
  {
    required: true,
    id: 'email',
    label: 'Email',
    variant: 'outlined',
    size: 'small',
    style: {
      width: '45%',
    },
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
]
const selectInputs = [
  {
    value: 'google search',
    label: 'Google Search',
  },
  {
    value: 'google maps',
    label: 'Google Maps',
  },
  {
    value: 'repeat client',
    label: 'Reapeat Client',
  },
  {
    value: 'online',
    label: 'Online',
  },
  {
    value: 'refferal',
    label: 'Refferal',
  },
  {
    value: 'online website',
    label: 'Online Website',
  },
  {
    value: 'other',
    label: 'Other',
  },
]
const radioInputs = [
  {
    value: 'right away',
    label: 'Right Away',
  },
  {
    value: 'one week',
    label: 'One Week',
  },
  {
    value: 'one month',
    label: 'One Month',
  },
  {
    value: 'not sure',
    label: 'Not Sure',
  },
  {
    value: 'price shopping only',
    label: 'Price Shopping Only',
  },
]

function submitForm() {
  let fname = document.getElementById('firstName').value
  let lname = document.getElementById('lastName').value
  let userNum = document.getElementById('pNumber').value
  let userEmail = document.getElementById('email').value
  let companyName = document.getElementById('companyName').value
  let companyUrl = document.getElementById('companyUrl').value
  let userMessage = document.getElementById('userMessage').value

  let newUser = {
    'First name': fname,
    'Last Name': lname,
    'Phone Number': userNum,
    Email: userEmail,
    Company: companyName,
    'Company Url': companyUrl,
    Message: userMessage,
  }
  console.log('Button was clicked by daddy')
  console.log(newUser)
}
function ContactForm(props) {
  const classes = useStyles(props)
  const [value, setValue] = React.useState('right away')
  const [reference, setReference] = React.useState('')

  const handleSelectChange = (event) => {
    setReference(event.target.value)
  }

  const handelRadioChange = (event) => {
    setValue(event.target.value)
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
            <Hidden mdDown>
              <Paper elevation={4} className={classes.companyCard}>
                <Grid container direction="column" justify="center" alignItems="flex-start">
                  <Typography variant="h6">Company Info</Typography>
                  <Typography>Mona Tech LLC</Typography>
                  <Typography>Location: Las vegas, Nevada</Typography>
                  <Typography>Phone: (915) 867-1023 </Typography>
                  <Typography>Email: info@monaTech.io</Typography>
                </Grid>
              </Paper>
            </Hidden>
          </Grid>
          <Grid item lg={5}>
            <Paper elevation={3} className={classes.formPaper}>
              <Typography className={classes.formHeader}>
                Please fill this form out! Let us know what we can do for you!
              </Typography>
              <form className={classes.form} noValidate autoComplete="off">
                <div>
                  <Grid container direction="row" justifyContent="center" alignItems="center">
                    {textInputs.map((value, index) => (
                      <TextField
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
                  </Grid>
                  <div className={classes.selectInputWrapper}>
                    <InputLabel id="select-label">How did you hear about us?*</InputLabel>
                    <Select
                      required
                      variant="outlined"
                      labelId="select-label"
                      id="simple-select"
                      className={classes.selectInput}
                      value={reference}
                      onChange={handleSelectChange}
                    >
                      {selectInputs.map((value, index) => (
                        <MenuItem key={index} value={value.value}>
                          {value.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                </div>

                <FormControl component="fieldset" className={classes.radio}>
                  <FormLabel component="legend">
                    When are you wanting to start your project?
                  </FormLabel>
                  <RadioGroup
                    aria-label="start-date"
                    name="start-date1"
                    value={value}
                    onChange={handelRadioChange}
                  >
                    {radioInputs.map((value, index) => (
                      <FormControlLabel
                        key={index}
                        value={value.value}
                        control={<Radio />}
                        label={value.label}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
                {/* <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                > */}
                <Button
                  className={classes.submitBtn}
                  size="large"
                  variant="outlined"
                  aria-label="large outlined button"
                  onClick={() => submitForm()}
                >
                  SUBMIT
                </Button>
                {/* </Grid> */}
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default ContactForm
