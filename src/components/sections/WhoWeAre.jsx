import React from 'react'
import { Container, Typography, Grid, Paper } from '@material-ui/core'
import Zoom from '@material-ui/core/Zoom'
import { Transition } from 'react-transition-group'
import { ButtonLink, SectionHeader } from '../index'
import { useStyles } from '../styles/sections/WhoWeAre.styles'
import { handleChange } from '../../utils'

const coreValues = [
  {
    id: 1000,
    coreTitle: 'Best Practices',
    coreValue:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
  {
    id: 1001,
    coreTitle: 'Industry Standards',
    coreValue:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
  {
    id: 1002,
    coreTitle: 'Culture',
    coreValue:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
]

function WhoWeAre(props) {
  const classes = useStyles(props)
  const [inProp, setInProp] = React.useState(false)

  const cardsObs = (entries, observer) => {
    entries.forEach((entry) => {
      // guard clause
      if (!entry.isIntersecting) return
      if (entry.isIntersecting) {
        setInProp(true)
      }
    })
    observer.unobserve(entries.target)
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

      <Container maxWidth="xl" id="cards">
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          {coreValues.map((value, index) => (
            <Transition in={setInProp} timeout={1000} key={value.id}>
              {(state) => (
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
