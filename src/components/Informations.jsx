import React from 'react'

export default function Informations() {
  return (
    <div>
    <p className='text-white w-[90%] m-auto mt-[6rem] text-center text-5xl'>Need more <span className='text-green-600'>informations</span>? Get in <span className='text-green-600'>touch with us</span>!</p>
    <div className='w-[90%] m-auto mt-[6rem] flex justify-center flex-wrap gap-10'>
        <div className='w-[700px] h-[455px]'>
            <div className='absolute bg-black/40 w-[700px] h-[455px] z-20 hover:bg-black/0 duration-1000'></div>
            <img src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaXZlcnklMjByaWRlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className='absolute w-[700px] h-[455px] rounded-tl-[10%] object-cover rounded-br-[10%] rounded-tr-xl rounded-bl-xl'/>
            <div className='z-20 relative text-white w-full p-4 top-[60%]'>
                <p className='text-3xl font-bold'>Ride with us</p>
                <p className='w-[350px] mt-2'>The freedom to fit work around your life. Plus great fees, perks and discounts.</p>
                <button className='bg-white text-black px-16 py-2 mt-4 rounded-xl'>Join Us</button>
            </div>
        </div>
        <div className='w-[700px] h-[455px]'>
            <div className='absolute bg-black/40 w-[700px] h-[455px] z-20 hover:bg-black/0 duration-1000'></div>
            <img src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/Vd3bj2jPe/videoblocks-focused-businesswoman-working-on-laptop-at-home-office-serious-top-manager-looking-at-graphs-on-computer-screen-indoors-business-woman-using-laptop-business-people-working-in-office-on-background_sk1o72nbv_thumbnail-1080_01.png" alt="" className='absolute w-[700px] h-[455px] rounded-bl-[10%] rounded-tr-[10%] rounded-tl-xl rounded-br-xl object-cover' />
            <div className='z-20 relative text-white w-full p-4 top-[60%]'>
                <p className='text-2xl font-bold'>Partner with us</p>
                <p className='w-[450px] mt-2'>Do you prefer working inside? No problem! We need you to improve our products in office.</p>
                <button className='bg-white text-black px-16 py-2 mt-4 rounded-xl '>Join Us</button>
            </div>
        </div>
        <div className='w-[700px] h-[455px]'>
        <div className='absolute bg-black/40 w-[700px] h-[455px] z-20 hover:bg-black/0 duration-1000'></div>
            <img src="https://img.freepik.com/premium-photo/black-stone-food-background-vegetables-spices-black-old-table_187166-9514.jpg" alt="" className='absolute w-[700px] h-[455px]  object-cover rounded-br-[10%] rounded-tr-xl rounded-bl-xl rounded-tl-[10%]' />
            <div className='z-20 relative text-white w-full p-4 top-[60%]'>
                <p className='text-2xl font-bold'>Need catering ? Contact with us!</p>
                <p className='w-[400px] mt-2'>Our business collaborate with a lot of restaurants, some of them are providing catering option. Check them!</p>
                <button className='bg-white text-black px-16 py-2 mt-4 rounded-xl '>Contact Us</button>
            </div>
        </div>
        <div className='w-[700px] h-[455px]'>
            <div className='absolute bg-black/40 w-[700px] h-[455px] z-20 hover:bg-black/0 duration-1000'></div>
            <img src="https://cdn.shopify.com/s/files/1/1183/5168/products/MEMOBOTTLE_GIFT_CARD_25_1500x1500.jpg?v=1608074965" alt="" className='absolute w-[700px] h-[455px]  object-cover  rounded-tr-[10%] rounded-bl-[10%] rounded-tl-xl rounded-br-xl ' />
            <div className='z-20 relative text-white w-full p-4 top-[60%]'>
                <p className='text-2xl font-bold'>Gift Cards</p>
                <p className='w-[450px] mt-2'>Our page accepts gift cards, you can use them in checkout. If you want to buy someone a gift card click button below.</p>
                <button className='bg-white text-black px-16 py-2 mt-4 rounded-xl '>Buy Gift Card</button>
            </div>
        </div>
    </div>
    </div>
  )
}
