import React from 'react'
import WhoWeAre from '../components/WhoWeAre'
import HmServices from '../components/HmServices'
import Questions from '../components/Questions'
import Footer from '../components/Footer'
import GetStarted from '../components/GetStarted'
import MainDisplay from '../components/MainDisplay'
import Resources from '../components/Resources'

function Home() {
  return (
    <div>
      <MainDisplay
        mobileViewTitle="Look to the Future..."
        mobileViewSubtitle="lets go get this"
        mainViewTitle="Look to the Future..."
        mainViewSubtitle="lets go baby!!!"
        href={`https://images.unsplash.com/photo-1508361727343-ca787442dcd7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=$%7BimageWidth%7D&q=80`}
      />
      <WhoWeAre />
      <HmServices />
      <Questions />
      <Resources />
      <GetStarted />
      <Footer />
    </div>
  )
}
export default Home
