import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Hidden, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { Link } from '@material-ui/core'
import mainTheme from '../theme'
import Paper from '@material-ui/core/Paper'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import Button from '@material-ui/core/Button'
import ComputerIcon from '@material-ui/icons/Computer'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#0f0c29',
    color: mainTheme.palette.defaultLight.main,
    // backgroundColor: mainTheme.palette.defaultDark.main,
    width: '100%',
    height: 'auto',
  },
  wrapper: {
    paddingLeft: '10rem',
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  mainLogo: {
    width: '65%',
    height: 'auto',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: 'auto',
    },
  },
  line: {
    marginTop: '1.2rem',
    marginRight: '.75rem',
    marginBottom: '1rem',
    width: '75%',
    height: '1px',
    // background: 'white',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },

  boxes: {
    width: '250px',
    height: 'auto',
    backgroundColor: 'transparent',
    color: 'white',
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
  box1: {
    width: '250px',
    height: 'auto',
    backgroundColor: 'transparent',
    color: 'white',
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    paddingTop: '5rem',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '0rem',
    },
  },
  icons: {
    width: '35px',
    height: 'auto',
  },
  diamond: {
    width: '10px',
    height: '10px',
    border: '2px solid #343a40',
    transform: 'rotate(45deg)',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    margin: '.3rem 1rem',
  },
  button: {
    background: 'linear-gradient(45deg,#CC95C0,#1FA2FF  , #12D8FA , #A6FFCB )',
    color: 'white',
    margin: '2rem 0rem',
  },
  links: {
    textDecoration: 'none',
    color: mainTheme.palette.defaultLight.main,
  },
}))

const servicesFooterLinks = [
  { path: '/', label: 'SEO' },
  { path: '/services', label: 'Website Redesign' },
  { path: '/about', label: 'Website Development' },
  { path: '/portfolio', label: 'eCommerce Development' },
  { path: '/services', label: 'Mobile App Development' },
  { path: '/services', label: 'Website Maintanice & Support' },
]
const exploreFooterLinks = [
  { path: '/portfolio', label: 'FAQ' },
  { path: '/about', label: 'Careers' },
  { path: '/', label: 'Recent Articles' },
  { path: '/services', label: 'Join Our Team' },
  { path: '/services', label: 'Send Us Feedback' },
  { path: '/services', label: 'Latest News' },
]

function Footer() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.wrapper}
      >
        {/* Services Link Section */}
        <Grid item>
          <Paper className={classes.boxes}>
            <Typography variant="h6">Services</Typography>
            {servicesFooterLinks.map((link, index) => (
              <Typography key={index} variant="subtitle1">
                <Link className={classes.links} href={link.path}>
                  {link.label}
                </Link>
              </Typography>
            ))}
          </Paper>
        </Grid>
        {/* Explore Link Section */}
        <Grid>
          <Paper className={classes.boxes}>
            <Typography variant="h6">Explore</Typography>
            {exploreFooterLinks.map((link, index) => (
              <Typography key={index} variant="subtitle1">
                <Link className={classes.links} href={link.path}>
                  {link.label}
                </Link>
              </Typography>
            ))}
          </Paper>
        </Grid>
        {/* Company Info Section */}
        <Grid>
          <Paper className={classes.box1}>
            <Typography variant="h6">Company Info:</Typography>
            <Typography>
              Phone:
              <Link className={classes.links} href="tel:9158671023">
                +1 (915) 867-1023
              </Link>
            </Typography>
            <Typography>
              Email:
              <Link
                className={classes.links}
                href="mailto:edd_wordd@icloud.com?subject=Mona Tech General Inquries"
              >
                &nbsp;info@monatech.com
              </Link>
            </Typography>
            <Typography>Las Vegas, Nevada U.S.A</Typography>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<ComputerIcon />}
              size="large"
            >
              Get a Quote w!
            </Button>
            <Typography variant="h6">Connect With Us: </Typography>
            <Link className={classes.links} href="/">
              <FacebookIcon className={classes.icons} />
            </Link>
            <Link className={classes.links} href="/">
              <LinkedInIcon className={classes.icons} />
            </Link>
            <Link className={classes.links} href="/">
              <InstagramIcon className={classes.icons} />
            </Link>
          </Paper>
        </Grid>
        {/* Footer Logo */}
        <Grid item>
          <Link href="/">
            <img
              src="../../public/assets/black.png"
              alt="mona-tech-logo"
              className={classes.mainLogo}
            />
          </Link>
        </Grid>
      </Grid>
      {/* Copyright Section */}
      <Grid container item direction="row" justify="center">
        <span className={classes.line}></span>
      </Grid>
      <Grid container direction="row" justify="center">
        <Grid>
          <Typography>© Copyright 2021 | All Rights Reserved</Typography>
        </Grid>
        <Hidden xsDown>
          <Grid>
            <div className={classes.diamond}></div>
          </Grid>
        </Hidden>
        <Grid>
          <Typography>Terms &#38; Conditions | Privacy Policy </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
