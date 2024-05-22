import React, { useState } from "react";
import { Link } from "react-router-dom";

const Requests = () => {
  const [open, setOpen] = useState(1);

  const handleClick = (index) => () => {
    setOpen(index);
  };

  const buttons = [
    { id: 1, label: "All" },
    { id: 2, label: "Signature" },
    { id: 3, label: "Deluxe" },
    { id: 4, label: "Premium" },
    { id: 5, label: "Individual" },
    { id: 6, label: "Custom" },
  ];

  const requests = [
    {
      name: "Cooper, Kristin",
      email: "quasiah@gmail.com",
      phone: "(229) 555-0109",
      requestDate: "8 Sep, 2020",
      eventDate: "Jul 19, 2024",
      package: "Signature",
      price: "AED 60,000",
    },

    {
      name: "Cooper, Kristin",
      email: "quasiah@gmail.com",
      phone: "(229) 555-0109",
      requestDate: "8 Sep, 2020",
      eventDate: "Jul 19, 2024",
      package: "Signature",
      price: "AED 60,000",
    },

    {
      name: "Cooper, Kristin",
      email: "quasiah@gmail.com",
      phone: "(229) 555-0109",
      requestDate: "8 Sep, 2020",
      eventDate: "Jul 19, 2024",
      package: "Signature",
      price: "AED 60,000",
    },

    {
      name: "Cooper, Kristin",
      email: "quasiah@gmail.com",
      phone: "(229) 555-0109",
      requestDate: "8 Sep, 2020",
      eventDate: "Jul 19, 2024",
      package: "Signature",
      price: "AED 60,000",
    },

    {
      name: "Cooper, Kristin",
      email: "quasiah@gmail.com",
      phone: "(229) 555-0109",
      requestDate: "8 Sep, 2020",
      eventDate: "Jul 19, 2024",
      package: "Signature",
      price: "AED 60,000",
    },

    {
      name: "Cooper, Kristin",
      email: "quasiah@gmail.com",
      phone: "(229) 555-0109",
      requestDate: "8 Sep, 2020",
      eventDate: "Jul 19, 2024",
      package: "Signature",
      price: "AED 60,000",
    },

    
    // Add more request objects as needed
  ];

  return (
    <div className=" w-[77%] ml-[288px]">
      <h1 className="text-[33px] font-bold text-white mt-4">Requests</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 mt-6">
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={handleClick(button.id)}
              className={`${
                open === button.id
                  ? "bg-[#161C27] rounded-md py-2 px-6 text-[12px]"
                  : "  text-[12px] border-[1px] border-[#1e2635] py-2 px-6 rounded-md"
              } text-[#dddddd]`}
            >
              {button.label}
            </button>
          ))}
        </div>
        <input
          className="bg-[#161C27] py-2 px-6 mt-6"
          type="search"
          placeholder="search"
        />
      </div>
      <table className="w-full">
  <thead>
    <tr className="grid grid-cols-8 items-center gap-x-5 mt-6">
      <th className="text-white font-medium text-[14px]">Name</th>
      <th className="text-white font-medium text-[14px]">Email Address</th>
      <th className="text-white font-medium text-[14px]">Phone Number</th>
      <th className="text-white font-medium text-[14px]">Request Date</th>
      <th className="text-white font-medium text-[14px]">Event Date</th>
      <th className="text-white font-medium text-[14px]">Packages</th>
      <th className="text-white font-medium text-[14px]">Price</th>
      <th className="text-white font-medium text-[14px]">Actions</th>
    </tr>
  </thead>
  <tbody>
    {requests.map((request, index) => (
      <tr key={index} className="grid grid-cols-8 gap-x-[4rem] bg-[#161C27] rounded-md py-4 px-6 mt-6">
        <td className="text-[12px] text-[#dddddd]">{request.name}</td>
        <td className="text-[12px] text-[#dddddd]">{request.email}</td>
        <td className="text-[12px] text-[#dddddd]">{request.phone}</td>
        <td className="text-[12px] text-[#dddddd]">{request.requestDate}</td>
        <td className="text-[12px] text-[#dddddd]">{request.eventDate}</td>
        <td className="bg-[#EDBD571A] text-[#EDBD57] text-[12px] w-fit">{request.package}</td>
        <td className="text-[12px] text-[#dddddd]">{request.price}</td>
        <td>
          <Link to="/admin/request/review12" className="text-[#FFEDA4] text-[12px]">
            View Detail
          </Link>
        </td>
      </tr>
    ))}
  </tbody>
</table>



    </div>
  );
};

export default Requests;
