import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "@mui/material";
import { db } from "../../Config/Firebase";
import { collection, addDoc } from "firebase/firestore";
import arr from "../../assets/Right.png";
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
  const step1 = formState?.step1 || {};
  const step2 = formState?.step2 || {};
  const navigate = useNavigate();

  // Calculate totalValue by iterating over step1.items and summing valid numeric values
  const totalValue = step1.items
    ? step1.items.reduce((total, item) => {
        // Parse subtitle and title as floats, defaulting to 0 if they are not valid numbers
        const subtitleValue = parseFloat(item.subtitle) || 0;
        const titleValue = parseInt(item.title) || 0;
        return total + subtitleValue + titleValue;
      }, 0)
    : 0;

  // Add package price to the totalValue
  const packagePrice = parseFloat(step1.package?.title) || 0;
  const totalWithPackage = totalValue + packagePrice;

  const formattedDate = step2?.dates
    ? new Date(step2.dates).toLocaleDateString()
    : null;

  const handleConfirm = async () => {
    setActive(true);
    try {
      const registrationData = {
        step1,
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
      setActive(false); // Reset active state after completion or error
    }
  };

  return (
    <div className="pb-12">
      <h1 className="text-[33px] font-bold text-center mt-12">Review</h1>
      <div className="flex flex-col md:flex-row gap-12 md:w-[80%] w-[90%] mx-auto mt-12">
        <div className="md:w-[60%] md:text-start text-center">
          <div className="bg-[#161C27] flex flex-col md:flex-row items-center gap-4 md:gap-24 justify-center py-5 md:px-8 px-4 rounded-2xl">
            <div className="flex flex-col gap-4">
              <h5 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                Full Name
                <span className="text-[17px] font-medium text-white">
                  {step2.name || null}
                </span>
              </h5>
              <h5 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                E-mail Address
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
              <h5 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                Additional Comment
                <span className="text-[17px] font-medium max-w-[355px] text-white">
                  {step2.message || null}
                </span>
              </h5>
            </div>
            <div className="md:h-[400px] w-[2px] bg-[#161C27]"></div>
            <div className="flex flex-col gap-4">
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
                  {step1.package?.label || null}
                </span>
              </h5>
            </div>
          </div>
        </div>
        <div className="bg-[#161C27] py-12 rounded-2xl md:w-[40%] px-6 flex flex-col gap-3">
          <div className="border-[1px] border-[#616161] py-3 px-4 rounded-xl flex flex-col gap-4">
            <h5 className="text-[#C5C5C5] flex items-center justify-between">
              Item <img src={arr} alt="" />
            </h5>
            <div className="w-full h-[1px] bg-white"></div>
            <div className="">
              {step1.items &&
                step1.items.map((item, index) => (
                  <h4
                    key={index}
                    className="text-[#C5C5C5] flex items-center justify-between"
                  >
                    {item.title}
                    <span className="text-white">{item.subtitle}</span>
                  </h4>
                ))}
            </div>
            <div>
              <h4 className="text-[#C5C5C5] flex items-center justify-between">
                {step1.package?.label || null}
                <span className="text-white">
                  {step1.package?.title || null}
                </span>
              </h4>
            </div>
          </div>
          <div className="bg-black py-3 px-4 rounded-xl mt-1">
            <h5 className="text-[#C5C5C5] flex items-center justify-between">
              Total
              <span className="text-white">{totalWithPackage.toFixed(2)}</span>
            </h5>
          </div>
          <button
            onClick={handleConfirm}
            className="bg-[#FFEDA4] text-black py-3 px-6 rounded-xl w-full mt-1"
          >
            {active ? <Loader /> : "Confirm"}
          </button>
        </div>
      </div>

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
          <p>Your Event Registration is Successfully Completed!</p>
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
