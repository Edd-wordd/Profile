import React from 'react'
import { SectionHeader } from '../index'
import { Grid, Typography, Container } from '@material-ui/core'
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useStyles } from '../styles/FaqServices.styles'

const questions = [
  {
    question: 'this is one question',
    details: 'this is the answer to the question',
    rank: 1,
  },
  {
    question: 'this is Two question',
    details: 'this is the answer to the question',
    rank: 2,
  },
  {
    question: 'this is Three question',
    details: 'this is the answer to the question',
    rank: 3,
  },
  {
    question: 'this is Four question',
    details: 'this is the answer to the question',
    rank: 4,
  },
  {
    question: 'this is Five question',
    details: 'this is the answer to the question',
    rank: 5,
  },
]
const questionSecond = [
  {
    question: 'this is Six question',
    details: 'this is the answer to the question',
    rank: 6,
  },
  {
    question: 'this is Seven question',
    details: 'this is the answer to the question',
    rank: 7,
  },
  {
    question: 'this is Eight question',
    details: 'this is the answer to the question',
    rank: 8,
  },
  {
    question: 'this is Nine question',
    details: 'this is the answer to the question',
    rank: 9,
  },
  {
    question: 'this is Ten question',
    details: 'this is the answer to the question',
    rank: 10,
  },
]

function FaqServices(props) {
  const classes = useStyles(props)
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <div>
      <SectionHeader title="FAQ" subTitle="Ask Away" />
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.mainInfo}
        >
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veniam ipsum aliquid
            explicabo. Harum ipsa blanditiis eaque ducimus dolores libero corrupti eligendi debitis.
            Nulla delectus tempore aliquid. Beatae, blanditiis. Necessitatibus? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Nemo quasi beatae, doloremque aliquam deserunt
            veritatis perspiciatis molestias sequi libero dolorem, natus quibusdam ex atque, sit
            sapiente odit quidem eum autem.
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          className={classes.questionWrapper}
        >
          <Grid>
            {questions.map((question, index) => {
              return (
                <Accordion
                  className={classes.accordion}
                  key={index}
                  expanded={expanded === `${question.rank}`}
                  onChange={handleChange(`${question.rank}`)}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{question.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>This is in the details</Typography>
                  </AccordionDetails>
                </Accordion>
              )
            })}
          </Grid>
          <Grid>
            {questionSecond.map((question, index) => {
              return (
                <Accordion
                  className={classes.accordion}
                  key={index}
                  expanded={expanded === `${question.rank}`}
                  onChange={handleChange(`${question.rank}`)}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{question.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>This is in the details</Typography>
                  </AccordionDetails>
                </Accordion>
              )
            })}
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default FaqServices
