import React from 'react'
import { Box, Typography, Grid, Container } from '@material-ui/core'
import { MajorSigns, FaqServices } from '../index'
import { useStyles } from '../styles/sections/ServiceInfo.styles'

const serviceInfo = [
  {
    path: '/services/content-writing',
    title: 'Content Writing',
    description:
      ' One Writing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    image:
      'https://images.unsplash.com/photo-1648348329481-93f85519a868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    majorTitle_1: 'Content Writing 1',
    majorTitle_2: 'Content Writing 2',
    majorTitle_3: 'Content Writing 3',
    majorTitle_4: 'Content Writing 4',
    majorImage:
      'https://images.unsplash.com/photo-1611697690865-52d89f47ec02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
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
      'At monaTech, we offer comprehensive SEO (Search Engine Optimization) services to help our clients increase their online visibility, drive traffic to their website, and generate more leads and sales. Our team of SEO experts is well-versed in the latest techniques and best practices for optimizing websites and content for search engines.\n' +
      '\n' +
      "Our SEO services begin with a thorough analysis of our clients' websites, including technical aspects such as site speed, mobile-friendliness, and crawlability, as well as content and keyword research to identify areas for improvement. We then develop a customized SEO strategy that includes on-page optimization, off-page optimization, and ongoing monitoring and reporting.\n" +
      '\n' +
      "Our on-page optimization services include optimizing website structure, meta tags, headings, and content to ensure maximum relevancy and keyword density. We also provide content recommendations and optimization to ensure that our clients' websites provide valuable and engaging content that resonates with their target audience.\n" +
      '\n' +
      'Off-page optimization includes building high-quality backlinks from relevant and authoritative sources, as well as local search optimization for clients with physical locations. We also offer ongoing monitoring and reporting to track the effectiveness of our SEO strategies and make adjustments as needed to ensure continued success.\n' +
      '\n' +
      "At our web/software company, we are committed to delivering results-driven SEO services that help our clients achieve their business goals. Whether it's increasing website traffic, generating more leads and sales, or improving online visibility, we have the expertise and experience to help our clients succeed in the competitive online landscape.",
    image:
      'https://images.unsplash.com/photo-1651559111403-3a0ecfb93c09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    majorTitle_1: 'SEO 1',
    majorTitle_2: 'SEO 2',
    majorTitle_3: 'SEO 3',
    majorTitle_4: 'SEO 4',
    majorImage:
      'https://images.unsplash.com/photo-1641495623850-1f32a5da2dd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
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
      'https://images.unsplash.com/photo-1645929148848-b4ad7c145585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    majorTitle_1: 'Mobile Application 1',
    majorTitle_2: 'Mobile Application 2',
    majorTitle_3: 'Mobile Application 3',
    majorTitle_4: 'Mobile Application 4',
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
      'https://images.unsplash.com/photo-1649984302689-19617ea0620e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    majorTitle_1: 'eCommerce 1',
    majorTitle_2: 'eCommerce 2',
    majorTitle_3: 'eCommerce 3',
    majorTitle_4: 'eCommerce 4',
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
      'https://images.unsplash.com/photo-1647021038407-fca3bfd3bf0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    majorTitle_1: 'Web Design 1',
    majorTitle_2: 'Web Design 2',
    majorTitle_3: 'Web Design 3',
    majorTitle_4: 'Web Design 4',
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
      'https://images.unsplash.com/photo-1659835347242-97835d671db7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    majorTitle_1: 'Maintenance 1',
    majorTitle_2: 'Maintenance 2',
    majorTitle_3: 'Maintenance 3',
    majorTitle_4: 'Maintenance 4',
    majorImage:
      'https://images.unsplash.com/photo-1531756346973-7b893b8dbbdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
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

function ServiceInfo(props) {
  const classes = useStyles(props)
  const location = window.location.pathname

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
                    <img loading="lazy" alt="image4" src={service.image} className={classes.pics} />
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
    </>
  )
}

export default ServiceInfo
