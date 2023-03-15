import Image from 'next/image'
import React from 'react'

export default function Profile() {
  return (
    <div className='relative flex flex-col items-center pb-5 border-b-1 border-solid border-grey '>
        <div className='relative w-50 h-50 rounded-50 bg-white overflow-hidden'>
            <img src="/profile.jpg" alt=""  className='absolute top-0 left-0 w-full h-full object-cover'/>
        </div>
        <h2 className='text-white text-2xl mt-5 uppercase text-center font-semibold'>Fatima Shahzad <br /> <span className='text-base font-light'>Web Developer</span></h2>
    </div>
  )
}
