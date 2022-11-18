import React, { useState } from 'react'
import { Card, Grid, Container, CardActionArea, Typography } from '@material-ui/core'
import { CardActions, CardContent, CardMedia, Button } from '@material-ui/core'
import { RWebShare } from 'react-web-share'
import { useStyles } from '../styles/sections/Resources.styles'
import { SectionHeader } from '../index'

const blogPosts = [
  {
    title: 'Why do you need SEO',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex ullam, asperiores minima delectus inventore sequi, voluptates ipsa architecto reiciendis repellendus minus est omnis cupiditate, placeat totam labore tempore earum?',
    image: 'public/assets/tim-mossholder-VOXs79vySFo-unsplash.jpg',
    link: 'https://www.drop.com',
  },
  {
    title: 'What key words you need?',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex ullam, asperiores minima delectus inventore sequi, voluptates ipsa architecto reiciendis repellendus minus est omnis cupiditate, placeat totam labore tempore earum?',
    image: 'public/assets/tim-mossholder-VOXs79vySFo-unsplash.jpg',
    link: 'https://www.eddwordd.com',
  },
  {
    title: 'WordPress VS Custom Webpage',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex ullam, asperiores minima delectus inventore sequi, voluptates ipsa architecto reiciendis repellendus minus est omnis cupiditate, placeat totam labore tempore earum?',
    image: 'public/assets/tim-mossholder-VOXs79vySFo-unsplash.jpg',
    link: 'https://www.linkedin.com',
  },
]
function Resources(props) {
  const classes = useStyles(props)
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
                    text: card.description,
                    url: card.link,
                    title: card.title,
                  }}
                  onClick={() => console.log('shared successfully')}
                >
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </RWebShare>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default Resources
