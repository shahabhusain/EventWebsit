import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Modal } from "@mui/material";
import { db } from "../../Config/Firebase";
import { collection, addDoc } from "firebase/firestore";
import arr from "../../assets/Right.png";
import arr1 from "../../assets/arr1.png";
import main from "../../assets/Check.png";
import { useNavigate } from "react-router-dom";
import { Loader } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const Reviews = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [active, setActive] = useState(false);

  const formState = useSelector((state) => state.register.form);
  const packageDetails = useSelector(
    (state) => state.register?.form?.selectedPackage
  );

  const step1 = formState?.step1 || {};
  const step2 = formState?.step2 || {};
  const navigate = useNavigate();

  const totalValue = step1.items
    ? step1.items.reduce((total, item) => {
        const subtitleValue = parseFloat(item.subtitle) || 0;
        const titleValue = parseInt(item.title) || 0;
        return total + subtitleValue + titleValue;
      }, 0)
    : 0;

  const packagePrice = parseFloat(formState?.selectedPackage?.price) || 0;
  const totalWithPackage = totalValue + packagePrice;

  const formattedDate = step2?.dates
    ? new Date(step2.dates).toLocaleDateString()
    : null;

  const handleConfirm = async () => {
    setActive(true);
    try {
      const registrationData = {
        step1: {
          ...step1,
          package: packageDetails?.price,
          packageName: packageDetails?.name,
        },
        step2,
        totalValue: totalWithPackage,
        createdAt: new Date(),
      };

      await addDoc(collection(db, "registrations"), registrationData);

      handleOpen();
      localStorage.clear();
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setActive(false);
    }
  };

  // State for dropdown visibility
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [isVisible3, setIsVisible3] = useState(false);

  // Function to toggle dropdown visibility
  const toggleVisibility = () => {
    setIsVisible((prev) => {
      setIsVisible1(false); // Close the other dropdown
      return !prev;
    });
  };

  const toggleVisibility1 = () => {
    setIsVisible1((prev) => {
      setIsVisible(false); // Close the other dropdown
      return !prev;
    });
  };

  const toggleVisibility2 = () => {
    setIsVisible2((prev) => {
      setIsVisible3(false); // Close the other dropdown
      return !prev;
    });
  };

  const toggleVisibility3 = () => {
    setIsVisible3((prev) => {
      setIsVisible2(false); // Close the other dropdown
      return !prev;
    });
  };

  // Reset dropdown states when unmounting or navigating away
  // useEffect(() => {
  //   return () => {
  //     setIsVisible(false);
  //     setIsVisible1(true);
  //     setIsVisible2(true);
  //     setIsVisible3(false);
  //   };
  // }, []);

  return (
    <div className="pb-12 w-full">
      <h1 className="text-[33px] font-bold text-center mt-12">Review</h1>
      <div className="flex flex-col md:flex-row gap-6 w-[80%] mx-auto">
        {/* Left Section */}
        <div className="md:w-[60%]">
          <div className="md:text-start text-center flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              {/* Basic Info Section */}
              <div  className="bg-[#161C27] flex gap-24 py-5 px-8 rounded-2xl">
                <div  className="flex flex-col gap-4 w-[100vh]">
                  <h5 onClick={toggleVisibility2} className="text-white text-[15px] cursor-pointer font-medium flex items-center justify-between">
                    {isVisible2 ? (
                      <img
                        className="cursor-pointer"
                        src={arr}
                        alt=""
                      />
                    ) : (
                      <img
                        className="cursor-pointer"
                        src={arr1}
                        alt=""
                      />
                    )}
                  </h5>
                  {isVisible2 && (
                    <>
                      <h5 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                        Enter Full Name
                        <span className="text-[17px] font-medium text-white">
                          {step2.name || null}
                        </span>
                      </h5>
                      <h5 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                        E-mail
                        <span className="text-[17px] font-medium text-white">
                          {step2.email || null}
                        </span>
                      </h5>
                      <h5 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                        Contact Number
                        <span className="text-[17px] font-medium text-white">
                          +{step2.number || null}
                        </span>
                      </h5>
                      <h5 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px] ">
                        Additional Comment
                        <span className="text-[17px] font-medium text-white">
                          {step2.message || null}
                        </span>
                      </h5>
                    </>
                  )}
                </div>
              </div>

              {/* Event Detail Section */}
              <div className="flex flex-col gap-4 bg-[#161C27] py-5 md:px-8 px-4 rounded-2xl">
                <h5 onClick={toggleVisibility3} className="text-white text-[15px] cursor-pointer font-medium flex items-center justify-between">
                  Detail
                  {isVisible3 ? (
                    <button>
                         <img
                      className="cursor-pointer"
                      src={arr}
                      alt=""
                    />
                    </button>
                  ) : (
                    <img
                      className="cursor-pointer"
                      src={arr1}
                      alt=""
                    />
                  )}
                </h5>
                {isVisible3 && (
                  <>
                    <h5 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                      Event Type
                      <span className="text-[17px] font-medium text-white">
                        {step1.type?.label || null}
                      </span>
                    </h5>
                    <h5 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                      Event Category
                      <span className="text-[17px] font-medium text-white">
                        {step1.plan?.label || null}
                      </span>
                    </h5>
                    <h5 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                      Event Date
                      <span className="text-[17px] font-medium text-white">
                        {formattedDate}
                      </span>
                    </h5>
                    <h5 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                      Selected Plan
                      <span className="text-[17px] font-medium text-white">
                        {formState?.selectedPackage?.name || null}
                      </span>
                    </h5>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-[40%]">
          <div className="bg-[#161C27] py-12 rounded-2xl px-6 flex flex-col gap-3">
            {/* Individual Price Section */}
            <div className="border-[1px] border-[#616161] py-3 px-4 rounded-xl flex flex-col gap-4">
              <h5 onClick={toggleVisibility} className="text-white text-[15px] cursor-pointer font-medium flex items-center justify-between">
                Add on Price
                <span className="flex items-center gap-2">
                <span>AED</span>{totalValue}
                  <img
                    src={isVisible ? arr : arr1}
                    alt=""
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </h5>
              {isVisible && (
                <div>
                  {step1.items &&
                    step1.items.map((item, index) => (
                      <h4
                        key={index}
                        className="text-[#C5C5C5] flex items-center justify-between"
                      >
                        {item.title}
                         <div>
                         <span className="text-white">AED</span>
                         <span className="text-white">{item.subtitle}</span>
                         </div>
                       
                      </h4>
                    ))}
                </div>
              )}
            </div>

            {/* Selected Package Section */}
            <div className="border-[1px] border-[#616161] py-3 px-4 rounded-xl flex flex-col gap-4">
              <h4 onClick={toggleVisibility1} className=" text-white cursor-pointer text-[15px] font-medium flex items-center justify-between">
                {formState?.selectedPackage?.name || null}
                <span className="">
                  <span className=" flex items-center gap-2">
                  <span>AED</span>
                    {formState?.selectedPackage?.price || null}
                    <img
                      src={isVisible1 ? arr : arr1}
                      alt=""
                      style={{ cursor: "pointer" }}
                    />
                  </span>
                </span>
              </h4>
              {isVisible1 && (
                <ul className="flex flex-col gap-3">
                  {formState?.selectedPackage?.features?.map((item, index) => (
                    <li className=" text-[#C5C5C5]" key={index}>{item}</li>
                  )) || null}
                </ul>
              )}
            </div>

            {/* Total Section */}
            <div className="bg-black py-3 px-4 rounded-xl mt-1">
              <h5 className="text-[#C5C5C5] flex items-center justify-between">
                Total
                <span className="text-white flex items-center gap-2">
                  <span>AED</span>
                  {totalWithPackage.toFixed(2)}
                </span>
              </h5>
            </div>

            {/* Confirm Button */}
            <button
              onClick={handleConfirm}
              className="bg-[#FFEDA4] font-medium text-black py-3 px-6 rounded-xl w-full mt-1"
            >
              {active ? <Loader /> : "CONFIRM"}
            </button>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="md:w-[40%] w-[90%] mx-auto bg-[#161C27] md:px-24 px-4 py-16 rounded-md flex flex-col items-center justify-center mt-36">
          <img src={main} alt="" />
          <h2 className="text-[24px] font-bold text-center mb-4">
            Registration Successful!
          </h2>
          <p>Your event registration is successfully submitted!</p>
          <button
            onClick={() => {
              handleClose();
              navigate("/");
            }}
            className="py-3 px-6 mt-4 rounded-md bg-[#FFEDA4] text-black w-full text-center"
          >
            Done
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Reviews;
