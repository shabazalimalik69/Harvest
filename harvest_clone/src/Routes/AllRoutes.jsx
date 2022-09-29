import Customers from "../Pages/Customers/Customers";
import { Route, Routes } from "react-router-dom";
import Why_harvest from "../Pages/Why_harvest/Why_harvest";

import Pricing from "../Pages/Pricing/Pricing";
import Feature from "../Pages/Feature/Feature";
import Home from "../Pages/home/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/whyHarvest" element={<Why_harvest/>} />

      <Route path="/features" element={<Feature/>} />

      <Route path="/customers" element={<Customers/>} />

      <Route path="/intregations" element={<h1>Intregations</h1>} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/signin" element={<h1>signin</h1>} />
    </Routes>
  );
};

export default AllRoutes;
