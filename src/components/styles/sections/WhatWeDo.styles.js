import { makeStyles } from '@mui/styles'
const useStyles = makeStyles((theme) => ({
  root: { paddingBottom: theme.spacing(5) },
  leftSideInfoWrapper: {
    width: theme.spacing(70),
    height: 'auto',
    border: 'none',
    padding: '5rem 1.5rem',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  coreValueSection: {
    width: theme.spacing(75),
    height: 'auto',
    border: 'none',
    padding: '3rem 1.5rem',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  coreValue: {
    fontWeight: 500,
    fontSize: theme.spacing(2),
  },
  icons: {
    color: theme.palette.primary_300.main,
    width: theme.spacing(5),
    height: 'auto',
    padding: '1rem 1rem 0rem 2rem',
  },
  bottomInfoWrapper: { marginBottom: '3rem' },
  bottomInfo: {
    letterSpacing: theme.spacing(0.05),
    lineHeight: theme.spacing(0.2),
  },
}))

export { useStyles }
