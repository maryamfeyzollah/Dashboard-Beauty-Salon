import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { AddNewPersonel, LastPersonnelId } from "../../reducers/personelsSlice";
import { useEffect, useState } from "react";
import { DatePicker } from "zaman";
import { fetchServices, selectAllServices } from "../../reducers/servicesSlice";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("نام پرسنل را وارد کنید"),
  phone: Yup.string()
    .required("موبایل را وارد کنید")
    .matches(/^09\d{9}$/, 'موبایل را وارد کنید"'),
  dayoff: Yup.array(),
  dateoff: Yup.string(),
  services: Yup.string().required("خدمت مورد نظر را انتخاب کنید"),
});

const PersonelFormPopup = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const services = useSelector(selectAllServices);
  const latestId = useSelector(LastPersonnelId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const handleSubmit = (values) => {
    const newId = parseInt(latestId) + 1;
    const personnel = {
      id: newId.toString(),
      name: values.name,
      phone: values.phone,
      dayoff: values.dayoff,
      dateoff: selectedDate ? selectedDate.toLocaleDateString("fa-IR") : "",
      services: [values.services],
    };

    dispatch(AddNewPersonel(personnel));
    onClose();
    window.location.reload();
  };

  return (
    <div className="fixed shadow-2xl inset-0 flex justify-center  items-center bg-black bg-opacity-50">
      <div className="bg-white p-6  rounded-xl  w-3/4  md:w-2/4  shadow-2xl ">
        <h2 className="md:text-xl sm:text-base md:mb-2 text-custom-2">
          افزودن پرسنل جدید
        </h2>
        <p className="md:text-sm text-xs text-slate-500 md:pb-3">
          لطفا تمامی فیلدهای اجباری را با دقت تکمیل نمایید:
        </p>
        <Formik
          initialValues={{
            name: "",
            phone: "",
            dayoff: [],
            dateoff: "",
            services: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-2 justify-center  items-center">
              <label htmlFor="name" className="block md:mb-1">
                نام پرسنل *
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="border border-pink-300 rounded-lg px-3 py-2 w-full"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-custom-2 mt-1"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="phone" className="block md:mb-1">
                موبایل*
              </label>
              <Field
                type="text"
                id="phone"
                name="phone"
                className="border border-pink-300 rounded-lg px-3 py-2 w-full"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-custom-2 mt-1"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="services"
                className="block text-gray-700  md:mb-1"
              >
                خدمت*
              </label>
              <Field
                as="select"
                id="services"
                name="services"
                className="border border-pink-300 text-gray-700 rounded-md px-3 py-2 w-full"
              >
                <option value="">خدمت را انتخاب کنید</option>
                {services.map((service) => (
                  <option
                    className="border border-pink-300 rounded-lg md:px-3 py-2 w-full"
                    key={service.id}
                    value={service.id}
                  >
                    {service.name}
                    {service.peyment}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="services"
                component="div"
                className="text-custom-2  text-sm md:mt-1"
              />
            </div>

            <div className=" md:my-4">
              <label
                htmlFor="dateoff"
                className="block text-lg font-medium text-gray-700"
              >
                مرخصی
              </label>

              <DatePicker
                value={selectedDate}
                onChange={(date) => setSelectedDate(date.value)}
                inputAttributes={{
                  placeholder: "تاریخ مرخصی",
                  readOnly: true,
                }}
                round="x4"
                inputClass="border border-pink-300 px-3 py-2 w-full rounded-lg  "
                accentColor="#c32c7f"
                locale="fa"
                direction="rtl"
              />

              <ErrorMessage
                name="dateoff"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="md:mb-2 ">
              <label className="block md:mb-2 " htmlFor="dayoff">
                روز های تعطیل
              </label>
              <div className="flex flex-wrap space-x-2 md:gap-2 sm:gap-0 font-bold focus:ring-purple-500 text-custom-2 ">
                <label>
                  <Field type="checkbox" name="dayoff" value=" شنبه" />
                  شنبه
                </label>
                <label>
                  <Field type="checkbox" name="dayoff" value=" یکشنبه" /> یکشنبه
                </label>
                <label>
                  <Field type="checkbox" name="dayoff" value=" دوشنبه" /> دوشنبه
                </label>
                <label>
                  <Field type="checkbox" name="dayoff" value=" سه شنبه" /> سه
                  شنبه
                </label>
                <label>
                  <Field type="checkbox" name="dayoff" value=" چهارشنبه" />
                  چهارشنبه
                </label>
                <label>
                  <Field type="checkbox" name="dayoff" value=" پنج شنبه" /> پنج
                  شنبه
                </label>
                <label>
                  <Field type="checkbox" name="dayoff" value=" جمعه" /> جمعه
                </label>
              </div>
              <ErrorMessage
                name="dayoff"
                component="div"
                className="text-custom-2 "
              />
            </div>

            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 m-2  rounded"
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

export default PersonelFormPopup;
