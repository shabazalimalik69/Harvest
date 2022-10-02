
import { Route, Routes } from "react-router-dom";
import TimeTracking from "./Time_Tracking";
import ReportAnalysis from "./Report_Analysis";
import Invoice from "./Invoice";


const AllRoutes3 = () => {
  return (
    <Routes>
      <Route path="/time_tracking" element={<TimeTracking/>} />
      <Route path="/report_analysis" element={<ReportAnalysis />} />

      <Route path="/invoice" element={<Invoice />} />
    </Routes>
  );
};

export default AllRoutes3;
