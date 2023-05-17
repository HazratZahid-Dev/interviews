import React from 'react'
import Carddata from '../Config/Carddata'
import '../Style/CompunentsStyle/Card.css'

const Cards = () => {
  return (
    <div className='flex flex-wrap gap-y-4 justify-center gap-x-3'>
      
       {
            Carddata.map((items)=>(
                <div className='relative'>
                <div>
                <div className='absolute text-2xl text-green-100  -right-0  bg-blue-700 w-12 h-12 rounded-full m-auto '>
                    <h1 className='flex items-stretch justify-center mt-3 '>{items.icons}</h1>
                </div>

                </div>
                <div className='w-64 h-72 clipPath  rounded-3xl   '>
                    <img className='w-full h-full  rounded-3xl  ' src={items.img} alt='error' />
                </div>

                </div>
            ))
        }
       
    </div>
  )
}

export default Cards

// import React from "react";
// import '../Style/CompunentsStyle/Card.css'
// import logo from "../Images/night1.jpg";
// import { FaEdgeLegacy } from "react-icons/fa";
// const Cards = () => {
//   return (
//    <>
//      <div className="logo rounded-xl bg-transparent h-32 w-32 overflow-hidden relative">
//       <img src={logo} alt="Logo" className="bg" />
//       <span className="absolute top-0 text-3xl right-0 z-50 icon-st">
//         <FaEdgeLegacy />
//       </span>
//       <span className="absolute -top-3 -right-3 h-12 w-12 rounded-2xl bg-white"></span>
//     </div>

//     <div className="card">
//       <div className="card-content">
//         <div className="logo">
//           <img src={logo} alt="Logo" />
//         </div>
//         <h2>Card Title</h2>
//         <p>Card content goes here...</p>
//       </div>
//     </div>
//    </>
//   );
// };

// export default Cards;