import { makeStyles } from '@material-ui/core/styles'
import mainTheme from '../../../theme'

const useStyles = makeStyles(() => ({
  root: {
    margin: '-1rem -.5rem',
    position: 'fixed',
    width: '100%',
    height: '7.5rem',
    zIndex: '999',
    backgroundColor: 'transparent',
    transitionTimingFunction: 'ease-in',
    transition: '.3s',
  },
  active: {
    backgroundColor: mainTheme.palette.defaultDark.main,
    margin: '-2rem -.5rem',
    borderBottom: `1px solid ${mainTheme.palette.defaultLight.main}`,
    position: 'fixed',
    height: '7rem',
    width: '100%',
    zIndex: '999',
    transitionTimingFunction: 'ease-in',
    transition: '.5s',
    // padding: '.5rem .5rem',
  },
  // Logo for desktop version
  mainLogo: {
    width: '6em',
    padding: '1.5rem 0 0 0',
  },
  // Logo for mobile version
  mobileLogoImg: {
    margin: '1rem 0 .5rem  -.5rem',
    height: '7rem',
  },
  mobileBtn: {
    paddingBottom: '3rem',
    marginTop: '-2.5rem',
    backgroundColor: mainTheme.palette.defaultDark.secondary,
    textAlign: 'center',
    borderBottom: `1px solid ${mainTheme.palette.defaultLight.main}`,
  },
  // style for the tabs (links on the navbar)
  tab: {
    fontFamily: 'Open Sans Condensed',
    fontSize: 14,
    fontWeight: 800,
    borderRadius: 0,
    padding: '1.5rem 0 1.5rem 0',
    color: mainTheme.palette.defaultLight.main,
    letterSpacing: '.3rem',
    transitionTimingFunction: 'ease-in',
    transition: '.5s',
    '&:hover': {
      color: mainTheme.palette.primary_100.main,
      backgroundColor: 'transparent',
      padding: '.15rem',
      textShadow: `1px 1px ${mainTheme.palette.primary_100.main}`,
      boxShadow: `inset 0 -2px 0 0 ${mainTheme.palette.primary.main}`,
    },
  },
  btnDisplay: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
    padding: '2rem 0',
    alignItems: 'center',
  },
  // the selected tab on navbar
  selectedTab: {
    borderBottom: `1px solid ${mainTheme.palette.primary.main}`,
    color: mainTheme.palette.primary_100.main,
    textShadow: `1px 1px ${mainTheme.palette.primary_100.main}`,
    marginBottom: '.5rem',
  },
  hamIcon: {
    paddingTop: '2.75rem',
    marginLeft: '-2rem',
    color: mainTheme.palette.defaultLight.main,
  },
  // styling for the logo and hamburger icon when on mobile view
  setMobileNavDropdown: {
    backgroundColor: mainTheme.palette.defaultDark.secondary,
  },
  mobileNavDropdown: {
    backgroundColor: 'transparent',
  },
}))

export { useStyles }
