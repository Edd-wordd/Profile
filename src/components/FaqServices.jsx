import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Container from '@material-ui/core/Container'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ComputerIcon from '@material-ui/icons/Computer'
// import classes from '*.module.css'


const useStyles = makeStyles((theme) => ({
    root: {
     
    },
    accordion:{
        width: '600px'
    }
   
  }))

// const questions =
// [
//     {
//         question: "this is one question",
//         details: 'this is the answer to the question'
//     }
// ]
    

function FaqServices() {
    const classes = useStyles()
    return (
        <div>
            <SectionHeader  title="FAQ" subTitle="Ask Away"/>
            <Container maxWidth='lg'>
                <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Typography paragraph >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veniam ipsum aliquid explicabo. 
                    Harum ipsa blanditiis eaque ducimus dolores libero corrupti eligendi debitis. Nulla delectus tempore aliquid. 
                    Beatae, blanditiis. Necessitatibus? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nemo quasi beatae, doloremque aliquam deserunt veritatis perspiciatis molestias sequi libero dolorem, natus quibusdam ex atque, sit sapiente odit quidem eum autem.
                </Typography>
                </Grid>
                <Grid container direction='row' justify='space-evenly' alignItems='center'>
                    <Grid>
                    <Accordion className={classes.accordion}>
                        <AccordionSummary  expandIcon={<ComputerIcon/>}>
                            <Typography>This is the first question</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                This is in the details
                            </Typography>
                        </AccordionDetails>
                    </Accordion> <Accordion>
                        <AccordionSummary  expandIcon={<ComputerIcon/>}>
                            <Typography>This is the first question</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                This is in the details
                            </Typography>
                        </AccordionDetails>
                    </Accordion> <Accordion>
                        <AccordionSummary  expandIcon={<ComputerIcon/>}>
                            <Typography>This is the first question</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                This is in the details
                            </Typography>
                        </AccordionDetails>
                    </Accordion> <Accordion>
                        <AccordionSummary  expandIcon={<ComputerIcon/>}>
                            <Typography>This is the first question</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                This is in the details
                            </Typography>
                        </AccordionDetails>
                    </Accordion> <Accordion>
                        <AccordionSummary  expandIcon={<ComputerIcon/>}>
                            <Typography>This is the first question</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                This is in the details
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    </Grid>
                    <Grid>
                    <Accordion className={classes.accordion}>
                        <AccordionSummary  expandIcon={<ComputerIcon/>}>
                            <Typography>This is the first question</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                This is in the details
                            </Typography>
                        </AccordionDetails>
                    </Accordion>       <Accordion>
                        <AccordionSummary  expandIcon={<ComputerIcon/>}>
                            <Typography>This is the first question</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                This is in the details
                            </Typography>
                        </AccordionDetails>
                    </Accordion>       <Accordion>
                        <AccordionSummary  expandIcon={<ComputerIcon/>}>
                            <Typography>This is the first question</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                This is in the details
                            </Typography>
                        </AccordionDetails>
                    </Accordion>       <Accordion>
                        <AccordionSummary  expandIcon={<ComputerIcon/>}>
                            <Typography>This is the first question</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                This is in the details
                            </Typography>
                        </AccordionDetails>
                    </Accordion>       <Accordion>
                        <AccordionSummary  expandIcon={<ComputerIcon/>}>
                            <Typography>This is the first question</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                This is in the details
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    </Grid>
                </Grid>
            </Container>
            
        </div>
    )
}

export default FaqServices
