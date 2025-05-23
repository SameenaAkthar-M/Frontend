import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import Middle from '../../components/middlepart/Middle'
import Colorchange from '../../components/colorchange/Colorchange'
import Showcase from '../../components/showcase/Showcase'
import Contact from '../../components/contactus/Contact'

const Home = () => {
  return (
    <div>
      <Carousel/>
      <Middle/>
      <Colorchange/>
      <Showcase/>
      <Contact/>
    </div>
  )
}

export default Home