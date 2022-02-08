import React from 'react'
import mainTheme from '../../theme'
import { makeStyles, Button, Paper } from '@material-ui/core'
import { Container, Typography, Grid } from '@material-ui/core'
import ComputerIcon from '@material-ui/icons/Computer'
import SectionHeader from './SectionHeader'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import Zoom from '@material-ui/core/Zoom'
import { Transition } from 'react-transition-group'

const useStyles = makeStyles((theme) => ({
  root: {},
  paragraphWrapper: { margin: '3rem 0' },
  paraInfo: {
    letterSpacing: theme.spacing(0.25),
    lineHeight: theme.spacing(0.25),
  },
  boxes: {
    width: '250px',
    height: 'auto',
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  btnWrapper: {
    margin: '2rem 0 5rem 0',
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: mainTheme.palette.defaultLight.main,
  },
  btn: {
    border: 'none',
    fontWeight: 600,
    textDecoration: 'underline',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  BtnIcon: {
    color: ' #FE6B8B',
  },
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
    coreTitle: 'Culture',
    coreValue:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
]

function WhoWeAre() {
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
      <SectionHeader title="Who We Are" subTitle="Bring you ideas to life!" />
      <Container maxWidth="lg">
        <Grid className={classes.paragraphWrapper}>
          <Typography paragraph variant="body1" className={classes.paraInfo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            officiis ea! Atque, ratione cumque. Fugiat earum eius doloribus quo
            repudiandae, maiores excepturi officia iusto consequuntur quis odio
            labore, commodi minima? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deserunt, officiis ea! Atque, ratione cumque.
            Fugiat earum eius doloribus quo repudiandae, maiores excepturi
            officia iusto consequuntur quis odio labore, commodi minima? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            officiis ea! Atque, ratione cumque. Fugiat earum eius doloribus quo
            repudiandae, maiores excepturi officia iusto consequuntur quis odio
            labore, commodi minima?8
          </Typography>
        </Grid>
      </Container>

      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          {coreValues.map((value, index) => (
            <Transition in={setInProp} timeout={1000} key={index}>
              {(state) => (
                <Zoom in={inProp} mountOnEnter unmountOnExit timeout={2000}>
                  <Paper variant="outlined" className={classes.boxes}>
                    <Typography variant="subtitle1">
                      <b>{value.coreTitle}</b>
                    </Typography>
                    <Typography
                      paragraph
                      variant="body1"
                      style={{ color: '#808080' }}
                    >
                      {value.coreValue}
                    </Typography>
                  </Paper>
                </Zoom>
              )}
            </Transition>
          ))}
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          className={classes.btnWrapper}
        >
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<ComputerIcon />}
            size="large"
          >
            Request a Free Quote!
          </Button>
          <Button
            className={classes.btn}
            endIcon={<ArrowRightAltIcon className={classes.BtnIcon} />}
            size="large"
          >
            Questions? Talk to an expert!
          </Button>
        </Grid>
      </Container>
    </>
  )
}

export default WhoWeAre
