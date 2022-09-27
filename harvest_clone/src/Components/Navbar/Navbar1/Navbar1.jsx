import { Box, Button, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar1.module.css";

const Navbar1 = () => {
  const [logo, setLogo] = useState(false);
  const [show,hide]=useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setLogo(true);
    } else {
      setLogo(false);
    }
  };

  window.addEventListener("scroll", changeBackground);


  const handleNav=()=>{
    hide(!show)
  }
  
  return (
    <Box>
    <Box bgColor={logo?"white":"rgb(251,242,235)"} h="90px"  pt={1} position="fixed" w="100%" display="flex" alignItems="center" zIndex={1000} fontFamily="MuotoWeb, Helvetica Neue, Helvetica, Arial, sans-serif" fontWeight={500} className={style.div}>
    

      <UnorderedList className={logo?style.topnav1:style.topnav}>

        <ListItem>
          <Link to="/harvest" className={style.active}>
        <Image src="harvest_Logo.png" w="100%"    mt={-5}/>
          </Link>
        </ListItem>
       

        <ListItem className={style.display}>
          <Link to="/whyHarvest">Why Harvest?</Link>
        </ListItem>

        <ListItem className={style.display}>
          <Link to="/features">Features</Link>
        </ListItem>

        <ListItem className={style.display}>
          <Link to="/customers">Customers</Link>
        </ListItem>

        <ListItem className={style.display}>
          <Link to="intregations">Intregetions</Link>
        </ListItem>

        <ListItem className={style.display}>
          <Link to="pricing">Pricing</Link>
        </ListItem>

        <ListItem className={style.display1}>
          <button onClick={handleNav}>ab</button>
        </ListItem>

        <ListItem className={style.right} >
            <Box w="100%" h="100%" display="flex" alignItems="center" paddingTop={1} >
            <Button borderRadius={10} bgColor="rgb(250,93,0)" fontSize="18px" paddingTop={1.5} paddingBottom={1.5} color="white" _hover={{outline:"rgb(250,93,0)",bgColor:"rgb(250,93,0)"}} _focus={{outline:"rgb(250,93,0)",bgColor:"rgb(250,93,0)"}}>Try Harvest Free</Button>
            </Box>
          
        </ListItem>
        <ListItem className={style.right}>
          <Link to="/signin">Sign in</Link>
        </ListItem>

      
        

      </UnorderedList>
   
    </Box>

    <Box className={show?style.box1:style.box2} >
        <Box>
            <Box>Why Harvest?</Box>
            <Box>Features</Box>
            <Box>Customers</Box>
            <Box>Intregetions</Box>
            <Box>Pricing</Box>
        </Box>

        <Box>
            <Box>Sign in</Box>
            <Box>Try Harvest Free</Box>

        </Box>

        <Box>
        <Box>
            <Box>Sign in</Box>
            <Box>Try Harvest Free</Box>

        </Box>
        </Box>

    </Box>
    </Box>
  );
};

export default Navbar1;
