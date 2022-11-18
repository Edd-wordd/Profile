import React from 'react'
import { SectionHeader } from '../index'
import { Grid, Typography, Container, Paper, Hidden } from '@material-ui/core'
import { useStyles } from '../styles/MajorSigns.styles'

const MajorSigns = (props) => {
  const classes = useStyles(props)
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
