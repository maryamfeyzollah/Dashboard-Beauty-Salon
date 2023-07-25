import { Link } from "react-router-dom";
import Datatables from "../../components/Datatables/Table";
import TableCell from "../../components/Datatables/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faRemove } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteApiService,
  fetchServices,
  selectAllServices,
  updateApiService,
} from "../../reducers/servicesSlice";
import { useEffect, useState } from "react";

import DeleteServicePopup from "./DeleteServicePopup";
import UpdateServiceForm from "./UpdateServiceForm";

function ServiceTable({ dataHeader }) {
  const dispatch = useDispatch();
  const services = useSelector(selectAllServices);

  const [selectedservice, setSelectedService] = useState(null);
  const [selectedServerUpdate, setSelectedServerUpdate] = useState(null);

  const handleDeleteServer = (service) => {
    setSelectedService(service);
  };

  const handleConfirmDelete = () => {
    if (selectedservice) {
      dispatch(deleteApiService(selectedservice.id));
    }
    setSelectedService(null);
  };

  const handleCancelDelete = () => {
    setSelectedService(null);
  };
  const handleCancelUpdate = () => {
    setSelectedServerUpdate(null);
  };

  const handleUpdateService = (service) => {
    if (setSelectedServerUpdate) {
      dispatch(updateApiService(service));
    }

    setSelectedServerUpdate(null);
  };

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <Datatables dataHeader={dataHeader}>
      {services?.map((row, index) => (
        <tr
          key={index}
          className="bg-white border md:border-b block md:table-row rounded-md shadow-md md:rounded-none md:shadow-none mb-5"
        >
          <TableCell dataLabel="ردیف" showLabel={true}>
            <span className="  font-medium text-xs text-gray-900">
              {row.id}
            </span>
          </TableCell>
          <TableCell dataLabel="عنوان " showLabel={true}>
            <span className="font-semibold text-xs text-pink-900 ">
              {row.name}
            </span>
          </TableCell>
          <TableCell dataLabel="بیعانه(تومان)" showLabel={true}>
            <p className="text-xs  font-semibold text-custom-2 ">
              {row.peyment}
            </p>
          </TableCell>

          <TableCell dataLabel="مدت زمان اجرا(دقیقه)" showLabel={true}>
            <span className=" space-x-1 ">
              <span className="py-1 px-3 text-xs font-semibold  ">
                {row.time}
              </span>
            </span>
          </TableCell>
          <TableCell dataLabel="ویرایش/حذف" showLabel={true}>
            <Link
              // to={`/auth/master/user/${row.id}/edit`}
              className={`text-sky-700 inline-flex py-2 px-3 rounded  text-base`}
            >
              <FontAwesomeIcon
                icon={faPencil}
                onClick={() => setSelectedServerUpdate(row)}
              />
            </Link>
            {selectedServerUpdate && (
              <div className="fixed shadow-2xl inset-0 flex justify-center  items-center bg-black bg-opacity-10">
                <div className=" w-96 bg-white p-6  rounded-xl shadow-2xl ">
                  <h2 className="text-xl font-bold mb-4">ویرایش کاربر</h2>
                  <UpdateServiceForm
                    service={selectedServerUpdate}
                    onCancel={handleCancelUpdate}
                    onSubmit={handleUpdateService}
                  />
                </div>
              </div>
            )}
            <Link
              className={`text-red-700 inline-flex py-2 px-2 rounded  text-base`}
            >
              <FontAwesomeIcon
                icon={faRemove}
                onClick={() => handleDeleteServer(row)}
              />
            </Link>
            {selectedservice && (
              <DeleteServicePopup
                title="تایید حذف خدمت"
                message="آیا مطمئن هستید که می خواهید این خدمت را حذف کنید؟"
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
              />
            )}
          </TableCell>
        </tr>
      ))}
    </Datatables>
  );
}

export default ServiceTable;
