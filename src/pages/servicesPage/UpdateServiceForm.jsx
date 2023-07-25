import { useState } from "react";

const UpdateServiceForm = ({ service, onSubmit, onCancel }) => {
  const [name, setName] = useState(service.name);
  const [peyment, setPeyment] = useState(service.peyment);
  const [time, setTime] = useState(service.time);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedService = {
      id: service.id,
      name,
      peyment,
      time,
    };
    onSubmit(updatedService);
   
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
          htmlFor="lastname"
        >
          بیعانه(تومان)
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="peyment"
          type="text"
          value={peyment}
          onChange={(e) => setPeyment(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="time"
        >
          مدت زمان اجرا
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="time"
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
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

export default UpdateServiceForm;
