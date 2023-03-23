import Image from 'next/image'
import React from 'react'
import home from '/public/img/home.png'

export default function Section() {
  return (
    <section className='home w-full grid grid-cols-2 gap-x-6 items-center lg:py-5 lg:px-8 md:grid-cols-1 md:text-center sm:text-center'>
      <div className="text">
        <h1 className='text-7xl text-orange-500 font-bold'>Full Website</h1>
        <h2 className='text-4xl mt-4 mr-0 mb-8'>Food The <br /> Most Precious Things</h2>
        <a href="" className='btn inline-block py-2.5 px-5 bg-orange-500 text-white rounded-lg hover:scale-125 translate-y-2.5 duration-500'>Today's Menu</a>
      </div>

      <div className="home-img">
        <Image  src={home} alt='home' className='img max-w-full h-auto'/>
      </div>
    </section>
  )
}
