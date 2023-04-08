import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(7),
  },
  leftSideInfoWrapper: {
    width: theme.spacing(65),
    height: 'auto',
    marginBottom: theme.spacing(1),
    padding: '4rem 8rem 4rem 0',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '1rem',
    },
  },
  coreValueSection: {
    padding: '3.5rem 0',
    width: theme.spacing(63),
    height: 'auto',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '1rem',
    },
  },
  coreValue: {
    fontWeight: 500,
    fontSize: theme.spacing(2),
    paddingTop: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontStyle: 'italic',
    },
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
    lineHeight: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
    },
  },
}))

export { useStyles }
