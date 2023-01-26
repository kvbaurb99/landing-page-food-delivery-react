import React from 'react'

export default function Foods({asian, burgers, all, pizza, european, lowest, low, high, highest}) {
  return (
    <div className='w-full text-white'>
        <div>
            <h2 className='text-white font-bold text-center text-5xl'>Top Rated <span className='text-green-600'>Restaurants Foods</span></h2>
        </div>
        <div className='flex justify-between w-[90%] m-auto'>
        <div className='mt-[3rem]'>
            <p className='font-bold text-xl'>Food Type</p>
                <ul className='flex justify-around w-[70%] m-auto mt-[1.5rem] gap-4 text-green-600'>
                    <li onClick={all} className='border border-solid border-green-600 px-8 rounded-xl py-1 hover:bg-white hover:text-black hover:border-black duration-1000 cursor-pointer'>All</li>
                    <li onClick={asian} className='border border-solid border-green-600 px-8 rounded-xl py-1 hover:bg-white hover:text-black hover:border-black duration-1000 cursor-pointer'>Asian</li>
                    <li onClick={pizza} className='border border-solid border-green-600 px-8 rounded-xl py-1 hover:bg-white hover:text-black hover:border-black duration-1000 cursor-pointer'>Pizza</li>
                    <li onClick={burgers} className='border border-solid border-green-600 px-8 rounded-xl py-1 hover:bg-white hover:text-black hover:border-black duration-1000 cursor-pointer'>Burgers</li>
                    <li onClick={european} className='border border-solid border-green-600 px-8 rounded-xl py-1 hover:bg-white hover:text-black hover:border-black duration-1000 cursor-pointer'>European</li>
                </ul>
        </div>
        <div className='mt-[3rem]'>
            <p className=' font-bold text-xl'>Price Filter</p>
                <ul className='className= flex justify-around w-[70%] m-auto mt-[1.5rem] gap-4 text-green-600'>
                    <li onClick={lowest} className='border border-solid border-green-600 px-8 rounded-xl py-1 hover:bg-white hover:text-black hover:border-black duration-1000 cursor-pointer'>$</li>
                    <li onClick={low} className='border border-solid border-green-600 px-8 rounded-xl py-1 hover:bg-white hover:text-black hover:border-black duration-1000 cursor-pointer'>$$</li>
                    <li onClick={high} className='border border-solid border-green-600 px-8 rounded-xl py-1 hover:bg-white hover:text-black hover:border-black duration-1000 cursor-pointer'>$$$</li>
                    <li onClick={highest} className='border border-solid border-green-600 px-8 rounded-xl py-1 hover:bg-white hover:text-black hover:border-black duration-1000 cursor-pointer'>$$$$</li>
                </ul>
        </div>
        </div>
    </div>
  )
}
