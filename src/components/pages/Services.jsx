import React from 'react'
import ServicesOffered from '../../components/sections/ServicesOffered'
import ServicesMain from '../../components/sections/ServicesMain'
import GetStarted from '../../components/sections/GetStarted'
import MainDisplay from '../../components/sections/MainDisplay'

function Services() {
  return (
    <>
      <MainDisplay
        mobileViewTitle="Empower Your Online Presence"
        mobileViewSubtitle="Achieve digital success"
        mainViewTitle="Empower Your Online Presence"
        mainViewSubtitle="Achieve digital success"
        href="https://images.unsplash.com/photo-1601132359864-c974e79890ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      />
      <ServicesMain />
      <ServicesOffered />
      <GetStarted />
    </>
  )
}

export default Services
