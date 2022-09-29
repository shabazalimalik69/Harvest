import React from "react";
import { Route, Routes } from "react-router-dom";
import Pricing from "../Pages/Pricing/Pricing";
import Feature from "../Pages/Feature/Feature"
import Signup from "../Pages/Signup/Signup";
import Signin from "../Pages/Signin/Signin";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/harvest" element={<h1>Harvest</h1>} />
      <Route path="/whyHarvest" element={<h1>whyHarvest</h1>} />

      <Route path="/features" element={<Feature/>} />

      <Route path="/customers" element={<h1>Customers</h1>} />

      <Route path="/intregations" element={<h1>Intregations</h1>} />
      <Route path="/pricing" element={<Pricing/>} />

      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
  );
};

export default AllRoutes;
