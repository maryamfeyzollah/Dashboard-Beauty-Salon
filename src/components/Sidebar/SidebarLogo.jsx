import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function SidebarLogo({ text, ...props }) {
  return (
    <div className="relative flex flex-row font-semibold text-3xl md:items-center md:mx-auto  text-custom-2 mb-5 p-4 ">
      <div className="hidden md:block">{text}</div>

      <button
        onClick={props.toggle}
        className="border border-pink-300 text-xl font-medium py-2 px-4 block md:hidden absolute right-1 top-3"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
}

export default SidebarLogo;
