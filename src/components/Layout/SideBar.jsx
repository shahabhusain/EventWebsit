import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { auth } from "../../Config/Firebase";
import logo from "../../assets/logo.png";
import icon from "../../assets/icon2.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/im1.png";
import icon3 from "../../assets/im2.png";
import log from "../../assets/log.png";

const SideBar = () => {
  const [open, setOpen] = useState(1);
  const handleClick = (index) => () => {
    setOpen(index);
  };
  const [open1, setOpen1] = useState(false);
  const handleOpen = () => setOpen1(true);
  const handleClose = () => setOpen1(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    auth
      .signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error logging out:", error.message);
      });
  };

  return (
    <div className=" bg-[#161C27] px-3 w-[270px] fixed left-0 h-[100%]">
      <div className=" flex flex-col justify-between h-[95%]">
        <div className=" flex-col flex items-center">
          <img className=" mt-12" src={logo} alt="" />
          <div className=" flex flex-col gap-4 mt-24">
            <h5
              onClick={() => {
                handleClick(1)();
                navigate("/admin/request");
              }}
              className={` flex items-center justify-center gap-2 cursor-pointer ${
                open === 1
                  ? "bg-[#ffeda42d] py-3 px-16 rounded-md text-[#FFEDA4]"
                  : " text-center"
              }`}
            >
              {open === 1 ? (
                <>
                  <img src={icon1} alt="" />
                </>
              ) : (
                <>
                  <img src={icon} alt="" />
                </>
              )}
              Request
            </h5>
            <h5
              onClick={() => {
                handleClick(2)();
                navigate("/admin/packages");
              }}
              className={` flex items-center justify-center gap-2 cursor-pointer ${
                open === 2
                  ? "bg-[#ffeda42d] py-3 px-16 rounded-md text-[#FFEDA4] "
                  : " text-center"
              }`}
            >
              {open === 2 ? (
                <>
                  <img src={icon3} alt="" />
                </>
              ) : (
                <>
                  <img src={icon2} alt="" />
                </>
              )}
              Packages
            </h5>
          </div>
        </div>
        <button
          onClick={handleOpen}
          className=" bg-[#3745571A] py-3 px-6 rounded-md flex items-center justify-center gap-2 "
        >
          <img src={log} alt="" /> Log Out
        </button>
      </div>
      <div>
        <Modal
          open={open1}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className=" flex flex-col items-center justify-center h-screen">
            <div className=" bg-[#191f29] w-[20%] mx-auto flex flex-col items-center py-6 px-6 rounded-2xl gap-6 ">
              <h1 className="text-[22px] font-medium">Are You Sure</h1>
              <p>You are attempting to log out.</p>
              <div className=" flex items-center gap-3">
                <button
                  onClick={handleClose}
                  className=" py-3 px-6 rounded-md bg-[#161C27]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className=" py-3 px-6 rounded-md bg-[#FFEDA4] text-black"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default SideBar;
