import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(https://images.unsplash.com/photo-1625014053925-88bef4805a76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80)`,
    width: '100%',
    height: 'auto',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
  },
  boxes: {
    width: '200px',
    height: 'auto',
    padding: theme.spacing(4),
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(5),
    backgroundColor: 'transparent',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      paddingLeft: theme.spacing(10),
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingLeft: theme.spacing(5),
    },
  },
  icon: {
    color: theme.palette.defaultLight.main,
    width: '125px',
    height: 'auto',
    padding: theme.spacing(4.5),
    [theme.breakpoints.down('md')]: {
      width: '50%',
      paddingLeft: theme.spacing(8.5),
    },
  },
  iconTitle: {
    color: theme.palette.defaultLight.main,
    fontSize: theme.spacing(4),
  },
  header: {
    color: theme.palette.defaultLight.main,
    padding: '3rem 0rem 0rem 0rem',
  },
  headerWrapper: {
    color: theme.palette.defaultLight.main,
    paddingBottom: theme.spacing(1),
  },
}))

export { useStyles }
