import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
  },
  bookBtn: {
    fontSize: 14,
    fontWeight: 500,
    width: 300,
    letterSpacing: '.15rem',
    backgroundColor: 'transparent',
    marginLeft: '3rem',
    border: '1px solid #89023e',
    color: theme.palette.defaultLight.main,
    padding: '.75rem 1rem',
    borderRadius: '2rem',
    '&:hover': {
      backgroundImage: `linear-gradient(#89023e  20%, #000)`,
      cursor: 'pointer',
    },
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 4, 3),
    width: '30%',
    borderRadius: '5px',
    zIndex: 1000,
  },
  alert: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
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
    '& .MuiInputBase-root': {
      marginBottom: '-.35rem',
    },
    // paddingRight: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      paddingRight: theme.spacing(0),
    },
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
  spinner: {
    color: 'white',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    marginTop: '25rem',
  },
  calendlyBtn: {
    padding: '1.25rem 4rem',
    backgroundColor: 'transparent',
    border: '1px solid lightgrey',
    borderRadius: '5px',
    width: '100%',
    margin: '.5rem 0 1rem 0',
    color: 'gray',
    '&:hover': {
      backgroundColor: 'lightgrey',
      cursor: 'pointer',
    },
  },
}))

export { useStyles }
