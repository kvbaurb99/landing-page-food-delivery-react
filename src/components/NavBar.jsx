import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen, faHome } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../authorization/AuthContext'
import Menu from './Menu'


export default function NavBar() {

    const {user, logOut} = UserAuth()
    const navigate = useNavigate()

    const handleToggle = () => {
        let menu = document.querySelector('.menu');
        menu.classList.toggle('menu-roll')
    }

    const handleLogOut = async () => {
        try {
            await logOut()
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className='h-[500px] md:h-[700px] w-full md:w-[90%] m-auto overflow-hidden'>
    <div className='flex p-6 justify-between relative z-50 text-white'>
        <div>
            <h1 className='text-2xl md:text-4xl font-bold tracking-wide'>Best <span className='text-green-600'>Eats</span></h1>
        </div>
        <ul className='flex md:gap-8 gap-2'>
            { user?.uid ? 
            <li onClick={handleLogOut} className='md:px-4 md:py-2 bg-white text-black md:flex items-center rounded cursor-pointer hidden'>
                <FontAwesomeIcon icon={faDoorOpen} className='text-green-600 mr-3' />
                <p className='text-sm'>Log out</p>
            </li>
            :
            <Link to='/login'><li className='md:px-4 md:py-2 bg-white text-black md:flex items-center rounded cursor-pointer hidden'>
                <FontAwesomeIcon icon={faHome} className='text-green-600 mr-3' />
                <p className='text-sm'>Sign up or log in</p>
            </li></Link>
            }
            <li onClick={handleToggle} className='md:px-4 md:py-2 px-4 bg-white text-black flex items-center rounded cursor-pointer'>
                <FontAwesomeIcon icon={faBars} className='text-green-600 mr-3' />
                <p>Menu</p>
            </li>
        </ul>
        <Menu handleToggle={handleToggle} user={user} />
    </div>
    <img src="https://blenderartists.org/uploads/default/original/4X/f/f/3/ff35ea6e9465fe3907994c3122b699f3912c4e98.jpeg" alt="" className='absolute top-0 h-[500px] md:h-[650px] w-full md:w-[90%] object-cover z-10' />
    <div className='absolute top-0 left-0 bg-black/50 w-full h-[500px] md:h-[700px] z-10'></div>
    <div className='text-white absolute top-[25%] left-0 z-20 w-full flex items-center flex-col'>
        <p className='text-2xl md:text-4xl font-bold max-w-[600px] text-center tracking-wide leading-normal'>Restaurant food, takeaway and shopping. <span className='text-green-600'>Delivered to your doors</span>. </p>
        <p className='mt-2 md:mt-4'>Find your favorite restaurant </p>
        <div>
            <input type="text" name="" id="" placeholder='Looking for some burger or pizza?' className='w-[300px] md:w-[600px] p-3 py-2 md:py-4 rounded-3xl mt-4 text-black align-left px-4 border-none outline-none' />
            <div className='bg-green-600 py-3 w-[135px] rounded-3xl hidden md:absolute md:top-[73%] md:right-[34.4%] md:flex justify-center cursor-pointer hover:bg-green-700'>Search</div>
        </div>
    </div>
    </div>
  )
}
