import React from "react";
import HomePage from "../pages/Home"
import SignInPage from "../pages/SignIn"
import SignUpPage from "../pages/SignUp"
import CustomerRegisterPage from "../pages/CustomerRegister"
import BookingPage from "../pages/Booking"
import AdminDashBoardPages from "../pages/AdminDashBoard"
import DriverShedulePage from "../pages/DriverShedule"
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    //  <HomePage /><SignInPage />
    
    // <SignUpPage />
    // <CustomerRegisterPage />
    // <DriverShedulePage/>
    <Routes>
        <Route exact index element={<HomePage />}/>
    </Routes>
    // <AdminDashBoardPages />
    // <BookingPage />
  );
}
export default App;