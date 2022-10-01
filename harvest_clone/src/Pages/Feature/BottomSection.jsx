import { Box, Button, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./Feature.module.css";

const BottomSection = () => {
  const navigate = useNavigate();
  return (
    <Box width="100%" backgroundColor="white">
      <Grid pt="70px" className={styles.grid4}>
        <GridItem className={styles.gridItem5}>
        <Text className={styles.text4}>Start tracking time today</Text>
         <Text className={styles.text5}>Join 70,000+ companies spending their time wisely with Harvest.</Text>
         <Button display="block" alignItems = "flex-start" color="white" backgroundColor="#FA5D00" borderRadius="10px" onClick={()=>{navigate("/signup")}}>try Harvest free</Button>
        </GridItem>
        <GridItem mb="70px" className={styles.gridItem6}>
          <Image src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg' />
        </GridItem>
      </Grid>
    </Box>

  )
}

export default BottomSection
