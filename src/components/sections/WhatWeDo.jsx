import React from 'react'
import { Typography, Grid, Paper, Box } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import SectionHeader from './SectionHeader'
import { useStyles } from '../styles/sections/WhatWeDo.styles'
import bulletPoints from '../../data/whatWeDoData'

function WhatWeDo(props) {
  const classes = useStyles(props)

  return (
    <>
      <SectionHeader title="Our Strategy" subTitle="Discover the Distinction in Our Methodology" />
      <Grid
        className={classes.root}
        item
        lg={12}
        md={10}
        sm={12}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Paper elevation={0} className={classes.leftSideInfoWrapper}>
          <Typography
            variant="subtitle1"
            component="h2"
            sx={{ fontWeight: 'bold', paddingBottom: '1rem', fontSize: '18px' }}
          >
            Unmatched Precision in Bespoke Software Development
          </Typography>
          <Typography paragraph sx={{ lineHeight: '2rem' }}>
            At monaTech, client satisfaction is our top priority, which is why we deliver customized
            solutions that are both efficient and effective. Our dedication to detail and staying
            current with the latest technologies enables us to provide software applications that
            are scalable, secure, and ready for the future. This commitment has positioned us as
            industry leaders, delivering dependable and secure applications that address the
            distinct needs and objectives of our clients.
          </Typography>
        </Paper>
        <Paper elevation={0} className={classes.coreValueSection}>
          {bulletPoints.map((value) => (
            <Grid container alignItems="center" key={value.id}>
              <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}>
                <CheckCircleIcon className={classes.icons} />
              </Box>
              <Typography variant="body1" className={classes.coreValue} component="span">
                {value.bulletPoint}
              </Typography>
            </Grid>
          ))}
        </Paper>
        <Grid className={classes.bottomInfoWrapper} item lg={8} md={8} sm={10}>
          <Typography
            className={classes.bottomInfo}
            sx={{ paddingBottom: '4rem', lineHeight: '2rem' }}
          >
            At monaTech, we are dedicated to offering bespoke software development solutions
            tailored to the specific needs and goals of our clients. Our team of experts utilizes
            cutting-edge technologies to build scalable, secure, and future-proof applications that
            meet the highest industry standards. We foster a culture of creativity, collaboration,
            and innovation to remain at the forefront of technological advancements, ensuring
            projects are completed on time and within budget without sacrificing quality. Get in
            touch with us today to experience the difference for yourself.
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default WhatWeDo
