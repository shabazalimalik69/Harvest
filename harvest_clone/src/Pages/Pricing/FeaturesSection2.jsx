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
              src='https://res.cloudinary.com/spiralyze/image/upload/v1656310941/Harvest/2016_Harvest_Pricing_Big_Redesign-20220621/Money.svg' />
          </Box>
          <Box className={styles.Feature_Section_GI_box2}>
            <Text fontSize='26px'>$7.4 billion</Text>
            <Text fontSize='17px'>Lost per day due to incorrectly recorded work activities</Text>
          </Box>
        </GridItem>
        <GridItem className={styles.Feature_Section_GI}>
          <Box className={styles.Feature_Section_GI_box1}>
            <Image className={styles.Feature_Section_GI_img}
              src='https://res.cloudinary.com/spiralyze/image/upload/v1656310706/Harvest/2016_Harvest_Pricing_Big_Redesign-20220621/less-admintime.svg' />
          </Box>
          <Box className={styles.Feature_Section_GI_box2}>
            <Text fontSize='26px'>
80%</Text>
            <Text fontSize='17px'>Less admin with automated time tracking</Text>
          </Box>
        </GridItem>
        <GridItem className={styles.Feature_Section_GI}>
          <Box className={styles.Feature_Section_GI_box1}>
            <Image className={styles.Feature_Section_GI_img}
              src='https://res.cloudinary.com/spiralyze/image/upload/v1656311111/Harvest/2016_Harvest_Pricing_Big_Redesign-20220621/Employee_Tracking.svg' />
          </Box>
          <Box className={styles.Feature_Section_GI_box2}>
            <Text fontSize='26px'>$52,000</Text>
            <Text fontSize='17px'>Extra billable time per employee with better time tracking</Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default FeaturesSection2