import React from 'react'
import { Container, Typography, Grid, Paper } from '@material-ui/core'
import Zoom from '@material-ui/core/Zoom'
import { Transition } from 'react-transition-group'
import { ButtonLink, SectionHeader } from '../index'
import { useStyles } from '../styles/WhoWeAre.styles'

const coreValues = [
  {
    coreTitle: 'Best Practices',
    coreValue:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
  {
    coreTitle: 'Industry Standards',
    coreValue:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
  {
    coreTitle: 'Culture',
    coreValue:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
]

function WhoWeAre(props) {
  const classes = useStyles(props)
  const [inProp, setInProp] = React.useState(false)

  const handleChange = () => {
    if (window.scrollY >= 400) {
      setInProp(true)
    } else {
      setInProp(false)
    }
  }
  window.addEventListener('scroll', handleChange)

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

      <Container maxWidth="xl">
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          {coreValues.map((value, index) => (
            <Transition in={setInProp} timeout={1000} key={index}>
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
        {/*TODO: Add path to the second link*/}
        <ButtonLink
          linkOne="/contact"
          linkTwo="/"
          btnOneText="Request a free Quote"
          btnTwoText="Questions? Talk to an expert!"
        />
      </Container>
    </>
  )
}

export default WhoWeAre
