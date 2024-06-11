import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import { db } from "../../Config/Firebase"; // Adjust the import path as necessary
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import close from "../../assets/close.png";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [newFeature, setNewFeature] = useState("");
  const [newFeatures, setNewFeatures] = useState([]);

  // Fetch packages from Firestore
  const fetchPackages = async () => {
    try {
      const packageSnapshot = await getDocs(collection(db, "packges"));
      const packageList = packageSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPackages(packageList);
    } catch (error) {
      console.error("Error fetching packages: ", error);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const handleOpen = (pkg) => {
    setSelectedPackage(pkg);
    setNewFeatures(pkg.features || []); // Initialize newFeatures with existing features
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPackage(null);
    setNewFeatures([]); // Reset newFeatures state to remove added features
    setNewFeature("");
  };

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setNewFeatures([...newFeatures, newFeature.trim()]);
      setNewFeature("");
    }
  };

  const handleRemoveFeature = (index) => {
    const updatedFeatures = [...newFeatures];
    updatedFeatures.splice(index, 1);
    setNewFeatures(updatedFeatures);
  };

  const handleSaveChanges = async () => {
    try {
      const packageRef = doc(db, "packges", selectedPackage?.id);
      await updateDoc(packageRef, {
        features: newFeatures,
      });

      // Update the local state
      const updatedPackages = packages.map((pkg) => 
        pkg.id === selectedPackage.id ? { ...pkg, features: newFeatures } : pkg
      );
      setPackages(updatedPackages);

      console.log("Changes saved successfully!");
    } catch (error) {
      console.error("Error saving changes: ", error);
    }
  };

  return (
    <div className="mt-12">
      <h1 className="text-[33px] font-bold ml-12">Packages</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 mt-5 mx-12">
        {packages.map((pkg) => (
          <div key={pkg.id} className="">
            <div className="bg-[#161C27] py-6 h-full px-6 rounded-md">
              <div className="flex items-center justify-between">
                <h1 className="text-[#FFEDA4] text-[27px] font-bold">
                  {pkg.name}
                </h1>
                <h2 className="flex flex-col text-[24px] font-semibold">
                  {pkg.price}
                  <span className="text-[14px] font-normal">
                    ({pkg.discount})
                  </span>
                </h2>
              </div>
              <form>
                {pkg.features.map((feature, i) => (
                  <div key={i} className=" flex items-center gap-2">
                    <input
                      className="accent-[#FFEDA4]"
                      type="checkbox"
                      checked
                    />
                    <label>{feature}</label>
                    <br />
                  </div>
                ))}
                <br />
              </form>
              <button
                onClick={() => handleOpen(pkg)}
                className="bg-[#FFEDA4] py-3 px-6 text-black rounded-md"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="bg-[#11151d] w-[40%] px-8 mx-auto rounded-2xl">
            <div className="py-8 flex flex-col gap-4">
              <h1 className="text-[33px] font-medium">Edit Package</h1>
              <div className="flex flex-col gap-3 mt-4">
                <label>Package Title</label>
                <input
                  className="bg-[#0C0F16] py-3 px-6 rounded-md"
                  type="text"
                  placeholder="Add package title"
                  value={selectedPackage ? selectedPackage.name : ""}
                  readOnly
                />
              </div>
              <h1 className="mt-2">Features</h1>
              <div className="mt-2 flex items-center gap-2 flex-wrap">
                {newFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 border-[#DDDDDD1A] border-[1px] py-2 px-3 rounded-lg w-fit"
                  >
                    <span className=" text-[#C5C5C5]">{feature}</span>
                    <img
                      className=" cursor-pointer"
                      src={close}
                      alt=""
                      onClick={() => handleRemoveFeature(index)}
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 justify-between bg-[#161C27] py-1 px-3 rounded-md">
                <input
                  className="bg-[#0C0F16] py-3 px-3 w-full"
                  type="text"
                  placeholder="Write feature"
                  value={newFeature}
                  onChange={(e) => setNewFeature(e.target.value)}
                />
                <button
                  className="bg-[#FFEDA4] py-2.5 px-12 rounded-md text-black"
                  onClick={handleAddFeature}
                >
                  Add
                </button>
              </div>

              <div>
                <div className="flex items-center gap-3 w-full mt-6">
                  <button
                    onClick={handleClose}
                    className="py-3 px-6 rounded-md bg-[#161C27] w-full"
                  >
                    Cancel
                  </button>
                  <button
                    className="py-3 px-6 rounded-md bg-[#FFEDA4] w-full text-black"
                    onClick={() => {
                      handleSaveChanges();
                      handleClose();
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Packages;
