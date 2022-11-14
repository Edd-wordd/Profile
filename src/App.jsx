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
import Footer from '../src/components/layout/Footer'
import ServiceInfo from './components/sections/ServiceInfo'
import TermsAndCondition from './components/pages/TermsAndCondition'
import PrivacyPolicy from './components/pages/PrivacyPolicy'

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
          <Route path="/termsandcondition" component={TermsAndCondition} />
          <Route path="/privacypolicy" component={PrivacyPolicy} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={AboutUs} />
          <Route path="/services/:id" component={ServiceInfo} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/bookcall" component={BookCall} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}
//this is just a test
export default App
