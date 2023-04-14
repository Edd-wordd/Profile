import React from 'react'
import { Grid, Typography, Link, Paper, Button, Hidden } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import ComputerIcon from '@mui/icons-material/Computer'
import footerLinks from '../../data/footerData'
import {
  FooterBackground,
  SectionCards,
  FooterMainLogo,
  FooterLine,
} from '../styles/layout/Footer.styles'

function Footer() {
  return (
    <FooterBackground>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Paper component={SectionCards}>
          <Typography variant="h6">Services</Typography>
          {footerLinks.map((link, index) => (
            <Typography key={index} variant="subtitle1">
              <Link
                href={link.path}
                sx={{
                  textDecoration: 'none',
                  color: '#f5f5f5',
                  fontWeight: 'lighter',
                  letterSpacing: '1px',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                {link.label}
              </Link>
            </Typography>
          ))}
        </Paper>
        <Paper component={SectionCards}>
          <Typography variant="h6">Company Info:</Typography>
          <address>
            <Typography>
              Phone:
              <Link sw={{ color: '#89023e' }} href="tel:9158671023">
                +1 (999) 811-1003
              </Link>
            </Typography>
            <Typography>
              Email:
              <Link
                sw={{ color: '#89023e' }}
                href="mailto:edd_wordd@icloud.com?subject=Mona Tech General Inquires"
              >
                &nbsp;info@monatech.com
              </Link>
            </Typography>
            <Typography>Las Vegas, Nevada U.S.A</Typography>
          </address>
        </Paper>
        <Paper component={SectionCards}>
          <Typography variant="h6">Connect With Us: </Typography>
          <nav>
            <Link
              sw={{ color: '#89023e' }}
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon sx={{ width: '50px', height: 'auto' }} />
            </Link>
            <Link
              sw={{ color: '#89023e' }}
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon sx={{ width: '50px', height: 'auto' }} />
            </Link>
            <Link
              sw={{ color: '#89023e' }}
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon sx={{ width: '50px', height: 'auto' }} />
            </Link>
            <Link
              sw={{ color: '#89023e' }}
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <TwitterIcon sx={{ width: '50px', height: 'auto' }} />
            </Link>
          </nav>
          <Link
            href="/contact"
            sx={{
              marginTop: '1.2rem',
              marginRight: '.75rem',
              marginBottom: '1rem',
              width: '85%',
              height: '1px',
              background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            }}
          >
            <Button variant="contained" color="primary" endIcon={<ComputerIcon />} size="large">
              Let's get started
            </Button>
          </Link>
        </Paper>
        {/* Footer Logo */}
        <FooterMainLogo>
          <Link href="/">
            <img src="../../../public/assets/black.png" alt="mona-tech-logo" />
          </Link>
        </FooterMainLogo>
      </Grid>
      {/* Copyright Section */}
      <Grid container item direction="row" justifyContent="center">
        <FooterLine />
      </Grid>
      <Grid container direction="row" justifyContent="center" sx={{ padding: '0 0 1rem 0' }}>
        <Grid>
          <Typography>© Copyright {new Date().getFullYear()} | All Rights Reserved</Typography>
        </Grid>
      </Grid>
    </FooterBackground>
  )
}

export default Footer
