import React, { useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { addForm1data } from "../../store/dataSlice";
import { useNavigate } from "react-router-dom";
import { customStyles, options, options1 } from "../Data/data";

const Forems2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formOneState = useSelector((s) => s).register.form.step1;
  const [for1, setFor1] = useState(formOneState.plan || null);
  const [selectedItem, setSelectedItem] = useState(formOneState.type || {});
  const [customInput, setCustomInput] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);
  const onclick = (e) => {
    e.preventDefault();

    const data = {
      type: showCustomInput ? { value: customInput, label: customInput } : selectedItem,
      plan: for1,
      items: [],
    };

   
    dispatch(addForm1data(data));

   
    localStorage.setItem("eventType", showCustomInput ? customInput : selectedItem.label);
    localStorage.setItem("eventPlan", for1 ? for1.label : null);

   
    navigate("/pack");
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedItem(selectedOption);


    if (selectedOption.value === "Other") {
      setShowCustomInput(true);
      setFor1(null); 
    } else {
      setShowCustomInput(false);
    }
  };

  return (
    <div className="md:w-[60%] mx-auto bg-[#161C27] h-screen pb-12 md:px-16 px-4 rounded-md">
      <h1 className="md:text-[32px] text-[25px] font-bold text-center pt-24">
        Let's Get Started Planning Your Event
      </h1>
      <form onSubmit={onclick} className="flex flex-col gap-5 mt-7">
        {/* First Select */}
        <Select
          onChange={handleSelectChange}
          placeholder="What type of event are you planning?"
          styles={customStyles}
          options={[...options, { value: "Other", label: "Other" }]}
          required
          value={options.find((option) => option.value === selectedItem?.value)}
        />

       
        {showCustomInput && (
          <input
            type="text"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            className="py-5 px-3 bg-black text-white rounded-md"
            placeholder="Please specify your event type"
            required
          />
        )}

        {!showCustomInput && (
          <Select
            placeholder="What is your event for?"
            styles={customStyles}
            onChange={(selectedOption) => setFor1(selectedOption)}
            options={options1.filter((item) => item.Id === selectedItem?.id)}
            required
            value={for1 && options1.find((option) => option.value === for1?.value)}
          />
        )}

        <button
          type="submit"
          className="bg-[#FFEDA4] text-center py-3 px-6 text-black rounded-md"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Forems2;
