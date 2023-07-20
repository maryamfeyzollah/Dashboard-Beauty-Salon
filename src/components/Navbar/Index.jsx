import { faBars, faBell, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Index({ toggle }) {
  return (
    <>
      <header className="">
        <div className="shadow-sm">
          <div className="relative bg-white flex w-full items-center px-5 py-5">
            <div className="flex-1">
              <p
                className="cursor-pointer md:hidden text-base text-custom-2"
                onClick={toggle}
              >
                <FontAwesomeIcon icon={faBars} /> منو
              </p>
            </div>
            <div className="">
              <ul className="flex flex-row gap-4 items-center">
                <li>
                  <span className="h-9 w-9 cursor-pointer text-gray-600">
                    <FontAwesomeIcon icon={faMessage} />
                  </span>
                </li>
                <li>
                  <span className="h-9 w-9 cursor-pointer text-gray-600">
                    <FontAwesomeIcon icon={faBell} />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Index;
