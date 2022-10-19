import { Routes, Route } from "react-router-dom";
import Checkout from "../pages/Checkout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import OTP from "../pages/OTP";
import Pricing from "../pages/Pricing";
import PrivateRoute from "./PrivateRoute";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/otp" element={<OTP />}></Route>
    </Routes>
  );
}
