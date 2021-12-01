import React from 'react'
import { Typography, Grid, Card } from '@material-ui/core'
import { Box, CardContent, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import mainTheme from '../theme'
import MultilineChartIcon from '@material-ui/icons/MultilineChart'
import GroupAddIcon from '@material-ui/icons/GroupAdd'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

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
      boxShadow:  `2px 2px 20px ${mainTheme.palette.primary_300.main}`,
      margin: '1rem 0rem',
      padding: theme.spacing(1),
      '&:hover': {
         boxShadow: `inset 0px -2px 0px 0px ${mainTheme.palette.secondary.main}`,
      },
   },
   icon: {
      width: '100px',
      height: 'auto',
   },
   cardWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
   },

   cardInfo: {
      padding: '.5rem 0rem 0rem 1rem',
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
                     <CardContent className={classes.cardWrapper}>
                        <GroupAddIcon className={classes.icon} />

                        <Grid className={classes.cardInfo}>
                           <Typography variant="h6">Word of the Day</Typography>
                           <Typography variant="body2">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Ad atque dolor laudantium, deleniti labore
                              temporibus soluta?
                           </Typography>
                        </Grid>
                     </CardContent>
                  </Card>
                  <Card className={classes.cards}>
                     <CardContent className={classes.cardWrapper}>
                        <MultilineChartIcon className={classes.icon} />

                        <Grid className={classes.cardInfo}>
                           <Typography variant="h6">Word of the Day</Typography>
                           <Typography variant="body2">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Ad atque dolor laudantium, deleniti labore
                              temporibus soluta?
                           </Typography>
                        </Grid>
                     </CardContent>
                  </Card>
                  <Card className={classes.cards}>
                     <CardContent className={classes.cardWrapper}>
                        <ShoppingCartIcon className={classes.icon} />

                        <Grid className={classes.cardInfo}>
                           <Typography variant="h6">Word of the Day</Typography>
                           <Typography variant="body2">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Ad atque dolor laudantium, deleniti labore
                              temporibus soluta?
                           </Typography>
                        </Grid>
                     </CardContent>
                  </Card>
               </Grid>
            </Grid>
         </Container>
      </div>
   )
}

export default Features
