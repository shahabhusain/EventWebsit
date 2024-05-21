import React from "react";
import logo from "../assets/logo.png";
import img1 from "../assets/d1.png";
import img2 from "../assets/y1.png";
import img3 from "../assets/i1.png";
import img4 from "../assets/t1.png";
const Footer = () => {
  return (
    <div className="bg-[#1b222e] py-8 mt-24">
      <div className=" flex flex-col gap-5 w-[80%] mx-auto">
        <div className=" flex flex-col md:items-center justify-center gap-3">
          <img className=" w-[93px]" src={logo} alt="" />
          <div className=" md:flex md:items-center gap-12">
            <li className=" list-none cursor-pointer">Home</li>
            <li className=" list-none cursor-pointer md:mt-0 mt-1">Service</li>
            <li className=" list-none cursor-pointer md:mt-0 mt-1">About Us</li>
            <li className=" list-none cursor-pointer md:mt-0 mt-1">Packages</li>
            <li className=" list-none cursor-pointer md:mt-0 mt-1">Contact</li>
          </div>
        </div>
        <div className=" bg-white h-[2px]"></div>
        <div className=" md:flex items-center justify-between">
          <p>© 2024 Eventful.uae All rights reserved</p>
          <div className=" flex items-center gap-4 md:mt-0 mt-3">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
