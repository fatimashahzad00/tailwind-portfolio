import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEarthAfrica, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function ContactInfo() {
  return (
    <div className='pt-10'>
        <h3 className='text-white uppercase font-bold tracking-wider mb-5'>Contact Info</h3>
        <ul className='relative'>
            <li className='relative list-none my-2 mx-0 cursor-pointer'>
                <span className='inline-block w-8 text-lg text-blue-300'><i><FontAwesomeIcon icon={faPhone}/></i></span>
                <span className='text-white font-light'> +1 234 567 890</span>
            </li>
            <li className='relative list-none my-2 mx-0 cursor-pointer'>
                <span className='inline-block w-8 text-lg text-blue-300'><i><FontAwesomeIcon icon={faEnvelope}/></i></span>
                <span className='text-white font-light'> abc@gmail.com</span>
            </li>
            <li className='relative list-none my-2 mx-0 cursor-pointer'>
                <span className='inline-block w-8 text-lg text-blue-300'><i><FontAwesomeIcon icon={faEarthAfrica}/></i></span>
                <span className='text-white font-light'> www.website.com</span>
            </li>
            <li className='relative list-none my-2 mx-0 cursor-pointer'>
                <span className='inline-block w-8 text-lg text-blue-300'><i><FontAwesomeIcon icon={faLinkedinIn}/></i></span>
                <span className='text-white font-light'> www.linkedin.com/me</span>
            </li>
            <li className='relative list-none my-2 mx-0 cursor-pointer'>
                <span className='inline-block w-8 text-lg text-blue-400'><i><FontAwesomeIcon icon={faLocationDot}/></i></span>
                <span className='text-white font-light'> Karachi, Sindh, Pakistan</span>
            </li>
        </ul>
    </div>
  )
}
