import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faXmark, faGear, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'





export default function Menu({handleToggle, user}) {
  return (
    <div className='absolute menu top-0 right-0 w-[400px] h-[650px] bg-black duration-1000 rounded-tl-lg rounded-bl-lg translate-x-[400px]'>
        <div className='p-4 flex justify-between border-b border-white/30'>
            <p className='text-xl'>Best <span className='text-green-600'>Eats</span></p>
            <FontAwesomeIcon onClick={handleToggle} icon={faXmark} size='xl' className='mt-0.5 text-green-600 cursor-pointer' />
        </div>
        <div className=' flex  mt-[2rem]'>
            { user?.uid ? 
            <ul className='text-center text-lg p-2'>
                <li className='flex'>
                    <FontAwesomeIcon icon={faHeart} className='relative top-1 px-3' />
                    <p className='hover:text-green-600 duration-500 cursor-pointer'>Favorites</p>
                </li>
                <li className='mt-[1rem] flex'>
                    <FontAwesomeIcon icon={faCartShopping} className='relative top-1 px-3' />
                    <p className='hover:text-green-600 duration-500 cursor-pointer'>Orders</p>
                </li>
                <li className='mt-[1rem] flex'>
                    <FontAwesomeIcon icon={faGear} className= 'relative top-1 px-3' />
                    <p className='hover:text-green-600 duration-500 cursor-pointer'>Account details</p>
                </li>
            </ul>
            :
            <div className='w-full flex justify-center'>
                <Link to='/login'><button className='px-16 bg-green-600 py-3 rounded-lg'>Log in or sign up</button></Link>
            </div>
            }
        </div>
    </div>
  )
}
