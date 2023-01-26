import React from 'react'
import restaurants from './data/Restaurants'
import Restaurant from './Restaurant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Restaurants() {


    const slideLeft = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft -= 500
    }

    const slideRight = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft += 500  
    }

  return (
    <div className='mt-[2rem] w-[90%] m-auto'>
        <p className='text-white text-2xl'>Trending <span className='text-green-600'>Restaurants</span></p>
        <div className='flex items-center relative' >
            <FontAwesomeIcon onClick={slideLeft} icon={faArrowLeft} size='xl' className='bg-black rounded-full opacity-80 text-green-600 p-2 absolute left-0 z-20 hover:opacity-100 cursor-pointer mb-[6rem]' />
           <div id={'slider'} className='w-full overflow-x-scroll scroll-smooth whitespace-nowrap relative  scrollbar-hide flex h-[300px] gap-[14rem] mt-[2rem]'>
        {restaurants.map((restaurant, index) => {
            return <Restaurant
                key={restaurant.name}
                name={restaurant.name}
                img={restaurant.img}
                description={restaurant.description}
            />
        })}
           </div>
           <FontAwesomeIcon onClick={slideRight} icon={faArrowRight} size='xl' className='bg-black rounded-full opacity-80 text-green-600 p-2 absolute right-0 z-20 hover:opacity-100 cursor-pointer mb-[6rem]' />
        </div>
    </div>
  )
}
