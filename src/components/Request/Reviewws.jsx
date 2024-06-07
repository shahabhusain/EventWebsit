import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Config/Firebase";
import arr from "../../assets/Right.png";

const Reviewws = () => {
  const { id } = useParams();
  const [requestData, setRequestData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequestData = async () => {
      try {
        console.log(`Fetching data for request ID: ${id}`);
        const docRef = doc(db, "registrations", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!requestData) {
    return <div>No data found for the given request ID.</div>;
  }

  console.log("request Data", requestData)

  return (
    <div className="pt-8 h-screen">
      <h1 className="text-[33px] font-bold ml-[70px]">Review</h1>
      <div className="flex gap-12 w-[90%] mx-auto mt-12">
        <div className=" w-[70%]">
          <div className="bg-[#161C27] flex gap-24 justify-center py-5 px-12 rounded-2xl">
            <div className="flex flex-col gap-4 mt-12">
              <h1 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                Full Name
                <span className="text-[15px] font-medium text-white">
                  {requestData.step2.name}
                </span>
              </h1>
              <h1 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                E-mail Address
                <span className="text-[15px] font-medium text-white">
                  {requestData.step2.email}
                </span>
              </h1>
              <h1 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                Contact Number
                <span className="text-[15px] font-medium text-white">
                  {requestData.step2.number}
                </span>
              </h1>
              <h1 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                Additional Comment
                <span className="text-[15px] font-medium max-w-[355px] text-white">
                  {requestData.step2.message}
                </span>
              </h1>
            </div>
            <div className="h-[400px] w-[2px] bg-[#161C27]"></div>
            <div className="flex flex-col gap-4 mt-12">
              <h1 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                Event Type
                <span className="text-[15px] font-medium text-white">
                  {requestData.step1.type.label}
                </span>
              </h1>
              <h1 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                Event Category
                <span className="text-[15px] font-medium text-white">
                  {requestData.step1.plan.label}
                </span>
              </h1>
              <h1 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                Event Date
                <span className="text-[15px] font-medium text-white">
                  {requestData.step2.dates}
                </span>
              </h1>
              <h1 className="flex flex-col gap-1 text-[#C5C5C5] text-[14px]">
                Selected Plan
                <span className="text-[15px] font-medium text-white">
                  {requestData.step1.package.label}
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-[#161C27] py-12 rounded-2xl w-[fit] px-6 flex flex-col gap-3">
          <div className=" py-3 px-4 rounded-xl flex flex-col gap-4">
            <h1 className="text-[#C5C5C5] flex items-center justify-between">
              Item <img src={arr} alt="" />
            </h1>
            <div className="w-[300px] h-[1px] bg-[#6060609f]"></div>
          
         {requestData.step1.items.map((item)=>(
            <h1 className="text-[#C5C5C5] flex items-center justify-between">
            {item.title}
            <span className="text-white">
              {item.subtitle}
            </span>
          </h1>
         ))}
          
            
          </div>
          <div className="bg-black py-3 px-4 rounded-xl">
            <h1 className="text-[#C5C5C5] flex items-center justify-between">
              Total
              <span className="text-white">{requestData.totalValue}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviewws;
