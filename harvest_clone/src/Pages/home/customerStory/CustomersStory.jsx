import { Box, Divider, Text } from '@chakra-ui/react';
import React from 'react'
import ImageSlider from './ImageSlider';
import { SlideData } from './SlideData';
import styles from '../Home.module.css';
const CustomersStory = () => {
return (
<Box className={styles.customer_Section}>
  <Divider borderColor={'#FA5D00'} orientation='horizontal' />
  <Box className={styles.customer_Section_box1}>
    <Text className={styles.customer_Section_box1_txt1}>CUSTOMER STORIES</Text>
    <Text className={styles.customer_Section_box1_txt2}>Helping teams thrive since 2006</Text>
    <Text className={styles.customer_Section_box1_txt3}>Teams of all sizes, types, and industries trust
      Harvest to track their time.</Text>
  </Box>
  <Box  className={styles.customer_Section_box2}>
    <ImageSlider slides={SlideData} className={styles.customer_Section_box2_sl}/>
  </Box>
  <Divider borderColor={'#FA5D00'} orientation='horizontal' mt='80px' />
</Box>
);
}

export default CustomersStory