import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.defaultLight.main,
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(3),
    },
  },
  sectionTitle: {
    position: 'absolute',
    paddingBottom: theme.spacing(7),
    marginBottom: theme.spacing(6),
    background: theme.palette.secondary.main,
    color: theme.palette.defaultLight.main,
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(0),
      background: theme.palette.defaultLight.main,
      color: theme.palette.defaultDark.main,
    },
  },
  cardWrapper: {
    paddingTop: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(0),
      padding: '0 1.25rem',
    },
  },
}))

export { useStyles }
