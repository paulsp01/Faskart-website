import React from 'react'
import model from "../images/model.png"

const Hero = () => {
  return (
    <div className="bg-[#F7F4EF] relative h-80 md:h-70 lg:h-100 xl:h-140 px-5 sm:px-10 xl:px-15 py-5 ">
        <div className=" absolute top-5 sm:top-10  xl:top-30   flex flex-col gap-4 lg:gap-6  lg:w-1/2 capitalize ">
            <p className='text-xs lg:text-sm xl:text-base'>NEW COLLECTION 2026</p>
            <h1 className='text-2xl lg:text-3xl xl:text-5xl font-bold '>Premium fashion<br/> wear confidence everyday</h1>
            <p className="text-xs lg:text-sm xl:text-md">Discover the latest trends with premium quality<br/> and affordable pricing</p>
            <div className='flex flex-col sm:flex-row gap-3 text-xs lg:text-base xl:text-md'>
                <button className='bg-[#3B2F2F] text-white w-fit p-3 rounded-md lg:text-lg lg:p-4'>Shop Now</button>
                <button className='border border-[#3B2F2F] p-2 w-fit rounded-md lg:text-lg lg:p-4'>Explore Collection</button>
            </div>
        </div>
       
          <div className='absolute    right-0 bottom-0'>
              <img className='w-[clamp(200px,50vw,850px)] object-contain  ' src={model}/>
          </div>
       
    </div>
  )
}

export default Hero