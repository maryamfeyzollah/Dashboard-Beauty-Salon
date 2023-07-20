import { useState } from "react";

import Navbar from "../../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";

import ReserveTable from "./ReserveTable";
import ReserveSearch from "./ReserveSearch";

const ReserveDashboard = () => {
  const dataHeader = [
    {
      key: "number",
      label: "ردیف",
    },
    {
      key: "user",
      label: "مشتری",
    },
    {
      key: "personel",
      label: "پرسنل",
    },

    {
      key: "services",
      label: "عنوان خدمت",
    },
    {
      key: "status",
      label: "وضعیت",
    },
    {
      key: "allow",
      label: "تایید/عدم تایید",
    },
  ];

  const [sidebarToggle] = useOutletContext();
  return (
    <main className="h-full font-inter">
      <Navbar toggle={sidebarToggle} />
      {/* Main Content */}
      <div className="mainCard">
        <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-xl">
          <div className=" py-5 ">
            <h1 className=" text-custom-2 font-bold text-2xl">لیست نوبت ها</h1>
            <p className="py-5">
              در این قسمت لیست نوبت‌های سالن زیبایی را مشاهده می‌کنید.
            </p>
          </div>
          <div className="md:flex ">
            <div className="flex-auto">
              <ReserveSearch />
            </div>
          </div>

          <ReserveTable dataHeader={dataHeader} />
        </div>
      </div>
    </main>
  );
};

export default ReserveDashboard;
