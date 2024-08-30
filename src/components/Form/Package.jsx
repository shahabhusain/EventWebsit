import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedPackage, addForm1data } from "../../store/dataSlice";
import { db } from "../../Config/Firebase";
import Modal from "@mui/material/Modal";
import icon from "../../assets/icon.png";
import close from "../../assets/close.png";
import { ModalItem } from "../Data/data"; // Adjust this import as needed

const Package = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formOneState = useSelector((state) => state.register.form.step1);
  const [for1, setFor1] = useState(formOneState.plan || null);
  const [titleArray, setTitleArray] = useState(formOneState?.items || []);
  const [selectedItem, setSelectedItem] = useState(formOneState.type || {});
  const [open, setOpen] = useState(false);
  const [openItems, setOpenItems] = useState(
    Array(ModalItem.length).fill(false)
  );
  const [tempAddedItems, setTempAddedItems] = useState([]);
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const packageSnapshot = await getDocs(collection(db, "packges")); // Fixed typo
        const packageList = packageSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPackages(packageList);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };
    fetchPackages();
  }, []);

  useEffect(() => {
    const storedOpenItems = titleArray.map((item) => item.title);
    const newOpenItems = ModalItem.map((item) =>
      storedOpenItems.includes(item.title)
    );
    setOpenItems(newOpenItems);
  }, [titleArray]);

  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg.id === selectedPackage ? null : pkg.id);
    dispatch(addSelectedPackage(pkg));
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const handleGoBack = () => {
    // const updatedTitleArray = titleArray.filter(
    //   (item) =>
    //     !tempAddedItems.some((tempItem) => tempItem.title === item.title)
    // );
    // setTitleArray(updatedTitleArray);
    // setTempAddedItems([]);
    setOpen(false);
  };

  const storeInputs = (title, subtitle) => {
    const updatedData = titleArray.some((item) => item.title === title)
      ? titleArray.filter((item) => item.title !== title)
      : [...titleArray, { title, subtitle }];
    setTitleArray(updatedData);
    setTempAddedItems(updatedData);

    const data = {
      type: selectedItem,
      plan: for1,
      items: updatedData,
    };

    dispatch(addForm1data(data));
    localStorage.setItem("type", selectedItem);
    localStorage.setItem("for1", for1);
    localStorage.setItem("titleArray", JSON.stringify(updatedData));
  };

  console.log("titleArray", titleArray);

  const removeItem = (title) => {
    const updatedArray = titleArray.filter((item) => item.title !== title);
    setTitleArray(updatedArray);

    const data = {
      type: selectedItem,
      plan: for1,
      items: updatedArray,
    };

    dispatch(addForm1data(data));
    localStorage.setItem("type", selectedItem);
    localStorage.setItem("for1", for1);
    localStorage.setItem("titleArray", JSON.stringify(updatedArray));
  };

  return (
    <div className="bg-[#161C27] py-16">
      <div className="md:w-[80%] w-[90%] mx-auto" id="packages">
        <div>
          <h1 className="text-[32px] font-[700] text-center">
            <span className="text-[#FFEDA4]">Select</span> Your Package
          </h1>
          <div className="bg-[#FFEDA4] h-[2px] md:mx-[544px] mx-[155px] mt-3"></div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-16 md:mx-12">
            {packages.map((pkg) => (
              <div
                onClick={() => handlePackageClick(pkg)}
                key={pkg.id}
                className={`cursor-pointer ${
                  selectedPackage === pkg.id
                    ? "border-[2px] border-[#FFEDA4]"
                    : ""
                }`}
              >
                <div className="bg-[#0C0F16] py-6 md:h-[270px] h-[300px] px-6 kha rounded-md overflow-y-auto">
                  {pkg.name !== "Custom" ? (
                    <>
                      <div className="flex items-center justify-between">
                        <h1 className="text-[#FFEDA4] md:text-[27px] text-[20px] font-bold">
                          {pkg.name}
                        </h1>
                        <h2 className="flex flex-col md:text-[24px] text-[12px] md:leading-[1.8rem] leading-[1.2rem] font-semibold">
                          {pkg.price}
                          <span className="md:text-[14px] text-[10px] font-normal">
                            ({pkg.discount})
                          </span>
                        </h2>
                      </div>
                      <form className="md:mt-0 mt-4">
                        {pkg.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <input
                              className="accent-[#FFEDA4]"
                              type="checkbox"
                              checked
                              readOnly
                            />
                            <label>{feature}</label>
                          </div>
                        ))}
                      </form>
                    </>
                  ) : (
                    <>
                      <ul className="flex flex-col gap-2">
                        <h1 className="text-[#FFEDA4] md:text-[27px] text-[20px] font-bold">
                          {pkg.name}
                        </h1>
                        <li>{pkg.title}</li>
                        <li>{pkg.desc}</li>
                      </ul>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 justify-center">
          <p
            onClick={() => setOpen(true)}
            className="flex mt-12 items-center gap-3 bg-[#0C0F16]  py-3 px-6 rounded-md w-fit cursor-pointer"
          >
            <img src={icon} alt="" /> click to add items
          </p>
        </div>

        {/* ////////// */}

        <div className="flex gap-2 items-center justify-center flex-wrap mt-8">
          {titleArray.map((item, index) => (
            <div
              key={index}
              className="border-[2px] border-[#ddd] py-3 rounded-full px-6 flex items-center gap-4"
            >
              <h5 className="text-[13px] text-[#dddddd]">{item.title}</h5>
              <div className=" flex items-center gap-1">
              <span className="text-[13px] text-[#dddddd]">AED</span>
              <h5 className="text-[13px] text-[#dddddd]">{item.subtitle}</h5>
              </div>
              <img
                src={close}
                alt="close"
                onClick={() => removeItem(item.title)}
                className="cursor-pointer"
              />
            </div>
          ))}
        </div>

        <Modal
          open={open}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex bg-[#1b222e] rounded-2xl md:w-[50%] w-[95%] mx-auto items-center justify-center px-2 md:py-7 py-4 pb-12">
              <div>
                <h1 className="text-[20px] font-bold">Add Items</h1>
                <div className="h-[1px] w-full bg-[#8a8787] mb-5"></div>
                <div className="md:w-[666px] grid md:grid-cols-2 grid-cols-2 md:gap-4 gap-1">
                  {ModalItem.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        const newOpenItems = [...openItems];
                        newOpenItems[index] = !newOpenItems[index];
                        setOpenItems(newOpenItems);
                        storeInputs(item.title, item.subtitle);
                      }}
                      className={`${
                        openItems[index] ||
                        titleArray.some(
                          (titleItem) => titleItem.title === item.title
                        )
                          ? "border-[#ffeda43d] bg-[#ffeda418] text-[#FFEDA4]"
                          : "border-[#5954544e] bg-[#1b222e] text-white"
                      } border-[2px] md:px-6 px-3 rounded-md w-full cursor-pointer`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div
                            className="custom-radio md:w-[1rem] md:h-[1rem] w-[.8rem] h-[.8rem] "
                            onClick={() => {
                              const updatedTitleArray = titleArray.map(
                                (titleItem) => {
                                  if (titleItem.title === item.title) {
                                    return { ...titleItem, selected: true };
                                  } else {
                                    return { ...titleItem, selected: false };
                                  }
                                }
                              );
                              setTitleArray(updatedTitleArray);
                            }}
                            style={{
                              backgroundColor: titleArray.some(
                                (titleItem) =>
                                  titleItem.title === item.title ||
                                  titleItem.selected
                              )
                                ? "#FFEDA4"
                                : "transparent",
                              border: "1px solid #C5C5C5",
                              borderRadius: "50%",
                              cursor: "pointer",
                            }}
                          />
                          <label className="md:text-[13px] text-[9px]">
                            {item.title}
                          </label>
                        </div>
                        <h3 className="md:text-[12px] text-[9px]">
                          <span>AED</span> {item.subtitle}
                        </h3>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleGoBack}
                    className="md:py-3 md:px-6 w-[665px] py-2 px-3 md:text-[15px] text-[12px] rounded-md border-[#ddd] border-[2px] mt-3"
                  >
                    Go Back
                  </button>
                  {/* <button
                    type="button"
                    onClick={handleClose}
                    className="md:py-3 md:px-6 py-2 px-3 md:text-[15px] text-[12px] font-medium rounded-md bg-[#FFEDA4] text-black mt-3"
                  >
                    Add Items
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </Modal>

        {/* ///////// */}
        <div className=" flex items-center justify-center">
          <button
            onClick={() => navigate("/reg")}
            className="bg-[#FFEDA4] text-black py-3 px-20 mt-12 rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Package;
