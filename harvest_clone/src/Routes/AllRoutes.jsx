import React from "react";
import { Route, Routes } from "react-router-dom";
import Why_harvest from "../Pages/Why_harvest/Why_harvest";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/harvest" element={<h1>Harvest</h1>} />
      <Route path="/whyHarvest" element={<Why_harvest/>} />

      <Route path="/features" element={<h1>Features</h1>} />

      <Route path="/customers" element={<h1>Customers</h1>} />

      <Route path="/intregations" element={<h1>Intregations</h1>} />
      <Route path="/pricing" element={<h1>Pricing</h1>} />

      <Route path="/signin" element={<h1>signin</h1>} />
    </Routes>
  );
};

export default AllRoutes;
