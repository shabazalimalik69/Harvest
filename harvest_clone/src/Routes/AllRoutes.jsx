
import Customers from "../Pages/Customers/Customers";

import { Footer } from "../Components/Footer/Footer";
import Navbar1 from "../Components/Navbar/Navbar1/Navbar1";
import Feature from "../Pages/Features/Features";

import Pricing from "../Pages/Pricing/Pricing";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/harvest" element={<h1>Harvest</h1>} />
      <Route path="/whyHarvest" element={<h1>whyHarvest</h1>} />

      <Route path="/features" element={
      <>
      <Navbar1/>
      <Feature/>
      <Footer/>
      </>
    } />


 <Route path="/pricing" element={
      <>
      <Navbar1/>
      <Customers/>
      <Footer/>
      </>
    } />
      <Route path="/intregations" element={<h1>Intregations</h1>} />
      <Route path="/pricing" element={
      <>
      <Navbar1/>
      <Pricing/>
      <Footer/>
      </>
    } />
    
      <Route path="/pricing" element={<Pricing/>} />


      <Route path="/signin" element={<h1>signin</h1>} />
    </Routes>
  );
};

export default AllRoutes;
