import React from 'react'
import { WhoWeAre, HmServices, Questions, GetStarted, MainDisplay, Resources } from '../index'

function Home() {
  return (
    <div>
      <MainDisplay
        mobileViewTitle="Look..."
        mobileViewSubtitle="lets go get this"
        mainViewTitle="Look to the Future..."
        mainViewSubtitle="lets go baby!!!"
        href={`https://images.unsplash.com/photo-1508361727343-ca787442dcd7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=$%7BimageWidth%7D&q=80`}
        buttonOneText={'Web Development'}
        buttonLink={'/services/web-design'}
        buttonTwoText={'SEO Services'}
        buttonLink2={'/services/seo'}
      />
      <WhoWeAre />
      <HmServices />
      <Questions />
      <Resources />
      <GetStarted />
    </div>
  )
}
export default Home
