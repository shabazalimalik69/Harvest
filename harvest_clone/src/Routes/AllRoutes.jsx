import Customers from "../Pages/Customers/Customers";
import { Route, Routes } from "react-router-dom";
import Why_harvest from "../Pages/Why_harvest/Why_harvest";

import Pricing from "../Pages/Pricing/Pricing";
import Feature from "../Pages/Feature/Feature";
import Signup from "../Pages/Signup/Signup";
import Signin from "../Pages/Signin/Signin";
import Home from "../Pages/home/Home";
import Intregations from "../Pages/intregations/Intregations";



const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/whyHarvest" element={<Why_harvest />} />

      <Route path="/features" element={<Feature />} />

      <Route path="/customers" element={<Customers />} />

      <Route path="/intregations" element={<Intregations/>} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />

      {/* Afer sign in Routes */}
    </Routes>
  );
};

export default AllRoutes;
