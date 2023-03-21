import Image from 'next/image'
import React from 'react'
import logo from '/public/banner-img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Main() {
  return (
    <section className='main py-0 px-36 md:grid-cols-1 md:h-full'>
        <div className='text md:pt-24 md:items-center'>
          <h5 className='text-xl font-semibold text-amber-700 xl:text-base xl:duration-300'>Super Rare NFT</h5>
          <h1 className='text-5xl font-bold text-white mx-0 my-4 xl:text-5xl xl:duration-300'><span className='gradient-text-orange'>Discover</span>, Collect, <br /> And Sell <span className='gradient-text-orange'>NFTs</span></h1>

          <p className='text-sm text-white font-normal tracking-wider leading-7 mb-9 xl:text-xs xl:duration-300 '>Digital Marketplace For Crypto Collectibles And non-Fungible Tokens. <br /> Buy, Sell, And Discover Exclusive Digital Assets.</p>


          <a href="" className='inline-block text-white text-base font-semibold tracking-wider capitalize py-3 px-7 rounded transition-all '>Explore</a>

          <a href="" className='btn inline-block text-white text-base font-semibold tracking-wider capitalize py-3 px-7 rounded transition-all ml-5'>Create</a>
        </div>


        <div className="main-img relative w-full h-auto md:items-center">
          <Image src={logo} alt='banner' className='img lg:max-w-full lg:w-96 lg:auto lg:duration-300'/>
        </div>

        <div className="arrow absolute flex items-center text-white bottom-10">
          <a href="" className='text-white text-sm font-normal capitalize tracking-wider'><span><i className=''><FontAwesomeIcon icon={faArrowDown} className='icon w-6 h-6 text-white border-2 border-solid border-white py-1 px-1 ml-8 '/></i></span></a>
        </div>
    </section>
  )
}
