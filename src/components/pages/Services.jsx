import React, { Suspense, lazy } from 'react'
import MainDisplay from '../../components/sections/MainDisplay'
import Spinner from '../../components/spinners/Spinner'

const ServicesMain = lazy(() => import('../../components/sections/ServicesMain'))
const ServicesOffered = lazy(() => import('../../components/sections/ServicesOffered'))
const GetStarted = lazy(() => import('../../components/sections/GetStarted'))

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
      <Suspense fallback={<Spinner />}>
        <ServicesMain />
        <ServicesOffered />
        <GetStarted />
      </Suspense>
    </>
  )
}

export default Services
