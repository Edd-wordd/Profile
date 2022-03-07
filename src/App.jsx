import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
// import mainTheme from './theme'
import NavBar from '../src/components/layout/NavBar'
import Portfolio from '../src/components/pages/Portfolio'
import AboutUs from '../src/components/pages/AboutUs'
import Services from '../src/components/pages/Services'
import Contact from '../src/components/pages/Contact'
import BookCall from '../src/components/pages/BookCall'
import Home from '../src/components/pages/Home'
import ContentWriting from '../src/components/pages/ContentWriting'
import Seo from '../src/components/pages/Seo'
import MobileApp from '../src/components/pages/MobileApp'
import Ecommerce from '../src/components/pages/Ecommerce'
import WebDesign from '../src/components/pages/WebDesign'
import WebMaintanice from '../src/components/pages/WebMaintanice'
import Footer from '../src/components/layout/Footer'

const useStyles = makeStyles(() => ({
  root: {
    margin: '-.5rem -.5rem',
  },
}))

function App() {
  const classes = useStyles()

  return (
    <Router>
      <NavBar />
      <div className={classes.root}>
        <Switch>
          {/* remember to put the home route last!!! */}

          <Route path="/Web-Maintanice">
            <WebMaintanice />
          </Route>
          <Route path="/Web-Design">
            <WebDesign />
          </Route>
          <Route path="/eCommerce">
            <Ecommerce />
          </Route>
          <Route path="/Mobile-App">
            <MobileApp />
          </Route>
          <Route path="/Seo">
            <Seo />
          </Route>
          <Route path="/content-writing">
            <ContentWriting />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/bookcall">
            <BookCall />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
