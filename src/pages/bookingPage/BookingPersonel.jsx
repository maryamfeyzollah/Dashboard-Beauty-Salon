import { Link, useParams } from "react-router-dom";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GrFormNext } from "react-icons/gr";
import { SlUserFemale } from "react-icons/sl";

import ProgressSteps from "./ProgressSteps";
import {
  fetchPersonnelService,
  selectAllPersonels,
} from "../../reducers/personelsSlice";
import { selectServiceById } from "../../reducers/servicesSlice";

const BookingPersonel = () => {
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
          <div className="  rounded-xl h-screen  p-5 bg-violet-100 md:p-5 bg-cover  bg-[url('https://i.ibb.co/M9LB3Kq/Glassmorphism-Background.png')]  ">
            <ProgressSteps serviceId={serviceId} />
            <h1 className=" text-custom-2 mb-5 font-bold text-2xl">
              {selectedService && selectedService.name}
            </h1>
            <Link
              to={`/booking/summary/${serviceId}`}
              className="flex flex-wrap justify-center items-center"
            >
              {personel.map((personel) => (
                <div key={personel.id} className="card card-5 ">
                  <div key={personel.id} className="card__icon ">
                    <SlUserFemale />
                  </div>
                  <p key={personel.id} className="card__exit">
                    ※
                  </p>
                  <div className="text">پرسنل : {personel.name}</div>
                </div>
              ))}
            </Link>
            <div className="card3"></div>
            <Link
              to={"/booking"}
              className="flex justify-center items-center mt-10"
            >
              <button className="button ">
                <GrFormNext />
                مرحله قبل
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default BookingPersonel;
