import React from 'react'
import SectionHeader from '../../components/sections/SectionHeader'
import { Grid, Typography, Container, Paper } from '@mui/material'
import { useStyles } from '../styles/sections/MajorSigns.styles'

const MajorSigns = (props) => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <SectionHeader
        title={`Top Indicators That You Require ${props.title}`}
        subTitle="Key Factors to Consider"
      />
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          className={classes.information}
        >
          <Typography>{props.majorSignInfo}</Typography>
        </Grid>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid>
            <Paper className={classes.paper}>
              <Typography variant="h6" className={classes.paperTitle}>
                {props.majorTitle_1}
              </Typography>
              <Typography>{props.majorInfo_1}</Typography>
            </Paper>
          </Grid>
          <Grid>
            <Paper className={classes.paper}>
              <Typography variant="h6" className={classes.paperTitle}>
                {props.majorTitle_2}
              </Typography>
              <Typography>{props.majorInfo_2}</Typography>
            </Paper>
          </Grid>
          <Grid>
            <Paper className={classes.paper}>
              <Typography variant="h6" className={classes.paperTitle}>
                {props.majorTitle_3}
              </Typography>
              <Typography>{props.majorInfo_3}</Typography>
            </Paper>
          </Grid>
          <Grid>
            <Paper className={classes.paper}>
              <Typography variant="h6" className={classes.paperTitle}>
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
