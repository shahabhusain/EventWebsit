import React, { useState } from "react";
import { Link } from "react-router-dom";

const Requests = () => {
  const rows = [
    { id: 1, name: "Cooper Kriston", email: "quasiah@gmail.com", phone: "(229) 555-0109", requestDate: "8 Sep, 2020", eventDate: "Jul 19, 2024", packageType: "Signature", price: "AED 60,000" },
    { id: 2, name: "Jane Doe", email: "janedoe@example.com", phone: "(123) 456-7890", requestDate: "12 Jan, 2021", eventDate: "Sep 22, 2024", packageType: "Deluxe", price: "AED 75,000" },
    { id: 2, name: "Jane Doe", email: "janedoe@example.com", phone: "(123) 456-7890", requestDate: "12 Jan, 2021", eventDate: "Sep 22, 2024", packageType: "Deluxe", price: "AED 75,000" },
    { id: 2, name: "Jane Doe", email: "janedoe@example.com", phone: "(123) 456-7890", requestDate: "12 Jan, 2021", eventDate: "Sep 22, 2024", packageType: "Deluxe", price: "AED 75,000" },
    { id: 2, name: "Jane Doe", email: "janedoe@example.com", phone: "(123) 456-7890", requestDate: "12 Jan, 2021", eventDate: "Sep 22, 2024", packageType: "Deluxe", price: "AED 75,000" },
    { id: 2, name: "Jane Doe", email: "janedoe@example.com", phone: "(123) 456-7890", requestDate: "12 Jan, 2021", eventDate: "Sep 22, 2024", packageType: "Deluxe", price: "AED 75,000" },
    { id: 2, name: "Jane Doe", email: "janedoe@example.com", phone: "(123) 456-7890", requestDate: "12 Jan, 2021", eventDate: "Sep 22, 2024", packageType: "Deluxe", price: "AED 75,000" },
    { id: 2, name: "Jane Doe", email: "janedoe@example.com", phone: "(123) 456-7890", requestDate: "12 Jan, 2021", eventDate: "Sep 22, 2024", packageType: "Deluxe", price: "AED 75,000" },
    { id: 2, name: "Jane Doe", email: "janedoe@example.com", phone: "(123) 456-7890", requestDate: "12 Jan, 2021", eventDate: "Sep 22, 2024", packageType: "Deluxe", price: "AED 75,000" },
    { id: 2, name: "Jane Doe", email: "janedoe@example.com", phone: "(123) 456-7890", requestDate: "12 Jan, 2021", eventDate: "Sep 22, 2024", packageType: "Deluxe", price: "AED 75,000" },
    { id: 2, name: "Jane Doe", email: "janedoe@example.com", phone: "(123) 456-7890", requestDate: "12 Jan, 2021", eventDate: "Sep 22, 2024", packageType: "Deluxe", price: "AED 75,000" },
    { id: 2, name: "Jane Doe", email: "janedoe@example.com", phone: "(123) 456-7890", requestDate: "12 Jan, 2021", eventDate: "Sep 22, 2024", packageType: "Deluxe", price: "AED 75,000" },
  ];

  const [open, setOpen] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = (index) => () => {
    setOpen(index);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const buttons = [
    { id: 1, label: "All" },
    { id: 2, label: "Signature" },
    { id: 3, label: "Deluxe" },
    { id: 4, label: "Premium" },
    { id: 5, label: "Individual" },
    { id: 6, label: "Custom" },
  ];

  const filteredRows = rows.filter((row) => {
    return (
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.phone.includes(searchTerm)
    );
  });

  return (
    <div className="mx-4">
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
                  : "text-[12px] border-[1px] border-[#1e2635] py-2 px-6 rounded-md"
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
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-8 gap-6 pl-6 py-3 bg-[#161C27]">
          <h1>Name</h1>
          <h1>E-mail Address</h1>
          <h1>Phone Number</h1>
          <h1>Request Date</h1>
          <h1>Event Date</h1>
          <h1>Packages</h1>
          <h1>Price</h1>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          {filteredRows.map((item) => (
            <div key={item.id} className="grid grid-cols-8 gap-6 bg-[#161C27] py-3 pl-6">
              <h1 className="text-[13px] text-[#dddddd]">{item.name}</h1>
              <h1 className="text-[13px] text-[#dddddd]">{item.email}</h1>
              <h1 className="text-[13px] text-[#dddddd]">{item.phone}</h1>
              <h1 className="text-[13px] text-[#dddddd]">{item.requestDate}</h1>
              <h1 className="text-[13px] text-[#dddddd]">{item.eventDate}</h1>
              <h1 className="text-[13px] text-[#EDBD57] bg-[#EDBD571A] w-fit">{item.packageType}</h1>
              <h1 className="text-[13px] text-[#dddddd]">{item.price}</h1>
              <Link to="/admin/request/review12" className="text-[13px] text-[#FFEDA4]">view detail</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Requests;
