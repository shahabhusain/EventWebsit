import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Config/Firebase";

const Requests = () => {
  const [registerData, setRegisterData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "registrations"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setRegisterData(data);
      } catch (error) {
        console.error("Error fetching registration data: ", error);
      }
    };

    fetchData();
  }, []);
  console.log("rgsiter data => ", registerData);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = (index) => {
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

  const filteredData = registerData
    .filter((item) => {
      const lowercaseName = item.step2.name
        ? item?.step2?.name.toLowerCase()
        : "";
      const lowercaseEmail = item.step2.email
        ? item?.step2?.email.toLowerCase()
        : "";
      const lowercasePhone = item.step2.number
        ? item?.step2?.number.toLowerCase()
        : "";
      const lowercaseRequestDate = item.step2.dates
        ? item?.step2?.dates.toLowerCase()
        : "";
      const lowercaseEventDate = item.step2.dates
        ? item?.step2?.dates.toLowerCase()
        : "";
      const lowercasePackage = item?.step1?.package
        ? item?.step1?.package?.label.toLowerCase()
        : "";
      const searchTermLower = searchTerm.toLowerCase();
      return (
        lowercaseName.includes(searchTermLower) ||
        lowercaseEmail.includes(searchTermLower) ||
        lowercasePhone.includes(searchTermLower) ||
        lowercaseRequestDate.includes(searchTermLower) ||
        lowercaseEventDate.includes(searchTermLower) ||
        lowercasePackage.includes(searchTermLower)
      );
    })
    .filter((item) => {
      if (open === 1) {
        return true;
      } else {
        const selectedButtonLabel = buttons.find((btn) => btn.id === open).label;
        return item.step1.package?.label === selectedButtonLabel;
      }
    });
  return (
    <div className="mx-4">
      <h1 className="text-[33px] font-bold text-white mt-4">Requests</h1>
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-4 mt-6">
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={() => handleClick(button.id)}
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
          placeholder="Search"
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
          <h1>Action</h1>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-8 gap-6 bg-[#161C27] py-3 pl-6"
            >
              <h1 className="text-[13px] text-[#dddddd]">{item.step2.name}</h1>
              <h1 className="text-[13px] text-[#dddddd]">{item.step2.email}</h1>
              <h1 className="text-[13px] text-[#dddddd]">
                {item.step2.number}
              </h1>
              <h1 className="text-[13px] text-[#dddddd]">{item.step2.dates}</h1>
              <h1 className="text-[13px] text-[#dddddd]">{item.step2.dates}</h1>
              <h1 className="text-[13px] text-[#EDBD57] bg-[#EDBD571A] w-fit px-2">
                {item.step1.package?.label}
              </h1>
              <h1 className="text-[13px] text-[#dddddd]">{item.totalValue}</h1>
              <Link
                to={`/admin/request/${item.id}`}
                className="text-[13px] text-[#FFEDA4]"
              >
                View Detail
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Requests;
