import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Config/Firebase";
import search from "../../assets/Search.png";

const Requests = () => {
  const [registerData, setRegisterData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState("All");
  const [sortCriteria, setSortCriteria] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "registrations"));
        const data = [];
        querySnapshot.forEach((doc) => {
          const item = doc.data();
          if (item.createdAt && item.createdAt.toDate) {
            item.createdAt = item.createdAt.toDate();
          }
          data.push({ id: doc.id, ...item });
        });

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

  const handleButtonClick = (label) => {
    setOpen(label);
  };
  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };
  const sortData = (data) => {
    if (sortCriteria === "Request Date") {
      return data.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
    } else if (sortCriteria === "Event Date") {
      return data.sort(
        (a, b) => new Date(a.step2?.dates || 0) - new Date(b.step2?.dates || 0)
      );
    }
    return data;
  };
  const packageLabels = ["All", "Signature", "Deluxe", "Premium", "Custom"];

  // const filteredData = registerData.filter((item) => {
  //   const lowercaseName = item.step2?.name?.toLowerCase() || "";
  //   const lowercaseEmail = item.step2?.email?.toLowerCase() || "";
  //   const lowercasePhone = item.step2?.number?.toLowerCase() || "";
  //   const lowercaseRequestDate = item.createdAt
  //     ? item.createdAt.toLocaleDateString().toLowerCase()
  //     : "";
  //   const lowercasePackage = item.step1?.packageName || "";
  //   const searchTermLower = searchTerm.toLowerCase();
  //   console.log("lower", lowercasePackage);
  //   // Check if the item matches the search term and selected package label
  //   return (
  //     (lowercaseName.includes(searchTermLower) ||
  //       lowercaseEmail.includes(searchTermLower) ||
  //       lowercasePhone.includes(searchTermLower) ||
  //       lowercaseRequestDate.includes(searchTermLower)) &&
  //     (open === "All" || lowercasePackage === open)
  //   );
  // });

  const filteredData = sortData(
    registerData.filter((item) => {
      const lowercaseName = item.step2?.name?.toLowerCase() || "";
      const lowercaseEmail = item.step2?.email?.toLowerCase() || "";
      const lowercasePhone = item.step2?.number?.toLowerCase() || "";
      const lowercaseRequestDate = item.createdAt
        ? item.createdAt.toLocaleDateString().toLowerCase()
        : "";
      const lowercasePackage = item.step1?.packageName || "";
      const searchTermLower = searchTerm.toLowerCase();

      return (
        (lowercaseName.includes(searchTermLower) ||
          lowercaseEmail.includes(searchTermLower) ||
          lowercasePhone.includes(searchTermLower) ||
          lowercaseRequestDate.includes(searchTermLower)) &&
        (open === "All" || lowercasePackage === open)
      );
    })
  );
  console.log("filteredData", filteredData);

  return (
    <div className="mx-4">
      <h1 className="text-[33px] font-bold text-white mt-4">Requests</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {packageLabels.map((label) => (
            <button
              key={label}
              className={`${
                open === label
                  ? "bg-[#161C27] py-2 mt-6 px-6 rounded-md text-white"
                  : "border-[1px] border-[#161C27] py-2 mt-6 px-6 rounded-md text-[#61666e]"
              }`}
              onClick={() => handleButtonClick(label)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-6">
          <div className="">
            <div className="custom-select-container ">
              <select
                className="custom-select"
                value={sortCriteria}
                onChange={handleSortChange}
              >
                <option value="" disabled>
                  Sort by
                </option>
                <option value="Event Date">Event Date</option>
                <option value="Request Date">Request Date</option>
              </select>
            </div>
          </div>
          <div className="bg-[#161C27] py-2 px-6 rounded-md  flex items-center gap-3">
            <img src={search} alt="" />
            <input
              className="bg-transparent text-white"
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-8 gap-6 pl-6 py-2 bg-[#161C27] rounded-md">
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
              className="grid grid-cols-8 gap-6 bg-[#161C27] py-3 pl-6 rounded-md"
            >
              <h5 className="text-[13px] text-[#dddddd]">{item.step2?.name}</h5>
              <h5 className="text-[13px] text-[#dddddd]">
                {item.step2?.email}
              </h5>
              <h5 className="text-[13px] text-[#dddddd]">
                {item.step2?.number}
              </h5>
              <h5 className="text-[13px] text-[#dddddd]">
                {item.createdAt?.toLocaleDateString()}
              </h5>
              <h5 className="text-[13px] text-[#dddddd]">
                {item.step2?.dates
                  ? new Date(item.step2.dates).toLocaleDateString()
                  : ""}
              </h5>
              <h5 className="text-[13px] text-[#EDBD57] bg-[#EDBD571A] w-fit px-2">
                {item.step1?.packageName || "N/A"}
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
