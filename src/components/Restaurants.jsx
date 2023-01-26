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
    <div className='whitespace-nowrap overflow-x-scroll scrollbar-hide scroll-smooth' id={'slider'}>
        <div className='flex relative items-center gap-[14rem] rounded-xl h-[250px] w-full' >
            <FontAwesomeIcon onClick={slideLeft} icon={faArrowLeft} size='xl' className='fixed text-white left-0 z-20 bg-black/60 p-2 rounded-full cursor-pointer mt-6' />
        {restaurants.map((restaurant, index) => {
            return <Restaurant
                key={restaurant.name}
                name={restaurant.name}
                img={restaurant.img}
                description={restaurant.description}
            />
        })}
        <FontAwesomeIcon onClick={slideRight} icon={faArrowRight} size='xl' className='fixed right-0 text-white z-20 bg-black/60 p-2 rounded-full cursor-pointer mt-6' />
        </div>
    </div>
  )
}
