import logo from './logo.svg';
import './App.css';
import Navbar1 from './Components/Navbar/Navbar1/Navbar1';
import AllRoutes from './Routes/AllRoutes';
import { Box } from '@chakra-ui/react';
import { Footer } from './Components/Footer/Footer';
import Feature from './Pages/Features/Features'

function App() {
  return (
    <div className="App">
      <AllRoutes/>
    </div>
  );
}

export default App;
