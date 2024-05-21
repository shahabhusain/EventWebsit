import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className='w-[80%] pr-8 ml-[288px] mb-12'>
      <h1 className='text-[33px] font-bold text-white mt-4'>Requests</h1>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4 mt-6'>
          {buttons.map(button => (
            <button
              key={button.id}
              onClick={handleClick(button.id)}
              className={`${
                open === button.id ? "bg-[#161C27] rounded-md py-2 px-6 text-[12px]" : "  text-[12px] border-[1px] border-[#1e2635] py-2 px-6 rounded-md"
              } text-[#dddddd]`}
            >
              {button.label}
            </button>
          ))}
        </div>
        <input className='bg-[#161C27] py-2 px-6 mt-6' type="search" placeholder='search' />
      </div>
      <div className='flex items-center gap-16 mt-6'>
        <h1 className='text-white font-medium text-[14px] ml-[1rem]'>Name</h1>
        <h1 className='text-white font-medium text-[14px] ml-[2.5rem]'>Email Address</h1>
        <h1 className='text-white font-medium text-[14px]'>Phone Number</h1>
        <h1 className='text-white font-medium text-[14px]'>Request Date</h1>
        <h1 className='text-white font-medium text-[14px]'>Event Date</h1>
        <h1 className='text-white font-medium text-[14px]'>Packages</h1>
        <h1 className='text-white font-medium text-[14px]'>Price</h1>
      </div>
      <div className='flex flex-col gap-3 mt-6'>
        {requests.map((request, index) => (
          <div
            key={index}
            className='flex items-center justify-between bg-[#161C27] rounded-md py-4 px-6'
          >
            <h1 className=' text-[12px] text-[#dddddd]'>{request.name}</h1>
            <h1 className=' text-[12px] text-[#dddddd]'>{request.email}</h1>
            <h1 className=' text-[12px] text-[#dddddd]'>{request.phone}</h1>
            <h1 className=' text-[12px] text-[#dddddd]'>{request.requestDate}</h1>
            <h1 className=' text-[12px] text-[#dddddd]'>{request.eventDate}</h1>
            <button className='bg-[#EDBD571A] text-[#EDBD57] text-[12px]'>{request.package}</button>
            <h1 className=' text-[12px] text-[#dddddd]'>{request.price}</h1>
            <Link to="/admin/request/review12" className='text-[#FFEDA4] text-[12px]'>View Detail</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;
