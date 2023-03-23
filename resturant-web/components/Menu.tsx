import Image from 'next/image'
import React from 'react'
import food1 from '/public/img/food1.png'
import food2 from '/public/img/food2.png'
import food3 from '/public/img/food3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Menu() {
    return (
        <section className='menu'>
            <div className="heading text-center">
                <span className='text-orange-500 font-semibold'>Food Menu</span>
                <h2 className='text-4xl'>Fresh Taste and Great Price</h2>
            </div>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className="menu-container grid grid-cols-auto-fit gap-x-6 items-center">
                <div className="box relative mt-16 h-auto flex flex-col items-center justify-center bg-yellow-100 p-5 rounded-lg">

                    <div className="box-img w-52 h-52">
                        <Image src={food1} alt='food' className='w-full h-full' />
                    </div>
                    <h2 className='text-lg font-bold text-gray-900'>Chicken Burger</h2>
                    <h3 className='text-gray-900 text-lg font-normal mt-1 mr-0 mb-2.5'>Tasty Food</h3>
                    <span className='text-base text-orange-500 font-semibold'>$11.00</span>
                    <FontAwesomeIcon icon={faCartShopping} width={40} height={40} className='bg-orange-500 absolute right-0 top-0 text-xl py-1.5 px-2.5 rounded-tr-lg rounded-bl-lg' />
                </div>

                {/* ////////////////////////////////////////////////// */}

                <div className="box relative mt-16 h-auto flex flex-col items-center justify-center bg-yellow-100 p-5 rounded-lg">
                    <div className="box-img w-52 h-52">
                        <Image src={food2} alt='food' className='w-full  h-full' />
                    </div>
                    <h2 className='text-lg font-bold text-gray-900'>Special Beef Burger</h2>
                    <h3 className='text-gray-900 text-lg font-normal mt-1 mr-0 mb-2.5'>Tasty Food</h3>
                    <span className='text-base text-orange-500 font-semibold'>$11.00</span>
                    <FontAwesomeIcon icon={faCartShopping} width={40} height={40} className='bg-orange-500 absolute right-0 top-0 text-xl py-1.5 px-2.5 rounded-tr-lg rounded-bl-lg' />                </div>

                {/* ////////////////////////////////////////////////// */}

                <div className="box relative mt-16 h-auto flex flex-col items-center justify-center bg-yellow-100 p-5 rounded-lg">
                    <div className="box-img w-52 h-52">
                        <Image src={food3} alt='food' className='w-full h-full' />
                    </div>
                    <h2 className='text-lg font-bold text-gray-900'>Chicken Fry Pack</h2>
                    <h3 className='text-gray-900 text-lg font-normal mt-1 mr-0 mb-2.5'>Tasty Food</h3>
                    <span className='text-base text-orange-500 font-semibold'>$11.00</span>
                    <FontAwesomeIcon icon={faCartShopping} width={40} height={40} className='bg-orange-500 absolute right-0 top-0 text-xl py-1.5 px-2.5 rounded-tr-lg rounded-bl-lg' />                </div>

            </div>
        </section>
    )
}
