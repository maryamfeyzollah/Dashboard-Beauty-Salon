import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/userPage/Users";
import AuthLayout from "./components/Layout/AuthLayout";
import GuestLayout from "./components/Layout/GuestLayout";
import Login from "./pages/auth/Login";

import RegisterIndex from "./pages/auth/Register";
import ServiceDashboard from "./pages/servicesPage/ServiceDashboard";
import PersonelDashboard from "./pages/personelPage/PersonelDashboard";
import BookingDashboard from "./pages/bookingPage/BookingDashboard";
import BookingPersonel from "./pages/bookingPage/BookingPersonel";
import BookingSummary from "./pages/bookingPage/BookingSummary";
import ReserveDashboard from "./pages/reservePage/ReserveDashboard";
import Guide from "./pages/Guide";
import Rules from "./pages/Rules";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/users" element={<Users />}></Route>

        <Route path="/services" element={<ServiceDashboard />}></Route>
        <Route path="/personels" element={<PersonelDashboard />}></Route>
        <Route path="/booking" element={<BookingDashboard />}></Route>
        <Route path="/booking/:serviceId" element={<BookingPersonel />}></Route>
        <Route path="/guide" element={<Guide />}></Route>
        <Route path="/rules" element={<Rules />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route
          path="/booking/summary/:serviceId"
          element={<BookingSummary />}
        ></Route>
        <Route path="/reserve" element={<ReserveDashboard />}></Route>
      </Route>
      
      <Route path="/auth" element={<GuestLayout />}>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/register" element={<RegisterIndex />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
