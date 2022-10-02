import Navbar1 from "./Components/Navbar/Navbar1/Navbar1";
import AllRoutes from "./Routes/AllRoutes";
import { Box } from "@chakra-ui/react";
import Navbar2 from "./Components/Navbar/Navbar2/Navbar2";
import { useState } from "react";
import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import AllRoutes2 from "./Routes/AllRoutes2";
import { useSelector } from "react-redux";


function App() {
  const token = useSelector((store)=>store.auth.token);
  console.log(token);
  return (
    <div className="App"  >
      {token ? (
        <Box >
          <Navbar2 />
          <Box pt="40px"  bgColor="rgb(255,248,240)">
            <AllRoutes2 />
          </Box>
        </Box>
      ) : (
        <Box>
          <Navbar1 />
          <Box pt="90px">
            <AllRoutes />
            <Footer />
          </Box>
        </Box>
      )}
    </div>
  );
}

export default App;
