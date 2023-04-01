import React from 'react'
import { Hidden, Typography, Link, Paper, Button, Grid } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import ComputerIcon from '@mui/icons-material/Computer'
import TwitterIcon from '@mui/icons-material/Twitter'
import { useStyles } from '../styles/layout/Footer.styles'

const servicesFooterLinks = [
  { path: '/services/seo', label: 'Seo Services' },
  { path: '/services/web-design', label: 'Website Development' },
  { path: '/services/eCommerce', label: 'eCommerce Development' },
  { path: '/services/mobile-app', label: 'Mobile App Development' },
  { path: '/services/web-maintenance', label: 'Website Maintenance & Support' },
]

function Footer(props) {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="space-evenly" alignItems="center">
        {/* Services Link Section */}
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
              href="mailto:edd_wordd@icloud.com?subject=Mona Tech General Inquires"
            >
              &nbsp;info@monatech.com
            </Link>
          </Typography>
          <Typography>Las Vegas, Nevada U.S.A</Typography>
        </Paper>
        <Paper className={classes.box1}>
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
          <Link href="/contact" className={classes.link}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<ComputerIcon />}
              size="large"
            >
              Let's get started
            </Button>
          </Link>
        </Paper>
        {/* Footer Logo */}
        <Link href="/">
          <img
            src="../../../public/assets/black.png"
            alt="mona-tech-logo"
            className={classes.mainLogo}
          />
        </Link>
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
            <Link href="/privacypolicy" className={classes.copyrightLinks}>
              Privacy Policy
            </Link>{' '}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
