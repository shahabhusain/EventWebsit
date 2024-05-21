// import React from "react";
// import img1 from "../assets/img1.png";
// import img2 from "../assets/img2.png";
// import img3 from "../assets/img3.png";
// import img4 from "../assets/img4.png";
// import img5 from "../assets/img5.png";
// import img6 from "../assets/img6.png";
// import { motion } from "framer-motion";
// const Hero = () => {
//     const fadeInUpAnimation = {
//     hidden: {
//       opacity: 0,
//       y: 100
//     },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         staggerChildren: 0.3,
//         duration: 1
//       }
//     }
//   };
//   return (
//     <motion.div
//     initial={{
//               opacity: 0,
//               y: 0
//             }}
//             animate={{
//               opacity: 1,
//               y: 0
//             }}
//     className="">
//       <div className=" mt-40 ">
//         <motion.div
//                 initial="hidden"
//         whileInView="show"
//         variants={fadeInUpAnimation}
//         className=" md:w-[55%] w-[90%] mx-auto flex flex-col gap-5">
//           <motion.h1 variants={fadeInUpAnimation} className=" xl:text-[46px] md:text-[36px] text-[27px] font-bold text-center">
//             <span className=" text-[#F6E9B9]">Unlock</span> Unforgettable
//             Moments: Your{" "}
//             <span className=" text-[#F6E9B9]">One-Stop Event</span> Service Hub
//           </motion.h1>
//           <motion.p variants={fadeInUpAnimation} className=" text-center text-[#C5C5C5] text-[16px] font-normal">
//             Crafting unforgettable moments. From weddings to corporate events,
//             we've got you covered. Let us handle the details while you enjoy the
//             magic.
//           </motion.p>
//           <motion.div variants={fadeInUpAnimation} className=" flex items-center justify-center gap-4">
//             <button className=" glow-on-hover hover:scale-[1.1] transition-all duration-200 ease-in-out border-[#F6E9B9] py-3 px-6 rounded-md border-[1px]">
//               Contact Us
//             </button>
//             <button className=" hover:scale-[1.1] transition-all duration-200 ease-in-out bg-[#F6E9B9] py-3 px-6 rounded-md text-black">
//               Book Now
//             </button>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           animate="show"
//           variants={fadeInUpAnimation}
//         className=" md:flex hidden relative mt-[-500px] ">
//           <motion.img variants={fadeInUpAnimation}
//             className="img absolute top-[14rem] left-[5rem]"
//             src={img1}
//             alt=""
//           />
//           <motion.img variants={fadeInUpAnimation} className="img absolute right-0 top-[42rem]" src={img3} alt="" />
//           <img className="img absolute  top-[42rem]" src={img6} alt="" />
//           <img
//             className="img absolute  left-[522px] top-[34rem] z-[51]"
//             src={img4}
//             alt=""
//           />
//           <motion.img variants={fadeInUpAnimation}
//             className="img absolute top-[20rem] left-[76rem] "
//             src={img5}
//             alt=""
//           />
//           <motion.img variants={fadeInUpAnimation}
//             className="img absolute top-[54rem] left-[44rem]"
//             src={img2}
//             alt=""
//           />
//           <motion.img variants={fadeInUpAnimation}
//             className="img absolute top-[37rem] left-[62rem]"
//             src={img2}
//             alt=""
//           />
        
//         </motion.div>
//         <div className=" back h-[500px] relative top-[37rem] opacity-[0.4]"></div>
//       </div>
//     </motion.div>
//   );
// };

// export default Hero;

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const fadeInUpAnimation = {
    hidden: {
      opacity: 0,
      y: 100
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 1
      }
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 0
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      className=""
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeInUpAnimation}
        className=" md:mt-40 md:pt-0 pt-40 "
      >
        <div className=" md:w-[45%] w-[90%] mx-auto flex flex-col gap-5">
          <motion.h1
            variants={fadeInUpAnimation}
            className=" xl:text-[46px] md:text-[36px] text-[27px] font-bold text-center"
          >
            <span className=" text-[#F6E9B9]">Unlock</span> Unforgettable Moments: Your{" "}
            <span className=" text-[#F6E9B9]">One-Stop Event</span> Service Hub
          </motion.h1>
          <motion.p
            variants={fadeInUpAnimation}
            className=" text-center text-[#C5C5C5] text-[16px] font-normal"
          >
            Crafting unforgettable moments. From weddings to corporate events, we've got you
            covered. Let us handle the details while you enjoy the magic.
          </motion.p>
          <motion.div variants={fadeInUpAnimation} className=" flex items-center justify-center gap-4">
            <button className=" glow-on-hover hover:scale-[1.1] transition-all duration-200 ease-in-out border-[#F6E9B9] py-3 px-6 rounded-md border-[1px]">
              Contact Us
            </button>
            <button className=" hover:scale-[1.1] transition-all duration-200 ease-in-out bg-[#F6E9B9] py-3 px-6 rounded-md text-black">
              Book Now
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
