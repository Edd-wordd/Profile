import React, { Suspense, lazy } from 'react'
import { Box, Typography, Grid, Container } from '@mui/material'
import Spinner from '../spinners/Spinner'
import { useStyles } from '../styles/sections/ServiceInfo.styles'
import serviceSectionDetails from '../../data/serviceInfoData'

const MajorSigns = lazy(() => import('./MajorSigns'))
const FaqServices = lazy(() => import('./FaqServices'))

function ServiceInfo(props) {
  const classes = useStyles(props)
  const location = window.location.pathname

  return (
    <Suspense fallback={<Spinner />}>
      <div>
        {serviceSectionDetails.map((service, index) =>
          `${location}` === `${service.path}` ? (
            <div key={index}>
              <div className={classes.root}>
                <Container maxWidth="xl">
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    className={classes.mainContent}
                  >
                    <Box>
                      <img
                        loading="lazy"
                        alt={service.title}
                        src={service.image}
                        className={classes.pics}
                      />
                    </Box>
                    <Grid>
                      <Typography variant="h4" className={classes.mainTitle}>
                        {window.location.pathname === `${service.path}` ? `${service.title}` : null}
                      </Typography>
                      <Typography paragraph className={classes.mainDescription}>
                        {service.description}
                      </Typography>
                    </Grid>
                  </Grid>
                  <MajorSigns
                    title={service.title}
                    majorSignInfo={service.majorSignInfo}
                    majorTitle_1={service.majorTitle_1}
                    majorTitle_2={service.majorTitle_2}
                    majorTitle_3={service.majorTitle_3}
                    majorTitle_4={service.majorTitle_4}
                    majorInfo_1={service.majorInfo_1}
                    majorInfo_2={service.majorInfo_2}
                    majorInfo_3={service.majorInfo_3}
                    majorInfo_4={service.majorInfo_4}
                    majorImage={service.majorImage}
                  />
                </Container>
              </div>
            </div>
          ) : null
        )}
        <FaqServices />
      </div>
    </Suspense>
  )
}

export default ServiceInfo
