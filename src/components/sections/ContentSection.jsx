import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, Container } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import FaqServices from './FaqServices'
import {MajorSigns} from "../index";
import mainTheme from "../../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(https://images.unsplash.com/photo-1616004655123-818cbd4b3143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`,
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
    borderBottom: '1px solid #FF8E53',
    marginBottom:'1rem',
    color: mainTheme.palette.defaultLight.main,
  },
  pics: {
    width: '400px',
    height: 'auto',
    borderRadius: '10px',

  },
  mainDescription: {
    width: '600px',
    height: 'auto',
    color: mainTheme.palette.defaultLight.main,
    letterSpacing: theme.spacing(0.25),
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
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

function ContentSection(props) {
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="xl">
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            className={classes.mainContent}
          >
            <Box>
              <img alt='image4'
                src="../../../public/assets/computerVector.jpg"
                className={classes.pics}
              />
            </Box>
            <Grid>
              <Typography variant="h4" className={classes.mainTitle}>
                {props.title}
              </Typography>
              <Typography paragraph className={classes.mainDescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt sit quae et dolorum consequuntur similique quo nam
                laudantium. Distinctio possimus facilis inventore numquam ad id
                soluta amet quisquam non asperiores.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Incidunt sit quae et dolorum
                consequuntur similique quo nam laudantium. Distinctio possimus
                facilis inventore numquam ad id soluta amet quisquam non
                asperiores.
              </Typography>
            </Grid>
          </Grid>
          <MajorSigns />
        </Container>
      </div>
      <FaqServices />
    </>
  )
}

export default ContentSection
