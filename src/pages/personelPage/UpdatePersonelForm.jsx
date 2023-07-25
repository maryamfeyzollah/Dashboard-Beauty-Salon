import { useState } from "react";

import { DatePicker } from "zaman";
import { selectAllServices } from "../../reducers/servicesSlice";
import { useSelector } from "react-redux";

const UpdatePersonelForm = ({ personel, onSubmit, onCancel }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDayOff, setSelectedDayOff] = useState(personel.dayoff);
  const [name, setName] = useState(personel.name);
  const [phone, setPhone] = useState(personel.phone);
  const [dateOff, setDateOff] = useState(personel.dateoff);
  const [services, setServices] = useState(personel.services);

  const service = useSelector(selectAllServices);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPersonel = {
      id: personel.id,
      name,
      phone,
      services: [services],
      dateoff: selectedDate ? selectedDate.toLocaleDateString("fa-IR") : "",
      dayoff: selectedDayOff,
    };
    onSubmit(updatedPersonel);
  };

  const handleDayoffChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedDayOff((prevDayOff) => [...prevDayOff, value]);
    } else {
      setSelectedDayOff((prevDayOff) =>
        prevDayOff.filter((day) => day !== value)
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          نام
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="phone"
        >
          موبایل
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="services"
        >
          خدمت
        </label>

        <select
          value={services}
          onChange={(e) => setServices(e.target.value)}
          type="select"
          id="services"
          name="services"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          {service.map((service) => (
            <option
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              key={service.id}
              value={service.id}
            >
              {service.name}
              {service.peyment}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4 ">
        <label
          htmlFor="dateoff"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          تاریخ مرخصی
        </label>

        <DatePicker
          value={selectedDate}
          onChange={(date) => setSelectedDate(date.value)}
          inputAttributes={{
            placeholder: dateOff,
            readOnly: true,
          }}
          round="x4"
          inputClass="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          accentColor="#c32c7f"
          locale="fa"
          direction="rtl"
        />
      </div>

      <div className="mb-4 ">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="dayoff"
        >
          روز های تعطیل: <span className="text-custom-1">{selectedDayOff}</span>
        </label>
        <div className="flex flex-wrap space-x-2 md:gap-2 sm:gap-0 font-bold focus:ring-purple-500 text-custom-2 ">
          <label>
            <input
              type="checkbox"
              name="dayoff"
              value=" شنبه"
              checked={selectedDayOff.includes(" شنبه")}
              onChange={handleDayoffChange}
            />
            شنبه
          </label>
          <label>
            <input
              checked={selectedDayOff.includes(" یکشنبه")}
              onChange={handleDayoffChange}
              type="checkbox"
              name="dayoff"
              value=" یکشنبه"
            />{" "}
            یکشنبه
          </label>
          <label>
            <input
              checked={selectedDayOff.includes(" دوشنبه")}
              onChange={handleDayoffChange}
              type="checkbox"
              name="dayoff"
              value=" دوشنبه"
            />{" "}
            دوشنبه
          </label>
          <label>
            <input
              checked={selectedDayOff.includes(" سه شنبه")}
              onChange={handleDayoffChange}
              type="checkbox"
              name="dayoff"
              value=" سه شنبه"
            />{" "}
            سه شنبه
          </label>
          <label>
            <input
              checked={selectedDayOff.includes(" چهارشنبه")}
              onChange={handleDayoffChange}
              type="checkbox"
              name="dayoff"
              value=" چهارشنبه"
            />
            چهارشنبه
          </label>
          <label>
            <input
              checked={selectedDayOff.includes(" پنج شنبه")}
              onChange={handleDayoffChange}
              type="checkbox"
              name="dayoff"
              value=" پنج شنبه"
            />{" "}
            پنج شنبه
          </label>
          <label>
            <input
              checked={selectedDayOff.includes(" جمعه")}
              onChange={handleDayoffChange}
              type="checkbox"
              name="dayoff"
              value=" جمعه"
            />{" "}
            جمعه
          </label>
        </div>
      </div>

      <button
        onClick={() => handleSubmit}
        className="bg-custom-2 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-3"
        type="submit"
      >
        ویرایش
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-4"
        onClick={onCancel}
      >
        انصراف
      </button>
    </form>
  );
};

export default UpdatePersonelForm;
