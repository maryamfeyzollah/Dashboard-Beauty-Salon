import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AddNewUser, LastUserlId } from "../../reducers/usersSlice";

import { Formik, Form, Field, ErrorMessage } from "formik";

const UserFormPopup = ({ onClose }) => {
  const dispatch = useDispatch();
  const latestId = useSelector(LastUserlId);
  const handleSubmit = (values) => {
    const newId = parseInt(latestId) + 1;
    const personnel = {
      id: newId.toString(),
      name: values.name,
      lastname: values.lastname,
      phone: values.phone,
      roles: values.roles,
    };

    dispatch(AddNewUser(personnel));

    onClose();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("نام  را وارد کنید"),
    lastname: Yup.string().required("نام خانوادگی  را وارد کنید"),
    phone: Yup.string()
      .required("موبایل را وارد کنید")
      .matches(/^09\d{9}$/, 'موبایل را وارد کنید"'),

    roles: Yup.string().required("نقش را انتاخاب کنید"),
  });

  return (
    <div className="fixed shadow-2xl inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded w-96 shadow-2xl ">
        <h2 className="text-2xl mb-4 text-custom-2">افزودن کاربر جدید</h2>
        <p className="text-base text-slate-500 pb-3">
          لطفا تمامی فیلدهای اجباری را با دقت تکمیل نمایید:
        </p>
        <Formik
          initialValues={{
            name: "",
            lastname: "",
            phone: "",
            roles: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4  ">
              <label htmlFor="name" className="block mb-1">
                نام*
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="border border-pink-300 rounded px-3 py-2 w-full"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-custom-2 mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastname" className="block mb-1">
                نام خانوادگی*
              </label>
              <Field
                type="text"
                id="lastname"
                name="lastname"
                className="border border-pink-300 rounded px-3 py-2 w-full"
              />
              <ErrorMessage
                name="lastname"
                component="div"
                className="text-custom-2 mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-1">
                موبایل
              </label>
              <Field
                type="text"
                id="phone"
                name="phone"
                className="border border-pink-300 rounded px-3 py-2 w-full"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-custom-2 mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="roles" className="block mb-1">
                نقش
              </label>
              <Field
                as="select"
                id="roles"
                name="roles"
                className="border border-pink-300 rounded px-3 py-2 w-full"
              >
                <option value=""> انتخاب نقش</option>
                <option value="مشتری">مشتری</option>
                <option value="مدیر">مدیر</option>
                <option value="پذیرش">پذیرش</option>
              </Field>
              <ErrorMessage
                name="roles"
                component="div"
                className="text-custom-2 mt-1"
              />
            </div>
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 m-2 rounded"
            >
              ثبت
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
            >
              انصراف
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default UserFormPopup;
