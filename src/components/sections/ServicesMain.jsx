import React from 'react'
import mainTheme from '../../theme'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Grid, Grow } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import SectionHeader from './SectionHeader'
import { Transition } from 'react-transition-group'
import ButtonLink from '../buttons/ButtonLink'

const useStyles = makeStyles((theme) => ({
  root: {},
  paragraphWrapper: { margin: '3rem 0' },
  paraInfo: {
    letterSpacing: theme.spacing(0.25),
    lineHeight: theme.spacing(0.25),
  },
  boxes: {
    width: '600px',
    height: 'auto',
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  coreValue: { color: '#616161' }, // light grey color
}))

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
    coreTitle: 'Quality Work',
    coreValue:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
  {
    coreTitle: 'Innovative Ideas',
    coreValue:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
]

function ServicesMain() {
  const classes = useStyles()
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
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          {coreValues.map((value, index) => (
            <Transition in={setInProp} timeout={2000} key={index}>
              {(state) => (
                <Grow in={inProp} timeout={2000}>
                  <Paper elevation={2} className={classes.boxes} key={index}>
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
        <ButtonLink
          btnOneText="Get Started"
          btnTwoText="Questions? Talk to an expert!"
          linkOne="/contact"
        />
      </Container>
    </>
  )
}

export default ServicesMain
