import { Link } from "react-router-dom";
import Datatables from "../../components/Datatables/Table";
import TableCell from "../../components/Datatables/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faRemove } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteApiUser,
  fetchUsers,
  selectAllUsers,
  updateApiUser,
} from "../../reducers/usersSlice";
import { useEffect, useState } from "react";
import DeleteUserPopup from "./DeleteUserPopup";
import UpdateUserForm from "./UpdateUserForm";

function UserTable({ dataHeader }) {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserUpdate, setSelectedUserUpdate] = useState(null);

  const handleDeleteUser = (user) => {
    setSelectedUser(user);
  };

  const handleConfirmDelete = () => {
    if (selectedUser) {
      dispatch(deleteApiUser(selectedUser.id));
    }
    setSelectedUser(null);
  };

  const handleCancelDelete = () => {
    setSelectedUser(null);
  };
  const handleCancelUpdate = () => {
    setSelectedUserUpdate(null);
  };

  const handleUpdateUser = (user) => {
    if (setSelectedUserUpdate) {
      dispatch(updateApiUser(user));
    }

    setSelectedUserUpdate(null);
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Datatables dataHeader={dataHeader}>
      {users?.map((row, index) => (
        <tr
          key={index}
          className="bg-white  border md:border-b block md:table-row rounded-md shadow-md md:rounded-none md:shadow-none mb-5"
        >
          <TableCell dataLabel="ردیف" showLabel={true}>
            <span className="  font-medium text-xs text-gray-900">
              {row.id}
            </span>
          </TableCell>
          <TableCell dataLabel="نام و نام خانوادگی" showLabel={true}>
            <span className="font-semibold text-xs text-pink-900 ">
              {row.name} {row.lastname}
            </span>
          </TableCell>
          <TableCell dataLabel="موبایل" showLabel={true}>
            <p className=" text-xs font-semibold text-gray-500">{row.phone}</p>
          </TableCell>

          <TableCell dataLabel="نقش" showLabel={true}>
            <span className=" space-x-1">
              <span className="rounded-full py-1 px-3 text-xs font-semibold bg-pink-200 text-pink-950">
                {row.roles}
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
                onClick={() => setSelectedUserUpdate(row)}
              />
            </Link>
            {selectedUserUpdate && (
              <div className="fixed shadow-2xl inset-0 flex justify-center  items-center bg-black bg-opacity-10">
                <div className="bg-white w-96 p-6 rounded shadow">
                  <h2 className="text-xl font-bold mb-4">ویرایش کاربر</h2>
                  <UpdateUserForm
                    user={selectedUserUpdate}
                    onCancel={handleCancelUpdate}
                    onSubmit={handleUpdateUser}
                  />
                </div>
              </div>
            )}
            <Link
              className={`text-red-700 inline-flex py-2 px-2 rounded  text-base`}
            >
              <FontAwesomeIcon
                icon={faRemove}
                onClick={() => handleDeleteUser(row)}
              />
            </Link>
            {selectedUser && (
              <>
                <DeleteUserPopup
                  title="تایید حذف کاربر"
                  message="آیا مطمئن هستید که می خواهید این کاربر را حذف کنید؟"
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

export default UserTable;
