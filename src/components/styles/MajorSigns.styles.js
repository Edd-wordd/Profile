import { makeStyles } from '@material-ui/core/styles'
import mainTheme from '../../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    color: mainTheme.palette.defaultLight.main,
  },
  information: {
    color: mainTheme.palette.defaultLight.main,
    padding: '2rem 10rem',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(4),
    color: theme.palette.text.secondary,
    borderRadius: theme.spacing(1),
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(1),
    },
  },
  image: {
    margin: theme.spacing(0.5),
    borderRadius: theme.spacing(1),
    width: '400px',
    height: '400px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  paperTitle: {
    fontSize: theme.spacing(3),
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(2),
    },
  },
}))

export { useStyles }
