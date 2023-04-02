import React from 'react'
import { Container, Typography, Grid, Link, Paper } from '@mui/material'
import { SectionHeader } from '../index'
import questionDetails from '../../data/questionsData'
import { QuestionsBackground, QuestionLinks, Span } from '../styles/sections/Questions.styles'

function Questions() {
  return (
    <>
      <QuestionsBackground>
        <Grid sx={{ color: '#f5f5f5', padding: '2rem 0rem' }}>
          <SectionHeader title="Ask yourself these Q's" subTitle="Bring you ideas to life!" />
        </Grid>
        <Container maxWidth="lg">
          <Grid container direction="row" justifyContent="center">
            {questionDetails.map((question) => (
              <Paper
                key={question.id}
                variant="outlined"
                sx={{
                  maxWidth: '30rem',
                  height: 'auto',
                  margin: '1rem 1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.60)',
                  padding: '1rem 1.75rem ',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: '#f5f5f5', fontWeight: 600, textAlign: 'center' }}
                >
                  {question.question}
                </Typography>
                <Typography paragraph sx={{ color: '#f5f5f5', padding: '1rem 0' }}>
                  {question.details}
                </Typography>
                <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                  <Link href={question.link} component={QuestionLinks}>
                    Learn More
                  </Link>
                </Grid>
              </Paper>
            ))}
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ padding: '3rem 0rem 0rem 0rem' }}
          >
            <Typography
              variant="h6"
              sx={{ color: '#f5f5f5', fontWeight: 600, textAlign: 'center' }}
            >
              If you answered
              <Span>
                <span> YES </span>
              </Span>
              to any of these questions, reach out to us for a consultation on how we can help you
              establish and enhance your digital presence. then consider our services to help you
              get started
              <Span>
                <span> !!!</span>
              </Span>
            </Typography>
          </Grid>
        </Container>
      </QuestionsBackground>
    </>
  )
}

export default Questions
