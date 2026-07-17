import React from 'react'

const Heading = ({heading,category}) => {
  return (
    <div className='capitalize font-semibold text-2xl px-5 sm:px-10 xl:px-15 py-5'>{heading}:{category}</div>
  )
}

export default Heading