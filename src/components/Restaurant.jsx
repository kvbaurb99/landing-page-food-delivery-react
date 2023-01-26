import React from 'react'

export default function Restaurant({name, img, description}) {
  return (
    <div className='flex flex-col w-[250px] h-[150px] bg-gray-600 rounded-xl'>
        <div className='z-10 text-white font-bold p-3'>
            <p className='text-lg'>{name}</p>
            <p className='text-sm'>{description}</p>
            <button className='relative top-20 bg-white rounded-xl text-black px-5 py-1'>Order Now</button>
        </div>
        <div className='absolute w-[350px] h-[200px] rounded-xl'>
            <img src={img} alt="" className='w-[350px] h-[200px] rounded-xl' />
            <div className='absolute top-0 left-0 bg-black/50 w-full h-full rounded-xl'></div>
        </div>
    </div>
  )
}