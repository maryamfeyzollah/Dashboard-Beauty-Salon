import { useState } from "react";
import PersonelsSearch from "./PersonelsSearch";
import PersonelsTable from "./PersonelsTable";
import PersonelFormPopup from "./PersonelFormPopup";
import Navbar from "../../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";

function PersonelDashboard() {
  const dataHeader = [
    {
      key: "number",
      label: "ردیف",
    },
    {
      key: "name",
      label: "نام پرسنل   ",
    },

    {
      key: "break",
      label: "روزهای تعطیل",
    },
    {
      key: "services",
      label: "خدمت",
    },
    {
      key: "dateoff",
      label: "تاریخ مرخصی",
    },

    {
      key: "action",
      label: "ویرایش/حذف",
    },
  ];
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const [sidebarToggle] = useOutletContext();
  return (
    <>
      <main className="h-full font-inter ">
        <Navbar toggle={sidebarToggle} />
        {/* Main Content */}
        <div className="mainCard ">
          <div className=" border w-full border-gray-200 bg-white py-4 px-6 rounded-xl">
            <div className=" py-5 ">
              <h1 className=" text-custom-2 font-bold text-2xl">لیست پرسنل</h1>
              <p className="py-5">
                در این قسمت لیست پرسنل سالن زیبایی را مشاهده می‌کنید.
              </p>
            </div>
            <div className="md:flex ">
              <div className="flex-auto">
                <PersonelsSearch />
              </div>

              <div className="mb-5 justify-center items-center flex">
                <button
                  onClick={handleShowPopup}
                  className=" px-2 py-2 md:py-2 md:px-3 md:mt-3 border border-emerald-500 bg-emerald-700  rounded-xl text-gray-200 hover:bg-emerald-600 hover:border-emerald-600"
                >
                  افزودن پرسنل جدید
                </button>
                {showPopup && <PersonelFormPopup onClose={handleClosePopup} />}
              </div>
            </div>

            <PersonelsTable dataHeader={dataHeader} />
          </div>
        </div>
      </main>
    </>
  );
}

export default PersonelDashboard;
