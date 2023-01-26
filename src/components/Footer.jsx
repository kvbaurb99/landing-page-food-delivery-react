import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'


export default function Footer() {
  return (
    <div className='w-full h-[70px] border-t border-solid border-white/40 mt-[6rem] text-white bg-black flex justify-center items-center gap-8'>
        <a href="https://www.linkedin.com/in/jakub-urba%C5%84ski-74903524a/" target='_blank'><FaLinkedin className='text-3xl text-white hover:text-slate-300 hover:scale-110 cursor-pointer duration-1000' /></a>
        <a href="https://github.com/kvbaurb99" target='_blank'><FaGithub className='text-3xl text-green-600 hover:text-green-700 hover:scale-110 cursor-pointer duration-1000' /></a>
    </div>
  )
}
