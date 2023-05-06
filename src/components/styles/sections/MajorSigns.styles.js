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
    margin: '1rem .5rem',
    color: theme.palette.defaultLight.main,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '5px',
    width: theme.spacing(30),
    minHeight: theme.spacing(38),
    [theme.breakpoints.down('md')]: {
      width: '85%',
      padding: '1.5rem ',
      marginTop: '.5rem',
    },
  },
  paperTitle: {
    color: '#89023e',
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(2),
    },
  },
}))

export { useStyles }
