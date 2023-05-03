import { makeStyles } from '@mui/styles'

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
    borderBottom: '1px solid #89023e',
    marginBottom: theme.spacing(2),
    color: theme.palette.defaultLight.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.75rem',
    },
  },
  pics: {
    width: '600px',
    height: '400px',
    borderRadius: '5px',
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      height: 'auto',
      padding: '2.5rem 0',
      borderRadius: '5px',
    },
    [theme.breakpoints.down('md')]: {
      paddingBottom: '4rem',
    },
  },
  mainDescription: {
    width: '600px',
    height: 'auto',
    color: theme.palette.defaultLight.main,
    letterSpacing: theme.spacing(0.25),
    paddingTop: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
}))

export { useStyles }
