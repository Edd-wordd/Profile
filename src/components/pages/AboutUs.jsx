import React from 'react'
import { MainDisplay, MissionStatement, TechUsed, GetInTouch, WhatWeDo, WhoWeAre } from '../index'

function AboutUs() {
  return (
    <>
      <MainDisplay
        mobileViewTitle="The story of us!"
        mobileViewSubtitle="lets go get this"
        mainViewTitle="The story of us!"
        mainViewSubtitle="lets go get this bitches"
        href={`https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80`}
        buttonOneText={'FAQ'}
        buttonLink={'/FAQ'}
        buttonTwoText={'Our Clients'}
        buttonLink2={'/portfolio'}
      />

      <WhoWeAre />
      <MissionStatement />
      <WhatWeDo />
      <TechUsed />
      <GetInTouch />
    </>
  )
}

export default AboutUs
