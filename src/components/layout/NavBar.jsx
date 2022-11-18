import React from 'react'
import { Link, Button, Hidden, Grid } from '@material-ui/core'
import { Fade as Hamburger } from 'hamburger-react'
import { BookCallButton } from '../index'
import { useStyles } from '../styles/layout/NavBar.styles'

// store the data for the tab labels and routes
const tabs = [
  { label: 'About Us', route: '/about' },
  { label: 'Services', route: '/services' },
  { label: 'Contact Us', route: '/contact' },
]

function NavBar(props) {
  const classes = useStyles(props)
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
              className={isShowingMenu ? classes.setMobileNavDropdown : classes.mobileNavDropdown}
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
                <Hamburger toggled={isShowingMenu} toggle={setIsShowingMenu} duration={0.7} />
              </Grid>
            </Grid>
            {/* show each tab */}
            {isShowingMenu && (
              <>
                {tabs.map((tab, index) => {
                  return (
                    <Grid item xs={12} className={classes.mobileBtn} key={index}>
                      <Button
                        className={`${classes.tab}  ${
                          window.location.pathname === tab.route && classes.selectedTab
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
                      window.location.pathname === tab.route && classes.selectedTab
                    }`}
                    href={tab.route}
                  >
                    {tab.label}
                  </Button>
                )
              })}
            </Grid>
            <Grid item sm={8} md={7} lg={3} className={classes.btnDisplay}>
              {/*<Button className={classes.bookBtn}>Book a free Consultation call</Button>*/}
              <BookCallButton />
            </Grid>
          </Grid>
          {/* </Container> */}
        </Hidden>
      </div>
    </>
  )
}

export default NavBar
