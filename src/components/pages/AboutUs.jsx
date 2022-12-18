import React from 'react'
import { MainDisplay, MissionStatement, TechUsed, GetInTouch, WhatWeDo, WhoWeAre } from '../index'

function AboutUs() {
  return (
    <>
      <MainDisplay
        mobileViewTitle="The story of us!"
        mobileViewSubtitle="lets go get this"
        mainViewTitle="A guaranteed method to building your business!"
        mainViewSubtitle="-Letting you focus on what you do best"
        href={`https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80`}
        btnOneText="Hello"
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
