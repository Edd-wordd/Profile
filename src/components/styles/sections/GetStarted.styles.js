import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary_100.secondary, //light purple color
    paddingBottom: theme.spacing(5),
  },
  headingWrapper: {
    padding: theme.spacing(3),
  },
  icons: {
    width: theme.spacing(6),
    height: 'auto',
    color: theme.palette.charcoal.secondary, // light grey color
  },
  line: {
    width: theme.spacing(23),
    padding: '0rem 5rem',
    margin: '0rem .5rem',
    borderBottom: '3px dotted #c0c0c0',
  },
  boxes: {
    width: theme.spacing(37),
    minHeight: theme.spacing(30),
    border: 'none',
    padding: theme.spacing(4),
    margin: '0rem 1.5rem 0rem 1rem',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  iconWrapper: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(1),
  },
}))
export { useStyles }
