import React, { useEffect } from 'react'
import { useTheme } from '@mui/system'
import { Link, Grid, Box } from '@mui/material'
import { Fade as Hamburger } from 'hamburger-react'
import { useStyles } from '../styles/layout/NavBar.styles'
import tabs from '../../data/navbarData'
import NavBarButton from '../buttons/NavBarButton'
import CalendyButton from '../buttons/CalendyButton'

function NavBar(props) {
  const classes = useStyles(props)
  const [isShowingMenu, setIsShowingMenu] = React.useState(false) // default state for mobile menu
  const [navbar, setNavbar] = React.useState(false)
  const theme = useTheme()

  const changeNavbarBackground = () => {
    setNavbar(window.scrollY >= 80)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarBackground)

    return () => {
      window.removeEventListener('scroll', changeNavbarBackground)
    }
  }, [])

  return (
    <div className={navbar ? classes.active : classes.root}>
      <Box display={{ xs: 'block', md: 'block', lg: 'none' }}>
        {/* smaller menu */}
        <Grid container>
          <Grid
            container
            className={isShowingMenu ? classes.setMobileNavDropdown : classes.mobileNavDropdown}
          >
            <Grid item xs={11}>
              <Link href="/">
                <img
                  src="../../../public/assets/monaTechLogo.webp"
                  alt="mona-tech-logo"
                  className={classes.mobileLogoImg}
                />
              </Link>
            </Grid>
            <Grid className={classes.hamIcon}>
              <Hamburger toggled={isShowingMenu} toggle={setIsShowingMenu} duration={0.7} />
            </Grid>
          </Grid>
          {/* show each tab */}
          {isShowingMenu && (
            <>
              {tabs.map((tab) => {
                return (
                  <Grid item xs={12} className={classes.mobileBtn} key={tab.id}>
                    <NavBarButton
                      key={tab.id}
                      tab={tab}
                      theme={theme}
                      windowLocation={window.location}
                    />
                  </Grid>
                )
              })}
            </>
          )}
        </Grid>
      </Box>
      {/* larger menu */}

      <Box display={{ xs: 'none', md: 'none', lg: 'block' }}>
        <Grid container>
          <Grid item sm={4} md={2} lg={2}>
            <Link href="/">
              <img
                src="../../../public/assets/monaTechLogo.webp"
                alt="mona-tech-logo"
                className={classes.mainLogo}
              />
            </Link>
          </Grid>
          <Grid item sm={8} md={7} lg={7} className={classes.btnDisplay}>
            {tabs.map((tab) => {
              return (
                <NavBarButton
                  key={tab.id}
                  tab={tab}
                  theme={theme}
                  windowLocation={window.location}
                />
              )
            })}
          </Grid>
          <Grid item sm={8} md={7} lg={3} className={classes.btnDisplay}>
            <CalendyButton />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default NavBar
