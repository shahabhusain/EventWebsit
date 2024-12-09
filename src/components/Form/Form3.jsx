import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addForm2data } from "../../store/dataSlice";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
 // Importing DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Importing DatePicker CSS
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {

  parsePhoneNumberFromString,
} from "libphonenumber-js";

const Form3 = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { step2 } = useSelector((state) => state.register.form) || {}; // Provide default empty object

  const [name, setName] = useState(step2?.name || ""); 
  const [email, setEmail] = useState(step2?.email || "");
  const [message, setMessage] = useState(step2?.message || "");
  const [dates, setDates] = useState(
    step2?.dates && !isNaN(new Date(step2.dates)) ? new Date(step2.dates) : null
  );
  
  const [number, setNumber] = useState(step2?.number || "");
  const [errors, setErrors] = useState({});
  console.log("date", dates);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isMeaningfulText = (text) => {
    const pattern = /[a-zA-Z]{3,}/;
    return pattern.test(text);
  };

  

  const isValidEmailDomain = (email) => {
    const emailDomain = email.split("@")[1];
    const domainPattern = /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    return domainPattern.test(emailDomain);
  };

  const isValidEmailPattern = (email) => {
    // Basic email pattern check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateForm = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      errors.name = "Name should only contain alphabetic characters and spaces";
    } else if (!isMeaningfulText(name)) {
      errors.name = "Name should be meaningful";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmailPattern(email)) {
      errors.email = "Email address is invalid";
    } else if (!isValidEmailDomain(email)) {
      errors.email = "Email domain is invalid";
    }

    if (!number.trim()) {
      errors.number = "Contact number is required";
    } else {
      const phoneNumber = parsePhoneNumberFromString(number, "PK");
      if (!phoneNumber || !phoneNumber.isValid()) {
        errors.number = "Contact number is invalid";
      }
    }

    if (!dates) {
      errors.dates = "Event date is required";
    }

    if (!message.trim()) {
      errors.message = "Additional comments are required";
    } else if (!isMeaningfulText(message)) {
      errors.message =
        "Additional comments should be meaningful and contain at least 3 alphabetic characters";
    } else if (message.length < 10) {
      errors.message =
        "Additional comments should be at least 10 characters long";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleEmailChange = (e) => {
    // Get the entered email value
    const email = e.target.value;
  
    // Check if the length of the email exceeds 20 characters
    if (email.length > 45) {
      // If yes, truncate the email to 20 characters
      setEmail(email.slice(0, 45));
    } else {
      // If not, update the email state with the entered value
      setEmail(email);
    }
  };

  const onclick = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const data = {
        name: name || step2?.name,
        email: email || step2?.email,
        message: message || step2?.message,
        dates: dates ? format(dates, "dd/MM/yyyy") : null, // Store date as timestamp
        number: number || step2?.number,
      };
      dispatch(addForm2data(data));
      navigate("/reg/review");
    }
  };

  return (
    <div className="md:w-[60%] mx-auto bg-[#161C27] h-screen pb-12 md:px-24 px-4 rounded-md">
      <h1 className="md:text-[32px] text-[24px] font-bold text-center md:pt-12 pt-7">
         <span className=" text-[#FFEDA4]">Event Planning</span> Registration
      </h1>
      <div className=" mt-4 mx-[17rem]">
        <div className="bg-[#FFEDA4] h-[3px] rounded-full w-full"></div>
      </div>

      <form onSubmit={onclick} className="flex flex-col gap-3 mt-6">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="flex flex-col gap-2 w-full">
            <label>Full Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              className="bg-[#0C0F16] py-4 px-6 rounded-md"
              type="name"
              placeholder={step2?.name || "Enter Full Name"}
              value={name}
              required
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label>Email Address</label>
            <input
              onChange={handleEmailChange}
              className="bg-[#0C0F16] py-4 px-6 rounded-md"
              type="email"
              placeholder={step2?.email || "Enter Email Address"}
              value={email}
              required
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label>Contact Number</label>
          <div className=" bg-[#0C0F16] py-3 px-6 rounded-md">
          <PhoneInput
  country={""}
  value={number}
  onChange={(phone) => setNumber(phone)}
  placeholder="05X-XXX-XXXX" // Custom placeholder
  containerClass="custom-phone-input"
  inputStyle={{
    width: "100%",
    backgroundColor: "#0C0F16",
    color: "white",
    border: "none",
  }}
  buttonStyle={{
    backgroundColor: "black",
    border: "none",
  }}
  dropdownStyle={{
    backgroundColor: "black",
    color: "white",
  }}
/>
          </div>
          {errors.number && (
            <span className="text-red-500">{errors.number}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label>Event Date</label>
          <DatePicker
            selected={dates}
            minDate={new Date()}
            onChange={(date) => setDates(date)}
            withPortal
            className="bg-[#0C0F16] py-4 px-6 w-full rounded-md"
            placeholderText="DD/MM/YYYY"
             dateFormat="DD/MM/YYYY"
          />
          {errors.dates && <span className="text-red-500">{errors.dates}</span>}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label>Comments</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            className="bg-[#0C0F16] py-3 px-3 w-full rounded-md"
            placeholder={step2?.message || "Write here..."}
            rows={4}
            value={message}
            required
          ></textarea>
          {errors.message && (
            <span className="text-red-500">{errors.message}</span>
          )}
        </div>

        <div className="flex items-center gap-3 mt-8">
          <Link
            to="/pack"
            className="py-3 w-full text-center rounded-md border-[#ddd] border-[2px] b1"
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
