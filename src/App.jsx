import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import mainTheme from './theme'
import NavBar from './components/NavBar'
import Portfolio from './pages/Portfolio'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Contact from './pages/Contact'
import BookCall from './pages/BookCall'
import Home from './pages/Home'
import ContentWriting from './pages/ContentWriting'

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
      </div>
    </Router>
  )
}

export default App
