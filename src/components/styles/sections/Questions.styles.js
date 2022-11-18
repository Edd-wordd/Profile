import { makeStyles } from '@material-ui/core'
import mainTheme from '../../../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1852&q=80)`,
    width: '100%',
    height: 'auto',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
  },
  titleWrapper: {
    color: mainTheme.palette.defaultLight.main,
    padding: '2rem 0rem',
  },

  smBoxWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '3rem 0rem',
  },
  smBoxes: {
    width: '125px',
    height: 'auto',
    padding: theme.spacing(2),
    margin: '3rem .5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.17)',
    color: mainTheme.palette.defaultLight.main,
    [theme.breakpoints.down('lg')]: {
      margin: '3rem .17rem ',
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1.5),
      margin: '3rem .5rem ',
    },
  },
  lgBoxes: {
    border: `1px solid ${mainTheme.palette.defaultLight.main}`,
    width: '550px',
    height: 'auto',
    margin: '1rem 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.17)',
    padding: '.5rem 1rem ',
  },
  btmQuestion: {
    padding: '3rem 0rem 0rem 0rem',
  },
  question: {
    color: mainTheme.palette.defaultLight.main,
    fontWeight: 600,
  },
  para: {
    color: mainTheme.palette.defaultLight.main,
  },
  icons: {
    width: '100px',
    height: 'auto',
  },
  smIcon: {
    margin: '-.5rem 0rem',
  },
  word: {
    color: '#FE6B8B', // pinkish orange color
    fontSize: theme.spacing(3),
    fontWeight: '600',
  },
  links: {
    color: mainTheme.palette.defaultLight.main,
    textDecoration: 'underline',
    padding: '.5rem .5rem',
    '&:hover': {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      transform: 'scale(1.05)',
      padding: '.5rem .5rem',
      borderRadius: '5%',
    },
  },
}))

export { useStyles }
