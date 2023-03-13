import React from 'react'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Service from '../components/service'
import { services } from '../data/page-data'

export default function service() {
  return (
    <>
    <Hero />
    <Service data={services}/>
    <Footer />
    </>
  )
}
