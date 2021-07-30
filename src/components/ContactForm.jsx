import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Paper, Grid, Container } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import mainTheme from '../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80)`,
    width: '100%',
    height: 'auto',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    padding: '20rem 0rem 10rem 0rem',
  },
  form: {
    '& .MuiTextField-root': {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(3.5),
    },
  },

  formHeader: {
    borderBottom: '1.5px solid black',
    padding: '1.5rem 4.5rem',
  },
  radio: {
    paddingLeft: '3rem',
  },
  selectInputWrapper: {
    paddingLeft: '2rem',
    margin: '1.5rem 0rem',
  },
  selectInput: {
    width: '50%',
    marginTop: '.25rem',
  },
  submitBtn: {
    margin: '1.5rem 0rem',
    padding: '.5rem 4rem',
    display: 'flex',
    justify: 'center',
  },
  formPaper: {
    padding: '2rem',
  },

  heading: {
    color: mainTheme.palette.defaultLight.main,
    fontSize: '3rem',
    letterSpacing: '.15rem',
    fontWeight: 600,
  },
  paragraph: {
    color: mainTheme.palette.defaultLight.main,
    padding: '.25rem 5rem 1.5rem 0rem',
    lineHeight: '1.5rem',
    letterSpacing: '.15rem',
  },
  info: {
    width: '35%',
  },
  message: {
    padding: '1.5rem 0rem 0rem 0rem',
    color: mainTheme.palette.defaultLight.main,
    letterSpacing: '.15rem',
  },
  companyCard: {
    width: '250px',
    height: 'auto',
    margin: '0rem 5rem',
    padding: '1.5rem',
    background: 'linear-gradient(45deg,#CC95C0,#1FA2FF  , #12D8FA , #A6FFCB )',
    border: 'none',
  },
}))
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
    id: 'outlined-required',
    label: 'Phone Number',
    variant: 'outlined',
    size: 'small',
    style: {
      width: '45%',
    },
  },
  {
    required: true,
    id: 'outlined required',
    label: 'Email',
    variant: 'outlined',
    size: 'small',
    style: {
      width: '45%',
    },
  },
  {
    required: true,
    id: 'outlined-password-input',
    label: 'Company Name',
    autoComplete: 'current-password',
    variant: 'outlined',
    fullWidth: true,
  },
  {
    required: false,
    id: 'outlined-password-input',
    label: 'Company Website or URL',
    autoComplete: 'current-password',
    variant: 'outlined',
    fullWidth: true,
  },
  {
    required: true,
    id: 'standard-multiline-flexible',
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
  console.log('Button was clicked by daddy')
  console.log(fname)
}
function ContactForm() {
  const classes = useStyles()
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
          >
            <Typography variant="h1" className={classes.heading}>
              Need to get in Touch?
            </Typography>
            <Typography variant="h6" className={classes.message}>
              Send Us A Message
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
              Please complete the form below, click here to Book an Appointment,
              give us a call or click the message box on the lower right! Either
              way, we look forward to talking with you!
            </Typography>
            <Paper elevation={4} className={classes.companyCard}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
              >
                <Typography variant="h6">Company Info</Typography>
                <Typography>Mona Tech LLC</Typography>
                <Typography>Location: Las vegas, Nevada</Typography>
                <Typography>Phone: (915) 867-1023 </Typography>
                <Typography>Email: info@monaTech.io</Typography>
              </Grid>
            </Paper>
          </Grid>
          <Grid item lg={5}>
            <Paper elevation={3} className={classes.formPaper}>
              <Typography className={classes.formHeader}>
                Please fill this form out! Let us know what we can do for you!
              </Typography>
              <form className={classes.form} noValidate autoComplete="off">
                <div>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
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
                    <InputLabel id="select-label">
                      How did you hear about us?*
                    </InputLabel>
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
