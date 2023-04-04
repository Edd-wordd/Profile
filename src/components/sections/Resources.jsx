import React from 'react'
import { Card, Grid, Container, CardActionArea, Typography } from '@mui/material'
import { CardActions, CardContent, CardMedia, Button } from '@mui/material'
import { RWebShare } from 'react-web-share'
import { useStyles } from '../styles/sections/Resources.styles'
import SectionHeader from '../../components/sections/SectionHeader'
import blogPosts from '../../data/resourceData'

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
                <CardMedia
                  className={classes.media}
                  image={card.image}
                  title="resources"
                  loading="lazy"
                />
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
