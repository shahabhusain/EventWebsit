import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Config/Firebase";

const Packages = () => {
  const [packages, setPackages] = useState([]);

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

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const packageSnapshot = await getDocs(collection(db, "packges"));
        const packageList = packageSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPackages(packageList);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };
    fetchPackages();
  }, []);

  return (
    <div className="bg-[#161C27] py-16 mt-20">
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 2 } }}
        className="md:w-[80%] w-[90%] mx-auto"
        id="packages"
      >
        <motion.div initial="hidden" whileInView="show" variants={FadeInUpAnimation}>
          <motion.div variants={FadeInUpAnimation}>
            <h1 className="text-[32px] font-[700] text-center">
              <span className="text-[#FFEDA4]">Our</span> Packages
            </h1>
            <div className="bg-[#FFEDA4] h-[2px] md:mx-[544px] mx-[155px] mt-3"></div>
          </motion.div>
          <motion.p
            variants={FadeInUpAnimation}
            className="text-center text-[16px] font-[400] text-[#C5C5C5] md:mx-[172px] mt-3"
          >
            Discover tailored packages for all your needs. From weddings to corporate events, find the perfect solution to simplify your planning process.
          </motion.p>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-12 mt-16 md:mx-12">
            {packages.map((pkg) => (
              <div key={pkg.id} className="hover:scale-[1.05] transition-all duration-300 ease-in-out">
                <motion.div variants={FadeInUpAnimation} className="bg-[#0C0F16] py-6 h-[250px] px-6 kha rounded-md overflow-y-auto">
                  <div className="flex items-center justify-between">
                    <h1 className="text-[#FFEDA4] md:text-[27px] text-[20px] font-bold">
                      {pkg.name}
                    </h1>
                    <h2 className="flex flex-col md:text-[24px] text-[12px] font-semibold">
                      {pkg.price}
                      <span className="md:text-[14px] text-[10px] font-normal">
                        ({pkg.discount})
                      </span>
                    </h2>
                  </div>
                  <form className="md:mt-0 mt-4">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <input className="accent-[#FFEDA4]" type="checkbox" checked readOnly />
                        <label>{feature}</label>
                        <br />
                      </div>
                    ))}
                    <br />
                  </form>
                </motion.div>
              </div>
            ))}

            <div className="hover:scale-[1.1] transition-all duration-300 ease-in-out ">
              <motion.div variants={FadeInUpAnimation} className="bg-[#0C0F16] py-6 px-6 h-[250px] rounded-md flex flex-col gap-4">
                <h1 className="text-[#FFEDA4] md:text-[27px] font-bold">CUSTOM</h1>
                <p>A package tailored to your needs</p>
                <p>
                  Let us know about your event, and a member of our team will get back to you within 24 hours.
                </p>
                <button className="hover:scale-[1.1] transition-all duration-200 ease-in-out bg-[#FFEDA4] text-black py-3 px-6 w-fit rounded-md">
                  Get a Quote
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Packages;
