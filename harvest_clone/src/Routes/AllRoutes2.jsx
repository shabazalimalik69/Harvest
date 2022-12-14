import React from "react";
import { Route, Routes } from "react-router-dom";
import NewProjects from "../FunctionsPage/Projects/NewProject/NewProjects";
import Projects from "../FunctionsPage/Projects/Projects";
import PrivateRouter from "../hoc/PrivateRoute";
import Expanses from "../Pages/Expanses/Expanses";
import Time from "../Pages/Time/Time";
const AllRoutes2 = () => {
  return (
    <Routes>
      <Route path="/time" element={<PrivateRouter>
      <Time/>
      </PrivateRouter>
      } />
      <Route path="/expenses" element={<PrivateRouter> <Expanses />
      </PrivateRouter>
      } />
      <Route path="/projects" element={<PrivateRouter> <Projects/>
      </PrivateRouter>
      } />
      <Route path="/team" element={<h1>Team</h1>} />
      <Route path="/reports" element={<h1>Reports</h1>} />
      <Route path="/invoices" element={<h1>Invoices</h1>} />
      <Route path="/manage" element={<h1>Manage</h1>} />
      <Route path="/company_account" element={<h1>Setting</h1>} />
      <Route path="/newProjects" element={<PrivateRouter> <NewProjects/>
      </PrivateRouter>
      }/>
    </Routes>
  );
};

export default AllRoutes2;
