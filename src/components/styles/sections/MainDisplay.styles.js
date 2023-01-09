import { makeStyles } from '@material-ui/core'
import mainTheme from '../../../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '90vh',
    borderRadius: '0 0 15% 0',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    [theme.breakpoints.down('xs')]: {
      borderRadius: '0 0 0 0',
      borderBottom: `0`,
    },
  },
  titleWrapper: {
    paddingTop: theme.spacing(30),
  },
  mainTitle: {
    fontWeight: 500,
    fontSize: theme.spacing(8),
    letterSpacing: theme.spacing(0.5),
    color: mainTheme.palette.defaultLight.main,
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
    color: mainTheme.palette.defaultLight.main,
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: mainTheme.palette.primary.main,
    color: mainTheme.palette.defaultLight.main,
    minWidth: '200px',
    fontSize: theme.spacing(1.75),
    letterSpacing: theme.spacing(0.15),
    opacity: '85%',
    '&:hover': {
      backgroundColor: mainTheme.palette.primary.main,
      opacity: '100%',
    },
  },
  //   Ipad view styling
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
    color: mainTheme.palette.defaultLight.main,
    marginLeft: theme.spacing(3),

  },
  mainParagraphMobileView: {
    margin: '1.5em 0 5rem 0',
    fontSize: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: mainTheme.palette.defaultLight.main,
  },
  buttonMobileView: {
    margin: theme.spacing(1),
    backgroundColor: mainTheme.palette.primary.main, //light pink peach color
    color: mainTheme.palette.defaultLight.main,
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
