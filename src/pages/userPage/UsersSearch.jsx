import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { searchUsers } from "../../reducers/usersSlice";
import { useDispatch } from "react-redux";

const UsersSearch = () => {
  const dispatch = useDispatch();
  const [scButton, setScButton] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    if (e.target) {
      setScButton(true);
      const { value } = e.target;
      setSearchQuery(value);
      dispatch(searchUsers(value));
    } else {
      setScButton(false);
    }
  };

  const clearSearch = (e) => {
    dispatch(searchUsers(""));
    setSearchQuery("");
    setScButton(false);
  };
  return (
    <div className="px-4">
      <div className="w-full py-4 px-2 items-center flex relative">
        <input
          value={searchQuery}
          type="text"
          name=""
          placeholder="جستجو"
          id=""
          onChange={handleChange}
          className="border rounded-full text-base w-full px-3 py-2 focus:outline-none focus:border-custom-2 bg-slate-50"
        />

        {!scButton && (
          <FontAwesomeIcon
            className="absolute left-6 text-slate-500"
            icon={faMagnifyingGlass}
          ></FontAwesomeIcon>
        )}

        {scButton && (
          <FontAwesomeIcon
            icon={faTimes}
            className="absolute left-6 cursor-pointer text-slate-500"
            onClick={clearSearch}
          ></FontAwesomeIcon>
        )}
      </div>
    </div>
  );
};

export default UsersSearch;
