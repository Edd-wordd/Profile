import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(https://images.unsplash.com/photo-1625014618427-fbc980b974f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80)`,
    width: '100%',
    height: 'auto',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    paddingBottom: '5rem',
  },
  titleWrapper: {
    color: theme.palette.defaultLight.main,
    padding: '2rem 0rem',
  },
  lgBoxes: {
    width: theme.spacing(60),
    height: 'auto',
    margin: '1rem 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.30)',
    padding: '.5rem 1rem ',
  },
  btmQuestion: {
    padding: '3rem 0rem 0rem 0rem',
  },
  question: {
    color: theme.palette.defaultLight.main,
    fontWeight: 600,
    textAlign: 'center',
  },
  para: {
    color: theme.palette.defaultLight.main,
  },
  word: {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(3),
    fontWeight: '600',
  },
  links: {
    color: theme.palette.defaultLight.main,
    textDecoration: 'underline',
    padding: '.5rem .5rem',
    '&:hover': {
      background: theme.palette.primary.main,
      opacity: '.7',
      transform: 'scale(1.05)',
      padding: '.5rem .5rem',
      borderRadius: '5px',
    },
  },
}))

export { useStyles }
