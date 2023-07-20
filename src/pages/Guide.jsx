import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";

import { BsApple } from "react-icons/bs";
import { FcAndroidOs } from "react-icons/fc";
const Guide = () => {
  const [sidebarToggle] = useOutletContext();
  return (
    <>
      <main className="h-full font-inter">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-xl">
            <div className=" py-5 ">
              <h1 className=" text-custom-2 font-bold text-2xl">
                راهنمای نصب و استفاده از پنل
              </h1>
              <p className="py-5">
                در این قسمت نحوه‌ی نصب رزرواسیون سالن زیبایی در سیستم‌عامل های
                android و ios را مشاهده می‌کنید.
              </p>
              <div className="flex justify-center items-center">
                <div className="card  flex justify-center items-center">
                  <FcAndroidOs className="text-9xl" />
                </div>
                <div className="card  flex justify-center items-center">
                  <BsApple className="text-9xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Guide;
