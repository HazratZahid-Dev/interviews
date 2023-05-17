import React from 'react'
import '../Style/CompunentsStyle/Section2.css'

const Section2 = () => {
  return (
    <div className='bg-container'>
      <div class="bg-image"></div>
      <div className='content w-full h-36 rounded-2xl flex justify-around items-center '>
        <div>
            <h1 className='text-[24px] lg:text-[48px] text-white font-[900]'>Play</h1>
            <p className='lg:text-[24px] font-[400] text-white mt-0 text-center'>Anytime</p>
        </div>
        <div>
            <h1 className=' text-[24px] lg:text-[48px] text-white font-[900]'>Trade</h1>
            <p className='lg:text-[24px] font-[400] text-white mt-0 text-center'>Anytime</p>
        </div>
        <div>
            <h1 className=' text-[24px] lg:text-[48px] text-white font-[900]'>Earn</h1>
            <p className='lg:text-[24px] font-[400] text-white mt-0 text-center'>Every Win</p>
        </div>
    </div>
    </div>
  )
}

export default Section2