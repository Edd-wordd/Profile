import React from 'react'
import mainTheme from '../../theme'
import Fade from '@material-ui/core/Fade'
import { makeStyles } from '@material-ui/core'
import { Container, Typography, Grid, Link, Paper } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import BackupIcon from '@material-ui/icons/Backup'
import { Transition } from 'react-transition-group'
import SectionHeader from './SectionHeader'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined'
import BlurOnOutlinedIcon from '@material-ui/icons/BlurOnOutlined'
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined'
import CameraEnhanceOutlinedIcon from '@material-ui/icons/CameraEnhanceOutlined'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1852&q=80)`,
    width: '100%',
    height: 'auto',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
  },
  titleWrapper: {
    color: mainTheme.palette.defaultLight.main,
    padding: '2rem 0rem',
  },

  smBoxWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '3rem 0rem',
  },
  smBoxes: {
    width: '125px',
    height: 'auto',
    padding: theme.spacing(2),
    margin: '3rem .5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.17)',
    color: mainTheme.palette.defaultLight.main,
    [theme.breakpoints.down('lg')]: {
      margin: '3rem .17rem ',
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1.5),
      margin: '3rem .5rem ',
    },
  },
  lgBoxes: {
    border: `1px solid ${mainTheme.palette.defaultLight.main}`,
    width: '550px',
    height: 'auto',
    margin: '1rem 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.17)',
    padding: '.5rem 1rem ',
  },
  btmQuestion: {
    padding: '3rem 0rem 0rem 0rem',
  },
  question: {
    color: mainTheme.palette.defaultLight.main,
    fontWeight: 600,
  },
  para: {
    color: mainTheme.palette.defaultLight.main,
  },
  icons: {
    width: '100px',
    height: 'auto',
  },
  smIcon: {
    margin: '-.5rem 0rem',
  },
  word: {
    color: '#FE6B8B', // pinkish orange color
    fontSize: theme.spacing(3),
    fontWeight: '600',
  },
  links: {
    color: mainTheme.palette.defaultLight.main,
    textDecoration: 'underline',
    padding: '.5rem .5rem',
    '&:hover': {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      transform: 'scale(1.05)',
      padding: '.5rem .5rem',
      borderRadius: '5%',
    },
  },
}))

const sectionOneQuestions = [
  {
    question: 'Do you have a great mobile app idea?',
    details:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
  {
    question: 'Does your business need a online presence?',
    details:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
  {
    question: 'Is your site outdated and in need of a revamp?',
    details:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
  {
    question: 'Are you not getting the traction you expected?',
    details:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
]

const icons = [
  PersonIcon,
  AssessmentOutlinedIcon,
  CameraEnhanceOutlinedIcon,
  BackupIcon,
  PostAddOutlinedIcon,
  BlurOnOutlinedIcon,
]
const smCardDetails = [
  {
    title: 'Network',
    detail_0: 'Lorem ipsum ',
    detail_1: 'Lorem ipsum ',
    detail_2: 'Lorem ipsum ',
  },
  {
    title: 'Data',
    detail_0: 'Lorem ipsum ',
    detail_1: 'Lorem ipsum ',
    detail_2: 'Lorem ipsum ',
  },
  {
    title: 'Media',
    detail_0: 'Lorem ipsum ',
    detail_1: 'Lorem ipsum ',
    detail_2: 'Lorem ipsum ',
  },
  {
    title: 'Cloud',
    detail_0: 'Lorem ipsum ',
    detail_1: 'Lorem ipsum ',
    detail_2: 'Lorem ipsum ',
  },
  {
    title: 'New Content',
    detail_0: 'Lorem ipsum ',
    detail_1: 'Lorem ipsum ',
    detail_2: 'Lorem ipsum ',
  },
  {
    title: 'Computer',
    detail_0: 'Lorem ipsum ',
    detail_1: 'Lorem ipsum ',
    detail_2: 'Lorem ipsum ',
  },
]
function Questions() {
  const classes = useStyles()
  const [inProp, setInProp] = React.useState(false)

  const handleChange = () => {
    if (window.scrollY >= 2400) {
      setInProp(true)
    } else {
      setInProp(false)
    }
  }
  window.addEventListener('scroll', handleChange)

  return (
    <div className={classes.root}>
      <Grid className={classes.titleWrapper}>
        <SectionHeader
          title="Ask yourself these Q's"
          subTitle="Bring you ideas to life!"
        />
      </Grid>
      {/* First set of questions */}
      <Container maxWidth="lg">
        <Grid container direction="row" justify="center">
          {sectionOneQuestions.map((question, index) => (
            <Paper key={index} variant="outlined" className={classes.lgBoxes}>
              <Typography variant="h6" className={classes.question}>
                {question.question}
              </Typography>
              <Typography paragraph className={classes.para}>
                {question.details}
              </Typography>
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
              >
                <Link href="/" className={classes.links}>
                  Learn More
                </Link>
              </Grid>
            </Paper>
          ))}
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.btmQuestion}
        >
          <Typography variant="h6" className={classes.question}>
            If you answered <span className={classes.word}>YES</span> to any of
            these questions, then consider our services below to help you get
            started<span className={classes.word}>!!!</span>
          </Typography>
          <Typography paragraph className={classes.para}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit.
          </Typography>
        </Grid>
        {/* Smaller Service cards with Icons start here */}
        <Grid container direction="row" justify="center">
          <div className={classes.smBoxWrapper}>
            {smCardDetails.map((detail, index) => {
              const Icon = icons[index]
              return (
                <Transition in={setInProp} timeout={1000} key={index}>
                  {(state) => (
                    <Fade
                      direction="up"
                      in={inProp}
                      mountOnEnter
                      unmountOnExit
                      timeout={2800}
                    >
                      <Paper
                        className={classes.smBoxes}
                        elevation={10}
                        key={index}
                      >
                        <Typography variant="h6">
                          <Icon className={classes.icons} />
                        </Typography>
                        <Typography variant="h6">{detail.title}</Typography>

                        <Grid
                          container
                          direction="row"
                          justify="center"
                          alignItems="flex-start"
                        >
                          <Typography paragraph className={classes.para}>
                            <CheckBoxIcon className={classes.smIcon} />
                            {detail.detail_0}
                          </Typography>
                          <Typography paragraph className={classes.para}>
                            <CheckBoxIcon className={classes.smIcon} />
                            {detail.detail_1}
                          </Typography>
                          <Typography paragraph className={classes.para}>
                            <CheckBoxIcon className={classes.smIcon} />
                            {detail.detail_2}
                          </Typography>
                        </Grid>
                      </Paper>
                    </Fade>
                  )}
                </Transition>
              )
            })}
          </div>
        </Grid>
      </Container>
    </div>
  )
}

export default Questions
