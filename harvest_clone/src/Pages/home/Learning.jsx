import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Divider, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import styles from './Home.module.css';
const Learning = () => {
return (
<Box className={styles.Learning_Section}>
   <Box className={styles.Learning_Section_box1}>
      <Text className={styles.Learning_Section_box1_txt1}>LEARNING RESOURCES</Text>
      <Text className={styles.Learning_Section_box1_txt2}>Supporting your team along the way.</Text>
   </Box>

   <Box className={styles.Learning_Section_box2}>
      <Grid className={styles.Learning_Section_box2_G}>
         <GridItem
            className={styles.Learning_Section_box2_GI}>
            <Box className={styles.Learning_Section_box2_GI_sb1}>
               <Image
                  src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-folder.svg' className={styles.Learning_Section_box2_GI_sb1_img} />
            </Box>
            <Box className={styles.Learning_Section_box2_GI_sb2}>
               <Box className={styles.Learning_Section_box2_GI_sb2_b1}>
                  <Text fontSize='29px'>Guides and templates</Text>
                  <Text fontSize='18px'>Learn how to introduce your team to time tracking and make the most of
                     Harvest.</Text>
               </Box>
               <Box>
                  <ArrowForwardIcon color='#FA5D00' w={9} h={9} m='90%' />
               </Box>

            </Box>
         </GridItem>
         <GridItem className={styles.Learning_Section_box2_GI}>
            <Box className={styles.Learning_Section_box2_GI_sb1}>
               <Image 
                  src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-laptop.svg' className={styles.Learning_Section_box2_GI_sb1_img} />
            </Box>
            <Box className={styles.Learning_Section_box2_GI_sb2}>
               <Box className={styles.Learning_Section_box2_GI_sb2_b1}>
                  <Text fontSize='29px'>Webinars</Text>
                  <Text fontSize='18px'>Watch a quick intro to Harvest or sign up for a live session with one of our
                     Experts.</Text>
               </Box>
               <Box>
                  <ArrowForwardIcon color='#FA5D00' w={9} h={9} m='90%' />
               </Box>

            </Box>
         </GridItem>
         <GridItem className={styles.Learning_Section_box2_GI}>
            <Box className={styles.Learning_Section_box2_GI_sb1}>
               <Image 
                  src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-help.svg' className={styles.Learning_Section_box2_GI_sb1_img}/>
            </Box>
            <Box className={styles.Learning_Section_box2_GI_sb2}>
               <Box className={styles.Learning_Section_box2_GI_sb2_b1}>
                  <Text fontSize='29px'>Help Center</Text>
                  <Text fontSize='18px'>Find the answers to all your questions or get in touch with one of our friendly
                     Experts.</Text>
               </Box>
               <Box>
                  <ArrowForwardIcon color='#FA5D00' w={9} h={9} m='90%' />
               </Box>

            </Box>
         </GridItem>
      </Grid>
   </Box>

</Box>

)
}

export default Learning


