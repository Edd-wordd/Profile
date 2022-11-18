import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)`,
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
    color: 'white',
    width: '125px',
    height: 'auto',
    padding: theme.spacing(4.5),
    [theme.breakpoints.down('md')]: {
      width: '50%',
      paddingLeft: theme.spacing(8.5),
    },
  },
  iconTitle: {
    color: 'white',
    fontSize: theme.spacing(4),
  },
  header: {
    color: 'white',
    padding: '3rem 0rem 0rem 0rem',
  },
  headerWrapper: {
    color: 'white',
    paddingBottom: theme.spacing(1),
  },
}))

export { useStyles }
