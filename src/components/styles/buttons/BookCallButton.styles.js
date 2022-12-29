import { makeStyles } from '@material-ui/core/styles'
import mainTheme from '../../../theme'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',

  },

  bookBtn: {
    fontFamily: 'Open Sans Condensed',
    fontSize: 14,
    fontWeight: 800,
    width: 300,
    letterSpacing: '.15rem',
    backgroundColor: 'transparent',
    marginLeft: '3rem',
    border: '1px solid #1FA2FF ',
    color: mainTheme.palette.defaultLight.main,
    padding: '.75rem 1rem',
    borderRadius: '2rem',
    '&:hover': {
      backgroundImage: `linear-gradient(#1FA2FF  20%,#12D8FA)`,
    },
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    width: '30%',
    borderRadius: '5px',
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
  spinner: {
    color: 'white',
    // center the spinner on the page
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    // move spinner down a bit
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
  closeBtn: {
    color: 'grey',
    cursor: 'pointer',
    padding: '0 1rem',
    display: 'inline-block',
    float: 'right',
  },
}))

export { useStyles }
