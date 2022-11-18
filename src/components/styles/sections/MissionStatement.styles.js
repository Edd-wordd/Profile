import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f4f1fa',
    padding: '2rem 0rem',
  },
  wrapper: {
    padding: '2rem 0rem',
  },
  paper: {
    padding: '2rem',
    // backgroundColor: '#f4f1fa',
  },
  icons: {
    width: '50px',
    height: 'auto',
    color: '#616161',
  },
  missionStatement: {
    lineHeight: theme.spacing(0.25),
    letterSpacing: theme.spacing(0.1),
  },
}))

export { useStyles }
