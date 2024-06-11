import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const fadeInUpAnimation = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 1,
      },
    },
  };

  const navigate = useNavigate();

  return (
    <motion.div
      id="home"
      initial={{
        opacity: 0,
        y: 0,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className=""
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeInUpAnimation}
        className=" md:mt-40 md:pt-0 pt-40 "
      >
        <div className=" md:w-[45%] w-[90%] mx-auto flex flex-col gap-8">
          <motion.h1
            variants={fadeInUpAnimation}
            className=" xl:text-[46px] md:text-[36px] text-[27px] font-bold text-center"
          >
            <span className=" text-[#F6E9B9]">Unlock</span> Unforgettable
            Moments: Your{" "}
            <span className=" text-[#F6E9B9]">One-Stop Event</span> <br />{" "}
            Service Hub
          </motion.h1>
          <motion.p
            variants={fadeInUpAnimation}
            className=" text-center text-[#C5C5C5] text-[16px] font-normal"
          >
            Crafting unforgettable moments. From weddings to corporate events,
            we've got you covered. Let us handle the details while you enjoy the
            magic.
          </motion.p>
          <motion.div
            variants={fadeInUpAnimation}
            className=" flex items-center justify-center gap-4"
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className=" glow-on-hover hover:scale-[1.1] transition-all duration-200 font-bold  ease-in-out border-[#F6E9B9] py-3 px-6 rounded-md border-[1px] b1"
            >
              Contact Us
            </Link>
            <button
              onClick={() => navigate("/form")} // Corrected onClick handler
              className="hover:scale-[1.1] transition-all duration-200 ease-in-out bg-[#F6E9B9] font-bold py-3 px-6 rounded-md text-black"
            >
              Book Now
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
