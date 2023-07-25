import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AddNewService, LastServicelId } from "../../reducers/servicesSlice";

import { Formik, Form, Field, ErrorMessage } from "formik";

const ServiceFormPopup = ({ onClose }) => {
  const dispatch = useDispatch();
  const latestId = useSelector(LastServicelId);
  const handleSubmit = (values) => {
    const newId = parseInt(latestId) + 1;
    const personnel = {
      id: newId.toString(),
      name: values.name,
      peyment: values.peyment,
      time: values.time,
    };
    dispatch(AddNewService(personnel));
    onClose();
    
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("عنوان خدمت را وارد کنید "),
    peyment: Yup.string().required("مقدار بیعانه را به (تومان) وارد کنید"),
    time: Yup.string().required("مدت زمان اجرا  به (دقیقه)را وارد کنید"),
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
            peyment: "",
            time: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">
                عنوان خدمت*
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
              <label htmlFor="peyment" className="block mb-1">
                بیعانه(تومان)*
              </label>
              <Field
                type="text"
                id="peyment"
                name="peyment"
                className="border border-pink-300 rounded px-3 py-2 w-full"
              />
              <ErrorMessage
                name="peyment"
                component="div"
                className="text-custom-2 mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="time" className="block mb-1">
                مدت زمان اجرا (دقیقه)
              </label>
              <Field
                type="text"
                id="time"
                name="time"
                className="border border-pink-300 rounded px-3 py-2 w-full"
              />
              <ErrorMessage
                name="time"
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

export default ServiceFormPopup;
