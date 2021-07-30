import React from 'react'
import Footer from '../components/Footer'
import WhoWeAre from '../components/WhoWeAre'
import MainDisplay from '../components/MainDisplay'
import MissionStatement from '../components/MissionStatement'
import TechUsed from '../components/TechUsed'
import GetInTouch from '../components/GetInTouch'
import WhatWeDo from '../components/WhatWeDo'

function AboutUs() {
  return (
    <>
      <MainDisplay
        mobileViewTitle="The story of us!"
        mobileViewSubtitle="lets go get this"
        mainViewTitle="The story of us!"
        mainViewSubtitle="lets go get this bitches"
        href={`https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80`}
      />

      <WhoWeAre />
      <MissionStatement />
      <WhatWeDo />
      <TechUsed />
      <GetInTouch />
      <Footer />
    </>
  )
}

export default AboutUs
