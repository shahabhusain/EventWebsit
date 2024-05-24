import React, { useState } from "react";
import arr from "../../assets/Right.png";
import main from '../../assets/Check.png'
import { Modal } from "@mui/material";
import { Link } from "react-router-dom";
const Reviews = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <h1 className=" text-[33px] font-bold text-center mt-12">Review</h1>
      <div className=" flex flex-col md:flex-row gap-12 md:w-[80%] w-[90%] mx-auto mt-12">
        <div className="">
          <div className="bg-[#161C27] flex flex-col md:flex-row gap-4  md:gap-24 justify-center py-5 md:px-12 px-4 rounded-2xl ">
            <div className=" flex flex-col gap-4">
              <h1 className=" flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                Full Name{" "}
                <span className=" text-[17px] font-medium text-white">
                  Ismail Nisar
                </span>{" "}
              </h1>
              <h1 className=" flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                E-mail Address{" "}
                <span className=" text-[17px] font-medium text-white">
                  Ismail123098@gmail.com
                </span>{" "}
              </h1>
              <h1 className=" flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                contact number{" "}
                <span className=" text-[17px] font-medium text-white">
                  (319) 555-0115
                </span>{" "}
              </h1>
              <h1 className=" flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                AdditionaL comment{" "}
                <span className=" text-[17px] font-medium max-w-[355px] text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim
                </span>{" "}
              </h1>
            </div>
            <div className=" md:h-[400px] w-[2px] bg-[#161C27]"></div>
            <div className=" flex flex-col gap-4">
              <h1 className=" flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                Event Type{" "}
                <span className=" text-[17px] font-medium text-white">
                  Light up signage
                </span>{" "}
              </h1>
              <h1 className=" flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                Event Category{" "}
                <span className=" text-[17px] font-medium text-white">
                  Balloon arch
                </span>{" "}
              </h1>
              <h1 className=" flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                Contact Number{" "}
                <span className=" text-[17px] font-medium text-white">
                  (319) 555-0115
                </span>{" "}
              </h1>
              <h1 className=" flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                Event Date{" "}
                <span className=" text-[17px] font-medium text-white">
                  12/2/2024
                </span>{" "}
              </h1>
              <h1 className=" flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                Selected Plan{" "}
                <span className=" text-[17px] font-medium text-white">
                  Dia Mond
                </span>{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-[#161C27] py-12 rounded-2xl w-[fit] px-6 flex flex-col gap-3 ">
          <div className=" border-[1px] border-[#616161] py-3 px-4 rounded-xl flex flex-col gap-4 ">
            <h1 className="text-[#C5C5C5] flex items-center justify-between">
              Item <img src={arr} alt="" />
            </h1>
            <div className=" md:w-[300px]  h-[1px] bg-white"></div>
            <h1 className="text-[#C5C5C5] flex items-center justify-between">
              Light up signage<span className=" text-white">2000AED</span>
            </h1>
            <h1 className="text-[#C5C5C5] flex items-center justify-between">
              Balloon arch<span className=" text-white">2000AED</span>
            </h1>
            <h1 className="text-[#C5C5C5] flex items-center justify-between">
              Balloon arch<span className=" text-white">2000AED</span>
            </h1>
            <h1 className="text-[#C5C5C5] flex items-center justify-between">
              Backdrop<span className=" text-white">2000AED</span>
            </h1>
          </div>
          <div className=" border-[1px] border-[#616161] py-3 px-4 rounded-xl">
            <h1 className="text-[#C5C5C5] flex items-center justify-between">
              package Prise<span className=" text-white">2500AED</span>
            </h1>
          </div>
          <div className="bg-black py-3 px-4 rounded-xl">
            <h1 className="text-[#C5C5C5] flex items-center justify-between">
              total<span className=" text-white">2500AED</span>
            </h1>
          </div>
          <button
            onClick={handleOpen}
            className=" bg-[#FFEDA4] text-black py-3 px-6 rounded-xl w-full"
          >
            Confirm
          </button>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="md:w-[40%] w-[90%] mx-auto bg-[#1b222e] md:px-24 px-4 py-16 rounded-md flex flex-col items-center justify-center mt-36">
          <img src={main} alt="" />
          <h2 className="text-[24px] font-bold text-center mb-4">
            Registration Successful!
          </h2>
          <p>Your Event Registration is Successfully Completed!</p>
          <Link to="/login"
            
            className="py-3 px-6 mt-4 rounded-md bg-[#FFEDA4] text-black w-full text-center"
          >
            Done
          </Link>
        </div>
      </Modal>
    </div>
  );
};

export default Reviews;
