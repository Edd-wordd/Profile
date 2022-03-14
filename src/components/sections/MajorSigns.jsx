import React from 'react'
import { SectionHeader } from '../index'
import { Grid, Typography, Container, Paper, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import mainTheme from '../../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    color: mainTheme.palette.defaultLight.main,
  },
  information: {
    color: mainTheme.palette.defaultLight.main,
    padding: '2rem 10rem',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(4),
    color: theme.palette.text.secondary,
    borderRadius: theme.spacing(1),
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(1),
    },
  },
  image: {
    margin: theme.spacing(0.5),
    borderRadius: theme.spacing(1),
    width: '400px',
    height: '400px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  paperTitle: {
    fontSize: theme.spacing(3),
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(2),
    },
  },
}))
const MajorSigns = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <SectionHeader
        title={`Major Signs you need ${props.title}`}
        subTitle="here is what you need"
      />
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.information}
        >
          <Typography>{props.majorSignInfo}</Typography>
        </Grid>

        <Grid container direction="row" justify="center" alignItems="center">
          <Grid lg={4} item>
            <Paper className={classes.paper}>
              <Typography variant="h5" className={classes.paperTitle}>
                {props.majorTitle_1}
              </Typography>
              <Typography>{props.majorInfo_1}</Typography>
            </Paper>
            <Paper className={classes.paper}>
              <Typography variant="h5" className={classes.paperTitle}>
                {props.majorTitle_2}
              </Typography>
              <Typography>{props.majorInfo_2}</Typography>
            </Paper>
          </Grid>
          <Hidden mdDown>
            <Grid lg={4} item>
              <img className={classes.image} alt="image3" src={props.majorImage} />
            </Grid>
          </Hidden>
          <Grid lg={4} item>
            <Paper className={classes.paper}>
              <Typography variant="h5" className={classes.paperTitle}>
                {props.majorTitle_3}
              </Typography>
              <Typography>{props.majorInfo_3}</Typography>
            </Paper>
            <Paper className={classes.paper}>
              <Typography variant="h5" className={classes.paperTitle}>
                {props.majorTitle_4}
              </Typography>
              <Typography>{props.majorInfo_4}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default MajorSigns
