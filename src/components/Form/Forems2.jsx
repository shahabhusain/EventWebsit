import React, { useState, useEffect } from "react";
import icon from "../../assets/icon.png";
import Modal from "@mui/material/Modal";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { addForm1data } from "../../store/dataSlice";
import { useNavigate } from "react-router-dom";
import {
  ModalItem,
  customStyles,
  options,
  options1,
  options2,
} from "../Data/data";
import close from "../../assets/close.png";

const Forems2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formOneState = useSelector((s) => s).register.form.step1;
  const [for1, setFor1] = useState(formOneState.plan || null);
  const [choose, setChoose] = useState(formOneState.package || {});
  const [titleArray, setTitleArray] = useState(formOneState?.items || []);
  const [selectedItem, setSelectedItem] = useState(formOneState.type || {});
  const [open, setOpen] = useState(false);
  const [openItems, setOpenItems] = useState(
    Array(ModalItem.length).fill(false)
  );
  const [tempAddedItems, setTempAddedItems] = useState([]);

  useEffect(() => {
    const storedOpenItems = titleArray.map((item) => item.title);
    const newOpenItems = ModalItem.map((item) =>
      storedOpenItems.includes(item.title)
    );
    setOpenItems(newOpenItems);
  }, [titleArray]);

  const onclick = (e) => {
    e.preventDefault();
    const data = {
      type: selectedItem,
      plan: for1,
      package: choose,
      items: titleArray,
    };
    dispatch(addForm1data(data));
    navigate("/reg");
  };

  const handleClose = () => {
    setTempAddedItems([]); // Clear tempAddedItems when modal is closed
    setOpen(false);
  };

  const handleOpen = (e) => {
    if (e.value === "Individual") {
      setOpen(true);
    }
  };

  const storeInputs = (title, subtitle) => {
    let updatedData;
    if (titleArray.some((item) => item.title === title)) {
      updatedData = titleArray.filter((item) => item.title !== title);
      setTempAddedItems((prev) => prev.filter((item) => item.title !== title));
    } else {
      updatedData = [...titleArray, { title, subtitle }];
      setTempAddedItems((prev) => [...prev, { title, subtitle }]);
    }
    setTitleArray(updatedData);

    const data = {
      type: selectedItem,
      plan: for1,
      package: choose,
      items: updatedData,
    };

    dispatch(addForm1data(data));
    localStorage.setItem("type", selectedItem);
    localStorage.setItem("for1", for1);
    localStorage.setItem("choose", choose);
    localStorage.setItem("titleArray", JSON.stringify(updatedData));
  };

  const removeItem = (title) => {
    const updatedArray = titleArray.filter((item) => item.title !== title);
    setTitleArray(updatedArray);

    const data = {
      type: selectedItem,
      plan: for1,
      package: choose,
      items: updatedArray,
    };

    dispatch(addForm1data(data));
    localStorage.setItem("type", selectedItem);
    localStorage.setItem("for1", for1);
    localStorage.setItem("choose", choose);
    localStorage.setItem("titleArray", JSON.stringify(updatedArray));
  };

  const handeSelectOne = (e) => {
    setSelectedItem(e);
    setFor1(null);
    const data = {
      type: e,
      plan: null,
    };
    dispatch(addForm1data(data));
  };

  const handeSelectTwo = (e) => {
    setChoose(null);
    const data = {
      choose: e,
      package: null,
    };
    dispatch(addForm1data(data));
  };

  const handleGoBack = () => {
    const updatedTitleArray = titleArray.filter(
      (item) =>
        !tempAddedItems.some((tempItem) => tempItem.title === item.title)
    );
    setTitleArray(updatedTitleArray); // Remove only the items added during the modal session
    setTempAddedItems([]); // Clear tempAddedItems when "Go Back" is clicked
    setOpen(false);
  };

  return (
    <div className="md:w-[60%] mx-auto bg-[#161C27] h-[100%] pb-12 md:px-16 px-4 rounded-md">
      <h1 className="md:text-[32px] text-[25px] font-bold text-center pt-24">
        Event Planning Registration
      </h1>
      <p className="md:text-[16px] text-[12px] md:mt-0 mt-4 text-[#C5C5C5] font-normal text-center">
        Simplify Your Event Arrangements with Us
      </p>
      <div className="flex items-center gap-4 mt-8 mx-72">
        <div className="bg-[#FFEDA4] h-[5px] w-full rounded-full"></div>
        <div className="bg-[#797979] h-[5px] w-full rounded-full"></div>
      </div>
      <form onSubmit={onclick} className="flex flex-col gap-5 mt-7">
        <Select
          onChange={(e) => {
            handeSelectOne(e);
            handeSelectTwo(e);
          }}
          placeholder={"What type of event are you planning?"}
          styles={customStyles}
          options={options}
          required
          value={options.find((option) => option.value === selectedItem?.value)}
        />
        <Select
          placeholder={"What is your event for?"}
          styles={customStyles}
          onChange={(selectedOption) => {
            setFor1(selectedOption);
          }}
          options={options1.filter((item) => item.Id === selectedItem?.id)}
          required
          value={
            for1 && options1.find((option) => option.value === for1?.value)
          }
        />

        <Select
          placeholder={"Choose a Package"}
          styles={customStyles}
          onChange={(selectedOption) => {
            setChoose(selectedOption);
            handleOpen(selectedOption);
          }}
          options={options2.filter((item) => item.Id === selectedItem?.id)}
          required
          value={
            choose && options2.find((option) => option.value === choose?.value)
          }
        />

        {!open && (
          <div className="mt-3">
            <h1
              onClick={() => setOpen(true)}
              className="flex items-center gap-3 bg-[#0C0F16] py-3 px-6 rounded-full w-fit cursor-pointer"
            >
              <img src={icon} alt="" /> click to add items
            </h1>
            <div className="flex gap-2 items-center flex-wrap mt-4">
              {titleArray.map((item, index) => (
                <div
                  key={index}
                  className="border-[2px] border-[#ddd] rounded-full py-3 px-6 flex items-center gap-4"
                >
                  <h1 className="text-[13px] text-[#dddddd]">{item.title}</h1>
                  <h2 className="text-[13px] text-[#dddddd]">
                    {item.subtitle}
                  </h2>
                  <img
                    src={close}
                    alt="close"
                    onClick={() => removeItem(item.title)}
                    className="cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        <button
          type="submit"
          className="bg-[#FFEDA4] text-center py-3 px-6 text-black rounded-md mt-20"
        >
          Next
        </button>
      </form>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="flex bg-[#1b222e] rounded-2xl md:w-[50%] w-[95%] mx-auto items-center justify-center px-2 md:py-7 py-4 pb-12">
            <div>
              <h1 className="text-[20px] font-bold">Add Items</h1>
              <div className="h-[2px] w-full bg-[#8a8787] my-5"></div>
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
                    } border-[2px] py-3 md:px-6 px-3 rounded-md w-full cursor-pointer`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          id={`item-${index}`}
                          checked={titleArray.some(
                            (titleItem) =>
                              titleItem.title === item.title &&
                              titleItem.selected
                          )}
                          onChange={(e) => {
                            storeInputs(item.title, item.subtitle);
                          }}
                          style={{ display: "none" }}
                          required
                        />
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
                        <label className="md:text-[13px] text-[9px]">{item.title}</label>
                      </div>
                      <h1 className="md:text-[12px] text-[9px]">{item.subtitle}</h1>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleGoBack}
                  className="md:py-3 md:px-6 py-2 px-3 md:text-[15px] text-[12px] rounded-md border-[#ddd] border-[2px] mt-3"
                >
                  Go Back
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="md:py-3 md:px-6 py-2 px-3 md:text-[15px] text-[12px] font-medium rounded-md bg-[#FFEDA4] text-black mt-3"
                >
                  Add Items
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Forems2;
