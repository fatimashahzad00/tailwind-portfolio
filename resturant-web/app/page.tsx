'use client';
import About from '@/components/About'
import CallToAction from '@/components/CTA'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Menu from '@/components/Menu'
import Section from '@/components/Section'
import Services from '@/components/Services'
import React from 'react'

export default function Home() {
  return (
    <>
    <Header />
    <Section />
    <About />
    <Menu />
    <Services />
    <CallToAction />
    <Footer />
    </>
  )
}
