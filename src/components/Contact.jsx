import React, { useRef, useState } from "react";
import img1 from "../assets/fra1.png";
import img2 from "../assets/fra2.png";
import emailjs from "@emailjs/browser";
import { Loader } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const notify = () => toast("Email Send SuccessFully");
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm("service_ixifyhw", "template_7d9yeuf", form.current, {
        publicKey: "L-7wXdwK47FDl2W4m",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSending(false);
          notify(); // Notify user on successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSending(false);
          toast.error('Failed to send email'); // Notify user on failed submission
        }
      );
  };

  return (
    <div   id="contact">
       <div
     
     className="md:flex items-center gap-16 w-[80%] mx-auto pt-32"
   >
     <div className="md:w-1/2">
       <h1 className="text-[32px] font-bold">Get in touch with us today</h1>
       <div className="flex flex-col gap-4 mt-8">
         <div className="flex items-center rounded-[50px] gap-4 bg-[#1b222e] py-3 px-6">
           <img src={img1} alt="phone icon" />
           <p>+971 50 123 5694</p>
         </div>
         <div className="flex items-center rounded-[50px] gap-4 bg-[#1b222e] py-3 px-6">
           <img src={img2} alt="email icon" />
           <p>info@eventfuluae.com</p>
         </div>
       </div>
     </div>
     <div className="md:w-1/2 md:mt-0 mt-5">
       <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
         <input
           required
           className="rounded-md bg-[#1b222e] px-3 py-3"
           type="text"
           name="user_name"
           placeholder="Full Name"
           autoComplete="off" // Disable autocomplete
         />
         <input
           required
           className="rounded-md bg-[#1b222e] px-3 py-3"
           type="email"
           name="user_email"
           placeholder="Email"
           autoComplete="off" // Disable autocomplete
         />
         <textarea
           required
           rows={7}
           className="rounded-md bg-[#1b222e] px-3 py-3"
           name="message"
           placeholder="Message"
           autoComplete="off" // Disable autocomplete
         />
         <button
           type="submit"
           className="font-medium bg-[#FFEDA4] text-black  py-3 px-6 rounded-md"
         >
           {isSending ? <Loader /> : "Submit"}
         </button>
       </form>
     </div>
     <ToastContainer />
   </div>
    </div>
   
  );
};

export default Contact;
