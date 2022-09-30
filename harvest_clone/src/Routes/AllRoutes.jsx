import Customers from "../Pages/Customers/Customers";
import { Route, Routes } from "react-router-dom";
import Why_harvest from "../Pages/Why_harvest/Why_harvest";

import Pricing from "../Pages/Pricing/Pricing";
import Feature from "../Pages/Feature/Feature";
import Signup from "../Pages/Signup/Signup";
import Signin from "../Pages/Signin/Signin";
import Home from "../Pages/home/Home";
import Intregations from "../Pages/intregations/Intregations";
import { Footer } from "../Components/Footer/Footer";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<><Home/> <Footer/></>} />
      <Route path="/whyHarvest" element={<><Why_harvest /><Footer/></>} />

      <Route path="/features" element={<><Feature /><Footer/></>} />

      <Route path="/customers" element={<><Customers /><Footer/></>} />

      <Route path="/intregations" element={<><Intregations/><Footer/></>} />
      <Route path="/pricing" element={<><Pricing /><Footer/></>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />

      {/* Afer sign in Routes */}
    </Routes>
  );
};

export default AllRoutes;
