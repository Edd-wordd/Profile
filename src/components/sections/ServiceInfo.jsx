import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, Container } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import FaqServices from './FaqServices'
import { MajorSigns } from '../index'
import mainTheme from '../../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(https://images.unsplash.com/photo-1616004655123-818cbd4b3143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`,
    width: '100%',
    height: 'auto',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    padding: '20rem 0 5rem 0',
  },
  mainContent: {
    padding: '0 0 6rem 0',
    [theme.breakpoints.down('sm')]: {
      padding: '0 0 1.5rem 0',
    },
  },
  mainTitle: {
    borderBottom: '1px solid #FF8E53',
    marginBottom: theme.spacing(2),
    color: mainTheme.palette.defaultLight.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.75rem',
    },
  },
  pics: {
    minWidth: '600px',
    maxHeight: '400px',
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      minWidth: '300px',
      minHeight: '300px',
      padding: '2.5rem 0',
      borderRadius: theme.spacing(1),
    },
  },
  mainDescription: {
    width: '600px',
    height: 'auto',
    color: mainTheme.palette.defaultLight.main,
    letterSpacing: theme.spacing(0.25),
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
}))

const serviceInfo = [
  {
    path: '/services/content-writing',
    title: 'Content Writing',
    description:
      ' Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    image:
      'https://images.unsplash.com/photo-1520076794559-6a1229412a42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbnRlbnQlMjB3cml0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    majorTitle_1: 'Major Sign 1',
    majorTitle_2: 'Major Sign 2',
    majorTitle_3: 'Major Sign 3',
    majorTitle_4: 'Major Sign 4',
    majorImage:
      'https://images.unsplash.com/photo-1504691342899-4d92b50853e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGVudCUyMHdyaXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    majorInfo_1:
      ' Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorInfo_2:
      ' Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorInfo_3:
      ' Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorInfo_4:
      ' Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorSignInfo:
      ' Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    path: '/services/seo',
    title: 'SEO',
    description:
      ' SEO Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2VvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    majorTitle_1: 'Major Sign 1 SEO',
    majorTitle_2: 'Major Sign 2 SEO',
    majorTitle_3: 'Major Sign 3 SEO',
    majorTitle_4: 'Major Sign 4 SEO',
    majorImage:
      'https://images.unsplash.com/photo-1504691342899-4d92b50853e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGVudCUyMHdyaXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    majorInfo_1:
      'SEO Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorInfo_2:
      'SEO Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorInfo_3:
      'SEO Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorInfo_4:
      'SEO Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorSignInfo:
      'SEO Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    path: '/services/mobile-app',
    title: 'Mobile App Development',
    description:
      ' Mobile App Development Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image:
      'https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFwcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    majorTitle_1: 'Major Sign 1 Mobile APP',
    majorTitle_2: 'Major Sign 2 Mobile APP',
    majorTitle_3: 'Major Sign 3 Mobile APP',
    majorTitle_4: 'Major Sign 4 Mobile APP',
    majorImage:
      'https://images.unsplash.com/photo-1504691342899-4d92b50853e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGVudCUyMHdyaXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    majorInfo_1:
      'Mobile App Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorInfo_2:
      'Mobile App Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorInfo_3:
      'Mobile App Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorInfo_4:
      'Mobile App Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorSignInfo:
      'Mobile App Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    path: '/services/eCommerce',
    title: 'eCommerce Website Development',
    description:
      ' eCommerce Website Development Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image:
      'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    majorTitle_1: 'Major Sign 1 Mobile eComm',
    majorTitle_2: 'Major Sign 2 Mobile eComm',
    majorTitle_3: 'Major Sign 3 Mobile eComm',
    majorTitle_4: 'Major Sign 4 Mobile eComm',
    majorImage:
      'https://images.unsplash.com/photo-1504691342899-4d92b50853e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGVudCUyMHdyaXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    majorInfo_1:
      'eComm Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorInfo_2:
      'eComm Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorInfo_3:
      'eComm Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorInfo_4:
      'eComm Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorSignInfo:
      'eComm Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    path: '/services/web-design',
    title: 'Web Design & Development',
    description:
      ' Web Design & Development Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2VvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    majorTitle_1: 'Major Sign 1 Web Design',
    majorTitle_2: 'Major Sign 2 Web Design',
    majorTitle_3: 'Major Sign 3 Web Design',
    majorTitle_4: 'Major Sign 4 Web Design',
    majorImage:
      'https://images.unsplash.com/photo-1504691342899-4d92b50853e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGVudCUyMHdyaXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    majorInfo_1:
      'Web Design Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorInfo_2:
      'Web Design Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorInfo_3:
      'Web Design Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorInfo_4:
      'Web Design Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorSignInfo:
      'Web Design Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    path: '/services/web-maintenance',
    title: 'Website / Mobile App Maintenance',
    description:
      ' Website Maintenance Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image:
      'https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    majorTitle_1: 'Major Sign 1 Maintenance',
    majorTitle_2: 'Major Sign 2 Maintenance',
    majorTitle_3: 'Major Sign 3 Maintenance',
    majorTitle_4: 'Major Sign 4 Maintenance',
    majorImage:
      'https://images.unsplash.com/photo-1504691342899-4d92b50853e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGVudCUyMHdyaXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    majorInfo_1:
      'Maintenance Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorInfo_2:
      'Maintenance Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorInfo_3:
      'Maintenance Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorInfo_4:
      'Maintenance Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    majorSignInfo:
      'Maintenance Content Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
]

function ServiceInfo() {
  const location = window.location.pathname

  const classes = useStyles()
  return (
    <>
      {serviceInfo.map((service, index) =>
        `${location}` === `${service.path}` ? (
          <div key={index}>
            <div className={classes.root}>
              <Container maxWidth="xl">
                <Grid
                  container
                  direction="row"
                  justify="space-evenly"
                  alignItems="center"
                  className={classes.mainContent}
                >
                  <Box>
                    <img alt="image4" src={service.image} className={classes.pics} />
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
                  majorTitle_1={service.majorTitle_1}
                  majorTitle_2={service.majorTitle_2}
                  majorTitle_3={service.majorTitle_3}
                  majorTitle_4={service.majorTitle_4}
                  majorInfo_1={service.majorInfo_1}
                  majorInfo_2={service.majorInfo_2}
                  majorInfo_3={service.majorInfo_3}
                  majorInfo_4={service.majorInfo_4}
                  majorSignInfo={service.majorSignInfo}
                  majorImage={service.majorImage}
                />
              </Container>
            </div>
          </div>
        ) : null
      )}
      <FaqServices />
    </>
  )
}

export default ServiceInfo
