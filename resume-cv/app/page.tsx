'use client';
import { Inter, Poppins } from 'next/font/google'
import Profile from './components/profile';
import ContactInfo from './components/contact';
import Education from './components/education';
import Language from './components/language';
import About from './components/about';
import Experience from './components/experience';
import Skills from './components/skills';
import Interest from './components/interest';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
   <div className='container'>
    <div className='left-side'>
      <Profile />
      <ContactInfo />
      <Education />
      <Language />
    </div>

    <div className='right-side'>
      <About />
      <Experience />
      <Skills />
      <Interest />
    </div>
   </div>
  )
}
