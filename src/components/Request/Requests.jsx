import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Config/Firebase";
import search from "../../assets/Search.png";
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
          const item = doc.data();
          if (item.createdAt && item.createdAt.toDate) {
            item.createdAt = item.createdAt.toDate(); // Parse Firestore Timestamp to Date
          }
          data.push({ id: doc.id, ...item });
        });

        // Sort data by createdAt in descending order
        const sortedData = data.sort(
          (a, b) => (b.createdAt || 0) - (a.createdAt || 0)
        );
        setRegisterData(sortedData);
      } catch (error) {
        console.error("Error fetching registration data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = (index) => {
    setOpen(index);
  };

  // Button data
  const buttons = [
    { id: 1, label: "All" },
    { id: 2, label: "Signature" },
    { id: 3, label: "Deluxe" },
    { id: 4, label: "Premium" },
    { id: 5, label: "Individual" },
    { id: 6, label: "Custom" },
  ];

  // Filter and sort data based on search term and selected package
  const filteredData = registerData
    .filter((item) => {
      const lowercaseName = item.step2.name
        ? item.step2.name.toLowerCase()
        : "";
      const lowercaseEmail = item.step2.email
        ? item.step2.email.toLowerCase()
        : "";
      const lowercasePhone = item.step2.number
        ? item.step2.number.toLowerCase()
        : "";
      const lowercaseRequestDate = item.createdAt
        ? item.createdAt.toLocaleDateString().toLowerCase()
        : "";
      const lowercasePackage = item.step1.package
        ? item.step1.package.label.toLowerCase()
        : "";
      const searchTermLower = searchTerm.toLowerCase();
      return (
        lowercaseName.includes(searchTermLower) ||
        lowercaseEmail.includes(searchTermLower) ||
        lowercasePhone.includes(searchTermLower) ||
        lowercaseRequestDate.includes(searchTermLower) ||
        lowercasePackage.includes(searchTermLower)
      );
    })
    .filter((item) => {
      if (open === 1) {
        return true;
      } else {
        const selectedButtonLabel = buttons.find(
          (btn) => btn.id === open
        ).label;
        return item.step1.package?.label === selectedButtonLabel;
      }
    });

  return (
    <div className="mx-4">
      <h1 className="text-[33px] font-bold text-white mt-4">Requests</h1>
      <div className="flex items-center justify-between">
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
        <div className=" bg-[#161C27] py-2 px-6 rounded-md mt-6 flex items-center gap-3">
          <img src={search} alt="" />
          <input
            className=" bg-transparent"
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-8 gap-6 pl-6 py-3 bg-[#161C27]">
          <h4>Name</h4>
          <h4>E-mail Address</h4>
          <h4>Phone Number</h4>
          <h4>Request Date</h4>
          <h4>Event Date</h4>
          <h4>Packages</h4>
          <h4>Price</h4>
          <h4>Action</h4>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-8 gap-6 bg-[#161C27] py-3 pl-6"
            >
              <h5 className="text-[13px] text-[#dddddd]">{item.step2.name}</h5>
              <h5 className="text-[13px] text-[#dddddd]">{item.step2.email}</h5>
              <h5 className="text-[13px] text-[#dddddd]">
                {item.step2.number}
              </h5>
              <h5 className="text-[13px] text-[#dddddd]">
                {item.createdAt.toLocaleDateString()}
              </h5>
              <h5 className="text-[13px] text-[#dddddd]">
                {item.createdAt.toLocaleDateString()}
              </h5>
              <h5 className="text-[13px] text-[#EDBD57] bg-[#EDBD571A] w-fit px-2">
                {item.step1.package?.label}
              </h5>
              <h5 className="text-[13px] text-[#dddddd]">{item.totalValue}</h5>
              <h5>
                <Link
                  to={`/admin/request/${item.id}`}
                  className="text-[13px] text-[#FFEDA4] hover:text-[#FFEDA4] hover:no-underline"
                >
                  View Detail
                </Link>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Requests;
