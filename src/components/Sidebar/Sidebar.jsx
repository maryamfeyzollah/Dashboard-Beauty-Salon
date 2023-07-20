import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import initMenus from "../../data/menus.js";
import "./sidebar.css";
import SidebarLogo from "./SidebarLogo.jsx";
import SidebarSearch from "./SidebarSearch.jsx";
import MenuList from "./MenuList.jsx";
import { useNavigate } from "react-router-dom";

function Sidebar({ ...props }) {
  const navigate = useNavigate();
  const [menus, setMenus] = useState(initMenus);
  const [scButton, setScButton] = useState(false);
  const search = useRef("");

  const handleChange = (e) => {
    if (e.target.value) {
      setScButton(true);
      setMenus(
        menus.filter((el) => {
          return el.label.toLowerCase().includes(e.target.value.toLowerCase());
        })
      );
    } else {
      setScButton(false);
      setMenus(initMenus);
    }
  };

  const clearSearch = () => {
    search.current.value = "";
    setMenus(initMenus);
    setScButton(false);
  };

  const logout = () => {
    navigate("/auth/login");
  };

  return (
    <>
      <aside
        id="sidebar"
        className={`sidebarWrapper bg-violet-200 md:translate-x-0 translate-x-full md:z-0 z-50 no-scrollbar ${props.className}`}
      >
        {/* Sidebar wrapper */}
        <div className="md:w-64  h-full flex-col flex flex-shrink-0">
          {/* Logo */}
          <SidebarLogo toggle={props.toggle} text="سالن زیبایی" />

          {/* Search Menu */}
          <SidebarSearch
            scButton={scButton}
            search={search}
            clearSearch={clearSearch}
            handleChange={handleChange}
          />

          {/* Menu */}
          <MenuList menus={menus} toggle={props.toggle} />

          {/* Profile */}
          <div className="pt-2 border-t border-cus1 ">
            <div className="py-2 px-4">
              {/* Logout Button */}
              <button
                className="py-2 px-4 border border-cus1 bg-custom-2 w-full rounded-full text-pink-100  hover:border-pink justify-end text-base"
                onClick={() => logout()}
              >
                <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon> خروج
              </button>
            </div>
          </div>
        </div>
      </aside>

      {props.className === "mobile" && (
        <div
          id="overlaySidebar"
          onClick={props.toggle}
          className="hidden absolute w-full h-screen bg-black z-10 inset-0 opacity-60"
        ></div>
      )}
    </>
  );
}

export default Sidebar;
