import React from 'react'
import Hero from '../components/hero'
import About from '../components/about'
import { aboutme } from '../data/page-data'
import Footer from '../components/footer'

export default function Aboutme() {
  return (
    <>
    <Hero />
    <About data={aboutme} />
    <Footer />
    </>
  )
}
