import {
  faHomeAlt,
  faBookBookmark,
  faBullseye,
  faCalendarCheck,
  faUsers,
  faFemale,
  faBookmark,
  faPenRuler,
  faWarning,
  faPhoneAlt,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";

const initMenu = [
  {
    label: "خانه",
    path: "/",
    icon: faHomeAlt,
  },
  {
    label: "مدیریت",
  },
  {
    label: "نوبت ها",
    path: "/reserve",
    icon: faCalendarCheck,
  },
  {
    label: "کاربران",
    path: "/users",
    icon: faUsers,
  },
  {
    label: "خدمات",
    path: "/services",
    icon: faBullseye,
  },
  {
    label: "پرسنل",
    path: "/personels",
    icon: faFemale,
  },

  {
    label: "داشبورد",
  },
  {
    label: "رزرو نوبت",
    path: "/booking",
    icon: faBookmark,
  },
  {
    label: "راهنما",
    path: "/guide",
    icon: faPenRuler,
  },
  {
    label: "قوانین و مقررات",
    path: "/rules",
    icon: faWarning,
  },
  {
    label: "تماس با ما",
    path: "/contact-us",
    icon: faPhoneAlt,
  },

  {
    label: "ورود و خروج",
  },
  {
    label: "ورود",
    path: "/auth/login",
    icon: faSignIn,
  },
  {
    label: "ثبت نام",
    path: "/auth/register",
    icon: faBookBookmark,
  },
];

export default initMenu;
