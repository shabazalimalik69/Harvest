import React from 'react'
import { Box,Text,Grid, Image, Link, Divider, GridItem, Button} from "@chakra-ui/react";
import { ArrowDownIcon } from '@chakra-ui/icons'

import styles from "./Home.module.css"


const Feature = () => {
  return (
    <Box className={styles.Feature_Section} textAlign='start' mt='40px'>
        <Text fontSize="20px" fontWeight='600' mb='18px' color='#FA5D00'>FEATURES</Text>
      {/* Top Section */}
    <Box>
    <Text fontSize="42px" fontWeight='400' mb='20px' color='#1D1E1C'>Everything your team needs to keep ticking</Text>
    <Text fontSize="26px" fontWeight='400' mb='20px' color='#1D1E1C'>Intuitive time tracking and powerful insights that help your team thrive.</Text>
    </Box>

    <Box display="flex" gap="50px" mt='35px'>
        <Box width="30%">
            <Grid templateColumns='repeat(1, 1fr)' templateRows='repeat(3, 1fr)' gap='35px' >
                <GridItem border="1px solid #FA5D00" display='flex' gap='30px' padding='20px' borderRadius='25px'>
                   <Box mt='25px'>
                    <Image mb='20px' width='50px' src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-time.svg' />
                   </Box> 
                   <Box  w='80%' textAlign='start'>
                    <Text fontSize='26px'>Time tracking</Text>
                    <Text fontSize='17px'>Simple and intuitive time tracking your team will love.</Text>
                   </Box>
                </GridItem>
                <GridItem border="1px solid #FA5D00" display='flex' gap='30px' padding='20px' borderRadius='25px'>
                   <Box mt='25px'>
                    <Image mb='20px' width='50px' src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-reporting.svg' />
                   </Box> 
                   <Box  w='80%' textAlign='start'>
                    <Text fontSize='26px'>Reports & analysis</Text>
                    <Text fontSize='17px'>Unlock the insights that help your business thrive.</Text>
                   </Box>
                </GridItem>
                <GridItem border="1px solid #FA5D00" display='flex' gap='30px' padding='20px' borderRadius='25px'>
                   <Box mt='25px'>
                    <Image mb='20px' width='50px' src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-invoicing.svg' />
                   </Box> 
                   <Box  w='80%' textAlign='start'>
                    <Text fontSize='26px'>Invoicing & payments</Text>
                    <Text fontSize='17px'>Seamless invoicing and fast online payments.</Text>
                   </Box>
                </GridItem>
            </Grid>

            <Button bg='#1D1E1C' color='#ffff' margin='60px 0' size='lg' borderRadius='15px'> Discover all features </Button>
        </Box>
        <Box width="60%">
            <Image src='https://www.getharvest.com/hs-fs/hubfs/screenshot-home-timesheets.png?width=1700&name=screenshot-home-timesheets.png'/>
        </Box>
    </Box>
    <Divider borderColor={'#FA5D00'} orientation='horizontal' />
    </Box>
  )
}

export default Feature;
