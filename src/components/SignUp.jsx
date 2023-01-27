import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons'
import { UserAuth } from '../authorization/AuthContext'

export default function SignUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, signUp} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
    <div className='p-6 flex w-full m-auto justify-around relative z-50'>
        <Link to='/'><h1 className='text-2xl md:text-4xl font-bold tracking-wide text-white'>Best <span className='text-green-600'>Eats</span></h1></Link>
        <ul className='flex md:gap-8 gap-2'>
            <li className='md:px-4 md:py-2 bg-white text-black md:flex items-center rounded cursor-pointer hidden'>
                <FontAwesomeIcon icon={faHome} className='text-green-600 mr-3' />
                <p className='text-sm'>Sign up or log in</p>
            </li>
            <li className='md:px-4 md:py-2 px-4 bg-white text-black flex items-center rounded cursor-pointer'>
                <FontAwesomeIcon icon={faBars} className='text-green-600 mr-3' />
                <p>Menu</p>
            </li>
        </ul>
    </div>
    <div className='w-[25%] h-[500px] bg-black/60 m-auto mt-[4rem] relative z-50 rounded-2xl text-white p-[4rem]'>
        <h2 className='text-4xl font-bold'>Sign <span className='text-green-600'>Up</span></h2>
        <form action="" className='flex flex-col' onSubmit={handleSubmit}>
            <input onChange={(e) => setEmail(e.target.value)} autoComplete='email' placeholder='E-mail...' type="email" className='mt-10 rounded-lg py-2 border-none outline-none text-black px-3' required  />
            <input onChange={(e) => setPassword(e.target.value)} autoComplete='password' placeholder='Password...' type="password" className='mt-5 rounded-lg py-2 border-none outline-none text-black px-3' required />
            <input type="submit" value="Sign in" className='bg-green-600 mt-8 py-2 rounded-lg cursor-pointer' />
        </form>
        <p className='mt-5'>Already have account ? <Link to='/login'><span className='text-green-600 cursor-pointer'>Log in</span></Link></p>
    </div>
    <img src="https://bluemoonthaicafe.com/wp-content/uploads/2020/04/italian-food-background-1.jpg" alt="" className='absolute top-0 left-0 w-full h-full object-cover' />
    <div className='absolute top-0 left-0 w-full h-full bg-black/60'></div>
</div>
  )
}
