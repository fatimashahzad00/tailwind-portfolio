import React from 'react'

export default function Language() {
  return (
    <div className='pt-10'>
        <h3 className='text-white uppercase font-bold tracking-wider mb-5'>Languages</h3>
        <ul>
            <li className='mb-2'>
                <span className='text-white font-medium'>English</span>
                <span className='relative w-full h-2 bg-gray-900 block mt-1'>
                    <div className='w-7/12 absolute top-0 left-0 h-full bg-blue-400 '></div>
                </span>
            </li>
            <li className='mb-2'>
                <span className='text-white font-medium'>Urdu</span>
                <span className='relative w-full h-2 bg-gray-900 block mt-1'>
                    <div className='w-11/12 absolute top-0 left-0 h-full bg-blue-400 '></div>
                </span>
            </li>
            <li className='mb-2'>
                <span className='text-white font-medium'>Arabic</span>
                <span className='relative w-full h-2 bg-gray-900 block mt-1'>
                    <div className='w-4/12 absolute top-0 left-0 h-full bg-blue-400 '></div>
                </span>
            </li>
        </ul>
    </div>
  )
}
