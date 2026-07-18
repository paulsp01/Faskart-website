import React from 'react'
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

const CardTwo = ({features}) => {
 
  return (
   <>
  
     <div  className='bg-[#F7F4EF] flex flex-col items-center justify-center sm:flex-row gap-1 sm:gap-4 w-fit p-4 md:px-10 text-[#3B2F2F]'>
    <div>
        {features.icon}
    </div>
    <div className='flex flex-col   justify-center text-center sm:text-start gap-1' >
        <p className='capitalize font-bold text-xs'>{features.title}</p>
          <p className='capitalize text-[10px]'>{features.subtitle}</p>
    </div>
    </div>
   
   </>
  )
}

export default CardTwo