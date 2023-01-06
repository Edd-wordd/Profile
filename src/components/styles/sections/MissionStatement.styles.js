import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(https://images.unsplash.com/photo-1632386474725-138bbf6e3f41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)`,
    backgroundColor: '#f4f1fa',
    padding: '2rem 0rem',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',



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
