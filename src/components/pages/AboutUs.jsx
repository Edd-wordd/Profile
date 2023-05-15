import React, { Suspense, lazy } from 'react'
import Spinner from '../../components/spinners/Spinner'
import MainDisplay from '../../components/sections/MainDisplay'

const MissionStatement = lazy(() => import('../../components/sections/MissionStatement'))
const WhatWeDo = lazy(() => import('../../components/sections/WhatWeDo'))

function AboutUs() {
  return (
    <>
      <MainDisplay
        mobileViewTitle="Our Unique Journey Together"
        mobileViewSubtitle="Achieving Success Together"
        mainViewTitle="Proven Strategies for Business Growth"
        mainViewSubtitle="Empowering You to Excel in Your Expertise"
        href={`https://images.unsplash.com/photo-1600049780189-60f39be1949f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`}
        alt="Image of business people building a company"
      />
      <Suspense fallback={<Spinner />}>
        <WhatWeDo />
        <MissionStatement />
      </Suspense>
    </>
  )
}

export default AboutUs
