import React, { useState } from "react";
import { FaTimes, FaBars, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Style/CompunentsStyle/Navbar.css";
import img from "../Images/png.png";

const Navbar = () => {
  const [icon, seticon] = useState(false);

  return (
    <div className="flex  justify-between py-4 w-[90%] m-auto rounded-bl-3xl rounded-br-3xl px-7 border border-gray-500    items-center bg-[#424242] text-white ">
      <div className=" w-24 h-auto hidden lg:block ">
        <img src={img} className="w-full h-full" />
      </div>

      <div className="flex items-center justify-between w-full   lg:w-[70%]">
        <ul
          className={icon ? "menu active" : "menu"}
          onclick={() => seticon(!icon)}
        >
          <li>
            <Link to="" onClick={() => seticon(!icon)} className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              onClick={() => seticon(!icon)}
              className="text-white"
            >
              Discover
            </Link>
          </li>
          <li>
            <Link
              to="/Portfolio"
              onClick={() => seticon(!icon)}
              className="text-white"
            >
              MarketPlace
            </Link>
          </li>
          <li>
            <Link
              to="/MainServices"
              onClick={() => seticon(!icon)}
              className="text-white"
            >
              Gaming
            </Link>
          </li>

          <li>
            <Link
              to="/Skill"
              onClick={() => seticon(!icon)}
              className="text-white"
            >
              About Us
            </Link>
          </li>
          {/* <li><Link to="/Process" onClick={() => seticon(!icon)} className="text-white">Team</Link></li> */}
          {/* <li><Link to="/Events" onClick={() => seticon(!icon)} className="text-white">Events</Link></li> */}
        </ul>
        <button
          type="button"
          className="w-24 lg:w-[175.48px] h-8 bg-[#2B55FF] rounded-[6px] text-white"
        >
          Log in
        </button>
      </div>

      <div className="menu__icon lg:hidden">
        <span className="navbar__icon text-white" onClick={() => seticon(!icon)}>
          {!icon ? <FaBars className="text-white" /> : <FaTimes className="text-white" />}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
