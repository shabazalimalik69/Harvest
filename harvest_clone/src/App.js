import logo from "./logo.svg";
import "./App.css";
import Navbar1 from "./Components/Navbar/Navbar1/Navbar1";
import AllRoutes from "./Routes/AllRoutes";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Box pt="90px">
        <AllRoutes />
      </Box>
    </div>
  );
}

export default App;
