import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Config/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSelectedPackage } from "../../store/dataSlice";
import { useEffect, useState } from "react";

const Package = () => {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const packageSnapshot = await getDocs(collection(db, "packges"));
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

  const navigate = useNavigate();

  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg.id === selectedPackage ? null : pkg.id);
    dispatch(addSelectedPackage(pkg));
  };

  return (
    <div className="bg-[#161C27] py-16">
      <div className="md:w-[80%] w-[90%] mx-auto" id="packages">
        <div>
          <h1 className="text-[32px] font-[700] text-center">
            <span className="text-[#FFEDA4]">Our</span> Packages
          </h1>
          <div className="bg-[#FFEDA4] h-[2px] md:mx-[544px] mx-[155px] mt-3"></div>
          <p className="text-center text-[16px] font-[400] text-[#C5C5C5] md:mx-[172px] mt-3">
            Discover tailored packages for all your needs. From weddings to
            corporate events, find the perfect solution to simplify your
            planning process.
          </p>
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
                            <input className="accent-[#FFEDA4]" type="checkbox" checked readOnly />
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
