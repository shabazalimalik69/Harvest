import React from "react";
import { Route, Routes } from "react-router-dom";
import Customers from "../Pages/Customers/Customers";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/harvest" element={<h1>Harvest</h1>} />
      <Route path="/whyHarvest" element={<h1>whyHarvest</h1>} />

      <Route path="/features" element={<h1>Features</h1>} />

      <Route path="/customers" element={<Customers />} />

      <Route path="/intregations" element={<h1>Intregations</h1>} />
      <Route path="/pricing" element={<h1>Pricing</h1>} />

      <Route path="/signin" element={<h1>signin</h1>} />
    </Routes>
  );
};

export default AllRoutes;
