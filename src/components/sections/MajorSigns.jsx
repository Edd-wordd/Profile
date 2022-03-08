import React from 'react';
import { SectionHeader } from '../index'
import { Grid, Typography, Container, Paper, Hidden } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import mainTheme from "../../theme";


const useStyles = makeStyles((theme) => ({
    root:{
      padding: theme.spacing(2),
    },
    header:{
        color: mainTheme.palette.defaultLight.main,
    },
    information: {
        color: mainTheme.palette.defaultLight.main,
        padding: '2rem 10rem',
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(2),
        },
    },
    paper:{
        padding: theme.spacing(2),
        margin: theme.spacing(4),
        color: theme.palette.text.secondary,
        borderRadius: '10px',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(2),
        },
    },
    image:{
        margin: theme.spacing(.5),
        borderRadius: '10px',
        width: '400px',
        height: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
    },
    paperTitle:{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(1),
        [theme.breakpoints.down('md')]: {
            fontSize: '1.2rem',
        },
    },


}))
const MajorSigns = ()=>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <SectionHeader className={classes.header} title="Major Signs you need 'input service'" subTitle='here is what you need'/>
            <Container maxWidth='lg'>
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.information}
        >
            <Typography>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquid atque aut, ea error
                    fuga illo incidunt inventore ipsum iure iusto molestiae nihil pariatur sint suscipit totam unde
                    veniam, veritatis.

            </Typography>
        </Grid>

                <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid lg={4}>
                    <Paper className={classes.paper}>
                        <Typography variant='h5' className={classes.paperTitle}>
                         Title Name
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquid atque aut, ea error
                            fuga illo incidunt inventore ipsum iure iusto molestiae nihil pariatur sint suscipit totam unde
                            veniam, veritatis.
                        </Typography>
                    </Paper>
                        <Paper className={classes.paper}>
                            <Typography variant='h5' className={classes.paperTitle}>
                                Title Name
                            </Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquid atque aut, ea error
                                fuga illo incidunt inventore ipsum iure iusto molestiae nihil pariatur sint suscipit totam unde
                                veniam, veritatis.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Hidden mdDown>
                    <Grid lg={4}>
                    <img  className={classes.image} alt='image3' src="../../../public/assets/computerVector.jpg"/>
                    </Grid>
                    </Hidden>
                    <Grid lg={4}>
                        <Paper className={classes.paper}>
                            <Typography variant='h5' className={classes.paperTitle}>
                                Title Name
                            </Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquid atque aut, ea error
                                fuga illo incidunt inventore ipsum iure iusto molestiae nihil pariatur sint suscipit totam unde
                                veniam, veritatis.
                            </Typography>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Typography variant='h5' className={classes.paperTitle}>
                                Title Name
                            </Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquid atque aut, ea error
                                fuga illo incidunt inventore ipsum iure iusto molestiae nihil pariatur sint suscipit totam unde
                                veniam, veritatis.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

            </Container>
        </div>
    )
}

export default MajorSigns;