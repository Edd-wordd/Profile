import { makeStyles } from '@material-ui/core'
import mainTheme from '../../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '850px',
    borderRadius: '0 0 15% 0',
    // borderBottom: `25px double pink`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    [theme.breakpoints.down('xs')]: {
      borderRadius: '0 0 0 0',
      borderBottom: `0`,
    },
  },
  titleWrapper: {
    paddingTop: theme.spacing(36),
  },
  mainTitle: {
    fontWeight: 700,
    fontSize: theme.spacing(10),
    letterSpacing: theme.spacing(0.5),
    color: mainTheme.palette.defaultLight.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainParagraph: {
    margin: '2.5em 0 2rem 0',
    fontSize: theme.spacing(5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: mainTheme.palette.defaultLight.main,
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#FE6B8B', //light pink peach color
    color: mainTheme.palette.defaultLight.main,
    opacity: '85%',
  },
  //   Ipad view stylings
  titleWrapperMobileView: {
    paddingTop: theme.spacing(30),
  },
  mainTitleMobileView: {
    fontWeight: 700,
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
    backgroundColor: '#FE6B8B', //light pink peach color
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
