import {
  faBars,
  faBell,
  faCog,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

function DashboardHeader({ toggle }) {
  return (
    <div className="px-6 sm:px-8 pt-9 pb-4 flex flex-wrap w-full justify-between items-center">
      <div className="avaterSection flex items-center gap-2 sm:gap-6 text-slate-400">
        <div className="hidden md:flex flex-row gap-4 text-xl">
          <Link to="/">
            <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
          </Link>
        </div>

        <p className="cursor-pointer md:hidden text-2xl" onClick={toggle}>
          <FontAwesomeIcon icon={faBars} /> منو
        </p>
      </div>
      <div className="flex flex-row gap-3">
        <div id="nameSection">
          <p className="text-sm font-semibold text-gray-500">خوش آمدید</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
