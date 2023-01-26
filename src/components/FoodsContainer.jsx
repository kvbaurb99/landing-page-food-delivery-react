import React, { useState } from 'react'
import productsArray from './data/Products'
import Food from './Food'


export default function FoodsContainer({products}) {






  return (
    <div className='text-black w-[90%] m-auto mt-[4rem] flex flex-wrap gap-12 justify-center'>
        {products.map((item, index) => {
            return <Food 
                name={item.name}
                img={item.img}
                price={item.price}
            />
        })}
    </div>
  )
}
