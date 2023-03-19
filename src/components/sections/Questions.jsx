import React from 'react'
import { Container, Typography, Grid, Link, Paper } from '@material-ui/core'
import { SectionHeader } from '../index'
import { useStyles } from '../styles/sections/Questions.styles'

const sectionOneQuestions = [
  {
    id: 2000,
    question: "What are my company's goals and objectives?",
    details:
      "Before deciding whether you need a digital presence for your company provided by a software company, it's important to consider your company's goals and objectives. Are you looking to increase brand awareness, generate leads, drive sales, or improve customer engagement? Your goals will help determine the type of digital presence you need, as well as the software company that can provide it.",
    link: '/services/mobile-app',
  },
  {
    id: 2001,
    question: 'Who is my target audience?',
    details:
      "It's important to consider your target audience when deciding on a digital presence for your company. Are they primarily on social media, or do they use search engines to find information? Understanding your audience's behavior and preferences can help determine which digital channels and software companies will be most effective in reaching them.\n" +
      '\n',
    link: '/services/web-design',
  },
  {
    id: 2002,
    question: 'What are my competitors doing?',
    details:
      "It's also important to consider what your competitors are doing when it comes to digital presence. Are they active on social media? Do they have a strong website presence? Understanding how your competitors are using digital channels can help you determine the best way to differentiate your company and stand out in your industry.",
    link: '/services/web-maintenance',
  },
  {
    id: 2003,
    question: 'What resources do I have available?',
    details:
      "It's important to consider what resources you have available to implement and maintain a digital presence. Do you have in-house staff with the necessary skills and expertise to create and manage a website, social media profiles, or digital marketing campaigns? Or will you need to outsource these tasks to a software company? Understanding your resources can help determine the best approach for implementing a digital presence for your company.\n" +
      '\n' +
      '\n' +
      '\n',
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
          {sectionOneQuestions.map((question) => (
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
