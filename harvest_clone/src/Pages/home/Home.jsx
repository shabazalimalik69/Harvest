import { StarIcon } from '@chakra-ui/icons'
import { Box, Button, Divider, Image, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import BottomSection from '../Feature/BottomSection'
import CustomersStory from './customerStory/CustomersStory'
import Feature from './Fitures'
import styles from "./Home.module.css"
import Intregation from './Intregation'
import Learning from './Learning'
const Home = () => {
  return (
    <Box className={styles.home}>
        <Box className={styles.TimeTracking} bg="#fff4ec">
            <Box className={styles.TimeTracking_box1}>
                <Box display='flex' mt='2' alignItems='center'>
                    {Array(5).fill('').map((_, i) => (
                    <StarIcon key={i} color={i < 5 ? '#fa5d00' : 'gray.300'}/>))}
                    <Text>4.6</Text>
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        (748 reviews)
                    </Box>
                </Box>
                <Box width="80%">
                    <Text fontFamily="WT Monarch Nova" fontStyle="normal" fontSize="48px" noOfLines={[1, 2]} lineHeight='56px' marginBottom='24px'>
                     Time tracking your team wants to use
                    </Text>
                    <Text fontWeight='600' fontSize= '18px' lineHeight= '26px' color= '#6D6E6D' marginBottom= "20px">
                    Finally, an easy way to track time across projects. Reports, invoicing, and more. All in just a few clicks.
                    </Text>
                </Box>

                <Box>
                    <Input variant='outline' placeholder='Work Email' size='lg' width="70%" bg="#ffff"/>
                    <Button marginLeft='15px' bg="#fa5d00" color="#ffff" size='lg' borderRadius='10px'>
                        Get Started
                    </Button>
                    <Text fontWeight='600' fontSize= '15px' lineHeight= '20px' color= '#9F9F9F' marginBottom= "20px 0 0">Free 30-day trial. No credit card required.
                    </Text>
                </Box>
            </Box>
            <Box className={styles.TimeTracking_box2}>
            <Image src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1001-Harvest-Home-SPZ-Hero/desktop-hero-img.png" alt="img" />
            </Box>
        </Box>
        

        <Box className={styles.customer_Count}>
            <Box className={styles.mytexttitle}>
                 <Text > 
                 <Box as='span' color='#fa5d00' fontSize='md' fontWeight="600">
                 70,000+
                 </Box>
                 companies track time with Harvest
                  </Text>
            </Box>

            <Box className={styles.divider}>
               <Divider  borderColor={'#FA5D00'} orientation='horizontal' />
            </Box>
       </Box>
       <Box className={styles.customer_logos}>
                <img
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize"
                alt="img"
                />
            <img
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize"
                alt="img"
                />
            <img
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize"
                alt="img"
                />
            <img
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize"
                alt="img"
                />
            <img
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize"
                alt="img"
                />
            <img
               src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-deloitte.svg?noresize"
               alt="img"
               />
            <img
              src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-lululemon.svg?noresize"
              alt="img"
              />
            <img
              src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize"
              alt="img"
             />
           </Box>
       <Divider borderColor={'#FA5D00'} orientation='horizontal' paddingBottom='50px' />

       <Feature/>


       <Intregation/>

       

       <CustomersStory/>

       <Learning/>

       <BottomSection/>

       
            
    </Box>
  )
}

export default Home;