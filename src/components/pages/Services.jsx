import React from 'react'
import ServicesOffered from '../../components/sections/ServicesOffered'
import ServicesMain from '../../components/sections/ServicesMain'
import TechUsed from '../../components/sections/TechUsed'
import GetStarted from '../../components/sections/GetStarted'
import MainDisplay from '../../components/sections/MainDisplay'

function Services() {
  return (
    <>
      <MainDisplay
        mobileViewTitle="What you need to grow online!"
        mobileViewSubtitle="lets go get this"
        mainViewTitle="what you need to grow online!"
        mainViewSubtitle="lets go get"
        href={`https://images.unsplash.com/photo-1601132359864-c974e79890ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80`}
      />
      <ServicesMain />
      <ServicesOffered />
      <TechUsed />
      <GetStarted />
    </>
  )
}

export default Services
