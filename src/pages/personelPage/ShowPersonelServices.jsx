import { selectServiceById } from "../../reducers/servicesSlice";

import { useSelector } from "react-redux";

const ShowPersonelServices = ({ serviceId }) => {
  const personelservice = useSelector((state) =>
    selectServiceById(state, serviceId)
  );

  return (
    <span>{personelservice ? personelservice.name : " خدمت مشخص نشده"}</span>
  );
};

export default ShowPersonelServices;
