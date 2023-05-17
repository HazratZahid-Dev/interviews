import React from "react";
import Section3 from "../Compunents/SectionThree";
import Section1 from "../Compunents/SectionOne";
import Section2 from "../Compunents/SectionTwo";
import Section4 from "../Compunents/SectionFour";

const Home = () => {
  return (
   <div className=" bg-black flex flex-col gap-y-6 w-[90%] justify-center py-5 m-auto">
   <Section1/>
  <Section2/>
  <Section4/>
    <Section3/>
  
    
   </div>
  );
};

export default Home;
