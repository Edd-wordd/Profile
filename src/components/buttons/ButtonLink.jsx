import React from 'react'
import { Button, Grid, makeStyles, Link, Typography, TextField } from '@material-ui/core'
import ComputerIcon from '@material-ui/icons/Computer'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import mainTheme from '../../theme'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

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
]

const useStyles = makeStyles((theme) => ({
  root: {},
  btnWrapper: {
    margin: '2rem 0 5rem 0',
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: mainTheme.palette.defaultLight.main,
  },
  btn: {
    border: 'none',
    fontWeight: 600,
    textDecoration: 'underline',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  BtnIcon: {
    color: ' #FE6B8B',
  },
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
    width: '30%',
    borderRadius: '2%',
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1, 0),
      [theme.breakpoints.down('xs')]: {
        margin: theme.spacing(1),
      },
    },
  },
  textField: {
    paddingRight: theme.spacing(1),
  },

  formHeader: {
    borderBottom: '1.5px solid black',
  },
  submitBtn: {
    padding: '.5rem 4rem',
    display: 'flex',
    marginLeft: 'auto',
    [theme.breakpoints.down('xs')]: {
      margin: '1rem 4.5rem',
    },
  },
}))

function ButtonLink(props) {
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
      <Grid container direction="row" justify="center" className={classes.btnWrapper}>
        <Link href={props.linkOne}>
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<ComputerIcon />}
            size="large"
          >
            {props.btnOneText}
          </Button>
        </Link>
        <Button
          className={classes.btn}
          endIcon={<ArrowRightAltIcon className={classes.BtnIcon} />}
          size="large"
          onClick={handleOpen}
        >
          {props.btnTwoText}
        </Button>
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
                Talk to an expert about your project!
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
      </Grid>
    </div>
  )
}

export default ButtonLink
