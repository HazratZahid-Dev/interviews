// import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
// import './App.css';
// import Home from './Pages/Home';

// function App() {
//   return (
//     <div className='bg-black' >
  
//     <Home/>
  
     
//     </div>
//   );
// }

// export default App;




// import React, { useState } from 'react';

import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './Pages/Home';
import NavBar from './Compunents/Navbar';


function App() {

  return (
    <>
  
      <Router>
     
        <div className='bg-black'>
         {/* <TopNav/> */}
          <NavBar />
          <Routes>
            
            <Route path='/' element={<Home  />} />
     
           
          
          
       
      
          </Routes>
        </div>
      </Router>
     
      
      
 
    </>

  );
}


export default App;
