import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f4f1fa', //light purple color
  },
  headingWrapper: {
    paddingTop: theme.spacing(3),
  },
  icons: {
    width: '50px',
    height: 'auto',
    color: '#616161', // light grey color
  },
  line: {
    width: '175px',
    padding: '0rem 5rem',
    margin: '0rem .5rem',
    borderBottom: '3px dotted #c0c0c0',
  },
  boxes: {
    width: '300px',
    height: 'auto',
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
  },
}))
export { useStyles }
