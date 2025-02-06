import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Features from '../components/Features'
import ProjectHighlights from '../components/Project'
import ServicesSection from '../components/Service'


const Main = () => {
  return (
    <main>
      <HeroSection />
      <About />
      <Features />
      <ProjectHighlights />
      <ServicesSection />
    </main>
  )
}

export default Main
