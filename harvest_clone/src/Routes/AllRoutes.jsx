import Customers from "../Pages/Customers/Customers";
import { Route, Routes } from "react-router-dom";
import Why_harvest from "../Pages/Why_harvest/Why_harvest";

import Pricing from "../Pages/Pricing/Pricing";
import Feature from "../Pages/Feature/Feature";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/harvest" element={<h1>Harvest</h1>} />
      <Route path="/whyHarvest" element={<Why_harvest />} />

      <Route path="/features" element={<Feature />} />

      <Route path="/customers" element={<Customers />} />

      <Route path="/intregations" element={<h1>Intregations</h1>} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/signin" element={<h1>signin</h1>} />

      {/* Afer sign in Routes */}

      <Route path="/time" element={<h1>Time</h1>} />
      <Route path="/expenses" element={<h1>Expenses</h1>} />
      <Route path="/projects" element={<h1>Projects</h1>} />
      <Route path="/team" element={<h1>Team</h1>} />
      <Route path="/reports" element={<h1>Reports</h1>} />
      <Route path="/invoices" element={<h1>Invoices</h1>} />
      <Route path="/manage" element={<h1>Manage</h1>} />
      <Route path="/company_account" element={<h1>Setting</h1>} />
    </Routes>
  );
};

export default AllRoutes;
