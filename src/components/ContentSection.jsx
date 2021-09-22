import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Paper, Grid, Container } from '@material-ui/core'
import mainTheme from '../theme'
import Box from '@material-ui/core/Box'
import DescriptionIcon from '@material-ui/icons/Description'

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
  pics: {
    width: '600px',
    height: 'auto',
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
}))

function ContentSection() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Box>
            <img
              src="../../public/assets/lukas-blazek-mcSDtbWXUZU-unsplash.jpg"
              className={classes.pics}
            />
          </Box>
          <Grid>
            <Typography variant="h3">
              <DescriptionIcon className={classes.icons} />
              Content Writing Essentials
            </Typography>
            <Typography paragraph className={classes.mainDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              sit quae et dolorum consequuntur similique quo nam laudantium.
              Distinctio possimus facilis inventore numquam ad id soluta amet
              quisquam non asperiores.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt sit quae et dolorum consequuntur
              similique quo nam laudantium. Distinctio possimus facilis
              inventore numquam ad id soluta amet quisquam non asperiores.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default ContentSection
