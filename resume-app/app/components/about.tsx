import Image from 'next/image'
import React from 'react'
// import about from './public/about.jpg'

export default function About({data}: any) {
    const { about } = data;
  return (
   <section className='about'>
     <div className='main'>
        <Image src='/profile.jpg' alt='my-image' width={100} height={100} className='h-auto  w-100 opacity-70'/>
        <div className='about-text'>
            <h2 className='text-white text-7.5xl capitalize mb-5'>About Me</h2>
            <h5 className='text-white tracking-2 text-1xl mb-6.5 capitalize'>Front-End Web Developer <span className='text-rose-600	'> & Designer </span></h5>
            <p className='text-purple-200 tracking-1 leading-7 text-lg mb-11'>{about}</p>
            <button type='button' className="bg-rose-600 text-white no-underline border-2 border-solid border-transparent font-bold py-3.5 px-7.5 duration-400 rounded-full hover:bg-transparent hover:border-2 hover:border-solid hover:border-rose-600 hover:cursor-pointer">Let's Talk</button>
        </div>
        </div>
   </section>
  )
}
