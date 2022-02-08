import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { Fade as Hamburger } from 'hamburger-react'
import mainTheme from '../../theme'

// styles
const useStyles = makeStyles(() => ({
  root: {
    margin: '-1rem -.5rem',
    position: 'fixed',
    width: '100%',
    height: '10rem',
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
    height: '10rem',
    width: '100%',
    zIndex: '999',
    transitionTimingFunction: 'ease-in',
    transition: '.3s',
  },

  // Logo for desktop version
  mainLogo: {
    width: '10em',
    margin: '1rem 0 0 0',
  },
  // Logo for mobile version
  mobileLogoImg: {
    margin: '.5rem 0 0 -1.5rem',
    height: '10rem',
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
    paddingBottom: '0px',
    fontSize: 14,
    fontWeight: 800,
    borderRadius: 0,
    color: mainTheme.palette.defaultLight.main,
    letterSpacing: '.3rem',
    transitionTimingFunction: 'ease-in',
    transition: '.5s',
    marginBottom: '.5rem',

    '&:hover': {
      color: mainTheme.palette.primary_100.main,
      backgroundColor: 'transparent',
      textShadow: `1px 1px ${mainTheme.palette.primary_100.main}`,
      boxShadow: `inset 0 -2px 0 0 ${mainTheme.palette.primary.main}`,
      marginBottom: '.5rem',
    },
  },
  btnDisplay: {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '3.5rem 0 3rem 0',
  },
  // the selected tab on navbar
  selectedTab: {
    borderBottom: `2px solid ${mainTheme.palette.primary.main}`,
    color: mainTheme.palette.primary_100.main,
    textShadow: `1px 1px ${mainTheme.palette.primary_100.main}`,
    marginBottom: '.5rem',
  },
  hamIcon: {
    paddingTop: '3.5rem',
    marginLeft: '-2rem',
    color: mainTheme.palette.defaultLight.main,
  },
  bookBtn: {
    fontFamily: 'Open Sans Condensed',
    fontSize: 14,
    fontWeight: 800,
    letterSpacing: '.15rem',
    // border: `2px solid ${mainTheme.palette.primary.main}`,
    border: '2px solid #1FA2FF ',
    color: mainTheme.palette.defaultLight.main,
    padding: '8px 20px',
    marginTop: '1rem',
    marginBottom: '1rem',

    borderRadius: '2rem',
    '&:hover': {
      // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

      backgroundImage: `linear-gradient(#1FA2FF  20%,#12D8FA)`,
    },
  },
  // styling for the logo and hamburger icon when on mobile view
  setMobileNavDropdown: {
    backgroundColor: mainTheme.palette.defaultDark.secondary,
  },
  mobileNavDropdown: {
    backgroundColor: 'transparent',
  },
}))

// store the data for the tab labels and routes
const tabs = [
  { label: 'About Us', route: '/about' },
  { label: 'Services', route: '/services' },
  { label: 'Contact Us', route: '/contact' },
]

function NavBar() {
  const classes = useStyles()
  const [isShowingMenu, setIsShowingMenu] = React.useState(false) // default state for mobile menu
  const [navbar, setNavbar] = React.useState(false)

  const changeNavbarBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeNavbarBackground)

  return (
    <>
      <div className={navbar ? classes.active : classes.root}>
        <Hidden lgUp>
          {/* smaller menu */}
          <Grid container>
            <Grid
              container
              className={
                isShowingMenu
                  ? classes.setMobileNavDropdown
                  : classes.mobileNavDropdown
              }
            >
              <Grid item xs={11}>
                <Link href="/">
                  <img
                    src="../../../public/assets/monaTechLogo.png"
                    alt="mona-tech-logo"
                    className={classes.mobileLogoImg}
                  />
                </Link>
              </Grid>
              <Grid item xs={1} className={classes.hamIcon}>
                <Hamburger
                  toggled={isShowingMenu}
                  toggle={setIsShowingMenu}
                  duration={0.7}
                />
              </Grid>
            </Grid>
            {/* show each tab */}
            {isShowingMenu && (
              <>
                {tabs.map((tab, index) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      className={classes.mobileBtn}
                      key={index}
                    >
                      <Button
                        className={`${classes.tab}  ${
                          window.location.pathname === tab.route &&
                          classes.selectedTab
                        }`}
                        href={tab.route}
                      >
                        {tab.label}
                      </Button>
                    </Grid>
                  )
                })}
              </>
            )}
          </Grid>
        </Hidden>
        <Hidden mdDown>
          {/* larger menu */}
          {/* <Container maxWidth="xl"> */}
          <Grid container>
            <Grid item sm={4} md={2} lg={2}>
              <Link href="/">
                <img
                  src="../../../public/assets/monaTechLogo.png"
                  alt="mona-tech-logo"
                  className={classes.mainLogo}
                />
              </Link>
            </Grid>
            <Grid item sm={8} md={7} lg={7} className={classes.btnDisplay}>
              {tabs.map((tab) => {
                return (
                  <Button
                    key={tab.route}
                    className={`${classes.tab} ${
                      window.location.pathname === tab.route &&
                      classes.selectedTab
                    }`}
                    href={tab.route}
                  >
                    {tab.label}
                  </Button>
                )
              })}
            </Grid>
            <Grid item sm={8} md={7} lg={3} className={classes.btnDisplay}>
              <Button className={classes.bookBtn}>
                Book a free Consultation call
              </Button>
            </Grid>
          </Grid>
          {/* </Container> */}
        </Hidden>
      </div>
    </>
  )
}

export default NavBar
