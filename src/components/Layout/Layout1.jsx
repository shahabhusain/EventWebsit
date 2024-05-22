import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Layout1 = () => {
  return (
    <div className=" flex justify-between w-full   h-screen">
      <SideBar />

     <div className=" bg-black ml-[270px] overflow-x-hidden w-[100vw] ">
     <div className="max-w-[1500px] mx-auto  w-full">
        <Outlet />
      </div>
     </div>
    </div>
  );
};

export default Layout1;
