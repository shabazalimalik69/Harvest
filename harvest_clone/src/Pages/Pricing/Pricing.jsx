import {
  Box,
  Button,
  FormLabel,
  Grid,
  GridItem,
  Switch,
  Text,
  Divider,
} from "@chakra-ui/react";
import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AskedQsn } from "./AskedQsn";
import FeaturesSection from "./FeaturesSection";
import FeaturesSection2 from "./FeaturesSection2";
import style from "./Pricing.module.css";

const Pricing = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const toggleChange = () => {
    setToggle(!toggle);
  };

  return (
    <Box
      bgColor="rgb(255,244,236)"
      // h="100vh"
      pb='60px'
    >
      <Text fontSize={50} fontWeight={350} paddingTop={5}>
        Pricing
      </Text>

      <Box
        w="100%"
        display="flex"
        justifyContent="center"
        // border="1px solid red"
        alignItems="center"
        mt="30px"
        fontSize="20px"
      >
        <FormLabel pr={1} fontSize="20px" fontWeight={400}>
          Monthly
        </FormLabel>
        <Switch colorScheme="orange" onChange={toggleChange} />
        <FormLabel pl={2} fontSize="20px" fontWeight={400}>
          Annual
        </FormLabel>
      </Box>

      <Text fontSize="15px" pt={2}>
        Save <b>10%</b> with annual plan
      </Text>

      <Box
        // border="1px solid red"
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={10}
        w="100%"
      >
        <Box
          // border="1px solid red"
          display={["block", "block", "flex", "flex", "flex"]}
          justifyContent="center"
          alignItems="center"
          gap={["20px", "20px", "5%", "5%", "5%"]}
          fontSize={19}
          w={["95%", "95%", "95%", "95%", "80%"]}
          h={["auto", "auto", "370px", "300px", "275px"]}
        >
          <Box
            border="1px solid rgb(250, 93, 0)"
            w={["100%", "100%", "50%", "50%", "50%"]}
            h="100%"
            borderRadius="12px 0px 12px 0px"
            display="flex"
            justifyContent="space-between"
            flexDirection="column"
            mb={[7, 7, 0, 0, 0]}
          >
            <Box display="flex" gap="5%" pt={4} pl={6} pr={6}>
              <Box w="50%" pl={4}>
                <Text fontSize={40} textAlign="start">
                  Free
                </Text>
                <Text textAlign="start" pt={3}>
                  1 seat
                </Text>

                <Text textAlign="start">2 projects</Text>
              </Box>

              <Box w="50%" pr={4}>
                <Text textAlign="end" fontSize={[40, 40, 40, 40, 70]}>
                  <sup className={style.text1}>$</sup> 0
                </Text>
                <Text
                  textAlign="end"
                  fontSize={15}
                  marginTop={[-2, -2, -4, -4, -4]}
                >
                  forever
                </Text>
              </Box>
            </Box>

            <Box pt={8} w="100%" pb={6}>
              <Button
                color="white"
                borderRadius={12}
                p={5}
                pl={4}
                pr={4}
                w="85%"
                bgColor="rgb(24,132,51)"
                _hover={{
                  outline: "rgb(24,132,51)",
                  bgColor: "rgb(24,132,51)",
                }}
                _focus={{
                  outline: "rgb(56, 204, 56)",
                  bgColor: "rgb(56, 204, 56)",
                }}
                onClick={()=>{navigate("/signup")}}
              >
                30-days free trial
              </Button>
              <Text fontSize={16} pt={1}>
                No credit card required
              </Text>
            </Box>
          </Box>

          <Box
            border="1px solid rgb(250, 93, 0)"
            w={["100%", "100%", "50%", "50%", "50%"]}
            h="100%"
            borderRadius="12px 0px 12px 0px"
            bgImage="url('bg1.svg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            display="flex"
            justifyContent="space-between"
            flexDirection="column"
          >
            <Box display="flex" gap="5%" pt={4} pl={6} pr={6}>
              <Box w="50%" pl={4}>
                <Text fontSize={40} textAlign="start">
                  Pro
                </Text>
                <Text textAlign="start" pt={3}>
                  Unlimited seats
                </Text>

                <Text textAlign="start">Unlimited projects</Text>
              </Box>

              <Box w="50%" pr={4}>
                <Text
                  textAlign={["end", "end", "end", "end", "end"]}
                  fontSize={[30, 30, 40, 40, 70]}
                  className={style.text1}
                >
                  <sup className={style.text1}>$</sup> {toggle ? 10.8 : 12}
                </Text>
                <Text
                  textAlign="end"
                  fontSize={15}
                  marginTop={[-2, -2, -4, -4, -4]}
                >
                  {toggle
                    ? "per seat per month,billed yearly"
                    : " per seat per month"}
                </Text>
              </Box>
            </Box>

            <Box pt={8} w="100%" pb={6}>
              <Button
                color="white"
                borderRadius={12}
                p={5}
                pl={4}
                pr={4}
                w="85%"
                bgColor="rgb(24,132,51)"
                _hover={{
                  outline: "rgb(24,132,51)",
                  bgColor: "rgb(24,132,51)",
                }}
                _focus={{
                  outline: "rgb(56, 204, 56)",
                  bgColor: "rgb(56, 204, 56)",
                }}
                onClick={()=>{navigate("/signup")}}
              >
                30-days free trial
              </Button>
              <Text fontSize={16} pt={1}>
                No credit card required
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>


{/* companies section */}


      <Box className={style.customer_Count}>
        <Box className={style.mytexttitle}>
            <Text>
                <Box as='span' color='#fa5d00' fontSize='md' fontWeight="600">
                    70,000+
                </Box>
                companies track time with Harvest
            </Text>
        </Box>

        <Box className={style.divider}>
            <Divider borderColor={'#FA5D00'} orientation='horizontal' />
        </Box>
    </Box>
    <Box className={style.customer_logos}>
        <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize"
            alt="img" />
        <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize"
            alt="img" />
        <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize"
            alt="img" />
        <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize"
            alt="img" />
        <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize"
            alt="img" />
        <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-deloitte.svg?noresize"
            alt="img" />
        <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-lululemon.svg?noresize"
            alt="img" />
        <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize"
            alt="img" />
    </Box>
    <Divider borderColor={'#FA5D00'} orientation='horizontal' paddingBottom='50px' />





    {/* Features section  */}

    

    <FeaturesSection/>

<FeaturesSection2/>
<Divider borderColor={'#FA5D00'} orientation='horizontal' />
<AskedQsn/>
<Divider borderColor={'#FA5D00'} orientation='horizontal' />

<Button colorScheme='orange' bg='#FA5D00' color='#ffff' margin='40px 0' size='lg' borderRadius='15px' onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} >Back To plan & Pricing</Button>
    </Box>
  );
};

export default Pricing;
