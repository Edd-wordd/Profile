import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, Grid, Container } from '@material-ui/core'
import mainTheme from '../theme'
import Box from '@material-ui/core/Box'
import DescriptionIcon from '@material-ui/icons/Description'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import ComputerIcon from '@material-ui/icons/Computer'
import FaqServices from '../components/FaqServices'
import Features from '../components/Features'
// import GetStarted from '../components/GetStarted'

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundImage: `url(https://images.unsplash.com/photo-1619632973808-4acf8041df42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2251&q=80)`,
      width: '100%',
      height: 'auto',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center center',
      padding: '20rem 0rem 5rem 0rem',
   },
   mainContent: {
      padding: '0rem 0rem 8rem 0rem',
   },
   mainTitle: {
      borderBottom: '3px solid #FF8E53',
   },
   pics: {
      width: '600px',
      height: 'auto',
      padding: '1.5rem',
      border: '3px solid pink',
   },
   mainDescription: {
      width: '700px',
      height: 'auto',
      color: mainTheme.palette.defaultLight.main,
      letterSpacing: theme.spacing(0.25),
      [theme.breakpoints.down('md')]: {
         width: '100%',
      },
   },
   icons: {
      width: '50px',
      height: 'auto',
      color: mainTheme.palette.defaultLight.main,
   },
   banner: {
      background: 'linear-gradient(40deg,#9b80ce, #f4f1fa 50%,#0f0c29 30%)',
      padding: '4rem 0rem 4rem 0rem',
   },
   btnWrapper: {
      margin: '2rem 0 5rem 0',
   },
   button: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      color: mainTheme.palette.defaultLight.main,
   },
   btn: {
      border: 'none',
      fontWeight: 600,
      textDecoration: 'underline',
      '&:hover': {
         backgroundColor: 'transparent',
      },
   },
}))

function ContentSection() {
   const classes = useStyles()
   return (
      <>
         <div className={classes.root}>
            <Container maxWidth="xl">
               <Grid
                  container
                  direction="row"
                  justify="space-around"
                  alignItems="center"
                  className={classes.mainContent}
               >
                  <Box>
                     <img
                        src="../../public/assets/computerVector.jpg"
                        className={classes.pics}
                     />
                  </Box>
                  <Grid>
                     <Typography variant="h3" className={classes.mainTitle}>
                        <DescriptionIcon className={classes.icons} />
                        Content Writing Essentials
                     </Typography>
                     <Typography paragraph className={classes.mainDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt sit quae et dolorum consequuntur similique quo
                        nam laudantium. Distinctio possimus facilis inventore
                        numquam ad id soluta amet quisquam non asperiores.Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt sit quae et dolorum consequuntur similique quo
                        nam laudantium. Distinctio possimus facilis inventore
                        numquam ad id soluta amet quisquam non asperiores.
                     </Typography>
                  </Grid>
               </Grid>
               {/* <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          className={classes.banner}
        >
          <Grid>
            <Typography variant="h4">Features</Typography>
            <Typography>
              <DescriptionIcon /> This is the first feature
            </Typography>{' '}
            <Typography>
              <DescriptionIcon /> This is the first feature
            </Typography>{' '}
            <Typography>
              <DescriptionIcon /> This is the first feature
            </Typography>{' '}
            <Typography>
              <DescriptionIcon /> This is the first feature
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="h4">
              Major signs you need Content Writing
            </Typography>
            <Typography>
              <DescriptionIcon /> This is the first feature
            </Typography>{' '}
            <Typography>
              <DescriptionIcon /> This is the first feature
            </Typography>{' '}
            <Typography>
              <DescriptionIcon /> This is the first feature
            </Typography>{' '}
            <Typography>
              <DescriptionIcon /> This is the first feature
            </Typography>
          </Grid>
        </Grid> */}
               <Grid
                  container
                  direction="row"
                  justify="center"
                  className={classes.btnWrapper}
               >
                  <Button
                     variant="contained"
                     className={classes.button}
                     startIcon={<ComputerIcon />}
                     size="large"
                  >
                     Request a Free Quote!
                  </Button>
                  <Button
                     className={classes.btn}
                     endIcon={<ArrowRightAltIcon className={classes.BtnIcon} />}
                     size="large"
                  >
                     Questions? Talk to an expert!
                  </Button>
               </Grid>
               {/* <GetStarted/> */}
            </Container>
         </div>
         <Features />
         <FaqServices />
      </>
   )
}

export default ContentSection
