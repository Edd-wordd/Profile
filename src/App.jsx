import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import NavBar from '../src/components/layout/NavBar'
import Portfolio from '../src/components/pages/Portfolio'
import AboutUs from '../src/components/pages/AboutUs'
import Services from '../src/components/pages/Services'
import Contact from '../src/components/pages/Contact'
import Home from '../src/components/pages/Home'
import Footer from '../src/components/layout/Footer'
import ServiceInfo from './components/sections/ServiceInfo'
import NotFound from './components/sections/NotFound'
import { ThemeProvider } from '@mui/material'
import theme from './theme'

const useStyles = makeStyles(() => ({
  root: {
    margin: '-.5rem -.5rem',
  },
}))

function App() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <div className={classes.root}>
          <Switch>
            {/* remember to put the home route last!!! */}
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/services/:id" component={ServiceInfo} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}
export default App
