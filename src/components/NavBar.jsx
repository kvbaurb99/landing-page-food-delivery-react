import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { AiOutlineHome } from 'react-icons/fa'

export default function NavBar() {
  return (
    <div className='h-[700px] w-[90%] m-auto'>
    <div className='flex p-6 justify-between relative z-50 text-white'>
        <div>
            <h1 className='text-4xl font-bold tracking-wide'>Best <span className='text-green-600'>Eats</span></h1>
        </div>
        <ul className='flex gap-8'>
            <li className='px-4 bg-white text-black flex items-center rounded cursor-pointer'>
                <FontAwesomeIcon icon={faHome} className='text-green-600 mr-3' />
                <p>Sign up or log in</p>
            </li>
            <li className='px-4 bg-white text-black flex items-center rounded cursor-pointer'>
                <FontAwesomeIcon icon={faBars} className='text-green-600 mr-3' />
                <p>Menu</p>
            </li>
        </ul>
    </div>
    <img src="https://blenderartists.org/uploads/default/original/4X/f/f/3/ff35ea6e9465fe3907994c3122b699f3912c4e98.jpeg" alt="" className='absolute top-0 h-[650px] w-[90%] object-cover z-10' />
    <div className='absolute top-0 left-0 bg-black/50 w-full h-[700px] z-10'></div>
    <div className='text-white absolute top-[25%] left-0 z-50 w-full flex items-center flex-col'>
        <p className='text-4xl font-bold max-w-[600px] text-center tracking-wide leading-normal'>Restaurant food, takeaway and shopping. <span className='text-green-600'>Delivered to your doors</span>. </p>
        <p className='mt-4'>Find your favorite restaurant </p>
        <div>
            <input type="text" name="" id="" placeholder='Looking for some burger or pizza?' className='w-[600px] py-4 rounded-3xl mt-4 text-black align-left px-4 border-none outline-none' />
            <div className='bg-green-600 py-3 w-[135px] rounded-3xl absolute top-[76.4%] right-[34.4%] flex justify-center cursor-pointer hover:bg-green-700'>Search</div>
        </div>
    </div>
    </div>
  )
}
