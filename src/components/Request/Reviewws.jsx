import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Config/Firebase";
import arr from "../../assets/Right.png";
import "rsuite/dist/rsuite.min.css";
import { Loader } from "rsuite";

const Reviewws = () => {
  const { id } = useParams();
  const [requestData, setRequestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dropdownStates, setDropdownStates] = useState({
    isVisible: true,
    isVisible1: false,
    isVisible2: false,
    isVisible3: false,
  });

  useEffect(() => {
    const fetchRequestData = async () => {
      try {
        const docRef = doc(db, "registrations", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setRequestData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequestData();
  }, [id]);

  const toggleVisibility = (dropdown) => {
    setDropdownStates((prevState) => {
      const newState = {
        isVisible: false,
        isVisible1: false,
        isVisible2: false,
        isVisible3: false,
      };
      newState[dropdown] = !prevState[dropdown];
      return newState;
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader size="lg" content="Loading..." />
      </div>
    );
  }

  if (!requestData) {
    return <div>No data found for the given request ID.</div>;
  }

  const totalValue = requestData.step1.items.reduce((total, item) => {
    const subtitleValue = parseFloat(item.subtitle) || 0;
    const titleValue = parseInt(item.title) || 0;
    return total + subtitleValue + titleValue;
  }, 0);

  const packagePrice = parseFloat(requestData.step1.package) || 0;
  const totalWithPackage = totalValue + packagePrice;

  return (
    <div className="pt-8 h-screen ml-[70px] w-[90%] mx-auto">
      <h1 className="text-[33px] font-bold">Review</h1>
      <div className="flex justify-between gap-12">
        <div className="w-[60%]">
          <div className="mt-12">
            <div className="bg-[#161C27] py-5 px-12 rounded-2xl">
              <div className="flex flex-col gap-4">
                <h5 onClick={() => toggleVisibility("isVisible")} className="text-[#fff] cursor-pointer flex items-center justify-between font-medium text-[17px]">
                  Basic Info
                  <img
                    src={arr}
                    alt=""
          
                  />
                </h5>
                {dropdownStates.isVisible && (
                  <>
                    <h5 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                      Full Name
                      <span className="text-[15px] font-medium text-white">
                        {requestData.step2.name}
                      </span>
                    </h5>
                    <h5 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                      E-mail Address
                      <span className="text-[15px] font-medium text-white">
                        {requestData.step2.email}
                      </span>
                    </h5>
                    <h5 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                      Contact Number
                      <span className="text-[15px] font-medium text-white">
                        {requestData.step2.number}
                      </span>
                    </h5>
                    <h5 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                      Additional Comment
                      <span className="text-[15px] font-medium  text-white">
                        {requestData.step2.message}
                      </span>
                    </h5>
                  </>
                )}
              </div>
            </div>
            <div className="bg-[#161C27] py-5 px-12 rounded-2xl flex flex-col gap-4 mt-5">
              <h5  onClick={() => toggleVisibility("isVisible1")} className="text-[#fff] cursor-pointer flex items-center justify-between font-medium text-[17px]">
                Event Detail
                <img
                  src={arr}
                  alt=""
                 
                />
              </h5>
              {dropdownStates.isVisible1 && (
                <>
                  <h5 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                    Event Type
                    <span className="text-[15px] font-medium text-white">
                      {requestData.step1.type.label}
                    </span>
                  </h5>
                  <h5 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                    Event Category
                    <span className="text-[15px] font-medium text-white">
                      {requestData.step1.plan.label}
                    </span>
                  </h5>
                  <h5 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                    Event Date
                    <span className="text-[15px] font-medium text-white">
                      {new Date(requestData.step2.dates).toLocaleDateString()}
                    </span>
                  </h5>
                  <h5 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                    Selected Plan
                    <span className="text-[15px] font-medium text-white">
                      {requestData.step1.packageName}
                    </span>
                  </h5>
                </>
              )}
            </div>
          </div>
          <div className="bg-[#161C27] py-5 rounded-2xl px-12 flex flex-col gap-3 mt-5">
            <h5  onClick={() => toggleVisibility("isVisible2")} className="text-[#fff] cursor-pointer flex items-center  justify-between font-medium text-[17px]">
              Item
              <img
                src={arr}
                alt=""
               
              />
            </h5>
            {dropdownStates.isVisible2 && (
              <>
                <div className="py-3 px-4 rounded-xl flex flex-col gap-4 border-[1px] border-[#fff] mt-4">
                  {requestData.step1.items.map((item, index) => (
                    <h5 key={index} className="text-[#C5C5C5] flex items-center justify-between">
                      {item.title}
                      <span className="text-white">{item.subtitle}</span>
                    </h5>
                  ))}
                </div>
                <div className="border-[1px] border-[#fff] rounded-xl py-3 px-6">
                  <h4 className="text-[#C5C5C5] flex items-center justify-between">
                    {requestData.step1?.packageName || null}
                    <span className="text-white">{requestData.step1?.package || null}</span>
                  </h4>
                </div>
                <div className="bg-black py-3 px-4 rounded-xl">
                  <h5 className="text-[#C5C5C5] flex items-center justify-between">
                    Total
                    <span className="text-white">{totalWithPackage.toFixed(2)}</span>
                  </h5>
                </div>
              </>
            )}
          </div>
        </div>
        <ul className="w-[40%] bg-[#161C27] px-6 py-6 rounded-2xl mt-12 flex flex-col gap-4">
          <li className="mt-3 font-medium text-[17px]">Checklist</li>
          <div className="w-full h-[0.5px] bg-[#ffffff36] rounded-xl"></div>
          <li className="flex items-center justify-between">
            <span>Enquire and Confirm a date</span>
            <input className="accent-[#FFEDA4] h-[18px] w-[18px]" type="checkbox" />
          </li>
          <li className="flex items-center justify-between">
            <span>Theme Selection</span>
            <input className="accent-[#FFEDA4] h-[18px] w-[18px]" type="checkbox" />
          </li>
          <li className="flex items-center justify-between">
            <span>Package Selection</span>
            <input className="accent-[#FFEDA4] h-[18px] w-[18px]" type="checkbox" />
          </li>
          <div className="w-full h-[0.5px] bg-[#ffffff36] rounded-xl"></div>
          <li className="font-medium text-[17px]">Send Confirmation Pack</li>
          <div className="w-full h-[0.5px] bg-[#ffffff36] rounded-xl"></div>
          <li className="flex items-center justify-between">
            <span>Planing Updates Via Zoom</span>
            <input className="accent-[#FFEDA4] h-[18px] w-[18px]" type="checkbox" />
          </li>
          <li className="flex items-center justify-between checkbox">
            <span>Venue Assesment</span>
            <input className="accent-[#FFEDA4] h-[18px] w-[18px]" type="checkbox" />
          </li>
          <li className="flex items-center justify-between">
            <span>Agreement Sign</span>
            <input className="accent-[#FFEDA4] h-[18px] w-[18px]" type="checkbox" />
          </li>
          <li className="flex items-center justify-between">
            <span>50% Deposit Payment </span>
            <input className="accent-[#FFEDA4] h-[18px] w-[18px]" type="checkbox" />
          </li>
          <li className="flex items-center justify-between">
            <span>Final Payment</span>
            <input className="accent-[#FFEDA4] h-[18px] w-[18px]" type="checkbox" />
          </li>
          <li className="flex items-center justify-between">
            <span>Set up 5 hours prior </span>
            <input className="accent-[#FFEDA4] h-[18px] w-[18px]" type="checkbox" />
          </li>
          <li className="flex items-center justify-between">
            <span>Pack Away</span>
            <input className="accent-[#FFEDA4] h-[18px] w-[18px]" type="checkbox" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reviewws;
