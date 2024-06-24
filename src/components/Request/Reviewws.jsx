import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../Config/Firebase";
import arr from "../../assets/Right.png";
import "rsuite/dist/rsuite.min.css";
import { Loader } from "rsuite";

const Reviewws = () => {
  const { id } = useParams();
  const [requestData, setRequestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [isSending, setIsSending] = useState(false);

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

  const handleComplete = async () => {
    setIsSending(true);
    try {
      const docRef = doc(db, "registrations", id);
      await updateDoc(docRef, { status: "completed" });
      alert("Request marked as completed");
      setRequestData((prev) => ({ ...prev, status: "completed" }));
      navigate("/admin/request");
    } catch (error) {
      console.error("Error updating document: ", error);
      alert("Failed to mark as completed");
    } finally {
      setIsSending(false);
    }
  };

  const handleDelete = async () => {
    setIsSending(true);
    try {
      const docRef = doc(db, "registrations", id);
      await deleteDoc(docRef);
      alert("Request deleted");
      navigate("/admin/request");
    } catch (error) {
      console.error("Error deleting document: ", error);
      alert("Failed to delete request");
    } finally {
      setIsSending(false);
    }
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

  const packagePrice = parseFloat(requestData.step1.package?.title) || 0;
  const totalWithPackage = totalValue + packagePrice;

  return (
    <div className="pt-8 h-screen">
      <h1 className="text-[33px] font-bold ml-[70px]">Review</h1>
      <div className="flex gap-12 w-[90%] mx-auto mt-12">
        <div className="w-[70%]">
          <div className="bg-[#161C27] flex gap-24 justify-center py-5 px-12 rounded-2xl">
            <div className="flex flex-col gap-4 mt-12">
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
                <span className="text-[15px] font-medium max-w-[355px] text-white">
                  {requestData.step2.message}
                </span>
              </h5>
            </div>
            <div className="h-[400px] w-[2px] bg-[#161C27]"></div>
            <div className="flex flex-col gap-4 mt-12">
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
                  {requestData.step1.package.label}
                </span>
              </h5>
            </div>
          </div>
        </div>
        <div className="bg-[#161C27] py-12 rounded-2xl w-[fit] px-6 flex flex-col gap-3">
          <div className="py-3 px-4 rounded-xl flex flex-col gap-4">
            <h5 className="text-[#C5C5C5] flex items-center justify-between">
              Item <img src={arr} alt="" />
            </h5>
            <div className="w-[300px] h-[1px] bg-[#6060609f]"></div>

            {requestData.step1.items.map((item, index) => (
              <h5 key={index} className="text-[#C5C5C5] flex items-center justify-between">
                {item.title}
                <span className="text-white">{item.subtitle}</span>
              </h5>
            ))}
          </div>
          <div>
            <h4 className="text-[#C5C5C5] flex items-center justify-between">
              {requestData.step1.package?.label || null}
              <span className="text-white">{requestData.step1.package?.title || null}</span>
            </h4>
          </div>
          <div className="bg-black py-3 px-4 rounded-xl">
            <h5 className="text-[#C5C5C5] flex items-center justify-between">
              Total
              <span className="text-white">{totalWithPackage.toFixed(2)}</span>
            </h5>
          </div>
          {requestData.status !== "completed" ? (
            <button
              className="bg-[#FFEDA4] text-black py-3 px-6 rounded-xl w-full mt-1 font-medium"
              onClick={handleComplete}
            >
              {isSending ? <Loader /> : "Completed"}
            </button>
          ) : (
            <div className="flex flex-col gap-2">
              <button
                className="bg-[#FFEDA4] text-black py-3 px-6 rounded-xl w-full mt-1 font-medium"
                onClick={handleDelete}
              >
                {isSending ? <Loader /> : "Delete"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviewws;
