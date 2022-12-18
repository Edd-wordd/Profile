import { makeStyles } from '@material-ui/core/styles'
import mainTheme from '../../../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(https://images.unsplash.com/photo-1638444571531-42e04914a830?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)`,
    width: '100%',
    height: 'auto',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    padding: '12rem 0rem 5rem 0rem',
  },
  form: {
    '& .MuiTextField-root': {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(3.5),
      [theme.breakpoints.down('xs')]: {
        margin: theme.spacing(1),
      },
    },
  },

  formHeader: {
    borderBottom: '1.5px solid black',
    padding: '1.5rem 4.5rem',
  },
  radio: {
    paddingLeft: theme.spacing(4.5),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(1),
    },
  },
  selectInputWrapper: {
    paddingLeft: theme.spacing(4),
    margin: '1.5rem 0rem',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
  },
  selectInput: {
    width: '50%',
    marginTop: theme.spacing(0.5),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  submitBtn: {
    margin: '1.5rem 0rem',
    padding: '.5rem 4rem',
    display: 'flex',
    justify: 'center',
    marginLeft: 'auto',
    [theme.breakpoints.down('xs')]: {
      margin: '1rem 4.5rem',
    },
  },
  formPaper: {
    padding: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1.5),
      paddingBottom: theme.spacing(1),
    },
  },
  heading: {
    color: mainTheme.palette.defaultLight.main,
    fontSize: theme.spacing(6),
    letterSpacing: '.15rem',
    fontWeight: 600,
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(3),
    },
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
    padding: theme.spacing(3),
    background: 'linear-gradient(45deg,#CC95C0,#1FA2FF  , #12D8FA , #A6FFCB )',
    border: 'none',
  },
}))
export { useStyles }
