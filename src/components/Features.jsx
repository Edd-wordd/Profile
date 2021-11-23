import React from 'react'
// import SectionHeader from '../components/SectionHeader'
import { Typography, Grid, Card } from '@material-ui/core'
import { Box, CardContent, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import mainTheme from '../theme'

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: '#ffffff',
      width: '100%',
   },
   mainImg: {
      width: '600px',
      height: 'auto',
   },
   mainInfo: {
      width: '500px',
      height: 'auto',
   },
}))

function Features() {
   const classes = useStyles()

   return (
      <div className={classes.root}>
         {/* <SectionHeader
            title="Features"
            subTitle="maybe this doesnt need to be added"
         /> */}
         <Container maxWidth="xl">
            <Grid
               container
               direction="row"
               justify="space-evenly"
               alignItems="center"
            >
               <Box>
                  <img
                     src="../../public/assets/computerVector.jpg"
                     className={classes.mainImg}
                  />
               </Box>

               <Grid className={classes.mainInfo}>
                  <Typography variant="h4">How We Works!</Typography>
                  <Typography>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Velit iste officia numquam, ut cumque error necessitatibus
                     exercitationem, repellendus odit, quo voluptatem. Est
                     laudantium natus molestiae, tempora laborum repellat
                     corporis fuga?
                  </Typography>
                  <Card>
                     <CardContent>
                        <Typography variant="h6">Word of the Day</Typography>
                        <Typography variant="body2">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Ad atque dolor laudantium, deleniti labore
                           temporibus soluta?
                        </Typography>
                     </CardContent>
                  </Card>
                  <Card>
                     <CardContent>
                        <Typography variant="h6">Word of the Day</Typography>
                        <Typography variant="body2">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Ad atque dolor laudantium, deleniti labore
                           temporibus soluta?
                        </Typography>
                     </CardContent>
                  </Card>
                  <Card>
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
