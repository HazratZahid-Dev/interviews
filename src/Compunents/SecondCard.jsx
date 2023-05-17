import React from "react";
import { firstData, secondData, thirdData } from "../Config/SecondCardData";
import "../Style/CompunentsStyle/Card.css";

const SecondCard = () => {
  return (
    <div className="flex flex-wrap gap-y-4 mt-12 justify-center gap-x-4">
      <div className="lg:w-72  px-6 rounded-[50px] flex flex-col gap-y-3 linear text-white">
        {firstData.map((items) => (
          <>
            <h1 className="text-center text-[24px] font-[700] mt-2">
              {items.heading}
            </h1>
            <p className="font-[600] text-[12px] leading-[14px]">
              <span className="font-bold">Genrul Description</span>
              {items.paraghraphOne}
            </p>
            <p className="font-[600] text-[12px]  leading-[14px]">
              {items.paraghraphTwo}
            </p>
            <div className="flex justify-between">
              <div className="flex items-center ">
                <div className="flex flex-col ">
                  <p className="font-semibold text-[12px]  h-4 ">Name</p>
                  <p className="  text-[12px] font-normal">$Bayra</p>
                </div>
                <div className="h-5 w-[1px] bg-gray-300 ml-7 "></div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col ">
                  <p className="font-semibold text-[12px]  h-4 ">Name</p>
                  <p className="  text-[12px] font-normal">$Bayra</p>
                </div>
                <div className="h-5 w-[1px] bg-gray-300 ml-7"></div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col ">
                  <p className="font-semibold text-[12px]  h-4 ">Name</p>
                  <p className="  text-[12px] font-normal">$Bayra</p>
                </div>
                {/* <div className="h-5 w-[1px] bg-gray-300 ml-2"></div> */}
              </div>
            </div>
            <p className="text-center mt-5 font-[500] text-[12px]">
              General Release: 1,000,000,000 BAYRA
            </p>
            <button
              type="button"
              className="bg-[#BF08DE] w-full h-[45px] mt-3 rounded-[14px] text-[12px]"
            >
              {items.button}
            </button>
          </>
        ))}
      </div>
      {/* <div className="w-72 relative px-6 rounded-[50px] flex flex-col gap-y-3 linear text-white">
        <h1 className="text-center text-[24px] font-[700] mt-2">Our Mission</h1>
        <p className="font-[600] text-[12px]  leading-[14px]">
          Our mission is to create a comprehensive and user-friendly ecosystem
          where NFT enthusiasts, gamers, and investors can come together to
          explore the potential of NFTs, DeFi, and gaming. We aim to offer a
          seamless and enjoyable experience that empowers users to shape the
          future of the platform.
        </p>
        <button
              type="button"
              className="bg-[#BF08DE] mt-28 w-full h-[45px] rounded-[14px] text-[12px]"
            >
              Read More
            </button>
      </div> */}
      {secondData.map((items) => (
        <div className="w-72  px-6 rounded-[50px] flex flex-col gap-y-3 linear text-white">
          <h1 className="text-center font-[700] text-[24px] mt-2">
            {items.SecondHeading}
          </h1>
          <p className="font-[600] text-[12px]  leading-[14px]">
            {items.secondParaghraph}
          </p>
          <button
            type="button"
            className="bg-[#BF08DE] w-full h-[45px] mt-[115px] rounded-[14px] text-[12px]"
          >
            Read More
          </button>
        </div>
      ))}
      {thirdData.map((items) => (
        <div className="w-72  px-6 rounded-[50px] flex flex-col gap-y-3 linear text-white">
          <h1 className="text-center font-[700] text-[24px] mt-2">
            {items.thirdHeading}
          </h1>
          <p className="font-[600] text-[12px]  leading-[14px]">
            {items.thirdParaghraph}
          </p>
          <button
            type="button"
            className="bg-[#BF08DE] w-full h-[45px] mt-[75px] rounded-[14px] text-[12px]"
          >
            Read More
          </button>
        </div>
      ))}
    </div>
  );
};

export default SecondCard;
