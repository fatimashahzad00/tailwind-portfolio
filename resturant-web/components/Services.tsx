import Image from 'next/image'
import React from 'react'
import s1 from '/public/img/s1.png'
import s2 from '/public/img/s2.png'
import s3 from '/public/img/s3.png'

export default function Services() {
    return (
        <section className='services'>
            <div className="heading text-center">
                <span className='text-orange-500 font-semibold'>Services</span>
                <h2 className='text-4xl'>We provide best quality food</h2>
            </div>

            {/* /////////////////////////////////////////////////////////////////// */}

            <div className="service-container grid grid-cols-auto-fit gap-x-6 mt-16">
                <div className="s-box text-center py-5 px-7">

                    <Image src={s1} alt='s1' className='img' />
                    <h3 className='mt-1 mr-0 mb-2.5 text-orange-500 text-xl font-semibold'>Order</h3>
                    <p className='leading-6'>There are many variations of passages of Lorem Ipsum available but majority have suffered alteration injected humour</p>
                </div>

                {/* //////////////////////////////////////////////////// */}

                <div className="s-box text-center py-5 px-7">

                    <Image src={s2} alt='s2' className='img'/>
                    <h3 className='mt-1 mr-0 mb-2.5 text-orange-500 text-xl font-semibold'>Shipping</h3>
                   <p className='leading-6'>There are many variations of passages of Lorem Ipsum available but majority have suffered alteration injected humour</p>
                </div>

                {/* //////////////////////////////////////////////////// */}

                <div className="s-box text-center py-5 px-7">

                    <Image src={s3} alt='s3' className='img'/>
                    <h3 className='mt-1 mr-0 mb-2.5 text-orange-500 text-xl font-semibold'>Delievered</h3>
                   <p className='leading-6'>There are many variations of passages of Lorem Ipsum available but majority have suffered alteration injected humour</p>
                </div>
            </div>
        </section>
    )
}
