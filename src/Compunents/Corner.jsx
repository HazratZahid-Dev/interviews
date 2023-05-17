import React from 'react'
import '../Style/CompunentsStyle/Corner.css'
import img from '../../src/Images/c1.png'
import img1 from '../../src/Images/blue.jpg'

const Corner = () => {
  return (
    // <div className='relative'>
    //     <div className=' w-20 h-20 z-50 '>
    //     <img src={img} className='w-full h-full ' />
    //     <div className='w-20 h-20 absolute top-0 right-0 -z-50  left-0 bottom-0'>
    //         <img src={img1} className='w-full h-full'></img>
    //     </div>

    //     </div>
    // </div>
   <div className='flex'>
     <div>
        <div className='corner-bg h-20 w-20 rounded-md'></div>
    </div>
    <div>
        <div className='corner-bg h-20 w-20 rounded-md'></div>
    </div>
    <div>
        <div className='corner-bg h-20 w-20 rounded-md'></div>
    </div>
   </div>
    
  )
}

export default Corner