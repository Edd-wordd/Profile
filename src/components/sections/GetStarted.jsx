import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import mainTheme from '../../theme'
import Paper from '@material-ui/core/Paper'
import { Container, Typography, Grid, Hidden } from '@material-ui/core'
import SectionHeader from './SectionHeader'
import BeenhereIcon from '@material-ui/icons/Beenhere'
import { ButtonLink } from '../index'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f4f1fa', //light purple color
  },
  headingWrapper: {
    paddingTop: theme.spacing(3),
  },
  icons: {
    width: '50px',
    height: 'auto',
    color: '#616161', // light grey color
  },
  line: {
    width: '175px',
    padding: '0rem 5rem',
    margin: '0rem .5rem',
    borderBottom: '3px dotted #c0c0c0',
  },
  boxes: {
    width: '300px',
    height: 'auto',
    border: 'none',
    padding: theme.spacing(4),
    margin: '0rem 1.5rem 0rem 1rem',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  iconWrapper: {
    marginTop: theme.spacing(6),
  },
}))

const getStartedSteps = [
  {
    title: '1. Call us!',
    description:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
  {
    title: '2. Discuss your Ideas!',
    description:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
  {
    title: '3. Plan your Design!',
    description:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
  {
    title: '4. Deploy your Website!',
    description:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
]

function GetStarted() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid className={classes.headingWrapper}>
        <SectionHeader title="How to get Started?" subTitle="The right time is NOW!" />
      </Grid>
      <Grid
        className={classes.iconWrapper}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Hidden mdDown>
          <BeenhereIcon className={classes.icons} />
          <div className={classes.line}></div>
          <BeenhereIcon className={classes.icons} />
          <div className={classes.line}></div>

          <BeenhereIcon className={classes.icons} />
          <div className={classes.line}></div>

          <BeenhereIcon className={classes.icons} />
        </Hidden>
      </Grid>

      <Grid container direction="row" justify="center" alignItems="center">
        {getStartedSteps.map((step, index) => (
          <Paper variant="outlined" className={classes.boxes} key={index}>
            <Grid container direction="row" justify="center" alignItems="center">
              <Typography variant="subtitle1">{step.title}</Typography>
              <Typography paragraph variant="body1" style={{ color: '#808080' }}>
                {step.description}
              </Typography>
            </Grid>
          </Paper>
        ))}
      </Grid>
      <Container maxWidth="lg">
        <Grid container direction="row" justify="center">
          <Typography paragraph variant="body1" style={{ color: '#808080' }}>
            'We believe in high quality work, and keep our team members practicing the industry
            standards while developing new innovative ways.',
          </Typography>
        </Grid>
      </Container>
      <ButtonLink
        linkOne="/contact"
        linkTwo="/"
        btnOneText="Get Started"
        btnTwoText="Questions? Talk to an Expert!"
      />
    </div>
  )
}

export default GetStarted
