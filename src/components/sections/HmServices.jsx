import React from 'react'
import { Grid, Typography, Paper, Hidden } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import ComputerIcon from '@material-ui/icons/Computer'
import { SectionHeader } from '../index'
import { Transition } from 'react-transition-group'
import Slide from '@material-ui/core/Slide'
import DescriptionIcon from '@material-ui/icons/Description'
import GroupAddIcon from '@material-ui/icons/GroupAdd'
import MultilineChartIcon from '@material-ui/icons/MultilineChart'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { useStyles } from '../styles/sections/HmServices.styles'

const icons = [
  MultilineChartIcon,
  ComputerIcon,
  DescriptionIcon,
  PhoneIphoneIcon,
  ShoppingCartIcon,
  GroupAddIcon,
]

const serviceCardsOne = [
  {
    id: 2000,
    serviceTitle: 'SEO',
    serviceDetail:
      'Our SEO service includes comprehensive keyword research, on-page optimization, link building, and regular monitoring to improve website ranking and drive more organic traffic to your website, ultimately increasing your online visibility and ROI. We use the latest tools and techniques to ensure that your website is optimized for search engines and meets the best practices and guidelines of SEO.',
  },
  {
    id: 2001,
    serviceTitle: 'Website Development',
    serviceDetail:
      'Our web development service combines sleek design with seamless functionality, creating a custom-tailored online experience that reflects your unique brand and meets your business needs. Let us bring your vision to life and elevate your online presence to the next level.',
  },
  {
    id: 2002,
    serviceTitle: 'Content Writing',
    serviceDetail:
      "Our content writing service, powered by cutting-edge algorithms and human expertise, delivers bespoke content tailored to your brand's tone and voice, ensuring your website remains engaging and relevant to your target audience. Let our team of skilled writers craft persuasive and SEO-friendly content, optimized to drive traffic and increase conversions.",
  },
  {
    id: 2003,
    serviceTitle: 'Mobile App Development',
    serviceDetail:
      "Our mobile app development service, where we turn your ideas into beautifully crafted, feature-rich applications that seamlessly integrate with your business. From concept to launch, our team of expert developers will bring your vision to life and provide ongoing support to ensure your app's success.",
  },
  {
    id: 2004,
    serviceTitle: 'eCommerce Development',
    serviceDetail:
      "Our eCommerce development service is like a digital toolbox that helps your business build, customize, and launch your very own online store. Our team of experts will guide you through the process, from selecting the right platform and designing the perfect storefront, to implementing secure payment systems and optimizing for search engines. With our solution, you'll be able to connect with customers across the world and sell your products with ease.",
  },
  {
    id: 2005,
    serviceTitle: 'Maintenance & Support',
    serviceDetail:
      'Our web and app maintenance and support service, designed to keep your digital presence operating at peak performance. Our team of expert developers and technicians are on standby 24/7 to handle any technical issues, updates or fixes that your website or app may need. With our proactive monitoring and preventative measures, you can rest assured that your online business will run smoothly and efficiently, leaving you free to focus on what really matters - growing your brand.',
  },
]

function HmServices(props) {
  const classes = useStyles(props)
  const [inProp, setInProp] = React.useState(false)
  const servicesSlide = (entries, observer) => {
    const [entry] = entries
    // guard clause
    if (!entry.isIntersecting) return
    if (entry.isIntersecting) {
      setInProp(true)
      observer.unobserve(entry.target)
    }
  }
  const servicesObserver = new IntersectionObserver(servicesSlide, {
    root: null,
    threshold: 0.2,
  })

  React.useEffect(() => {
    const target = document.querySelector('#services')
    servicesObserver.observe(target)
    return () => {
      servicesObserver.unobserve(target)
    }
  }, [])

  return (
    <div className={classes.root} id="services">
      <Container maxWidth="xl">
        {/* Section title only shows on mobile */}
        <Hidden smUp>
          <SectionHeader title="Our Services" subTitle="Let us Help build the Future!" />
        </Hidden>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.cardWrapper}
        >
          <Hidden xsDown>
            <Grid container direction="row" justify="center" className={classes.sectionTitle}>
              <SectionHeader title="Our Services" subTitle="Let us Help build the Future!" />
            </Grid>
          </Hidden>
          {serviceCardsOne.map((service, index) => {
            const Icon = icons[index]
            return (
              <Transition in={setInProp} timeout={1000} key={service.id}>
                {() => (
                  <Slide
                    direction={index >= 0 && index <= 2 ? 'right' : 'left'}
                    in={inProp}
                    mountOnEnter
                    unmountOnExit
                    timeout={3000}
                  >
                    <Paper elevation={10} id={`card_${index}`} className={classes.cards}>
                      <Icon className={classes.icons} />
                      <Typography variant="h5" className={classes.cardTitle}>
                        {service.serviceTitle}
                      </Typography>
                      <Typography paragraph>{service.serviceDetail}</Typography>
                    </Paper>
                  </Slide>
                )}
              </Transition>
            )
          })}
        </Grid>
      </Container>
    </div>
  )
}

export default HmServices
