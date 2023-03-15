import React from 'react'

export default function Experience() {
  return (
    <div className='mb-14'>
        <h2 className='text-sky-900 uppercase tracking-wider mb-10 font-bold text-2xl'>Experience</h2>
        <div className='flex flex-row my-5 mx-0 sm:flex-col'>
            <div className='year-company sm: min-w-150 sm: mb-1'>
                <h5 className='text-sm uppercase text-gray-600 font-bold'>2019 - Present</h5>
                <h5 className='text-sm uppercase text-gray-600 font-bold'>Company Name</h5>
            </div>
            <div>
                <h4 className='text-xl uppercase text-sky-600 font-bold'>Senior UX Designer</h4>
                <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>

        <div className='flex flex-row my-5 mx-0'>
            <div className='year-company sm: min-w-150 sm: mb-1'>
                <h5 className='text-sm uppercase text-gray-600 font-bold'>2016 - 2019</h5>
                <h5 className='text-sm uppercase text-gray-600 font-bold'>Company Name</h5>
            </div>
            <div>
                <h4 className='text-xl uppercase text-sky-600 font-bold'>UI/UX Designer</h4>
                <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>

        <div className='flex flex-row my-5 mx-0'>
            <div className='year-company sm: min-w-150 sm: mb-1'>
                <h5 className='text-sm uppercase text-gray-600 font-bold'>2014-2016</h5>
                <h5 className='text-sm uppercase text-gray-600 font-bold'>Company Name</h5>
            </div>
            <div>
                <h4 className='text-xl uppercase text-sky-600 font-bold'>Junior UX Designer</h4>
                <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </div>
  )
}
