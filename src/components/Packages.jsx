import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Config/Firebase";

const Packages = () => {
  const [packages, setPackages] = useState([]);

  const FadeInUpAnimation = useMemo(() => ({
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
  }), []);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const packageSnapshot = await getDocs(collection(db, "packges")); // Corrected typo
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
           Explore our tailored packages to find the perfect fit for your event, with a range of props and decor to suit every need.
          </motion.p>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-12 mt-16 md:mx-12">
            {packages.map(({ id, name, price, discount, features, title, desc }) => (
              <div key={id} className="hover:scale-[1.05] transition-all duration-300 ease-in-out">
                <motion.div
                  variants={FadeInUpAnimation}
                  className="bg-[#0C0F16] py-6 md:h-[270px] h-[300px] px-6 kha rounded-md overflow-y-auto"
                >
                  {name !== "Custom" ? (
                    <>
                      <div className="flex items-center justify-between">
                        <h1 className="text-[#FFEDA4] md:text-[27px] text-[20px] font-bold">
                          {name}
                        </h1>
                        <h2 className="flex flex-col md:text-[24px] text-[12px] md:leading-[1.8rem] leading-[1.2rem] font-semibold">
                          {price}
                          <span className="md:text-[14px] text-[10px] font-normal">
                            ({discount})
                          </span>
                        </h2>
                      </div>
                      <form className="md:mt-0 mt-4">
                        {features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <input className="accent-[#FFEDA4]" type="checkbox" checked readOnly />
                            <label>{feature}</label>
                          </div>
                        ))}
                      </form>
                    </>
                  ) : (
                    <>
                      <ul className="flex flex-col gap-2">
                      <h1 className="text-[#FFEDA4] md:text-[27px] text-[20px] font-bold">
                          {name}
                        </h1>
                        <li>{title}</li>
                        <li>{desc}</li>
                      </ul>
                      {/* <button className="bg-[#FFEDA4] text-black py-3 px-6 w-fit rounded-md mt-6">
                        Get Quotes
                      </button> */}
                    </>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Packages;
