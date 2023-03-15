import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faUtensils, faBook, faPencil } from '@fortawesome/free-solid-svg-icons'


export default function Interest() {
  return (
    <div className='mb-0'>
        <h2 className='text-sky-900 uppercase tracking-wider mb-5 font-bold text-2xl'>Interest</h2>
        <ul className='grid grid-cols-4 md:grid-cols-2 '>
            <li className='text-gray-700 font-medium my-10 mx-0 sm:grid-cols-11'>
                <i aria-hidden='true' className='text-sky-600 text-lg w-5 '><FontAwesomeIcon icon={faGamepad}/></i> Gaming</li>
            <li className='text-gray-700 font-medium my-10 mx-0 sm:grid-cols-11'>
                <i aria-hidden='true' className='text-sky-600 text-lg w-5 '><FontAwesomeIcon icon={faUtensils}/></i> Cooking</li>
            <li className='text-gray-700 font-medium my-10 mx-0 sm:grid-cols-11'>
                <i aria-hidden='true' className='text-sky-600 text-lg w-5'><FontAwesomeIcon icon={faBook}/></i>  Reading</li>
            <li className='text-gray-700 font-medium my-10 mx-0 sm:grid-cols-11'>
                <i aria-hidden='true' className='text-sky-600 text-lg w-5'><FontAwesomeIcon icon={faPencil}/></i> Sketching</li>
        </ul>
    </div>
  )
}
