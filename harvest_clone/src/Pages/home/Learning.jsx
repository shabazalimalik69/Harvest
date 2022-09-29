import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Divider, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import styles from './Home.module.css';
const Learning = () => {
  return (
    <Box display='flex' className={styles.Learning_Section} textAlign='start' mt='40px' gap="50px" mb='60px'>
        <Box w='30%' margin='auto'>
        <Text fontSize="20px" fontWeight='600' mb='18px' color='#FA5D00'>LEARNING RESOURCES</Text>
        <Text fontSize="42px" fontWeight='400' mb='20px' color='#1D1E1C'>Supporting your team along the way.</Text>
        
        </Box>
        {/* <Divider borderColor={'#FA5D00'} orientation='horizontal' /> */}
        <Box w='50%' margin='auto'>
        <Grid templateColumns='repeat(1, 1fr)' templateRows='repeat(3, 1fr)'  >
                <GridItem borderTop="1px solid #FA5D00"  display='flex' gap='30px' padding='20px' className={styles.Learning_Section_txt} >
                   <Box mt='25px'>
                    <Image mb='20px' h='75px' src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-folder.svg' />
                   </Box> 
                   <Box  w='65%' textAlign='start' display='flex'>
                    <Box>
                    <Text fontSize='29px'>Guides and templates</Text>
                    <Text fontSize='18px'>Learn how to introduce your team to time tracking and make the most of Harvest.</Text>
                    </Box>
                    <Box>
                    <ArrowForwardIcon color='#FA5D00' w={9} h={9} m='90%'/>
                    </Box>
                    
                   </Box>
                </GridItem>
                <GridItem borderTop="1px solid #FA5D00"  display='flex' gap='30px' padding='20px' className={styles.Learning_Section_txt} >
                   <Box mt='25px'>
                    <Image mb='20px' h='75px' src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-laptop.svg' />
                   </Box> 
                   <Box  w='65%' textAlign='start' display='flex'>
                    <Box>
                    <Text fontSize='29px'>Webinars</Text>
                    <Text fontSize='18px'>Watch a quick intro to Harvest or sign up for a live session with one of our Experts.</Text>
                    </Box>
                    <Box>
                    <ArrowForwardIcon color='#FA5D00' w={9} h={9} m='90%'/>
                    </Box>
                    
                   </Box>
                </GridItem>
                <GridItem borderTop="1px solid #FA5D00"  display='flex' gap='30px' padding='20px' className={styles.Learning_Section_txt} >
                   <Box mt='25px'>
                    <Image mb='20px' h='75px' src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-help.svg' />
                   </Box> 
                   <Box  w='65%' textAlign='start' display='flex'>
                    <Box>
                    <Text fontSize='29px'>Help Center</Text>
                    <Text fontSize='18px'>Find the answers to all your questions or get in touch with one of our friendly Experts.</Text>
                    </Box>
                    <Box>
                    <ArrowForwardIcon color='#FA5D00' w={9} h={9} m='90%'/>
                    </Box>
                    
                   </Box>
                </GridItem>
            </Grid>
        </Box>

    </Box>

  )
}

export default Learning


// borderLeft:   "1px solid red",
//   borderRight: " 1px solid red",
//   borderBottom:" 1px solid red",
//   borderTop:" 1px solid #dcdcdc",