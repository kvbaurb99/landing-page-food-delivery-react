import React from 'react'

export default function Food({name, img, price}) {
  return (
    <div className='w-[350px] h-[235px] bg-white rounded-xl flex flex-col'>
        <img src={img} alt="" className='h-[190px] w-[350px] rounded-tr rounded-tl object-cover ' />
        <div className='absolute  bg-black/30 w-[350px] h-[190px] hover:bg-black/0 duration-500'></div>
        <div className='w-full h-full flex justify-around items-center '>
            <p className='font-bold text-lg'>{name}</p>
            <p className='bg-black text-green-600 px-4 py-1 rounded-xl border border-solid border-green-600 text-sm'>{price}</p>
        </div>
    </div>
  )
}
