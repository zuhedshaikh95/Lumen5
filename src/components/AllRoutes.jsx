import {Routes, Route} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Pricing from "../pages/Pricing";

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/pricing" element={<Pricing />}></Route>
        </Routes>
    )
}