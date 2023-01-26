import React from 'react'

export default function Foods() {
  return (
    <div className='w-full h-full text-white'>
        <div>
            <h2 className='text-green-600 font-bold text-center text-5xl'>Top Rated Restaurants Foods</h2>
        </div>
        <div className='flex justify-between w-[90%] m-auto'>
        <div className='mt-[3rem]'>
            <p className='font-bold text-2xl'>Food Type</p>
                <ul className='flex justify-around w-[70%] m-auto mt-[2rem] gap-4'>
                    <li className='border border-solid border-green-600 px-8 rounded-xl py-1 hover:bg-white hover:text-black hover:border-black duration-1000 cursor-pointer'>All</li>
                    <li className='border border-solid border-green-600 px-8 rounded-xl py-1 hover:bg-white hover:text-black hover:border-black duration-1000 cursor-pointer'>Asian</li>
                    <li className='border border-solid border-green-600 px-8 rounded-xl py-1 hover:bg-white hover:text-black hover:border-black duration-1000 cursor-pointer'>Pizza</li>
                    <li className='border border-solid border-green-600 px-8 rounded-xl py-1 hover:bg-white hover:text-black hover:border-black duration-1000 cursor-pointer'>Burgers</li>
                </ul>
        </div>
        <div className='mt-[3rem]'>
            <p className=' font-bold text-2xl'>Price Filter</p>
                <ul className='className= flex justify-around w-[70%] m-auto mt-[2rem] gap-4'>
                    <li className='border border-solid border-green-600 px-8 rounded-xl py-1 hover:bg-white hover:text-black hover:border-black duration-1000 cursor-pointer'>$</li>
                    <li className='border border-solid border-green-600 px-8 rounded-xl py-1 hover:bg-white hover:text-black hover:border-black duration-1000 cursor-pointer'>$$</li>
                    <li className='border border-solid border-green-600 px-8 rounded-xl py-1 hover:bg-white hover:text-black hover:border-black duration-1000 cursor-pointer'>$$$</li>
                    <li className='border border-solid border-green-600 px-8 rounded-xl py-1 hover:bg-white hover:text-black hover:border-black duration-1000 cursor-pointer'>$$$$</li>
                </ul>
        </div>
        </div>
    </div>
  )
}
