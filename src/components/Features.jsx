import React from 'react'
import { Typography, Grid, Card } from '@material-ui/core'
import { Box, CardContent, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import mainTheme from '../theme'

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: '#ffffff',
      width: '100%',
      padding: '3.5rem 0rem',
   },
   mainInfoWrapper: {
      width: '625px',
      height: 'auto',
   },
   mainImg: {
      width: '600px',
      height: 'auto',
   },
   paragraph: {
      padding: '1rem 0rem',
   },
   cards: {
      margin: '1rem 0rem',
      '&:hover': {
         boxShadow: `inset 0px -2px 0px 0px ${mainTheme.palette.secondary.main}`,
      },
   },
}))

function Features() {
   const classes = useStyles()

   return (
      <div className={classes.root}>
         <Container maxWidth="xl">
            <Grid
               container
               direction="row"
               justify="center"
               alignItems="center"
            >
               <Box>
                  <img
                     src="../../public/assets/computerVector.jpg"
                     className={classes.mainImg}
                  />
               </Box>

               <Grid className={classes.mainInfoWrapper}>
                  <Typography variant="h4">How We Works!</Typography>
                  <Typography className={classes.paragraph}>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Velit iste officia numquam, ut cumque error necessitatibus
                     exercitationem, repellendus odit, quo voluptatem. Est
                     laudantium natus molestiae, tempora laborum repellat
                     corporis fuga?
                  </Typography>
                  <Card className={classes.cards}>
                     <CardContent>
                        <Typography variant="h6">Word of the Day</Typography>
                        <Typography variant="body2">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Ad atque dolor laudantium, deleniti labore
                           temporibus soluta?
                        </Typography>
                     </CardContent>
                  </Card>
                  <Card className={classes.cards}>
                     <CardContent>
                        <Typography variant="h6">Word of the Day</Typography>
                        <Typography variant="body2">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Ad atque dolor laudantium, deleniti labore
                           temporibus soluta?
                        </Typography>
                     </CardContent>
                  </Card>
                  <Card className={classes.cards}>
                     <CardContent>
                        <Typography variant="h6">Word of the Day</Typography>
                        <Typography variant="body2">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Ad atque dolor laudantium, deleniti labore
                           temporibus soluta?
                        </Typography>
                     </CardContent>
                  </Card>
               </Grid>
            </Grid>
         </Container>
      </div>
   )
}

export default Features
