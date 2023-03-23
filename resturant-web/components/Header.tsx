import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
// import { useEffect } from 'react'

export default function Header() {
    // const menu = document.querySelector(".menu-icon") as HTMLElement | null;
    // const navbar = document.querySelector(".navbar") as HTMLElement | null;

    // menu?.addEventListener("click", function () {
    //     navbar?.classList.toggle("active");
    // });

    // window.onscroll = () => {
    //     navbar?.classList.remove("active");
    // };

    return (
        <div className='header fixed top-0 right-0 w-full flex items-center justify-between py-7 bg-gray-900 xl:py-4 px-10 md:py-2.5 md:px-4'>

            <a href="" className='logo text-orange-500 font-semibold text-5xl'>Foods</a>


            <div className='menu-icon text-3xl cursor-pointer hidden lg:text-white '>
                <FontAwesomeIcon icon={faBars} width={15} height={15} />
            </div>


            <ul className='navbar flex lg:absolute lg:right-0 lg:left-0 lg:flex lg:flex-col lg:items-center lg:bg-indigo-800 lg:duration-300 '>
                <li><a href="/" className='text-white text-lg py-2.5 px-5 font-medium hover:text-orange-500 lg:p-6 lg:block'>Home</a></li>

                <li><a href="/" className='text-white text-lg py-2.5 px-5 font-medium hover:text-orange-500 lg:p-6 lg:block'>About</a></li>
                <li><a href="/" className='text-white text-lg py-2.5 px-5 font-medium hover:text-orange-500 lg:p-6 lg:block'>Menu</a></li>

                <li><a href="/" className='text-white text-lg py-2.5 px-5 font-medium hover:text-orange-500 lg:p-6 lg:block'>Service</a></li>

                <li><a href="/" className='text-white text-lg py-2.5 px-5 font-medium hover:text-orange-500 lg:p-6 lg:block'>Contact</a></li>
            </ul>
        </div>
    )
}
