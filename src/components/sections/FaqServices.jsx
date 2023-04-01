import React from 'react'
import { SectionHeader } from '../index'
import { Grid, Typography, Container } from '@mui/material'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import { useStyles } from '../styles/sections/FaqServices.styles'
import {
  InfoWrapper,
  AccordionWrapper,
  CustomAccordion,
} from '../styles/sections/FaqServices.styles'

const questions = [
  {
    id: 3000,
    question: 'one question',
    details: 'this is the answer to the question',
    rank: 1,
  },
  {
    id: 3001,
    question: 'Two question',
    details: 'this is the answer to the question',
    rank: 2,
  },
  {
    id: 3002,
    question: 'Three question',
    details: 'this is the answer to the question',
    rank: 3,
  },
  {
    id: 3003,
    question: 'Four question',
    details: 'this is the answer to the question',
    rank: 4,
  },
  {
    id: 3004,
    question: 'Five question',
    details: 'this is the answer to the question',
    rank: 5,
  },
]

function FaqServices(props) {
  // const classes = useStyles(props)
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <div>
      <SectionHeader title="FAQ" subTitle="Ask Away" />
      <Container maxWidth="lg">
        <InfoWrapper>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            // className={classes.infoWrapper}
          >
            <Typography paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veniam ipsum aliquid
              explicabo. Harum ipsa blanditiis eaque ducimus dolores libero corrupti eligendi
              debitis. Nulla delectus tempore aliquid. Beatae, blanditiis. Necessitatibus? Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Nemo quasi beatae, doloremque
              aliquam deserunt veritatis perspiciatis molestias sequi libero dolorem, natus
              quibusdam ex atque, sit sapiente odit quidem eum autem.
            </Typography>
          </Grid>
        </InfoWrapper>
        <AccordionWrapper>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            // className={classes.accordionWrapper}
          >
            <Grid>
              {questions.map((question) => {
                return (
                  <CustomAccordion key={question.id}>
                    <Accordion
                      // className={classes.accordion}
                      key={question.id}
                      expanded={expanded === `${question.rank}`}
                      onChange={handleChange(`${question.rank}`)}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{question.question}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          this is in the {question.question} {question.details}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </CustomAccordion>
                )
              })}
            </Grid>
          </Grid>
        </AccordionWrapper>
      </Container>
    </div>
  )
}

export default FaqServices
