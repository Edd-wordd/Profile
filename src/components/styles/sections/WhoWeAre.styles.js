import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paragraphWrapper: { margin: '3rem 0' },
  paraInfo: {
    letterSpacing: theme.spacing(0.15),
    lineHeight: theme.spacing(0.25),
  },
  boxes: {
    width: theme.spacing(35),
    height: 'auto',
    minHeight: theme.spacing(35),
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}))

export { useStyles }
