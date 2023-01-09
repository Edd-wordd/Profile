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
        href={`https://images.unsplash.com/photo-1600049780189-60f39be1949f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`}
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
