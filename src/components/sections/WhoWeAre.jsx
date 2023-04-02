import React from 'react'
import { Container, Typography, Grid, Paper } from '@mui/material'
import { Zoom } from '@mui/material'
import Transition from 'react-transition-group/Transition'
import { ButtonLink, SectionHeader } from '../index'
import companyValues from '../../data/whoWeAreData'
import { WhoWeAreCards } from '../styles/sections/WhoWeAre.styles'
function WhoWeAre(props) {
  const [inProp, setInProp] = React.useState(false)

  const cardsObs = (entries, observer) => {
    const [entry] = entries
    // guard clause
    if (!entry.isIntersecting) return
    if (entry.isIntersecting) {
      setInProp(true)
    }
    observer.unobserve(entry.target)
  }

  const cardObserver = new IntersectionObserver(cardsObs, {
    root: null,
    threshold: 0.5,
  })

  React.useEffect(() => {
    const target = document.querySelector('#cards')
    cardObserver.observe(target)
  }, [])

  return (
    <>
      <SectionHeader title="Who We Are" subTitle="Bring you ideas to life!" />w{' '}
      <Container maxWidth="lg">
        <Grid sx={{ margin: '3rem 0' }}>
          <Typography paragraph variant="body1" sx={{ lineHeight: '1.75rem' }}>
            Welcome to our world of digital innovation! We are a team of skilled technologists and
            problem solvers, passionate about harnessing the power of technology to transform
            businesses and lives. Our mission is to provide innovative web and software solutions
            that meet the evolving needs of our clients, no matter how complex. We thrive on
            challenges and believe that great ideas can come from anyone, anywhere. With our
            creative and collaborative approach, we bring fresh perspectives to every project,
            delivering tailored solutions that exceed expectations. Whether you're looking for
            cutting-edge web design, mobile app development, or custom software solutions, we've got
            you covered. Let's embark on a journey of digital transformation together, and bring
            your vision to life!
          </Typography>
        </Grid>
      </Container>
      <Container maxWidth="xl" id="cards">
        <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
          {companyValues.map((value) => (
            <Transition in={!!setInProp} timeout={1000} key={value.id}>
              {() => (
                <Zoom in={inProp} mountOnEnter unmountOnExit timeout={2000}>
                  <Paper variant="outlined" component={WhoWeAreCards}>
                    <Typography variant="subtitle1">
                      <b>{value.title}</b>
                    </Typography>
                    <Typography paragraph variant="body1" style={{ color: '#808080' }}>
                      {value.description}
                    </Typography>
                  </Paper>
                </Zoom>
              )}
            </Transition>
          ))}
        </Grid>
        <ButtonLink linkOne="/contact" btnOneText="Request a free Quote" />
      </Container>
    </>
  )
}

export default WhoWeAre
