import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import { Link } from "react-scroll";
import Btn from "./Btn";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const [openDesktop, setOpenDesktop] = useState(0);
  const [openMobile, setOpenMobile] = useState(false);

  const handleMenuItemClick = (index) => {
    setOpenDesktop(index);
    setOpenMobile(false);
  };

  return (
    <div
    className=" md:pt-5" id="home">
      <div
      className="w-[100%] md:flex hidden items-center justify-center z-[1000]  ">
        <div className={`  fixed ${isActive ? " top-0" : "top-4 rounded-lg"} w-[80%] bg-[#161C27] z-[100] py-4 flex items-center justify-between px-12 ${
        isActive
          ? "bg-[#161C27] shadow-md transition-all fixed w-full duration-300 ease-in-out"
          : " px-12"
      }`}>
          <img className=" w-[120px]" src={logo} alt="" />
          <div className="flex items-center gap-12">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={` cursor-pointer a list-none a  ${
                openDesktop === 0 ? "border-b-[#FFEDA4] text-[#FFEDA4] border-b-[2px] " : ""
              }`}
              onClick={() => handleMenuItemClick(0)} // Add onClick handler
            >
              Home
            </Link>
            <Link
              to="service"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
              className={`list-none cursor-pointer a a ${
                openDesktop === 1 ? "border-b-[#FFEDA4] text-[#FFEDA4] border-b-[2px]" : ""
              }`}
              onClick={() => handleMenuItemClick(1)} // Add onClick handler
            >
              Services
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={`list-none cursor-pointer a ${
                openDesktop === 2 ? "border-b-[#FFEDA4] text-[#FFEDA4] border-b-[2px]" : ""
              }`}
              onClick={() => handleMenuItemClick(2)} // Add onClick handler
            >
              Vision
            </Link>
            <Link
              to="packages"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={`list-none cursor-pointer a ${
                openDesktop === 3 ? "border-b-[#FFEDA4] text-[#FFEDA4] border-b-[2px]" : ""
              }`}
              onClick={() => handleMenuItemClick(3)} // Add onClick handler
            >
              Packages
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={`list-none cursor-pointer a ${
                openDesktop === 4 ? "border-b-[#FFEDA4] text-[#FFEDA4] border-b-[2px]" : ""
              }`}
              onClick={() => handleMenuItemClick(4)} // Add onClick handler
            >
              Contact
            </Link>
          </div>
          <Btn />
        </div>
      </div>

      <div className=" md:hidden  fixed z-[1000] w-full ">
        <div className=" flex items-center justify-between  bg-[#232c3b] py-4 px-4 ">
          <img onClick={() => setOpenMobile(!openMobile)} src={menu} alt="" />
          <img className="w-[100px]" src={logo} alt="" />
        </div>
        {openMobile && (
          <div
          className="flex flex-col w-[80%] bg-[#232c3b] h-screen ">
            <div className=" flex flex-col items-center gap-12">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className={`list-none cursor-pointer a ${
                  openDesktop === 0 ? "border-b-[#FFEDA4] border-b-[2px]" : ""
                }`}
                onClick={() => handleMenuItemClick(0)} // Add onClick handler
              >
                Home
              </Link>
              <Link
                to="service"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className={`list-none cursor-pointer a ${
                  openDesktop === 1 ? "border-b-[#FFEDA4] border-b-[2px]" : ""
                }`}
                onClick={() => handleMenuItemClick(1)} // Add onClick handler
              >
                Services
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className={`list-none cursor-pointer a ${
                  openDesktop === 2 ? "border-b-[#FFEDA4] border-b-[2px]" : ""
                }`}
                onClick={() => handleMenuItemClick(2)} // Add onClick handler
              >
                Vision
              </Link>
              <Link
                to="packages"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className={`list-none cursor-pointer a ${
                  openDesktop === 3 ? "border-b-[#FFEDA4] border-b-[2px]" : ""
                }`}
                onClick={() => handleMenuItemClick(3)} // Add onClick handler
              >
                Packages
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className={`list-none cursor-pointer a ${
                  openDesktop === 4 ? "border-b-[#FFEDA4] border-b-[2px]" : ""
                }`}
                onClick={() => handleMenuItemClick(4)} // Add onClick handler
              >
                Contact
              </Link>
            </div>
             <div className=" ml-[6rem] mt-8">
             <Btn />
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
