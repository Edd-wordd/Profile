import React from 'react'
import { Container, Typography, Grid, Link, Paper} from '@material-ui/core'
import { SectionHeader } from '../index'
import { useStyles } from '../styles/sections/Questions.styles'

const sectionOneQuestions = [
  {
    id: 2000,
    question: 'Do you have a great mobile app idea?',
    details:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    link: '/services/mobile-app',
  },
  {
    id: 2001,
    question: 'Does your business need a online presence?',
    details:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    link: '/services/web-design',
  },
  {
    id: 2002,
    question: 'Is your site outdated and in need of a revamp?',
    details:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    link: '/services/web-maintenance',
  },
  {
    id: 2003,
    question: 'Are you not getting the traction you expected?',
    details:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    link: '/services/seo',
  },
]

function Questions(props) {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <Grid className={classes.titleWrapper}>
        <SectionHeader title="Ask yourself these Q's" subTitle="Bring you ideas to life!" />
      </Grid>
      <Container maxWidth="lg">
        <Grid container direction="row" justify="center">
          {sectionOneQuestions.map((question, index) => (
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
            then consider our services below to help you get started
            <span className={classes.word}>!!!</span>
          </Typography>
          <Typography paragraph className={classes.para}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit.
          </Typography>
        </Grid>
      </Container>
    </div>
  )
}

export default Questions
