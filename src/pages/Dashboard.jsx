import DashboardHeader from "../components/Other/DashboardHeader.jsx";
import ScrolledCard from "../components/Widget/ScrolledCard.jsx";
import { useNavigate, useOutletContext } from "react-router-dom";
import DashboardCard from "../components/BottomNavbar/DashboardCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCalendarDays,
  faCalendarCheck,
  faPhoneFlip,
  faBookBookmark,
  faPenRuler,
} from "@fortawesome/free-solid-svg-icons";
import DashboardWidget from "./DashboardWidget.jsx";
import MiniCalendar from "../components/Other/MiniCalendar.jsx";
import Banner from "../components/Other/Banner.jsx";

function Dashboard() {
  const navigate = useNavigate();

  const dataOS = [
    {
      title: "رزرو نوبت",
      icon: <FontAwesomeIcon icon={faCalendarDays} className="text-5xl" />,
      navigate: "/booking",
      color: "cardInfo",
    },
    {
      title: "نوبت من",
      icon: <FontAwesomeIcon icon={faCalendarCheck} className="text-5xl" />,
      navigate: "/reserve",
      color: "cardWarning",
    },
    {
      title: "تماس با ما",
      icon: <FontAwesomeIcon icon={faPhoneFlip} className="text-5xl" />,
      navigate: "/contact-us",

      color: "cardDanger",
    },
    {
      title: "راهنما",
      icon: <FontAwesomeIcon icon={faBookBookmark} className="text-5xl" />,
      navigate: "/guide",
      color: "cardSuccess",
    },
    {
      title: "قوانین  ",
      icon: <FontAwesomeIcon icon={faPenRuler} className="text-5xl" />,
      navigate: "/rules",
      color: "cardLime",
    },
  ];

  const [sidebarToggle] = useOutletContext();

  return (
    <>
      <main className="h-full ">
        {/* Welcome Header */}
        <DashboardHeader toggle={sidebarToggle} />
        {/* Laba */}
        {/* <div className="mx-auto mainCard">
          <DashboardCard />
        </div> */}
        {/* -------------------------------DASHBOARD WIDGET----------------------------- */}
        <DashboardWidget />
        <div className="grid xl:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-10 mainCard items-center ">
          {/*  Banner */}
          <div className="col-span-2">
            <Banner />
          </div>
          <div className="col-span-1 items-center   ">
            <MiniCalendar />
          </div>
        </div>
        {/* OS Kredit */}
        <div className="px-2 mx-auto mainCard">
          <div className="flex flex-row gap-x-4 overflow-hidden overflow-x-auto justify-between no-scrollbar">
            {dataOS?.map((data, index) => (
              <ScrolledCard key={index} data={data} navigate={navigate} />
            ))}
          </div>

          <div className="lg:w-full w-[1024px] overflow-hidden flex flex-row justify-between text-slate-700 gap-2 lg:max-h-screen overflow-x-auto whitespace-nowrap"></div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
