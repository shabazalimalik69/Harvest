import Customers from "../Pages/Customers/Customers";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../Components/Footer/Footer";
import Navbar1 from "../Components/Navbar/Navbar1/Navbar1";
import Feature from "../Pages/Features/Features";

import Pricing from "../Pages/Pricing/Pricing";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/harvest" element={<h1>Harvest</h1>} />
      <Route path="/whyHarvest" element={<h1>whyHarvest</h1>} />
      <Route path="/features" element={<Feature />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/intregations" element={<h1>Intregations</h1>} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/signin" element={<h1>signin</h1>} />
    </Routes>
  );
};

export default AllRoutes;
