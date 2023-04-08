import React from 'react'
import SectionHeader from '../../components/sections/SectionHeader'
import { Grid, Typography, Container } from '@mui/material'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { CustomAccordion } from '../styles/sections/FaqServices.styles'
import faqQuestions from '../../data/faqData'

function FaqServices() {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <>
      <SectionHeader title="FAQ" subTitle="Ask Away" />
      <Container maxWidth="lg" sx={{ paddingBottom: '4rem' }}>
        <Grid sx={{ padding: '3rem 0rem' }}>
          <Typography component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veniam ipsum aliquid
            explicabo. Harum ipsa blanditiis eaque ducimus dolores libero corrupti eligendi debitis.
            Nulla delectus tempore aliquid. Beatae, blanditiis. Necessitatibus? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Nemo quasi beatae, doloremque aliquam deserunt
            veritatis perspiciatis molestias sequi libero dolorem, natus quibusdam ex atque, sit
            sapiente odit quidem eum autem.{' '}
          </Typography>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
            <Grid component="section" aria-labelledby="faq-section">
              {faqQuestions.map((question) => {
                return (
                  <CustomAccordion key={question.id}>
                    <Accordion
                      key={question.id}
                      expanded={expanded === `${question.rank}`}
                      onChange={handleChange(`${question.rank}`)}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography component="h2">{question.questions}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography component="p">{question.answers}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  </CustomAccordion>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default FaqServices
