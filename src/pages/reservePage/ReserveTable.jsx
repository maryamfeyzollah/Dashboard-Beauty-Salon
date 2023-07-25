import Datatables from "../../components/Datatables/Table";
import TableCell from "../../components/Datatables/TableCell";

import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { fetchReserve, selectAllReserve } from "../../reducers/reserveSlice";

const ReserveTable = ({ dataHeader }) => {
  const dispatch = useDispatch();
  const reserve = useSelector(selectAllReserve);
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem("isChecked") === "true" || false
  );
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  useEffect(() => {
    localStorage.setItem("isChecked", isChecked);
    dispatch(fetchReserve());
  }, [dispatch, isChecked]);

  return (
    <Datatables dataHeader={dataHeader}>
      {reserve?.map((row, index) => (
        <tr
          key={index}
          className="bg-white  border md:border-b block md:table-row rounded-md shadow-md md:rounded-none md:shadow-none mb-5"
        >
          <TableCell dataLabel="ردیف" showLabel={true}>
            <span className="  font-medium text-xs text-gray-900">
              {row.id}
            </span>
          </TableCell>
          <TableCell dataLabel="مشتری" showLabel={true}>
            <span className="font-semibold text-xs text-pink-900 ">
              {row.userName}
              {row.userFamily}
              <br /> {row.userPhone}
            </span>
          </TableCell>
          <TableCell dataLabel="پرسنل" showLabel={true}>
            <p className=" text-xs font-semibold text-gray-500">
              {row.personel}
            </p>
          </TableCell>

          <TableCell dataLabel="عنوان خدمت" showLabel={true}>
            <span className=" space-x-1">
              <span className=" rounded-full md:py-1 md:px-3 text-xs font-semibold md:bg-pink-200 md:text-pink-950">
                {row.services}
              </span>
            </span>
          </TableCell>
          <TableCell dataLabel="وضعیت" showLabel={true}>
            <span className=" space-x-1">
              <span className=" rounded-md md:py-2 md:px-3 text-xs md:bg-green-600  md:text-white">
                پرداخت شده
              </span>
            </span>
          </TableCell>
          <TableCell dataLabel="تایید/عدم تایید" showLabel={true}>
            <span className=" space-x-1">
              <div className="checkbox-wrapper-5">
                <div className="check">
                  <input
                    id="check-5"
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label for="check-5"></label>
                </div>
              </div>
            </span>
          </TableCell>
        </tr>
      ))}
    </Datatables>
  );
};

export default ReserveTable;
