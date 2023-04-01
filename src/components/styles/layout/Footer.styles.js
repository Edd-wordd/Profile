import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.defaultLight.main,
    width: '100%',
    height: 'auto',
  },
  mainLogo: {
    width: '300px',
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
    width: '250px',
    height: 'auto',
    backgroundColor: 'transparent',
    color: theme.palette.defaultLight.main,
    fontWeight: 200,
    [theme.breakpoints.down('xs')]: {
      margin: '2rem 0',
    },
  },
  box1: {
    width: '200px',
    height: 'auto',
    backgroundColor: 'transparent',
    color: theme.palette.defaultLight.main,
    marginTop: '-3rem',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '0rem',
      margin: '2rem 0',
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
    color: theme.palette.defaultLight.main,
    marginTop: '1rem',
    '&:hover': {
      opacity: '.8',
    },
  },
  link: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
  links: {
    textDecoration: 'none',
    color: theme.palette.defaultLight.main,
    fontWeight: 'lighter',
    letterSpacing: '1px',
  },
  copyright: {
    padding: '0 0 1rem 0',
  },
  copyrightLinks: {
    textDecoration: 'none',
    color: theme.palette.defaultLight.main,
  },
}))
export { useStyles }
