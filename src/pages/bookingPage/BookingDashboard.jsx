import Navbar from "../../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchServices, selectAllServices } from "../../reducers/servicesSlice";

import ProgressSteps from "./ProgressSteps";

function BookingDashboard() {
  const dispatch = useDispatch();

  const [sidebarToggle] = useOutletContext();

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const services = useSelector(selectAllServices);

  return (
    <>
      <main className="h-full font-inter">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}

        <div className="mainCard">
          <div className=" rounded-xl h-screen  bg-violet-100 p-5 bg-cover bg-[url('https://i.ibb.co/M9LB3Kq/Glassmorphism-Background.png')]  ">
            <ProgressSteps />
            <h1 className=" text-custom-2 mb-5 font-bold text-2xl">
              لیست خدمات
            </h1>

            <div className="grid lg:grid-cols-3 grid-cols-2 gap-4  ">
              {services.map((service) => (
                <Link key={service.id} to={`/booking/${service.id}`}>
                  <div className="flex flex-col cursor-pointer items-center justify-center bg-slate-200 bg-opacity-25 backdrop-filter backdrop-blur-lg bg-clip-padding backdrop-saturate-150 rounded-2xl shadow-2xl p-4 ">
                    <img className="lg:w-60 lg:h-52 " src={service.img} />
                    <h2 className="md:text-2xl text-xs font-bold text-custom-1 m-2">
                      {service.name}
                    </h2>
                    <p className=" text-custom-5 font-bold sm:text-xs md:text-xl">
                      بیعانه : {service.peyment}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default BookingDashboard;
