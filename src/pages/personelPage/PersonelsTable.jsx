import { Link } from "react-router-dom";
import Datatables from "../../components/Datatables/Table";
import TableCell from "../../components/Datatables/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faRemove } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteApiPersonel,
  fetchPersonels,
  selectAllPersonels,
  updateApiPersonel,
} from "../../reducers/personelsSlice";

import { useEffect, useState } from "react";
import ShowPersonelServices from "./ShowPersonelServices";

import DeletePersonelPopup from "./DeletePersonelPopup";

import { fetchServices } from "../../reducers/servicesSlice";
import UpdatePersonelForm from "./UpdatePersonelForm";

function PersonelsTable({ dataHeader }) {
  const dispatch = useDispatch();
  const Personels = useSelector(selectAllPersonels);

  const [selectedpersonel, setSelectedPersonel] = useState(null);
  const [selectedPersonelUpdate, setSelectedPersonelUpdate] = useState(null);

  const handleDeletePersonel = (personel) => {
    setSelectedPersonel(personel);
  };

  const handleConfirmDelete = () => {
    if (selectedpersonel) {
      dispatch(deleteApiPersonel(selectedpersonel.id));
      
    }
    setSelectedPersonel(null);
  };

  const handleCancelDelete = () => {
    setSelectedPersonel(null);
  };
  const handleCancelUpdate = () => {
    setSelectedPersonelUpdate(null);
  };

  const handleUpdatePersonel = (personel) => {
    if (setSelectedPersonelUpdate) {
      dispatch(updateApiPersonel(personel));
      
    }

    setSelectedPersonelUpdate(null);
  };

  useEffect(() => {
    dispatch(fetchPersonels());
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <Datatables dataHeader={dataHeader}>
      {Personels?.map((row) => (
        <tr
          key={row.id}
          className="bg-white  border md:border-b block md:table-row rounded-md shadow-md md:rounded-none md:shadow-none mb-5"
        >
          <TableCell dataLabel="ردیف" showLabel={true}>
            <span className="  font-medium  text-xs text-gray-900">
              {row.id}
            </span>
          </TableCell>
          <TableCell dataLabel="نام پرسنل" showLabel={true}>
            <span className=" font-semibold text-xs text-pink-900 ">
              {row.name}
            </span>
          </TableCell>

          <TableCell dataLabel="روزهای تعطیل" showLabel={true}>
            <span className=" space-x-1">
              {row.dayoff.map((dayoff, index) => (
                <span
                  key={index}
                  className="rounded-full py-2 text-xs  font-semibold "
                >
                  {dayoff}
                </span>
              ))}
            </span>
          </TableCell>

          <TableCell dataLabel="خدمت" showLabel={true}>
            <span className=" space-x-1">
              {row.services.map((service, index) => (
                <span
                  key={index}
                  className="rounded-full py-1 px-3  md:text-xs font-semibold bg-pink-200 text-pink-950 "
                >
                  <ShowPersonelServices serviceId={service} />
                </span>
              ))}
            </span>
          </TableCell>

          <TableCell dataLabel="مرخصی" showLabel={true}>
            <p className="text-xs font-semibold ">{row.dateoff}</p>
          </TableCell>

          <TableCell dataLabel="ویرایش/حذف" showLabel={true}>
            <Link
              // to={`/auth/master/user/${row.id}/edit`}
              className={`text-sky-700 inline-flex py-2 px-3 rounded  text-base`}
            >
              <FontAwesomeIcon
                icon={faPencil}
                onClick={() => setSelectedPersonelUpdate(row)}
              />
            </Link>
            {selectedPersonelUpdate && (
              <div className="fixed shadow-2xl inset-0 flex justify-center  items-center bg-black bg-opacity-10">
                <div className="bg-white p-6  rounded-xl  w-3/4  md:w-2/4  shadow-2xl  ">
                  <h2 className="md:text-xl sm:text-xs md:mb-2 text-custom-2">
                    ویرایش کاربر
                  </h2>
                  <UpdatePersonelForm
                    personel={selectedPersonelUpdate}
                    onCancel={handleCancelUpdate}
                    onSubmit={handleUpdatePersonel}
                  />
                </div>
              </div>
            )}
            <Link
              className={`text-red-700 inline-flex py-2 px-2 rounded  text-base`}
            >
              <FontAwesomeIcon
                icon={faRemove}
                onClick={() => handleDeletePersonel(row)}
              />
            </Link>
            {selectedpersonel && (
              <>
                <DeletePersonelPopup
                  title="تایید حذف خدمت"
                  message="آیا مطمئن هستید که می خواهید این خدمت را حذف کنید؟"
                  onConfirm={handleConfirmDelete}
                  onCancel={handleCancelDelete}
                />
              </>
            )}
          </TableCell>
        </tr>
      ))}
    </Datatables>
  );
}

export default PersonelsTable;
