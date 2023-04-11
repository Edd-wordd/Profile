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
      <SectionHeader
        title="Frequently Asked Questions About Our Website and Software Services"
        subTitle="Get the answers you need"
      />
      <Container maxWidth="lg" sx={{ paddingBottom: '4rem' }}>
        <Grid sx={{ padding: '3rem 0rem' }}>
          <Typography component="p">
            At monaTech, we strive to provide our clients with the best possible website and
            software services. If you have questions about our services, you've come to the right
            place! Below, you'll find answers to some of the most frequently asked questions we
            receive from our clients.
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
                        <Typography component="h2" variant="h5">
                          {question.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography component="p">{question.answer}</Typography>
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
