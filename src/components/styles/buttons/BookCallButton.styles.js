import { makeStyles } from '@material-ui/core/styles'
import mainTheme from '../../../theme'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '30%',
    borderRadius: '2%',
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
    padding: '.5rem 4rem',
    backgroundColor: 'transparent',
    border: '1px solid lightgrey',
    borderRadius: '5%',
  },
}))

export { useStyles }
