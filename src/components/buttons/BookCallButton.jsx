import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import mainTheme from '../../theme'
import { Button, Container, Grid, Paper, TextField, Typography } from '@material-ui/core'

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
  {
    required: true,
    id: 'calendy',
    label: 'Calendly Link',
    multiline: false,
    variant: 'outlined',
    fullWidth: true,
  },
]

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
    // padding: theme.spacing(2, 4, 3),
    // width: '100%',
    // margin: theme.spacing(0, -4),
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
  root: {},
  form: {
    '& .MuiTextField-root': {
      // marginTop: theme.spacing(2),
      // marginLeft: theme.spacing(3.5),
      [theme.breakpoints.down('xs')]: {
        margin: theme.spacing(1),
      },
    },
  },

  formHeader: {
    borderBottom: '1.5px solid black',
    // padding: '1.5rem 4.5rem',
  },
  submitBtn: {
    // margin: '1.5rem 0rem',
    padding: '.5rem 4rem',
    display: 'flex',
    justify: 'center',
    [theme.breakpoints.down('xs')]: {
      margin: '1rem 4.5rem',
    },
  },
  // formPaper: {
  //   padding: theme.spacing(4),
  //   [theme.breakpoints.down('xs')]: {
  //     padding: theme.spacing(1.5),
  //     paddingBottom: theme.spacing(1),
  //   },
  // },
  heading: {
    color: mainTheme.palette.defaultLight.main,
    fontSize: theme.spacing(6),
    letterSpacing: '.15rem',
    fontWeight: 600,
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(3),
    },
  },
  message: {
    padding: '1.5rem 0rem 0rem 0rem',
    color: mainTheme.palette.defaultLight.main,
    letterSpacing: '.15rem',
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
            <Container maxWidth="xl">
              <Grid container direction="row" justify="center">
                <Grid item lg={5}>
                  {/*<Paper elevation={3} className={classes.formPaper}>*/}
                  <Typography className={classes.formHeader}>
                    Let's get your consultation call booked!
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
                    </div>
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
                  {/*</Paper>*/}
                </Grid>
              </Grid>
            </Container>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
