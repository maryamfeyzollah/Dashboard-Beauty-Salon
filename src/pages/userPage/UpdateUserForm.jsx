import { useState } from "react";

const UpdateUserForm = ({ user, onSubmit, onCancel }) => {
  const [name, setName] = useState(user.name);
  const [lastname, setLastName] = useState(user.lastname);
  const [phone, setPhone] = useState(user.phone);
  const [roles, setRoles] = useState(user.roles);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      id: user.id,
      name,
      lastname,
      phone,
      roles,
    };
    onSubmit(updatedUser);
    window.location.reload();
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
          نام خانوادگی
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="lastname"
          type="text"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
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
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="roles"
        >
          نقش
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="roles"
          value={roles}
          onChange={(e) => setRoles(e.target.value)}
          required
        >
          <option value="مشتری">مشتری</option>
          <option value="مدیر">مدیر</option>
          <option value="پذیرش">پذیرش</option>
        </select>
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

export default UpdateUserForm;
