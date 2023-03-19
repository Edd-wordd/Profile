import React from 'react'
import { Card, Grid, Container, CardActionArea, Typography } from '@material-ui/core'
import { CardActions, CardContent, CardMedia, Button } from '@material-ui/core'
import { RWebShare } from 'react-web-share'
import { useStyles } from '../styles/sections/Resources.styles'
import { SectionHeader } from '../index'

const blogPosts = [
  {
    title: 'Why do you need SEO?',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex ullam, asperiores minima delectus inventore sequi, voluptates ipsa architecto reiciendis repellendus minus est omnis cupiditate, placeat totam labore tempore earum?',
    image: `https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`,
    link: 'https://www.drop.com',
  },
  {
    title: 'What is web3?',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex ullam, asperiores minima delectus inventore sequi, voluptates ipsa architecto reiciendis repellendus minus est omnis cupiditate, placeat totam labore tempore earum?',
    image:
      'https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
    link: 'https://www.eddwordd.com',
  },
  {
    title: 'WordPress VS Custom Website',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex ullam, asperiores minima delectus inventore sequi, voluptates ipsa architecto reiciendis repellendus minus est omnis cupiditate, placeat totam labore tempore earum?',
    image:
      'https://images.unsplash.com/photo-1532186773960-85649e5cb70b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
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
                <CardMedia className={classes.media} image={card.image} title="resources" />
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
