import {
  Box,
  Button,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Navbar1.module.css";
import {
  AiOutlineApple,
  AiOutlineAndroid,
  AiOutlineMenu,
} from "react-icons/ai";

const Navbar1 = () => {
  const [logo, setLogo] = useState(false);
  const [show, hide] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setLogo(true);
    } else {
      setLogo(false);
    }
  };
  const navigate = useNavigate();
 
  const handleToggle = ()=>{
  
   navigate("/signin")
  }

  window.addEventListener("scroll", changeBackground);

  const handleNav = () => {
    hide(!show);
  };

  const handleClose = () => {
    setTimeout(() => {
      hide(false);
    }, 500);
  };

  return (
    <Box  bgColor="rgb(255,244,236)">
      <Box
        bgColor={logo ? "white" : "rgb(255,244,236)"}
        h="90px"
        pt={1}
        position="fixed"
        w="100%"
        display="flex"
        alignItems="center"
        zIndex={1000}
        fontFamily="MuotoWeb, Helvetica Neue, Helvetica, Arial, sans-serif"
        fontWeight={500}
        className={style.div}
      >
        <UnorderedList className={logo ? style.topnav1 : style.topnav}>
          <ListItem>
            <Link to="/" className={style.active}>
              <Image src="harvest_Logo.png" w="100%" mt={-5} />
            </Link>
          </ListItem>

          <ListItem className={style.display}>
            <Link to="/whyHarvest">Why Harvest ?</Link>
          </ListItem>

          <ListItem className={style.display}>
            <Link to="/features">Features</Link>
          </ListItem>

          <ListItem className={style.display}>
            <Link to="/customers">Customers</Link>
          </ListItem>

          <ListItem className={style.display}>
            <Link to="/intregations">Intregations</Link>
          </ListItem>

          <ListItem className={style.display}>
            <Link to="/pricing">Pricing</Link>
          </ListItem>

          <ListItem className={style.display1}>
            <Text
              onClick={handleNav}
              w="100%"
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <AiOutlineMenu />
              <Text>&nbsp; Menu</Text>
            </Text>
          </ListItem>

          <ListItem className={style.right}>
            <Box
              w="100%"
              h="100%"
              display="flex"
              alignItems="center"
              // paddingTop={1}
            >
             <Link to="/signup">
              <Button
                borderRadius={10}
                bgColor="rgb(250,93,0)"
                fontSize="18px"
                paddingTop={1.5}
                paddingBottom={1.5}
                color="white"
                mt={-2}
                _hover={{ outline: "rgb(250,93,0)", bgColor: "rgb(250,93,0)" }}
                _focus={{ outline: "rgb(250,93,0)", bgColor: "rgb(250,93,0)" }}
              >
                Try Harvest Free
              </Button></Link>
            </Box>
          </ListItem>
          <ListItem className={style.right}>
           <Text onClick={handleToggle}> <Link to="/signin">Sign in</Link></Text>
          </ListItem>
        </UnorderedList>
      </Box>

      <Box className={show ? style.box1 : style.box2}>
        <Box h="75%">
          <Box className={style.box3}>
            <Box className={style.box31}>
              {" "}
              <Link to="/whyHarvest">
                <Box onClick={handleClose}>Why Harvest ?</Box>
              </Link>
            </Box>
            <Box className={style.box31}>
              {" "}
              <Link to="/features">
                <Box onClick={handleClose}>Features</Box>
              </Link>
            </Box>
            <Box className={style.box31}>
              {" "}
              <Link to="/customers">
                <Box onClick={handleClose}>Customers</Box>
              </Link>
            </Box>
            <Box className={style.box31}>
              {" "}
              <Link to="/intregations">
                <Box onClick={handleClose}>Intregations</Box>
              </Link>
            </Box>
            <Box className={style.box31}>
              {" "}
              <Link to="/pricing">
                <Box onClick={handleClose}>Pricing</Box>
              </Link>
            </Box>
          </Box>

          <Box className={style.box4}>
            <Box className={style.box41}>
              {" "}
              <Button
                w="100%"
                h="100%"
                borderRadius={8}
                bgColor="rgb(65, 65, 65)"
                _hover={{
                  outline: "rgb(65, 65, 65)",
                  bgColor: "rgb(65, 65, 65)",
                }}
                _focus={{
                  outline: "rgb(65, 65, 65)",
                  bgColor: "rgb(65, 65, 65)",
                }}
              >
                <Box onClick={handleToggle}>Sign in</Box>
              </Button>{" "}
            </Box>
            <Box className={style.box41}>
              {" "}
              <Button
                w="100%"
                h="100%"
                borderRadius={8}
                bgColor="rgb(65, 65, 65)"
                _hover={{
                  outline: "rgb(65, 65, 65)",
                  bgColor: "rgb(65, 65, 65)",
                }}
                _focus={{
                  outline: "rgb(65, 65, 65)",
                  bgColor: "rgb(65, 65, 65)",
                }}
              >
                <Box>Try Harvest Free</Box>
              </Button>
            </Box>
          </Box>
        </Box>

        <Box h="11%" className={style.b1}>
          <Text fontWeight={500} padding={2}>
            Get the Mobile App
          </Text>

          <Box className={style.box5}>
            <Box className={style.box51}>
              {" "}
              <a
                href="https://apps.apple.com/us/app/harvest-time-expense-tracker/id355395846"
                target="_blank"
              >
                {" "}
                <Button
                  w="100%"
                  h="100%"
                  borderRadius={8}
                  bgColor="rgb(65, 65, 65)"
                  _hover={{
                    outline: "rgb(65, 65, 65)",
                    bgColor: "rgb(65, 65, 65)",
                  }}
                  _focus={{
                    outline: "rgb(65, 65, 65)",
                    bgColor: "rgb(65, 65, 65)",
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <AiOutlineApple fontSize="20px" />
                    <Text pl={1}>IPhone</Text>
                  </Box>
                </Button>
              </a>{" "}
            </Box>
            <Box className={style.box51}>
              {" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.harvestapp"
                target="_blank"
              >
                <Button
                  w="100%"
                  h="100%"
                  borderRadius={8}
                  bgColor="rgb(65, 65, 65)"
                  _hover={{
                    outline: "rgb(65, 65, 65)",
                    bgColor: "rgb(65, 65, 65)",
                  }}
                  _focus={{
                    outline: "rgb(65, 65, 65)",
                    bgColor: "rgb(65, 65, 65)",
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <AiOutlineAndroid fontSize="20px" />
                    <Text pl={1}>Andriod</Text>
                  </Box>
                </Button>
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar1;
