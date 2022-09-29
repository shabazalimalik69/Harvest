import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import styles from './Home.module.css';
const Learning = () => {
  return (
    <Box className={styles.Learning_Section} textAlign='start' mt='40px'>
        <Box>
        <Text fontSize="20px" fontWeight='600' mb='18px' color='#FA5D00'>LEARNING RESOURCES</Text>
        <Text fontSize="42px" fontWeight='400' mb='20px' color='#1D1E1C'>Supporting your team along the way.</Text>
        </Box>
        <Box>

        </Box>

    </Box>
  )
}

export default Learning