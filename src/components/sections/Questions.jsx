import React from 'react'
import { Container, Typography, Grid, Link, Paper } from '@mui/material'
import { SectionHeader } from '../index'
import { useStyles } from '../styles/sections/Questions.styles'
import questionDetails from '../../data/questionsData'

function Questions(props) {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <Grid className={classes.titleWrapper}>
        <SectionHeader title="Ask yourself these Q's" subTitle="Bring you ideas to life!" />
      </Grid>
      <Container maxWidth="lg">
        <Grid container direction="row" justify="center">
          {questionDetails.map((question) => (
            <Paper key={question.id} variant="outlined" className={classes.lgBoxes}>
              <Typography variant="h6" className={classes.question}>
                {question.question}
              </Typography>
              <Typography paragraph className={classes.para}>
                {question.details}
              </Typography>
              <Grid container direction="row" justify="flex-end" alignItems="center">
                <Link href={question.link} className={classes.links}>
                  Learn More
                </Link>
              </Grid>
            </Paper>
          ))}
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.btmQuestion}
        >
          <Typography variant="h6" className={classes.question}>
            If you answered <span className={classes.word}>YES</span> to any of these questions,
            reach out to us for a consultation on how we can help you establish and enhance your
            digital presence. then consider our services to help you get started
            <span className={classes.word}>!!!</span>
          </Typography>
        </Grid>
      </Container>
    </div>
  )
}

export default Questions
