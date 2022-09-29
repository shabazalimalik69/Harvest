import { Box, Divider, Text } from '@chakra-ui/react';
import React from 'react'
import ImageSlider from './ImageSlider';
import { SlideData } from './SlideData';
import styles from '../Home.module.css';
const CustomersStory = () => {
  return (
    <Box className={styles.Feature_Section} textAlign='start' mt='40px' >
      <Divider borderColor={'#FA5D00'} orientation='horizontal'  />
      <Box mt='80px' >
        <Text fontSize="20px" fontWeight='600' mb='18px' color='#FA5D00'>CUSTOMER STORIES</Text>
        <Text fontSize="42px" fontWeight='400' mb='20px' color='#1D1E1C'>Helping teams thrive since 2006</Text>
        <Text fontSize="26px" fontWeight='400' mb='20px' color='#1D1E1C'>Teams of all sizes, types, and industries trust Harvest to track their time.</Text>
      </Box>
      <Box mt='80px'>
      <ImageSlider  slides={SlideData} />
      </Box>
      <Divider borderColor={'#FA5D00'} orientation='horizontal' mt='80px' />
    </Box>
  );
}

export default CustomersStory