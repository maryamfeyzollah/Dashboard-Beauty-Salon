import DashboardHeader from "../components/Other/DashboardHeader.jsx";
import ScrolledCard from "../components/Widget/ScrolledCard.jsx";
import { useNavigate, useOutletContext } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCalendarDays,
  faCalendarCheck,
  faPhoneFlip,
  faBookBookmark,
  faPenRuler,
} from "@fortawesome/free-solid-svg-icons";
import DashboardWidget from "./DashboardWidget.jsx";
import DailyTraffic from "../components/Other/DailyTraffic.jsx";
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
      <main className="h-full  ">
        {/* Welcome Header */}
        <DashboardHeader toggle={sidebarToggle} />

        {/*  DashboardWidget */}
        <DashboardWidget />
        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mainCard  ">
          {/*  Banner */}
          <div className="xl:col-span-2 md:col-span-1">
            <Banner />
          </div>
          <div className="xl:col-span-1 md:col-span-1 w-full ">
            <DailyTraffic />
          </div>
        </div>
        {/* OS Kredit */}
        <div className="px-2 mx-auto mainCard ">
          <div className="mb-20 md:mb-3 xl:mb-0 flex flex-row gap-x-4 overflow-hidden overflow-x-auto justify-between">
            {dataOS?.map((data, index) => (
              <ScrolledCard key={index} data={data} navigate={navigate} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
