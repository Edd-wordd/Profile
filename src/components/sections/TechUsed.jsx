import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Typography, Grid } from '@material-ui/core'
import ChildCareIcon from '@material-ui/icons/ChildCare'
import AdbIcon from '@material-ui/icons/Adb'
import FlightIcon from '@material-ui/icons/Flight'
import RedditIcon from '@material-ui/icons/Reddit'
import TwitterIcon from '@material-ui/icons/Twitter'
import SportsMotorsportsIcon from '@material-ui/icons/SportsMotorsports'
import TypeIt from 'typeit-react'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)`,
    width: '100%',
    height: 'auto',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
  },
  boxes: {
    width: '200px',
    height: 'auto',
    padding: theme.spacing(4),
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(5),
    backgroundColor: 'transparent',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      paddingLeft: theme.spacing(10),
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingLeft: theme.spacing(5),
    },
  },
  icon: {
    color: 'white',
    width: '125px',
    height: 'auto',
    padding: theme.spacing(4.5),
    [theme.breakpoints.down('md')]: {
      width: '50%',
      paddingLeft: theme.spacing(8.5),
    },
  },
  iconTitle: {
    color: 'white',
    fontSize: theme.spacing(4),
  },

  header: {
    color: 'white',
    padding: '3rem 0rem 0rem 0rem',
  },
  headerWrapper: {
    color: 'white',
    paddingBottom: theme.spacing(1),
  },
}))
const icons = [
  AdbIcon,
  ChildCareIcon,
  FlightIcon,
  RedditIcon,
  TwitterIcon,
  SportsMotorsportsIcon,
]
const coreValues = [
  {
    coreTitle: 'JavaScript',
    coreValue:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
  {
    coreTitle: 'ReactJS',
    coreValue:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
  {
    coreTitle: 'React Native',
    coreValue:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
  {
    coreTitle: 'WordPress',
    coreValue:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
  {
    coreTitle: 'Shopify',
    coreValue:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
  {
    coreTitle: 'Figma',
    coreValue:
      'We believe in high quality work, and keep our team members practicing the industry standards while developing new innovative ways.',
  },
]
function TechUsed() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        className={classes.headerWrapper}
      >
        <Typography variant="h3" className={classes.header}>
          <TypeIt
            options={{
              strings: ['Technologies!'],
              speed: 125,
              waitUntilVisible: true,
            }}
          ></TypeIt>
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        {coreValues.map((value, index) => {
          const Icon = icons[index]
          return (
            <Grid
              item
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
              sm={12}
              md={5}
              lg={2}
              key={index}
            >
              <Paper elevation={0} className={classes.boxes}>
                <Icon className={classes.icon} />
                <Grid
                  item
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Typography variant="subtitle1" className={classes.iconTitle}>
                    <b>{value.coreTitle}</b>
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default TechUsed
