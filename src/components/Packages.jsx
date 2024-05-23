import React from "react";
import { motion } from "framer-motion";
const Packages = () => {
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
   <div className=" bg-[#161C27] py-16 mt-20 ">
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
    className=" md:w-[80%] w-[90%] mx-auto" id="packages">
      <motion.div
       initial="hidden"
       whileInView="show"
       variants={FadeInUpAnimation}
      >
      <motion.div variants={FadeInUpAnimation}>
        <h1 className=" text-[32px] font-[700] text-center">
          <span className=" text-[#FFEDA4]">Our</span> Packages
        </h1>
        <div className=" bg-[#FFEDA4] h-[2px] md:mx-[544px] mx-[155px] mt-3"></div>
      </motion.div>
      <motion.p variants={FadeInUpAnimation} className=" text-center text-[16px] font-[400] text-[#C5C5C5] md:mx-[172px] mt-3">
        Discover tailored packages for all your needs. From weddings to
        corporate events, find the perfect solution to simplify your planning
        process.
      </motion.p>

     <div className=" grid md:grid-cols-2 grid-cols-1 gap-12 mt-16 mx-12">
   <div className="hover:scale-[1.1] transition-all duration-300 ease-in-out">
   <motion.div variants={FadeInUpAnimation} className=" bg-[#0C0F16] py-6 h-full px-6 rounded-md ">
        <div className=" flex items-center justify-between">
          <h1 className=" text-[#FFEDA4] text-[27px] font-bold">SIGNATURE</h1>
          <h2 className=" flex flex-col text-[24px] font-semibold">
            AED 2750
            <span className=" text-[14px] font-normal">(save AED 300)</span>
          </h2>
        </div>
        <form className="">
            <input className=" accent-[#FFEDA4]" type="checkbox" name="vehicle1" value="Bike" checked />
            <label for="vehicle1"> Digital invitation</label>
            <br />
            <input className=" accent-[#FFEDA4]" type="checkbox" name="vehicle2" value="Car" checked />
            <label for="vehicle2"> Backdrop themed to your event</label>
            <br />
            <input className=" accent-[#FFEDA4]" type="checkbox" name="vehicle3" value="Boat" checked />
            <label for="vehicle3"> Balloon arch themed to your event</label>
            <br />
            <br />
          </form>
      </motion.div>
   </div>

     <div className="hover:scale-[1.1] transition-all duration-300 ease-in-out">
     <motion.div variants={FadeInUpAnimation} className=" bg-[#0C0F16] py-6 px-6 rounded-md ">
        <div className=" flex items-center justify-between">
          <h1 className=" text-[#FFEDA4] text-[27px] font-bold">PREMIUM</h1>
          <h2 className=" flex flex-col text-[24px] font-semibold">
          AED 2750
            <span className=" text-[14px] font-normal"> (save AED 500)</span>
          </h2>
        </div>
        <form>
            <input className=" accent-[#FFEDA4]" type="checkbox" name="vehicle1" value="Bike" checked />
            <label for="vehicle1"> Digital invitation</label>
            <br />
            <input className=" accent-[#FFEDA4]" type="checkbox" name="vehicle2" value="Car" checked />
            <label for="vehicle2"> Backdrop themed to your event</label>
            <br />
            <input className=" accent-[#FFEDA4]" type="checkbox" name="vehicle3" value="Boat" checked />
            <label for="vehicle3"> Balloon arch themed to your event</label>
            <br />
            <input className=" accent-[#FFEDA4]" type="checkbox" name="vehicle3" value="Boat" checked  />
            <label for="vehicle3">  Cake stand</label>
            <br />
            <input className=" accent-[#FFEDA4]" type="checkbox" name="vehicle3" value="Boat" checked  />
            <label for="vehicle3">  x2 neon signage or light up letters / numbers</label>
            <br />
            <input className=" accent-[#FFEDA4]" type="checkbox" name="vehicle3" value="Boat" checked  />
            <label for="vehicle3">  Personalised welcome board</label>
            <br />
            <br />
          </form>
      </motion.div>
     </div>


      <div className="hover:scale-[1.1] transition-all duration-300 ease-in-out">
      <motion.div variants={FadeInUpAnimation} className=" bg-[#0C0F16] h-full py-6 px-6 rounded-md ">
        <div className=" flex items-center justify-between">
          <h1 className=" text-[#FFEDA4] text-[27px] font-bold">DELUXE</h1>
          <h2 className=" flex flex-col text-[24px] font-semibold">
          AED 2750
            <span className=" text-[14px] font-normal"> (save AED 500)</span>
          </h2>
        </div>
        <form>
            <input className=" accent-[#FFEDA4]" type="checkbox" name="vehicle1" value="Bike" checked />
            <label for="vehicle1"> Digital invitation</label>
            <br />
            <input type="checkbox" className=" accent-[#FFEDA4]" name="vehicle2" value="Car" checked />
            <label for="vehicle2"> Backdrop themed to your event</label>
            <br />
            <input className=" accent-[#FFEDA4]" type="checkbox" name="vehicle3" value="Boat" checked  />
            <label for="vehicle3"> Balloon arch themed to your event</label>
            <br />
            <br />
          </form>
      </motion.div>
      </div>

      <div className="hover:scale-[1.1] transition-all duration-300 ease-in-out">
      <motion.div variants={FadeInUpAnimation} className=" bg-[#0C0F16] py-6 px-6 rounded-md flex flex-col gap-4 ">
          <h1 className=" text-[#FFEDA4] text-[27px] font-bold">CUSTOM</h1>

         <p>A package tailored to your needs</p>
         <p>Let us know about your event, and a member of our team will get back to you within 24 hours. </p>
         <button className=' hover:scale-[1.1] transition-all duration-200 ease-in-out bg-[#FFEDA4] text-black py-3 px-6 w-fit rounded-md'>Get a Quote</button>
      </motion.div>
      </div>
     </div>

      </motion.div>
        </motion.div>
   </div>
  );
};

export default Packages;
