import React from 'react'
import { Box,Text,Grid, Image, Link, Divider, GridItem, Button} from "@chakra-ui/react";
import { ArrowDownIcon } from '@chakra-ui/icons'

import styles from "./Home.module.css"


const Intregation = () => {
  return (
    <Box className={styles.Intregation_Section}>
        <Box  className={styles.Intregation_Section_box1}>
          <Image src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illustrations/integrations-home.svg' className={styles.Intregation_Section_box1_img}/>
        </Box>
        <Box className={styles.Intregation_Section_box2}>
          <Text className={styles.Intregation_Section_box2_txt1}>INTEGRATIONS</Text>
          <Text className={styles.Intregation_Section_box2_txt2}>EIntegrated with the tools your team already knows and loves
          </Text>
          <Text className={styles.Intregation_Section_box2_txt_3}>Your favorite apps work seamlessly with Harvest so you can keep projects on track however you work.
          </Text>
          <Link to="/intregations">
          <Button bg='#1D1E1C' color='#ffff' margin='40px 0' size='lg' borderRadius='15px' className={styles.Intregation_Section_box2_btn}> Browse integrations </Button>   </Link>
        </Box>
      
    </Box>
  )
}

export default Intregation;
