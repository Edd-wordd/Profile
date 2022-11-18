import { makeStyles } from '@material-ui/core/styles'
import mainTheme from '../../../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(https://images.unsplash.com/photo-1616004655123-818cbd4b3143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`,
    width: '100%',
    height: 'auto',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    padding: '20rem 0 5rem 0',
  },
  mainContent: {
    padding: '0 0 6rem 0',
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
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      minWidth: '300px',
      minHeight: '300px',
      padding: '2.5rem 0',
      borderRadius: theme.spacing(1),
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
