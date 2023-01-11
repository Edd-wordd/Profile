import { makeStyles } from '@material-ui/core/styles'
import mainTheme from '../../../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(https://images.unsplash.com/photo-1635742153653-479b2c8abd9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)`,
    width: '100%',
    height: 'auto',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    padding: '15rem 0 5rem 0',
  },
  mainContent: {
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      padding: '0 0 1.5rem 0',
    },
  },
  mainTitle: {
    borderBottom: '1px solid #FF8E53',
    marginBottom: theme.spacing(2),
    color: mainTheme.palette.defaultLight.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.75rem',
    },
  },
  pics: {
    minWidth: '600px',
    maxHeight: '400px',
    borderRadius: '5px',
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      minWidth: '300px',
      minHeight: '300px',
      padding: '2.5rem 0',
      borderRadius: '5px',
    },
  },
  mainDescription: {
    width: '600px',
    height: 'auto',
    color: mainTheme.palette.defaultLight.main,
    letterSpacing: theme.spacing(0.25),
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
}))

export { useStyles }
