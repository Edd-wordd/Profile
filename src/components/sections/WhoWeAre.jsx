import React from 'react'
import { Container, Typography, Grid, Paper } from '@mui/material'
import { Zoom } from '@mui/material'
import Transition from 'react-transition-group/Transition'
import { ButtonLink, SectionHeader } from '../index'
import { useStyles } from '../styles/sections/WhoWeAre.styles'

// how to new line in a string
// https://stackoverflow.com/questions/10805125/how-to-write-multiline-strings-in-javascript
const coreValues = [
  {
    id: 1000,
    coreTitle: 'Best Practices',
    coreValue: `We always start with a deep understanding of our clients' needs and goals. 
    - We use cutting-edge technologies to develop solutions that are scalable, secure, and future-proof. 
    - We are committed to delivering projects on time and within budget. 
    - We prioritize communication and transparency throughout the entire development process. 
    - We never compromise on quality or performance.`,
  },
  {
    id: 1001,
    coreTitle: 'Industry Standards',
    coreValue:
      "We adhere to the highest industry standards and take pride in our reputation for delivering reliable and secure solutions. We understand the importance of protecting our clients' sensitive data and take all necessary measures to ensure their privacy and security.",
  },
  {
    id: 1002,
    coreTitle: 'Culture',
    coreValue:
      'We foster a culture of creativity, collaboration, and innovation. Our team members are encouraged to explore new ideas, experiment with different approaches, and share their knowledge and expertise with each other. This culture of learning and growth enables us to continually improve our services and provide our clients with the best possible solutions.',
  },
]

function WhoWeAre(props) {
  const classes = useStyles(props)
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
      <SectionHeader title="Who We Are" subTitle="Bring you ideas to life!" />
      <Container maxWidth="lg">
        <Grid className={classes.paragraphWrapper}>
          <Typography paragraph variant="body1" className={classes.paraInfo}>
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
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          {coreValues.map((value) => (
            <Transition in={!!setInProp} timeout={1000} key={value.id}>
              {() => (
                <Zoom in={inProp} mountOnEnter unmountOnExit timeout={2000}>
                  <Paper variant="outlined" className={classes.boxes}>
                    <Typography variant="subtitle1">
                      <b>{value.coreTitle}</b>
                    </Typography>
                    <Typography paragraph variant="body1" style={{ color: '#808080' }}>
                      {value.coreValue}
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
