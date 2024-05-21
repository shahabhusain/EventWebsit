import React from "react";
import img1 from "../assets/fra1.png";
import img2 from "../assets/fra2.png";
const Contact = () => {
  return (
    <div className=" md:flex items-center gap-16 w-[80%] mx-auto mt-32" id="contact">
      <div className=" md:w-1/2">
        <h1 className=" text-[32px] font-bold">Get in Touch with Us</h1>
        <p>Let's Connect and Bring Your Event Vision to Life</p>
        <div className=" flex flex-col gap-4 mt-8">
          <div className=" flex items-center rounded-[50px] gap-4 bg-[#1b222e] py-3 px-6">
            <img src={img1} alt="" />
            <p>+92 345 346 543</p>
          </div>
          <div className=" flex items-center rounded-[50px] gap-4 bg-[#1b222e] py-3 px-6">
            <img src={img2} alt="" />
            <p>eventfuLcae@gmail.com</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" md:w-1/2 md:mt-0 mt-5">
        <form className=" flex flex-col gap-4 ">
          <div className=" flex items-center gap-4 ">
            <input className=" w-full" type="text" placeholder="Full Name" />
            <input className=" w-full" type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email" />
          <input type="message" placeholder="Message" />
          <button className=" button bg-[#FFEDA4] text-black py-3 px-6 rounded-md">
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
