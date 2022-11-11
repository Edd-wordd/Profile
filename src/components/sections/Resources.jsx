import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container } from '@material-ui/core'
import mainTheme from '../../theme'
import SectionHeader from './SectionHeader'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { RWebShare } from 'react-web-share'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 450,
    height: 'auto',
    margin: '4rem 2.5rem 8rem 0rem',
    [theme.breakpoints.down('sm')]: {
      margin: '1rem 0rem',
    },
  },
  media: {
    height: 250,
  },
}))

const blogPosts = [
  {
    title: 'Why do you need SEO',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex ullam, asperiores minima delectus inventore sequi, voluptates ipsa architecto reiciendis repellendus minus est omnis cupiditate, placeat totam labore tempore earum?',
    image: 'public/assets/tim-mossholder-VOXs79vySFo-unsplash.jpg',
  },
  {
    title: 'What key words you need?',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex ullam, asperiores minima delectus inventore sequi, voluptates ipsa architecto reiciendis repellendus minus est omnis cupiditate, placeat totam labore tempore earum?',
    image: 'public/assets/tim-mossholder-VOXs79vySFo-unsplash.jpg',
  },
  {
    title: 'WordPress VS Custom Webpage',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex ullam, asperiores minima delectus inventore sequi, voluptates ipsa architecto reiciendis repellendus minus est omnis cupiditate, placeat totam labore tempore earum?',
    image: 'public/assets/tim-mossholder-VOXs79vySFo-unsplash.jpg',
  },
]
function Resources() {
  const classes = useStyles()
  return (
    <div>
      <SectionHeader title="Our Resources" subTitle="We make things happen" />

      <Container maxWidth="xl">
        <Grid container direction="row" justify="center" alignItems="center">
          {blogPosts.map((card, index) => (
            <Card className={classes.root} key={index}>
              <CardActionArea>
                <CardMedia className={classes.media} image={card.image} title="resoources" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <RWebShare
                  data={{
                    text: 'Hello World',
                    url: 'https://www.google.com',
                    title: 'Hello World',
                  }}
                  {/*onclick is only logging to console*/}
                  onClick={() => console.log('shared successfully')}
                >
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </RWebShare>
                {/*removed this button as issue #74 requested. May need to reinstate it at a later date*/}
                {/*<Button size="small" color="primary">*/}
                {/*  Learn More*/}
                {/*</Button>*/}
              </CardActions>
            </Card>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default Resources
