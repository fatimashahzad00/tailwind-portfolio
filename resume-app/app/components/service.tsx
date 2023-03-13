import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBell} from '@fortawesome/free-regular-svg-icons'
export default function Service({data}: any) {
    const { webdeveloper} = data;
    return (
        <div className='service'>
            <div className='title'>
                <h2 className='text-white text-7.5xl w-500 my-7.5 mx-auto text-center'>Our Services</h2>
            </div>
            <div className='box'>
                <div className='card'>
                   <i><FontAwesomeIcon icon={faBars}/></i>
                    <h5 className='text-rose-600 text-23 mb-3'>Web Development</h5>
                    <div className='pra'>
                        <p className='text-purple-300 text-base mb-6'>{webdeveloper}</p>
                        <p className='text-center'>
                            <a type='button' href=""  className='bg-rose-600 text-white no-underline border-2 border-solid border-transparent font-bold py-2 px-5.5 duration-400 rounded-full hover:bg-transparent hover:border-2 hover:border-solid hover:border-rose-600 hover:cursor-pointer'>Read More</a>
                        </p>
                    </div>
                </div>
                <div className='card'>
                    <i> <FontAwesomeIcon icon={faUser} /></i>
                    <h5 className='text-rose-600 text-23 mb-3'>Web Development</h5>
                    <div className='pra'>
                        <p className='text-purple-300 text-base mb-6'>{webdeveloper}</p>
                        <p className='text-center'>
                            <a type='button' href=""  className='bg-rose-600 text-white no-underline border-2 border-solid border-transparent font-bold py-2 px-5.5 duration-400 rounded-full hover:bg-transparent hover:border-2 hover:border-solid hover:border-rose-600 hover:cursor-pointer'>Read More</a>
                        </p>
                    </div>
                </div>
                <div className='card'>
                    <i> <FontAwesomeIcon icon={faBell} /></i>
                    <h5 className='text-rose-600 text-23 mb-3'>Web Development</h5>
                    <div className='pra'>
                        <p className='text-purple-300 text-base mb-6'>{webdeveloper}</p>
                        <p className='text-center'>
                            <a type='button' href=""  className='bg-rose-600 text-white no-underline border-2 border-solid border-transparent font-bold py-2 px-5.5 duration-400 rounded-full hover:bg-transparent hover:border-2 hover:border-solid hover:border-rose-600 hover:cursor-pointer'>Read More</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
