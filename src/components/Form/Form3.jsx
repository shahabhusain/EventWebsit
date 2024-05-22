import React from "react";
import { Link } from "react-router-dom";

const Form3 = () => {
  return (
    <div className="w-[60%] mx-auto bg-[#1b222e] h-screen px-24 rounded-md">
      <h1 className=" text-[32px] font-bold text-center pt-12">
        Event Planning Registration
      </h1>
      <p className=" text-[16px] text-[#C5C5C5] font-normal text-center">
        Simplify Your Event Arrangements with Us
      </p>
      <div className=" flex items-center gap-4 mt-6 mx-32">
        <div className=" bg-[#FFEDA4] h-[3px] w-full"></div>
        <div className="bg-[#FFEDA4] h-[3px] w-full"></div>
      </div>

      <form className=" flex flex-col gap-3 mt-6">
        <div className=" flex items-center gap-3">
          <div className=" flex flex-col gap-2 w-full">
            <label>Full Name</label>
            <input
              className=" bg-[#0C0F16] py-3 px-6"
              type="name"
              placeholder="User Name"
            />
          </div>
          <div className=" flex flex-col gap-2 w-full">
            <label>Email Address</label>
            <input
              className=" bg-[#0C0F16] py-3 px-6"
              type="email"
              placeholder="Enter Email Address"
            />
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <label>Contact Number</label>
          <input
            className=" bg-[#0C0F16] py-3 px-6 w-full"
            type="text"
            placeholder="Enter Contact Number"
          />
        </div>
        <div className=" flex flex-col gap-2">
          <label>Event Date</label>
          <input className=" bg-[#0C0F16] py-3 px-6 w-full" type="date" />
        </div>
        <div className=" flex flex-col gap-2">
          <label>Additional Comments</label>
          <textarea
            className="bg-[#0C0F16] py-3 px-6 w-full rounded-md"
            placeholder="Write here ..."
            rows="4"
          ></textarea>
        </div>
      </form>
      <div className=" flex items-center gap-3 mt-4">
        <Link
          to="/form"
          className="py-3 w-full text-center rounded-md border-[#ddd] border-[2px]"
        >
          Go Back
        </Link>
        <Link
          to="/reg/review"
          className="py-3 w-full rounded-md bg-[#FFEDA4] text-black text-center"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Form3;
