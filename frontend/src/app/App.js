import React from "react";
import HomePage from "../pages/Home"
import SignInPage from "../pages/SignIn"
import SignUpPage from "../pages/SignUp"
import CustomerRegisterPage from "../pages/CustomerRegister"
import BookingPage from "../pages/Booking"
import AdminDashBoardPages from "../pages/AdminDashBoard"
import DriverShedulePage from "../pages/DriverShedule"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/AdminDashBoard/page/home"
import ManagePayment from "../pages/AdminDashBoard/page/managePayment";
import ManageBooking from "../pages/AdminDashBoard/page/manageBooking";
import ManageRate from "../pages/AdminDashBoard/page/manageRate";
import Management from "../pages/AdminDashBoard/page/management";
import ManageCar from "../pages/AdminDashBoard/page/manageCar";
import ManageCustomerBooking from "../pages/AdminDashBoard/page/manageCustomerBooking";
import ManageDriver from "../pages/AdminDashBoard/page/manageDriver";


function App() {
  return (
    //  <HomePage /><SignInPage />

    // <SignUpPage />
    // <CustomerRegisterPage />
    // <DriverShedulePage/>
    <Routes>
      <Route exact index element={<HomePage />} />
      <Route exact path="/SignInPage" element={<SignInPage />} />
      <Route exact path="/CustomerRegisterPage" element={<CustomerRegisterPage />} />
      <Route exact path="/BookingPage" element={<BookingPage />} />
      <Route exact path="/DriverShedulePage" element={<DriverShedulePage />} />


      <Route exact path="/AdminDashBoardPages" element={<AdminDashBoardPages />}>
        <Route exact path="Home" element={<Home />} />
        <Route exact path="ManagePayment" element={<ManagePayment />} />
        <Route exact path="ManageDriver" element={<ManageDriver />} />
        <Route exact path="ManageCar" element={<ManageCar />} />
        <Route exact path="ManageRate" element={<ManageRate />} />
        <Route exact path="ManageCustomerBooking" element={<ManageCustomerBooking />} />
        <Route exact path="Management" element={<Management />} />
        <Route exact path="ManageBooking" element={<ManageBooking />} />

      </Route>


    </Routes>
    // <AdminDashBoardPages />
    // <BookingPage />
  );
}
export default App;