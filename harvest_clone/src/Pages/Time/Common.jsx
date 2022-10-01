import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Common = () => {


 
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" w="100%" pl={4} pr={4} fontSize={20}>
    <Box > <Text>Mon</Text></Box>
    <Box><Text>Tue</Text></Box>
    <Box> <Text>Wes</Text></Box>
    <Box><Text>Thu</Text></Box>
    <Box><Text>Fri</Text></Box>
    <Box><Text>Sat</Text></Box>
    <Box><Text>Sun</Text></Box>
  </Box>
  )
}

export default Common