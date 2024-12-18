import React from 'react'
import over from '../assets/book.png'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
const Book = () => {
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
    className='md:flex items-center gap-16 md:w-[80%] w-[95%] mx-auto mt-24 bg-[#1b222e] py-6 md:px-12 px-4 rounded-md '>
    
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={FadeInUpAnimation}
    className=' md:w-1/2 flex flex-col gap-4'>
       <motion.h1 variants={FadeInUpAnimation} className=' text-[46px] font-[700]'><span className=' text-[#FFEDA4]'>Book</span> Now</motion.h1>
       <motion.div variants={FadeInUpAnimation} className=' bg-[#FFEDA4] h-[3px] mr-[402px]'></motion.div>
       <motion.p variants={FadeInUpAnimation} className=' text-[#C5C5C5] text-[14px] font-[400]'>Ready to bring your vision to life? Book your event with us today to begin planning an unforgettable experience. At Eventful, every detail truly matters, and our dedicated team is committed to ensuring your celebration is a cherished memory for you and your guests.</motion.p>
       <Link to="/form" variants={FadeInUpAnimation} className=' bg-[#FFEDA4] text-black py-3 px-6 w-fit rounded-md b'>Book Now</Link>
    </motion.div>

    <img className=' md:w-1/2 md:mt-0 mt-5' src={over} alt="" />
</motion.div>
  )
}

export default Book