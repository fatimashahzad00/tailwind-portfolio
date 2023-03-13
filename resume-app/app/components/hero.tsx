import React from 'react'

export default function Hero() {
    return (
       
        <nav className='flex items-center justify-between py-6 pl-left-8% pr-right-8% bg-black '>
        <h2 className='logo'>Portfo<span className='text-rose-600	'>lio</span></h2>
        <ul>
            <li className='list-none  inline-block py-2.5 px-6'>
                <a href="/" className='text-white no-underline font-bold capitalize hover:text-rose-600 hover:duration-400'>Home</a></li>

            <li className='list-none  inline-block py-2.5 px-6	'>
                <a href="/aboutme" className='text-white no-underline font-bold capitalize hover:text-rose-600 hover:duration-400'>About Me</a></li>

            <li className='list-none  inline-block py-2.5 px-6'>
                <a href="/servicess" className='text-white no-underline font-bold capitalize hover:text-rose-600 hover:duration-400'>Services</a></li>

            <li className='list-none  inline-block py-2.5 px-6'>
                <a href="/" className='text-white no-underline font-bold capitalize hover:text-rose-600 hover:duration-400'>Skills</a></li>

            <li className='list-none  inline-block py-2.5 px-6'>
                <a href="/contact" className='text-white no-underline font-bold capitalize hover:text-rose-600 hover:duration-400'>Contact</a></li>
        </ul>
        <a href="/" className='btn'>Subscribe</a>
    </nav>
    )
}
