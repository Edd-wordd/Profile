import React from 'react'
import WhoWeAre from '../../components/sections/WhoWeAre'
import HmServices from '../../components/sections/HmServices'
import Questions from '../../components/sections/Questions'
import GetStarted from '../../components/sections/GetStarted'
import MainDisplay from '../../components/sections/MainDisplay'

function Home() {
  return (
    <div>
      <MainDisplay
        mobileViewTitle="Look to the Future..."
        mobileViewSubtitle="lets go get this"
        mainViewTitle="The future is here, and we're here to help you get there."
        mainViewSubtitle="-Helping you design the future of the web. "
        href={`https://images.unsplash.com/photo-1638444571685-3f2b2f5aa00c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80`}
        buttonOneText={'Web Development'}
        buttonLink={'/services/web-design'}
        buttonTwoText={'SEO Services'}
        buttonLink2={'/services/seo'}
      />
      <WhoWeAre />
      <HmServices />
      <Questions />
      <GetStarted />
    </div>
  )
}
export default Home
