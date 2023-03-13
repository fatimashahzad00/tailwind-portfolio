'use client';
import { Inter } from 'next/font/google'
import About from './components/about'
import ContactMe from './components/contactme';
import Footer from './components/footer';
import Hero from './components/hero'
import Service from './components/service';
import { aboutme, services } from './data/page-data';

export default function Home() {
  return (
    <>
    <div className='hero'>
    <Hero />
           <div className='content'>
            <h4 className='text-purple-300 tracking-2 text-xl '>Hello, my name is </h4>
            <h1 className='text-white mt-5 mr-0 mb-5 text-7xl'>Fatima Shahzad</h1>
            <h3 className='text-white text-2xl mb-12'>I am a Front-End Web Developer</h3>
            <div className='newsletter'>
              <form className='w-380 max-w-full relative'>
                <input type='email' name='email' id='email' placeholder='Enter your Email' className='firstChild'/>
                <input type='submit' name='submit' value='Lets Start' className='lastChild'/>
              </form>
            </div>
            </div> 
    </div>
    <About data={aboutme}/>
    <Service data={services}/>
    <ContactMe />
    <Footer />
    </>
  )
}
