import { makeStyles } from '@mui/styles'
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary_100.secondary,
    padding: '2.5rem 0rem',
  },
  wrapper: {
    padding: '2rem 0rem',
  },
  icons: {
    width: theme.spacing(5),
    height: 'auto',
    color: theme.palette.charcoal.secondary,
  },
  missionStatement: {
    lineHeight: theme.spacing(0.25),
    letterSpacing: theme.spacing(0.1),
  },
}))

export { useStyles }
