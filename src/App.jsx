import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import NavBar from '../src/components/layout/NavBar'
import Footer from '../src/components/layout/Footer'
import { ThemeProvider } from '@mui/material'
import theme from './theme'
import Spinner from './components/spinners/Spinner'

const useStyles = makeStyles(() => ({
  root: {
    margin: '-.5rem -.5rem',
  },
}))

const AboutUs = lazy(() => import('../src/components/pages/AboutUs'))
const Services = lazy(() => import('../src/components/pages/Services'))
const Contact = lazy(() => import('../src/components/pages/Contact'))
const Home = lazy(() => import('../src/components/pages/Home'))
const ServiceInfo = lazy(() => import('./components/sections/ServiceInfo'))
const NotFound = lazy(() => import('./components/sections/NotFound'))

function App() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <div className={classes.root}>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/about" component={AboutUs} />
              <Route exact path="/services/:id" component={ServiceInfo} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}
export default App
