import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../authorization/AuthContext'
import { signInAnonymously } from 'firebase/auth'
import { auth } from '../firebase/firebase'

export default function LogIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, logIn} = UserAuth()
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const anonymous = async () => {
        try {
        signInAnonymously(auth)
        navigate('/')
        } catch (error) {
            console.log(error)
        }
    } 

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await logIn(email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
            setError(error.message)
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
        <div className='w-[90%] md:w-[25%] h-[500px] bg-black/60 m-auto mt-[4rem] relative z-50 rounded-2xl text-white p-[4rem]'>
            <h2 className='text-4xl font-bold'>Log <span className='text-green-600'>In</span></h2>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                { error ? <p className='text-red-600 relative top-5 left-10 font-bold'>{error}</p> : null }
                <input onChange={(e) => setEmail(e.target.value)} placeholder='E-mail...' type='text' autoComplete='email'  className='mt-10 rounded-lg py-2 border-none outline-none text-black px-3' required  />
                <input onChange={(e) => setPassword(e.target.value)} placeholder='Password...' type="password" autoComplete='password'  className='mt-5 rounded-lg py-2 border-none outline-none text-black px-3' required />
                <input type="submit" value="Log in" className='bg-green-600 mt-8 py-2 rounded-lg cursor-pointer' />
            </form>
            <button onClick={anonymous} className='bg-white text-black w-full py-2 rounded-lg mt-[1rem]'>Log in as guest</button>
            <p className='mt-5 text-sm md:text-lg'>Don't have account yet? <Link to='/signup'><span className='text-green-600 cursor-pointer'>Sign in</span></Link></p>
        </div>
        <img src="https://bluemoonthaicafe.com/wp-content/uploads/2020/04/italian-food-background-1.jpg" alt="" className='absolute top-0 left-0 w-full h-full object-cover' />
        <div className='absolute top-0 left-0 w-full h-full bg-black/60'></div>
    </div>
  )
}
