import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {},
  paragraphWrapper: { margin: '3rem 0' },
  paraInfo: {
    letterSpacing: theme.spacing(0.25),
    lineHeight: theme.spacing(0.25),
  },
  boxes: {
    width: '250px',
    height: 'auto',
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}))

export { useStyles }
