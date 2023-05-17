import React from "react";
import Section3 from "../Compunents/Section3";
import Section1 from "../Compunents/Section1";
import Section2 from "../Compunents/Section2";
import Section4 from "../Compunents/Section4";
import Corner from "../Compunents/Corner";

const Home = () => {
  return (
   <div className=" bg-black flex flex-col gap-y-6 px-20 py-5">
   <Section1/>
   {/* <Corner/> */}
  <Section2/>
  <Section4/>
    <Section3/>
  
    
   </div>
  );
};

export default Home;
