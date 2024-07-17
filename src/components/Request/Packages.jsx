import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import { db } from "../../Config/Firebase"; // Adjust the import path as necessary
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import close from "../../assets/close.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Packages = () => {
  const notify = (message) => toast(message);
  const [packages, setPackages] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [newFeature, setNewFeature] = useState("");
  const [newFeatures, setNewFeatures] = useState([]);
  const [newPackageName, setNewPackageName] = useState("");
  const [newPackagePrice, setNewPackagePrice] = useState("");
  const [newPackageDiscount, setNewPackageDiscount] = useState("");

  const fetchPackages = async () => {
    try {
      const packageSnapshot = await getDocs(collection(db, "packges")); // Corrected typo
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
    if (pkg) {
      setSelectedPackage(pkg);
      setNewFeatures(pkg.features || []);
      setNewPackageName(pkg.name);
      setNewPackagePrice(pkg.price);
      setNewPackageDiscount(pkg.discount);
    } else {
      setSelectedPackage(null);
      setNewFeatures([]);
      setNewPackageName("");
      setNewPackagePrice("");
      setNewPackageDiscount("");
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPackage(null);
    setNewFeatures([]);
    setNewFeature("");
    setNewPackageName("");
    setNewPackagePrice("");
    setNewPackageDiscount("");
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
      if (selectedPackage) {
        // Update existing package
        const packageRef = doc(db, "packges", selectedPackage.id);
        await updateDoc(packageRef, {
          name: newPackageName,
          price: newPackagePrice,
          discount: newPackageDiscount,
          features: newFeatures,
        });

        const updatedPackages = packages.map((pkg) =>
          pkg.id === selectedPackage.id
            ? { ...pkg, name: newPackageName, price: newPackagePrice, discount: newPackageDiscount, features: newFeatures }
            : pkg
        );
        setPackages(updatedPackages);
        notify("Package updated successfully!");
      } else {
        // Add new package
        const newPackage = {
          name: newPackageName,
          price: newPackagePrice,
          discount: newPackageDiscount,
          features: newFeatures,
        };
        const docRef = await addDoc(collection(db, "packges"), newPackage);
        setPackages([...packages, { id: docRef.id, ...newPackage }]);
        notify("Package added successfully!");
      }
    } catch (error) {
      console.error("Error saving changes: ", error);
      toast.error("Failed to save changes");
    }
    handleClose();
  };

  const handleDelete = async (pkgId) => {
    try {
      await deleteDoc(doc(db, "packges", pkgId));
      setPackages(packages.filter((pkg) => pkg.id !== pkgId));
      notify("Package deleted successfully!");
    } catch (error) {
      console.error("Error deleting package: ", error);
      toast.error("Failed to delete package");
    }
  };

  return (
    <div className="mt-12 w-[95%] mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-[33px] font-bold">Packages</h1>
        <button onClick={() => handleOpen(null)} className="bg-[#FFEDA4] py-3 cursor-pointer px-6 text-black rounded-md text-[18px] font-[600] ">
          Add Package
        </button>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 mt-5 mx-12">
        {packages.map((pkg) =>
          pkg.name !== "Custom" ? (
            <div key={pkg.id}>
              <div className="bg-[#161C27] py-6 md:h-[270px] h-[300px] px-6 kha rounded-md overflow-y-auto">
                <div className="flex items-center justify-between">
                  <h1 className="text-[#FFEDA4] md:text-[27px] text-[20px] font-bold">{pkg.name}</h1>
                  <h2 className="flex flex-col md:text-[24px] text-[12px] md:leading-[1.8rem] leading-[1.2rem] font-semibold">
                    {pkg.price}
                    <span className="md:text-[14px] text-[10px] font-normal">({pkg.discount})</span>
                  </h2>
                </div>
                <form className="md:mt-0 mt-4">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <input className="accent-[#FFEDA4]" type="checkbox" checked readOnly />
                      <label>{feature}</label>
                    </div>
                  ))}
                </form>
                <button onClick={() => handleOpen(pkg)} className="bg-[#FFEDA4] py-3 px-6 text-black rounded-md mt-4">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(pkg.id)}
                  className="border-[1px] border-[#FF5757] bg-[#FF57571A] py-2.5 px-6 rounded-md text-[#FF5757] ml-4"
                >
                  Delete
                </button>
              </div>
            </div>
          ) : null
        )}
      </div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="bg-[#11151d] w-[40%] px-8 mx-auto rounded-2xl">
            <div className="py-8 flex flex-col">
              <h1 className="text-[33px] font-medium">{selectedPackage ? "Edit Package" : "Add Package"}</h1>
              <div className="flex flex-col gap-2 mt-4">
                <label>Package Title</label>
                <input
                  className="bg-[#0C0F16] py-3 px-6 rounded-md"
                  type="text"
                  placeholder="Add package title"
                  value={newPackageName}
                  onChange={(e) => setNewPackageName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label>Package Price</label>
                <input
                  className="bg-[#0C0F16] py-3 px-6 rounded-md"
                  type="text"
                  placeholder="Add package price"
                  value={newPackagePrice}
                  onChange={(e) => setNewPackagePrice(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label>Package Discount</label>
                <input
                  className="bg-[#0C0F16] py-3 px-6 rounded-md"
                  type="text"
                  placeholder="Add package discount"
                  value={newPackageDiscount}
                  onChange={(e) => setNewPackageDiscount(e.target.value)}
                />
              </div>
              <h1 className="">Features</h1>
              <div className=" flex items-center gap-2 flex-wrap">
                {newFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 border-[#DDDDDD1A] border-[1px] py-2 px-3 rounded-lg w-fit">
                    <span className="text-[#C5C5C5]">{feature}</span>
                    <img className="cursor-pointer" src={close} alt="remove" onClick={() => handleRemoveFeature(index)} />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-2 justify-between bg-[#161C27] py-1 px-3 rounded-md">
                <input
                  className="bg-[#0C0F16] py-3 px-3 w-full "
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
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default Packages;
