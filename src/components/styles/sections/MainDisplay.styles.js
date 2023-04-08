import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '90vh',
    borderRadius: '0 0 15% 0',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    overflowX: 'hidden',
    [theme.breakpoints.down('xs')]: {
      borderRadius: '0 0 0 0',
      borderBottom: `0`,
    },
  },
  titleWrapper: {
    paddingTop: theme.spacing(50),
  },
  mainTitle: {
    fontWeight: 500,
    fontSize: theme.spacing(8),
    letterSpacing: theme.spacing(0.5),
    color: theme.palette.defaultLight.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(7),
    textShadow: '0 0 0.75em #000, 0 0 0.75em #000',
  },
  mainParagraph: {
    margin: '2.5em 0 5rem 0',
    fontSize: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.defaultLight.main,
  },
  button: {
    margin: `${theme.spacing(1.5)}!important`,
    backgroundColor: theme.palette.primary.main,
    minWidth: '250px !important',
    fontSize: `${theme.spacing(1.75)}!important`,
    letterSpacing: `${theme.spacing(0.15)}!important`,
    opacity: '85%  !important',
    padding: '3rem 0',
  },
  titleWrapperMobileView: {
    paddingTop: theme.spacing(30),
  },
  mainTitleMobileView: {
    fontWeight: 500,
    fontSize: theme.spacing(8),
    letterSpacing: theme.spacing(0.5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.defaultLight.main,
    marginLeft: theme.spacing(3),
  },
  mainParagraphMobileView: {
    margin: '1.5em 0 5rem 0',
    fontSize: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.defaultLight.main,
  },
  buttonMobileView: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.defaultLight.main,
    opacity: '85%',
  },
  buttonStyle: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}))

export { useStyles }
