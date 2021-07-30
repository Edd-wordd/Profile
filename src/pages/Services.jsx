import React from 'react'
import Footer from '../components/Footer'
import ServicesOffered from '../components/ServicesOffered'
import ServicesMain from '../components/ServicesMain'
import TechUsed from '../components/TechUsed'
import GetStarted from '../components/GetStarted'
import MainDisplay from '../components/MainDisplay'

function Services() {
  return (
    <>
      <MainDisplay
        mobileViewTitle="What you need to grow online!"
        mobileViewSubtitle="lets go get this"
        mainViewTitle="what you need to grow online!"
        mainViewSubtitle="lets go get"
        href={`https://images.unsplash.com/photo-1586077427825-15dca6b44dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60`}
      />
      <ServicesMain />
      <ServicesOffered />
      <TechUsed />
      <GetStarted />
      <Footer />
    </>
  )
}

export default Services
