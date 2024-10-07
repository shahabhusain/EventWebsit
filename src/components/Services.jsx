import React from "react";
import img1 from "../assets/img11.png";
import img2 from "../assets/img22.png";
import img3 from "../assets/img33.png";
import { motion } from "framer-motion";
const Services = () => {
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
  const serviceItem = [
    {
      img: img1,
      title: "PLANNING",
      subtitle:
        "From start to finish, our planning experts handle all the details, creating a seamless experience tailored to your vision.",
    },
    {
      img: img2,
      title: "TRANSPORTATION",
      subtitle:
        "Count on us for the safe and timely transportation of all your event materials, so you can focus on the big day.",
    },
    {
      img: img3,
      title: "SET UP & PACK AWAY",
      subtitle:
        "We take care of both setting up and packing away, ensuring your event space is perfectly prepared and efficiently cleared without any hassle.",
    },
  ];
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
      className=" bg-[#1b222e] py-12"
      id="service"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={FadeInUpAnimation}
        className=" md:w-[80%] w-[95%] mx-auto  flex flex-col gap-2"
      >
        <motion.div variants={FadeInUpAnimation}>
          <h1 className=" text-[32px] font-[700] text-center">
            <span className=" text-[#FFEDA4]">Our</span> Services
          </h1>
          <div className=" bg-[#FFEDA4] h-[2px] md:mx-[544px] mx-[122px] mt-3"></div>
        </motion.div>
        <motion.p
          variants={FadeInUpAnimation}
          className=" text-center text-[16px] font-[400] text-[#C5C5C5] md:mx-[172px] mt-3"
        >
         Explore our full range of services designed to ensure every aspect of your event is managed with care and precision.
        </motion.p>

        <div className=" md:flex block gap-12 mt-12 ">
          {serviceItem.map((item) => (
            <motion.div
              variants={FadeInUpAnimation}
              className=" bg-[#0C0F16] py-20 px-6 md:w-[400px] rounded-md flex flex-col items-center md:my-0 my-5 justify-center gap-4"
            >
              <img src={item.img} alt="" />
              <p className=" text-[20px] text-center font-[700]">
                {item.title}
              </p>
              <p className=" text-[#C5C5C5] text-[14px] font-[400] text-center">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
