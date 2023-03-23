import Image from 'next/image'
import React from 'react'
import about from '/public/img/about.png'

export default function About() {
  return (
    <section className='about grid grid-cols-2 gap-x-6 items-center md:text-center md:grid-cols-1'>
        <div className="about-img md:order-2">
            <Image src={about} alt='about' className='img max-w-full h-auto'/>
        </div>

        <div className="text">
            <span className='text-orange-500 font-semibold'>About Us</span>
            <h2 className='text-4xl mt-3 mr-0 mb-7'>We speak the good <br /> food language</h2>
            <p>where we offer the most delicious type of cuisine dishes in city or location! Our menu features a variety of mouth-watering options, including popular dishes or menu items.</p>
            <a href="" className='btn inline-block py-2.5 px-5 bg-orange-500 text-white rounded-lg hover:scale-125 translate-y-2.5 duration-500'>Learn More</a>
        </div>
    </section>
  )
}
