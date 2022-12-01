import React from 'react'
import { Hidden, Typography, Link, Paper, Button, Grid } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import ComputerIcon from '@material-ui/icons/Computer'
import TwitterIcon from '@material-ui/icons/Twitter'
import { useStyles } from '../styles/layout/Footer.styles'

const servicesFooterLinks = [
  { path: '/services/seo', label: 'Seo Services' },
  { path: '/services/web-design', label: 'Website Development' },
  { path: '/services/eCommerce', label: 'eCommerce Development' },
  { path: '/services/mobile-app', label: 'Mobile App Development' },
  { path: '/services/web-maintenance', label: 'Website Maintenance & Support' },
  { path: '/services', label: 'Join Our Team' },
]

function Footer(props) {
  const classes = useStyles(props)
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
            <Link className={classes.links} href="https://www.twitter.com" target="_blank">
              <TwitterIcon className={classes.icons} />
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
