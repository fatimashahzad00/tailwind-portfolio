import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className='relative w-full flex flex-col h-98 bg-display-gray items-center justify-center'>
        <p className='text-3xl text-white mb-5 font-bold'>Fatima Shahzad</p>
        <p className='text-white text-base w-130 text-center leading-6'>For more Frontend Designs. Please click on the hire me button for contact</p>
        <div className='social'>
            <a href=""><i><FontAwesomeIcon icon={faFacebookF}/></i></a>
            <a href=""><i><FontAwesomeIcon icon={faInstagram}/></i></a>
            <a href=""><i><FontAwesomeIcon icon={faLinkedinIn}/></i></a>
        </div>
        <p className='absolute text-pink bottom-9 text-sm'>CopyRight By Fatima Shahzad</p>
    </footer>
  )
}

