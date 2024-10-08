import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Config/Firebase";
import { Loader } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const Logins = () => {
  const [isSending, setIsSending] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async (event) => {
    event.preventDefault();
    setIsSending(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin/request");
    } catch (error) {
      console.error("Error signing in:", error.message);
      alert(`Error signing in: ${error.message}`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mx-auto bg-[#000000] md:w-[40%] w-[90%] rounded-xl">
        <div className="md:px-12 px-4 py-12 flex flex-col gap-1 items-center">
          <img className="w-[133px]" src={logo} alt="Logo" />
          <h1 className="text-[33px] font-bold text-[#FFEDA4]">Welcome Back</h1>
          <p>Please log into your account</p>
          <form onSubmit={signIn} className="flex flex-col gap-2 w-full">
            <label>Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#0C0F16] py-3 px-6 w-full"
              type="email"
              placeholder="Enter email address"
              required
            />
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#0C0F16] py-3 px-6 w-full"
              type="password"
              placeholder="Enter your password"
              required
            />
            <button
              type="submit"
              className="bg-[#FFEDA4] py-3 px-6 text-black rounded-md mt-8 text-center"
            >
              {isSending ? <Loader /> : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Logins;
