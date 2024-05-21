import React from "react";
import Modal from '@mui/material/Modal';
const Packages = () => {
  const packages = [
    {
      name: "SIGNATURE",
      price: "AED 2750",
      discount: "save AED 300",
      features: [
        "Digital invitation",
        "Backdrop themed to your event",
        "Balloon arch themed to your event",
      ],
    },
    {
      name: "PREMIUM",
      price: "AED 2750",
      discount: "save AED 500",
      features: [
        "Digital invitation",
        "Backdrop themed to your event",
        "Balloon arch themed to your event",
        "Cake stand",
        "x2 neon signage or light up letters / numbers",
        "Personalised welcome board",
      ],
    },
    {
      name: "DELUXE",
      price: "AED 2750",
      discount: "save AED 500",
      features: [
        "Digital invitation",
        "Backdrop themed to your event",
        "Balloon arch themed to your event",
      ],
    },
  ];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className="md:w-[80%] w-[90%] mx-auto mt-12 ml-[258px] h-screen">
      <h1 className=" text-[33px] font-bold ml-12">Packages</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 mt-5 mx-12">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className=""
          >
            <div className="bg-[#161C27] py-6 h-full px-6 rounded-md">
              <div className="flex items-center justify-between">
                <h1 className="text-[#FFEDA4] text-[27px] font-bold">{pkg.name}</h1>
                <h2 className="flex flex-col text-[24px] font-semibold">
                  {pkg.price}
                  <span className="text-[14px] font-normal">({pkg.discount})</span>
                </h2>
              </div>
              <form>
                {pkg.features.map((feature, i) => (
                  <div key={i}>
                    <input
                      className="accent-[#FFEDA4]"
                      type="checkbox"
                      id={`${pkg.name.toLowerCase()}-feature-${i}`}
                      name={`${pkg.name.toLowerCase()}-feature-${i}`}
                      checked
                    />
                    <label htmlFor={`${pkg.name.toLowerCase()}-feature-${i}`}> {feature}</label>
                    <br />
                  </div>
                ))}
                <br />
              </form>
              <button onClick={handleOpen} className=" bg-[#FFEDA4] py-3 px-6 text-black rounded-md">Edit</button>
            </div>
          </div>
        ))}
      </div>
      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <div className=" bg-[#11151d] w-[30%]  px-8 mx-auto  rounded-2xl mt-24
      ">
       <div className=" py-8 flex flex-col gap-4">
       <h1 className=" text-[33px] font-medium">Edit Package</h1>
        <div className=" flex flex-col gap-3 mt-4 ">
          <label>Packages Title</label>
          <input className=" bg-[#0C0F16] py-3 px-6 rounded-md" type="text" placeholder="add package Title" />
        </div>
        <h1 className=" mt-4">Features</h1>
        <div className=" flex items-center gap-2 bg-[#161C27] py-1 px-3 rounded-md">
          <input className=" bg-[#0C0F16] py-3 px-6" type="text" placeholder="Write Feature" />
          <button className=" bg-[#FFEDA4] py-2.5 w-full rounded-md text-black">Add</button>
        </div>
        <div>
        <div className=' flex items-center gap-3 w-full mt-6'>
          <button className=' py-3 px-6 rounded-md bg-[#161C27] w-full'>Cancel</button>
          <button className=' py-3 px-6 rounded-md bg-[#FFEDA4] w-full text-black'>Save Changes</button>
        </div>
        </div>
       </div>
      </div>
      </Modal>
      </div>
    </div>
  );
};

export default Packages;
