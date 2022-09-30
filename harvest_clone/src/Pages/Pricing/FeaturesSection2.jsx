import { Box, Divider, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./Pricing.module.css"
const FeaturesSection2 = () => {
  return (
    
    <Box className={styles.Feature_Section_box2_sb}>
        <Divider marginBottom='80px' borderColor={'#FA5D00'} orientation='horizontal' />
      <Grid className={styles.Feature_Section_G}>
        <GridItem className={styles.Feature_Section_GI}>
          <Box className={styles.Feature_Section_GI_box1}>
            <Image className={styles.Feature_Section_GI_img}
              src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-time.svg' />
          </Box>
          <Box className={styles.Feature_Section_GI_box2}>
            <Text fontSize='26px'>Time tracking</Text>
            <Text fontSize='17px'>Simple and intuitive time tracking your team will love.</Text>
          </Box>
        </GridItem>
        <GridItem className={styles.Feature_Section_GI}>
          <Box className={styles.Feature_Section_GI_box1}>
            <Image className={styles.Feature_Section_GI_img}
              src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-reporting.svg' />
          </Box>
          <Box className={styles.Feature_Section_GI_box2}>
            <Text fontSize='26px'>Reports & analysis</Text>
            <Text fontSize='17px'>Unlock the insights that help your business thrive.</Text>
          </Box>
        </GridItem>
        <GridItem className={styles.Feature_Section_GI}>
          <Box className={styles.Feature_Section_GI_box1}>
            <Image className={styles.Feature_Section_GI_img}
              src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-invoicing.svg' />
          </Box>
          <Box className={styles.Feature_Section_GI_box2}>
            <Text fontSize='26px'>Invoicing & payments</Text>
            <Text fontSize='17px'>Seamless invoicing and fast online payments.</Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default FeaturesSection2