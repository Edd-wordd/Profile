import React from 'react'
import { Container, Typography, Grid, Link, Paper } from '@mui/material'
import SectionHeader from '../../components/sections/SectionHeader'
import questionDetails from '../../data/questionsData'
import { QuestionsBackground, QuestionLinks, Span } from '../styles/sections/Questions.styles'

function Questions() {
  return (
    <>
      <QuestionsBackground>
        <Grid sx={{ color: '#f5f5f5', padding: '2rem 0rem' }}>
          <SectionHeader
            title="Digital Presence Evaluation"
            subTitle="Answer these questions to determine your digital needs"
          />
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
              to any of the questions above, don't hesitate to contact us for a consultation on how
              we can help you establish and enhance your digital presence. Our expert team
              specializes in web design, app development, and digital marketing strategies to help
              you achieve your business goals. Consider our comprehensive services to get started on
              your digital transformation journey today
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
