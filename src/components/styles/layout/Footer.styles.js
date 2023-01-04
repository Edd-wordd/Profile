import { makeStyles } from '@material-ui/core/styles'
import mainTheme from '../../../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#0f0c29',
    color: mainTheme.palette.defaultLight.main,
    width: '100%',
    height: 'auto',
  },
  wrapper: {
    paddingLeft: '10rem',
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  mainLogo: {
    width: '35%',
    height: 'auto',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: 'auto',
    },
  },
  line: {
    marginTop: '1.2rem',
    marginRight: '.75rem',
    marginBottom: '1rem',
    width: '85%',
    height: '1px',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },

  boxes: {
    width: '500px',
    height: 'auto',
    backgroundColor: 'transparent',
    color: 'white',
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    fontWeight: 200,
  },
  box1: {
    width: '250px',
    height: 'auto',
    backgroundColor: 'transparent',
    color: 'white',
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    paddingTop: '5rem',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '0rem',
    },
  },
  icons: {
    width: '35px',
    height: 'auto',
  },
  diamond: {
    width: '10px',
    height: '10px',
    border: '2px solid #343a40',
    transform: 'rotate(45deg)',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    margin: '.3rem 1rem',
  },
  button: {
    background: 'linear-gradient(45deg,#CC95C0,#1FA2FF  , #12D8FA , #A6FFCB )',
    color: 'white',
    margin: '2rem 0rem',
  },
  links: {
    textDecoration: 'none',
    color: mainTheme.palette.defaultLight.main,
    fontWeight: 'lighter',
    letterSpacing: '1px',
  },
  copyright: {
    padding: '0 0 1rem 0',
  },
  copyrightLinks: {
    textDecoration: 'none',
    color: mainTheme.palette.defaultLight.main,
  },
}))
export { useStyles }
