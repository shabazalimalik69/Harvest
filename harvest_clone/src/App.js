import './App.css';
import Navbar1 from './Components/Navbar/Navbar1/Navbar1';
import AllRoutes from './Routes/AllRoutes';
import { Box } from '@chakra-ui/react';
import Navbar2 from './Components/Navbar/Navbar2/Navbar2';
import { useState } from 'react';

function App() {
  const [token,setToken]=useState(false)
  return (
    <div className="App">

      {token?
      <Box>
      <Navbar2 setToken={setToken}/>
      </Box>
      :
      <Box>
      <Navbar1 setToken={setToken}/>
      <Box pt="90px">

      <AllRoutes/>
      </Box>
      </Box>}
    </div>
  );
}

export default App;
