import React from "react";
import "../Style/CompunentsStyle/Section1.css";
import "../Style/CompunentsStyle/Corner.css";
import icons from "../Images/icons.png";
import game from "../Images/game.png";
import cup from "../Images/cup.png";

const Section1 = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-img relative w-full flex gap-y-3 lg:gap-y-0 flex-col lg:justify-center  lg:h-[584px] rounded-2xl ">
          <div className="inner-bg  md:px-0 w-full  sm:w-[90%] py-10 lg:py-0 md:w-96 mt-2  h-44  lg:w-[877px]  lg:h-[325px] mx-auto relative">
            <div className=" absolute left-96 hidden lg:block -right-0 top-16 text-[24px] font-[600] w-8/12 text-white ">
              <p>
                Unlesh the power of NFT GameFi <br /> Trade,Earn and Battle
              </p>
            </div>
          </div>
          <div className="  left-0  lg:hidden -right-0  text-[24px] font-[600] w-full m-auto p-6  text-white ">
            <p>
              Unlesh the power of NFT GameFi <br /> Trade,Earn and Battle
            </p>
          </div>
          <div className=" mb-16 sm:mb-2 sm:w-1/2 lg:w-3/5  px-4 lg:px-20 lg:text-[16px] lg:font-[600] mt-4 text-white ">
            <p>
              Bayra is a multi-purpose platform revolutionizing the NFT space by
              combining NFTs, DeFi, and gaming in one place. Bayra is home to
              the CrypFennecs NFT project and will also host other NFT projects
              such as Blops and Pixel Heroes. The platform will offer a wide
              range of features, including a CrypFennecs DAO, staking and
              loaning, NFT marketplace, and gaming platform powered by the
              $BAYRA token.
            </p>
            <button
              type="button"
              className="bg-[#BF08DE] h-[39px] mt-4 w-[175.48px] rounded-[6px] font-[400] text-[16px] text-white"
            >
              Learn more
            </button>
          </div>
        </div>
        <div className="flex   px-3 absolute  top-[87%] left-[77.4%] gap-x-2 right-0 bottom-0">
          <div className="relative hidden lg:block">
            <div className="corner-Two h-[75px] w-20 relative rounded-md">
            <div className="flex items-center p-3">
                <div className="bg-[#BF08DE] w-2 h-2"></div>
                <h3 className="text-[12px] text-white font-bold">Bayra</h3>
              </div>
            </div>
            <div className=" p-1 bg-[#424242] absolute w-6 h-4 top-[58px] left-14 right-0 bottom-0">
              <div className="bg-icons w-3 h-2 m-auto" />
            </div>
          </div>
          <div>
          <div className="relative hidden lg:block">
            <div className="corner-bg h-[75px] w-20 relative rounded-md">
              <div className="flex items-center p-3">
                <div className="bg-[#BF08DE] w-2 h-2"></div>
                <h3 className="text-[8px] text-white font-bold">Crypfennec.</h3>
              </div>
            </div>
            <div className=" p-1 bg-[#424242] absolute w-6 h-4 top-[58px] left-14 right-0 bottom-0">
              <div className="bg-cup w-3 h-2 m-auto" />
            </div>
          </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="corner-Three h-[75px] w-20 relative rounded-md">
            <div className="flex items-center p-3">
                <div className="bg-[#BF08DE] w-2 h-2"></div>
                <h3 className="text-[12px] text-white font-bold">Bayra</h3>
              </div>
            </div>
            <div className=" p-1 bg-[#424242] absolute w-6 h-4 top-[58px] left-14 right-0 bottom-0">
              <div className="bg-game w-3 h-2 m-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
