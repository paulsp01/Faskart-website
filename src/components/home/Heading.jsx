import React from 'react'

const Heading = ({ heading, category }) => {
  return (
    <div className='capitalize font-semibold text-2xl px-5 sm:px-10 xl:px-15 py-5'>
      {heading}
      {category ? (
        <span className='bg-[#DCC6A1] ml-5 uppercase rounded-full border-2 text-base px-1 border-[#8B5E3C]'>
          {category}
        </span>
      ) : null}
    </div>
  )
}

export default Heading