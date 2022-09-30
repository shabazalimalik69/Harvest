import React from 'react'
import { Box,Text,Grid, Image, Link, Divider, GridItem, Button} from "@chakra-ui/react";
import { ArrowDownIcon } from '@chakra-ui/icons'

import styles from "./Home.module.css"


const Intregation = () => {
  return (
    <Box className={styles.Intregation_Section} textAlign='start' mt='40px' mb='60px' display='flex' gap='50px'>
        <Box w='50%'>
          <Image w='90%'  src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illustrations/integrations-home.svg'/>
        </Box>
        <Box w='50%'>
          <Text fontSize="20px" fontWeight='600' mb='18px' color='#FA5D00'>INTEGRATIONS</Text>
          <Text fontSize="42px" fontWeight='400' mb='20px' color='#1D1E1C'>EIntegrated with the tools your team already knows and loves
          </Text>
          <Text fontSize="26px" fontWeight='400' mb='20px' color='#1D1E1C'>Your favorite apps work seamlessly with Harvest so you can keep projects on track however you work.
          </Text>
          <Button bg='#1D1E1C' color='#ffff' margin='40px 0' size='lg' borderRadius='15px'> Browse integrations </Button>   
        </Box>
      
    </Box>
  )
}

export default Intregation;
