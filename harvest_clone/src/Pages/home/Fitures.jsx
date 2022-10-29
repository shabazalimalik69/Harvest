import React from 'react'
import { Box,Text,Grid, Image, Link, Divider, GridItem, Button} from "@chakra-ui/react";
import { ArrowDownIcon } from '@chakra-ui/icons'
import styles from "./Home.module.css"
import { useNavigate } from 'react-router-dom';


const Feature = () => {
  const navigate = useNavigate();
return (
<Box className={styles.Feature_Section}>
  <Text className={styles.Feature_Section_txt}>FEATURES</Text>

  <Box className={styles.Feature_Section_box1}>
    <Text className={styles.Feature_Section_box1_txt1}>Everything your team needs to keep ticking</Text>
    <Text className={styles.Feature_Section_box1_txt2}>Intuitive time tracking and powerful insights that
      help your team thrive.</Text>
  </Box>

  <Box className={styles.Feature_Section_box2}>
    <Box className={styles.Feature_Section_box2_sb}>
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
     
      <Button colorScheme='black' bg='#1D1E1C' color='#ffff' size='lg' variant='solid' onClick={()=>{navigate("/features")}} className={styles.Feature_Section_GI_btn}>Discover all features </Button>
     
    </Box>
    <Box width="60%">
      <Image
        src='https://www.getharvest.com/hs-fs/hubfs/screenshot-home-timesheets.png?width=1700&name=screenshot-home-timesheets.png' />
    </Box>
  </Box>
  <Divider borderColor={'#FA5D00'} orientation='horizontal' />
</Box>
)
}

export default Feature;