import { StarIcon } from '@chakra-ui/icons'
import { Box, Button, Divider, Image, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import BottomSection from '../Feature/BottomSection'
import CustomersStory from './customerStory/CustomersStory'
import Feature from './Fitures'
import styles from "./Home.module.css"
import Intregation from './Intregation'
import Learning from './Learning'
import StartTracking from './StartTracking'
const Home = () => {
return (
<Box className={styles.home}>
    <Box className={styles.TimeTracking}>
        <Box className={styles.TimeTracking_box1}>
            <Box className={styles.TimeTracking_Sbox1}>
                {Array(5).fill('').map((_, i) => (
                <StarIcon key={i} color={i < 5 ? '#fa5d00' : 'gray.300' } />))}
                <Text>4.6</Text>
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                    (748 reviews)
                </Box>
            </Box>
            <Box className={styles.TimeTracking_Sbox2}>
                <Text noOfLines={[1, 2]} className={styles.TimeTracking_Sbox2_txt1}>
                    Time tracking your team wants to use
                </Text>
                <Text className={styles.TimeTracking_Sbox2_txt2}>
                    Finally, an easy way to track time across projects. Reports, invoicing, and more. All in just a few
                    clicks.
                </Text>
            </Box>

            <Box className={styles.TimeTracking_Sbox3}>
                <Input className={styles.TimeTracking_Sbox3_inp} variant='outline'  width= '60%' size='lg' bg='white' placeholder='Work Email'/>
                <button className={styles.TimeTracking_Sbox3_btn}>
                    Get Started
                </button>
                <Text className={styles.TimeTracking_Sbox3_txt1}>Free 30-day trial. No credit card required.
                </Text>
            </Box>
        </Box>
        <Box className={styles.TimeTracking_box2}>
            <Image className={styles.TimeTracking_box2_img}
                src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1001-Harvest-Home-SPZ-Hero/desktop-hero-img.png"
                alt="img" />
        </Box>
    </Box>


    <Box className={styles.customer_Count}>
        <Box className={styles.mytexttitle}>
            <Text>
                <Box as='span' color='#fa5d00' fontSize='md' fontWeight="600">
                    70,000+
                </Box>
                companies track time with Harvest
            </Text>
        </Box>

        <Box className={styles.divider}>
            <Divider borderColor={'#FA5D00'} orientation='horizontal' />
        </Box>
    </Box>
    <Box className={styles.customer_logos}>
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

    <Feature />


    <Intregation />



    <CustomersStory />

    <Learning />
    <Divider borderColor={'#FA5D00'} orientation='horizontal' />
    {/*
    <BottomSection /> */}

    <StartTracking />



</Box>
)
}

export default Home;