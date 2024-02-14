import React from 'react'

// components
import Hero from '@/contents/Home/Hero'
import Section1 from './Section1'
import Cards from './Cards'
import Section2 from './Section2'
import News from './News'
import Footer from '@/components/Footer'

function HomeContents() {
  return (
    <div>
        <Hero />
        <Section1 />
        <Cards />
        <Section2 />
        <News />
        <Footer />
    </div>
  )
}

export default HomeContents