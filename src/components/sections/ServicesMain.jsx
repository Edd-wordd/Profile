import React from 'react'
import { Paper, Container, Typography, Grid, Grow } from '@material-ui/core'
import { SectionHeader, ButtonLink } from '../index'
import { Transition } from 'react-transition-group'
import { useStyles } from '../styles/sections/ServicesMain.styles'

const coreValues = [
  {
    id: 4000,
    coreTitle: 'Best Practices',
    coreValue:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
  {
    id: 4001,
    coreTitle: 'Industry Standards',
    coreValue:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
  {
    id: 4002,
    coreTitle: 'Quality Work',
    coreValue:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
  {
    id: 4003,
    coreTitle: 'Innovative Ideas',
    coreValue:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
]

function ServicesMain(props) {
  const classes = useStyles(props)
  const [inProp, setInProp] = React.useState(false)
  const cardObs = function (entries, observer) {
    const [entry] = entries
    // guard clause
    if (!entry.isIntersecting) return
    if (entry.isIntersecting) {
      setInProp(true)
      observer.unobserve(entry.target)
    }
  }

  const serviceCardObserver = new IntersectionObserver(cardObs, {
    root: null,
    threshold: 0.5,
  })

  React.useEffect(() => {
    const target = document.querySelector('#servicesMain')
    serviceCardObserver.observe(target)
  }, [])

  return (
    <>
      <SectionHeader title="Our Services" subTitle="Bring you ideas to life!" />
      <Container maxWidth="lg">
        <Grid className={classes.paragraphWrapper}>
          <Typography paragraph variant="body1" className={classes.paraInfo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, officiis ea! Atque,
            ratione cumque. Fugiat earum eius doloribus quo repudiandae, maiores excepturi officia
            iusto consequuntur quis odio labore, commodi minima? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deserunt, officiis ea! Atque, ratione cumque. Fugiat earum
            eius doloribus quo repudiandae, maiores excepturi officia iusto consequuntur quis odio
            labore, commodi minima? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deserunt, officiis ea! Atque, ratione cumque. Fugiat earum eius doloribus quo
            repudiandae, maiores excepturi officia iusto consequuntur quis odio labore, commodi
            minima?8
          </Typography>
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          id="servicesMain"
        >
          {coreValues.map((value) => (
            <Transition in={setInProp} timeout={2000} key={value.id}>
              {() => (
                <Grow in={inProp} timeout={2000}>
                  <Paper elevation={2} className={classes.boxes} key={value.id}>
                    <Typography variant="subtitle1">
                      <b>{value.coreTitle}</b>
                    </Typography>
                    <Typography paragraph variant="body1" className={classes.coreValue}>
                      {value.coreValue}
                    </Typography>
                  </Paper>
                </Grow>
              )}
            </Transition>
          ))}
        </Grid>
        <ButtonLink linkOne="/contact" btnOneText="Get Started" />
      </Container>
    </>
  )
}

export default ServicesMain
