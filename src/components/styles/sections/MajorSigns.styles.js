import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    color: theme.palette.defaultLight.main,
  },
  information: {
    color: theme.palette.defaultLight.main,
    padding: '2rem 10rem',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
    },
  },
  paper: {
    padding: '1.5rem 1rem',
    margin: '1rem 1rem',
    color: theme.palette.defaultLight.main,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    borderRadius: '5px',
    width: theme.spacing(30),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(1),
    },
  },
  paperTitle: {
    fontSize: theme.spacing(3),
    fontWeight: 500,
    color: theme.palette.defaultLight.main,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(2),
    },
  },
}))

export { useStyles }
