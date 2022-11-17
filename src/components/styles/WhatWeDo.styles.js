import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {},
  paragraphWrapper: { margin: '3rem 0' },
  paraInfo: {
    letterSpacing: theme.spacing(0.25),
    lineHeight: theme.spacing(0.25),
  },
  boxes: {
    width: '600px',
    height: 'auto',
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  box1: {
    width: '600px',
    height: 'auto',
    border: 'none',
    padding: '5rem 1.5rem',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  box2: {
    width: '600px',
    height: 'auto',
    border: 'none',
    padding: '3rem 1.5rem',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },

  icons: {
    color: ' #FE6B8B',
    width: '50px',
    height: 'auto',
    padding: '1rem 0rem 0rem 2rem',
  },
  bulletPoint: {
    fontWeight: 700,
    fontSize: '1.2rem',
  },
  coreValue: { padding: '1rem 0rem 0rem 0rem' },
}))

export { useStyles }
