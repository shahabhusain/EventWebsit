import React from "react";
import logo from "../assets/logo.png";
import img1 from "../assets/d1.png";
import img2 from "../assets/y1.png";
import img3 from "../assets/i1.png";
import img4 from "../assets/t1.png";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="bg-[#1b222e] py-8 mt-32">
      <div className=" flex flex-col gap-5 w-[80%] mx-auto">
        <div className=" flex flex-col md:items-center justify-center gap-3">
          <img className=" w-[120px]" src={logo} alt="" />
          <div className=" md:flex md:items-center gap-12 mt-4">
            <Link
               to="home"
               spy={true}
               smooth={true}
               offset={50}
               duration={500}
            className=" list-none cursor-pointer a">Home</Link>
            <Link
             to="service"
             spy={true}
             smooth={true}
             offset={10}
             duration={500}
            className=" list-none cursor-pointer a md:mt-0 mt-1">Services</Link>
            <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
            className=" list-none cursor-pointer a md:mt-0 mt-1">Vision</Link>
            <Link
               to="packages"
               spy={true}
               smooth={true}
               offset={50}
               duration={500}
            className=" list-none cursor-pointer a md:mt-0 mt-1">Packages</Link>
            <Link
                 to="contact"
                 spy={true}
                 smooth={true}
                 offset={50}
                 duration={500}
            className=" list-none cursor-pointer a md:mt-0 mt-1">Contact</Link>
          </div>
        </div>
        <div className=" bg-[#dddddd] h-[1px]"></div>
        <div className=" md:flex items-center justify-between">
          <p>© 2024 Eventful.uae All rights reserved</p>
          <div className=" flex items-center gap-4 md:mt-0 mt-3">
            <a href="https://www.instagram.com/eventful.uae/"><img src={img3} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
