import { Link, useParams } from "react-router-dom";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GrFormNext } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";

import ProgressSteps from "./ProgressSteps";
import {
  fetchPersonnelService,
  selectAllPersonels,
} from "../../reducers/personelsSlice";
import { selectServiceById } from "../../reducers/servicesSlice";

const BookingSummary = () => {
  const dispatch = useDispatch();
  const { serviceId } = useParams();

  const selectedService = useSelector((state) =>
    selectServiceById(state, serviceId)
  );

  const personel = useSelector(selectAllPersonels);

  useEffect(() => {
    dispatch(fetchPersonnelService(serviceId));
  }, [dispatch, serviceId]);

  return (
    <>
      <main className="h-full font-inter">
        {/* Main Content */}

        <div className="mainCard">
          <div className="  rounded-xl h-screen bg-violet-100 md:p-5 bg-cover  bg-[url('https://i.ibb.co/M9LB3Kq/Glassmorphism-Background.png')]  ">
            <ProgressSteps serviceId={serviceId} />
            <div className="flex md:mx-80 m-5 flex-col cursor-pointer items-center justify-center bg-slate-200 bg-opacity-25 backdrop-filter backdrop-blur-lg bg-clip-padding backdrop-saturate-150 rounded-2xl shadow-2xl p-4  ">
              <p className="text-neutral-700  mb-5 font-bold text-lg">
                خدمت :{" "}
                <span className=" text-custom-1">
                  {selectedService && selectedService.name}
                </span>
              </p>

              {personel.map((personel) => (
                <p
                  key={personel.id}
                  className="text-neutral-700  mb-5 font-bold text-lg"
                >
                  پرسنل :{" "}
                  <span className=" text-custom-1"> {personel.name} </span>
                </p>
              ))}
              <p className="text-neutral-700  mb-5 font-bold text-lg">
                بیعانه :{" "}
                <span className=" text-custom-1">
                  {selectedService && selectedService.peyment}
                </span>
              </p>
            </div>
            <div className="flex justify-between md:mx-80 ">
              <Link
                to={`/booking/${serviceId}`}
                className="flex justify-center items-center mt-10"
              >
                <button className="button ">
                  <GrFormNext />
                  مرحله قبل
                </button>
              </Link>
              <Link to={"#"} className="flex justify-center items-center mt-10">
                <button className="button ">
                  ثبت نهایی
                  <IoIosArrowBack />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BookingSummary;
