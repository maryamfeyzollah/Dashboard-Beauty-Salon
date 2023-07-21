import { useDispatch, useSelector } from "react-redux";
import Widget from "./Widget.jsx";

import { LastUserlId, fetchUsers } from "../reducers/usersSlice.js";
import { LastPersonnelId, fetchPersonels } from "../reducers/personelsSlice.js";
import { LastServicelId, fetchServices } from "../reducers/servicesSlice.js";
import { useEffect } from "react";
import { LastReservelId, fetchReserve } from "../reducers/reserveSlice.js";
import { FaUserAlt } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { GiLipstick } from "react-icons/gi";

const DashboardWidget = () => {
  const dispatch = useDispatch();
  const persianNumber = (num) => {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    return num.toString().replace(/\d/g, (digit) => persianDigits[digit]);
  };

  const latestUser = useSelector(LastUserlId);
  const newUser = parseInt(latestUser);
  const persianUser = persianNumber(newUser);

  const latestPersonne = useSelector(LastPersonnelId);
  const newPersonel = parseInt(latestPersonne);
  const persianPersonel = persianNumber(newPersonel);

  const latestService = useSelector(LastServicelId);
  const newService = parseInt(latestService);
  const persianService = persianNumber(newService);

  const latestReserve = useSelector(LastReservelId);
  const newReserve = parseInt(latestReserve);
  const persianReserve = persianNumber(newReserve);

  useEffect(() => {
    dispatch(fetchPersonels());
    dispatch(fetchServices());
    dispatch(fetchReserve());
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="mainCard grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      <Widget
        icon={<BsFillCalendarWeekFill className="h-6 w-6" />}
        title={"نوبت ها"}
        subtitle={persianReserve}
      />
      <Widget
        icon={<PiUsersThreeFill className="h-7 w-7" />}
        title={"پرسنل"}
        subtitle={persianPersonel}
      />
      <Widget
        icon={<FaUserAlt className="h-6 w-6" />}
        title={"کاربران"}
        subtitle={persianUser}
      />
      <Widget
        icon={<GiLipstick className="h-7 w-7" />}
        title={" خدمات"}
        subtitle={persianService}
      />
    </div>
  );
};

export default DashboardWidget;
