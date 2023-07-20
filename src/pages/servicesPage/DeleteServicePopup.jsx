const DeleteServicePopup = ({ title, message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-10">
      <div className="bg-white p-5 m-5 rounded-xl shadow-xl  ">
        <h2 className="text-xl font-bold mb-4 text-custom-2">{title}</h2>
        <p>{message}</p>
        <div className="mt-6  justify-end flex gap-3">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={onConfirm}
          >
            حذف
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={onCancel}
          >
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteServicePopup;
