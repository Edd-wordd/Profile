import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import mainTheme from '../theme'
import { Container, Hidden, Grid } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import Avatar from '@material-ui/core/Avatar'
import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded'
import StarRoundedIcon from '@material-ui/icons/StarRounded'
import SectionHeader from './SectionHeader'
// import Button from '@material-ui/core/Button'
// import ComputerIcon from '@material-ui/icons/Computer'
// import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly'
//this is a test to push

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const tutorialSteps = [
  {
    label: '- Redbull',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    quote:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem labore laboriosam ipsa tempore ducimus veniam culpa quasi, necessitatibus commodi, adipisci ut! Commodi temporibus consectetur repudiandae quisquam sint porro mollitia doloremque!',
  },
  {
    label: '- NIKE ',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    quote:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem labore laboriosam ipsa tempore ducimus veniam culpa quasi, necessitatibus commodi, adipisci ut! Commodi temporibus consectetur repudiandae quisquam sint porro mollitia doloremque!',
  },

  {
    label: '- Disney',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    quote:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem labore laboriosam ipsa tempore ducimus veniam culpa quasi, necessitatibus commodi, adipisci ut! Commodi temporibus consectetur repudiandae quisquam sint porro mollitia doloremque!',
  },
  {
    label: '- Pepsi',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    quote:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem labore laboriosam ipsa tempore ducimus veniam culpa quasi, necessitatibus commodi, adipisci ut! Commodi temporibus consectetur repudiandae quisquam sint porro mollitia doloremque!',
  },
  {
    label: '- X-Games',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    quote:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem labore laboriosam ipsa tempore ducimus veniam culpa quasi, necessitatibus commodi, adipisci ut! Commodi temporibus consectetur repudiandae quisquam sint porro mollitia doloremque!',
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#1FA2FF',
    color: '#f5f5f5',
    // borderRadius: '0% 25% 0% 25%',
    // border: '4px solid blue ',
    // boxShadow: '.5rem .5rem .5rem .5rem #bebebe',
    // backgroundImage: `url(https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNvZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)`,
    width: '100%',
    height: 'auto',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
  },
  wrapper: {
    width: '100%',
    flexGrow: 1,
    paddingTop: '3rem',
  },
  titleWrapper: {
    paddingTop: '3rem',
  },
  title: {
    paddingBottom: '1rem',
    // [theme.breakpoints.down('xs')]: {
    //   fontSize: '1.5rem',
    // },
  },
  subTitle: { marginTop: '1rem' },
  paragraphWrapper: { margin: '3rem 0' },
  paraInfo: {
    letterSpacing: '.1rem',
    lineHeight: '1.75rem',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 75,
    backgroundColor: 'transparent',
    color: '#f5f5f5',
  },
  clientQuote: {
    lineHeight: '2.5rem',
    letterSpacing: '.2rem',
  },

  avatarLarge: {
    width: '65px',
    height: '65px',
    margin: '3rem 1.5rem 5rem 0',
  },

  ratingTitle: {
    margin: '2rem .5rem 0rem 0rem',
  },

  starIcon: {
    color: '#F9D423',
    padding: '.5rem 0rem 3rem 0rem',
  },
  quoteIcon: {
    width: '65px',
    height: 'auto',
    color: '#1FA2FF',
  },
  button: {
    margin: theme.spacing(1),
    background: '#FE6B8B',

    // backgroundColor: mainTheme.palette.primary.main,
    color: mainTheme.palette.defaultLight.main,
    opacity: '85%',
    marginBottom: '3rem',
  },
  //   clientNameTitle: { paddingLeft: '5rem' },
}))

function ClientTest() {
  const classes = useStyles()
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid
          className={classes.titleWrapper}
          container
          direction="row"
          justify="center"
        >
          <SectionHeader
            title="Clients Trust Our Process"
            subTitle="Bring you ideas to life!"
          />
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <div className={classes.wrapper}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Paper square elevation={0} className={classes.header}>
                <Avatar
                  alt={tutorialSteps[activeStep].label}
                  src={tutorialSteps[activeStep].imgPath}
                  className={classes.avatarLarge}
                />
                <Typography variant="h5">
                  {tutorialSteps[activeStep].label}
                </Typography>
                <Typography className={classes.clientNameTitle}>
                  {tutorialSteps[activeStep].clientName}
                </Typography>
              </Paper>
            </Grid>
            <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {tutorialSteps.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <div>
                      <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                      >
                        <Typography className={classes.clientQuote}>
                          <FormatQuoteRoundedIcon
                            className={classes.quoteIcon}
                          />
                          <i>{step.quote}</i>
                        </Typography>
                        <Grid
                          container
                          direction="column"
                          justify="flex-end"
                          alignItems="flex-end"
                        >
                          <Typography className={classes.ratingTitle}>
                            Review Rating:
                          </Typography>
                          <Grid container direction="row" justify="flex-end">
                            <StarRoundedIcon className={classes.starIcon} />
                            <StarRoundedIcon className={classes.starIcon} />
                            <StarRoundedIcon className={classes.starIcon} />
                            <StarRoundedIcon className={classes.starIcon} />
                            <StarRoundedIcon className={classes.starIcon} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
          </div>
        </Grid>
        {/* <Grid container item direction="row" justify="center">
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<ComputerIcon />}
            size="small"
          >
            Web Development
          </Button>

          <Button
            variant="contained"
            className={classes.button}
            startIcon={<MobileFriendlyIcon />}
            size="small"
          >
            Mobile Development
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<ComputerIcon />}
            size="small"
          >
            Web Development
          </Button>

          <Button
            variant="contained"
            className={classes.button}
            startIcon={<MobileFriendlyIcon />}
            size="small"
          >
            Mobile Development
          </Button>
        </Grid> */}
      </Container>
    </div>
  )
}

export default ClientTest
