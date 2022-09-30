import React from "react";
import { Route, Routes } from "react-router-dom";
import NewProjects from "../FunctionsPage/Projects/NewProject/NewProjects";
import Projects from "../FunctionsPage/Projects/Projects";
import Expanses from "../Pages/Expanses/Expanses";
const AllRoutes2 = () => {
  return (
    <Routes>
      <Route path="/time" element={<h1>Time</h1>} />
      <Route path="/expanses" element={<Expanses />} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/team" element={<h1>Team</h1>} />
      <Route path="/reports" element={<h1>Reports</h1>} />
      <Route path="/invoices" element={<h1>Invoices</h1>} />
      <Route path="/manage" element={<h1>Manage</h1>} />
      <Route path="/company_account" element={<h1>Setting</h1>} />
      <Route path="/newProjects" element={<NewProjects/>}/>
    </Routes>
  );
};

export default AllRoutes2;
