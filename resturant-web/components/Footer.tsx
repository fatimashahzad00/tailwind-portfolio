import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <section className="contact">
        <div className="footer py-2.5 px-0 ">
            <div className="main flex flex-wrap">
                <div className="coll w-3/12 lg:w-6/12 lg:mb-2.5 sm:w-full">
                    <h4 className="text-xl text-white mb-6 relative before:absolute before:left-0 before:-bottom-2 before:bg-orange-500">Menu Links</h4>

                    <ul>
                        <li><a href="" className='text-gray-500 text-base block capitalize duration-300 hover:text-white'>Home</a></li>
                        <li><a href="" className='text-gray-500 text-base block capitalize duration-300 hover:text-white'>About</a></li>
                        <li><a href="" className='text-gray-500 text-base block capitalize duration-300 hover:text-white'>Menu</a></li>
                        <li><a href="" className='text-gray-500 text-base block capitalize duration-300 hover:text-white'>Service</a></li>
                        <li><a href="" className='text-gray-500 text-base block capitalize duration-300 hover:text-white'>Contact</a></li>
                    </ul>
                </div>


                <div className="coll w-3/12 lg:w-6/12 lg:mb-2.5 sm:w-full">
                    <h4  className="text-xl text-white mb-6 relative before:absolute before:left-0 before:-bottom-2 before:bg-orange-500">Our Services</h4>

                    <ul>
                        <li><a href="" className='text-gray-500 text-base block capitalize duration-300 hover:text-white'>Web Design</a></li>
                        <li><a href="" className='text-gray-500 text-base block capitalize duration-300 hover:text-white'>Web Development</a></li>
                        <li><a href="" className='text-gray-500 text-base block capitalize duration-300 hover:text-white'>Marketing</a></li>
                        <li><a href="" className='text-gray-500 text-base block capitalize duration-300 hover:text-white'>Product Management</a></li>
                        <li><a href="" className='text-gray-500 text-base block capitalize duration-300 hover:text-white'>Graphics Design</a></li>
                    </ul>
                </div>


                <div className="coll w-3/12 lg:w-6/12 lg:mb-2.5 sm:w-full">
                    <h4  className="text-xl text-white mb-6 relative before:absolute before:left-0 before:-bottom-2 before:bg-orange-500">Information</h4>

                    <ul>
                        <li><a href="" className='text-gray-500 text-base block capitalize duration-300 hover:text-white'>About Us</a></li>
                        <li><a href="" className='text-gray-500 text-base block capitalize duration-300 hover:text-white'>Delivery Information</a></li>
                        <li><a href="" className='text-gray-500 text-base block capitalize duration-300 hover:text-white'>Privacy Policy</a></li>
                        <li><a href="" className='text-gray-500 text-base block capitalize duration-300 hover:text-white'>Terms & Conditions</a></li>
                    </ul>
                </div>


                <div className="coll w-3/12 lg:w-6/12 lg:mb-2.5 sm:w-full">
                    <h4  className="text-xl text-white mb-6 relative before:absolute before:left-0 before:-bottom-2 before:bg-orange-500">Contact Us</h4>

                    <div className="social flex items-center justify-between">
                        <a href="" className='h-10 w-10 bg-orange-400 text-white inline-flex items-center justify-center text-2xl rounded-full duration-300 hover:scale-125 hover:text-gray-900 hover:bg-white'><FaFacebookF /></a>
                       <a href="" className='h-10 w-10 bg-orange-400 text-white inline-flex items-center justify-center text-2xl rounded-full duration-300 hover:scale-125 hover:text-gray-900 hover:bg-white'><FaInstagram /></a>
                       <a href="" className='h-10 w-10 bg-orange-400 text-white inline-flex items-center justify-center text-2xl rounded-full duration-300 hover:scale-125 hover:text-gray-900 hover:bg-white'><FaTwitter /></a>
                       <a href="" className='h-10 w-10 bg-orange-400 text-white inline-flex items-center justify-center text-2xl rounded-full duration-300 hover:scale-125 hover:text-gray-900 hover:bg-white'><FaYoutube /></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
