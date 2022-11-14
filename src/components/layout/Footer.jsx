import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Hidden, Typography, Link, Paper, Button, Grid } from '@material-ui/core'
import mainTheme from '../../theme'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
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
  copyright: {
    padding: '0 0 1.5rem 0',
  },
}))

const servicesFooterLinks = [
  { path: '/services/seo', label: 'Seo Services' },
  { path: '/services/web-design', label: 'Website Development' },
  { path: '/services/eCommerce', label: 'eCommerce Development' },
  { path: '/services/mobile-app', label: 'Mobile App Development' },
  { path: '/services/web-maintenance', label: 'Website Maintenance & Support' },
  // { path: '/faq', label: 'FAQ' },
  { path: '/services', label: 'Join Our Team' },
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

        <Grid>
          <Paper className={classes.box1}>
            <Typography variant="h6">Company Info:</Typography>
            <Typography>
              Phone:
              <Link className={classes.links} href="tel:9158671023">
                +1 (999) 811-1003
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
            <Link href="/contact">
              <Button
                variant="contained"
                className={classes.button}
                startIcon={<ComputerIcon />}
                size="large"
              >
                Get a Quote w!
              </Button>
            </Link>
            <Typography variant="h6">Connect With Us: </Typography>
            <Link className={classes.links} href="https://www.facebook.com" target="_blank">
              <FacebookIcon className={classes.icons} />
            </Link>
            <Link className={classes.links} href="https://www.linkedin.com/" target="_blank">
              <LinkedInIcon className={classes.icons} />
            </Link>
            <Link className={classes.links} href="https://www.instagram.com" target="_blank">
              <InstagramIcon className={classes.icons} />
            </Link>
          </Paper>
        </Grid>
        {/* Footer Logo */}
        <Grid item>
          <Link href="/">
            <img
              src="../../../public/assets/black.png"
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
      <Grid container direction="row" justify="center" className={classes.copyright}>
        <Grid>
          <Typography>© Copyright {new Date().getFullYear()} | All Rights Reserved</Typography>
        </Grid>
        <Hidden xsDown>
          <Grid>
            <div className={classes.diamond}></div>
          </Grid>
        </Hidden>
        <Grid>
          <Typography>
            <Link href="/termsandcondition">Terms &#38; Conditions</Link> |{' '}
            <Link href="/privacypolicy">Privacy Policy</Link>{' '}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
