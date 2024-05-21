import React, { useState } from "react";
import icon from "../../assets/icon.png";
import Modal from "@mui/material/Modal";
import Select from "react-select";
import { Link } from "react-router-dom";

const Forems2 = () => {
  const ModalItem = [
    { title: "Backdrop" },
    { title: "Welcome board" },
    { title: "Digital invitation" },
    { title: "Podium (up to 3)" },
    { title: "Balloon arch" },
    { title: "Balloon column (2)" },
    { title: "Light up signage" },
    { title: "Themed prop" },
    { title: "Personalised sticker" },
    { title: "Light up letter or number" },
  ];
  const [selectedItem, setSelectedItem] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openItems, setOpenItems] = useState(
    Array(ModalItem.length).fill(false)
  );

  const [titleArray, setTitleArray] = useState([]);
  console.log(titleArray, "Title array");

  const options = [
    { id: 1, value: "Birthday", label: "Birthday" },
    { id: 2, value: "Celebration", label: "Celebration" },
    { id: 3, value: "Occasion ", label: "Occasion " },
    { id: 4, value: "Corporate ", label: "Corporate " },
    { id: 5, value: "Religious  ", label: "Religious " },
    { id: 6, value: "Love  ", label: "Love " },
  ];
  const options1 = [
    { value: "Kids (1-10)", label: "Kids (1-10)", Id: 1 },
    { value: "Teens (11-17)", label: "Teens (11-17)", Id: 1 },
    { value: "Pre-adults (18-20)", label: "Pre-adults (18-20)", Id: 1 },
    {
      value: "Special (21, 30, 40, etc)",
      label: "Special (21, 30, 40, etc)",
      Id: 1,
    },
    { value: "Adult (21+)", label: "Adult (21+)", Id: 1 },
    { value: "Baby Shower", label: "Baby Shower", Id: 2 },
    { value: "Gender Reveal", label: "Gender Reveal", Id: 2 },
    { value: "Leaving do", label: "Leaving do", Id: 2 },
    { value: "Prom", label: "Prom", Id: 2 },
    { value: "House Warming", label: "House Warming", Id: 2 },
    { value: "Sleepover ", label: "Sleepover ", Id: 2 },
    { value: "Movie Night", label: "Movie Night", Id: 2 },
    { value: "Graduation", label: "Graduation", Id: 2 },
    { value: "Halloween", label: "Halloween", Id: 3 },
    { value: "NYE", label: "NYE", Id: 3 },
    { value: "Thanksgiving", label: "Thanksgiving", Id: 3 },
    { value: "St Patricks Day", label: "St Patricks Day", Id: 3 },

    { value: "Product Launch", label: "Product Launch", Id: 4 },
    {
      value: "Sports Event / Competition",
      label: "Sports Event / Competition",
      Id: 4,
    },
    { value: "Awards Ceremony", label: "Awards Ceremony", Id: 4 },

    { value: "Christening ", label: "Christening ", Id: 5 },
    { value: "Bar / Bat Mitzvahs", label: "Bar / Bat Mitzvahs", Id: 5 },
    { value: "Iftar", label: "Iftar", Id: 5 },
    { value: "Eid", label: "Product Launch", Id: 5 },
    { value: "Eid", label: "Eid", Id: 5 },
    { value: "Christmas", label: "Christmas", Id: 5 },
    { value: "Holi", label: "Holi", Id: 5 },
    { value: "Dwali", label: "Dwali", Id: 5 },
    { value: "Easter", label: "Easter", Id: 5 },

    { value: "Wedding", label: "Wedding", Id: 6 },
    { value: "Hen Do / Bridal", label: "Hen Do / Bridal", Id: 6 },
    { value: "Stag Do", label: "Stag Do", Id: 6 },
    { value: "Engagement", label: "Engagement", Id: 6 },
    { value: "Anniversary ", label: "Anniversary ", Id: 6 },
    { value: "Proposal", label: "Proposal", Id: 6 },
  ];

  const options2 = [
    {
      value: "Signature",
      label: "Signature",
      Id: 1,
    },
    { value: "Premium", label: "Premium", Id: 1 },
    { value: "Deluxe", label: "Deluxe", Id: 1 },
    { value: "Custom", label: "Custom", Id: 1 },
    { value: "Signature", label: "Signature", Id: 2 },
    { value: "Premium", label: "Premium", Id: 2 },
    { value: "Deluxe", label: "Deluxe", Id: 2 },
    { value: "Custom", label: "Custom", Id: 2 },
    { value: "Signature", label: "Signature", Id: 3 },
    { value: "Premium", label: "Premium", Id: 3 },
    { value: "Deluxe", label: "Deluxe", Id: 3 },
    { value: "Custom", label: "Custom", Id: 3 },
    { value: "Signature", label: "Signature", Id: 4 },
    { value: "Premium", label: "Premium", Id: 4 },
    { value: "Deluxe", label: "Deluxe", Id: 4 },
    { value: "Custom", label: "Custom", Id: 4 },
    { value: "Signature", label: "Signature", Id: 5 },
    { value: "Premium", label: "Premium", Id: 5 },
    { value: "Deluxe", label: "Deluxe", Id: 5 },
    { value: "Custom", label: "Custom", Id: 5 },
    { value: "Signature", label: "Signature", Id: 6 },
    { value: "Premium", label: "Premium", Id: 6 },
    { value: "Deluxe", label: "Deluxe", Id: 6 },
    { value: "Custom", label: "Custom", Id: 6 },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "black",
      borderColor: "black",
      color: "white",
      paddingTop: 10, // Adjust this value as needed
      paddingBottom: 10, // Adjust this value as needed
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "black",
    }),
    menuList: (provided) => ({
      ...provided,
      backgroundColor: "black",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "gray" : "black",
      color: "white",
      "&:hover": {
        backgroundColor: "gray",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "white",
    }),
    input: (provided) => ({
      ...provided,
      color: "white",
    }),
  };
  
  function storeInpts(title) {
    const updatedData = titleArray.includes(title)
      ? titleArray.filter((item) => item !== title)
      : [...titleArray, title];
    setTitleArray(updatedData);
    setOpen(true);
  }

  return (
    <div className="w-[60%] mx-auto bg-[#1b222e] h-screen px-16 rounded-md">
      <h1 className="text-[32px] font-bold text-center pt-24">
        Event Planning Registration
      </h1>
      <p className="text-[16px] text-[#C5C5C5] font-normal text-center">
        Simplify Your Event Arrangements with Us
      </p>
      <div className="flex items-center gap-4 mt-6 mx-32">
        <div className="bg-[#FFEDA4] h-[3px] w-full"></div>
        <div className="bg-[#797979] h-[3px] w-full"></div>
      </div>
      <form className="flex flex-col gap-3 mt-5">
        <Select
          onChange={(e) => setSelectedItem(e)}
          placeholder="What type of event are you planning?"
          styles={customStyles}
          options={options}
        />
        <Select
          placeholder="What is your event for?"
          styles={customStyles}
          options={options1.filter((item) => item.Id == selectedItem?.id)}
        />
        <Select
          placeholder="Choose a Package"
          styles={customStyles}
          options={options2.filter((item) => item.Id == selectedItem?.id)}
        />
        <div className="mt-3">
          <h1
            onClick={handleOpen}
            className="flex items-center gap-3 border-[#6f6e6e] py-3 px-6 border-[2px] rounded-full w-fit cursor-pointer"
          >
            <img src={icon} alt="" /> click to add items
          </h1>
          <div className="flex gap-2 items-center flex-wrap mt-4">
            {titleArray.map((item, index) => (
              <div
                key={index}
                className="border-[2px] border-[#ddd] rounded-full py-3 px-6"
              >
                <h1>{item}</h1>
              </div>
            ))}
          </div>
        </div>
        <Link
          to="/reg"
          className="bg-[#FFEDA4] text-center py-3 px-6 text-black rounded-md mt-3"
        >
          Next
        </Link>
      </form>

      <div>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="flex bg-[#1b222e] rounded-2xl w-[50%] mx-auto items-center justify-center py-7 mt-32">
            <div>
              <h1 className="text-[20px] font-bold">Add Items</h1>
              <div className="h-[2px] w-full bg-[#8a8787] my-5"></div>
              <div className="w-[666px] grid grid-cols-2 gap-4">
                {ModalItem.map((item, index) => (
                  <div
                    onClick={() => storeInpts(item.title)}
                    key={index}
                    className={`${
                      openItems[index]
                        ? "border-[#ffeda43d] bg-[#ffeda418] text-[#FFEDA4]"
                        : "border-[#5954544e]"
                    } border-[2px] py-3 px-6 rounded-md w-full`}
                  >
                    <div className=" flex items-center gap-2">
                      <input
                        onClick={() => {
                          const newOpenItems = [...openItems];
                          newOpenItems[index] = !newOpenItems[index];
                          setOpenItems(newOpenItems);
                        }}
                        id="specifyColor"
                        type="radio"
                        className=" w-[1rem] h-[1rem]"
                        checked={titleArray.includes(item.title)}
                      />
                      <label> {item.title}</label>
                    </div>
                  </div>
                ))}
                <button
                  onClick={handleClose}
                  className="py-3 px-6 rounded-md border-[#ddd] border-[2px]"
                >
                  Go Back
                </button>
                <button
                  onClick={handleClose}
                  className="py-3 px-6 rounded-md bg-[#FFEDA4] text-black"
                >
                  Add Items
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Forems2;
