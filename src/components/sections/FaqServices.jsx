import React, { Suspense, lazy } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography,
  Container,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { CustomAccordion } from '../styles/sections/FaqServices.styles'
import faqQuestions from '../../data/faqData'
import Spinner from '../spinners/Spinner'

const SectionHeader = lazy(() => import('./SectionHeader'))

function FaqServices() {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <SectionHeader
          title="Frequently Asked Questions About Our Website and Software Services"
          subTitle="Get the answers you need"
        />
      </Suspense>
      <Container maxWidth="lg" sx={{ paddingBottom: '4rem' }}>
        <Grid sx={{ padding: '3rem 0rem' }}>
          <Typography component="p">
            `At monaTech, we strive to provide our clients with the best possible website and
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
                        <Typography component="h3">{question.question}</Typography>
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
