import React from "react";
import over from "../assets/over.png";
import { motion } from "framer-motion";
const Over = () => {
  const FadeInUpAnimation = {
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
  return (
    <div
      className=" flex flex-col-reverse md:flex-row items-center gap-16 md:w-[80%] w-[90%] mx-auto mt-14"
      id="about"
    >
      <img className=" md:w-1/2" src={over} alt="" />
      <motion.div
        initial={{
          opacity: 0,
          x: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 2,
          },
        }}
      className=" md:w-1/2">

      <motion.div
       initial="hidden"
       whileInView="show"
       variants={FadeInUpAnimation}
      className="flex flex-col gap-4">
      <motion.h1 variants={FadeInUpAnimation} className=" text-[46px] font-[700]">
          <span className=" text-[#FFEDA4]">Our</span> Vision
        </motion.h1>
        <motion.div variants={FadeInUpAnimation} className=" bg-[#FFEDA4] h-[3px] md:mr-[422px] "></motion.div>
        <motion.p variants={FadeInUpAnimation} className=" text-[#C5C5C5] text-[14px] font-[400]">
          Welcome to our vibrant online space, where we specialize in curating
          exceptional events tailored to your desires. With a wide array of
          services spanning from conceptualization to execution, we offer a
          seamless experience for weddings, corporate functions, and special
          occasions. Our passionate team is committed to bringing your dreams to
          life, leaving you free to savor every moment of your event. Let us be
          your trusted partner in creating cherished memories that will be
          treasured for years to come. Read More...
        </motion.p>
        <motion.button variants={FadeInUpAnimation}  className=" bg-[#FFEDA4] text-black py-3 px-6 w-fit rounded-md">
          Learn More
        </motion.button>
      </motion.div>
      </motion.div>
    </div>
  );
};

export default Over;
