import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box,GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./Signup.module.css"

const LeftSection = () => {
  return (
    <Box>
      <GridItem className={styles.gridItem1}>
       <Text textAlign="start" color="#FA5D00" fontWeight="500">SEE WHY 70,000+ COMPANIES TRACK TIME WITH HARVEST</Text>
       <Text className={styles.text1}>Finally, time tracking your team actually wants to use</Text>
       <Box display="flex" marginTop="20px" >
       <CheckCircleIcon marginTop="5px" />
       <Text  textAlign="justify" >&nbsp;<b>Time Tracking.</b>Easy & intuitive time tracking that captures all your time without changing the way you work.</Text>
       </Box>
       <Box display="flex" marginTop="20px" >
       <CheckCircleIcon marginTop="5px" />
       <Text textAlign="justify">&nbsp;<b>Reports & Analysis.</b>Instantly create reports across projects. Budgets, time, team capacity, cost breakdowns, and more.</Text>
       </Box>
       <Box display="flex" marginTop="20px" >
       <CheckCircleIcon marginTop="5px" />
       <Text textAlign="justify">&nbsp;<b>Invoicing & Payments.</b>Turn tracked time into invoices. Accept online payments. Sync with QuickBooks and Xero. </Text>
       </Box>
      </GridItem>
   </Box>
  )
}

export default LeftSection
