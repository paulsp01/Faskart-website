import React from 'react'
import model from "../images/model.png"

const Hero = () => {
  return (
    <div className="bg-[#F7F4EF] relative h-80 md:h-70 lg:h-100 xl:h-140 px-5 sm:px-10 xl:px-15 py-5 ">
        <div className=" absolute top-5 sm:top-10  xl:top-30   flex flex-col gap-4 lg:gap-6  lg:w-1/3 capitalize ">
            <p className='text-xs lg:text-sm xl:text-base'>NEW COLLECTION 2026</p>
            <h1 className='text-2xl lg:text-3xl xl:text-4xl font-bold '>Premium fashion<br/> wear confidence every day</h1>
            <p className="text-xs lg:text-sm xl:text-base">Discover the latest trends with premium quality<br/> and affordable pricing</p>
            <div className='flex flex-col sm:flex-row gap-3 text-xs lg:text-base'>
                <button className='bg-[#3B2F2F] text-white w-fit p-2 rounded-md'>Shop Now</button>
                <button className='border border-[#3B2F2F] p-2 w-fit rounded-md'>Explore Collection</button>
            </div>
        </div>
       
          <div className='absolute    right-0 bottom-0'>
              <img className='w-[clamp(200px,50vw,850px)] object-contain  ' src={model}/>
          </div>
       
    </div>
  )
}

export default Hero