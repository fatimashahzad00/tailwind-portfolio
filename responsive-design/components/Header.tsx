import Image from 'next/image'
import React from 'react'
import logo from '/public/logo.gif'
import { FaBars } from 'react-icons/fa'

export default function Header() {
  return (
    <header className='hero'>
        <a href="/" className='logo'><Image src={logo} alt='anfitz' className='max-w-full w-36 h-auto'/> </a>
        <ul className='navmenu flex'>
            <li><a href="" className='active'>Home +</a></li>
            <li><a href={'/'}>NFTs +</a></li>
            <li><a href={'/'}>Authors +</a></li>
            <li><a href={'/'}>Blogs +</a></li>
            <li><a href={'/'}>Pages +</a></li>
        </ul>
        <div className='menu-icon'><i><FaBars/></i></div>
    </header>
  )
}
