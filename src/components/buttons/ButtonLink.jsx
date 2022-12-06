import React, { useState } from 'react'
import { Fade, Button, Grid, Modal, Link, Typography, TextField } from '@material-ui/core'
import ComputerIcon from '@material-ui/icons/Computer'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import { useStyles } from '../styles/buttons/ButtonLink.styles'
import { Backdrop } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

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

function ButtonLink(props) {
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
          onClick={LoadSpinner}
        >
          {props.btnTwoText}
        </Button>
        {loading ? (
          <Backdrop open>
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : (
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
                <Button onClick={handleClose} className={classes.closeBtn}>
                  X
                </Button>
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
        )}
      </Grid>
    </div>
  )
}

export default ButtonLink
