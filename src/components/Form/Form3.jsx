import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addForm2data } from "../../store/dataSlice";
import Modal from "@mui/material/Modal";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Form3 = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { step2 } = useSelector((state) => state.register.form);
  const [name, setName] = useState(step2.name || "");
  const [email, setEmail] = useState(step2.email || "");
  const [message, setMessage] = useState(step2.message || "");
  const [dates, setDates] = useState(step2.dates ? new Date(step2.dates) : null);
  const [number, setNumber] = useState(step2.number || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onclick = (e) => {
    e.preventDefault();
    const data = {
      name: name || step2?.name,
      email: email || step2?.email,
      message: message || step2?.message,
      dates: dates ? formatDate(dates) : null,
      number: number || step2?.number,
    };
    dispatch(addForm2data(data));
    navigate("/reg/review");
  };

  const onModalChange = (newValue) => {
    setDates(newValue);
    handleClose()
  };

  const formatDate = (date) => {
    if (!date || isNaN(date.getTime())) {
      return "dd/mm/yyyy";
    }
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
  };

  return (
    <div className="md:w-[60%] mx-auto bg-[#161C27] h-full pb-12 md:px-24 px-4 rounded-md">
      <h1 className="md:text-[32px] text-[24px] font-bold text-center md:pt-12 pt-7">
        Event Planning Registration
      </h1>
      <p className="md:text-[16px] text-[12px] text-[#C5C5C5] font-normal text-center mt-2">
        Simplify Your Event Arrangements with Us
      </p>
      <div className="flex items-center gap-4 mt-8 mx-[17rem]">
        <div className="bg-[#FFEDA4] h-[5px] rounded-full w-full"></div>
        <div className="bg-[#FFEDA4] h-[5px] rounded-full w-full"></div>
      </div>

      <form onSubmit={onclick} className="flex flex-col gap-3 mt-6">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="flex flex-col gap-2 w-full">
            <label>Full Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              className="bg-[#0C0F16] py-4 px-6"
              type="name"
              placeholder={step2?.name || "User Name"}
              value={name}
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label>Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#0C0F16] py-4 px-6"
              type="email"
              placeholder={step2?.email || "Enter Email Address"}
              value={email}
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label>Contact Number</label>
          <input
            onChange={(e) => setNumber(e.target.value)}
            className="bg-[#0C0F16] py-4 px-6 w-full"
            type="number"
            placeholder={step2?.number || "Enter Contact Number"}
            value={number}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Event Date</label>
          <input
            className="bg-[#0C0F16] py-4 px-6 w-full"
            readOnly
            value={formatDate(dates)}
            onClick={handleOpen}
            required
          />

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="flex flex-col items-center justify-center h-screen">
            <div className='  bg-black '>
              <h1 className=" text-white text-center my-3 border-b-[1px] w-full border-[#454343]">Select Date</h1>
              <Calendar
                className='bg-black border-none'
                onChange={onModalChange}
                value={dates}
              />
            </div>
            </div>
         
          </Modal>
        </div>
        <div className="flex flex-col gap-2">
          <label>Additional Comments</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            className="bg-[#0C0F16] py-3 px-7 w-full rounded-md"
            placeholder={step2?.message || "Write here ..."}
            rows={4}
            value={message}
            required
          ></textarea>
        </div>

        <div className="flex items-center gap-3 mt-8">
          <Link
            to="/form"
            className="py-3 w-full text-center rounded-md border-[#ddd] border-[2px]"
          >
            Go Back
          </Link>
          <button
            type="submit"
            className="py-3 w-full rounded-md bg-[#FFEDA4] text-black text-center"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form3;
